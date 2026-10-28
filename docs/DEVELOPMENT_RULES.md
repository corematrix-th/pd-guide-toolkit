# v5.2.9 maintenance update

Explicit UTF-8 subprocess decoding and isolated master/runtime comparison are required. Run test_pipeline.py alongside the existing release validator. See RELEASE_REPORT.md for verified results and limitations.

# Development Rules — v5.2.9

## Excel-first rule
Changes to Level 1, Symptom / Guide, Checklist, Dropdown ID, Email TH, Email EN, or Related Guide Key must be made in `PD_Guide_Database.xlsx` first. The Toolkit copy may be regenerated only after Excel is saved and validated. When Excel and Toolkit differ, Excel is authoritative.

## Data versus logic
Excel owns user-facing product data. JavaScript owns BIOS, Code, Troubleshooting Guide presentation, Generate Note, Dispatch, FRU logic, model rules, and exceptions. JavaScript must not rename, insert, delete, reorder, or override Excel-owned checklist rows.

## Product inheritance
ThinkPad is the Notebook master; IdeaPad overrides only genuine hardware differences. Desktop is the Desktop-family master; Tiny and AIO override only genuine differences. Notebook Keyboard remains separate from Desktop/Tiny/AIO Keyboard.

## Checklist scope
- Do not include `Physical Damage` in Windows, Battery, Network, Storage, Audio, or Camera.
- Desktop, Tiny, and AIO Monitor, Adapter, Keyboard, and Mouse checklists require exactly one `FRU P/N` row.
- Wherever `FRU P/N` exists, place it as the final checklist item for that symptom.
- Do not include `Other Issue` in Monitor.

## Generate Note detail formatting
The Detail value for `FRU P/N` and `Specific Keys Listed` must be converted to uppercase in Generate Note. Match these labels case-insensitively and output the canonical labels `FRU P/N` and `Specific Keys Listed`.

## Dropdown parser
`Text Input` = textbox only. `Blank | Text Input` = placeholder-only dropdown plus textbox. Values separated by `|` = dropdown choices. Adding `| Text Input` also adds a textbox. An empty Dropdown ID creates neither dropdown nor textbox. Internal control tokens must never become choices.

## Related Guide resolver
Related Guide Keys must exist in `Related_Guide_Master`. Generation resolves keys to display names. Multiple keys are separated by `|`.

## New Level 1 or Symptom
The generator preserves existing stable JavaScript keys when names already exist. A new Excel-owned Level 1 or Symptom receives a stable generated slug and becomes available without manually editing `database.js`.

## Generated Reference Text
`Reference_Text/*.txt` is a generated human-readable mirror of the visible runtime structure. Do not edit its hierarchy manually. `generate_database.py` refreshes it and `validate_database.py` rejects drift.

## Diagnostics metadata
`database.js` must contain generated `DATABASE_META` that matches the current release and runtime checklist count.

## Release validation
Run `python generate_database.py`, then `python validate_database.py`. The release must have zero validation errors before packaging. The smoke test must confirm that the site-statistics/Firebase block remains present, uses `.info/connected` presence cleanup, and does not expose the Diagnostics button in the normal UI.

## v5.2.5 Labor Mapping
- `Labor Mapping.xlsx` is the master source for Province / Postal Code labor routing.
- `generate_database.py` generates `labor_mapping.js` and preserves every source Postal Code range exactly.
- `Search All` remains scoped to SYMPTOMS / ERROR POST / GUIDE; Labor Mapping uses its own search.
- `validate_database.py` verifies `labor_mapping.js` is an exact generated mirror of the Excel source.
- Labor Mapping Province and Postal Code searches must render the same five columns: Postal Code, Province, Support Type, Labor Vendor ID, Premier Vendor.
- Keep a labeled `Clear` action directly beside the Labor Mapping search field.


## v5.2.6 Related Guide Popup
- v5.2.6 Related Guide rule: do not render a generic Related Guide footer. Use the selective inline ⓘ policy and source popup content from GUIDE data.


## v5.2.8 Session-safe troubleshooting
- Keep checklist answers, free-text details, Additional Detail, and generated Result/Email text when switching top-level modules and returning to SYMPTOMS in the same browser session.
- Clear removes the saved state for the current troubleshooting selection.
- Related Guide popup supports Close, Escape, and backdrop click without changing the active troubleshooting selection.
