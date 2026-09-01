import { ArrowDown, Zap } from 'lucide-react'
import { ExpeditionVisual } from '../../../components/layout/ExpeditionVisual'

type Props = {
  onScrollToForm: () => void
  onFillDemoAndScroll: () => void
}

export function HeroSection({ onScrollToForm, onFillDemoAndScroll }: Props) {
  return (
    <section className="pt-2 sm:py-4 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Typography-led Editorial Content (~ 7 cols / 58%) */}
        <div className="lg:col-span-7 text-left space-y-5">
          {/* Category Sub-badge */}
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-sky-800 uppercase bg-sky-50 border border-sky-200/80 px-3.5 py-1 rounded-full shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-sky-600 animate-pulse" />
            <span>Archaeological Expedition 2026</span>
          </div>

          {/* Large Editorial Headline */}
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              ค้นพบดินแดนโบราณ <br />
              <span className="text-slate-800">ที่สาบสูญ</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-700 to-blue-900 tracking-tight">
              The Expedition in Search of Eldoria
            </h2>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
            เปิดรับสมัครทีมนักวิจัย ช่างภาพ ผู้ควบคุมโดรน นักทำแผนที่ และแพทย์สนาม 
            เพื่อเข้าร่วมภารกิจสำรวจและบันทึกประวัติศาสตร์อารยธรรมโบราณเอลโดเรียใน 5 ทวีปทั่วโลก
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 py-3.5 border-y border-slate-200/80 max-w-lg">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-900 font-mono">5 ทวีป</p>
              <p className="text-[11px] font-semibold text-slate-500">ภูมิภาคเป้าหมาย</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-900 font-mono">5 บทบาท</p>
              <p className="text-[11px] font-semibold text-slate-500">ตำแหน่งภาคสนาม</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-sky-700 font-mono">$700+</p>
              <p className="text-[11px] font-semibold text-slate-500">USD / สัปดาห์</p>
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={onScrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 hover:from-sky-700 hover:to-blue-900 active:from-sky-800 active:to-blue-950 text-white font-semibold px-5 py-2.5 sm:py-3 rounded-xl shadow-xs hover:shadow-sm transition-all duration-150 cursor-pointer text-xs sm:text-sm border border-sky-600/80"
            >
              <span>กรอกใบสมัคร (Scroll to Form)</span>
              <ArrowDown className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={onFillDemoAndScroll}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-medium px-4 py-2.5 sm:py-3 rounded-xl shadow-2xs transition-all duration-150 cursor-pointer text-xs sm:text-sm"
            >
              <Zap className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
              <span>กรอกข้อมูลตัวอย่าง (Demo Fill)</span>
            </button>
          </div>
        </div>

        {/* Right Column: Visual Anchor (Pure Expedition Graphic Visual ~ 5 cols / 42%) */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <ExpeditionVisual />
        </div>
      </div>
    </section>
  )
}
