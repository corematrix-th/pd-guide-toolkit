# Standard Update Workflow

1. Edit `PD_Guide_Database.xlsx` for Excel-owned data, or edit Toolkit-owned JavaScript/Markdown logic as appropriate.
2. Validate all five product sheets, Dropdown syntax, and Related Guide Keys.
3. Run `python generate_database.py`; this regenerates `database.js` and all `Reference_Text` hierarchy files.
4. Run `python validate_database.py`; stop if any error is reported.
5. Test Level 1, Symptom, Checklist, Dropdown/Text Input, Email TH/EN, Related Guide, and background Diagnostics for each product.
6. Test Generate Note, Dispatch, BIOS, Code, Troubleshooting Guide, and FRU logic.
7. Confirm the automated Dispatch and Generate Note regression scenarios pass.
8. Update every version/cache reference and release document.
9. Package the release inside one top-level version folder.
