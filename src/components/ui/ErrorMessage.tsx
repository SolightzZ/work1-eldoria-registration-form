import { AlertCircle } from 'lucide-react'

type Props = { message: string }

export function ErrorMessage({ message }: Props) {
  return (
    <p className="mt-1.5 text-xs font-medium text-rose-600 inline-flex items-center gap-1.5 animate-fade-up">
      <AlertCircle className="h-3.5 w-3.5 shrink-0 text-rose-500" />
      <span>{message}</span>
    </p>
  )
}