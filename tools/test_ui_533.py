import unittest
from pathlib import Path
ROOT=Path(__file__).resolve().parent.parent
class UIRegression533(unittest.TestCase):
 def test_suggestions_left_and_inline(self):
  css=(ROOT/'assets/css/style.css').read_text()
  js=(ROOT/'assets/js/app.js').read_text()
  self.assertIn('.search-wrap .inline-suggestions .inline-suggestion-item',css)
  self.assertIn('justify-content:flex-start',css)
  self.assertIn('flex-direction:row',css)
  self.assertIn('id === "laborSearch" ? ""',js)
 def test_conclusion_and_fixed_checklist(self):
  css=(ROOT/'assets/css/style.css').read_text()
  self.assertIn('#recommendation .conclusion-reason-row',css)
  self.assertIn('margin:3px 0 0',css)
  self.assertIn('#checklist .check-row',css)
  self.assertIn('#note {height:230px',css)
if __name__=='__main__':unittest.main()
