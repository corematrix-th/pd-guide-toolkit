PD Guide Toolkit v5.0.2

## v5.0.2 Updates

Documentation refactor release based on v4.9.8.

Key updates:
- Consolidated duplicate documentation files in `docs/`.
- Kept `Mapping.txt` in the project root because it is runtime/source-of-truth data.
- Added consolidated `docs/FULL_AUDIT.md` for audit history.
- Added consolidated `docs/RELEASE_REPORT.md` for release history.
- Updated visible UI version to v5.0.2 and cache-busting references to `v=5_0_2`.

Important rule:
When an existing version is patched without a version number change, keep the same filename exactly. For this release, the new version is v5.0.2, so the output filename is `PD_Guide_Toolkit_v5.0.2.zip`.

## Release Report
See `docs/RELEASE_REPORT.md` for the v5.0.2 release report and previous release history.

## Docs Refactor
The docs folder now uses consolidated source-of-truth files:

- `AI_HANDOVER_GUIDE.md`
- `CHANGELOG.md`
- `CHECKLIST_STANDARD.md`
- `DECISION_LOG.md`
- `DEVELOPMENT_RULES.md`
- `Dispatch_Rules.md`
- `FULL_AUDIT.md`
- `RELEASE_REPORT.md`
- `REQUEST_MAPPING.md`
- `STANDARD_WORKFLOW.md`
- `TODO.md`


## v5.0.2 Full Audit
- External Monitor test mapping fixed with context-aware Thai/English wording.
- Graphics driver checklist normalized to `Graphics Driver Update` only.
- Duplicate checklist audit completed.


## Final Normalization Patch
- Runtime duplicate checklist issue fixed for Graphics/WLAN/LAN/Bluetooth Driver Update items.
- Output filename for this user-requested package: `PD_Guide_Toolkit_v5.0.2.zip`.
