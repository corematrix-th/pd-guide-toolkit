# PD Guide Toolkit v5.4.0 — Decision Engine rebuild

## Architecture
- New independent `assets/js/decision_engine.js`, evaluated as Model family → Level/Symptom → Checklist evidence.
- `app.js` invokes this new engine to render Conclusion/Reason/Generate Note. The original `calculateRaw()` remains as a reference for comparison, **not as automatic fallback**.
- UI, checklist questions/options, note/email templates, Battery Calculator, Labor Mapping, Firebase code and Excel sources remain unchanged (except visible version and script include).

## Safety behavior
- Confirmed swap outcomes and selected explicit multi-check patterns can recommend Dispatch; otherwise the engine returns Suspect, Pending, FOP, Verify Checklist, CID or symptom rerouting.
- No blanket 80%-completion-to-Dispatch rule, no arbitrary `Failed` → default FRU dispatch.
- No Power 5-step Mainboard path still works without answering Any CID/Any Other Issue; explicit CID is higher priority.
- Network Wi-Fi with both Hotspot and LAN failing remains a Network Controller / Mainboard *Suspect*, requiring BIOS/diagnostic confirmation.
- Mainboard Dispatch keeps BitLocker warning and model FRU verification.

## Validation
- Existing automated sweep: 547 Product/Level/Symptom combinations, 7,214 isolated answers, 443 CID checks.
- Independent multi-step decision tests: 228 checks across specific paths and conservative default contexts.
- Python unit tests: 4 tests.
- Database validator checks existing 5.3.8 metadata and reports 7 pre-existing warnings.
- Not every multi-answer combination or exact hardware SKU was validated. Browser / live deployment not tested.
