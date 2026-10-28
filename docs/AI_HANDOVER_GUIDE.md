# v5.2.9 maintenance update

Explicit UTF-8 subprocess decoding and isolated master/runtime comparison are required. Run test_pipeline.py alongside the existing release validator. See RELEASE_REPORT.md for verified results and limitations.

# AI Handover Guide — PD Guide Toolkit v5.2.9

## Source of truth
`PD_Guide_Database.xlsx` is the master source for Level 1, Symptom / Guide, Checklist, Dropdown ID, Email TH, Email EN, and Related Guide Key. Edit Excel first, run `python generate_database.py`, then run `python validate_database.py`.

## Generated artifacts
`generate_database.py` produces `database.js` and refreshes all five `Reference_Text/*.txt` hierarchy files. Do not hand-maintain Reference_Text hierarchy. `database.js` also contains `DATABASE_META` for version/source/count diagnostics.

## Logic kept in Toolkit
BIOS, Code, Troubleshooting Guide content, Generate Note, Dispatch decisions, model-specific behavior, and exception rules remain in JavaScript or Markdown knowledge files. FRU P/N checklist rows and their order are Excel-owned data.

## Product templates
- ThinkPad is the Notebook master. IdeaPad follows ThinkPad unless hardware differs.
- Desktop is the Desktop-family master. Tiny and AIO follow Desktop unless hardware differs.
- Keyboard data for Notebook and Desktop families remains separate.

## Dropdown syntax
- `Text Input`: textbox only.
- `Blank | Text Input`: placeholder-only dropdown plus textbox.
- `No|Yes`: dropdown only.
- `No|Yes | Text Input`: dropdown plus textbox.
- Empty Dropdown ID: no dropdown and no textbox.

Control tokens `Blank` and `Text Input` must never appear as visible options.

## Generate Note detail rules
- `FRU P/N` detail is output in uppercase.
- `Specific Keys Listed` detail is output in uppercase and uses the canonical Title Case label.

## Diagnostics
Runtime Diagnostics are a silent consistency aid executed in the background. No Diagnostics button is exposed in the normal user UI. The checks cover live structure/count/scope integrity but do not replace release validation.

## Release gate
Run `python generate_database.py`, then `python validate_database.py`. The validator checks workbook structure, duplicate checklist rows, unknown Dropdown IDs, unknown Related Guide Keys, internal control tokens, checklist scope, FRU P/N placement, guide headings, JavaScript syntax, runtime duplication, unresolved related guides, Reference_Text drift, Dispatch/Generate Note smoke regressions, runtime Diagnostics, and version markers.

## v5.2.5 Labor Mapping
- `Labor Mapping.xlsx` is the master source for Province / Postal Code labor routing.
- `generate_database.py` generates `labor_mapping.js` and preserves every source Postal Code range exactly.
- `Search All` remains scoped to SYMPTOMS / ERROR POST / GUIDE; Labor Mapping uses its own search.
- `validate_database.py` verifies `labor_mapping.js` is an exact generated mirror of the Excel source.


## v5.2.6 Related Guide Popup
- Selective Related Guide UI: SYMPTOMS uses inline ⓘ on approved complex checklist steps; clicking opens a popup and must not navigate away or clear checklist state.


## v5.2.8 Session state and copy
- Troubleshooting values are retained in memory per Product / Level 1 / Symptom while the page remains open.
- Returning from ERROR POST, GUIDE, or LABOR MAPPING restores checklist selections, text inputs, Additional Detail, and Result/Email text.
- `Clear` deletes the current selection's retained state.
- Related Guide popup closes with the Close button, Escape key, or backdrop click.
