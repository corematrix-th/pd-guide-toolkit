PD Guide Toolkit v4.8.6

Open index.html to use the toolkit.

Folder structure:
- index.html, app.js, data.js, style.css: active toolkit files
- docs/: changelog and dispatch/review rules
- backup/: previous-version backup files when available

## v4.8.6 Major Logic Audit
- Applied Evidence First / Customer First dispatch logic across the toolkit.
- Added accessory/cable dispatch logic: Power Cord, Adapter, HDMI Cable, DisplayPort Cable, USB-C Cable, LAN Cable.
- Added Symptom Recommendation and Suggestion messages only when the selected symptom is incorrect.
- Added No default next-step text for Blank Result results.
- Added Port > Not Charge as an alias of Battery > Not Charge.
- Maintained Email TH/EN as customer templates independent from selected checklist answers.

Revision notes:
- Normal Generate Note output now uses compact `Conclusion: Dispatch <Part>` format.
- Result / Part are shown only in the top CONCLUSION panel, not duplicated in RESULT / EMAIL.
- Suggested PD is hidden unless the selected symptom is incorrect or information is inconsistent.
