import { User, Mail, Phone, Calendar, Briefcase } from 'lucide-react'
import type { FormState, Errors, ChangeHandler } from '../../../types/form'
import { EXPERIENCE_OPTIONS } from '../../../lib/constants'
import { inputClassFor } from '../../../lib/formUtils'
import { FloatingField } from '../../../components/ui/FloatingField'
import { Input } from '../../../components/ui/Input'
import { Select } from '../../../components/ui/Select'
import { SectionHeader } from '../components/SectionHeader'

type Props = {
  form: FormState
  errors: Errors
  onChange: ChangeHandler
  isComplete: boolean
}

export function PersonalInfoSection({
  form,
  errors,
  onChange,
  isComplete,
}: Props) {
  return (
    <div className="space-y-4">
      <SectionHeader
        step="01"
        title="Personal Information (ข้อมูลส่วนตัว)"
        isComplete={isComplete}
      />

      {/* 1. Full Name */}
      <div>
        <FloatingField
          label="Full Name"
          required
          error={errors.fullName}
          icon={<User className="h-4 w-4" />}
        >
          <Input
            name="fullName"
            value={form.fullName}
            onChange={onChange}
            placeholder="e.g., Peter Ford"
            autoComplete="name"
            className={`pl-11 ${inputClassFor('fullName', form, errors)}`}
          />
        </FloatingField>
      </div>

      {/* 2. Email & Contact Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FloatingField
          label="Email"
          required
          error={errors.email}
          icon={<Mail className="h-4 w-4" />}
        >
          <Input
            name="email"
            value={form.email}
            onChange={onChange}
            type="email"
            placeholder="e.g., test@email.com"
            inputMode="email"
            autoComplete="email"
            className={`pl-11 ${inputClassFor('email', form, errors)}`}
          />
        </FloatingField>

        <FloatingField
          label="Contact Number"
          required
          error={errors.contactNumber}
          icon={<Phone className="h-4 w-4" />}
        >
          <Input
            name="contactNumber"
            value={form.contactNumber}
            onChange={onChange}
            type="tel"
            placeholder="e.g., +1234567890"
            inputMode="tel"
            autoComplete="tel"
            className={`pl-11 font-mono tracking-wider ${inputClassFor('contactNumber', form, errors)}`}
          />
        </FloatingField>
      </div>

      {/* 3. Date of Birth & Archaeology Experience */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FloatingField
          label="Date of Birth"
          required
          error={errors.dateOfBirth}
          icon={<Calendar className="h-4 w-4" />}
        >
          <Input
            type="date"
            name="dateOfBirth"
            value={form.dateOfBirth}
            min="1920-01-01"
            max="2011-12-31"
            onChange={onChange}
            className={`pl-11 ${inputClassFor('dateOfBirth', form, errors)}`}
          />
        </FloatingField>

        <FloatingField
          label="Archaeology Experience"
          icon={<Briefcase className="h-4 w-4" />}
        >
          <Select
            name="experience"
            value={form.experience}
            onChange={onChange}
            options={EXPERIENCE_OPTIONS}
            className={`pl-11 ${inputClassFor('experience', form, errors)}`}
          />
        </FloatingField>
      </div>
    </div>
  )
}