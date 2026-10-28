# Lenovo Vantage Update

วิธีอัปเดต Driver ผ่าน Lenovo Vantage

1. เปิด Lenovo Vantage
2. ไปที่ System Update
3. กด Check for updates
4. ติดตั้งรายการที่พบ และ Restart เครื่อง

สิ่งที่ต้องส่งกลับ
• Working หรือ Same Issue

# Lenovo Diagnostics

Lenovo Diagnostics (ผ่าน Lenovo Vantage)
1. เปิด Lenovo Vantage หรือ Lenovo Commercial Vantage
2. ไปที่ Device Diagnostics → Hardware Scan → Quick Scan → จากนั้นกด Scan
ตรวจสอบผลว่า Pass หรือ Failed

Lenovo Diagnostics (ผ่าน F10)
1. ปิดเครื่อง
2. เปิดเครื่องแล้วกด F10 รัว ๆ
3. เลือก Run All → Quick → Quick Unattended
รอให้ทดสอบเสร็จ และตรวจสอบผลว่า Pass หรือ Failed

# Battery Report

วิธีดึง Battery Report

1. เปิด Command Prompt หรือ CMD
2. พิมพ์คำสั่ง powercfg /batteryreport
3. จากนั้นเปิด This PC → Drive C → Windows → System32 และหาชื่อไฟล์ battery-report.html

สิ่งที่ต้องส่งกลับ
• battery-report.html

# Battery Health

Battery Health

1. เปิด Lenovo Vantage หรือ Lenovo Commercial Vantage
2. ไปที่ Device → Power → ตรวจสอบหัวข้อ Battery Health
แจ้งผลที่แสดง เช่น Good / Fair / Poor พร้อมส่งภาพหน้าจอ

# BIOS Version

วิธีดู BIOS Version

วิธีที่ 1
1. กด Win + R
2. พิมพ์ msinfo32
3. ดูหัวข้อ BIOS Version/Date

วิธีที่ 2
1. เปิด Command Prompt หรือ CMD
2. พิมพ์คำสั่ง systeminfo
3. ดูหัวข้อ BIOS Version

สิ่งที่ต้องส่งกลับ
• BIOS Version

# Windows Product Key

วิธีดู Windows Product Key

1. เปิด Command Prompt หรือ CMD
2. พิมพ์คำสั่ง wmic path softwarelicensingservice get OA3xOriginalProductKey
3. กด Enter เพื่อตรวจสอบ Product Key

สิ่งที่ต้องส่งกลับ
• Product Key หรือผลลัพธ์ที่แสดง

# Windows Activation

วิธี Activate Windows

1. เปิด Settings
2. ไปที่ System → Activation
3. กด Change Product Key
4. ใส่ Product Key แล้วกด Activate

สิ่งที่ต้องส่งกลับ
• Working หรือ Error Code

# Reset This Pc

Reset This PC

กรณีเข้า Windows ได้
1. ไปที่ Settings → System → Recovery
2. เลือก Reset This PC
3. เลือก Keep my files หรือ Remove everything
4. ทำตามขั้นตอนจนเสร็จ

กรณีเข้า Windows ไม่ได้
1. เปิดเครื่อง แล้วกดปุ่ม Power ค้างเมื่อเห็นโลโก้ Lenovo หรือวงกลมโหลด Windows ทำซ้ำ 3 ครั้ง
2. ครั้งที่ 4 จะเข้า Windows Recovery (WinRE)
3. เลือก Troubleshoot → Reset This PC
4. เลือก Keep my files หรือ Remove everything
5. ทำตามขั้นตอนจนเสร็จ

# Startup Repair

Startup Repair

กรณีเข้า Windows ได้
1. ไปที่ Settings → System → Recovery
2. เลือก Advanced startup → Restart now
3. เลือก Troubleshoot → Advanced options → Startup Repair
4. รอให้ระบบซ่อมแซมจนเสร็จ

กรณีเข้า Windows ไม่ได้
1. เปิดเครื่อง แล้วกดปุ่ม Power ค้างเมื่อเห็นโลโก้ Lenovo หรือวงกลมโหลด Windows ทำซ้ำ 3 ครั้ง
2. ครั้งที่ 4 จะเข้า Windows Recovery (WinRE)
3. เลือก Troubleshoot → Advanced options → Startup Repair
4. รอให้ระบบซ่อมแซมจนเสร็จ

# System Restore

System Restore

กรณีเข้า Windows ได้
1. ไปที่ Settings → System → Recovery
2. เลือก Advanced startup → Restart now
3. เลือก Troubleshoot → Advanced options → System Restore
4. เลือก Restore Point และทำตามขั้นตอนจนเสร็จ

กรณีเข้า Windows ไม่ได้
1. เปิดเครื่อง แล้วกดปุ่ม Power ค้างเมื่อเห็นโลโก้ Lenovo หรือวงกลมโหลด Windows ทำซ้ำ 3 ครั้ง
2. ครั้งที่ 4 จะเข้า Windows Recovery (WinRE)
3. เลือก Troubleshoot → Advanced options → System Restore
4. เลือก Restore Point และทำตามขั้นตอนจนเสร็จ

# Uninstall Windows Update

Uninstall Windows Update

วัตถุประสงค์
ถอนการติดตั้ง Windows Update ล่าสุด หากปัญหาเกิดขึ้นหลังจากอัปเดตระบบ

กรณีเข้า Windows ได้
1. กด Win + I เพื่อเปิด Settings
2. ไปที่ Windows Update
3. เลือก Update history
4. เลื่อนลงด้านล่าง และเลือก Uninstall updates
5. เลือก Update ล่าสุด หรือ KB ที่คาดว่าเกี่ยวข้องกับปัญหา
6. กด Uninstall
7. Restart เครื่อง
8. ตรวจสอบอาการอีกครั้ง

หมายเหตุ: หากถอนผ่าน Settings ไม่ได้ ให้เปิด Control Panel → Programs and Features → View installed updates แล้วถอน KB ล่าสุดแทน

กรณีเข้า Windows ไม่ได้
1. เปิดเครื่อง และเมื่อเห็นโลโก้ Lenovo หรือ Windows ให้กดปุ่ม Power ค้างเพื่อปิดเครื่อง
2. เปิดเครื่องใหม่ และทำซ้ำประมาณ 3 ครั้ง จนเข้าสู่ Preparing Automatic Repair / Windows Recovery Environment (WinRE)
3. เลือก Troubleshoot
4. เลือก Advanced options
5. เลือก Uninstall Updates
6. เลือก Uninstall latest Quality Update หรือ Uninstall latest Feature Update
7. ดำเนินการตามขั้นตอนบนหน้าจอจนเสร็จ
8. Restart เครื่อง และตรวจสอบอาการอีกครั้ง

# Re-install Windows

วิธีติดตั้ง Windows

1. ดาวน์โหลด Windows จาก Microsoft
ลิงก์ดาวน์โหลด: https://www.microsoft.com/en-us/software-download/windows11

2. วิดีโอแนะนำการสร้าง USB Installer
https://www.youtube.com/watch?v=soASOZeAE9M&t=71s

3. ขั้นตอนการติดตั้ง Windows หลังจากสร้าง USB Installer เรียบร้อยแล้ว
• เข้า BIOS โดยกดปุ่ม F1 รัว ๆ หลังจากเปิดเครื่อง
• ไปที่เมนู Security → Secure Boot → Disable
• กด F10 และเลือก Yes
หลังจากนั้นหน้าจอจะดับ ให้กดปุ่ม F12 รัว ๆ เพื่อเข้าสู่ Boot Menu
• เลือก USB
• จากนั้นสามารถดำเนินการตามขั้นตอนที่แสดงบนหน้าจอได้เลย

สิ่งที่ต้องส่งกลับ
• Working หรือ Same Issue

# Event Viewer

วิธีเปิด Event Viewer

1. คลิกขวาที่ Start
2. เลือก Event Viewer
3. ไปที่ Windows Logs → System หรือ Application
4. ตรวจสอบ Error ที่เกี่ยวข้องกับช่วงเวลาที่เกิดอาการ

สิ่งที่ต้องส่งกลับ
• Screenshot หรือ Error Code ที่พบ

# Sfc /Scannow

วิธีใช้งาน SFC /scannow

1. เปิด Command Prompt หรือ CMD แบบ Run as administrator
2. พิมพ์คำสั่ง sfc /scannow
3. รอจนระบบสแกนเสร็จ 100%
4. Restart เครื่องและทดสอบอาการอีกครั้ง

สิ่งที่ต้องส่งกลับ
• Working หรือ Same Issue

# Safe Mode

วิธีเข้า Safe Mode

1. กด Shift ค้างไว้ แล้วเลือก Restart
2. เลือก Troubleshoot
3. เลือก Advanced options
4. เลือก Startup Settings → Restart
5. กด 4 หรือ F4 เพื่อเข้า Safe Mode

สิ่งที่ต้องส่งกลับ
• Working หรือ Same Issue

# Dump File

วิธีดึง Dump File

1. เปิด File Explorer
2. ไปที่ C:\Windows\Minidump
3. Copy ไฟล์ .dmp ล่าสุด
4. หากไม่มีไฟล์ ให้ไปที่ C:\Windows\MEMORY.DMP

สิ่งที่ต้องส่งกลับ
• ไฟล์ .dmp หรือ MEMORY.DMP

# BitLocker Recovery

BitLocker Recovery

กรณีดึง Recovery Key จากบัญชี Microsoft

1. เปิดเว็บ https://account.microsoft.com/devices/recoverykey
2. ล็อกอินด้วยบัญชี Microsoft ที่ใช้กับเครื่อง
3. ตรวจสอบหน้า BitLocker Recovery Keys
4. ดูชื่อเครื่อง (Device Name) และวันที่บันทึก Key
5. นำ Recovery Key 48 หลักไปปลดล็อกเครื่อง

กรณีเข้า Windows ได้

1. เปิด Control Panel
2. ไปที่ BitLocker Drive Encryption
3. ตรวจสอบสถานะ BitLocker หรือ Backup Recovery Key

หากหา Recovery Key ไม่ได้

แนะนำ Backup ข้อมูลถ้าทำได้ และติดตั้ง Windows ใหม่

# Microsoft Office Activation

วิธี Activate Microsoft Office

1. เปิด Word / Excel / PowerPoint
2. เลือก Sign in
3. Login ด้วย Microsoft Account ที่มี License
4. ไปที่ Account → Activate Product
5. หากพบ Error ให้ถ่ายรูปหรือแจ้ง Error Code

สิ่งที่ต้องส่งกลับ
• Working หรือ Error Code

# Bypass Windows 11 Oobe

วิธี Bypass Windows 11 ระหว่าง Setup

1. ที่หน้า Setup ให้กด Shift + F10 เพื่อเปิด Command Prompt
2. พิมพ์คำสั่ง OOBE\BYPASSNRO
3. กด Enter
4. เครื่องจะ Restart
5. เลือก I don't have internet เพื่อตั้งค่าต่อ

สิ่งที่ต้องส่งกลับ
• Working หรือ Same Issue

# Always on USB

วิธีตั้งค่า Always On USB

กรณีปิดด้วยโปรแกรม Lenovo Commercial Vantage
1. เปิด Lenovo Commercial Vantage
2. ไปที่ Device → Power → Always On USB → จากนั้นตั้งเป็น Off
3. Restart เครื่อง 1 ครั้ง แล้วทดสอบใช้งานอีกครั้ง

วิธีปิดด้วย BIOS
1. เข้า BIOS โดยกด F1 รัวๆขณะเปิดเครื่อง
2. ไปที่ Config → USB → Always On USB → จากนั้นตั้งเป็น Off
3. กด F10 และเลือก Yes เพื่อ Save

# BIOS / Supervisor Password

BIOS / Supervisor Password

ข้อมูลสำคัญ

• ต้องใช้รหัสเดิมในการปลดล็อกหรือแก้ไข
• หากไม่ทราบรหัส จะไม่สามารถ Clear Password ด้วย Software ได้
• กรณีลืมรหัส จำเป็นต้องเปลี่ยน Mainboard
• กรณีนี้ไม่ครอบคลุมการรับประกัน

สิ่งที่ควรแจ้งลูกค้า

1. ตรวจสอบว่าลูกค้าทราบรหัสเดิมหรือไม่
2. หากไม่ทราบรหัส ให้แจ้งเงื่อนไขการเปลี่ยน Mainboard
3. แจ้งว่าไม่สามารถเคลมภายใต้ประกันได้

# Lock on Leave Function

Lock on Leave Function

วิธีปิดใน Lenovo Vantage

1. เปิด Lenovo Vantage
2. ไปที่ Device หรือ Smart Assist
3. หาเมนู Presence Detection / Zero Touch Lock / Lock on Leave
4. ปิดฟังก์ชัน Lock on Leave
5. Restart เครื่องและทดสอบอีกครั้ง

วิธีตรวจสอบใน BIOS (บางรุ่น)

1. เข้า BIOS โดยกด F1 หลังเปิดเครื่อง
2. ไปที่ Security หรือ Intelligent Security
3. ตรวจสอบ Presence Detection / Human Presence Detection
4. Disable ฟังก์ชันที่เกี่ยวข้อง
5. กด F10 เพื่อ Save และ Restart

# Reset Battery

Reset Battery เพื่อยืดอายุการใช้งาน

1. เปิด Lenovo Commercial Vantage หรือ Lenovo Vantage
2. ไปที่ Device → Power
3. ค้นหาหัวข้อ Battery Gauge Reset
4. เสียบสายชาร์จไว้ระหว่างทำ Reset
5. กด Reset และรอให้ระบบทำงานจนเสร็จ

ระบบจะดำเนินการอัตโนมัติ
1. ชาร์จแบตเตอรี่จนถึง 100%
2. ปล่อยแบตเตอรี่ลงจนเกือบ 0%
3. ชาร์จกลับขึ้นมา 100%

ใช้เวลาประมาณ 4–8 ชั่วโมง
แนะนำให้ทำช่วงกลางวัน หรือช่วงกลางคืนโดยเปิดเครื่องทิ้งไว้

# LCD Self-Test

LCD Self-Test

Method 1
1. ถอดอุปกรณ์ภายนอกทั้งหมด
2. เคลียร์ไฟโดยกดปุ่ม Power ค้าง 10–15 วินาที
3. กด Fn + Left Ctrl ค้างไว้
4. ระหว่างกดค้าง ให้กดปุ่ม Power
5. เครื่องจะเข้าสู่ LCD Self-Test

Method 2
1. เปิดเครื่องและกด F10 ย้ำ ๆ
2. เข้า Lenovo Diagnostics
3. เลือก Run Test
4. เลือกหัวข้อ Display

# Disable Audio Enhancements

Disable Audio Enhancements

Method 1: Windows Settings
1. เปิด Settings → System → Sound
2. เลือก Microphone ที่ใช้งาน (Built-in / Internal หรือ External Microphone)
3. ไปที่ Advanced → Signal
4. เอาเครื่องหมายถูกออกที่ Enable audio enhancements
5. กด Apply และ OK

Method 2: Control Panel
1. เปิด Control Panel → Sound
2. ไปที่แท็บ Recording
3. ดับเบิลคลิก Microphone ที่ใช้งาน (Built-in / Internal หรือ External Microphone)
4. ไปที่ Advanced → Signal
5. เอาเครื่องหมายถูกออกที่ Enable audio enhancements
6. กด Apply และ OK

# SSD Not Found During Install OS

SSD Not Found During Install OS

วิธีตรวจสอบ

1. ตรวจสอบว่า BIOS พบ SSD หรือไม่
- เข้า BIOS และตรวจสอบว่าเครื่องตรวจพบ SSD หรือไม่
- หาก BIOS ไม่พบ SSD ให้ดำเนินการตาม Troubleshooting Guide : SSD Not Detected

2. ดาวน์โหลด Intel RST / Storage Driver โดยใช้คอมพิวเตอร์เครื่องอื่น
- เข้าเว็บไซต์ Lenovo Support
- ดาวน์โหลด Intel RST / Storage Driver ให้ตรงกับรุ่นเครื่อง
- แตกไฟล์ (Extract) ที่ดาวน์โหลดมา
- คัดลอกไฟล์ที่แตกแล้วลงใน USB Flash Drive

3. โหลด Driver ระหว่างติดตั้ง Windows
- เมื่ออยู่หน้าจอ "Where do you want to install Windows?" ให้เลือก Load driver
- เลือกตำแหน่งไฟล์จาก USB Flash Drive
- เลือก Intel RST / Storage Driver
- เมื่อติดตั้ง Driver สำเร็จ ให้ตรวจสอบว่า SSD ปรากฏในรายการไดรฟ์หรือไม่

# Fn & Ctrl Key Swap

Fn & Ctrl Key Swap

Method 1: Lenovo Vantage
1. เปิด Lenovo Commercial Vantage หรือ Lenovo Vantage
2. ไปที่ Device → Input & Accessories → Keyboard
3. ตรวจสอบ Fn and Ctrl Key Swap
4. หากเปิดใช้งานอยู่ ให้ปิด Off
5. ทดสอบปุ่ม Left Ctrl อีกครั้ง

Method 2: BIOS
1. เข้า BIOS
2. ไปที่ Config → Keyboard/Mouse
3. ตรวจสอบ Fn and Ctrl Key Swap
4. ตั้งค่าเป็น Disabled
5. กด F10 เพื่อ Save and Exit
6. ทดสอบปุ่ม Left Ctrl อีกครั้ง

# Downgrade BIOS

Downgrade BIOS

วัตถุประสงค์
ดาวน์โหลด BIOS Version ก่อนหน้าเพื่อนำมา Downgrade BIOS

วิธีดาวน์โหลด BIOS Version ก่อนหน้า

1. เข้า Lenovo Support ตามรุ่นเครื่อง แล้วไปที่ BIOS/UEFI
2. เปิด Details ของ BIOS ล่าสุด และ Copy Link จากปุ่ม Download
3. เปิดไฟล์ README ของ BIOS รุ่นล่าสุด
4. หา Package ID ของ BIOS Version ที่ต้องการ เช่น r26uj15w
5. นำ Link ที่ Copy มา แก้เฉพาะชื่อไฟล์ท้าย Link ให้เป็น Package ID ที่ต้องการ แล้วกด Enter

ตัวอย่าง
Latest
https://download.lenovo.com/pccbbs/mobiles/r26uj16w.exe

Previous
https://download.lenovo.com/pccbbs/mobiles/r26uj15w.exe

หมายเหตุ
- ใช้ Package ID จาก README เท่านั้น
- วิธีนี้ใช้ได้เฉพาะ BIOS ที่ยังอยู่บน Server ของ Lenovo
- ก่อน Downgrade ให้ตรวจสอบ AC Adapter, Battery, BitLocker และ BIOS Back Flash
- หลัง Downgrade ให้ Load BIOS Default และ Restart เครื่อง

# Emergency Reset

วิธีทำ Emergency Reset

1. ถอด Adapter ออกจากเครื่อง
2. ใช้คลิปหนีบกระดาษ (Paper Clip) กดรู Emergency Reset ค้างประมาณ 5–10 วินาที
3. ต่อ Adapter กลับเข้าเครื่อง
4. เปิดเครื่องและทดสอบอาการอีกครั้ง

สิ่งที่ต้องส่งกลับ
• Working หรือ Same Issue

# Power Reset

วิธีทำ Power Reset

1. ถอด Adapter ออกจากเครื่อง
2. กดปุ่ม Power ค้างประมาณ 15–20 วินาที
3. ต่อ Adapter กลับเข้าเครื่อง
4. เปิดเครื่องและทดสอบอาการอีกครั้ง

สิ่งที่ต้องส่งกลับ
• Working หรือ Same Issue
