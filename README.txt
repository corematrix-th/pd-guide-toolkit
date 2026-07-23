PD Guide Toolkit v5.1.6

Open index.html to start the Toolkit.

MASTER DATABASE
PD_Guide_Database.xlsx is the sole source of truth for model checklist data.

Workflow:
PD_Guide_Database.xlsx
        ↓
Generate database.js
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
Do not edit checklist text directly in JavaScript.

Version 5.1.6
