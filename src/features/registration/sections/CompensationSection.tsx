import { Sparkles, DollarSign, Mail } from 'lucide-react'
import type { FormState, Errors, ChangeHandler } from '../../../types/form'
import { CONTACT_METHOD_OPTIONS } from '../../../lib/constants'
import { inputClassFor } from '../../../lib/formUtils'
import { FloatingField } from '../../../components/ui/FloatingField'
import { Input } from '../../../components/ui/Input'
import { Select } from '../../../components/ui/Select'
import { SectionHeader } from '../components/SectionHeader'

type Props = {
  form: FormState
  errors: Errors
  onChange: ChangeHandler
  onNumberChange: (name: keyof FormState, value: number) => void
  isComplete: boolean
}

export function CompensationSection({
  form,
  errors,
  onChange,
  onNumberChange,
  isComplete,
}: Props) {
  return (
    <div className="space-y-4 pt-2">
      <SectionHeader
        step="03"
        title="Compensation & Contact (ค่าตอบแทนและช่องทางติดต่อ)"
        isComplete={isComplete}
      />

      {/* Desired Salary Slider + Input 2-Way Sync (QA-008) */}
      <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <label className="block text-xs md:text-sm font-bold text-slate-800">
            Select your desired salary per week ($):{' '}
            <span className="text-sky-700 font-mono text-base font-extrabold ml-1">
              ${Number(form.salary || 0).toLocaleString()}
            </span>
          </label>
          <div className="inline-flex items-center gap-1 text-[11px] text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 font-medium">
            <Sparkles className="h-3 w-3 text-sky-600" />
            <span>~ ${(form.salary * 4.33).toLocaleString('en-US', { maximumFractionDigits: 0 })} / month</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center mt-3">
          <div className="sm:col-span-2">
            <input
              type="range"
              name="salaryRange"
              min={0}
              max={2000}
              step={25}
              value={Math.min(form.salary, 2000)}
              onChange={(e) => onNumberChange('salary', Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
              <span>$0</span>
              <span>$500</span>
              <span>$1,000</span>
              <span>$1,500</span>
              <span>$2,000</span>
            </div>
          </div>

          <div>
            <FloatingField
              label="Salary ($/week)"
              error={errors.salary}
              icon={<DollarSign className="h-4 w-4" />}
            >
              <Input
                type="number"
                name="salary"
                value={form.salary}
                min={0}
                max={100000}
                step={25}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onNumberChange('salary', Number(e.target.value))
                }
                className={`pl-11 font-mono font-bold text-slate-900 ${inputClassFor('salary', form, errors)}`}
              />
            </FloatingField>
          </div>
        </div>
      </div>

      {/* Preferred Contact Method */}
      <div>
        <FloatingField
          label="Preferred Contact Method"
          icon={<Mail className="h-4 w-4" />}
        >
          <Select
            name="contactMethod"
            value={form.contactMethod}
            onChange={onChange}
            options={CONTACT_METHOD_OPTIONS}
            className={`pl-11 ${inputClassFor('contactMethod', form, errors)}`}
          />
        </FloatingField>
      </div>
    </div>
  )
}
