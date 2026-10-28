# Dispatch / Review Rules

## Core rules
- Use Part or อะไหล่ when referring to the item to dispatch.
- FRU means the part number only.
- Customer First: checklist items must be actions a customer can perform remotely with an Agent.
- Evidence First: dispatch must be based on evidence, not only on Same Issue count.
- One case should recommend only one Part.
- Email TH / EN is a customer troubleshooting template and does not depend on selected dropdown answers.

## Symptom Recommendation Engine
If the selected symptom conflicts with checklist evidence, show a recommended symptom instead of dispatching.

Examples:
- Boot → Power On No Display + Power LED = No -> Result: Select "No power".
- Boot → No Power + Power LED = Yes -> Result: Select "Power on no display".
- Display symptom + External Monitor test = Same Issue -> Result: Select "Power on no display".
- Power LED = No + Caps Lock Toggle = Yes -> Result: Verify Checklist.

## Power on no display
Required evidence:
- Power LED
- External Monitor test
- Power Reset / Emergency Reset

Supporting evidence:
- Caps Lock Toggle
- Display Backlight
- Fan spinning

Not Test on supporting evidence must not block dispatch when required evidence is complete.


## v4.9.1 Checklist Order
For driver/device issues, show Device Manager detection before driver uninstall/restart.


## v4.9.1 Model & Symptom Validation

Checklist items must match the selected model and symptom. Port troubleshooting must use the matching cable/adapter/driver for the selected interface, such as USB-C Display using USB-C cable and DisplayPort using DisplayPort cable.

## v4.9.3 Standard Workflow / Checklist Audit

Checklist ordering must follow `docs/STANDARD_WORKFLOW.md`.
Dispatch logic must not depend on irrelevant checklist items copied from another model or symptom.
Every dispatch-related checklist item must match the selected model and symptom.


## v5.2.0 Excel-First Maintenance Rule

- `PD_Guide_Database.xlsx` is the source of truth for checklist labels, dropdown behavior, Email TH/EN, and Related Guide Keys.
- Do not maintain a parallel mapping file or JavaScript checklist mapping.
- Run `python generate_database.py` and `python validate_database.py` after every data change.
- Audit duplicate labels, model-specific checklist scope, Power Reset / Emergency Reset placement, Event Viewer / Dump File placement, FRU P/N placement, and Dispatch evidence rules before release.

## v5.2.0 Governance Note

Apply a full-impact audit before release. Any checklist, workflow, terminology, model-scope, Dispatch, or JavaScript logic change must be checked across Excel, Email TH/EN, Generate Note, Related Guide, Reference Text, documentation, runtime generation, and validation.

## v5.2.1 Checklist Scope Rules

- Windows, Battery, Network, Storage, Audio, and Camera must not show `Physical Damage`.
- Desktop, Tiny, and AIO external-device levels Monitor, Adapter, Keyboard, and Mouse must show exactly one `FRU P/N`.
- Desktop, Tiny, and AIO external-device levels still require exactly one `FRU P/N`.
- Monitor must not show `Other Issue`.


## v5.2.2 FRU Position and Note Formatting

- Wherever `FRU P/N` exists, it must be the final checklist item for that symptom.
- Generate Note must uppercase the Detail value for `FRU P/N` and `Specific Keys Listed`.


## v5.2.3 Regression Guard

- Headless smoke tests must cover at least one evidence-based Adapter dispatch path and one Mainboard dispatch path.
- Headless smoke tests must cover a full Generate Note conclusion path, not only formatter helpers.
- Runtime Diagnostics must report PASS for release data before packaging.
