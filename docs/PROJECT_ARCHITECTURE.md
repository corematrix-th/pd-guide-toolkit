# PROJECT ARCHITECTURE

## Overview
PD Guide Toolkit is a data-driven troubleshooting toolkit.

## Architecture
PD_Guide_Database.xlsx
    ↓ generate_database.py
    ├─ database.js
    └─ Reference_Text/*.txt
        ↓ validate_database.py
Application UI
    ↓
Module Navigation / Global Search
    ├─ Troubleshooting → Checklist / Email / Generate Note / Related Guide / Dispatch
    ├─ Error Post → Error Code + BIOS/Supervisor Password Knowledge Base
    └─ User Guide → categorized Troubleshooting Guide Knowledge Base
        + background Diagnostics

## Layers
1. Excel Data Layer
2. Generated Runtime + Human Reference Layer
3. Toolkit Knowledge Layer (BIOS / Code / User Guide)
4. Business Logic Layer
5. UI + Global Search Layer
6. Validation and Documentation Layer

## Data Source Rules
- Excel is the source of truth for product-facing data.
- Never edit checklist, dropdown, email, or related-guide values directly in JavaScript.
- Regenerate `database.js` after Excel changes.
- `Reference_Text/*.txt` is generated; do not maintain its hierarchy manually.
- Related Guide Keys are resolved through `Related_Guide_Master`.

## Adding a New Symptom
1. Add Related Guide if needed.
2. Update `TROUBLESHOOTING_GUIDE.md` when guide content is required.
3. Add the guide key to `Related_Guide_Master`.
4. Add the new symptom rows in the appropriate product sheet.
5. Run `python generate_database.py` (this also refreshes Reference_Text).
6. Run `python validate_database.py`.
7. Test UI, background Diagnostics, and business logic.
8. Update CHANGELOG.

## Release Flow
Edit Excel / Toolkit-owned knowledge → Generate JS + Reference Text → Validate → Browser Test → Audit → Release

## Labor Mapping (v5.2.5)
`Labor Mapping.xlsx` → `python generate_database.py` → `labor_mapping.js` → LABOR MAPPING UI.
The source Postal Code ranges are preserved exactly. The Labor Mapping search is independent from Search All.


## v5.2.6 Related Guide Popup
- v5.2.6: SYMPTOMS Related Guide icons resolve to the shared GUIDE dataset and open in-place modal content.
