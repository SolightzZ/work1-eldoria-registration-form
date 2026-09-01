/**
 * Centralized content, copy, labels, and text definitions for Eldoria Expedition
 * Location: src/lib/content.ts
 */

export const HERO_CONTENT = {
   badge: 'Archaeological Expedition 2026',
   titleLine1: 'ค้นพบดินแดนโบราณ',
   titleLine2: 'ที่สาบสูญ',
   subtitle: 'The Expedition in Search of Eldoria',
   description: 'เปิดรับสมัครทีมนักวิจัย ช่างภาพ ผู้ควบคุมโดรน นักทำแผนที่ และแพทย์สนาม เพื่อเข้าร่วมภารกิจสำรวจและบันทึกประวัติศาสตร์อารยธรรมโบราณเอลโดเรียใน 5 ทวีปทั่วโลก',
   metrics: {
      continents: {
         target: 5,
         suffix: ' ทวีป',
         sublabel: 'ภูมิภาคเป้าหมาย',
      },
      roles: {
         target: 5,
         suffix: ' บทบาท',
         sublabel: 'ตำแหน่งภาคสนาม',
      },
      salary: {
         target: 700,
         prefix: '$',
         suffix: '+',
         sublabel: 'USD / สัปดาห์',
      },
   },
   cta: {
      submit: 'กรอกใบสมัคร',
      demoFill: 'กรอกข้อมูลตัวอย่าง',
   },
} as const;

export const TELEMETRY_CONTENT = {
   statusSequence: ['Scanning...', 'Site Detected', 'Ancient Ruins Found', 'LiDAR Active Scanning'],
   discoveryBadge: 'ANCIENT SITE DETECTED',
   coordinatesLocked: 'LAT -13.16° / LONG -72.54°',
   coordinatesScanning: 'LAT ---.--° / LONG ---.--°',
} as const;

export const OVERVIEW_CONTENT = {
   sectionTitle: 'Expedition Overview',
   sectionSubtitle: 'สรุปภาพรวมและข้อมูลสำคัญของภารกิจสำรวจ',
   badge: 'Field Recruitment 2026',
   cards: [
      {
         label: 'Expedition Regions',
         value: '5 Continents',
         desc: 'อเมริกาใต้, แอฟริกา, เอเชีย, ยุโรป, ออสเตรเลีย',
      },
      {
         label: 'Available Roles',
         value: '5 Positions',
         desc: 'นักวิจัย, ช่างภาพ, โดรน, แผนที่, แพทย์',
      },
      {
         label: 'Compensation',
         value: '–,000',
         desc: 'อัตราค่าตอบแทนต่อสัปดาห์ (USD)',
      },
      {
         label: 'Estimated Form Time',
         value: '3–5 Minutes',
         desc: 'ฟอร์มลงทะเบียนมาตรฐาน กรอกง่ายและรวดเร็ว',
      },
   ],
} as const;

export const PAGE_HEADER_CONTENT = {
   academicTag: 'Work 1: พัฒนาหน้าเว็บไซต์ลงทะเบียน (Programmer)',
   developerLabel: 'นักศึกษาผู้พัฒนา:',
   subHeader: 'ระบบลงทะเบียนเข้าร่วมภารกิจสำรวจดินแดนโบราณเอลโดเรีย (Eldoria Expedition)',
} as const;

export const SUCCESS_CONTENT = {
   heroBadge: 'Registration Submitted',
   title: 'ลงทะเบียนสำเร็จ',
   subtitlePrefix: 'ระบบได้รับข้อมูลใบสมัครเข้าร่วมทีมสำรวจ Eldoria เรียบร้อยแล้ว',
   receiptTitle: 'Registration Summary (สรุปข้อมูลใบสมัคร)',
   receiptTag: 'Eldoria 2026',
   buttonCopy: 'คัดลอกข้อมูลสรุป (Copy)',
   buttonCopied: 'คัดลอกสำเร็จแล้ว!',
   buttonPrint: 'พิมพ์ใบสมัคร (Print)',
   buttonReset: 'ลงทะเบียนใหม่อีกครั้ง',
   devLabel: 'นักศึกษาผู้พัฒนา:',
} as const;

export const BUG_SOLUTIONS_CONTENT = {
   sectionTitle: 'เฉลยจุดบกพร่องและวิธีทดสอบให้ติด Bug (2 Intentional Bugs Solution Key)',
   badge: 'Work 1 Key for Testers & Graders',
   summary: 'ตามเกณฑ์ข้อกำหนดของกิจกรรม Work 1 ได้มีการแอบซ่อน Bug ไว้ 2 จุดในส่วน Input Validation เพื่อให้เพื่อน Tester ได้ฝึกค้นหาและบันทึกรายงานข้อผิดพลาด',
   bugs: [
      {
         id: 'BUG-01',
         title: 'Bug 1: การตรวจสอบอีเมลหลวมเกินไป (Email Validation Missing TLD)',
         field: 'Email*',
         severity: 'Medium',
         howToReproduce: 'ที่ช่อง Email* ให้กรอกอีเมลที่ไม่มีส่วนขยายโดเมน (TLD เช่น .com, .co.th) เช่น: peter@eldoria หรือ test@email',
         testValues: ['peter@eldoria', 'test@email', 'admin@localhost'],
         actualResult: 'ระบบยอมรับข้อมูลและผ่านการลงทะเบียนสำเร็จ (Submission Successful) ทั้งที่รูปแบบอีเมลไม่สมบูรณ์',
         expectedResult: 'ระบบควรแจ้งเตือนสีแดงว่า "Invalid email format (รูปแบบอีเมลไม่ถูกต้อง)"',
         rootCause: 'Regex ในฟังก์ชัน validateEmail ใช้ /^[^\\s@]+@[^\\s@]+$/ ซึ่งตรวจสอบเฉพาะตัวอักษร + @ + ตัวอักษร โดยไม่ได้บังคับว่าต้องมีจุดและชื่อโดเมนต่อท้าย',
         codeFix: 'return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/.test(email.trim())',
      },
      {
         id: 'BUG-02',
         title: 'Bug 2: เบอร์โทรศัพท์ยอมรับตัวอักษรและสัญลักษณ์ปน (Contact Number Sanitization Bug)',
         field: 'Contact Number*',
         severity: 'Medium',
         howToReproduce: 'ที่ช่อง Contact Number* ให้กรอกเบอร์โทรศัพท์ที่มีตัวอักษรหรือสัญลักษณ์ปะปน เช่น: +1234567890#EXT หรือ 081-234-5678-ABC',
         testValues: ['+1234567890#EXT', '081-234-5678-ABC', 'phone:0812345678'],
         actualResult: 'ระบบตัดตัวอักษรที่ไม่ใช่ตัวเลขทิ้งอัตโนมัติ (เหลือ 11 หลัก) และยอมให้ผ่านการลงทะเบียนสำเร็จ',
         expectedResult: 'ระบบควรแจ้งเตือนว่า "Invalid contact number format" ทันทีหากพบตัวอักษรหรือสัญลักษณ์แปลกปลอม',
         rootCause: "ฟังก์ชัน validateContactNumber ใช้ phone.replace(/[^0-9+]/g, '') ลบตัวอักษรออกก่อน แล้วนำความยาวตัวเลขที่เหลือไปตรวจช่วง 9–15 หลัก",
         codeFix: "if (!/^\\+?[0-9\\-\\s]+$/.test(phone.trim())) return false\nconst digitsOnly = phone.replace(/[^0-9]/g, '')\nreturn digitsOnly.length >= 9 && digitsOnly.length <= 15",
      },
   ],
} as const;
