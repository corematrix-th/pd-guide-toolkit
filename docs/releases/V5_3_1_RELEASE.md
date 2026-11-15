# PD Guide Toolkit v5.3.1

- Desktop scale 90% to 95%. Mobile stays at native scale.
- Conclusion Result red; Reason heading and Thai text black.
- Adds Suspect status for unresolved probable parts, including shared Boot No Power / Port Can't Charge power-path evidence.
- Escalate L2 reason only when no suspected part is identifiable.
- Prevents checklist completion alone from causing default Dispatch without positive test evidence.

## Limitations

Suspect identification is heuristic and does not verify model-specific FRUs. Existing confirmed rules remain; full symptom-by-symptom hardware validation and browser/Firebase QA are still outstanding.

## QA
- `node --check app.js`: PASS
- `node smoke_test.js`: PASS
- `python -m unittest test_pipeline -q`: 2/2 PASS
- `python validate_database.py`: PASS, one legacy version-marker warning (validator expects v5.2.9).
