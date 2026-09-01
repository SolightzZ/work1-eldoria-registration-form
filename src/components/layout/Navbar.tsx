import { Compass, Zap, UserCheck } from 'lucide-react'
import { STUDENT_ID, STUDENT_NAME } from '../../lib/constants'

type Props = {
  onFillDemo?: () => void
}

export function Navbar({ onFillDemo }: Props) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-sky-100/90 shadow-2xs no-print">
      <div className="page-container h-16 flex items-center justify-between gap-3">
        {/* Left: Brand / Logo - Click to scroll to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2.5 sm:gap-3 text-left cursor-pointer group focus:outline-none select-none shrink-0"
          title="คลิกเพื่อเลื่อนกลับไปด้านบนสุด"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-blue-700 text-white shadow-xs group-hover:scale-105 group-active:scale-95 transition-transform">
            <Compass className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-bold text-slate-900 group-hover:text-sky-600 transition-colors text-sm sm:text-base tracking-tight">
                Eldoria Expedition
              </span>
              <span className="hidden md:inline-block text-[10px] font-semibold bg-sky-100 text-sky-800 px-2 py-0.5 rounded-md font-mono">
                TASK FORM
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              Registration & Field Team Recruitment
            </p>
          </div>
        </button>

        {/* Right: Student Info & Quick Demo Fill */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Student Developer Pill */}
          <div className="flex items-center gap-2 bg-sky-50/70 border border-sky-100 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs">
            <div className="h-5 w-5 rounded-full bg-sky-600 flex items-center justify-center text-white shrink-0">
              <UserCheck className="h-3 w-3" />
            </div>
            <div className="text-left font-medium text-slate-700 leading-none">
              <span className="font-mono font-bold text-sky-700">{STUDENT_ID}</span>
              <span className="hidden lg:inline text-slate-400 mx-1.5">|</span>
              <span className="hidden lg:inline font-semibold text-slate-800">{STUDENT_NAME}</span>
            </div>
          </div>

          {/* Quick Demo Fill Button */}
          {onFillDemo && (
            <button
              type="button"
              onClick={onFillDemo}
              className="inline-flex items-center gap-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 hover:border-sky-300 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-2xs hover:shadow-xs active:scale-95"
              title="คลิกเพื่อกรอกข้อมูลตัวอย่างอัตโนมัติ"
            >
              <Zap className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
              <span className="hidden sm:inline">Demo Fill</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
