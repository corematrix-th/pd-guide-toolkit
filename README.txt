PD Guide Toolkit v4.7.7


v4.7.7
- Added Level 1: Dock, placed before BIOS.
- Added 8 Dock symptoms with short UI names: USB-A, DisplayPort, HDMI, LAN, Audio Jack, Not charging, Not detected, and Monitor flickering.
- Updated Dock checklist to follow Minimum Required Evidence rule.
- Removed ambiguous / not-needed Dock checklist items from this update: Test on another machine, USB-C Port test, External Monitor test, HDMI Port test, DisplayPort test, and USB Port on notebook test.
- Port on notebook test is used only where approved: HDMI, LAN, and Audio Jack.
- Added Dock Email TH / Email EN mapping for active Dock checklist labels only.
- Added LED dropdown option set with Blink support for LED checklist items.
- Added developer documentation under docs/DEVELOPMENT_RULES.md.
- Kept UX, layout, workflow, and main data structure unchanged.

วิธีใช้งาน
1. แตกไฟล์ ZIP
2. เปิดโฟลเดอร์ PD_Guide_Toolkit_v4_7_7
3. ดับเบิลคลิก index.html


PD Guide Toolkit v4.7.3


v4.7.3 Quality Fix
- Restored Troubleshooting Checklist labels to English only.
- Fixed v4.7.2 issue where some checklist labels were translated into Thai on the main UI.
- Email TH translation is now handled through customerStepTH mapping only.
- Added Thai Email mapping coverage for all checklist labels found in data.js.
- Verified no Thai labels remain in data.js checklist labels.

วิธีใช้งาน
1. แตกไฟล์ ZIP
2. เปิดโฟลเดอร์ PD_Guide_Toolkit_v4_7_3
3. ดับเบิลคลิก index.html

v4.6 Update
- Review Checklist หลายหมวดให้ถามเฉพาะคำถามที่ใช้วิเคราะห์จริง
- Windows: ปรับ Slow / Freeze / Auto Reboot / BSOD / Login Issue
- Slow: Task Manager ใช้ตัวเลือก CPU high / Memory high / Disk high / GPU high / Normal
- Freeze: เพิ่ม Freeze occurs และตัด Safe Mode occurs
- Auto Reboot: ใช้ Auto reboot occurs และตัด Can access Windows / Disable automatic restart
- BSOD และ Auto Reboot: รวม Event Viewer / Dump file collected
- Display: ตัด Crack และเพิ่ม Garbage พร้อม Power Reset / Emergency Reset และ Swap RAM
- Battery: ใช้ Charge LED, ปรับ Battery swollen, Slow charge
- Port: ปรับ USB-A / USB-C Data / HDMI และใช้คำว่า Swap ให้เป็นมาตรฐาน
- Network / Audio / Mouse: เปลี่ยน Another เป็น Swap ตามเหมาะสม
- Storage: SSD not detect (Windows Setup) ตัด Storage Controller Mode checked และเพิ่ม Secure Boot disabled
- Camera: Lock on Leave เพิ่ม Troubleshooting Guide และ Related Guide
- Fan: ตัด Thermal error / BIOS Diagnostics / Lenovo Diagnostics และเพิ่ม Load default BIOS
- BIOS: ตัด TPM / Secure Boot, เพิ่มคำอธิบายภาษาไทยและ Guide สำหรับ BIOS/Supervisor Password
- Error Code: ตัด BitLocker / TPM ออก และเพิ่ม BitLocker Recovery ใน Troubleshooting Guide
- Related Guide: แสดงเฉพาะ Guide ที่สัมพันธ์กับ Checklist ของอาการนั้นจริง ๆ


v4.6.1 Analytics Update
- Added Google Analytics Measurement ID: G-GBWX6GCY18
- Added event tracking:
  - generate_note
  - email_th
  - email_en
  - level1_selected
  - symptom_selected
  - related_guide_open
  - product_selected
- No personal data, customer data, serial number, or generated note content is sent.


v4.6.2 Update
- Added Keyboard > Keyboard Left Ctrl
- Keyboard Left Ctrl checklist includes Keyboard Online Test and FN & Ctrl Swap
- Email TH now starts directly with: รบกวนช่วยทดสอบและตรวจสอบเบื้องต้นตามขั้นตอนดังนี้ครับ
- Email EN now starts directly with: Please perform the troubleshooting steps below.
- Moved Related Guide to the right panel above CONCLUSION
- Increased Additional Detail height
- Reduced RESULT / EMAIL height slightly


v4.6 Final Update
- CONCLUSION is red for all symptoms.
- CONCLUSION font is slightly smaller.
- Layout order restored to CONCLUSION > RELATED GUIDE > RESULT / EMAIL.
- RESULT / EMAIL height restored while keeping Generate buttons visible on screen.


v4.6 Final Email Fix
- Email TH now starts directly with:
  รบกวนช่วยทดสอบและตรวจสอบเบื้องต้นตามขั้นตอนดังนี้ครับ
- Email EN now starts directly with:
  Please perform the troubleshooting steps below.
- Removed greeting, agent name, S/N, Case Number, and Issue header from generated Email TH/EN for every symptom.


v4.6.3 Update
- Moved Related Guide back under Additional Detail.
- Removed Related Guide from the right panel.
- Expanded RESULT / EMAIL and locked its size.
- Kept Generate / Email buttons visible in the same screen.

v4.6.4 Product Capability Update
- Added Product Capability filter by product type.
- Desktop: hidden Charging/Battery-related symptoms, Touchpad, Face Recognition, Lock on leave, Keyboard Backlight, FN key, Keyboard Left Ctrl, WWAN, SIM, and Error 0190.
- AIO: hidden Charging/Battery-related symptoms, Touchpad, Lock on leave, Keyboard Backlight, FN key, Keyboard Left Ctrl, WWAN, SIM, and Error 0190.
- IdeaPad: hidden TrackPoint, Keyboard Left Ctrl, Lock on leave, WWAN, SIM, Smart Card, and Smart Card Reader.
- Kept UX, checklist data, conclusion, email, and FRU P/N order unchanged.


v4.6.4 Hotfix
- Fixed Storage swap conclusion logic: Swap SSD/HDD test = Work fine now dispatches SSD/HDD instead of FOP.


v4.6.5 Logic Update
- Updated central calculation logic: removed generic Work fine = FOP fallback.
- Added logic-based dispatch exceptions for swap / external comparison tests.
- Added Keyboard > Keyboard auto type.
- Added Mouse > Mouse click L double.


v4.6.6 Checklist / Logic Update
- Keyboard > Keyboard auto type: added Specific keys listed at first and Key stuck / sunk before tail checks.
- Mouse > Mouse click L double: removed Clean scroll wheel and reordered another-machine test before swap test.
- Auto reboot / BSOD: added Swap RAM test and Swap SSD test before tail checks.
- Power on no display / Beep code: added Swap RAM test before tail checks.
- Added Monitor level under Display with Display abnormal line and Monitor no power symptoms.
- FRU P/N is now shown only for External Mouse, External Keyboard, Adapter, Power cord, and Monitor cases.
- Tail checklist order remains Physical damage / Liquid spilled > Other issue > FRU P/N.


v4.6.7 Checklist / Note Format Update
- Reordered Level 1: Keyboard and Mouse after Port.
- Generate Note now prefixes checklist and Additional Detail lines with dash (-).
- Removed Clean / Reseat RAM and photo/video evidence checklist items from checklist display.
- Added Check temperature / Overheat to Fan symptoms.
- Updated USB-A and USB-C Data checklist.
- Product rule: Power Reset / Emergency Reset remains for ThinkPad only; other products show Power Reset.

Version 4.6.8
- Updated Storage elimination logic for SSD/HDD not detect.
- BIOS detects storage = No now dispatches SSD/HDD first.
- Swap SSD/HDD = Same issue now dispatches Mainboard only.
- Updated Monitor elimination logic to avoid unnecessary combined parts.
- Added Power Reset / Emergency Reset checklist to Power on no display + Beep code.
- Added missing Power Reset checklist for Desktop Power on no display.
- Added Safe Mode to Boot loop Related Guide while keeping basic guides hidden.


v4.6.9
- Header: removed Lenovo logo/brand and updated title to PD Guide Toolkit.
- Keyboard Specific keys listed: changed to detail-only select field and generates key detail in uppercase.

v4.7.0
- Fixed Product Change refresh state to reduce missing Level 1 / Symptom items after switching Product.
- Updated cross-test logic for Adapter / Mouse / Keyboard / Monitor to distinguish customer part tested on another machine from swap test.
- Renamed Adapter tested on another machine to Adapter works on another machine.
- Added Swap PSU test for Desktop > No power and dispatch logic for PSU.
- Added Caps Lock LED works and Power Reset / Emergency Reset to Keyboard > All key.
- Updated Generate Note format: symptom is directly followed by checklist lines; Conclusion spacing remains separated.
- Improved Email TH / Email EN instruction wording for Diagnostics, Battery Report, Minidump, Power Reset, Emergency Reset and common swap tests.
- Updated version label to 4.7.0.

V4.7.5 - Dock Logic Patch
- Adjusted Dock conclusion logic to dispatch only by decisive checklist result.
- Removed broad Dock default dispatch behavior that listed every possible part.
- Dock fallback now escalates when no checklist result clearly identifies the part.
- Added Dock logic note to docs/DEVELOPMENT_RULES.md.

V4.7.5 - Dock Conclusion Logic Fix
- Updated Dock conclusion logic to follow selected checklist evidence.
- Removed Dock behavior that escalated when no decisive checklist was found.
- Dock now defaults to Dispatch / Docking when all selected checks remain Same issue.
- Swap USB-C cable = Work fine now dispatches USB-C Cable.
- Swap Dock = Work fine now dispatches Docking.
- Software/Firmware resolved cases now use FOP / Software Troubleshooting.

V4.7.5 - Dock Logic Correction
- Corrected Dock conclusion logic to avoid incorrect Docking dispatch.
- Swap Dock = Work fine dispatches Docking.
- Swap Dock = Same issue does not dispatch Docking or Mainboard.
- Non-decisive Dock evidence now concludes Escalate L2 / Software Troubleshooting.
- Dock logic must follow checklist evidence and must not reuse Storage/RAM/Keyboard elimination logic directly.

V4.7.5 - Global Decision State Fix
- Added global Pending state for incomplete checklist evidence.
- Pending displays: Result = Pending, Part = -.
- FOP now displays Part = - because no FRU is required.
- Escalate L2 now displays Part = - and is used only after all or almost all decision checklist items are completed but no FRU can be identified.
- Dock no longer escalates after only a few Same issue answers.
- Swap Dock = Same issue does not dispatch Docking and does not dispatch Mainboard.
- Dock remains Pending until there is enough evidence for Dispatch, FOP, or final Escalate L2.
