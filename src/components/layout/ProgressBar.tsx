import { CheckCircle2 } from 'lucide-react'

type Props = {
  value: number
  remainingCount?: number
}

export function ProgressBar({ value, remainingCount = 0 }: Props) {
  return (
    <div className="mb-8 bg-white/95 backdrop-blur-xs p-6 sm:p-7 rounded-2xl border border-sky-100 shadow-2xs animate-fade-up">
      {/* Top Header & Percentage */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs font-semibold text-slate-700 mb-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-sky-600 animate-pulse" />
          <span className="text-slate-900 font-bold">Registration Progress</span>
          <span className="text-slate-400 font-normal">|</span>
          <span className="text-slate-500 font-medium">
            {value === 100 ? (
              <span className="text-emerald-700 font-bold">Ready to Submit! (กรอกข้อมูลครบถ้วนแล้ว)</span>
            ) : (
              <span>{remainingCount} required {remainingCount === 1 ? 'field' : 'fields'} remaining</span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-1.5 font-mono self-end sm:self-auto">
          <span className="text-sm sm:text-base font-extrabold text-sky-700 tabular-nums">
            {value}% Complete
          </span>
          {value === 100 && (
            <CheckCircle2 className="h-4 w-4 text-emerald-600 inline" />
          )}
        </div>
      </div>

      {/* Main Progress Bar Track */}
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 border border-slate-200/80">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}