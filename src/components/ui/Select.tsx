import type { ChangeHandler } from '../../types/form'

type Option = { value: string; label: string }

type Props = {
  name: string
  value: string
  onChange: ChangeHandler
  options: readonly Option[]
  placeholder?: string
  className?: string
}

const CHEVRON_SVG =
  "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")"

export function Select({
  name,
  value,
  onChange,
  options,
  placeholder = '-- เลือก --',
  className = '',
}: Props) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`cursor-pointer appearance-none pr-10 ${className}`}
      style={{
        backgroundImage: CHEVRON_SVG,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 0.75rem center',
        backgroundSize: '1rem',
      }}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}