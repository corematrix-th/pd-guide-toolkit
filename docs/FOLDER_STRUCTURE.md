# PD Guide Toolkit v5.3.6 — Folder Structure

- `index.html` — website entry point (open this file to run the offline toolkit).
- `assets/css/style.css` — application styling.
- `assets/js/` — runtime scripts, loaded in the same original order: database.js, data.js, knowledge.js, labor_mapping.js, app.js.
- `source/` — Excel master workbooks; unchanged binary contents.
- `tools/` — database generator, validator, and regression/smoke tests.
- `Reference_Text/` — generated human-readable mirrors.
- `docs/core/` — architecture, specs, workflow and development rules.
- `docs/guides/` — developer and AI guides, troubleshooting.
- `docs/features/` — feature-specific documentation.
- `docs/audits/` — historical audits.
- `docs/releases/` — historical release notes.

## Commands (from project root)

- `python tools/generate_database.py`
- `python tools/validate_database.py`
- `node tools/smoke_test.js`
- `python -m unittest discover -s tools -p 'test_*.py' -v`

Only structure, links, test tooling, and v5.3.6 release metadata were changed; application logic is preserved.
