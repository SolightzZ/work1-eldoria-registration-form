import { Send, RotateCcw, Loader2, FileText, AlertTriangle } from 'lucide-react'
import type { FormState, Errors, ChangeHandler } from '../../../types/form'
import { Button } from '../../../components/ui/Button'
import { Checkbox } from '../../../components/ui/Checkbox'
import { SectionHeader } from '../components/SectionHeader'

type Props = {
  form: FormState
  errors: Errors
  errorCount: number
  onChange: ChangeHandler
  isSubmitting: boolean
  isComplete: boolean
  onOpenTermsModal: () => void
  onOpenClearModal: () => void
}

export function ConfirmationSection({
  form,
  errors,
  errorCount,
  onChange,
  isSubmitting,
  isComplete,
  onOpenTermsModal,
  onOpenClearModal,
}: Props) {
  const hasErrors = errorCount > 0

  return (
    <div className="space-y-4 pt-2">
      <SectionHeader
        step="06"
        title="Confirmation & Submission (การยืนยันและส่งใบสมัคร)"
        isComplete={isComplete}
      />

      {/* Warning Banner when errors exist */}
      {hasErrors && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 animate-fade-up">
          <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <p className="font-bold">กรุณากรอกข้อมูลให้ครบถ้วนก่อนกด Submit</p>
            <p className="mt-0.5 text-amber-700">
              พบข้อผิดพลาด {errorCount} รายการ กรุณาตรวจสอบและแก้ไขข้อมูลด้านบนให้ครบถ้วน
            </p>
          </div>
        </div>
      )}

      {/* Terms & Conditions Checkbox (QA-013) - Mobile Optimized & Light Blue Theme */}
      <div className="space-y-2.5">
        <Checkbox
          name="accept"
          checked={form.accept}
          onChange={onChange}
          error={errors.accept}
        >
          <div className="space-y-0.5 text-left">
            <p className="font-semibold text-xs sm:text-sm text-slate-900 leading-snug">
              I Agree to Terms and Conditions <span className="text-rose-500 font-bold">*</span>
            </p>
            <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
              ข้าพเจ้ายอมรับเงื่อนไขและข้อตกลงในการลงทะเบียนเข้าร่วมทีมสำรวจ
            </p>
          </div>
        </Checkbox>

        {/* View Full Terms Button (Touch-Friendly Responsive Pill for Mobile & Desktop) */}
        <div className="pt-0.5 pl-1 sm:pl-2">
          <button
            type="button"
            onClick={onOpenTermsModal}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-800 bg-sky-50/90 hover:bg-sky-100 active:bg-sky-200/80 border border-sky-200 px-3 py-1.5 rounded-xl transition-all cursor-pointer shadow-2xs group"
          >
            <FileText className="h-3.5 w-3.5 text-sky-600 group-hover:scale-110 transition-transform shrink-0" />
            <span className="underline decoration-sky-300 underline-offset-2 break-words text-left">
              อ่านข้อกำหนดและเงื่อนไขฉบับเต็ม (View Full Terms)
            </span>
          </button>
        </div>
      </div>

      {/* Buttons: Submit Registration (with Loading state) & Clear Form (with Confirm modal) */}
      <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
        <div className="w-full sm:flex-[3]">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={isSubmitting || hasErrors}
            icon={
              isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )
            }
          >
            {isSubmitting
              ? 'Submitting Registration...'
              : hasErrors
                ? `แก้ไขข้อมูลให้ครบก่อน (${errorCount} รายการ)`
                : 'Submit Registration'}
          </Button>
        </div>

        <div className="w-full sm:flex-[2]">
          <Button
            type="button"
            variant="secondary"
            size="lg"
            fullWidth
            disabled={isSubmitting}
            icon={<RotateCcw className="h-4 w-4" />}
            onClick={onOpenClearModal}
          >
            Clear Form
          </Button>
        </div>
      </div>
    </div>
  )
}
