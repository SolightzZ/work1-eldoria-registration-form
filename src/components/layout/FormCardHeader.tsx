import { Compass, ShieldCheck, Zap } from 'lucide-react'

type Props = {
  title: string
  subtitle: string
  onFillDemo?: () => void
}

export function FormCardHeader({ title, subtitle, onFillDemo }: Props) {
  return (
    <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-sky-900 px-5 sm:px-10 md:px-12 py-5 sm:py-7 text-white border-b border-blue-800/40">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Left: Compass Icon + Title + Subtitle */}
        <div className="flex items-start sm:items-center gap-3 sm:gap-3.5">
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-xs border border-sky-300/30">
            <Compass className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white leading-snug">
              {title}
            </h1>
            <p className="mt-0.5 text-xs sm:text-sm text-sky-100/90 leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Right: Badges & Quick Demo Fill Button */}
        <div className="flex items-center gap-2 self-start lg:self-center shrink-0 flex-wrap">
          {onFillDemo && (
            <button
              type="button"
              onClick={onFillDemo}
              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 active:bg-amber-400/40 px-3 py-1.5 text-xs font-bold text-amber-300 border border-amber-400/40 shadow-2xs backdrop-blur-xs transition-all cursor-pointer hover:scale-105 active:scale-95 group"
              title="คลิกเพื่อกรอกข้อมูลตัวอย่างพร้อมไฟล์รูปภาพจำลองอัตโนมัติ"
            >
              <Zap className="h-3.5 w-3.5 text-amber-400 fill-amber-400 group-hover:animate-bounce" />
              <span>Demo Fill (พร้อมรูปภาพจำลอง)</span>
            </button>
          )}

          <div className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-medium text-sky-100 border border-white/15 backdrop-blur-xs">
            <ShieldCheck className="h-3.5 w-3.5 text-sky-400 shrink-0" />
            <span>Official Task Form</span>
          </div>
        </div>
      </div>
    </div>
  )
}