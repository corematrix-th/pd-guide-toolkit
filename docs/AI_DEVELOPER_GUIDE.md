# AI DEVELOPER GUIDE — v5.2.6

## Mandatory Rules
- Follow DEVELOPMENT_RULES.md.
- Preserve Title Case.
- Keep the standard Generate Note style, except fields with explicit output rules.
- Normalize BIOS, LED, LCD, SSD, HDD, USB, Wi‑Fi, and Bluetooth.
- Avoid duplicate checklists.
- Edit Excel before generated product data.
- Never hand-edit the hierarchy in `Reference_Text`; regenerate it with `generate_database.py`.
- Preserve the Physical Damage, Monitor Other Issue, external-device FRU scope, and FRU-final-position rules.
- Preserve uppercase Generate Note output for `FRU P/N` and `Specific Keys Listed` detail.
- Preserve runtime Diagnostics and `DATABASE_META` consistency.
- Update documentation for every release.

## Before Editing
Understand the Excel → generate (`database.js` + `Reference_Text`) → validate → runtime workflow before changing data or logic.

## After Editing
- Run `python generate_database.py` for Excel-owned changes and whenever structure references must be refreshed.
- Run `python validate_database.py`.
- Verify UI, Related Guide, Email TH/EN, Generate Note, Dispatch, and background Diagnostics.
- Verify every existing FRU P/N is last and Desktop/Tiny/AIO external-device FRU count remains correct.
- Verify `FRU P/N` and `Specific Keys Listed` detail is uppercase in Generate Note.
- Verify Dispatch and Generate Note smoke regressions pass.
- Verify the top-right `Visitors | Views | Online` site statistics remain present and the Firebase presence/error handling is intact.
- Verify every version and cache reference.

## Labor Mapping (v5.2.5)
`Labor Mapping.xlsx` → `python generate_database.py` → `labor_mapping.js` → LABOR MAPPING UI.
The source Postal Code ranges are preserved exactly. The Labor Mapping search is independent from Search All.


## v5.2.6 Related Guide Popup
- v5.2.6: preserve the selective ⓘ popup policy; do not reintroduce the bottom Related Guide card.
