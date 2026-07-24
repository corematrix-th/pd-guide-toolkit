// PD Guide Toolkit v5.1.7 - Logic-only data file.
// Excel-owned fields are NOT defined or modified here:
// LEVEL 1, SYMPTOM / GUIDE, CHECKLIST, Dropdown ID, Email TH, Email EN, Related Guide Key.
// PD_Guide_Database.xlsx is the single source of truth for those fields.

const APP_OPTIONS = {
  "select": [
    "-- Select --",
    "Same Issue",
    "Working",
    "Not Test"
  ],
  "update_status": [
    "-- Select --",
    "Done",
    "Not Test"
  ],
  "detail_only": [
    "-- Select --"
  ],
  "detect": [
    "-- Select --",
    "Detect",
    "Not detect"
  ],
  "swap": [
    "-- Select --",
    "Same Issue",
    "Working",
    "Not Test"
  ],
  "yesno": [
    "-- Select --",
    "No",
    "Yes"
  ],
  "led": [
    "-- Select --",
    "No",
    "Yes",
    "Blink"
  ],
  "diag": [
    "-- Select --",
    "Failed",
    "Passed",
    "Not Test"
  ],
  "fan": [
    "-- Select --",
    "No Spin",
    "Spin",
    "Not Test"
  ],
  "mute": [
    "-- Select --",
    "Mute",
    "Unmute"
  ],
  "battery_health": [
    "-- Select --",
    "Good",
    "Fair",
    "Poor",
    "Replace Recommended",
    "Battery Not Detected",
    "Not Test"
  ],
  "battery_percent": [
    "-- Select --",
    "0%",
    "Over 10%",
    "Cross Mark"
  ],
  "typec_port": [
    "-- Select --",
    "Same Issue",
    "Working",
    "Not Test",
    "No Other Port"
  ],
  "shutter": [
    "-- Select --",
    "Open",
    "Closed",
    "No Shutter",
    "Not Test"
  ],
  "airplane": [
    "-- Select --",
    "Off",
    "On"
  ],
  "reboot_occurs": [
    "-- Select --",
    "Before Windows",
    "During Windows loading",
    "After Windows login",
    "Randomly",
    "Not Test"
  ],
  "bsod_occurs": [
    "-- Select --",
    "During startup",
    "After Windows login",
    "Randomly",
    "While using specific application",
    "Not Test"
  ],
  "task_manager_usage": [
    "-- Select --",
    "CPU High",
    "RAM High",
    "Disk High",
    "GPU High",
    "Normal",
    "Not Test"
  ],
  "freeze_occurs": [
    "-- Select --",
    "During startup",
    "After Windows login",
    "Randomly",
    "While using specific application",
    "Not Test"
  ],
  "onoff": [
    "-- Select --",
    "On",
    "Off",
    "Not Test"
  ],
  "impact": [
    "-- Select --",
    "No",
    "Yes",
    "Not sure"
  ],
  "disable_enable": [
    "-- Select --",
    "Disabled",
    "Enabled",
    "Not Test"
  ],
  "temperature": [
    "-- Select --",
    "Overheat",
    "Normal",
    "Not Test"
  ],
  "fan_check": [
    "-- Select --",
    "Spin",
    "Not Spin"
  ],
  "power_mode": [
    "-- Select --",
    "Balanced",
    "High Performance",
    "Not Test"
  ],
  "yesno_test": [
    "-- Select --",
    "Yes",
    "No",
    "Not Test"
  ]
};

const GLOBAL_CHECKLIST_MAPPING = {
  "Adapter test": {
    "th": "ทดสอบ Adapter แล้วแจ้งผล",
    "en": "Check Adapter test."
  },
  "Adapter test on other machine": {
    "th": "ทดสอบนำ Adapter ไปทดสอบกับเครื่องอื่น",
    "en": "Test this adapter with another machine."
  },
  "Adapter works with another cord": {
    "th": "ทดสอบ Adapter กับสายไฟเส้นอื่น",
    "en": "Check Adapter works with another cord."
  },
  "Airplane Mode": {
    "th": "ตรวจสอบว่าไม่ได้เปิด Airplane Mode",
    "en": "Check that Airplane Mode is turned off."
  },
  "Another Router test": {
    "th": "ทดสอบเชื่อมต่อกับ Router อื่น",
    "en": "Test with another router."
  },
  "Audio Driver Update": {
    "th": "อัปเดต Driver ของ Audio ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Audio driver to the latest version."
  },
  "Audio Jack on notebook test": {
    "th": "ตรวจสอบหัวข้อ Audio Jack on notebook test",
    "en": "Check Audio Jack on notebook test."
  },
  "Auto reboot occurs": {
    "th": "พบอาการเครื่อง Restart ช่วงใดบ้าง",
    "en": "Check when the automatic restart occurs."
  },
  "Battery charge level checked": {
    "th": "ตรวจสอบระดับแบตเตอรี่ปัจจุบัน",
    "en": "Check Battery charge level."
  },
  "Battery Conservation Mode": {
    "th": "ตรวจสอบ Battery Conservation Mode ใน Lenovo Vantage",
    "en": "Check Battery Conservation Mode."
  },
  "Battery Health in Lenovo Vantage": {
    "th": "ตรวจสอบ Battery Health ใน Lenovo Vantage",
    "en": "Check Battery Health in Lenovo Vantage."
  },
  "Battery percentage": {
    "th": "ตรวจสอบเปอร์เซ็นต์แบตเตอรี่ปัจจุบัน",
    "en": "Check the current battery percentage."
  },
  "Battery Report collected": {
    "th": "สร้าง Battery Report และแนบไฟล์ผลลัพธ์",
    "en": "Generate and attach the Battery Report."
  },
  "Battery swollen confirmed": {
    "th": "ตรวจสอบว่าแบตเตอรี่มีอาการบวมหรือไม่",
    "en": "Check whether the battery is swollen."
  },
  "Beep sound / pattern": {
    "th": "รบกวนส่งคลิปถ่ายเสียงร้องเตือน (Beep sound) เพื่อตรวจสอบเพิ่มเติม",
    "en": "Please send a video of the beep sound for further checking."
  },
  "BIOS Camera enabled": {
    "th": "ตรวจสอบว่า Camera เปิดใช้งานใน BIOS หรือไม่",
    "en": "Check BIOS Camera enabled."
  },
  "BIOS default loaded": {
    "th": "โหลดค่า BIOS Default แล้วทดสอบอีกครั้ง",
    "en": "Check BIOS default loaded."
  },
  "BIOS detects HDD": {
    "th": "ตรวจสอบหัวข้อ BIOS detects HDD",
    "en": "Check BIOS detects HDD."
  },
  "BIOS detects storage": {
    "th": "ตรวจสอบหน้า Bios พบ SSD/HDD หรือไม่",
    "en": "Check whether BIOS detects the SSD/HDD."
  },
  "BIOS Fingerprint enabled": {
    "th": "ตรวจสอบว่า Fingerprint เปิดใช้งานใน BIOS หรือไม่",
    "en": "Check BIOS Fingerprint enabled."
  },
  "BIOS Hotkey mode": {
    "th": "ตรวจสอบโหมด Hotkey ใน BIOS",
    "en": "Check BIOS Hotkey mode."
  },
  "BIOS Keyboard Backlight setting": {
    "th": "ตรวจสอบการตั้งค่า Keyboard Backlight ใน BIOS",
    "en": "Check BIOS Keyboard Backlight setting."
  },
  "BIOS Touchpad enabled": {
    "th": "ตรวจสอบว่า Touchpad เปิดใช้งานใน BIOS หรือไม่",
    "en": "Check BIOS Touchpad enabled."
  },
  "BIOS Update": {
    "th": "ทดสอบอัปเดต BIOS ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update BIOS to the latest version."
  },
  "BIOS update": {
    "th": "ทดสอบอัปเดต BIOS ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update BIOS to the latest version."
  },
  "Bluetooth Driver Update": {
    "th": "อัปเดต Driver ของ Bluetooth ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Bluetooth driver to the latest version."
  },
  "Bluetooth toggle available": {
    "th": "ตรวจสอบว่ามีปุ่มเปิด/ปิด Bluetooth ใน Windows หรือไม่",
    "en": "Check whether the Bluetooth toggle is available in Windows."
  },
  "Boot order checked": {
    "th": "ตรวจสอบ Boot Order ใน BIOS",
    "en": "Check Boot order."
  },
  "BSOD occurs": {
    "th": "พบอาการจอฟ้า (BSOD) ช่วงใดบ้าง",
    "en": "Check when the BSOD occurs."
  },
  "Camera Driver Update": {
    "th": "อัปเดต Driver ของ Camera ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Camera driver to the latest version."
  },
  "Camera Driver Update / Lenovo Vantage": {
    "th": "อัปเดต Driver ของ Camera ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Camera driver to the latest version."
  },
  "Camera Shutter": {
    "th": "ตรวจสอบว่า Camera Shutter เปิดอยู่หรือไม่",
    "en": "Check whether the camera shutter is open."
  },
  "Can Access Windows": {
    "th": "สามารถเข้าหน้า Windows ได้หรือไม่",
    "en": "Check whether Windows can be accessed."
  },
  "Can access Windows": {
    "th": "สามารถเข้าหน้า Windows ได้หรือไม่",
    "en": "Check whether Windows can be accessed."
  },
  "Can Access BIOS": {
    "th": "สามารถเข้าหน้า BIOS ได้หรือไม่",
    "en": "Check whether the machine can enter BIOS."
  },
  "Can Access Safe Mode": {
    "th": "สามารถเข้าหน้า Safe Mode ได้หรือไม่",
    "en": "Check whether the machine can enter Safe Mode."
  },
  "Can detect Wi-Fi signal": {
    "th": "ตรวจสอบว่าเครื่องมองเห็นสัญญาณ Wi-Fi หรือไม่",
    "en": "Check whether the machine can detect Wi-Fi signals."
  },
  "Can login with another account": {
    "th": "ทดสอบ Login ด้วยบัญชีผู้ใช้อื่น",
    "en": "Test login with another user account."
  },
  "Caps Lock LED works": {
    "th": "ทดสอบกดปุ่ม Caps Lock ดูว่าไฟตอบสนองไหม",
    "en": "Press Caps Lock and check whether the indicator responds."
  },
  "Caps Lock Toggle": {
    "th": "ทดสอบกดปุ่ม Caps Lock ดูว่าไฟตอบสนองไหม",
    "en": "Press Caps Lock and check whether the indicator responds."
  },
  "Charge LED": {
    "th": "ตรวจสอบว่าไฟสถานะบริเวณช่องชาร์จติดหรือไม่",
    "en": "Check whether the charging port status light turns on."
  },
  "Check Audio Device in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Audio หรือไม่",
    "en": "Check whether Device Manager detects Audio."
  },
  "Check BIOS": {
    "th": "ตรวจสอบการตั้งค่าใน BIOS",
    "en": "Check BIOS settings."
  },
  "Check Bluetooth Device in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Bluetooth หรือไม่",
    "en": "Check whether Device Manager detects Bluetooth."
  },
  "Check Camera in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Camera หรือไม่",
    "en": "Check whether Device Manager detects Camera."
  },
  "Check Card Reader in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Card Reader หรือไม่",
    "en": "Check whether Device Manager detects Card Reader."
  },
  "Check Fingerprint Device in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Fingerprint หรือไม่",
    "en": "Check whether Device Manager detects Fingerprint."
  },
  "Check for Dust and Foreign Objects": {
    "th": "ตรวจสอบฝุ่นหรือสิ่งแปลกปลอมบริเวณอุปกรณ์/พอร์ต",
    "en": "Check for dust or foreign objects."
  },
  "Check HID-compliant touch screen Driver in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ HID-compliant touch screen หรือไม่",
    "en": "Check whether Device Manager detects HID-compliant touch screen."
  },
  "Check LAN pin / damage": {
    "th": "ตรวจสอบขา LAN และร่องรอยความเสียหาย",
    "en": "Check the LAN pins and any physical damage."
  },
  "Check Power Mode": {
    "th": "ตรวจสอบ Power Mode ใน Windows",
    "en": "Check Power Mode in Windows."
  },
  "Check Serial Port in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Serial Port หรือไม่",
    "en": "Check whether Device Manager detects Serial Port."
  },
  "Check Smart Card Reader in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Smart Card Reader หรือไม่",
    "en": "Check whether Device Manager detects Smart Card Reader."
  },
  "Check Task Manager usage": {
    "th": "เข้าหน้า Task Manager และตรวจสอบการทำงานของเครื่อง เช่น CPU/RAM/DISK วิ่ง 100% หรือไม่",
    "en": "Open Task Manager and check whether CPU/RAM/DISK usage reaches 100%."
  },
  "Check Task Manager Usage": {
    "th": "เข้าหน้า Task Manager และตรวจสอบการทำงานของเครื่อง เช่น CPU/RAM/DISK วิ่ง 100% หรือไม่",
    "en": "Open Task Manager and check whether CPU/RAM/DISK usage reaches 100%."
  },
  "Check Temperature": {
    "th": "ตรวจสอบอุณหภูมิของตัวเครื่องพบปัญหาเครื่องร้อนหรือไม่ และบริเวณใด",
    "en": "Check whether the machine overheats and identify the hot area."
  },
  "Check temperature / Overheat": {
    "th": "ตรวจสอบอุณหภูมิของตัวเครื่องพบปัญหาเครื่องร้อนหรือไม่ และบริเวณใด",
    "en": "Check whether the machine overheats and identify the hot area."
  },
  "Check USB Error in Device Manager": {
    "th": "ตรวจสอบ Error ของ USB ใน Device Manager",
    "en": "Check whether Device Manager detects USB Error."
  },
  "Check Wireless Driver in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ Wireless หรือไม่",
    "en": "Check whether Device Manager detects Wireless."
  },
  "Check WWAN Device in Device Manager": {
    "th": "ตรวจสอบว่า Device Manager พบอุปกรณ์ WWAN หรือไม่",
    "en": "Check whether Device Manager detects WWAN."
  },
  "Clean camera lens": {
    "th": "ทำความสะอาดเลนส์กล้องแล้วทดสอบอีกครั้ง",
    "en": "Clean the camera lens and test again."
  },
  "Clean Cooling System": {
    "th": "ทำความสะอาดระบบระบายความร้อนแล้วทดสอบอีกครั้ง",
    "en": "Clean the cooling system and test again."
  },
  "Clean scroll wheel": {
    "th": "ทำความสะอาด Scroll Wheel แล้วทดสอบอีกครั้ง",
    "en": "Clean the scroll wheel and test again."
  },
  "Clean touchpad surface": {
    "th": "ทำความสะอาดพื้นผิว Touchpad แล้วทดสอบอีกครั้ง",
    "en": "Clean the touchpad surface and test again."
  },
  "ClickPad enabled": {
    "th": "ตรวจสอบว่า ClickPad เปิดใช้งานอยู่หรือไม่",
    "en": "Check whether ClickPad is enabled."
  },
  "CMOS battery / RTC check": {
    "th": "ตรวจสอบ CMOS Battery / RTC",
    "en": "Check CMOS battery / RTC check."
  },
  "Customer knows password": {
    "th": "ตรวจสอบว่าลูกค้าทราบรหัสผ่านเครื่องหรือไม่",
    "en": "Confirm whether the customer knows the machine password."
  },
  "Disable Touchpad test": {
    "th": "ปิด Touchpad แล้วทดสอบอาการอีกครั้ง",
    "en": "Disable Touchpad and test again."
  },
  "Disable UEFI IPv4 / IPv6": {
    "th": "ปิด UEFI IPv4 / IPv6 แล้วทดสอบอีกครั้ง",
    "en": "Disable UEFI IPv4 / IPv6 and test again."
  },
  "Display Backlight": {
    "th": "ตรวจสอบว่ามีแสงสว่างจากหลังหน้าจอหรือไม่",
    "en": "Check whether there is backlight from the display."
  },
  "Dock Firmware Update": {
    "th": "อัปเดต Firmware ของ Dock ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Dock firmware to the latest version."
  },
  "Driver / Firmware Update": {
    "th": "อัปเดต Driver หรือ Firmware ที่เกี่ยวข้องให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the related driver or firmware to the latest version."
  },
  "Driver / Windows Update": {
    "th": "อัปเดต Driver และ Windows ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the driver and Windows to the latest version."
  },
  "Dump File collected": {
    "th": "รบกวนส่ง Dump file เพื่อตรวจสอบเพิ่มเติม",
    "en": "Please send the dump file for further checking. Open File Explorer → C:\\Windows\\Minidump, copy the .dmp file and send it by email. If there is no file, check C:\\Windows\\MEMORY.DMP."
  },
  "Dump file collected": {
    "th": "รบกวนส่ง Dump file เพื่อตรวจสอบเพิ่มเติม",
    "en": "Please send the dump file for further checking. Open File Explorer → C:\\Windows\\Minidump, copy the .dmp file and send it by email. If there is no file, check C:\\Windows\\MEMORY.DMP."
  },
  "Emergency Reset": {
    "th": "ทดสอบ Reset Battery โดยจิ้มรูที่ใต้ตัวเครื่องประมาณ 5-10 วินาที จากนั้นเปิดเครื่องใหม่",
    "en": "Perform a battery reset by pressing the reset hole on the bottom cover for about 5-10 seconds, then turn the machine on again."
  },
  "Enable LAN in BIOS": {
    "th": "ตรวจสอบว่า LAN เปิดใช้งานใน BIOS หรือไม่",
    "en": "Check whether LAN is enabled in BIOS."
  },
  "Error photo provided": {
    "th": "แนบรูป Error ที่พบเพิ่มเติม",
    "en": "Attach a photo of the error."
  },
  "Event Viewer / Dump file collected": {
    "th": "รบกวนส่ง Dump file เพื่อตรวจสอบเพิ่มเติม",
    "en": "Please send the dump file for further checking. Open File Explorer → C:\\Windows\\Minidump, copy the .dmp file and send it by email. If there is no file, check C:\\Windows\\MEMORY.DMP."
  },
  "External Mic Test": {
    "th": "ตรวจสอบหัวข้อ External Mic Test",
    "en": "Check External Mic Test."
  },
  "External Monitor test": {
    "th_no_display": "ทดสอบต่อจอนอกและตรวจสอบว่าภาพออกหรือไม่",
    "th_display_issue": "ทดสอบต่อจอนอกและตรวจสอบว่าพบปัญหาเดียวกันหรือไม่",
    "en_no_display": "Connect an external monitor and check whether the image appears.",
    "en_display_issue": "Connect an external monitor and check whether the same issue occurs.",
    "en": "For no display/no image symptoms, connect an external monitor and check whether the image appears. For display-quality symptoms, connect an external monitor and check whether the same issue occurs."
  },
  "Fan Check": {
    "th": "ตรวจสอบพัดลมหมุนหรือไม่",
    "en": "Check whether the fan is spinning."
  },
  "Fan spinning": {
    "th": "ตรวจสอบพัดลมหมุนหรือไม่",
    "en": "Check whether the fan is spinning."
  },
  "Fingerprint Driver Update / Lenovo Vantage": {
    "th": "อัปเดต Driver ของ Fingerprint ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Fingerprint driver to the latest version."
  },
  "Fingerprint setup in Windows Hello": {
    "th": "ตั้งค่า Fingerprint ใน Windows Hello ใหม่แล้วทดสอบอีกครั้ง",
    "en": "Set up Fingerprint in Windows Hello again and test."
  },
  "FN & Ctrl Swap": {
    "th": "ตรวจสอบการตั้งค่า FN & Ctrl Swap",
    "en": "Check the FN & Ctrl Swap setting."
  },
  "FN Lock checked": {
    "th": "ตรวจสอบสถานะ FN Lock",
    "en": "Check FN Lock."
  },
  "Freeze occurs": {
    "th": "พบอาการเครื่องค้างช่วงใดบ้าง",
    "en": "Check whether Freeze occurs."
  },
  "FRU P/N": {
    "th": "ส่งภาพถ่ายอุปกรณ์ที่มีปัญหา ให้เห็น FRU P/N หรือ Barcode",
    "en": "Please send a photo of the affected accessory showing the FRU P/N or barcode."
  },
  "Graphics Driver Update": {
    "th": "อัปเดต Driver ของ Graphics ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Graphics driver to the latest version."
  },
  "HDMI Port on notebook test": {
    "th": "ทดสอบพอร์ต HDMI บนเครื่องโดยตรง",
    "en": "Test the HDMI port directly on the notebook."
  },
  "Headphone Test": {
    "th": "ทดสอบใช้งานร่วมกับหูฟังอื่น",
    "en": "Test with another headphone."
  },
  "Hotkey Driver Update": {
    "th": "อัปเดต Driver ของ Hotkey ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Hotkey driver to the latest version."
  },
  "Idepad → ทดสอบ Run Diagnostics": {
    "th": "ตรวจสอบหัวข้อ Idepad → ทดสอบ Run Diagnostics",
    "en": "Check Idepad → ทดสอบ Run Diagnostics."
  },
  "Input device selected correctly": {
    "th": "ตรวจสอบว่าเลือก Input Device ถูกต้อง",
    "en": "Check that the correct input device is selected."
  },
  "Input volume level checked": {
    "th": "ตรวจสอบระดับเสียง Input Volume",
    "en": "Check Input volume level."
  },
  "Intel RST / Storage Driver loaded": {
    "th": "โหลด Intel RST / Storage Driver ระหว่างติดตั้ง Windows แล้วทดสอบอีกครั้ง",
    "en": "Load Intel RST / Storage Driver during Windows installation and test again."
  },
  "Issue happens on all apps": {
    "th": "ตรวจสอบว่าอาการเกิดกับทุกโปรแกรมหรือไม่",
    "en": "Check whether the issue occurs in all applications."
  },
  "Issue occurs all apps": {
    "th": "ตรวจสอบว่าอาการเกิดกับทุกโปรแกรมหรือไม่",
    "en": "Check whether the issue occurs in all applications."
  },
  "Key stuck / sunk": {
    "th": "ตรวจสอบว่ามีปุ่มค้างหรือปุ่มยุบหรือไม่",
    "en": "Check whether any key is stuck or sunk."
  },
  "Keyboard / Touchpad affected by swollen battery": {
    "th": "ตรวจสอบว่า Keyboard หรือ Touchpad ได้รับผลจากแบตเตอรี่บวมหรือไม่",
    "en": "Check Keyboard / Touchpad affected by swollen battery."
  },
  "Keyboard backlight hotkey test": {
    "th": "ทดสอบปุ่มลัด Keyboard Backlight",
    "en": "Test the keyboard backlight hotkey."
  },
  "Keyboard Online Test": {
    "th": "ทดสอบ Keyboard ผ่าน Online Keyboard Test",
    "en": "Test the keyboard with an online keyboard tester."
  },
  "Keyboard test on other machine": {
    "th": "ทดสอบ Keyboard กับเครื่องอื่น",
    "en": "Test the Keyboard with another machine."
  },
  "LAN Driver Update": {
    "th": "อัปเดต Driver ของ LAN ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the LAN driver to the latest version."
  },
  "LAN Port on notebook test": {
    "th": "ทดสอบสาย LAN กับพอร์ต LAN ของเครื่องโดยตรง",
    "en": "Test the LAN cable directly with the machine LAN port."
  },
  "LED beside charging port": {
    "th": "ตรวจสอบว่าไฟสถานะบริเวณช่องชาร์จติดหรือไม่",
    "en": "Check whether the charging port status light turns on."
  },
  "LED beside port": {
    "th": "ตรวจสอบว่าไฟสถานะบริเวณช่องชาร์จติดหรือไม่",
    "en": "Check whether the charging port status light turns on."
  },
  "LED beside Type-C port": {
    "th": "ตรวจสอบว่าไฟสถานะบริเวณช่องชาร์จติดหรือไม่",
    "en": "Check whether the charging port status light turns on."
  },
  "LED on power button": {
    "th": "ตรวจสอบว่าไฟสถานะที่ปุ่มเปิด/ปิดติดหรือไม่",
    "en": "Check whether the power button status light turns on."
  },
  "Lenovo Diagnostics": {
    "th": "ทดสอบ Run Diagnostics\nสำหรับ ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny และ AIO: กด F10 รัว ๆ ขณะเปิดเครื่อง → เลือก Run All → Quick → Quick Unattended จากนั้นตรวจสอบว่า Pass หรือ Failed\nสำหรับ IdeaPad: กด Novo Button → เลือก UEFI Diagnostics → Run All → Quick จากนั้นตรวจสอบว่า Pass หรือ Failed",
    "en": "Run Lenovo Diagnostics.\nFor ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny, and AIO: press F10 repeatedly while turning on the machine → select Run All → Quick → Quick Unattended, then check whether the result is Pass or Failed.\nFor IdeaPad: press the Novo Button → select UEFI Diagnostics → Run All → Quick, then check whether the result is Pass or Failed."
  },
  "Lenovo Diagnostics Battery": {
    "th": "ทดสอบ Run Lenovo Diagnostics เพื่อตรวจสอบ Battery โดยใช้ขั้นตอนตามรุ่นเครื่อง จากนั้นแจ้งผลว่า Pass หรือ Failed",
    "en": "Run Lenovo Diagnostics to check the battery by following the steps for the machine model, then report whether the result is Pass or Failed."
  },
  "Lenovo Diagnostics Storage": {
    "th": "ทดสอบ Run Lenovo Diagnostics เพื่อตรวจสอบ Storage โดยใช้ขั้นตอนตามรุ่นเครื่อง จากนั้นแจ้งผลว่า Pass หรือ Failed",
    "en": "Run Lenovo Diagnostics to check storage by following the steps for the machine model, then report whether the result is Pass or Failed."
  },
  "Lenovo Hotkey Features update": {
    "th": "อัปเดต Lenovo Hotkey Features ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update Lenovo Hotkey Features to the latest version."
  },
  "Lenovo Vantage setting": {
    "th": "ตรวจสอบการตั้งค่าใน Lenovo Vantage",
    "en": "Check settings in Lenovo Vantage."
  },
  "Lenovo Vantage update": {
    "th": "ทดสอบอัปเดตไดรเวอร์ทั้งหมดผ่านโปรแกรม Lenovo Vantage",
    "en": "Update all drivers through Lenovo Vantage: open Lenovo Vantage → System Update → Check for updates."
  },
  "Lenovo Vantage Update": {
    "th": "ทดสอบอัปเดตไดรเวอร์ทั้งหมดผ่านโปรแกรม Lenovo Vantage",
    "en": "Update all drivers through Lenovo Vantage: open Lenovo Vantage → System Update → Check for updates."
  },
  "Load BIOS default": {
    "th": "โหลดค่า BIOS Default แล้วทดสอบอีกครั้ง",
    "en": "Check Load BIOS Default."
  },
  "Load BIOS Default": {
    "th": "โหลดค่า BIOS Default แล้วทดสอบอีกครั้ง",
    "en": "Check Load BIOS Default."
  },
  "Lock on leave setting enabled": {
    "th": "ตรวจสอบว่าเปิด Lock on leave setting หรือไม่",
    "en": "Check Lock on leave setting enabled."
  },
  "Microphone enhancement disabled": {
    "th": "ปิด Microphone Enhancement แล้วทดสอบอีกครั้ง",
    "en": "Disable Microphone Enhancement and test again."
  },
  "Minidump collected": {
    "th": "รบกวนส่ง Dump file เพื่อตรวจสอบเพิ่มเติม",
    "en": "Please send the dump file for further checking. Open File Explorer → C:\\Windows\\Minidump, copy the .dmp file and send it by email. If there is no file, check C:\\Windows\\MEMORY.DMP."
  },
  "Monitor test on other machine": {
    "th": "ทดสอบจอภาพกับเครื่องอื่น",
    "en": "Test the Monitor with another machine."
  },
  "Mouse test": {
    "th": "ทดสอบการใช้งาน Mouse",
    "en": "Test mouse operation."
  },
  "Mouse test on other machine": {
    "th": "ทดสอบ Mouse กับเครื่องอื่น",
    "en": "Test the Mouse with another machine."
  },
  "Mouse works": {
    "th": "ตรวจสอบว่า Mouse ใช้งานได้หรือไม่",
    "en": "Check whether the mouse works."
  },
  "Move LCD lid": {
    "th": "ขยับฝาจอ LCD แล้วสังเกตว่าอาการเปลี่ยนหรือไม่",
    "en": "Move the LCD lid and check whether the symptom changes."
  },
  "Mute checked": {
    "th": "ตรวจสอบว่าไม่ได้ปิดเสียงอยู่",
    "en": "Check Mute."
  },
  "Network boot disabled": {
    "th": "ปิด Network Boot แล้วทดสอบอีกครั้ง",
    "en": "Disable Network Boot and test again."
  },
  "Noise occurs all apps": {
    "th": "ตรวจสอบว่าเสียงผิดปกติเกิดกับทุกโปรแกรมหรือไม่",
    "en": "Check whether the noise occurs in all applications."
  },
  "Novo Button": {
    "th": "กด Novo Button แล้วตรวจสอบว่าเครื่องตอบสนองหรือไม่",
    "en": "Press the Novo Button and check whether the machine responds."
  },
  "On-Screen Keyboard test": {
    "th": "ทดสอบผ่าน On-Screen Keyboard",
    "en": "Test with On-Screen Keyboard."
  },
  "Original Adapter used": {
    "th": "ตรวจสอบว่าใช้งาน Adapter เดิมของเครื่องหรือไม่",
    "en": "Check whether the original adapter is being used."
  },
  "Other issue": {
    "th": "ตัวเครื่องมีอาการผิดปกติอื่น ๆ เพิ่มเติมหรือไม่",
    "en": "Check whether there are any additional issues."
  },
  "Output device selected correctly": {
    "th": "ตรวจสอบว่าเลือก Output Device ถูกต้อง",
    "en": "Check that the correct output device is selected."
  },
  "Password / PIN reset": {
    "th": "Reset Password หรือ PIN แล้วทดสอบอีกครั้ง",
    "en": "Reset Password or PIN and test again."
  },
  "Physical damage / Liquid spilled": {
    "th": "ตัวเครื่องมีรอยชำรุด เสียหาย หรือมีประวัติน้ำหกใส่หรือไม่",
    "en": "Check whether the machine has physical damage or any liquid spill history."
  },
  "Pixel location confirmed": {
    "th": "ระบุตำแหน่ง Pixel ที่พบปัญหา",
    "en": "Confirm the affected pixel location."
  },
  "Power LED": {
    "th": "ตรวจสอบว่าไฟสถานะที่ปุ่มเปิด/ปิดติดหรือไม่",
    "en": "Check whether the power button status light turns on."
  },
  "Power Reset": {
    "th": "ทดสอบเคลียร์ไฟ (Power reset) โดยสายชาร์จออก จากนั้นกดปุ่ม Power ค้างไว้ประมาณ 30 วินาที แล้วลองเปิดเครื่องใหม่อีกครั้ง",
    "en": "Perform a power reset: unplug the charger, press and hold the Power button for about 30 seconds, then try to turn the machine on again."
  },
  "Power Reset / Emergency Reset": {
    "th": "ตรวจสอบหัวข้อ Power Reset / Emergency Reset",
    "en": "Check Power Reset / Emergency Reset."
  },
  "Proof of ownership checked": {
    "th": "ตรวจสอบหลักฐานความเป็นเจ้าของเครื่อง",
    "en": "Check Proof of ownership."
  },
  "Windows Recovery": {
    "th": "ทดสอบ Windows Recovery โดยเลือกวิธีที่เหมาะสมกับอาการ เช่น Reset This PC, Startup Repair, System Restore หรือ Uninstall Updates",
    "en": "Perform Windows Recovery using the recovery option that best matches the issue, such as Reset This PC, Startup Repair, System Restore, or Uninstall Updates."
  },
  "Re-install Windows": {
    "th": "รบกวนทดสอบติดตั้ง windows ใหม่",
    "en": "Please reinstall Windows and test again."
  },
  "Re-install Windows": {
    "th": "รบกวนทดสอบติดตั้ง windows ใหม่",
    "en": "Please reinstall Windows and test again."
  },
  "RTC battery / CMOS check": {
    "th": "ตรวจสอบ RTC Battery / CMOS",
    "en": "Check RTC battery / CMOS check."
  },
  "Run Lenovo Diagnostics": {
    "th": "ทดสอบ Run Diagnostics\nสำหรับ ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny และ AIO: กด F10 รัว ๆ ขณะเปิดเครื่อง → เลือก Run All → Quick → Quick Unattended จากนั้นตรวจสอบว่า Pass หรือ Failed\nสำหรับ IdeaPad: กด Novo Button → เลือก UEFI Diagnostics → Run All → Quick จากนั้นตรวจสอบว่า Pass หรือ Failed",
    "en": "Run Lenovo Diagnostics.\nFor ThinkPad, ThinkCentre Desktop, ThinkCentre Tiny, and AIO: press F10 repeatedly while turning on the machine → select Run All → Quick → Quick Unattended, then check whether the result is Pass or Failed.\nFor IdeaPad: press the Novo Button → select UEFI Diagnostics → Run All → Quick, then check whether the result is Pass or Failed."
  },
  "Safe Mode Test": {
    "th": "เข้า Safe Mode แล้วทดสอบอาการอีกครั้ง",
    "en": "Enter Safe Mode and test again."
  },
  "SD Card Reader Driver Update": {
    "th": "อัปเดต Driver ของ SD Card Reader ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the SD Card Reader driver to the latest version."
  },
  "SD Card test on other machine": {
    "th": "ทดสอบ SD Card กับเครื่องอื่น",
    "en": "Test the SD Card with another machine."
  },
  "Secure Boot disabled": {
    "th": "ปิด Secure Boot แล้วทดสอบอีกครั้ง",
    "en": "Disable Secure Boot and test again."
  },
  "Serial Port Driver Update": {
    "th": "อัปเดต Driver ของ Serial Port ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Serial Port driver to the latest version."
  },
  "Set date and time in BIOS": {
    "th": "ตั้งค่าวันและเวลาใน BIOS ให้ถูกต้อง",
    "en": "Set the correct date and time in BIOS."
  },
  "SIM card detected": {
    "th": "ตรวจสอบว่าเครื่องตรวจพบ SIM หรือไม่",
    "en": "Check whether the machine detects the SIM."
  },
  "SIM detected": {
    "th": "ตรวจสอบว่าเครื่องตรวจพบ SIM หรือไม่",
    "en": "Check whether the machine detects the SIM."
  },
  "SIM tray damage": {
    "th": "ตรวจสอบว่า SIM Tray เสียหายหรือไม่",
    "en": "Check whether the SIM tray is damaged."
  },
  "Slow occurs / Freeze occurs": {
    "th": "พบอาการเครื่องช้าหรือค้างตอนไหนบ้าง",
    "en": "Check when the slow or freeze issue occurs."
  },
  "Smart Card Driver Update": {
    "th": "อัปเดต Driver ของ Smart Card ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Smart Card driver to the latest version."
  },
  "Specific hotkey listed": {
    "th": "ระบุปุ่ม Hotkey ที่มีปัญหาให้ครบถ้วน",
    "en": "List all affected hotkeys."
  },
  "Specific keys listed": {
    "th": "ระบุปุ่มที่มีปัญหาให้ครบถ้วน",
    "en": "List all affected keys."
  },
  "Stop code / Error code": {
    "th": "รบกวนส่งภาพถ่าพ Error code หรือ Stop code เพื่อตรวจสอบเพิ่มเติม",
    "en": "Please send a photo of the Error Code or Stop Code for further checking."
  },
  "Stop code / Error code collected": {
    "th": "รบกวนส่งภาพถ่าพ Error code หรือ Stop code เพื่อตรวจสอบเพิ่มเติม",
    "en": "Please send a photo of the Error Code or Stop Code for further checking."
  },
  "Storage Firmware Update": {
    "th": "อัปเดต Firmware ของ Storage ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update storage firmware to the latest version."
  },
  "Swap Power Cord": {
    "th": "ทดสอบสลับด้วย AC Power Cord อื่น",
    "en": "Test with another AC Power Cord."
  },
  "Swap Adapter": {
    "th": "ทดสอบสลับ Adapter อื่น ๆ",
    "en": "Test with another adapter."
  },
  "Swap Adapter / Power Cable": {
    "th": "ทดสอบสลับด้วย Adapter / Power Cable อื่น",
    "en": "Test with another Adapter / Power Cable."
  },
  "Swap App": {
    "th": "ทดสอบใช้งานด้วยแอปอื่น",
    "en": "Test with another App."
  },
  "Swap Audio Jack Port": {
    "th": "ทดสอบช่อง Audio Jack อื่น",
    "en": "Test with another Audio Jack Port."
  },
  "Swap Battery": {
    "th": "ทดสอบสลับด้วย Battery อื่น",
    "en": "Test with another Battery."
  },
  "Swap Bluetooth Device": {
    "th": "ทดสอบสลับด้วย Bluetooth Device อื่น",
    "en": "Test with another Bluetooth Device."
  },
  "Swap DisplayPort Cable": {
    "th": "ทดสอบสลับด้วย DisplayPort Cable อื่น",
    "en": "Test with another DisplayPort Cable."
  },
  "Swap DisplayPort cable": {
    "th": "ทดสอบสลับด้วย DisplayPort cable อื่น",
    "en": "Test with another DisplayPort cable."
  },
  "Swap Dock": {
    "th": "ทดสอบสลับด้วย Dock อื่น",
    "en": "Test with another Dock."
  },
  "Swap HDD": {
    "th": "ทดสอบสลับ HDD ตัวอื่น",
    "en": "Test with another HDD."
  },
  "Swap HDMI / DisplayPort cable": {
    "th": "ทดสอบสลับด้วย HDMI / DisplayPort cable อื่น",
    "en": "Test with another HDMI / DisplayPort cable."
  },
  "Swap HDMI cable": {
    "th": "ทดสอบสลับด้วย HDMI cable อื่น",
    "en": "Test with another HDMI cable."
  },
  "Swap HDMI Cable": {
    "th": "ทดสอบสลับด้วย HDMI Cable อื่น",
    "en": "Test with another HDMI Cable."
  },
  "Swap Headphone": {
    "th": "ทดสอบสลับด้วย Headphone อื่น",
    "en": "Test with another Headphone."
  },
  "Swap Keyboard": {
    "th": "ทดสอบสลับด้วย Keyboard อื่น",
    "en": "Test with another Keyboard."
  },
  "Swap LAN cable": {
    "th": "ทดสอบสลับด้วย LAN cable อื่น",
    "en": "Test with another LAN cable."
  },
  "Swap Monitor": {
    "th": "ทดสอบสลับด้วย Monitor อื่น",
    "en": "Test with another Monitor."
  },
  "Swap Mouse": {
    "th": "ทดสอบสลับด้วย Mouse อื่น",
    "en": "Test with another Mouse."
  },
  "Swap other Type-C port": {
    "th": "ทดสอบสลับช่องชาร์จ (Type-C) ช่องอื่น",
    "en": "Test charging with another Type-C port."
  },
  "Swap Power Cable": {
    "th": "ทดสอบสลับด้วย Power Cable อื่น",
    "en": "Test with another Power Cable."
  },
  "Swap Power Cord": {
    "th": "ทดสอบสลับด้วย Power Cord อื่น",
    "en": "Test with another Power Cord."
  },
  "Swap Power Outlet": {
    "th": "ทดสอบสลับด้วย Power Outlet อื่น",
    "en": "Test with another Power Outlet."
  },
  "Swap PSU": {
    "th": "ทดสอบสลับด้วย PSU อื่น",
    "en": "Test with another PSU."
  },
  "Swap RAM": {
    "th": "ทดสอบสลับ RAM ตัวอื่น",
    "en": "Test with another RAM module."
  },
  "Swap SD Card": {
    "th": "ทดสอบสลับด้วย SD Card อื่น",
    "en": "Test with another SD Card."
  },
  "Swap Serial Cable": {
    "th": "ทดสอบสลับสาย Serial อื่น",
    "en": "Test with another Serial Cable."
  },
  "Swap Serial Device": {
    "th": "ทดสอบสลับอุปกรณ์ Serial อื่น",
    "en": "Test with another Serial Device."
  },
  "Swap SIM": {
    "th": "ทดสอบสลับด้วย SIM อื่น",
    "en": "Test with another SIM."
  },
  "Swap Smart Card": {
    "th": "ทดสอบสลับด้วย Smart Card อื่น",
    "en": "Test with another Smart Card."
  },
  "Swap SSD": {
    "th": "ทดสอบสลับ SSD ตัวอื่น",
    "en": "Test with another SSD."
  },
  "Swap SSD / HDD": {
    "th": "ทดสอบสลับด้วย SSD / HDD อื่น",
    "en": "Test with another SSD / HDD."
  },
  "Swap Type-C port charge": {
    "th": "ทดสอบสลับด้วย Type-C port charge อื่น",
    "en": "Test with another Type-C port charge."
  },
  "Swap USB Device": {
    "th": "ทดสอบสลับด้วย USB Device อื่น",
    "en": "Test with another USB Device."
  },
  "Swap USB Port": {
    "th": "ทดสอบสลับด้วย USB Port อื่น",
    "en": "Test with another USB Port."
  },
  "Swap USB-A Port": {
    "th": "ทดสอบสลับด้วย USB-A Port อื่น",
    "en": "Test with another USB-A Port."
  },
  "Swap USB-C cable": {
    "th": "ทดสอบสลับด้วย USB-C cable อื่น",
    "en": "Test with another USB-C cable."
  },
  "Swap USB-C Cable": {
    "th": "ทดสอบสลับด้วย USB-C Cable อื่น",
    "en": "Test with another USB-C Cable."
  },
  "Swap USB-C Port": {
    "th": "ทดสอบสลับด้วย USB-C Port อื่น",
    "en": "Test with another USB-C Port."
  },
  "Swap VGA cable": {
    "th": "ทดสอบสลับด้วย VGA cable อื่น",
    "en": "Test with another VGA cable."
  },
  "Swap VGA Cable": {
    "th": "ทดสอบสลับด้วย VGA Cable อื่น",
    "en": "Test with another VGA Cable."
  },
  "Swap Wi-Fi / Hotspot": {
    "th": "ทดสอบสลับด้วย Wi-Fi / Hotspot อื่น",
    "en": "Test with another Wi-Fi / Hotspot."
  },
  "System Restore": {
    "th": "ทดสอบ System Restore",
    "en": "Perform System Restore / Reset This PC: Choose an option → Troubleshoot → Advanced options → Reset This PC, then choose Keep my files or Remove everything and follow the on-screen steps."
  },
  "Test HDMI Port on Notebook": {
    "th": "ทดสอบพอร์ต HDMI บนเครื่องโดยตรง",
    "en": "Test the HDMI port directly on the notebook."
  },
  "Test Tiny without TIO Dock": {
    "th": "ทดสอบเครื่อง Tiny โดยไม่ต่อผ่าน TIO Dock",
    "en": "Test the Tiny without the TIO Dock."
  },
  "Thinkpad, TC Desktop, TC Tiny, AIO → ทดสอบ Run Diagnostics": {
    "th": "ตรวจสอบหัวข้อ Thinkpad, TC Desktop, TC Tiny, AIO → ทดสอบ Run Diagnostics",
    "en": "Check Thinkpad, TC Desktop, TC Tiny, AIO → ทดสอบ Run Diagnostics."
  },
  "Thunderbolt Driver Update": {
    "th": "อัปเดต Driver ของ Thunderbolt ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Thunderbolt driver to the latest version."
  },
  "Touchpad Driver Update": {
    "th": "อัปเดต Driver ของ Touchpad ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Touchpad driver to the latest version."
  },
  "Touchpad enabled in Settings": {
    "th": "ตรวจสอบว่า Touchpad เปิดใช้งานใน Settings",
    "en": "Check whether Touchpad is enabled in Settings."
  },
  "TrackPoint Driver Update": {
    "th": "อัปเดต Driver ของ TrackPoint ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the TrackPoint driver to the latest version."
  },
  "TrackPoint enabled in BIOS": {
    "th": "ตรวจสอบว่า TrackPoint เปิดใช้งานใน BIOS หรือไม่",
    "en": "Check whether TrackPoint is enabled in BIOS."
  },
  "Uninstall Audio Driver and Restart": {
    "th": "ถอนการติดตั้ง Driver ของ Audio แล้ว Restart เครื่อง",
    "en": "Uninstall the Audio driver, then restart the machine."
  },
  "Uninstall Bluetooth Driver and Restart": {
    "th": "ถอนการติดตั้ง Driver ของ Bluetooth แล้ว Restart เครื่อง",
    "en": "Uninstall the Bluetooth driver, then restart the machine."
  },
  "Uninstall Camera Driver and Restart": {
    "th": "ถอนการติดตั้ง Driver ของ Camera แล้ว Restart เครื่อง",
    "en": "Uninstall the Camera driver, then restart the machine."
  },
  "Uninstall Fingerprint Driver and Restart": {
    "th": "ถอนการติดตั้ง Driver ของ Fingerprint แล้ว Restart เครื่อง",
    "en": "Uninstall the Fingerprint driver, then restart the machine."
  },
  "Uninstall HID-compliant touch screen Driver and Restart": {
    "th": "ถอนการติดตั้ง Driver ของ HID-compliant touch screen แล้ว Restart เครื่อง",
    "en": "Uninstall the HID-compliant touch screen driver, then restart the machine."
  },
  "Uninstall Wireless Driver and Restart": {
    "th": "ถอนการติดตั้ง Driver ของ Wireless แล้ว Restart เครื่อง",
    "en": "Uninstall the Wireless driver, then restart the machine."
  },
  "USB Driver Update / Lenovo Vantage": {
    "th": "อัปเดต Driver ของ USB ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the USB driver to the latest version."
  },
  "USB Keyboard test": {
    "th": "ทดสอบด้วย USB Keyboard",
    "en": "Test with a USB keyboard."
  },
  "USB Mouse / Keyboard test": {
    "th": "ทดสอบด้วย USB Mouse หรือ USB Keyboard",
    "en": "Test with a USB mouse or keyboard."
  },
  "USB to LAN Adapter test": {
    "th": "ทดสอบด้วย USB to LAN Adapter",
    "en": "Test with a USB to LAN adapter."
  },
  "Voice Recorder Test": {
    "th": "ทดสอบบันทึกเสียงผ่าน Voice Recorder",
    "en": "Test recording with Voice Recorder."
  },
  "Volume level checked": {
    "th": "ตรวจสอบระดับเสียง",
    "en": "Check Volume level."
  },
  "Volume Mixer checked": {
    "th": "ตรวจสอบ Volume Mixer",
    "en": "Check Volume Mixer."
  },
  "WLAN Driver Update": {
    "th": "อัปเดต Driver ของ Wi-Fi ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the Wi-Fi driver to the latest version."
  },
  "Wi-Fi test": {
    "th": "ทดสอบเชื่อมต่อ Wi-Fi",
    "en": "Test Wi-Fi connection."
  },
  "Windows Hello Face setup": {
    "th": "ตั้งค่า Windows Hello Face ใหม่แล้วทดสอบอีกครั้ง",
    "en": "Set up Windows Hello Face again and test."
  },
  "Re-install Windows": {
    "th": "รบกวนทดสอบติดตั้ง windows ใหม่",
    "en": "Please reinstall Windows and test again."
  },

  "Re-install Windows": {
    "th": "รบกวนทดสอบติดตั้ง Windows ใหม่",
    "en": "Please test by re-installing Windows."
  },

  "Re-install Windows": {
    "th": "รบกวนทดสอบติดตั้ง Windows ใหม่",
    "en": "Please test by re-installing Windows."
  },
  "Re-install Windows USB recreated": {
    "th": "สร้าง USB ติดตั้ง Windows ใหม่แล้วทดสอบอีกครั้ง",
    "en": "Recreate the Windows installation USB and test again."
  },
  "Windows update": {
    "th": "ทดสอบอัปเดต Windows ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update Windows to the latest version."
  },
  "Windows Update": {
    "th": "ตรวจสอบหัวข้อ Windows Update",
    "en": "Check Windows Update."
  },
  "WLAN / WWAN card changed before issue": {
    "th": "ตรวจสอบว่ามีการเปลี่ยน WLAN / WWAN card ก่อนเกิดอาการหรือไม่",
    "en": "Check whether the WLAN / WWAN card was changed before the issue occurred."
  },
  "WWAN Driver Update": {
    "th": "อัปเดต Driver ของ WWAN ให้เป็นเวอร์ชันล่าสุด",
    "en": "Update the WWAN driver to the latest version."
  },
  "XXX Driver Update": {
    "th": "ทดสอบอัปเดตไรเวอร์ที่มีปัญหา",
    "en": "Update the affected driver."
  },
  "กรณีจอ notebook ไม่มีภาพ → ทดสอบต่อจอนอกและตรวจสอบว่าภาพออกหรือไม่": {
    "th": "ตรวจสอบหัวข้อ กรณีจอ notebook ไม่มีภาพ → ทดสอบต่อจอนอกและตรวจสอบว่าภาพออกหรือไม่",
    "en": "Check กรณีจอ notebook ไม่มีภาพ → ทดสอบต่อจอนอกและตรวจสอบว่าภาพออกหรือไม่."
  },
  "กรณีจอเสีย หรือเป็นเส้น → ทดสอบต่อจอนอกและตรวจสอบว่าพบปัญหาเดียวกันหรือไม่": {
    "th": "ตรวจสอบหัวข้อ กรณีจอเสีย หรือเป็นเส้น → ทดสอบต่อจอนอกและตรวจสอบว่าพบปัญหาเดียวกันหรือไม่",
    "en": "Check กรณีจอเสีย หรือเป็นเส้น → ทดสอบต่อจอนอกและตรวจสอบว่าพบปัญหาเดียวกันหรือไม่."
  },
  "หากไม่มีไฟล์ ให้ไปที่ C:\\Windows\\MEMORY.DMP": {
    "th": "ตรวจสอบหัวข้อ หากไม่มีไฟล์ ให้ไปที่ C:\\Windows\\MEMORY.DMP",
    "en": "Check หากไม่มีไฟล์ ให้ไปที่ C:\\Windows\\MEMORY.DMP."
  },
  "โดยเข้าหน้า Choose an option → Advanced options → Troubleshoot → Reset This PC → เลือก Keep my files หรือ Remove everything → ทำตามขั้นตอนบนหน้าจอจนเสร็จสิ้น": {
    "th": "ตรวจสอบหัวข้อ โดยเข้าหน้า Choose an option → Advanced options → Troubleshoot → Reset This PC → เลือก Keep my files หรือ Remove everything → ทำตามขั้นตอนบนหน้าจอจนเสร็จสิ้น",
    "en": "Check โดยเข้าหน้า Choose an option → Advanced options → Troubleshoot → Reset This PC → เลือก Keep my files หรือ Remove everything → ทำตามขั้นตอนบนหน้าจอจนเสร็จสิ้น."
  },
  "โดยเปิด File Explorer → C:\\Windows\\Minidump → จากนั้น Copy ไฟล์ .dmp และส่งมาทางอีเมลนี้": {
    "th": "ตรวจสอบหัวข้อ โดยเปิด File Explorer → C:\\Windows\\Minidump → จากนั้น Copy ไฟล์ .dmp และส่งมาทางอีเมลนี้",
    "en": "Check โดยเปิด File Explorer → C:\\Windows\\Minidump → จากนั้น Copy ไฟล์ .dmp และส่งมาทางอีเมลนี้."
  },
  "โดยเปิด Lenovo Vantage → ไปที่ System Update → กด Check for updates": {
    "th": "ตรวจสอบหัวข้อ โดยเปิด Lenovo Vantage → ไปที่ System Update → กด Check for updates",
    "en": "Check โดยเปิด Lenovo Vantage → ไปที่ System Update → กด Check for updates."
  }
};
