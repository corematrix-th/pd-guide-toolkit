PD Guide Toolkit v5.2.3

Open index.html to start the Toolkit.

MASTER DATABASE
PD_Guide_Database.xlsx is the sole source of truth for product-facing checklist data.

Workflow:
PD_Guide_Database.xlsx
        ↓
python generate_database.py
        ↓
database.js + Reference_Text/*.txt
        ↓
python validate_database.py
        ↓
Toolkit

Workbook structure:
- Thinkpad
- Ideapad
- Desktop
- Tiny
- AIO
- Dropdown_Master
- Related_Guide_Master
- README

Dropdown values are stored as DDxxx IDs and resolved through Dropdown_Master.
Related guides are stored as readable keys and resolved through Related_Guide_Master.
Reference_Text files are generated mirrors of the visible runtime structure; do not maintain their hierarchy manually.
Do not edit checklist, dropdown, email, or related-guide text directly in JavaScript.

Checklist scope rules:
- Windows, Battery, Network, Storage, Audio, and Camera must not contain Physical Damage.
- Desktop, Tiny, and AIO external-device levels Monitor, Adapter, Keyboard, and Mouse must contain exactly one FRU P/N.
- Wherever FRU P/N exists, it must be the final checklist item for that symptom.
- Monitor checklists must not contain Other Issue.

Dropdown control syntax:
- Text Input = textbox only
- Blank | Text Input = placeholder-only dropdown plus textbox
- No|Yes = dropdown only
- No|Yes | Text Input = dropdown plus textbox
- Empty Dropdown ID = no dropdown and no textbox

Diagnostics:
- Runtime diagnostics run silently in the background when the Toolkit loads; there is no user-facing Diagnostics button.
- Background diagnostics are a runtime aid; the release gate remains python validate_database.py.

Run python generate_database.py and python validate_database.py before packaging every release.

Version 5.2.3
