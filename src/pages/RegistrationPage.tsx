import { useRegistrationForm } from '../hooks/useRegistrationForm'
import { FormCardHeader } from '../components/layout/FormCardHeader'
import { ProgressBar } from '../components/layout/ProgressBar'
import {
  SuccessScreen,
  FormErrorSummary,
  TermsModal,
  ClearConfirmModal,
  PersonalInfoSection,
  ExpeditionPreferencesSection,
  CompensationSection,
  IdentificationSection,
  AdditionalInfoSection,
  ConfirmationSection,
} from '../features/registration'

type Props = {
  formHook?: ReturnType<typeof useRegistrationForm>
}

export function RegistrationPage({ formHook }: Props) {
  const internalHook = useRegistrationForm()
  const {
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
  } = formHook ?? internalHook

  if (submitted) return <SuccessScreen form={form} onReset={onReset} />

  const scrollToField = (name: string) => {
    const el = document.querySelector(`[name="${name}"]`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      if (el instanceof HTMLElement) el.focus?.()
    }
  }

  return (
    <div className="w-full form-container space-y-8 animate-fade-up">
      {/* Live Persistent Progress Bar (QA-005) */}
      <ProgressBar value={progress} remainingCount={remainingRequiredCount} />

      {/* Main Registration Card */}
      <div
        className={[
          'rounded-3xl bg-white/95 backdrop-blur-xs border border-sky-100 shadow-sm overflow-hidden',
          isShaking ? 'animate-shake' : '',
        ].join(' ')}
      >
        <FormCardHeader
          title="Register for the expedition in search of Eldoria"
          subtitle="แบบฟอร์มลงทะเบียนเข้าร่วมทีมสำรวจดินแดนโบราณเอลโดเรีย (Required fields are marked with *)"
        />

        {/* Top Error Summary Banner (QA-003) */}
        <FormErrorSummary errors={errors} onScrollToField={scrollToField} />

        {/* Modular 6-Section Registration Form */}
        <form onSubmit={onSubmit} className="p-5 sm:p-10 md:p-12 space-y-9 sm:space-y-11" noValidate>
          {/* Section 01: ข้อมูลส่วนตัว (Personal Information) */}
          <PersonalInfoSection
            form={form}
            errors={errors}
            onChange={onChange}
            isComplete={sectionStates.sec01}
          />

          {/* Section 02: ความต้องการในการสำรวจ (Expedition Preferences) */}
          <ExpeditionPreferencesSection
            form={form}
            errors={errors}
            onChange={onChange}
            onRoleToggle={onRoleToggle}
            isComplete={sectionStates.sec02}
          />

          {/* Section 03: ค่าตอบแทนและช่องทางติดต่อ (Compensation & Contact) */}
          <CompensationSection
            form={form}
            errors={errors}
            onChange={onChange}
            onNumberChange={onNumberChange}
            isComplete={sectionStates.sec03}
          />

          {/* Section 04: เอกสารยืนยันตัวตน (Identification Documents) */}
          <IdentificationSection
            form={form}
            errors={errors}
            onChange={onChange}
            isComplete={sectionStates.sec04}
          />

          {/* Section 05: ข้อมูลเพิ่มเติม (Additional Information) */}
          <AdditionalInfoSection
            form={form}
            errors={errors}
            onChange={onChange}
          />

          {/* Section 06: การยืนยันและส่งใบสมัคร (Confirmation & Submission) */}
          <ConfirmationSection
            form={form}
            errors={errors}
            onChange={onChange}
            isSubmitting={isSubmitting}
            isComplete={sectionStates.sec06}
            onOpenTermsModal={openTermsModal}
            onOpenClearModal={openClearModal}
          />
        </form>
      </div>

      {/* MODAL 1: Terms & Conditions Dialog (QA-013) */}
      <TermsModal isOpen={isTermsModalOpen} onClose={closeTermsModal} />

      {/* MODAL 2: Clear Form Destructive Confirmation Dialog (QA-015) */}
      <ClearConfirmModal
        isOpen={isClearModalOpen}
        onClose={closeClearModal}
        onConfirm={onReset}
      />
    </div>
  )
}
