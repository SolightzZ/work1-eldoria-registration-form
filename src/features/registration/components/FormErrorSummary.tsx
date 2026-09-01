import { AlertCircle } from 'lucide-react'
import type { Errors } from '../../../types/form'

type Props = {
  errors: Errors
  onScrollToField: (name: string) => void
}

export function FormErrorSummary({ errors, onScrollToField }: Props) {
  const errorKeys = Object.keys(errors)
  const errorCount = errorKeys.length

  if (errorCount === 0) return null

  return (
    <div className="mx-6 sm:mx-11 md:mx-14 mt-8 p-6 sm:p-7 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 animate-fade-up">
      <div className="flex items-center gap-2 font-bold text-sm mb-1.5">
        <AlertCircle className="h-4 w-4 text-rose-600 shrink-0" />
        <span>
          พบข้อผิดพลาด {errorCount} รายการ กรุณาตรวจสอบข้อมูลด้านล่าง:
        </span>
      </div>
      <ul className="list-disc list-inside text-xs space-y-1 text-rose-700 ml-1">
        {errorKeys.map((key) => (
          <li key={key}>
            <button
              type="button"
              onClick={() => onScrollToField(key)}
              className="hover:underline text-rose-800 font-semibold cursor-pointer text-left"
            >
              {errors[key as keyof Errors]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
