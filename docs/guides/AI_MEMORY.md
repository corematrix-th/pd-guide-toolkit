# AI_MEMORY.md

# PD Guide Toolkit - AI Project Memory

## Purpose
PD Guide Toolkit is a customer-support troubleshooting toolkit.
It is NOT intended to be a technician repair manual.

Outputs:
- Troubleshooting Checklist
- Generate Note
- Email TH
- Email EN
- Related Guide
- Dispatch
- Categorized Code reference
- Categorized User Guide reference
- Global Search across Troubleshooting / Code / User Guide

---

## Source of Truth

Master Database

PD_Guide_Database.xlsx

Never edit checklist text directly inside JavaScript.

Workflow

PD_Guide_Database.xlsx
        ↓
Generate database.js + Reference_Text
        ↓
Toolkit UI

---

## Development Rules

- Excel is always the master database.
- Related Guide keys come from Related_Guide_Master and must match headings in TROUBLESHOOTING_GUIDE.md.
- Reference_Text hierarchy is generated; never maintain it manually.
- DATABASE_META and background Diagnostics must stay aligned with the release version and runtime counts.
- Use Title Case for all UI labels.
- Keep Generate Note in its existing lowercase style.
- Normalize BIOS, USB, SSD, HDD, Wi‑Fi, Bluetooth, LED, LCD.
- Do not introduce duplicate checklist items.
- Shared symptoms should reference one shared checklist.
- Windows, Battery, Network, Storage, Audio, and Camera do not use Physical Damage.
- Desktop/Tiny/AIO Monitor, Adapter, Keyboard, and Mouse require exactly one FRU P/N. Wherever FRU P/N exists, it is the final checklist item.
- Monitor does not use Other Issue.
- Generate Note uppercases Detail for FRU P/N and Specific Keys Listed.
- v5.2.5 top navigation is SYMPTOMS / ERROR POST / GUIDE / LABOR MAPPING. Search All is limited to the first three modules; Labor Mapping has an independent Province/Postal Code search.
- Labor Mapping search results must use one consistent table for both Province and Postal Code lookup: Postal Code | Province | Support Type | Labor Vendor ID | Premier Vendor. Keep the labeled Clear button beside the Labor Mapping search field.
- Code and Troubleshooting Guide must not be duplicated inside Troubleshooting Level 1.
- Global Search must search all three top-level sections and open the selected destination directly.
- Every Code and User Guide Knowledge Base item must belong to exactly one category (excluding the All category).

---

## Standard Troubleshooting Order

1. Error Code
2. Windows / Settings
3. Device Manager
4. Uninstall Driver
5. Driver Update
6. Windows Update
7. Lenovo Vantage Update
8. BIOS Update
9. Load BIOS Default
10. Diagnostics
11. Windows Recovery
12. Windows Reinstall
13. Physical Damage
14. Other Issue

---

## Documentation

Always update when releasing:

- CHANGELOG.md
- FULL_AUDIT.md
- TODO.md
- DEVELOPMENT_RULES.md
- TROUBLESHOOTING_GUIDE.md

---

## Release Checklist

- Version updated everywhere
- Excel updated
- JS regenerated
- generate_database.py refreshed database.js + Reference_Text
- validate_database.py passed
- Related Guide checked
- Documentation updated
- Audit completed

---

## Goal

A new AI should be able to continue development from the repository without requiring previous chat history.


## v5.2.6 Related Guide Popup
- v5.2.6 Related Guide behavior: selective inline ⓘ in SYMPTOMS; popup stays on the same screen and uses shared GUIDE content.
