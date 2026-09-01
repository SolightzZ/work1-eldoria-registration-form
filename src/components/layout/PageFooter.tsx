import { useEffect, useState } from 'react'
import { ArrowUp, Code2, Compass, ExternalLink, UserCheck, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react'
import { STUDENT_ID, STUDENT_NAME } from '../../lib/constants'

export function PageFooter() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showQaMetadata, setShowQaMetadata] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="mt-14 bg-white/80 backdrop-blur-sm border-t border-sky-100 text-slate-600 text-xs no-print">
        <div className="page-container py-10 space-y-8">
          {/* Section 1: Application UI Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-sky-100/80">
            {/* App Overview */}
            <div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-blue-700 text-white shadow-xs">
                  <Compass className="h-4 w-4" />
                </div>
                <span className="font-bold text-slate-900 text-sm">
                  Eldoria Expedition 2026
                </span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed max-w-md">
                ระบบลงทะเบียนทีมสำรวจดินแดนโบราณเอลโดเรีย พัฒนาขึ้นสำหรับการฝึกปฏิบัติการทดสอบเว็บฟอร์มและการตรวจสอบข้อมูล (QA & Form Testing Practice)
              </p>
              <div className="mt-3">
                <a
                  href="https://www.realbugz.com/en/task-form"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-800 font-medium hover:underline text-[11px]"
                >
                  <span>เว็บอ้างอิงต้นฉบับ Realbugz Task Form</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Architecture Tech Stack */}
            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Code2 className="h-4 w-4 text-sky-600" />
                เทคโนโลยีและสถาปัตยกรรม
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 text-[11px]">
                <li className="flex items-center gap-1.5 bg-sky-50/60 p-2 rounded-lg border border-sky-100">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>React 19 & TypeScript 5</span>
                </li>
                <li className="flex items-center gap-1.5 bg-sky-50/60 p-2 rounded-lg border border-sky-100">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>Tailwind CSS v4 Clean UI</span>
                </li>
                <li className="flex items-center gap-1.5 bg-sky-50/60 p-2 rounded-lg border border-sky-100">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>Lucide Icons & Strict TSX</span>
                </li>
                <li className="flex items-center gap-1.5 bg-sky-50/60 p-2 rounded-lg border border-sky-100">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>Responsive Desktop / Mobile</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2: Collapsible Developer & QA Testing Metadata (QA-007, QA-008) */}
          <div className="bg-sky-50/60 border border-sky-100 rounded-2xl overflow-hidden">
            <button
              type="button"
              onClick={() => setShowQaMetadata((prev) => !prev)}
              className="w-full px-4 sm:px-5 py-3 flex items-center justify-between text-left hover:bg-slate-100/70 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2 text-slate-700 font-bold text-xs">
                <UserCheck className="h-4 w-4 text-sky-600" />
                <span>Developer & Academic Submission Metadata</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                <span>{showQaMetadata ? 'ซ่อนข้อมูล' : 'แสดงข้อมูลผู้พัฒนา'}</span>
                {showQaMetadata ? (
                  <ChevronUp className="h-3.5 w-3.5" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5" />
                )}
              </div>
            </button>

            {showQaMetadata && (
              <div className="px-4 sm:px-5 pb-4 pt-1 border-t border-slate-200/60 animate-fade-up">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
                  <div>
                    <p className="text-[11px] text-slate-400">รหัสนักศึกษา</p>
                    <p className="font-mono font-bold text-sky-700 text-sm">{STUDENT_ID}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">ชื่อ-นามสกุล</p>
                    <p className="font-bold text-slate-900">{STUDENT_NAME}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">กิจกรรม / รายวิชา</p>
                    <p className="font-semibold text-slate-800">Work 1: พัฒนาหน้าเว็บลงทะเบียน (10 คะแนนจริง)</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Copyright */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
            <p>© 2569 Eldoria Expedition Registration Form. Built for Academic Assessment.</p>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button (QA-017) */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="scroll-to-top no-print fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white shadow-md transition-all duration-200 cursor-pointer animate-fade-up border border-sky-500 hover:scale-105 active:scale-95"
          title="เลื่อนกลับขึ้นด้านบนสุด (Scroll to Top)"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  )
}