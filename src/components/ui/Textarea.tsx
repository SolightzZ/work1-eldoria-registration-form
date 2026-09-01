import type { ChangeHandler } from '../../types/form'

type Props = {
  name: string
  value: string
  onChange: ChangeHandler
  rows?: number
  placeholder?: string
  className?: string
}

export function Textarea({
  name,
  value,
  onChange,
  rows = 3,
  placeholder = ' ',
  className = '',
}: Props) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      placeholder={placeholder}
      className={`resize-none ${className}`}
    />
  )
}