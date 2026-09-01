import type { FormState, Errors, ChangeHandler } from '../../../types/form'
import { FileUpload } from '../../../components/ui/FileUpload'
import { SectionHeader } from '../components/SectionHeader'

type Props = {
  form: FormState
  errors: Errors
  onChange: ChangeHandler
  isComplete: boolean
}

export function IdentificationSection({
  form,
  errors,
  onChange,
  isComplete,
}: Props) {
  return (
    <div className="space-y-4 pt-2">
      <SectionHeader
        step="04"
        title="Identification Documents (เอกสารยืนยันตัวตน)"
        isComplete={isComplete}
      />

      {/* Upload Passport/ID (QA-012) */}
      <div>
        <label className="block text-xs md:text-sm font-bold text-slate-800 mb-2">
          Upload Passport/ID <span className="text-rose-500 font-bold">*</span>{' '}
          <span className="text-xs font-normal text-slate-500">(JPG, PNG, PDF - สูงสุด 5MB)</span>
        </label>
        <FileUpload
          name="passportFile"
          file={form.passportFile}
          onChange={onChange}
          hint="Upload Passport/ID (JPG, PNG, PDF - max 5MB)"
          error={errors.passportFile}
        />
      </div>
    </div>
  )
}
