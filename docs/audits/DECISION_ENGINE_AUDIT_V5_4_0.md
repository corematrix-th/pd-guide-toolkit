# Decision Engine audit — v5.4.0

## What changed
The previous global fallthrough from generic `Working` / `Failed`, 80% checklist completion and `defaultPart` caused premature dispatch decisions. The new engine receives the currently selected product model **family** (`ThinkPad`, `IdeaPad`, `Desktop`, `Tiny`, `AIO`), selected Level/Symptom and all visible Checklist answers. This context is authoritative; the engine does not derive a probability percentage without actual service data.

## Decision precedence
1. Explicit CID has priority; unanswered CID is not an obstacle.
2. Verify contradictory power evidence and route to the correct symptom when the recorded symptoms disagree.
3. FOP for clearly successful recovery action.
4. Product-family/symptom-specific evidence paths, especially No Power, Power On No Display, Network, Fan, Storage and Display.
5. Direct positive known-good swaps; identified parts only.
6. Weak diagnostic failed values and unclear hardware signs produce Suspect, not auto-Dispatch.
7. A symptom defaultPart can inform a Suspect only after at least two meaningful answers and evidence that the symptom persists. It cannot cause a Dispatch by answer percentage.

## Tested scenarios
- ThinkPad/IdeaPad No Power early Mainboard after Power LED No, Charge LED No, Emergency Reset Same Issue, Swap Other Type-C Port Same Issue, Swap Adapter Same Issue, without tail answers.
- Explicit CID overrides Mainboard; missing Swap Adapter / Type-C blocks Mainboard dispatch.
- Known-good substitute adapter repairing No Power → Adapter Dispatch.
- Desktop no power PSU substitution working → PSU Dispatch; insufficient checks → Mainboard Suspect, not Dispatch.
- Wi-Fi with Hotspot and LAN Same Issue and BIOS Not Test → Network Controller / Mainboard Suspect with next-test explanation; no automatic WLAN Dispatch.
- Fan Error Failed Lenovo Diagnostics → Fan Dispatch; unconfirmed software attempts → Fan Suspect.
- Display working external monitor → LCD Panel / Display Cable Suspect (not premature LCD FRU).
- Other symptoms: defaultPart never causes an automatic Dispatch by itself, even if many fields are answered.

## Coverage
- 547 product/level/symptom contexts covered by headless app sweep.
- 7,214 isolated-answer cases and 443 CID checks.
- 228 dedicated multi-step / negative expectation checks (including model-family × symptom-context combinations).
- Existing 4 Python unit tests and database generation validation.

## Limitations and decisions requiring service-owner review
- The runtime distinguishes product *families*, not exact machine type / SKU / FRU; it must not claim model-specific FRU compatibility. Exact model/MTM may need to be added to the database for finer diagnosis.
- Generic suspicion based on `defaultPart` is heuristic, not calibrated Bayesian probability. No numerical part-failure percentage is available.
- Some 547 configurations are supported by conservative fallback instead of a manually approved dispatch flow. They may require more answers or escalation than before. This is intentional to reduce erroneous part orders, not proof that all repair decisions are correct.
- The 547-context sweep and specific multi-step tests are not exhaustive over the Cartesian product of every possible answer.
- `DATABASE_META` / Excel source use historical version 5.3.8; the engine is release 5.4.0. The Excel source was deliberately not rewritten.
- Real browser, hardware diagnostic, warranty policy, live hosting and Firebase integration were not validated in this environment.

## Future work
Build and validate per-symptom Decision Matrix from real service outcomes, model/MTM mapping, confirmed test-to-FRU rules and field failure statistics. Test in a staged environment before applying to spare-part fulfillment.
