import { useState } from 'react'
import {
  Check,
  RotateCcw,
  Printer,
  Copy,
  CheckCheck,
  Sparkles,
  User,
  Calendar,
  Briefcase,
  Globe2,
  DollarSign,
  FileCheck,
  Mail,
  Phone,
  MessageSquare,
} from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { STUDENT_ID, STUDENT_NAME } from '../../lib/constants'
import { SUCCESS_CONTENT } from '../../lib/content'
import type { FormState } from '../../types/form'

type Props = {
  form: FormState
  onReset: () => void
}

export function SuccessScreen({ form, onReset }: Props) {
  const [copied, setCopied] = useState(false)

  const submissionDate = new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  const handleCopySummary = () => {
    const text = `
=== Eldoria Expedition Registration Summary ===
Date: ${submissionDate}
Full Name: ${form.fullName}
Email: ${form.email}
Contact Number: ${form.contactNumber}
Date of Birth: ${form.dateOfBirth}
Archaeology Experience: ${form.experience}
Preferred Role: ${Array.isArray(form.preferredRole) ? form.preferredRole.join(', ') : form.preferredRole}
Preferred Region: ${form.preferredRegion}
Desired Salary: $${form.salary.toLocaleString()} USD/week
Contact Method: ${form.contactMethod}
Uploaded File: ${form.passportFile ? form.passportFile.name : 'N/A'}
Additional Comments: ${form.comment || 'N/A'}
===============================================
    `.trim()

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    })
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="w-full mx-auto animate-fade-up print:m-0 print:p-0">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 md:p-12 text-center print:border-0 print:shadow-none print:p-0">
        {/* 1. Success Hero Section */}
        <div className="no-print">
          <div className="mx-auto mb-4 h-16 w-16 sm:h-20 sm:w-20 rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-md border border-sky-400/30 animate-pop">
            <Check className="h-8 w-8 sm:h-10 sm:w-10 stroke-[3]" />
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-semibold text-emerald-800 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            <span>{SUCCESS_CONTENT.heroBadge}</span>
          </div>
        </div>

        {/* 2. Success Title & Timestamp */}
        <div className="text-center print:text-left print:mb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight print:text-xl print:text-slate-900">
            {SUCCESS_CONTENT.title}
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-500 print:text-xs print:text-slate-600">
            {SUCCESS_CONTENT.subtitlePrefix} ({submissionDate})
          </p>
        </div>

        {/* 3. Summary Receipt Card */}
        <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200/90 p-5 sm:p-8 text-left space-y-6 print-receipt-card print:mt-0 print:p-5 print:bg-white print:border-slate-300">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3.5">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider">
              <FileCheck className="h-4.5 w-4.5 text-sky-600" />
              <span>{SUCCESS_CONTENT.receiptTitle}</span>
            </div>
            <span className="text-xs font-mono font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
              {SUCCESS_CONTENT.receiptTag}
            </span>
          </div>

          {/* Consistent Typography Field Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Full Name */}
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 border border-sky-100/80">
                <User className="h-4.5 w-4.5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</p>
                <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 break-words">{form.fullName}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 border border-sky-100/80">
                <Mail className="h-4.5 w-4.5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</p>
                <p className="text-sm sm:text-base font-semibold text-slate-800 mt-0.5 break-all">{form.email}</p>
              </div>
            </div>

            {/* Contact Number */}
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 border border-sky-100/80">
                <Phone className="h-4.5 w-4.5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Contact Number</p>
                <p className="text-sm sm:text-base font-mono font-semibold text-slate-900 mt-0.5">{form.contactNumber}</p>
              </div>
            </div>

            {/* Date of Birth */}
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 border border-sky-100/80">
                <Calendar className="h-4.5 w-4.5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Date of Birth</p>
                <p className="text-sm sm:text-base font-mono font-semibold text-slate-900 mt-0.5">{form.dateOfBirth}</p>
              </div>
            </div>

            {/* Archaeology Experience */}
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 border border-sky-100/80">
                <Briefcase className="h-4.5 w-4.5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Archaeology Experience</p>
                <p className="text-sm sm:text-base font-semibold text-slate-800 mt-0.5">{form.experience}</p>
              </div>
            </div>

            {/* Preferred Role */}
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 border border-sky-100/80">
                <Briefcase className="h-4.5 w-4.5 text-sky-700" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Preferred Role</p>
                <p className="text-sm sm:text-base font-bold text-sky-700 mt-0.5 break-words">
                  {Array.isArray(form.preferredRole) ? form.preferredRole.join(', ') : form.preferredRole}
                </p>
              </div>
            </div>

            {/* Expedition Region */}
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 border border-sky-100/80">
                <Globe2 className="h-4.5 w-4.5 text-sky-700" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Expedition Region</p>
                <p className="text-sm sm:text-base font-bold text-sky-700 mt-0.5">{form.preferredRegion}</p>
              </div>
            </div>

            {/* Desired Salary */}
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 border border-sky-100/80">
                <DollarSign className="h-4.5 w-4.5 text-slate-900" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Desired Salary</p>
                <p className="text-sm sm:text-base font-mono font-extrabold text-slate-900 mt-0.5">
                  ${Number(form.salary || 0).toLocaleString()} USD / week
                </p>
              </div>
            </div>

            {/* Passport/ID Document */}
            <div className="flex items-start gap-3 sm:col-span-2 lg:col-span-1">
              <div className="h-9 w-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 border border-sky-100/80">
                <FileCheck className="h-4.5 w-4.5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Passport / ID Document</p>
                <p className="text-sm sm:text-base font-medium text-slate-800 truncate mt-0.5" title={form.passportFile?.name}>
                  {form.passportFile ? form.passportFile.name : 'N/A'}
                </p>
              </div>
            </div>
          </div>

          {/* Additional Comments (Full Width) */}
          {form.comment && (
            <div className="pt-4 border-t border-slate-200 flex items-start gap-3">
              <div className="h-9 w-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                <MessageSquare className="h-4.5 w-4.5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Additional Comments</p>
                <p className="text-sm text-slate-700 mt-0.5 italic leading-relaxed whitespace-pre-wrap">{form.comment}</p>
              </div>
            </div>
          )}
        </div>

        {/* 4. Action Buttons (Interactive Area) */}
        <div className="mt-8 space-y-3.5 no-print">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Button
              type="button"
              variant="outline"
              size="lg"
              fullWidth
              icon={copied ? <CheckCheck className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
              onClick={handleCopySummary}
            >
              {copied ? SUCCESS_CONTENT.buttonCopied : SUCCESS_CONTENT.buttonCopy}
            </Button>

            <Button
              type="button"
              variant="secondary"
              size="lg"
              fullWidth
              icon={<Printer className="h-4 w-4" />}
              onClick={handlePrint}
            >
              {SUCCESS_CONTENT.buttonPrint}
            </Button>
          </div>

          <Button
            onClick={onReset}
            variant="primary"
            size="lg"
            fullWidth
            icon={<RotateCcw className="h-4 w-4" />}
          >
            {SUCCESS_CONTENT.buttonReset}
          </Button>
        </div>

        {/* 5. Developer Identification Footer */}
        <div className="mt-8 pt-5 border-t border-slate-100 text-xs text-slate-400 no-print">
          {SUCCESS_CONTENT.devLabel} <span className="font-mono text-sky-700 font-bold">{STUDENT_ID}</span> — {STUDENT_NAME}
        </div>
      </div>
    </div>
  )
}