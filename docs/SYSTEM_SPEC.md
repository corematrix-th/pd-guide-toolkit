# SYSTEM SPECIFICATION — v5.2.9

## Features
- Checklist
- Email TH
- Email EN
- Generate Note
- Related Guide
- Dispatch
- Diagnostics

## Search
Search All covers SYMPTOMS, ERROR POST, and GUIDE. LABOR MAPPING has independent Province / Postal Code search.

## Related Guide
Workbook keys are resolved through `Related_Guide_Master`. Approved complex checklist steps show an inline ⓘ that opens shared GUIDE content in a popup while preserving checklist answers.

## Generate Note
Uses runtime decision rules and current checklist answers.
- Detail entered for `FRU P/N` is output in uppercase.
- Detail entered for `Specific Keys Listed` is output in uppercase.

## Checklist scope and order
- Physical Damage is excluded from Windows, Battery, Network, Storage, Audio, and Camera.
- Desktop, Tiny, and AIO external-device levels Monitor, Adapter, Keyboard, and Mouse require exactly one FRU P/N.
- Wherever FRU P/N exists, it must be the final checklist item for that symptom.
- Monitor excludes Other Issue.

## Generated runtime metadata
`database.js` contains `DATABASE_META` with the release version, source workbook name, product-sheet count, checklist-row count, dropdown count, and related-guide count.

## Diagnostics
Runtime Diagnostics run silently in the background when the Toolkit loads. They check duplicate labels, dropdown control-token leakage, related-guide resolution, scope rules, FRU count/order, and metadata row counts. No Diagnostics control is exposed in the user UI; the release gate is still `validate_database.py`.

## Reference Text
`Reference_Text/*.txt` is generated from the same visible model structure used by the Toolkit. `validate_database.py` fails if a reference file drifts from the generated structure.

## Validation
`validate_database.py` checks master data, generated runtime data, guide references, duplicates, dropdown control tokens, checklist scope, FRU P/N final position, reference-text synchronization, Generate Note/Dispatch regressions, JavaScript syntax, runtime diagnostics, and version markers.

## Versioning
Update all visible version strings and cache references before release.

## Documentation
Maintain CHANGELOG, TODO, FULL_AUDIT, DEVELOPMENT_RULES, AI_MEMORY, AI_HANDOVER_GUIDE, and RELEASE_REPORT.

## Labor Mapping (v5.2.5)
`Labor Mapping.xlsx` → `python generate_database.py` → `labor_mapping.js` → LABOR MAPPING UI.
The source Postal Code ranges are preserved exactly. The Labor Mapping search is independent from Search All.


## v5.2.7 Related Guide Popup
- v5.2.7: Related Guide access in SYMPTOMS is selective and inline via ⓘ; popup content comes from GUIDE data.


## v5.2.8 Session-safe workflow
- Troubleshooting work is retained in-memory per Product / Level 1 / Symptom while navigating between modules.
- Restored fields: dropdown answers, checklist text inputs, Additional Detail, and Result / Email text.
- Clear removes the retained state for the active troubleshooting selection.
- Related Guide modal supports Escape and backdrop close with ARIA dialog semantics.
