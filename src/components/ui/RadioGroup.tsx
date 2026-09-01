import type { ReactNode } from 'react'
import type { ChangeHandler } from '../../types/form'
import { Check } from 'lucide-react'

type Option = {
  value: string
  label: string
  description?: string
  icon?: ReactNode
  badge?: string
}

type Props = {
  name: string
  value: string
  onChange: ChangeHandler
  options: readonly Option[]
  cols?: 2 | 3 | 4 | 5 | 6
  variant?: 'simple' | 'card'
}

const GRID_CLASSES: Record<number, string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5',
  6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
}

export function RadioGroup({
  name,
  value,
  onChange,
  options,
  cols = 3,
  variant = 'simple',
}: Props) {
  const gridClass = GRID_CLASSES[cols] ?? 'grid-cols-2 sm:grid-cols-3'
  const isOddCount = options.length % 2 === 1

  return (
    <div className={`grid ${gridClass} gap-2.5`}>
      {options.map((opt) => {
        const active = value === opt.value

        if (variant === 'card' || opt.description || opt.icon) {
          return (
            <label
              key={opt.value}
              className={[
                'relative flex flex-col justify-between p-3.5 rounded-xl border transition-colors cursor-pointer select-none text-left',
                isOddCount ? 'last:col-span-2 sm:last:col-span-1' : '',
                active
                  ? 'border-sky-600 bg-sky-50/80 text-sky-950 font-semibold'
                  : 'border-slate-300 bg-white hover:border-slate-400 text-slate-700',
              ].join(' ')}
            >
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={active}
                onChange={onChange}
                className="sr-only"
              />
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div
                  className={[
                    'flex h-8 w-8 items-center justify-center rounded-lg transition-colors',
                    active
                      ? 'bg-sky-600 text-white'
                      : 'bg-slate-100 text-slate-600',
                  ].join(' ')}
                >
                  {opt.icon}
                </div>
                <div
                  className={[
                    'h-4 w-4 rounded-full border flex items-center justify-center transition-colors',
                    active
                      ? 'border-sky-600 bg-sky-600 text-white'
                      : 'border-slate-300 bg-white',
                  ].join(' ')}
                >
                  {active && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                </div>
              </div>
              <div>
                <p className="text-xs md:text-sm font-semibold">{opt.label}</p>
                {opt.description && (
                  <p className="mt-0.5 text-[11px] text-slate-500 leading-tight">
                    {opt.description}
                  </p>
                )}
              </div>
            </label>
          )
        }

        return (
          <label
            key={opt.value}
            className={[
              'flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs md:text-sm cursor-pointer transition-colors select-none font-medium',
              isOddCount ? 'last:col-span-2 sm:last:col-span-1' : '',
              active
                ? 'border-sky-600 bg-sky-50 text-sky-900 font-semibold'
                : 'border-slate-300 bg-white text-slate-600 hover:border-slate-400',
            ].join(' ')}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={active}
              onChange={onChange}
              className="sr-only"
            />
            <span
              className={[
                'h-2 w-2 rounded-full transition-colors',
                active ? 'bg-sky-600' : 'bg-slate-300',
              ].join(' ')}
            />
            {opt.label}
          </label>
        )
      })}
    </div>
  )
}