# 🏛️ Eldoria Expedition 2026 — Registration Web Application
> **วิชา:** การพัฒนาเว็บไซต์ (Web Development)  
> **กิจกรรม:** Work 1 — พัฒนาหน้าเว็บไซต์ในฐานะ Programmer เพื่อลงทะเบียน (10 คะแนนจริง)  
> **กำหนดส่ง:** ภายใน 1 ก.ย. 2569  
> **ผู้พัฒนา (Programmer):** `66040233122` — `นายปณิธิ จ่าเหม`  
> **GitHub Repository:** [https://github.com/SolightzZ/work1-eldoria-registration-form](https://github.com/SolightzZ/work1-eldoria-registration-form)  
> **Live Website (GitHub Pages):** [https://solightzz.github.io/work1-eldoria-registration-form/](https://solightzz.github.io/work1-eldoria-registration-form/)  
> **เว็บไซต์อ้างอิงต้นฉบับ:** [https://www.realbugz.com/en/task-form](https://www.realbugz.com/en/task-form)  
> **เอกสารเฉลยจุดบกพร่อง:** [BUG.md](./BUG.md)

---

## 📖 สรุปภาพรวมของโครงงาน (Project Overview)

เว็บไซต์ลงทะเบียนทีมสำรวจดินแดนโบราณเอลโดเรีย (**Eldoria Expedition 2026**) พัฒนาขึ้นโดยนำโจทย์และโครงสร้างฟิลด์ข้อมูลจาก [Realbugz Task Form](https://www.realbugz.com/en/task-form) มายกระดับและออกแบบใหม่ด้วยแนวคิด **Light Blue Modern SaaS & Adventure Theme** 

ภายในเว็บประกอบด้วยหน้า Landing Page พร้อมภาพประกอบ **Cute 3D Expedition Diorama** (นักสำรวจจิ๋ว Chibi Explorer, สุนัขคู่หู Pip, วิหารโบราณเอลโดเรีย และโดรนสแกน LiDAR) ควบคู่กับระบบฟอร์มลงทะเบียน 6 ส่วน 13 ฟิลด์ข้อมูล พร้อมระบบตรวจสอบความถูกต้อง (Validation), แถบความคืบหน้าแบบ Real-time, ระบบพิมพ์ใบเสร็จ (Receipt Card) และ **จุดบกพร่องที่ซ่อนไว้ 2 ตำแหน่งสำหรับให้ Tester ค้นหา**

---

## 🎯 คุณสมบัติตามข้อกำหนดกิจกรรม Work 1

| ข้อกำหนดตามโจทย์ | สถานะ | รายละเอียดที่พัฒนา |
|---|:---:|---|
| **1. ศึกษาองค์ประกอบเว็บต้นฉบับ** | ✅ ครบถ้วน | วิเคราะห์โครงสร้างจาก Realbugz Task Form นำฟิลด์ข้อมูลมาพัฒนาต่อยอดครบถ้วน 100% |
| **2. Input Data ครบหรือมากกว่า + หน้าตาสวยงาม** | ✅ ครบถ้วน | มีฟิลด์ข้อมูลสำหรับการลงทะเบียนครบตาม Requirement พร้อมรองรับ Input หลากหลายประเภท (Text, Email, Tel, Date, Select Dropdown, Multi-select Role Cards, Region Radio Grid, Interactive Salary Slider, File Drag-and-Drop, Textarea, Terms Checkbox) |
| **3. แสดงรหัส-ชื่อ-สกุลภาษาไทย** | ✅ ครบถ้วน | แสดง `66040233122` — `นายปณิธิ จ่าเหม` ใน Sticky Navbar, ส่วนหัวของระบบ, กล่อง Metadata ท้ายเว็บ และใบเสร็จยืนยันการลงทะเบียน |
| **4. Validation Logic + Bug ซ่อนไว้ 2 ตำแหน่ง** | ✅ ครบถ้วน | มีระบบ Validation ครบทุกฟิลด์ พร้อมแอบซ่อน Bug 2 จุด สำหรับให้ Tester ฝึกทดสอบและค้นหาจุดผิดพลาด (บันทึกเฉลยไว้ใน `BUG.md`) |
| **5. รองรับการแสดงผล Responsive ทุกอุปกรณ์** | ✅ ครบถ้วน | รองรับ Desktop (≥1024px), Tablet (640px–1023px) และ Mobile (320px–639px) พร้อมฟังก์ชัน Print Receipt A4 |

---

## 🐛 จุดบกพร่องที่แอบซ่อนไว้ 2 ตำแหน่ง (Intentional Bugs for Testers)

> 💡 *ตามข้อกำหนดของกิจกรรม Work 1 ได้มีการแอบซ่อน Functional Bug ไว้ 2 ตำแหน่งในระบบ Input Validation เพื่อให้เพื่อนนักศึกษาที่ทำหน้าที่เป็น **Tester** ได้ฝึกปฏิบัติการทดสอบระบบ*  
> 🔒 *ดูรายงานเชิงลึกและเอกสารเฉลยสำหรับอาจารย์ผู้ตรวจประเมินได้ที่ [BUG.md](./BUG.md)*

---

## 🛠 เทคโนโลยีและเครื่องมือที่ใช้ (Tech Stack)

- **Frontend Framework:** React 19 & TypeScript 5 (Strict TSX)
- **Build Tool & Dev Server:** Vite 8
- **Styling & Design System:** Tailwind CSS v4 (ผ่าน `@tailwindcss/vite`)
- **Theme:** Light Blue Theme (ฟ้าอ่อนสะอาดตา `#f0f9ff`, `#0284c7`, `#38bdf8`)
- **Icons:** Lucide React (สัญลักษณ์มาตรฐาน UX/UI คมชัดทุกความละเอียด)
- **Linter & Formatter:** Oxlint & Strict TypeScript Compiler

---

## 📁 โครงสร้างโปรเจกต์ (Project Architecture)

```text
New folder/
├── README.md                                # เอกสารภาพรวมโครงงาน Work 1
├── BUG.md                                   # เอกสารเฉลยและรายงานจุดบกพร่องสำหรับ Tester
├── index.html                               # HTML Entry Point
├── package.json                             # Dependencies & Scripts
├── vite.config.js                           # การตั้งค่า Vite & Tailwind CSS v4
└── src/
    ├── main.tsx                             # React 19 Root Mount
    ├── App.tsx                              # Layout หลัก (Navbar, Landing, Registration, Footer)
    ├── index.css                            # Tailwind CSS v4 Tokens, Keyframes, Theme Classes
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx                   # Sticky Header พร้อมแสดงชื่อ-รหัสนักศึกษา และปุ่ม Demo Fill
    │   │   ├── PageFooter.tsx               # ส่วนท้ายเว็บ, Tech Stack และ Collapsible Metadata
    │   │   ├── FormCardHeader.tsx           # ส่วนหัวของการ์ดลงทะเบียนแบบ Responsive
    │   │   ├── ProgressBar.tsx              # แถบความคืบหน้าร้อยละและจำนวนช่องที่เหลือ
    │   │   └── ExpeditionVisual.tsx         # ส่วนแสดงภาพ Hero 3D Diorama
    │   │       └── ExpeditionVisual/
    │   │           ├── CuteDioramaScene.tsx # เวกเตอร์ 3D Chibi Explorer, สุนัข Pip, วิหาร และโดรน
    │   │           ├── DiscoverySparkles.tsx# ประกายดาวและละอองแสงสีทอง
    │   │           └── ExpeditionHUD.tsx    # ป้ายแก้ว Telemetry แบบมน
    │   └── ui/                              # Atomic UI Components (Button, Input, Select, etc.)
    ├── features/
    │   ├── landing/
    │   │   └── components/
    │   │       ├── HeroSection.tsx          # ส่วนบนสุดของ Landing Page
    │   │       ├── ExpeditionOverview.tsx   # การ์ดสรุปสถิติภารกิจสำรวจ 4 ใบ
    │   │       └── LandingBackground.tsx    # แอนิเมชันพื้นหลัง Canvas Particle เครือข่ายดวงดาว
    │   └── registration/
    │       ├── components/                  # FormErrorSummary, TermsModal, ConfirmClearModal, SuccessScreen
    │       └── sections/                    # 6 ส่วนของแบบฟอร์มลงทะเบียน
    │           ├── PersonalInfoSection.tsx          # ส่วนที่ 01: ข้อมูลส่วนตัว
    │           ├── ExpeditionPreferencesSection.tsx # ส่วนที่ 02: ความต้องการในการสำรวจ
    │           ├── CompensationSection.tsx          # ส่วนที่ 03: ค่าตอบแทนและช่องทางติดต่อ
    │           ├── IdentificationSection.tsx        # ส่วนที่ 04: เอกสารยืนยันตัวตน
    │           ├── AdditionalInfoSection.tsx        # ส่วนที่ 05: ข้อมูลเพิ่มเติม
    │           └── ConfirmationSection.tsx          # ส่วนที่ 06: การยืนยันและส่งใบสมัคร
    ├── hooks/
    │   └── useRegistrationForm.ts           # State Management, Form Validation, Demo Fill, Reset Logic
    ├── lib/
    │   ├── constants.ts                     # ข้อมูลรหัสนักศึกษา, ตัวเลือกในฟอร์ม, ค่าคงที่
    │   └── validation.ts                    # ฟังก์ชันตรวจสอบความถูกต้อง (พร้อม Bug 2 จุด)
    └── types/
        └── form.ts                          # TypeScript Data Interfaces & Error Types
```

---

## 🚀 วิธีการติดตั้งและรันโปรเจกต์ (Getting Started)

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. รัน Development Server
```bash
npm run dev
```
เปิดเบราว์เซอร์ไปที่: `http://localhost:5173`

### 3. ตรวจสอบโค้ด (Linting)
```bash
npm run lint
```

### 4. สั่ง Build สำหรับ Production
```bash
npm run build
```

### 5. ทดสอบเปิดไฟล์ Build (Preview)
```bash
npm run preview
```

---

## 📋 ข้อมูลผู้จัดทำ (Student Metadata)

- **รหัสนักศึกษานักศึกษา:** `66040233122`
- **ชื่อ-นามสกุล:** นายปณิธิ จ่าเหม
- **กิจกรรม:** Work 1 — พัฒนาหน้าเว็บไซต์ในฐานะ Programmer เพื่อลงทะเบียน (10 คะแนนจริง)
- **วันที่ส่งมอบงาน:** วันพุธ 2 ก.ย. 2569 (ส่งล่วงหน้าภายใน 1 ก.ย. 2569)