## v5.2.9 — Desktop Monitor Flickering Correction

- Corrected `Desktop > Monitor > Flickering` so it no longer uses notebook-only steps (`Move LCD Lid`, `External Monitor Test`).
- Desktop flickering now uses: `Check BIOS`, `swap HDMI cable`, `Monitor Test on Other Machine`, `Swap Monitor`, `Graphics Driver Update`, `Physical Damage`, `Liquid Spilled`, `FRU P/N`.
- Updated the BIOS and HDMI checklist instructions in this path to match their labels.

## v5.2.8 — Session-Safe Troubleshooting (revised)
- Preserved checklist answers, text details, Additional Detail, and Result/Email text while switching between top-level modules and returning to SYMPTOMS.
- Revised build removes the Copy Result action from the UI.
- Added Escape/backdrop close and ARIA dialog semantics to Related Guide popup.
- Added regression coverage for restored checklist state and the new UI behavior.
- Updated workbook README release metadata to v5.2.8.

# v5.2.7 — Windows UTF-8 and master-data validation

- Fixed Windows decoding failures when reading Thai Node output.
- Added isolated regeneration to detect Excel/runtime drift.
- Added pipeline regressions and corrected stale system descriptions.
- Source Excel files are unchanged; their README version produces one documented warning.

# v5.2.6

## v5.2.6 — Selective Related Guide Popups
- Replaced the legacy Related Guide chip/card in SYMPTOMS with a compact inline `ⓘ` beside selected checklist labels.
- Related Guide popups open over the current SYMPTOMS screen and preserve the active product, symptom, checklist answers, and scroll workflow.
- Popup text now reads directly from the current GUIDE data, fixing the broken legacy modal resolver.
- Limited popup icons to complex/procedural guides such as Lenovo Diagnostics, Re-install Windows, Reset This PC, Dump File, Battery Health, Battery Report, Fn & Ctrl Key Swap, SSD Not Found During Install OS, Disable Audio Enhancements, and Lock on Leave Function.
- Startup Repair, System Restore, Power Reset, and Emergency Reset are intentionally not exposed as checklist popup icons.
- Online presence patch: replaced the 15-minute activity-only model with Hybrid Presence. Open Toolkit pages send a 5-minute heartbeat, normal disconnects still clean up immediately, and stale sessions are excluded after 30 minutes.
- Online heartbeat age uses Firebase server-time offset to avoid client-clock skew.

# v5.2.5

## v5.2.5 — Labor Mapping
- Added `LABOR MAPPING` as a fourth main menu.
- Added independent Province / 5-digit Postal Code search; Global Search does not include Labor Mapping.
- Added comparison output for Standard / Premium care vs Premier Support showing Labor Vendor ID and Premier Vendor.
- Added `Labor Mapping.xlsx` as the editable master source and `labor_mapping.js` as generated runtime data.
- Preserves all original Postal Code ranges without automatic merging.
- Added Labor Mapping generation, runtime diagnostics, validation, and smoke-test coverage.
- UI patch: Province and Postal Code searches now use the same five-column result table: Postal Code, Province, Support Type, Labor Vendor ID, Premier Vendor.
- UI patch: added a labeled `Clear` button beside the Labor Mapping search field; it clears the query and resets the result area.

# v5.2.4

## v5.2.4 — Global Navigation, Code Library, and User Guide Library
- Added top-level `Troubleshooting`, `Code`, and `User Guide` navigation while preserving the existing troubleshooting workflow.
- Moved Error Code browsing into a dedicated Error Post library with a direct `ERROR POST` list; Code categories remain internal metadata for validation/search rather than an extra navigation step.
- Moved Troubleshooting Guide browsing into a dedicated categorized User Guide library.
- Added Global Search across Troubleshooting, Code, and User Guide with direct navigation to the selected result.
- Added Code categories: BIOS / Firmware, Power / Battery, Boot / Storage, Network / PXE, System Information, and Chassis / Security.
- User Guide categories are now ordered as: All, Windows, Diagnostics, Recovery, Power, Battery, Storage, Display, Audio, Lenovo Vantage, USB / Port, Security / Activation, BIOS / Firmware, and Tools / Commands.
- Added a dedicated `Lenovo Vantage` Guide category for Vantage-driven tasks including Lenovo Vantage Update, Battery Health, Reset Battery, Fn & Ctrl Key Swap, Always on USB, and Lock on Leave Function.
- Moved `Sfc /Scannow` to the Windows Guide category.
- Merged `Disable Audio Enhancements (External Microphone)` into the main `Disable Audio Enhancements` guide so Built-in/Internal and External Microphone use one reference.
- Removed Code, Troubleshooting Guide, and the duplicate BIOS Level 1 entry from the SYMPTOMS navigation; BIOS password guidance remains available under GUIDE → BIOS / Firmware.
- Matched the `TROUBLESHOOTING CHECKLIST` heading size/weight to `LEVEL 1` and `SYMPTOM / GUIDE`.
- Preserved Firebase counters, browser-based Online counting, Dispatch rules, Generate Note, Email, Checklist, and Master Database behavior.

# v5.2.3

## v5.2.3 — Diagnostics, Reference Sync, and Regression Coverage
- Added runtime Diagnostics with database version/source, runtime counts, and integrity status; checks run silently in the background and are not exposed in the normal user UI.
- Added generated `DATABASE_META` to `database.js`.
- Changed all five `Reference_Text` hierarchy files into generated artifacts and added validation against runtime structure.
- Synced stale Reference_Text entries with the current Master Database/runtime hierarchy.
- Added Dispatch regression scenarios for Adapter and Mainboard evidence paths.
- Generate Note no longer appends a `Conclusion:` line; dispatch decisions remain visible in the Result panel.
- Boot → No Power (ThinkPad): moved `Swap Adapter` immediately before `Adapter Test on Other Machine`.
- Preserved all v5.2.2 FRU ordering, scope, dropdown, and uppercase-detail rules.
- Restored the compact `Visitors | Views | Online` display at the top-right using the existing Firebase Realtime Database counters.
- Reworked site statistics so Visitors, Views, and Online fail independently, Firebase initialization retries, and runtime errors are reported to the developer console instead of failing silently.
- Updated Online presence to use `.info/connected` and register `onDisconnect()` cleanup before creating the session entry.
- Updated Online counting to group tab sessions under the persistent browser/profile UUID, so multiple tabs in one browser count as one Online user.
- Refined the v5.2.3 UI without changing workflow: consolidated legacy CSS overrides, removed all `!important` usage, and added consistent card styling.
- Added action hierarchy and inline icons: Generate Note is primary, Email TH/EN are secondary, and Clear is a neutral outline action.
- Added stronger selected/focus states, checklist completion count with a slim progress bar, Search clear control, empty states, realtime Online status dot, and 140 ms hover/click feedback.

# v5.2.2

## v5.2.2 — FRU Final Position and Uppercase Detail
- Moved all 51 existing `FRU P/N` rows to the final checklist position within their symptom.
- Updated workbook and runtime validation so every existing `FRU P/N` must be last.
- Updated Generate Note to uppercase Detail for `FRU P/N`.
- Updated Generate Note to uppercase Detail for `Specific Keys Listed` and normalize its output label.
- Added headless regression tests for FRU ordering and uppercase Detail output.

## v5.2.1 — Checklist Scope and External Device FRU
- Removed `Visitors | Views | Online` and the Firebase statistics/presence code.
- Removed `Physical Damage` from Windows, Battery, Network, Storage, Audio, and Camera.
- Added and normalized `FRU P/N` for Desktop, Tiny, and AIO Monitor, Adapter, Keyboard, and Mouse checklists.
- Enforced `FRU P/N` before `Physical Damage` or `Other Issue`.
- Removed `Other Issue` from Monitor checklists.
- Added workbook, runtime, and headless UI validation for all new rules.

# v5.2.0

## v5.2.0 — Data Pipeline Reliability
- Fixed dropdown control parsing so `Text Input` and `Blank` never appear as visible choices.
- Fixed Related Guide Key resolution through `Related_Guide_Master`.
- Added backward-compatible Related Guide key/name resolution at runtime.
- Added automatic Level 1 and Symptom creation for new Excel names.
- Replaced raw checklist `innerHTML` construction with DOM-safe rendering.
- Removed unused legacy mapping data from `data.js`.
- Added `validate_database.py` as the pre-release validation gate.
- Updated workbook README and all release documentation to v5.2.0.

## v5.1.9
- Restored `Specific Keys Listed` in all applicable Keyboard checklists.
- Kept the free-text field for `Specific Keys Listed` while making its dropdown placeholder-only.
- Regenerated `database.js` from `PD_Guide_Database.xlsx` and retained full-cleanup packaging.

## v5.1.8 — Duplicate Checklist Fix

- Fixed duplicated ThinkPad Bluetooth checklist rows in the runtime database.
- Regenerated `database.js` from the master workbook.
- Removed duplicated BIOS Update under ThinkPad Fan Overheat.
- Kept the release version at v5.1.8.

## v5.1.8

- Migrated `PD_Guide_Database.xlsx` to the Master Database architecture.
- Kept Thinkpad, Ideapad, Desktop, Tiny, and AIO as separate model sheets.
- Replaced inline dropdown values with `Dropdown ID` references and added `Dropdown_Master`.
- Replaced inline related-guide names with `Related Guide Key` references and added `Related_Guide_Master`.
- Added an in-workbook README describing the Excel → database.js → Toolkit workflow.
- Preserved the existing Toolkit display order and visible dropdown/guide labels.
- Updated all visible release references to v5.1.8.

## v5.1.8

- Rewrote all existing BIOS and Error Code entries as Knowledge Base articles.
- Standardized sections to Description, Possible Cause, and Recommended Action.
- Updated the runtime renderer to display the new Knowledge Base fields.
- Changed the BIOS, Code, and Troubleshooting Guide content heading to INFORMATION.
- Updated visible version references to 5.1.8.

## v5.1.8
- Rebuilt runtime data from `PD_Guide_Database.xlsx`.
- Removed obsolete Mapping files and outdated audit/mapping documents.
- Fixed all `Text Input` rows so internal parser labels cannot appear in the UI.
- Standardized `Blank | Text Input` as an empty dropdown plus textbox.
- Retained blank dropdown plus textbox for FRU P/N.
- Kept Email TH/EN spacing between checklist lines.
- Updated visible version and cache references to 5.1.8.
- Fixed `Specific Keys Listed` across all five products to show a placeholder-only dropdown plus Text Input.
- Restored the website statistics module import URLs to the previously working Firebase configuration.

## v5.1.8
- Added Markdown knowledge base for BIOS, Error Code, and Troubleshooting Guide.
- BIOS and Error Code now show concise Description, Cause, and Solution without checklist.
- Troubleshooting Guide retains existing guide content.
- Knowledge levels remain at the bottom of Level 1.

## Dropdown Master normalization
- Consolidated DD021 into DD020: `Off, On, Not Test`.
- Consolidated DD024 into DD002: `Same Issue, Working, Not Test`.
- Updated all model-sheet references and synchronized `database.js`.

## Dropdown Master normalization - Yes/No
- Consolidated DD006 and DD016 into DD003.
- Standardized DD003 as `No, Yes, Not Test` / `No|Yes|Not Test`.
- Updated all Thinkpad, Ideapad, Desktop, Tiny, and AIO references.
- Synchronized `database.js`; removed `Not sure` and reversed Yes/No variants.
