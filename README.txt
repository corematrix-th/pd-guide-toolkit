Lenovo PD Guide Toolkit v4.6

วิธีใช้งาน
1. แตกไฟล์ ZIP
2. เปิดโฟลเดอร์ Lenovo_PD_Guide_Toolkit_v4_6
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
