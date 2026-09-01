import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AlertTriangle, RotateCcw } from 'lucide-react'
import { Button } from '../../../components/ui/Button'

type Props = {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export function ClearConfirmModal({ isOpen, onClose, onConfirm }: Props) {
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-up select-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="clear-modal-title"
    >
      <div
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200 text-left space-y-5 animate-pop"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center shrink-0">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div>
            <h3 id="clear-modal-title" className="text-base font-bold text-slate-900 leading-snug">
              ยืนยันการล้างข้อมูลแบบฟอร์ม?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
              ข้อมูลทั้งหมดที่คุณกรอกไว้ในแบบฟอร์มจะถูกรีเซ็ตกลับเป็นค่าเริ่มต้น
            </p>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-end gap-2.5 border-t border-slate-100">
          <Button
            type="button"
            variant="secondary"
            size="md"
            onClick={onClose}
          >
            ยกเลิก (Cancel)
          </Button>
          <button
            type="button"
            onClick={onConfirm}
            className="inline-flex items-center justify-center gap-1.5 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-semibold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" />
            <span>ยืนยันล้างข้อมูล (Clear All)</span>
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
