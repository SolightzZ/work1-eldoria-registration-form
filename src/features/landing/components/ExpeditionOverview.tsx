import { Globe2, Users, DollarSign, Clock, Sparkles } from 'lucide-react'

export function ExpeditionOverview() {
  return (
    <section className="w-full pt-6 sm:pt-8">
      <div className="flex items-center justify-between gap-3 mb-6 pb-3.5 border-b border-slate-200/80 text-left">
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Expedition Overview
          </h3>
          <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
            สรุปภาพรวมและข้อมูลสำคัญของภารกิจสำรวจ
          </p>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full">
          <Sparkles className="h-3.5 w-3.5 text-sky-600" />
          Field Recruitment 2026
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 text-left">
        {/* Card 1 */}
        <div className="bg-white/95 border border-sky-100 hover:border-sky-300 rounded-2xl p-6 sm:p-7 shadow-2xs hover:shadow-xs transition-all">
          <div className="h-9 w-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3.5">
            <Globe2 className="h-4.5 w-4.5" />
          </div>
          <p className="text-xs font-bold text-slate-500">Expedition Regions</p>
          <p className="text-lg font-black text-slate-900 mt-1">5 Continents</p>
          <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">อเมริกาใต้, แอฟริกา, เอเชีย, ยุโรป, ออสเตรเลีย</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/95 border border-sky-100 hover:border-sky-300 rounded-2xl p-6 sm:p-7 shadow-2xs hover:shadow-xs transition-all">
          <div className="h-9 w-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3.5">
            <Users className="h-4.5 w-4.5" />
          </div>
          <p className="text-xs font-bold text-slate-500">Available Roles</p>
          <p className="text-lg font-black text-slate-900 mt-1">5 Positions</p>
          <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">นักวิจัย, ช่างภาพ, โดรน, แผนที่, แพทย์</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/95 border border-sky-100 hover:border-sky-300 rounded-2xl p-6 sm:p-7 shadow-2xs hover:shadow-xs transition-all">
          <div className="h-9 w-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3.5">
            <DollarSign className="h-4.5 w-4.5 text-sky-700" />
          </div>
          <p className="text-xs font-bold text-slate-500">Compensation</p>
          <p className="text-lg font-black text-sky-700 mt-1">$700–$2,000</p>
          <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">อัตราค่าตอบแทนต่อสัปดาห์ (USD)</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white/95 border border-sky-100 hover:border-sky-300 rounded-2xl p-6 sm:p-7 shadow-2xs hover:shadow-xs transition-all">
          <div className="h-9 w-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3.5">
            <Clock className="h-4.5 w-4.5" />
          </div>
          <p className="text-xs font-bold text-slate-500">Estimated Form Time</p>
          <p className="text-lg font-black text-slate-900 mt-1">3–5 Minutes</p>
          <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">ฟอร์ม 13 ฟิลด์ กรอกง่ายและรวดเร็ว</p>
        </div>
      </div>
    </section>
  )
}
