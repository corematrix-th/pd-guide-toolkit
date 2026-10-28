# Development review — v5.2.9

## Change scope
- Corrected `Desktop > Monitor > Flickering` in the Excel master database.
- Removed notebook-specific `Move LCD Lid` and `External Monitor Test` from this Desktop path.
- Added desktop/external-monitor isolation steps: `swap HDMI cable`, `Monitor Test on Other Machine`, and `Swap Monitor`.
- Kept `FRU P/N` as the final checklist row.
- No Labor Mapping changes in this release.

## Release gate
Run `python generate_database.py`, `node smoke_test.js`, `python test_pipeline.py`, and `python validate_database.py` before packaging.
