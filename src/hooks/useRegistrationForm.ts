import { useState, useMemo, useCallback } from 'react'
import {
  initialForm,
  type Errors,
  type FormState,
  type ChangeHandler,
} from '../types/form'
import { DEMO_FORM_DATA, MAX_FILE_SIZE } from '../lib/constants'
import {
  validateContactNumber,
  validateDateOfBirth,
  validateEmail,
  validateRequired,
  validateSalary,
} from '../lib/validation'

export function useRegistrationForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isShaking, setIsShaking] = useState(false)
  const [isClearModalOpen, setIsClearModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  const clearFieldError = (name: keyof FormState) => {
    setErrors((prev) => {
      if (!prev[name]) return prev
      const updated = { ...prev }
      delete updated[name]
      return updated
    })
  }

  const onChange: ChangeHandler = (e) => {
    const { name, value, type } = e.target
    const fieldName = name as keyof FormState

    if (type === 'file') {
      const file = (e.target as HTMLInputElement).files?.[0] ?? null
      if (file) {
        // Validate file size and type
        const validTypes = ['image/jpeg', 'image/png', 'application/pdf']
        const ext = file.name.split('.').pop()?.toLowerCase()
        const validExts = ['jpg', 'jpeg', 'png', 'pdf']

        if (file.size > MAX_FILE_SIZE) {
          setErrors((prev) => ({
            ...prev,
            passportFile: 'File size exceeds 5MB limit (ไฟล์ขนาดเกิน 5MB)',
          }))
          return
        }

        if (!validTypes.includes(file.type) && !validExts.includes(ext ?? '')) {
          setErrors((prev) => ({
            ...prev,
            passportFile: 'Allowed formats: JPG, PNG, PDF only (อนุญาตเฉพาะ JPG, PNG, PDF)',
          }))
          return
        }
      }
      setForm((prev) => ({ ...prev, [name]: file }))
      clearFieldError(fieldName)
      return
    }

    const checked = (e.target as HTMLInputElement).checked
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    clearFieldError(fieldName)
  }

  const onRoleToggle = (role: string) => {
    setForm((prev) => {
      const exists = prev.preferredRole.includes(role)
      const nextRoles = exists
        ? prev.preferredRole.filter((r) => r !== role)
        : [...prev.preferredRole, role]
      return { ...prev, preferredRole: nextRoles }
    })
    clearFieldError('preferredRole')
  }

  const onNumberChange = (name: keyof FormState, value: number) => {
    const safeValue = isNaN(value) ? 0 : Math.max(0, value)
    setForm((prev) => ({ ...prev, [name]: safeValue }))
    clearFieldError(name)
  }

  const fillDemoData = useCallback(() => {
    setForm((prev) => ({
      ...prev,
      ...DEMO_FORM_DATA,
    }))
    setErrors({})
  }, [])

  const validate = (state: FormState): Errors => {
    const next: Errors = {}

    if (!validateRequired(state.fullName))
      next.fullName = 'Full Name is required (กรุณากรอกชื่อ-นามสกุล)'

    if (!state.email) next.email = 'Email is required (กรุณากรอกอีเมล)'
    else if (!validateEmail(state.email))
      next.email = 'Invalid email format (รูปแบบอีเมลไม่ถูกต้อง)'

    if (!state.contactNumber)
      next.contactNumber = 'Contact Number is required (กรุณากรอกเบอร์ติดต่อ)'
    else if (!validateContactNumber(state.contactNumber))
      next.contactNumber = 'Invalid contact number format'

    if (!validateDateOfBirth(state.dateOfBirth))
      next.dateOfBirth = 'Valid Date of Birth is required (15-100 yrs)'

    if (!state.preferredRole || state.preferredRole.length === 0)
      next.preferredRole = 'Please select at least one Preferred Role in the Expedition'

    if (!state.preferredRegion)
      next.preferredRegion = 'Please select a Preferred Expedition Region'

    if (!validateSalary(state.salary))
      next.salary = 'Desired salary must be between 0 - 100,000'

    if (!state.passportFile)
      next.passportFile = 'Upload Passport/ID is required (กรุณาแนบไฟล์)'

    if (!state.accept)
      next.accept = 'You must agree to Terms and Conditions (กรุณายอมรับเงื่อนไข)'

    return next
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return

    const next = validate(form)
    setErrors(next)

    const errorKeys = Object.keys(next)
    if (errorKeys.length === 0) {
      setIsSubmitting(true)
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitted(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 600)
    } else {
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
      const firstErrorKey = errorKeys[0]
      const el = document.querySelector(`[name="${firstErrorKey}"]`)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        if (el instanceof HTMLElement) el.focus?.()
      }
    }
  }

  const onReset = () => {
    setForm(initialForm)
    setErrors({})
    setSubmitted(false)
    setIsClearModalOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openClearModal = () => setIsClearModalOpen(true)
  const closeClearModal = () => setIsClearModalOpen(false)
  const openTermsModal = () => setIsTermsModalOpen(true)
  const closeTermsModal = () => setIsTermsModalOpen(false)

  /* ---------- Live Progress & Remaining Required Calculation ---------- */
  const requiredKeys: (keyof FormState)[] = useMemo(
    () => [
      'fullName',
      'email',
      'contactNumber',
      'dateOfBirth',
      'preferredRole',
      'preferredRegion',
      'passportFile',
      'accept',
    ],
    [],
  )

  const filledCount = useMemo(() => {
    return requiredKeys.filter((k) => {
      const v = form[k]
      if (typeof v === 'boolean') return v
      if (Array.isArray(v)) return v.length > 0
      if (v instanceof File) return true
      return !!String(v ?? '').trim()
    }).length
  }, [form, requiredKeys])

  const progress = useMemo(() => {
    return Math.round((filledCount / requiredKeys.length) * 100)
  }, [filledCount, requiredKeys.length])

  const remainingRequiredCount = useMemo(() => {
    return requiredKeys.length - filledCount
  }, [requiredKeys.length, filledCount])

  /* ---------- Section Completion State (QA-006) ---------- */
  const sectionStates = useMemo(() => {
    return {
      sec01:
        !!form.fullName.trim() &&
        !!form.email.trim() &&
        !!form.contactNumber.trim() &&
        !!form.dateOfBirth.trim(),
      sec02: form.preferredRole.length > 0 && !!form.preferredRegion,
      sec03: form.salary >= 0 && !!form.contactMethod,
      sec04: form.passportFile !== null,
      sec05: true, // Additional info is optional
      sec06: form.accept === true,
    }
  }, [form])

  return {
    form,
    errors,
    submitted,
    isSubmitting,
    progress,
    remainingRequiredCount,
    sectionStates,
    isShaking,
    isClearModalOpen,
    isTermsModalOpen,
    openClearModal,
    closeClearModal,
    openTermsModal,
    closeTermsModal,
    onChange,
    onRoleToggle,
    onNumberChange,
    onSubmit,
    onReset,
    fillDemoData,
  }
}