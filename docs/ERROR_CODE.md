# Error Code Knowledge Base

# 0162 Setup Data Integrity Check Failure

## Description
BIOS ตรวจพบว่าค่าการตั้งค่าระบบ (BIOS Configuration) ไม่ถูกต้องหรือไม่สอดคล้องกับข้อมูลที่บันทึกไว้

## Possible Cause
- Load BIOS Default หรือ CMOS Reset
- CMOS Battery อ่อนหรือถูกถอด
- BIOS Update
- BIOS Configuration เปลี่ยนแปลง

## Recommended Action
- Load BIOS Default
- ตั้งค่า Date/Time ให้ถูกต้อง
- ตรวจสอบ BIOS Version
- หากยังพบอาการเดิม ให้ตรวจสอบ CMOS Battery หรือ System Board

---
# 0183 Bad CRC of Security Settings in EFI Variable

## Description
BIOS ตรวจพบว่าข้อมูล Security Settings ที่จัดเก็บใน EFI Variable ไม่ถูกต้องหรือเสียหาย

## Possible Cause
- ข้อมูล Security Settings ใน BIOS เสียหาย
- BIOS Update ไม่สมบูรณ์
- BIOS Configuration หรือ EFI Variable ผิดปกติ
- System Board มีปัญหา

## Recommended Action
- Load BIOS Default
- ตรวจสอบและอัปเดต BIOS Version
- ตั้งค่า Security ใน BIOS ใหม่หากจำเป็น
- หากยังพบอาการเดิม ให้ตรวจสอบหรือเปลี่ยน System Board

---
# 0188 Invalid Rfid Serialization Information Area

## Description
BIOS ตรวจพบว่าข้อมูล RFID Serialization ภายในระบบไม่ถูกต้องหรือไม่สมบูรณ์

## Possible Cause
- ข้อมูล Machine Information ใน BIOS ไม่ถูกต้อง
- ข้อมูล Serial/UUID สูญหายหลังเปลี่ยน System Board
- BIOS หรือ EEPROM มีปัญหา
- การตั้งค่าด้วย Service Tool ไม่สมบูรณ์

## Recommended Action
- ตรวจสอบ Machine Type, Serial Number และ UUID ใน BIOS
- ตรวจสอบประวัติการเปลี่ยน System Board
- ดำเนินการแก้ไขข้อมูลด้วย Service Tool โดยเจ้าหน้าที่ที่ได้รับอนุญาต
- หากไม่สามารถแก้ไขได้ ให้ตรวจสอบ System Board

---
# 0190 Critical Low-Battery Error

## Description
ระบบตรวจพบว่าระดับแบตเตอรี่ต่ำมากจนไม่เพียงพอสำหรับการเปิดเครื่องหรือเริ่มต้นระบบ

## Possible Cause
- Battery มีประจุต่ำมาก
- AC Adapter ไม่ได้เชื่อมต่อหรือจ่ายไฟไม่ปกติ
- Battery เสื่อมหรือไม่ถูกตรวจพบ
- Charging Port หรือ System Board มีปัญหา

## Recommended Action
- เชื่อมต่อ AC Adapter และชาร์จอย่างน้อย 30 นาที
- ตรวจสอบว่าเครื่องตรวจพบ Adapter และ Battery
- ทดสอบด้วย AC Adapter ที่รองรับ
- หากยังพบอาการเดิม ให้ตรวจสอบ Battery, Charging Port หรือ System Board

---
# 0271 Date and Time Error

## Description
BIOS ตรวจพบว่าค่าวันที่หรือเวลาไม่ถูกต้อง หรือค่าถูกรีเซ็ตหลังปิดเครื่อง

## Possible Cause
- Date/Time ใน BIOS ไม่ถูกต้อง
- CMOS/RTC Battery อ่อนหรือหมด
- มีการ Load BIOS Default หรือ CMOS Reset
- System Board มีปัญหา

## Recommended Action
- ตั้งค่า Date/Time ใน BIOS ให้ถูกต้อง
- Load BIOS Default แล้วตั้งค่า Date/Time ใหม่
- ปิดเครื่องและทดสอบว่าค่ายังคงถูกบันทึกหรือไม่
- หากวันที่และเวลาผิดซ้ำ ให้ตรวจสอบ CMOS/RTC Battery หรือ System Board

---
# 1802 Unauthorized Network Card Is Plugged in

## Description
BIOS ตรวจพบ Network Card ที่ไม่ได้รับการรองรับหรือไม่ตรงกับรายการอะไหล่ที่กำหนดสำหรับรุ่นเครื่อง

## Possible Cause
- ติดตั้ง Wi-Fi/Network Card ที่ไม่รองรับ
- มีการเปลี่ยน Network Card เป็นรุ่นหรือ FRU P/N อื่น
- Hardware ID ของ Network Card ไม่ผ่านการตรวจสอบ
- Network Card หรือ System Board มีปัญหา

## Recommended Action
- ปิดเครื่องและถอด Network Card ที่ไม่รองรับ
- ตรวจสอบ FRU P/N ให้ตรงกับรุ่นเครื่อง
- ติดตั้ง Network Card ที่รองรับแล้วทดสอบอีกครั้ง
- หากใช้อะไหล่ถูกต้องแล้วยังพบอาการ ให้ตรวจสอบ Network Card หรือ System Board

---
# 1962 No Operating System Found

## Description
BIOS ไม่พบระบบปฏิบัติการที่สามารถบูตได้จากอุปกรณ์จัดเก็บข้อมูล

## Possible Cause
- Boot Priority ไม่ถูกต้อง
- SSD/HDD ไม่ถูกตรวจพบ
- Windows Boot Loader เสียหาย
- Storage หรือ System Board มีปัญหา

## Recommended Action
- ตรวจสอบว่า BIOS พบ Storage หรือไม่
- ตรวจสอบ Boot Mode และ Boot Order
- Startup Repair หรือ Reinstall Windows
- ทดสอบ Storage กับเครื่องอื่นหรือเปลี่ยน Storage หากจำเป็น

---
# 2100 Detection Error on Storage Device

## Description
BIOS ไม่สามารถตรวจพบหรือสื่อสารกับอุปกรณ์จัดเก็บข้อมูลได้ตามปกติ

## Possible Cause
- SSD/HDD หลวมหรือติดตั้งไม่สมบูรณ์
- SSD/HDD เสีย
- Storage Connector หรือ Cable มีปัญหา
- System Board มีปัญหา

## Recommended Action
- ตรวจสอบว่า BIOS พบ Storage หรือไม่
- ถอดและติดตั้ง SSD/HDD ใหม่
- ทดสอบ Storage กับเครื่องอื่น หรือทดสอบด้วย Storage ที่ใช้งานได้
- หากยังพบอาการเดิม ให้ตรวจสอบ Storage Connector หรือ System Board

---
# 2101 Detection Error on HDD

## Description
BIOS ไม่สามารถตรวจพบหรือสื่อสารกับ HDD/SSD ที่ระบุตำแหน่งไว้ได้

## Possible Cause
- HDD/SSD หลวมหรือติดตั้งไม่สมบูรณ์
- HDD/SSD เสีย
- Storage Connector หรือ Cable มีปัญหา
- System Board มีปัญหา

## Recommended Action
- ตรวจสอบว่า BIOS พบ HDD/SSD หรือไม่
- ถอดและติดตั้ง HDD/SSD ใหม่
- ทดสอบด้วย HDD/SSD ที่ใช้งานได้
- หากยังพบอาการเดิม ให้ตรวจสอบ Connector, Cable หรือ System Board

---
# 2200 Machine Type and Serial Number Are Invalid

## Description
BIOS ตรวจพบว่า Machine Type หรือ Serial Number ของเครื่องไม่ถูกต้องหรือไม่มีข้อมูล

## Possible Cause
- ข้อมูล Machine Type หรือ Serial Number สูญหาย
- มีการเปลี่ยน System Board
- การตั้งค่าข้อมูลด้วย Service Tool ไม่สมบูรณ์
- BIOS/EEPROM มีปัญหา

## Recommended Action
- ตรวจสอบ Machine Type และ Serial Number ใน BIOS
- ตรวจสอบฉลากเครื่องและประวัติการเปลี่ยน System Board
- แก้ไขข้อมูลด้วย Service Tool โดยเจ้าหน้าที่ที่ได้รับอนุญาต
- หากไม่สามารถบันทึกข้อมูลได้ ให้ตรวจสอบ System Board

---
# 2201 Machine Uuid Is Invalid

## Description
BIOS ตรวจพบว่า UUID ของเครื่องไม่ถูกต้อง ไม่มีข้อมูล หรือซ้ำกับระบบอื่น

## Possible Cause
- ข้อมูล UUID สูญหาย
- มีการเปลี่ยน System Board
- การตั้งค่าด้วย Service Tool ไม่สมบูรณ์
- BIOS/EEPROM มีปัญหา

## Recommended Action
- ตรวจสอบ UUID ใน BIOS
- ตรวจสอบประวัติการเปลี่ยน System Board
- สร้างหรือแก้ไข UUID ด้วย Service Tool โดยเจ้าหน้าที่ที่ได้รับอนุญาต
- หากไม่สามารถบันทึกข้อมูลได้ ให้ตรวจสอบ System Board

---
# Boot Device Missing

## Description
BIOS ไม่พบอุปกรณ์ที่สามารถใช้บูตเข้าสู่ระบบปฏิบัติการได้

## Possible Cause
- Boot Order ไม่ถูกต้อง
- SSD/HDD ไม่ถูกตรวจพบ
- Windows Boot Loader เสียหาย
- Storage หรือ System Board มีปัญหา

## Recommended Action
- ตรวจสอบว่า BIOS พบ Storage หรือไม่
- ตรวจสอบ Boot Mode และ Boot Order
- ดำเนินการ Startup Repair หาก BIOS พบ Storage
- ทดสอบหรือเปลี่ยน Storage หาก BIOS ไม่พบอุปกรณ์

---
# Button Cover Tamper Detection

## Description
ระบบตรวจพบว่าฝาครอบเครื่องถูกเปิด หรือสวิตช์ตรวจจับการเปิดฝามีสถานะผิดปกติ

## Possible Cause
- ฝาครอบปิดไม่สนิท
- มีการเปิดหรือถอดฝาครอบเครื่อง
- Tamper Switch ติดขัดหรือเสีย
- BIOS Configuration หรือ System Board มีปัญหา

## Recommended Action
- ปิดเครื่องและตรวจสอบว่าฝาครอบติดตั้งแน่นสนิท
- ตรวจสอบ Tamper Switch และตำแหน่งกดของฝาครอบ
- Load BIOS Default และทดสอบอีกครั้ง
- หากยังพบอาการเดิม ให้ตรวจสอบ Tamper Switch หรือ System Board

---
# PXE

## Description
เครื่องพยายามบูตผ่าน Network (PXE) เนื่องจากไม่พบอุปกรณ์หรือระบบปฏิบัติการที่บูตได้ก่อนหน้า

## Possible Cause
- Network Boot อยู่ก่อน Storage ใน Boot Order
- SSD/HDD ไม่ถูกตรวจพบ
- Windows Boot Loader เสียหาย
- มีการเปิด PXE/Network Boot ไว้

## Recommended Action
- ตรวจสอบว่า BIOS พบ Storage หรือไม่
- ตั้ง Windows Boot Manager หรือ Storage ให้อยู่ก่อน Network Boot
- ปิด PXE/Network Boot หากไม่ได้ใช้งาน
- หาก BIOS พบ Storage แต่ยังบูตไม่ได้ ให้ดำเนินการ Startup Repair หรือ Reinstall Windows

---
