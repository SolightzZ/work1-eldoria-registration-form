import { ErrorMessage } from './ErrorMessage'

type FieldProps = {
  label: string
  required?: boolean
  error?: string
  icon?: React.ReactNode
  helperText?: React.ReactNode
  badge?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function FloatingField({
  label,
  required,
  error,
  icon,
  helperText,
  badge,
  children,
  className = '',
}: FieldProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative group">
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-500 transition-colors pointer-events-none z-10">
            {icon}
          </div>
        )}
        {children}
        <span
          className={[
            'absolute top-1.5 text-[11px] font-semibold transition-colors pointer-events-none select-none flex items-center gap-1',
            icon ? 'left-10' : 'left-3.5',
            error
              ? 'text-rose-500'
              : 'text-slate-500 group-focus-within:text-sky-600',
          ].join(' ')}
        >
          {label}
          {required && <span className="text-rose-500 font-bold">*</span>}
          {badge && <span className="ml-1.5">{badge}</span>}
        </span>
      </div>

      <div className="flex items-center justify-between gap-2">
        {error ? (
          <ErrorMessage message={error} />
        ) : helperText ? (
          <p className="mt-1 text-[11px] text-slate-400 pl-1">{helperText}</p>
        ) : null}
      </div>
    </div>
  )
}