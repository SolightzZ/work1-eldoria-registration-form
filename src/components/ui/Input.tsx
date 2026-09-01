import type { ChangeHandler } from '../../types/form'

type Props = {
  name: string
  value: string | number
  onChange: ChangeHandler | ((e: React.ChangeEvent<HTMLInputElement>) => void)
  placeholder?: string
  type?: string
  maxLength?: number
  min?: number | string
  max?: number | string
  step?: number
  inputMode?: 'text' | 'numeric' | 'tel' | 'email' | 'decimal'
  className?: string
  id?: string
  autoComplete?: string
}

export function Input({
  name,
  value,
  onChange,
  placeholder = ' ',
  type = 'text',
  maxLength,
  min,
  max,
  step,
  inputMode,
  className = '',
  id,
  autoComplete,
}: Props) {
  return (
    <input
      id={id ?? name}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      min={min}
      max={max}
      step={step}
      inputMode={inputMode}
      autoComplete={autoComplete}
      className={className}
    />
  )
}