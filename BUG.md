# 🐛 เอกสารเฉลยจุดบกพร่อง (Bug Report & Solution Key)
> **รายวิชา:** การพัฒนาเว็บไซต์ (Web Development)  
> **กิจกรรม:** Work 1 — พัฒนาหน้าเว็บไซต์ในฐานะ Programmer เพื่อลงทะเบียน (10 คะแนนจริง)  
> **นักศึกษาผู้พัฒนา:** `66040233122` — `นายปณิธิ จ่าเหม`  
> **เว็บอ้างอิง:** [https://www.realbugz.com/en/task-form](https://www.realbugz.com/en/task-form)

---

## 📌 สรุปจุดบกพร่องที่แอบซ่อนไว้ (2 Intentional Bugs)

ตามข้อกำหนดของกิจกรรม ได้มีการวางจุดบกพร่อง (Bugs) ไว้ทั้งหมด **2 ตำแหน่ง** ในส่วนของการตรวจสอบความถูกต้องข้อมูล (Validation Logic) เพื่อให้เพื่อนนักศึกษาที่ทำหน้าที่เป็น **Tester** เข้ามาค้นหาและบันทึกรายงานข้อผิดพลาด ดังนี้:

---

### 🔍 Bug #1: การตรวจสอบรูปแบบอีเมลหลวมเกินไป (Email Validation Missing TLD)

- **ไฟล์ที่เกิดข้อผิดพลาด:** `src/lib/validation.ts`
- **ฟังก์ชัน:** `validateEmail(email: string)`
- **ระดับความรุนแรง (Severity):** Medium
- **ประเภทของ Bug:** Functional / Input Validation

#### 1. คำอธิบายและสาเหตุในโค้ด (Root Cause)
ในฟังก์ชัน `validateEmail` ใช้ Regular Expression ดังนี้:
```typescript
export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+$/.test(email)
}
```
Regex ชุดนี้ตรวจสอบเพียงแค่มีตัวอักษร ตามด้วย `@` และตามด้วยตัวอักษรด้านหลัง **โดยไม่ได้บังคับให้มีจุดและ Top-Level Domain (TLD)** เช่น `.com`, `.co.th`, `.org` เป็นต้น

#### 2. ขั้นตอนการทดสอบสำหรับ Tester (Steps to Reproduce)
1. ไปที่หน้าฟอร์มลงทะเบียน
2. ที่ช่อง **Email\*** ให้กรอกอีเมลที่ไม่มี TLD เช่น:
   - `test@email`
   - `peter@eldoria`
   - `admin@localhost`
3. กรอกข้อมูลช่องอื่นๆ ให้ครบถ้วนแล้วกดปุ่ม **Submit Registration**
4. **ผลลัพธ์ที่พบ (Actual Result):** ระบบยอมรับข้อมูลและผ่านการตรวจสอบได้สำเร็จ ทั้งที่รูปแบบอีเมลไม่สมบูรณ์
5. **ผลลัพธ์ที่คาดหวัง (Expected Result):** ระบบควรแสดงข้อความเตือนสีแดงว่า `"Invalid email format"`

#### 3. แนวทางแก้ไข (Code Fix)
เปลี่ยน Regular Expression ให้ตรวจสอบว่าต้องมีเครื่องหมายจุด `.` และ TLD ต่อท้ายอย่างน้อย 2 ตัวอักษร:
```typescript
export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
}
```

---

### 🔍 Bug #2: การตัดอักขระพิเศษออกก่อนตรวจสอบเบอร์โทรศัพท์ (Contact Number Stripping Special Characters)

- **ไฟล์ที่เกิดข้อผิดพลาด:** `src/lib/validation.ts`
- **ฟังก์ชัน:** `validateContactNumber(phone: string)`
- **ระดับความรุนแรง (Severity):** Medium
- **ประเภทของ Bug:** Functional / Input Validation & Sanitization

#### 1. คำอธิบายและสาเหตุในโค้ด (Root Cause)
ในฟังก์ชัน `validateContactNumber` มีการเขียนโค้ดดังนี้:
```typescript
export function validateContactNumber(phone: string): boolean {
  if (!phone.trim()) return false
  const cleaned = phone.replace(/[^0-9+]/g, '')
  return cleaned.length >= 9 && cleaned.length <= 15
}
```
ระบบนำค่าที่ผู้ใช้กรอกมาลบอักขระที่ไม่ใช่ตัวเลขออกก่อน (`replace(/[^0-9+]/g, '')`) แล้วจึงนำความยาวของตัวเลขที่เหลือไปเช็คช่วง 9–15 หลัก ทำให้ **ผู้ใช้สามารถกรอกตัวอักษรภาษาอังกฤษ สัญลักษณ์ หรือข้อความแปลกปลอมปะปนลงไปในเบอร์โทรศัพท์ แล้วฟอร์มยังคงยอมรับให้ผ่านได้**

#### 2. ขั้นตอนการทดสอบสำหรับ Tester (Steps to Reproduce)
1. ไปที่หน้าฟอร์มลงทะเบียน
2. ที่ช่อง **Contact Number\*** ให้กรอกเบอร์โทรศัพท์ที่มีตัวอักษรหรือสัญลักษณ์ปน เช่น:
   - `+1234567890#EXT`
   - `081-234-5678-ABC`
   - `phone:0812345678`
3. กรอกข้อมูลช่องอื่นๆ ให้ครบถ้วนแล้วกดปุ่ม **Submit Registration**
4. **ผลลัพธ์ที่พบ (Actual Result):** ระบบตัดตัวอักษรทิ้งอัตโนมัติและยอมรับเบอร์โทรศัพท์ผ่านฉลุย
5. **ผลลัพธ์ที่คาดหวัง (Expected Result):** ระบบควรแจ้งเตือนข้อผิดพลาดทันทีหากพบตัวอักษรหรืออักขระที่ไม่อยู่ในฟอร์แมตเบอร์โทรศัพท์สากล

#### 3. แนวทางแก้ไข (Code Fix)
แยกการตรวจสอบเป็น 2 ขั้นตอน: (1) ตรวจสอบ Format ไม่ให้มีตัวอักษร/สัญลักษณ์แปลกปลอม และ (2) ตรวจสอบจำนวนตัวเลขจริง (Digit Count) ให้อยู่ในช่วง 9–15 หลัก:
```typescript
export function validateContactNumber(phone: string): boolean {
  if (!phone.trim()) return false
  // ขั้นที่ 1: ตรวจสอบรูปแบบ - อนุญาตเฉพาะตัวเลข, +, -, และช่องว่าง (ห้ามมีตัวอักษรอื่น)
  if (!/^\+?[0-9\-\s]+$/.test(phone.trim())) return false
  // ขั้นที่ 2: ตรวจสอบจำนวนตัวเลขจริง (Digit Count) 9-15 หลัก
  const digitsOnly = phone.replace(/[^0-9]/g, '')
  return digitsOnly.length >= 9 && digitsOnly.length <= 15
}
```

---

## 📊 สรุป Checklist ความสมบูรณ์ของระบบตามเกณฑ์ Work 1

| เกณฑ์ข้อกำหนด | สถานะ | รายละเอียด |
|---|:---:|---|
| **1. ศึกษาองค์ประกอบเว็บต้นฉบับ** | ✅ ครบถ้วน | ดึงและเทียบโครงสร้างจาก Realbugz 1-to-1 ทุกฟิลด์ |
| **2. Input Data ครบหรือมากกว่า + หน้าตาสวยงาม + มีรหัส-ชื่อ-สกุลภาษาไทย** | ✅ ครบถ้วน | มีฟิลด์ข้อมูลสำหรับการลงทะเบียนครบตาม Requirement พร้อมแสดงรหัสนักศึกษาและชื่อ–สกุลภาษาไทยในส่วนที่กำหนด |
| **3. เช็คความถูกต้อง (Validation) + ซ่อน Bug 2 จุดสำหรับ Tester** | ✅ ครบถ้วน | มี Validation ครบทุกช่อง พร้อม Bug #1 (Email) และ Bug #2 (Phone) |
| **4. รองรับการแสดงผลทุกหน้าจอ (Responsive)** | ✅ ครบถ้วน | รองรับ Desktop/Laptop (≥1024px), Tablet (640px-1023px) และ Mobile (320px-639px) |

---

> 🔒 **หมายเหตุสำหรับผู้พัฒนา (Confidential Solution Key):**  
> เอกสารฉบับนี้เป็น **เฉลยสำหรับอาจารย์ผู้ตรวจประเมิน** ห้ามส่งลิงก์ไฟล์ `BUG.md` ให้เพื่อนที่ทำหน้าที่เป็น Tester โดยตรง เพื่อให้ Tester ได้ฝึกปฏิบัติการทดสอบระบบและค้นหาจุดบกพร่องด้วยตนเองตามวัตถุประสงค์ของกิจกรรม Work 1
