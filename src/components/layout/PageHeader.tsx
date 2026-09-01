import { Sparkles, UserCheck } from 'lucide-react'
import { STUDENT_ID, STUDENT_NAME } from '../../lib/constants'

export function PageHeader() {
  return (
    <header className="mb-6 text-center animate-fade-up">
      {/* Top Academic Tag */}
      <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3.5 py-1 text-xs font-semibold text-slate-700 shadow-2xs mb-3">
        <Sparkles className="h-3.5 w-3.5 text-sky-600" />
        <span>Work 1: พัฒนาหน้าเว็บไซต์ลงทะเบียน (Programmer)</span>
      </div>

      {/* Student Identification Card */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 bg-white px-5 py-2.5 rounded-2xl border border-slate-200 shadow-2xs max-w-xl mx-auto mb-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-sky-600 flex items-center justify-center text-white shrink-0">
            <UserCheck className="h-3.5 w-3.5" />
          </div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            นักศึกษาผู้พัฒนา:
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-800">
          <span className="font-mono text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-lg border border-sky-200">
            {STUDENT_ID}
          </span>
          <span className="text-slate-300">|</span>
          <span>{STUDENT_NAME}</span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
        ระบบลงทะเบียนเข้าร่วมภารกิจสำรวจดินแดนโบราณเอลโดเรีย (Eldoria Expedition)
      </p>
    </header>
  )
}