import {
  Camera,
  Radio,
  Map,
  HeartPulse,
  Microscope,
  Compass,
  TreePine,
  Sun,
  Mountain,
  Waves,
  Check,
} from 'lucide-react'
import type { FormState, Errors, ChangeHandler } from '../../../types/form'
import { ROLE_OPTIONS, REGION_OPTIONS } from '../../../lib/constants'
import { RadioGroup } from '../../../components/ui/RadioGroup'
import { ErrorMessage } from '../../../components/ui/ErrorMessage'
import { SectionHeader } from '../components/SectionHeader'

const ROLE_ICONS: Record<string, React.ReactNode> = {
  Researcher: <Microscope className="h-5 w-5" />,
  Photographer: <Camera className="h-5 w-5" />,
  'Drone Operator': <Radio className="h-5 w-5" />,
  Cartographer: <Map className="h-5 w-5" />,
  Medic: <HeartPulse className="h-5 w-5" />,
}

const REGION_ICONS: Record<string, React.ReactNode> = {
  'South America': <TreePine className="h-5 w-5" />,
  Africa: <Sun className="h-5 w-5" />,
  Asia: <Mountain className="h-5 w-5" />,
  Europe: <Compass className="h-5 w-5" />,
  Australia: <Waves className="h-5 w-5" />,
}

type Props = {
  form: FormState
  errors: Errors
  onChange: ChangeHandler
  onRoleToggle: (role: string) => void
  isComplete: boolean
}

export function ExpeditionPreferencesSection({
  form,
  errors,
  onChange,
  onRoleToggle,
  isComplete,
}: Props) {
  const regionOptionsWithIcons = REGION_OPTIONS.map((opt) => ({
    value: opt.value,
    label: opt.label,
    description: opt.descTh,
    icon: REGION_ICONS[opt.value],
  }))

  return (
    <div className="space-y-4 pt-2">
      <SectionHeader
        step="02"
        title="Expedition Preferences (ความต้องการในการสำรวจ)"
        isComplete={isComplete}
      />

      {/* Preferred Role in the Expedition (Multi-select) */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-xs md:text-sm font-bold text-slate-800">
            Preferred Role in the Expedition <span className="text-rose-500 font-bold">*</span>
          </label>
          <span className="text-[11px] text-slate-500 font-medium">
            เลือกได้มากกว่า 1 ตำแหน่ง ({form.preferredRole.length} เลือกแล้ว)
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {ROLE_OPTIONS.map((opt) => {
            const active = form.preferredRole.includes(opt.value)
            return (
              <label
                key={opt.value}
                className={[
                  'relative flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all select-none text-left',
                  active
                    ? 'border-sky-600 bg-sky-50/90 text-sky-950 font-semibold shadow-2xs'
                    : 'border-slate-300 bg-white hover:border-slate-400 text-slate-700',
                ].join(' ')}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={[
                      'flex h-9 w-9 items-center justify-center rounded-lg transition-colors',
                      active
                        ? 'bg-sky-600 text-white'
                        : 'bg-slate-100 text-slate-600',
                    ].join(' ')}
                  >
                    {ROLE_ICONS[opt.value]}
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold">{opt.label}</p>
                    <p className="text-[11px] text-slate-500">{opt.descTh}</p>
                  </div>
                </div>

                <div
                  className={[
                    'h-5 w-5 rounded-md border flex items-center justify-center transition-colors',
                    active
                      ? 'border-sky-600 bg-sky-600 text-white'
                      : 'border-slate-300 bg-white',
                  ].join(' ')}
                >
                  {active && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                </div>

                <input
                  type="checkbox"
                  name="preferredRole"
                  value={opt.value}
                  checked={active}
                  onChange={() => onRoleToggle(opt.value)}
                  className="sr-only"
                />
              </label>
            )
          })}
        </div>
        {errors.preferredRole && <ErrorMessage message={errors.preferredRole} />}
      </div>

      {/* Preferred Expedition Region (Single select) */}
      <div className="pt-2">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-xs md:text-sm font-bold text-slate-800">
            Preferred Expedition Region <span className="text-rose-500 font-bold">*</span>
          </label>
          <span className="text-[11px] text-slate-500 font-medium">เลือก 1 ภูมิภาค</span>
        </div>
        <RadioGroup
          name="preferredRegion"
          value={form.preferredRegion}
          onChange={onChange}
          options={regionOptionsWithIcons}
          cols={5}
          variant="card"
        />
        {errors.preferredRegion && <ErrorMessage message={errors.preferredRegion} />}
      </div>
    </div>
  )
}
