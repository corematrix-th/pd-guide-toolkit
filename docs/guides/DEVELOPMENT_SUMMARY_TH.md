# สรุปการพัฒนาต่อ v5.2.9

- แก้ UnicodeDecodeError บน Windows โดยอ่านผลจาก Node.js ด้วย UTF-8
- เพิ่มการสร้างข้อมูลในโฟลเดอร์ชั่วคราวแล้วเทียบกับ runtime เพื่อจับข้อมูลที่คลาดเคลื่อนจาก Excel
- เพิ่ม regression test ภาษาไทยและการแก้ Email ใน runtime
- ตรวจผ่าน validator, smoke test และ pipeline tests
- จำนวนจริง: Checklist 2,285 แถว และ Labor Mapping 119 แถว ต่างจากจำนวน 2,314 ในรายงานเดิม
- Excel ทั้งสองไฟล์คงต้นฉบับ จึงมี warning เรื่อง README ระบุ v5.2.6 จำนวนหนึ่งรายการ
- ยังไม่ได้ทดสอบภาพหน้าจอในเบราว์เซอร์หรือ Firebase จริง
