# PD Guide Toolkit v5.3.0 — Release Notes

## Implemented
- Retained desktop 90% CSS zoom from the supplied UI-90% build (mobile unchanged).
- Conclusion is now a single `Result : Dispatch [Part]`, `Result : FOP`, `Result : Escalate L2`, etc. No separate Part row.
- Added small Thai `Reason` below Result, generated locally from selected evidence without AI or internet. Common symptoms use a conservative general explanation; No Power has tailored explanations.
- Fixed case-insensitive matching of checklist labels so the actual `Emergency Reset`, `Swap Other Type-C Port`, `Adapter Test on Other Machine`, `Physical Damage` and `Liquid Spilled` names are recognized.
- Improved ThinkPad/IdeaPad Boot > No Power logic: working adapter cross-test does not dispatch Adapter; full eight-answer example proposes Mainboard subject to model-specific FRU verification; partial evidence remains Pending; conflicting adapter tests require review.
- Added regression cases to smoke_test.js for the eight-answer case, partial cross-test, contradictory evidence, and Thai reason.
- Existing Excel master and generated database unchanged.

## Important limits
- This is not a verified model-by-model Lenovo FRU decision system. `Dispatch Mainboard` must be checked against the specific model and charging-board design before actual dispatch.
- General-purpose rules in v5.2.9 are retained for other symptoms; their coverage and correctness have NOT been independently validated across all combinations.
- Thai reasons for other symptoms are generic evidence summaries, not individually audited symptom-specific rules.
- Live Firebase and visual browser testing have not been performed.

## Checks
- `python validate_database.py` (requires original generated database files)
- `python -m unittest test_pipeline.py -v`
- `node smoke_test.js`
- `node --check app.js`
