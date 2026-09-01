import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FileText, X, Check } from 'lucide-react'
import { Button } from '../../../components/ui/Button'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    // Lock body scrolling while modal is open
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-up select-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-4 sm:p-7 shadow-2xl border border-sky-100 text-left space-y-4 max-h-[88vh] flex flex-col animate-pop"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-sky-100/80 pb-3 gap-2">
          <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm sm:text-base min-w-0">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <span id="terms-modal-title" className="break-words leading-tight">
              Terms & Conditions — Eldoria
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="h-8 w-8 shrink-0 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="text-xs sm:text-sm text-slate-600 space-y-3 overflow-y-auto pr-1.5 leading-relaxed flex-1">
          <div className="p-3 rounded-xl bg-sky-50/50 border border-sky-100/90 space-y-1">
            <p className="font-bold text-slate-800 text-xs sm:text-sm">1. ข้อกำหนดและคุณสมบัติผู้สมัคร</p>
            <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
              ผู้สมัครต้องมีอายุตั้งแต่ 15 ปีขึ้นไป มีสุขภาพร่างกายพร้อมสำหรับการสำรวจภาคสนาม และกรอกข้อมูลที่เป็นความจริง
            </p>
          </div>

          <div className="p-3 rounded-xl bg-sky-50/50 border border-sky-100/90 space-y-1">
            <p className="font-bold text-slate-800 text-xs sm:text-sm">2. มาตรการความปลอดภัยและประกันภัย</p>
            <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
              คณะสำรวจ Eldoria จัดเตรียมการดูแลด้านความปลอดภัยและมีประกันอุบัติเหตุครอบคลุมตลอดระยะเวลาการปฏิบัติภารกิจ
            </p>
          </div>

          <div className="p-3 rounded-xl bg-sky-50/50 border border-sky-100/90 space-y-1">
            <p className="font-bold text-slate-800 text-xs sm:text-sm">3. การรักษาความลับและข้อมูลพิกัด</p>
            <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
              ข้อมูลทางโบราณคดี พิกัดการค้นพบ และภาพถ่ายจากโดรนถือเป็นความลับสูงสุดของคณะสำรวจ ห้ามเผยแพร่ก่อนได้รับอนุญาต
            </p>
          </div>

          <div className="p-3 rounded-xl bg-sky-50/50 border border-sky-100/90 space-y-1">
            <p className="font-bold text-slate-800 text-xs sm:text-sm">4. นโยบายคุ้มครองข้อมูลส่วนบุคคล</p>
            <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
              ข้อมูลส่วนตัวและเอกสารที่อัปโหลดจะถูกใช้เพื่อวัตถุประสงค์ในการคัดเลือกทีมสำรวจเท่านั้น
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-2 border-t border-sky-100/80 flex justify-end">
          <Button
            type="button"
            variant="primary"
            size="md"
            className="w-full sm:w-auto"
            icon={<Check className="h-4 w-4" />}
            onClick={onClose}
          >
            รับทราบและปิดหน้าต่าง
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
