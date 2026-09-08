# Validation Rules - Eldoria Expedition Registration Form

## Overview

All validation rules for the registration form fields.

---

## Section 01: Personal Information

### Full Name

| Rule | Description |
|------|-------------|
| Required | Cannot be empty |
| Minimum length | At least 2 characters |
| Characters | Letters only (a-z, A-Z), spaces, hyphens, apostrophes |
| Word count | Exactly 2 words (first name + last name) |

**Error messages:**
- `Full Name is required (กรุณากรอกชื่อ-นามสกุล)`
- `Full Name must be at least 2 characters, letters only, and contain first & last name`

**Examples:**
| Input | Result |
|-------|--------|
| `Peter Ford` | Pass |
| `top top` | Pass |
| `top` | Fail (1 word) |
| `top top top` | Fail (3 words) |
| `top123` | Fail (has numbers) |
| `A` | Fail (too short) |

---

### Email

| Rule | Description |
|------|-------------|
| Required | Cannot be empty |
| Format | `local@domain.tld` |
| Characters | English letters (a-z, A-Z), numbers (0-9) only |
| TLD | At least 2 characters |

**Regex:** `/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/`

**Error messages:**
- `Email is required (กรุณากรอกอีเมล)`
- `Invalid email format (รูปแบบอีเมลไม่ถูกต้อง)`

**Examples:**
| Input | Result |
|-------|--------|
| `peter@gmail.com` | Pass |
| `test123@yahoo.co.th` | Pass |
| `t@gmail.com` | Pass |
| `ะ@gmail.com` | Fail (Thai characters) |
| `test.name@gmail.com` | Fail (dot not allowed) |
| `test@email` | Fail (no TLD) |
| `@gmail.com` | Fail (no local part) |

---

### Contact Number

| Rule | Description |
|------|-------------|
| Required | Cannot be empty |
| Format | Thai phone number only |
| Pattern | Starts with 0, exactly 10 digits |

**Regex:** `/^0[0-9]{9}$/`

**Error messages:**
- `Contact Number is required (กรุณากรอกเบอร์ติดต่อ)`
- `Invalid contact number format (ต้องเป็นเบอร์โทรไทย 10 หลัก ขึ้นต้นด้วย 0)`

**Examples:**
| Input | Result |
|-------|--------|
| `0812345678` | Pass |
| `0987654321` | Pass |
| `1234567890` | Fail (ไม่ขึ้นต้นด้วย 0) |
| `081234567` | Fail (9 หลัก) |
| `08123456789` | Fail (11 หลัก) |
| `+66812345678` | Fail (มี +) |

---

### Date of Birth

| Rule | Description |
|------|-------------|
| Required | Cannot be empty |
| Minimum age | 13 years |
| Maximum age | 100 years |
| HTML max | Today's date |

**Validation:**
```typescript
const age = now.getFullYear() - date.getFullYear()
return !isNaN(date.getTime()) && age >= 13 && age <= 100
```

**Error message:**
- `Valid Date of Birth is required (13 yrs+)`

---

### Archaeology Experience

| Rule | Description |
|------|-------------|
| Required | No (optional) |
| Options | No experience, Amateur, Intermediate, Professional |

---

## Section 02: Expedition Preferences

### Preferred Role

| Rule | Description |
|------|-------------|
| Required | Yes |
| Minimum | At least 1 selection |
| Maximum | All 5 positions |

**Options:** Researcher, Photographer, Drone Operator, Cartographer, Medic

**Error message:**
- `Please select at least one Preferred Role in the Expedition`

---

### Preferred Expedition Region

| Rule | Description |
|------|-------------|
| Required | Yes |
| Selection | Single select |

**Options:** South America, Africa, Asia, Europe, Australia

**Error message:**
- `Please select a Preferred Expedition Region`

---

## Section 03: Compensation & Contact

### Desired Salary

| Rule | Description |
|------|-------------|
| Required | Yes (default: 700) |
| Minimum | $100 |
| Maximum | $100,000 |
| Step | $25 |

**Validation:**
```typescript
return typeof value === 'number' && !isNaN(value) && value >= 100 && value <= 100000
```

**Error message:**
- `Desired salary must be between 100 - 100,000`

---

### Preferred Contact Method

| Rule | Description |
|------|-------------|
| Required | No (default: Email) |
| Options | Email, Phone, WhatsApp, Telegram |

---

## Section 04: Identification Documents

### Passport/ID File

| Rule | Description |
|------|-------------|
| Required | Yes |
| Allowed formats | JPG, PNG only |
| Maximum size | 5MB |

**Validation:**
- Check file size: `file.size <= 5 * 1024 * 1024`
- Check file type: `image/jpeg`, `image/png`
- Check file extension: `jpg`, `jpeg`, `png`

**Error messages:**
- `Upload Passport/ID is required (กรุณาแนบไฟล์)`
- `File size exceeds 5MB limit (ไฟล์ขนาดเกิน 5MB)`
- `Allowed formats: JPG, PNG only (อนุญาตเฉพาะ JPG, PNG)`

---

## Section 05: Additional Information

### Additional Comments

| Rule | Description |
|------|-------------|
| Required | No (optional) |
| Maximum length | No limit |

---

## Section 06: Confirmation & Submission

### Terms & Conditions

| Rule | Description |
|------|-------------|
| Required | Yes |
| Type | Checkbox |

**Error message:**
- `You must agree to Terms and Conditions (กรุณายอมรับเงื่อนไข)`

---

## Submit Button Behavior

| State | Button Text | Disabled |
|-------|-------------|----------|
| No errors | `Submit Registration` | No |
| Has errors | `แก้ไขข้อมูลให้ครบก่อน (X รายการ)` | Yes |
| Submitting | `Submitting Registration...` | Yes |

---

## Source Files

| File | Description |
|------|-------------|
| `src/lib/validation.ts` | All validation functions |
| `src/hooks/useRegistrationForm.ts` | Form state & validation logic |
| `src/features/registration/sections/PersonalInfoSection.tsx` | Personal info fields |
| `src/features/registration/sections/CompensationSection.tsx` | Salary slider & input |
| `src/features/registration/sections/ConfirmationSection.tsx` | Submit button & warning |
