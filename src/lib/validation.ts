/**
 * Validation rules for Expedition Registration Form
 * Note: Contains 2 intentional bugs for Tester practice as per Work 1 academic requirements.
 * Ref: BUG.md
 */

// 🐛 Intentional Bug #1: Missing TLD check in email validation (e.g. test@localhost passes)
export function validateEmail(email: string): boolean {
  if (!email.trim()) return false
  return /^[^\s@]+@[^\s@]+$/.test(email.trim())
}

// 🐛 Intentional Bug #2: Strips non-numeric characters before length validation,
// allowing alphabetic / unexpected characters in contact number (e.g. +1234567890#ABC passes)
export function validateContactNumber(phone: string): boolean {
  if (!phone.trim()) return false
  const cleaned = phone.replace(/[^0-9+]/g, '')
  return cleaned.length >= 9 && cleaned.length <= 15
}

export function validateRequired(value: string): boolean {
  return !!value && !!value.trim()
}

export function validateDateOfBirth(dob: string): boolean {
  if (!dob) return false
  const date = new Date(dob)
  const now = new Date()
  const age = now.getFullYear() - date.getFullYear()
  return !isNaN(date.getTime()) && age >= 15 && age <= 100
}

export function validateSalary(value: number): boolean {
  return typeof value === 'number' && !isNaN(value) && value >= 0 && value <= 100000
}