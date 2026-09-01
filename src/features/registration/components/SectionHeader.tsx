import { CheckCircle2 } from 'lucide-react'

type Props = {
  step: string
  title: string
  isComplete?: boolean
  isOptional?: boolean
}

export function SectionHeader({
  step,
  title,
  isComplete,
  isOptional = false,
}: Props) {
  return (
    <div className="flex items-center justify-between gap-2.5 pb-2.5 border-b border-sky-100/80">
      {/* Left: Responsive Step Number Pill (No squishing on mobile) + Title */}
      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
        <span className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white text-[11px] sm:text-xs font-bold font-mono shadow-2xs ring-2 ring-sky-100">
          {step}
        </span>
        <h2 className="text-xs sm:text-sm md:text-base font-bold text-slate-900 leading-snug break-words">
          {title}
        </h2>
      </div>

      {/* Right: Completion Status Badge (Strict shrink-0 to prevent layout wrap on small screens) */}
      {isOptional ? (
        <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
          <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-600" />
          <span>Optional</span>
        </span>
      ) : (
        <span
          className={[
            'inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full transition-colors shrink-0',
            isComplete
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              : 'bg-slate-100 text-slate-500 border border-slate-200',
          ].join(' ')}
        >
          {isComplete ? (
            <>
              <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-600" />
              <span>Completed</span>
            </>
          ) : (
            <span>Pending</span>
          )}
        </span>
      )}
    </div>
  )
}
