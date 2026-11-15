# Checklist terminology audit — v5.3.5

Reviewed all 5 product worksheets (Thinkpad, Ideapad, Desktop, Tiny, AIO), 2,496 checklist rows, and application decision references.

## Applied (36 source rows)
- USB Keyboard Test / USB Keyboard test -> External Keyboard Test (8)
- External Monitor test -> External Monitor Test (2); corresponding app.js and smoke test labels updated
- Specific keys listed -> Specific Keys Listed (8)
- swap HDMI cable -> Swap HDMI Cable (5)
- Bsod Occurs -> BSOD Occurs (1)
- Intel Rst / Storage Driver Loaded -> Intel RST / Storage Driver Loaded (4)
- Keyboard test on other machine -> Keyboard Test on Other Machine (6)
- Lenovo Hotkey Features update -> Lenovo Hotkey Features Update (1)
- Specific hotkey listed -> Specific Hotkey Listed (1)

## Deliberately not merged without approval
- Load Default BIOS vs Load BIOS Default vs BIOS Default Loaded: action versus confirmed state and potentially different decision references.
- Check BIOS vs BIOS check: generic BIOS inspection vs specific enabled/disabled status.
- Swap Power Cord vs Swap Power Cable vs Swap Adapter / Power Cable: potentially different physical components.
- Cmos Battery / Rtc Check vs Rtc Battery / Cmos Check: similar wording, but inspect symptom scope and dropdown semantics before merging.
- Mouse Test vs Mouse Test on Other Machine: different test procedures.
- Charge LED vs Charge LED on Notebook: context-specific.
- USB Mouse / Keyboard Test vs External Keyboard Test: combined test, not equivalent.

## Verification
- Database regenerated from master XLSX; validate_database.py PASS (5 pre-existing documentation/version warnings).
- test_pipeline.py: 2 tests PASS.
- node smoke_test.js: PASS.

## Follow-up BIOS terminology standardization
- Check BIOS -> BIOS Check (22 rows; DD002: Same Issue / Working / Not Test).
- BIOS check -> Check BIOS Settings (10 rows; DD031: Enabled / Disabled / Not Test).
- Swap Vga Cable -> Swap VGA Cable (2 rows).
- Updated display fallback label in app.js.
- Left BIOS Defaults, CMOS/RTC, and power cable naming unchanged pending semantic review.
