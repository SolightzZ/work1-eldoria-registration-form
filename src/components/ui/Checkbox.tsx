import { Check, ShieldCheck } from 'lucide-react'
import type { ChangeHandler } from '../../types/form'
import { ErrorMessage } from './ErrorMessage'

type Props = {
  name: string
  checked: boolean
  onChange: ChangeHandler
  children: React.ReactNode
  error?: string
}

export function Checkbox({ name, checked, onChange, children, error }: Props) {
  return (
    <div
      className={[
        'rounded-xl border p-4 transition-colors select-none',
        error
          ? 'border-rose-300 bg-rose-50/50'
          : checked
            ? 'border-sky-500 bg-sky-50/60'
            : 'border-slate-300 bg-white hover:border-slate-400',
      ].join(' ')}
    >
      <label className="flex items-start gap-3 text-xs md:text-sm text-slate-700 cursor-pointer">
        <div className="relative mt-0.5 shrink-0">
          <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
            className="peer sr-only"
          />
          <div
            className={[
              'h-5 w-5 rounded-md border transition-colors flex items-center justify-center',
              checked
                ? 'bg-sky-600 border-sky-600 text-white'
                : 'bg-white border-slate-300 hover:border-slate-400',
            ].join(' ')}
          >
            {checked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
          </div>
        </div>
        <div className="leading-relaxed flex items-start gap-2 flex-wrap flex-1">
          <ShieldCheck
            className={`h-4 w-4 mt-0.5 shrink-0 transition-colors ${checked ? 'text-sky-600' : 'text-slate-400'}`}
          />
          <div className="flex-1 font-medium text-slate-800">{children}</div>
        </div>
      </label>
      {error && <ErrorMessage message={error} />}
    </div>
  )
}