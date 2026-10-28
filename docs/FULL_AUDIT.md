# Full Audit — v5.2.9

## Scope
This release corrects only `Desktop > Monitor > Flickering` product-facing troubleshooting data and release metadata.

## Verified Desktop Flickering checklist
1. Check BIOS
2. swap HDMI cable
3. Monitor Test on Other Machine
4. Swap Monitor
5. Graphics Driver Update
6. Physical Damage
7. Liquid Spilled
8. FRU P/N

Notebook-only steps `Move LCD Lid` and `External Monitor Test` are not present in this Desktop symptom. `FRU P/N` remains the final checklist item.

## Unchanged scope
- Labor Mapping source data is unchanged.
- Dropdown Master and Related Guide Master are unchanged.
- Session-state, popup, search, dispatch, and Firebase presence behavior are unchanged.

## Release gate
`generate_database.py`, `smoke_test.js`, `test_pipeline.py`, and `validate_database.py` must pass before packaging v5.2.9.
