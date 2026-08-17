// AUTO-GENERATED from docs Markdown for offline runtime. Edit Markdown first.
const KNOWLEDGE_BASE = {
  "BIOS": {
    "BIOS Password": {
      "description": "มีการตั้งรหัสผ่านเพื่อป้องกันการเปิดเครื่องหรือการเข้าถึง BIOS Setup",
      "possibleCause": [
        "มีการตั้ง BIOS Password ไว้",
        "ไม่ทราบหรือจำรหัสผ่านเดิมไม่ได้"
      ],
      "recommendedAction": [
        "สอบถามลูกค้าว่าทราบรหัสผ่านเดิมหรือไม่",
        "หากไม่ทราบรหัสผ่าน จะไม่สามารถลบหรือรีเซ็ตด้วย Software ได้",
        "ต้องเปลี่ยน System Board",
        "ไม่อยู่ภายใต้เงื่อนไขการรับประกันมาตรฐาน"
      ]
    },
    "Supervisor Password": {
      "description": "มีการตั้งรหัสผ่านเพื่อควบคุมการเข้าถึงและการเปลี่ยนแปลงการตั้งค่า BIOS",
      "possibleCause": [
        "มีการตั้ง Supervisor Password ไว้",
        "ไม่ทราบหรือจำรหัสผ่านเดิมไม่ได้"
      ],
      "recommendedAction": [
        "สอบถามลูกค้าว่าทราบรหัสผ่านเดิมหรือไม่",
        "หากไม่ทราบรหัสผ่าน จะไม่สามารถลบหรือรีเซ็ตด้วย Software ได้",
        "ต้องเปลี่ยน System Board",
        "ไม่อยู่ภายใต้เงื่อนไขการรับประกันมาตรฐาน"
      ]
    }
  },
  "Code": {
    "0162 Setup Data Integrity Check Failure": {
      "description": "BIOS ตรวจพบว่าค่าการตั้งค่าระบบ (BIOS Configuration) ไม่ถูกต้องหรือไม่สอดคล้องกับข้อมูลที่บันทึกไว้",
      "possibleCause": [
        "Load BIOS Default หรือ CMOS Reset",
        "CMOS Battery อ่อนหรือถูกถอด",
        "BIOS Update",
        "BIOS Configuration เปลี่ยนแปลง"
      ],
      "recommendedAction": [
        "Load BIOS Default",
        "ตั้งค่า Date/Time ให้ถูกต้อง",
        "ตรวจสอบ BIOS Version",
        "หากยังพบอาการเดิม ให้ตรวจสอบ CMOS Battery หรือ System Board"
      ]
    },
    "0183 Bad CRC of Security Settings in EFI Variable": {
      "description": "BIOS ตรวจพบว่าข้อมูล Security Settings ที่จัดเก็บใน EFI Variable ไม่ถูกต้องหรือเสียหาย",
      "possibleCause": [
        "ข้อมูล Security Settings ใน BIOS เสียหาย",
        "BIOS Update ไม่สมบูรณ์",
        "BIOS Configuration หรือ EFI Variable ผิดปกติ",
        "System Board มีปัญหา"
      ],
      "recommendedAction": [
        "Load BIOS Default",
        "ตรวจสอบและอัปเดต BIOS Version",
        "ตั้งค่า Security ใน BIOS ใหม่หากจำเป็น",
        "หากยังพบอาการเดิม ให้ตรวจสอบหรือเปลี่ยน System Board"
      ]
    },
    "0188 Invalid Rfid Serialization Information Area": {
      "description": "BIOS ตรวจพบว่าข้อมูล RFID Serialization ภายในระบบไม่ถูกต้องหรือไม่สมบูรณ์",
      "possibleCause": [
        "ข้อมูล Machine Information ใน BIOS ไม่ถูกต้อง",
        "ข้อมูล Serial/UUID สูญหายหลังเปลี่ยน System Board",
        "BIOS หรือ EEPROM มีปัญหา",
        "การตั้งค่าด้วย Service Tool ไม่สมบูรณ์"
      ],
      "recommendedAction": [
        "ตรวจสอบ Machine Type, Serial Number และ UUID ใน BIOS",
        "ตรวจสอบประวัติการเปลี่ยน System Board",
        "ดำเนินการแก้ไขข้อมูลด้วย Service Tool โดยเจ้าหน้าที่ที่ได้รับอนุญาต",
        "หากไม่สามารถแก้ไขได้ ให้ตรวจสอบ System Board"
      ]
    },
    "0190 Critical Low-Battery Error": {
      "description": "ระบบตรวจพบว่าระดับแบตเตอรี่ต่ำมากจนไม่เพียงพอสำหรับการเปิดเครื่องหรือเริ่มต้นระบบ",
      "possibleCause": [
        "Battery มีประจุต่ำมาก",
        "AC Adapter ไม่ได้เชื่อมต่อหรือจ่ายไฟไม่ปกติ",
        "Battery เสื่อมหรือไม่ถูกตรวจพบ",
        "Charging Port หรือ System Board มีปัญหา"
      ],
      "recommendedAction": [
        "เชื่อมต่อ AC Adapter และชาร์จอย่างน้อย 30 นาที",
        "ตรวจสอบว่าเครื่องตรวจพบ Adapter และ Battery",
        "ทดสอบด้วย AC Adapter ที่รองรับ",
        "หากยังพบอาการเดิม ให้ตรวจสอบ Battery, Charging Port หรือ System Board"
      ]
    },
    "0271 Date and Time Error": {
      "description": "BIOS ตรวจพบว่าค่าวันที่หรือเวลาไม่ถูกต้อง หรือค่าถูกรีเซ็ตหลังปิดเครื่อง",
      "possibleCause": [
        "Date/Time ใน BIOS ไม่ถูกต้อง",
        "CMOS/RTC Battery อ่อนหรือหมด",
        "มีการ Load BIOS Default หรือ CMOS Reset",
        "System Board มีปัญหา"
      ],
      "recommendedAction": [
        "ตั้งค่า Date/Time ใน BIOS ให้ถูกต้อง",
        "Load BIOS Default แล้วตั้งค่า Date/Time ใหม่",
        "ปิดเครื่องและทดสอบว่าค่ายังคงถูกบันทึกหรือไม่",
        "หากวันที่และเวลาผิดซ้ำ ให้ตรวจสอบ CMOS/RTC Battery หรือ System Board"
      ]
    },
    "1802 Unauthorized Network Card Is Plugged in": {
      "description": "BIOS ตรวจพบ Network Card ที่ไม่ได้รับการรองรับหรือไม่ตรงกับรายการอะไหล่ที่กำหนดสำหรับรุ่นเครื่อง",
      "possibleCause": [
        "ติดตั้ง Wi-Fi/Network Card ที่ไม่รองรับ",
        "มีการเปลี่ยน Network Card เป็นรุ่นหรือ FRU P/N อื่น",
        "Hardware ID ของ Network Card ไม่ผ่านการตรวจสอบ",
        "Network Card หรือ System Board มีปัญหา"
      ],
      "recommendedAction": [
        "ปิดเครื่องและถอด Network Card ที่ไม่รองรับ",
        "ตรวจสอบ FRU P/N ให้ตรงกับรุ่นเครื่อง",
        "ติดตั้ง Network Card ที่รองรับแล้วทดสอบอีกครั้ง",
        "หากใช้อะไหล่ถูกต้องแล้วยังพบอาการ ให้ตรวจสอบ Network Card หรือ System Board"
      ]
    },
    "1962 No Operating System Found": {
      "description": "BIOS ไม่พบระบบปฏิบัติการที่สามารถบูตได้จากอุปกรณ์จัดเก็บข้อมูล",
      "possibleCause": [
        "Boot Priority ไม่ถูกต้อง",
        "SSD/HDD ไม่ถูกตรวจพบ",
        "Windows Boot Loader เสียหาย",
        "Storage หรือ System Board มีปัญหา"
      ],
      "recommendedAction": [
        "ตรวจสอบว่า BIOS พบ Storage หรือไม่",
        "ตรวจสอบ Boot Mode และ Boot Order",
        "Startup Repair หรือ Reinstall Windows",
        "ทดสอบ Storage กับเครื่องอื่นหรือเปลี่ยน Storage หากจำเป็น"
      ]
    },
    "2100 Detection Error on Storage Device": {
      "description": "BIOS ไม่สามารถตรวจพบหรือสื่อสารกับอุปกรณ์จัดเก็บข้อมูลได้ตามปกติ",
      "possibleCause": [
        "SSD/HDD หลวมหรือติดตั้งไม่สมบูรณ์",
        "SSD/HDD เสีย",
        "Storage Connector หรือ Cable มีปัญหา",
        "System Board มีปัญหา"
      ],
      "recommendedAction": [
        "ตรวจสอบว่า BIOS พบ Storage หรือไม่",
        "ถอดและติดตั้ง SSD/HDD ใหม่",
        "ทดสอบ Storage กับเครื่องอื่น หรือทดสอบด้วย Storage ที่ใช้งานได้",
        "หากยังพบอาการเดิม ให้ตรวจสอบ Storage Connector หรือ System Board"
      ]
    },
    "2101 Detection Error on HDD": {
      "description": "BIOS ไม่สามารถตรวจพบหรือสื่อสารกับ HDD/SSD ที่ระบุตำแหน่งไว้ได้",
      "possibleCause": [
        "HDD/SSD หลวมหรือติดตั้งไม่สมบูรณ์",
        "HDD/SSD เสีย",
        "Storage Connector หรือ Cable มีปัญหา",
        "System Board มีปัญหา"
      ],
      "recommendedAction": [
        "ตรวจสอบว่า BIOS พบ HDD/SSD หรือไม่",
        "ถอดและติดตั้ง HDD/SSD ใหม่",
        "ทดสอบด้วย HDD/SSD ที่ใช้งานได้",
        "หากยังพบอาการเดิม ให้ตรวจสอบ Connector, Cable หรือ System Board"
      ]
    },
    "2200 Machine Type and Serial Number Are Invalid": {
      "description": "BIOS ตรวจพบว่า Machine Type หรือ Serial Number ของเครื่องไม่ถูกต้องหรือไม่มีข้อมูล",
      "possibleCause": [
        "ข้อมูล Machine Type หรือ Serial Number สูญหาย",
        "มีการเปลี่ยน System Board",
        "การตั้งค่าข้อมูลด้วย Service Tool ไม่สมบูรณ์",
        "BIOS/EEPROM มีปัญหา"
      ],
      "recommendedAction": [
        "ตรวจสอบ Machine Type และ Serial Number ใน BIOS",
        "ตรวจสอบฉลากเครื่องและประวัติการเปลี่ยน System Board",
        "แก้ไขข้อมูลด้วย Service Tool โดยเจ้าหน้าที่ที่ได้รับอนุญาต",
        "หากไม่สามารถบันทึกข้อมูลได้ ให้ตรวจสอบ System Board"
      ]
    },
    "2201 Machine Uuid Is Invalid": {
      "description": "BIOS ตรวจพบว่า UUID ของเครื่องไม่ถูกต้อง ไม่มีข้อมูล หรือซ้ำกับระบบอื่น",
      "possibleCause": [
        "ข้อมูล UUID สูญหาย",
        "มีการเปลี่ยน System Board",
        "การตั้งค่าด้วย Service Tool ไม่สมบูรณ์",
        "BIOS/EEPROM มีปัญหา"
      ],
      "recommendedAction": [
        "ตรวจสอบ UUID ใน BIOS",
        "ตรวจสอบประวัติการเปลี่ยน System Board",
        "สร้างหรือแก้ไข UUID ด้วย Service Tool โดยเจ้าหน้าที่ที่ได้รับอนุญาต",
        "หากไม่สามารถบันทึกข้อมูลได้ ให้ตรวจสอบ System Board"
      ]
    },
    "Boot Device Missing": {
      "description": "BIOS ไม่พบอุปกรณ์ที่สามารถใช้บูตเข้าสู่ระบบปฏิบัติการได้",
      "possibleCause": [
        "Boot Order ไม่ถูกต้อง",
        "SSD/HDD ไม่ถูกตรวจพบ",
        "Windows Boot Loader เสียหาย",
        "Storage หรือ System Board มีปัญหา"
      ],
      "recommendedAction": [
        "ตรวจสอบว่า BIOS พบ Storage หรือไม่",
        "ตรวจสอบ Boot Mode และ Boot Order",
        "ดำเนินการ Startup Repair หาก BIOS พบ Storage",
        "ทดสอบหรือเปลี่ยน Storage หาก BIOS ไม่พบอุปกรณ์"
      ]
    },
    "Button Cover Tamper Detection": {
      "description": "ระบบตรวจพบว่าฝาครอบเครื่องถูกเปิด หรือสวิตช์ตรวจจับการเปิดฝามีสถานะผิดปกติ",
      "possibleCause": [
        "ฝาครอบปิดไม่สนิท",
        "มีการเปิดหรือถอดฝาครอบเครื่อง",
        "Tamper Switch ติดขัดหรือเสีย",
        "BIOS Configuration หรือ System Board มีปัญหา"
      ],
      "recommendedAction": [
        "ปิดเครื่องและตรวจสอบว่าฝาครอบติดตั้งแน่นสนิท",
        "ตรวจสอบ Tamper Switch และตำแหน่งกดของฝาครอบ",
        "Load BIOS Default และทดสอบอีกครั้ง",
        "หากยังพบอาการเดิม ให้ตรวจสอบ Tamper Switch หรือ System Board"
      ]
    },
    "PXE": {
      "description": "เครื่องพยายามบูตผ่าน Network (PXE) เนื่องจากไม่พบอุปกรณ์หรือระบบปฏิบัติการที่บูตได้ก่อนหน้า",
      "possibleCause": [
        "Network Boot อยู่ก่อน Storage ใน Boot Order",
        "SSD/HDD ไม่ถูกตรวจพบ",
        "Windows Boot Loader เสียหาย",
        "มีการเปิด PXE/Network Boot ไว้"
      ],
      "recommendedAction": [
        "ตรวจสอบว่า BIOS พบ Storage หรือไม่",
        "ตั้ง Windows Boot Manager หรือ Storage ให้อยู่ก่อน Network Boot",
        "ปิด PXE/Network Boot หากไม่ได้ใช้งาน",
        "หาก BIOS พบ Storage แต่ยังบูตไม่ได้ ให้ดำเนินการ Startup Repair หรือ Reinstall Windows"
      ]
    }
  },
  "Troubleshooting Guide": {
    "Lenovo Vantage Update": {
      "content": "วิธีอัปเดต Driver ผ่าน Lenovo Vantage\n\n1. เปิด Lenovo Vantage\n2. ไปที่ System Update\n3. กด Check for updates\n4. ติดตั้งรายการที่พบ และ Restart เครื่อง\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue"
    },
    "Lenovo Diagnostics": {
      "content": "Lenovo Diagnostics (ผ่าน Lenovo Vantage)\n1. เปิด Lenovo Vantage หรือ Lenovo Commercial Vantage\n2. ไปที่ Device Diagnostics → Hardware Scan → Quick Scan → จากนั้นกด Scan\nตรวจสอบผลว่า Pass หรือ Failed\n\nLenovo Diagnostics (ผ่าน F10)\n1. ปิดเครื่อง\n2. เปิดเครื่องแล้วกด F10 รัว ๆ\n3. เลือก Run All → Quick → Quick Unattended\nรอให้ทดสอบเสร็จ และตรวจสอบผลว่า Pass หรือ Failed"
    },
    "Battery Report": {
      "content": "วิธีดึง Battery Report\n\n1. เปิด Command Prompt หรือ CMD\n2. พิมพ์คำสั่ง powercfg /batteryreport\n3. จากนั้นเปิด This PC → Drive C → Windows → System32 และหาชื่อไฟล์ battery-report.html\n\nสิ่งที่ต้องส่งกลับ\n• battery-report.html"
    },
    "Battery Health": {
      "content": "Battery Health\n\n1. เปิด Lenovo Vantage หรือ Lenovo Commercial Vantage\n2. ไปที่ Device → Power → ตรวจสอบหัวข้อ Battery Health\nแจ้งผลที่แสดง เช่น Good / Fair / Poor พร้อมส่งภาพหน้าจอ"
    },
    "BIOS Version": {
      "content": "วิธีดู BIOS Version\n\nวิธีที่ 1\n1. กด Win + R\n2. พิมพ์ msinfo32\n3. ดูหัวข้อ BIOS Version/Date\n\nวิธีที่ 2\n1. เปิด Command Prompt หรือ CMD\n2. พิมพ์คำสั่ง systeminfo\n3. ดูหัวข้อ BIOS Version\n\nสิ่งที่ต้องส่งกลับ\n• BIOS Version"
    },
    "Windows Product Key": {
      "content": "วิธีดู Windows Product Key\n\n1. เปิด Command Prompt หรือ CMD\n2. พิมพ์คำสั่ง wmic path softwarelicensingservice get OA3xOriginalProductKey\n3. กด Enter เพื่อตรวจสอบ Product Key\n\nสิ่งที่ต้องส่งกลับ\n• Product Key หรือผลลัพธ์ที่แสดง"
    },
    "Windows Activation": {
      "content": "วิธี Activate Windows\n\n1. เปิด Settings\n2. ไปที่ System → Activation\n3. กด Change Product Key\n4. ใส่ Product Key แล้วกด Activate\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Error Code"
    },
    "Reset This Pc": {
      "content": "Reset This PC\n\nกรณีเข้า Windows ได้\n1. ไปที่ Settings → System → Recovery\n2. เลือก Reset This PC\n3. เลือก Keep my files หรือ Remove everything\n4. ทำตามขั้นตอนจนเสร็จ\n\nกรณีเข้า Windows ไม่ได้\n1. เปิดเครื่อง แล้วกดปุ่ม Power ค้างเมื่อเห็นโลโก้ Lenovo หรือวงกลมโหลด Windows ทำซ้ำ 3 ครั้ง\n2. ครั้งที่ 4 จะเข้า Windows Recovery (WinRE)\n3. เลือก Troubleshoot → Reset This PC\n4. เลือก Keep my files หรือ Remove everything\n5. ทำตามขั้นตอนจนเสร็จ"
    },
    "Startup Repair": {
      "content": "Startup Repair\n\nกรณีเข้า Windows ได้\n1. ไปที่ Settings → System → Recovery\n2. เลือก Advanced startup → Restart now\n3. เลือก Troubleshoot → Advanced options → Startup Repair\n4. รอให้ระบบซ่อมแซมจนเสร็จ\n\nกรณีเข้า Windows ไม่ได้\n1. เปิดเครื่อง แล้วกดปุ่ม Power ค้างเมื่อเห็นโลโก้ Lenovo หรือวงกลมโหลด Windows ทำซ้ำ 3 ครั้ง\n2. ครั้งที่ 4 จะเข้า Windows Recovery (WinRE)\n3. เลือก Troubleshoot → Advanced options → Startup Repair\n4. รอให้ระบบซ่อมแซมจนเสร็จ"
    },
    "System Restore": {
      "content": "System Restore\n\nกรณีเข้า Windows ได้\n1. ไปที่ Settings → System → Recovery\n2. เลือก Advanced startup → Restart now\n3. เลือก Troubleshoot → Advanced options → System Restore\n4. เลือก Restore Point และทำตามขั้นตอนจนเสร็จ\n\nกรณีเข้า Windows ไม่ได้\n1. เปิดเครื่อง แล้วกดปุ่ม Power ค้างเมื่อเห็นโลโก้ Lenovo หรือวงกลมโหลด Windows ทำซ้ำ 3 ครั้ง\n2. ครั้งที่ 4 จะเข้า Windows Recovery (WinRE)\n3. เลือก Troubleshoot → Advanced options → System Restore\n4. เลือก Restore Point และทำตามขั้นตอนจนเสร็จ"
    },
    "Uninstall Windows Update": {
      "content": "Uninstall Windows Update\n\nวัตถุประสงค์\nถอนการติดตั้ง Windows Update ล่าสุด หากปัญหาเกิดขึ้นหลังจากอัปเดตระบบ\n\nกรณีเข้า Windows ได้\n1. กด Win + I เพื่อเปิด Settings\n2. ไปที่ Windows Update\n3. เลือก Update history\n4. เลื่อนลงด้านล่าง และเลือก Uninstall updates\n5. เลือก Update ล่าสุด หรือ KB ที่คาดว่าเกี่ยวข้องกับปัญหา\n6. กด Uninstall\n7. Restart เครื่อง\n8. ตรวจสอบอาการอีกครั้ง\n\nหมายเหตุ: หากถอนผ่าน Settings ไม่ได้ ให้เปิด Control Panel → Programs and Features → View installed updates แล้วถอน KB ล่าสุดแทน\n\nกรณีเข้า Windows ไม่ได้\n1. เปิดเครื่อง และเมื่อเห็นโลโก้ Lenovo หรือ Windows ให้กดปุ่ม Power ค้างเพื่อปิดเครื่อง\n2. เปิดเครื่องใหม่ และทำซ้ำประมาณ 3 ครั้ง จนเข้าสู่ Preparing Automatic Repair / Windows Recovery Environment (WinRE)\n3. เลือก Troubleshoot\n4. เลือก Advanced options\n5. เลือก Uninstall Updates\n6. เลือก Uninstall latest Quality Update หรือ Uninstall latest Feature Update\n7. ดำเนินการตามขั้นตอนบนหน้าจอจนเสร็จ\n8. Restart เครื่อง และตรวจสอบอาการอีกครั้ง"
    },
    "Re-install Windows": {
      "content": "วิธีติดตั้ง Windows\n\n1. ดาวน์โหลด Windows จาก Microsoft\nลิงก์ดาวน์โหลด: https://www.microsoft.com/en-us/software-download/windows11\n\n2. วิดีโอแนะนำการสร้าง USB Installer\nhttps://www.youtube.com/watch?v=soASOZeAE9M&t=71s\n\n3. ขั้นตอนการติดตั้ง Windows หลังจากสร้าง USB Installer เรียบร้อยแล้ว\n• เข้า BIOS โดยกดปุ่ม F1 รัว ๆ หลังจากเปิดเครื่อง\n• ไปที่เมนู Security → Secure Boot → Disable\n• กด F10 และเลือก Yes\nหลังจากนั้นหน้าจอจะดับ ให้กดปุ่ม F12 รัว ๆ เพื่อเข้าสู่ Boot Menu\n• เลือก USB\n• จากนั้นสามารถดำเนินการตามขั้นตอนที่แสดงบนหน้าจอได้เลย\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue"
    },
    "Event Viewer": {
      "content": "วิธีเปิด Event Viewer\n\n1. คลิกขวาที่ Start\n2. เลือก Event Viewer\n3. ไปที่ Windows Logs → System หรือ Application\n4. ตรวจสอบ Error ที่เกี่ยวข้องกับช่วงเวลาที่เกิดอาการ\n\nสิ่งที่ต้องส่งกลับ\n• Screenshot หรือ Error Code ที่พบ"
    },
    "Sfc /Scannow": {
      "content": "วิธีใช้งาน SFC /scannow\n\n1. เปิด Command Prompt หรือ CMD แบบ Run as administrator\n2. พิมพ์คำสั่ง sfc /scannow\n3. รอจนระบบสแกนเสร็จ 100%\n4. Restart เครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue"
    },
    "Safe Mode": {
      "content": "วิธีเข้า Safe Mode\n\n1. กด Shift ค้างไว้ แล้วเลือก Restart\n2. เลือก Troubleshoot\n3. เลือก Advanced options\n4. เลือก Startup Settings → Restart\n5. กด 4 หรือ F4 เพื่อเข้า Safe Mode\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue"
    },
    "Dump File": {
      "content": "วิธีดึง Dump File\n\n1. เปิด File Explorer\n2. ไปที่ C:\\Windows\\Minidump\n3. Copy ไฟล์ .dmp ล่าสุด\n4. หากไม่มีไฟล์ ให้ไปที่ C:\\Windows\\MEMORY.DMP\n\nสิ่งที่ต้องส่งกลับ\n• ไฟล์ .dmp หรือ MEMORY.DMP"
    },
    "BitLocker Recovery": {
      "content": "BitLocker Recovery\n\nกรณีดึง Recovery Key จากบัญชี Microsoft\n\n1. เปิดเว็บ https://account.microsoft.com/devices/recoverykey\n2. ล็อกอินด้วยบัญชี Microsoft ที่ใช้กับเครื่อง\n3. ตรวจสอบหน้า BitLocker Recovery Keys\n4. ดูชื่อเครื่อง (Device Name) และวันที่บันทึก Key\n5. นำ Recovery Key 48 หลักไปปลดล็อกเครื่อง\n\nกรณีเข้า Windows ได้\n\n1. เปิด Control Panel\n2. ไปที่ BitLocker Drive Encryption\n3. ตรวจสอบสถานะ BitLocker หรือ Backup Recovery Key\n\nหากหา Recovery Key ไม่ได้\n\nแนะนำ Backup ข้อมูลถ้าทำได้ และติดตั้ง Windows ใหม่"
    },
    "Microsoft Office Activation": {
      "content": "วิธี Activate Microsoft Office\n\n1. เปิด Word / Excel / PowerPoint\n2. เลือก Sign in\n3. Login ด้วย Microsoft Account ที่มี License\n4. ไปที่ Account → Activate Product\n5. หากพบ Error ให้ถ่ายรูปหรือแจ้ง Error Code\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Error Code"
    },
    "Bypass Windows 11 Oobe": {
      "content": "วิธี Bypass Windows 11 ระหว่าง Setup\n\n1. ที่หน้า Setup ให้กด Shift + F10 เพื่อเปิด Command Prompt\n2. พิมพ์คำสั่ง OOBE\\BYPASSNRO\n3. กด Enter\n4. เครื่องจะ Restart\n5. เลือก I don't have internet เพื่อตั้งค่าต่อ\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue"
    },
    "Always on USB": {
      "content": "วิธีตั้งค่า Always On USB\n\nกรณีปิดด้วยโปรแกรม Lenovo Commercial Vantage\n1. เปิด Lenovo Commercial Vantage\n2. ไปที่ Device → Power → Always On USB → จากนั้นตั้งเป็น Off\n3. Restart เครื่อง 1 ครั้ง แล้วทดสอบใช้งานอีกครั้ง\n\nวิธีปิดด้วย BIOS\n1. เข้า BIOS โดยกด F1 รัวๆขณะเปิดเครื่อง\n2. ไปที่ Config → USB → Always On USB → จากนั้นตั้งเป็น Off\n3. กด F10 และเลือก Yes เพื่อ Save"
    },
    "BIOS / Supervisor Password": {
      "content": "BIOS / Supervisor Password\n\nข้อมูลสำคัญ\n\n• ต้องใช้รหัสเดิมในการปลดล็อกหรือแก้ไข\n• หากไม่ทราบรหัส จะไม่สามารถ Clear Password ด้วย Software ได้\n• กรณีลืมรหัส จำเป็นต้องเปลี่ยน Mainboard\n• กรณีนี้ไม่ครอบคลุมการรับประกัน\n\nสิ่งที่ควรแจ้งลูกค้า\n\n1. ตรวจสอบว่าลูกค้าทราบรหัสเดิมหรือไม่\n2. หากไม่ทราบรหัส ให้แจ้งเงื่อนไขการเปลี่ยน Mainboard\n3. แจ้งว่าไม่สามารถเคลมภายใต้ประกันได้"
    },
    "Lock on Leave Function": {
      "content": "Lock on Leave Function\n\nวิธีปิดใน Lenovo Vantage\n\n1. เปิด Lenovo Vantage\n2. ไปที่ Device หรือ Smart Assist\n3. หาเมนู Presence Detection / Zero Touch Lock / Lock on Leave\n4. ปิดฟังก์ชัน Lock on Leave\n5. Restart เครื่องและทดสอบอีกครั้ง\n\nวิธีตรวจสอบใน BIOS (บางรุ่น)\n\n1. เข้า BIOS โดยกด F1 หลังเปิดเครื่อง\n2. ไปที่ Security หรือ Intelligent Security\n3. ตรวจสอบ Presence Detection / Human Presence Detection\n4. Disable ฟังก์ชันที่เกี่ยวข้อง\n5. กด F10 เพื่อ Save และ Restart"
    },
    "Reset Battery": {
      "content": "Reset Battery เพื่อยืดอายุการใช้งาน\n\n1. เปิด Lenovo Commercial Vantage หรือ Lenovo Vantage\n2. ไปที่ Device → Power\n3. ค้นหาหัวข้อ Battery Gauge Reset\n4. เสียบสายชาร์จไว้ระหว่างทำ Reset\n5. กด Reset และรอให้ระบบทำงานจนเสร็จ\n\nระบบจะดำเนินการอัตโนมัติ\n1. ชาร์จแบตเตอรี่จนถึง 100%\n2. ปล่อยแบตเตอรี่ลงจนเกือบ 0%\n3. ชาร์จกลับขึ้นมา 100%\n\nใช้เวลาประมาณ 4–8 ชั่วโมง\nแนะนำให้ทำช่วงกลางวัน หรือช่วงกลางคืนโดยเปิดเครื่องทิ้งไว้"
    },
    "LCD Self-Test": {
      "content": "LCD Self-Test\n\nMethod 1\n1. ถอดอุปกรณ์ภายนอกทั้งหมด\n2. เคลียร์ไฟโดยกดปุ่ม Power ค้าง 10–15 วินาที\n3. กด Fn + Left Ctrl ค้างไว้\n4. ระหว่างกดค้าง ให้กดปุ่ม Power\n5. เครื่องจะเข้าสู่ LCD Self-Test\n\nMethod 2\n1. เปิดเครื่องและกด F10 ย้ำ ๆ\n2. เข้า Lenovo Diagnostics\n3. เลือก Run Test\n4. เลือกหัวข้อ Display"
    },
    "Disable Audio Enhancements": {
      "content": "Disable Audio Enhancements\n\nMethod 1: Windows Settings\n1. เปิด Settings → System → Sound\n2. เลือก Microphone ที่ใช้งาน (Built-in / Internal หรือ External Microphone)\n3. ไปที่ Advanced → Signal\n4. เอาเครื่องหมายถูกออกที่ Enable audio enhancements\n5. กด Apply และ OK\n\nMethod 2: Control Panel\n1. เปิด Control Panel → Sound\n2. ไปที่แท็บ Recording\n3. ดับเบิลคลิก Microphone ที่ใช้งาน (Built-in / Internal หรือ External Microphone)\n4. ไปที่ Advanced → Signal\n5. เอาเครื่องหมายถูกออกที่ Enable audio enhancements\n6. กด Apply และ OK"
    },
    "SSD Not Found During Install OS": {
      "content": "SSD Not Found During Install OS\n\nวิธีตรวจสอบ\n\n1. ตรวจสอบว่า BIOS พบ SSD หรือไม่\n- เข้า BIOS และตรวจสอบว่าเครื่องตรวจพบ SSD หรือไม่\n- หาก BIOS ไม่พบ SSD ให้ดำเนินการตาม Troubleshooting Guide : SSD Not Detected\n\n2. ดาวน์โหลด Intel RST / Storage Driver โดยใช้คอมพิวเตอร์เครื่องอื่น\n- เข้าเว็บไซต์ Lenovo Support\n- ดาวน์โหลด Intel RST / Storage Driver ให้ตรงกับรุ่นเครื่อง\n- แตกไฟล์ (Extract) ที่ดาวน์โหลดมา\n- คัดลอกไฟล์ที่แตกแล้วลงใน USB Flash Drive\n\n3. โหลด Driver ระหว่างติดตั้ง Windows\n- เมื่ออยู่หน้าจอ \"Where do you want to install Windows?\" ให้เลือก Load driver\n- เลือกตำแหน่งไฟล์จาก USB Flash Drive\n- เลือก Intel RST / Storage Driver\n- เมื่อติดตั้ง Driver สำเร็จ ให้ตรวจสอบว่า SSD ปรากฏในรายการไดรฟ์หรือไม่"
    },
    "Fn & Ctrl Key Swap": {
      "content": "Fn & Ctrl Key Swap\n\nMethod 1: Lenovo Vantage\n1. เปิด Lenovo Commercial Vantage หรือ Lenovo Vantage\n2. ไปที่ Device → Input & Accessories → Keyboard\n3. ตรวจสอบ Fn and Ctrl Key Swap\n4. หากเปิดใช้งานอยู่ ให้ปิด Off\n5. ทดสอบปุ่ม Left Ctrl อีกครั้ง\n\nMethod 2: BIOS\n1. เข้า BIOS\n2. ไปที่ Config → Keyboard/Mouse\n3. ตรวจสอบ Fn and Ctrl Key Swap\n4. ตั้งค่าเป็น Disabled\n5. กด F10 เพื่อ Save and Exit\n6. ทดสอบปุ่ม Left Ctrl อีกครั้ง"
    },
    "Downgrade BIOS": {
      "content": "Downgrade BIOS\n\nวัตถุประสงค์\nดาวน์โหลด BIOS Version ก่อนหน้าเพื่อนำมา Downgrade BIOS\n\nวิธีดาวน์โหลด BIOS Version ก่อนหน้า\n\n1. เข้า Lenovo Support ตามรุ่นเครื่อง แล้วไปที่ BIOS/UEFI\n2. เปิด Details ของ BIOS ล่าสุด และ Copy Link จากปุ่ม Download\n3. เปิดไฟล์ README ของ BIOS รุ่นล่าสุด\n4. หา Package ID ของ BIOS Version ที่ต้องการ เช่น r26uj15w\n5. นำ Link ที่ Copy มา แก้เฉพาะชื่อไฟล์ท้าย Link ให้เป็น Package ID ที่ต้องการ แล้วกด Enter\n\nตัวอย่าง\nLatest\nhttps://download.lenovo.com/pccbbs/mobiles/r26uj16w.exe\n\nPrevious\nhttps://download.lenovo.com/pccbbs/mobiles/r26uj15w.exe\n\nหมายเหตุ\n- ใช้ Package ID จาก README เท่านั้น\n- วิธีนี้ใช้ได้เฉพาะ BIOS ที่ยังอยู่บน Server ของ Lenovo\n- ก่อน Downgrade ให้ตรวจสอบ AC Adapter, Battery, BitLocker และ BIOS Back Flash\n- หลัง Downgrade ให้ Load BIOS Default และ Restart เครื่อง"
    },
    "Emergency Reset": {
      "content": "วิธีทำ Emergency Reset\n\n1. ถอด Adapter ออกจากเครื่อง\n2. ใช้คลิปหนีบกระดาษ (Paper Clip) กดรู Emergency Reset ค้างประมาณ 5–10 วินาที\n3. ต่อ Adapter กลับเข้าเครื่อง\n4. เปิดเครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue"
    },
    "Power Reset": {
      "content": "วิธีทำ Power Reset\n\n1. ถอด Adapter ออกจากเครื่อง\n2. กดปุ่ม Power ค้างประมาณ 15–20 วินาที\n3. ต่อ Adapter กลับเข้าเครื่อง\n4. เปิดเครื่องและทดสอบอาการอีกครั้ง\n\nสิ่งที่ต้องส่งกลับ\n• Working หรือ Same Issue"
    }
  }
};
