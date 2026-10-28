"""Regression checks for UTF-8 and Excel/runtime drift; uses disposable copies."""
import shutil
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch
import validate_database as validator
from generate_database import extract_template


class PipelineTests(unittest.TestCase):
    def test_thai_runtime_round_trip(self):
        data = extract_template(validator.OUTPUT)
        self.assertTrue(data['LEVELS'])
        self.assertTrue(any('\u0e00' <= char <= '\u0e7f' for char in str(data)))

    def test_clean_and_drifted_runtime(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            for name in ('generate_database.py', 'PD_Guide_Database.xlsx',
                         'Labor Mapping.xlsx', 'database.js', 'labor_mapping.js'):
                shutil.copy2(validator.ROOT / name, root / name)
            with patch.object(validator, 'ROOT', root):
                self.assertEqual(validator.validate_generated_sync(), [])
                path = root / 'database.js'
                original = path.read_text(encoding='utf-8')
                changed = original.replace('"emailEN":"', '"emailEN":"DRIFT ')
                self.assertNotEqual(original, changed)
                path.write_text(changed, encoding='utf-8')
                self.assertTrue(any('database.js differs' in message
                                    for message in validator.validate_generated_sync()))
                self.assertEqual(path.read_text(encoding='utf-8'), changed)


if __name__ == '__main__':
    unittest.main()
