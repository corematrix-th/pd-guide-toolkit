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
            for original_file in (validator.ROOT / 'tools/generate_database.py', validator.XLSX,
                                  validator.LABOR_XLSX, validator.OUTPUT, validator.LABOR_OUTPUT):
                destination = root / original_file.relative_to(validator.ROOT)
                destination.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(original_file, destination)
            with patch.object(validator, 'ROOT', root), \
                 patch.object(validator, 'TOOLS', root / 'tools'), \
                 patch.object(validator, 'XLSX', root / 'source/PD_Guide_Database.xlsx'), \
                 patch.object(validator, 'LABOR_XLSX', root / 'source/Labor Mapping.xlsx'), \
                 patch.object(validator, 'OUTPUT', root / 'assets/js/database.js'), \
                 patch.object(validator, 'LABOR_OUTPUT', root / 'assets/js/labor_mapping.js'):
                path = root / 'assets/js/database.js'
                self.assertEqual(validator.validate_generated_sync(), [])
                original = path.read_text(encoding='utf-8')
                changed = original.replace('"emailEN":"', '"emailEN":"DRIFT ')
                self.assertNotEqual(original, changed)
                path.write_text(changed, encoding='utf-8')
                self.assertTrue(any('database.js differs' in message
                                    for message in validator.validate_generated_sync()))
                self.assertEqual(path.read_text(encoding='utf-8'), changed)


if __name__ == '__main__':
    unittest.main()
