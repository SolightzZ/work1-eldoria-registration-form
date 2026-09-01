import { Globe2, Users, DollarSign, Clock, Sparkles } from 'lucide-react'
import { OVERVIEW_CONTENT } from '../../../lib/content'

const ICONS = [
  <Globe2 className="h-4.5 w-4.5" key="globe" />,
  <Users className="h-4.5 w-4.5" key="users" />,
  <DollarSign className="h-4.5 w-4.5 text-sky-700" key="dollar" />,
  <Clock className="h-4.5 w-4.5" key="clock" />,
]

export function ExpeditionOverview() {
  const { sectionTitle, sectionSubtitle, badge, cards } = OVERVIEW_CONTENT

  return (
    <section className="w-full pt-6 sm:pt-8">
      <div className="flex items-center justify-between gap-3 mb-6 pb-3.5 border-b border-slate-200/80 text-left">
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            {sectionTitle}
          </h3>
          <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
            {sectionSubtitle}
          </p>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full">
          <Sparkles className="h-3.5 w-3.5 text-sky-600" />
          {badge}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 text-left">
        {cards.map((card, idx) => (
          <div
            key={card.label}
            className="bg-white/95 border border-sky-100 hover:border-sky-300 rounded-2xl p-6 sm:p-7 shadow-2xs hover:shadow-xs transition-all"
          >
            <div className="h-9 w-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3.5">
              {ICONS[idx % ICONS.length]}
            </div>
            <p className="text-xs font-bold text-slate-500">{card.label}</p>
            <p className="text-lg font-black text-slate-900 mt-1">{card.value}</p>
            <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
