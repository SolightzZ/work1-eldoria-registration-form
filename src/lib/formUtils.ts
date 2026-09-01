import type { FormState, Errors } from '../types/form'

export function inputClassFor(
  name: keyof FormState,
  form: FormState,
  errors: Errors,
  extra = '',
) {
  const hasError = !!errors[name]
  const value = (form as Record<string, unknown>)[name]
  const hasValue =
    typeof value === 'boolean' ? value : !!String(value ?? '').trim()

  return [
    'w-full rounded-xl bg-white px-3.5 pt-5 pb-2 text-sm text-slate-800 font-medium placeholder:text-slate-400 placeholder:text-xs',
    'outline-none transition-colors shadow-2xs',
    'border',
    hasError
      ? 'border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
      : hasValue
        ? 'border-sky-400 bg-sky-50/20 focus:border-sky-600 focus:ring-1 focus:ring-sky-600'
        : 'border-slate-300 hover:border-slate-400 focus:border-sky-600 focus:ring-1 focus:ring-sky-600',
    extra,
  ].join(' ')
}
