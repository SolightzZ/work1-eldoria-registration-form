/**
 * Validation rules for Expedition Registration Form
 */

export function validateEmail(email: string): boolean {
  if (!email.trim()) return false
  return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(email.trim())
}

export function validateContactNumber(phone: string): boolean {
  if (!phone.trim()) return false
  if (!/^\+?[0-9\-\s]+$/.test(phone.trim())) return false
  const digitsOnly = phone.replace(/[^0-9]/g, '')
  return digitsOnly.length >= 9 && digitsOnly.length <= 15
}

export function validateRequired(value: string): boolean {
  return !!value && !!value.trim()
}

export function validateFullName(name: string): boolean {
  if (!name.trim()) return false
  if (name.trim().length < 2) return false
  if (/[^a-zA-Z\s\-']/.test(name.trim())) return false
  const words = name.trim().split(/\s+/)
  return words.length === 2
}

export function validateDateOfBirth(dob: string): boolean {
  if (!dob) return false
  const date = new Date(dob)
  const now = new Date()
  const age = now.getFullYear() - date.getFullYear()
  return !isNaN(date.getTime()) && age >= 13 && age <= 100
}

export function validateSalary(value: number): boolean {
  return typeof value === 'number' && !isNaN(value) && value >= 100 && value <= 100000
}