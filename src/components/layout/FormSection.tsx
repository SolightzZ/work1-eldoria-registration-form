import type { ReactNode } from 'react'
import { Check } from 'lucide-react'

type Props = {
  step?: string
  icon: ReactNode
  title: string
  subtitle: string
  isComplete?: boolean
  children: ReactNode
  className?: string
}

export function FormSection({
  step,
  icon,
  title,
  subtitle,
  isComplete,
  children,
  className = '',
}: Props) {
  return (
    <section className={`p-5 md:p-6 rounded-2xl bg-white/70 border border-slate-200/80 shadow-xs transition-all hover:border-sky-200 ${className}`}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100/90 pb-3.5">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200/80 text-sky-600 shadow-xs">
              {icon}
            </div>
            {step && (
              <span className="absolute -top-1.5 -left-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-600 text-[10px] font-bold text-white shadow-xs">
                {step}
              </span>
            )}
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold text-slate-800 tracking-tight">{title}</h3>
            <p className="text-xs text-slate-400 font-medium">{subtitle}</p>
          </div>
        </div>

        {typeof isComplete === 'boolean' && (
          <div
            className={[
              'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-colors',
              isComplete
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/80'
                : 'bg-slate-100 text-slate-500 border border-slate-200',
            ].join(' ')}
          >
            {isComplete ? (
              <>
                <Check className="h-3 w-3 stroke-[3] text-emerald-600" />
                <span>กรอกครบแล้ว</span>
              </>
            ) : (
              <span>ยังไม่สมบูรณ์</span>
            )}
          </div>
        )}
      </div>

      <div className="space-y-4">
        {children}
      </div>
    </section>
  )
}