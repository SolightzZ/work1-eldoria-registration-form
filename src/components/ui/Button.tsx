import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  iconRight?: ReactNode
  fullWidth?: boolean
}

const BASE_CLASS =
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]'

const SIZE_CLASS: Record<Size, string> = {
  sm: 'rounded-lg py-1.5 px-3 text-xs',
  md: 'rounded-xl py-2.5 px-4 text-sm',
  lg: 'rounded-xl py-3 px-6 text-sm sm:text-base font-bold shadow-2xs',
}

const VARIANT_CLASS: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 hover:from-sky-700 hover:to-blue-900 active:from-sky-800 active:to-blue-950 text-white border border-sky-600/80 shadow-xs hover:shadow-sm',
  secondary:
    'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-2xs',
  outline:
    'border border-sky-300 bg-white text-sky-700 hover:bg-sky-50 shadow-2xs',
  ghost:
    'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900',
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  fullWidth,
  className = '',
  children,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={[
        BASE_CLASS,
        SIZE_CLASS[size],
        VARIANT_CLASS[variant],
        fullWidth ? 'w-full' : '',
        className,
      ].join(' ')}
    >
      {icon}
      {children}
      {iconRight}
    </button>
  )
}