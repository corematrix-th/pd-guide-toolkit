PD Guide Toolkit v5.2.6

Online presence (v5.2.6):
- Online counts unique browser/profile IDs, not tabs.
- Hybrid Presence: an open Toolkit tab remains Online without requiring clicks, typing, scrolling, or mouse activity.
- Each connected tab refreshes a Firebase lastSeen heartbeat every 5 minutes.
- Normal browser/tab closes are removed immediately through onDisconnect()/page cleanup when the disconnect is observed.
- Sleep, network loss, or orphaned sessions are excluded after 30 minutes without a heartbeat.
- Chrome + Edge count separately because they have different browser/profile IDs; multiple tabs in the same browser/profile still count as one Online user.

Open index.html to start the Toolkit.

MASTER DATABASE
PD_Guide_Database.xlsx is the sole source of truth for product-facing checklist data.
Labor Mapping.xlsx is the sole source of truth for Labor Mapping Province / Postal Code routing.

Workflow:
PD_Guide_Database.xlsx + Labor Mapping.xlsx
        ↓
python generate_database.py
        ↓
database.js + labor_mapping.js + Reference_Text/*.txt
        ↓
python validate_database.py
        ↓
Toolkit

PD_Guide_Database.xlsx structure:
- Thinkpad
- Ideapad
- Desktop
- Tiny
- AIO
- Dropdown_Master
- Related_Guide_Master
- README

Labor Mapping.xlsx rules:
- Keep the original State/Province and Postal Code ranges exactly as supplied.
- Do not merge adjacent Postal Code ranges automatically. Vendor mapping may differ by range.
- Standard / Premium care and Premier Support retain their own SAP Account Number, Labor Vendor ID, and Premier Vendor.
- The Toolkit displays Labor Vendor ID and Premier Vendor; SAP Account Number remains stored in runtime data for future use.
- After editing Labor Mapping.xlsx, run python generate_database.py and python validate_database.py.

Dropdown values are stored as DDxxx IDs and resolved through Dropdown_Master.
Related guides are stored as readable keys and resolved through Related_Guide_Master.
Reference_Text files are generated mirrors of the visible runtime structure; do not maintain their hierarchy manually.
Do not edit checklist, dropdown, email, related-guide, or Labor Mapping runtime text directly in JavaScript.

Checklist scope rules:
- Windows, Battery, Network, Storage, Audio, and Camera must not contain Physical Damage.
- Desktop, Tiny, and AIO external-device levels Monitor, Adapter, Keyboard, and Mouse must contain exactly one FRU P/N.
- Wherever FRU P/N exists, it must be the final checklist item for that symptom.
- Monitor checklists must not contain Other Issue.
- Swap SSD, Swap RAM, Swap SSD / HDD, and Swap PSU must not appear in customer-facing checklists.

Dropdown control syntax:
- Text Input = textbox only
- Blank | Text Input = placeholder-only dropdown plus textbox
- No|Yes = dropdown only
- No|Yes | Text Input = dropdown plus textbox
- Empty Dropdown ID = no dropdown and no textbox

Diagnostics:
- Runtime diagnostics run silently in the background when the Toolkit loads; there is no user-facing Diagnostics button.
- Runtime diagnostics validate the Labor Mapping dataset count and required vendor fields.
- Background diagnostics are a runtime aid; the release gate remains python validate_database.py.

Selective Related Guide popup (v5.2.6):
- SYMPTOMS no longer renders a separate Related Guide card below the checklist.
- Selected complex checklist steps show a small ⓘ beside the checklist label.
- Clicking ⓘ opens the existing Guide popup without leaving SYMPTOMS or clearing checklist answers.
- Popup content is read from the same GUIDE source; no duplicate guide text is maintained in app.js.
- Basic procedures such as Power Reset and Emergency Reset intentionally have no ⓘ.
- For the Windows Recovery multi-guide mapping, only Reset This PC is exposed as a popup; Startup Repair and System Restore are not shown.

Navigation v5.2.6:
- SYMPTOMS contains the product troubleshooting workflow.
- ERROR POST provides the Error/Post reference library, including BIOS Password and Supervisor Password.
- GUIDE provides the direct User Guide library.
- LABOR MAPPING provides an independent Province / Postal Code search.
- Search All searches SYMPTOMS, ERROR POST, and GUIDE only. Labor Mapping is intentionally excluded.
- Labor Mapping has its own search box and accepts Province name or a 5-digit Postal Code.
- Province and Postal Code searches use the same result columns: Postal Code, Province, Support Type, Labor Vendor ID, Premier Vendor.
- A dedicated Clear button beside the Labor Mapping search resets the query and results.
- Postal Code lookup returns every source row whose range contains that code; it does not guess between overlapping source mappings.

Run python generate_database.py and python validate_database.py before packaging every release.

Version 5.2.6
