import { useState, useEffect } from 'react'
import { ArrowDown, Zap } from 'lucide-react'
import { ExpeditionVisual } from '../../../components/layout/ExpeditionVisual'
import { HERO_CONTENT } from '../../../lib/content'

type Props = {
  onScrollToForm: () => void
  onFillDemoAndScroll: () => void
}

function StatCountUp({
  target,
  suffix = '',
  prefix = '',
  duration = 1200,
}: {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTimestamp: number | null = null
    let animationFrameId: number

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      // Smooth easeOutExpo curve
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(easeProgress * target))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }

    animationFrameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrameId)
  }, [target, duration])

  return (
    <span className="font-mono inline-block tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export function HeroSection({ onScrollToForm, onFillDemoAndScroll }: Props) {
  const { badge, titleLine1, titleLine2, subtitle, description, metrics, cta } = HERO_CONTENT

  return (
    <section className="pt-2 sm:py-4 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Typography-led Editorial Content (~ 7 cols / 58%) */}
        <div className="lg:col-span-7 text-left space-y-5">
          {/* 1. Category Sub-badge (Badge with gentle dot pulse) */}
          <div className="hero-stagger-1 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-sky-800 uppercase bg-sky-50 border border-sky-200/80 px-3.5 py-1.5 rounded-full">
            <span className="h-2 w-2 rounded-full bg-sky-600 badge-dot-pulse" />
            <span>{badge}</span>
          </div>

          {/* 2. Large Editorial Headline (Line 1 -> Line 2 -> Subtitle Stagger) */}
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              <span className="hero-stagger-1 block">{titleLine1}</span>
              <span className="hero-stagger-2 block text-slate-800">{titleLine2}</span>
            </h1>
            <h2 className="hero-stagger-3 subtitle-shimmer-once text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
              {subtitle}
            </h2>
          </div>

          {/* 3. Description (400ms delay) */}
          <p className="hero-stagger-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
            {description}
          </p>

          {/* 4. Quick Metrics (520ms delay + Single-play Count-up) */}
          <div className="hero-stagger-5 grid grid-cols-3 gap-3 py-3.5 border-y border-slate-200/80 max-w-lg">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-900 font-mono">
                <StatCountUp target={metrics.continents.target} suffix={metrics.continents.suffix} />
              </p>
              <p className="text-[11px] font-semibold text-slate-500">{metrics.continents.sublabel}</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-900 font-mono">
                <StatCountUp target={metrics.roles.target} suffix={metrics.roles.suffix} />
              </p>
              <p className="text-[11px] font-semibold text-slate-500">{metrics.roles.sublabel}</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-sky-700 font-mono">
                <StatCountUp
                  target={metrics.salary.target}
                  prefix={metrics.salary.prefix}
                  suffix={metrics.salary.suffix}
                />
              </p>
              <p className="text-[11px] font-semibold text-slate-500">{metrics.salary.sublabel}</p>
            </div>
          </div>

          {/* 5. Action CTA Buttons (650ms delay) */}
          <div className="hero-stagger-6 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Primary Button */}
            <button
              type="button"
              onClick={onScrollToForm}
              className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold px-5 py-3 rounded-xl border border-sky-600 shadow-2xs hover:shadow-xs transition-colors duration-150 cursor-pointer text-xs sm:text-sm"
            >
              <span>{cta.submit}</span>
              <ArrowDown className="h-4 w-4" />
            </button>

            {/* Secondary Button */}
            <button
              type="button"
              onClick={onFillDemoAndScroll}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-300 hover:border-slate-400 font-semibold px-5 py-3 rounded-xl shadow-2xs hover:shadow-xs transition-colors duration-150 cursor-pointer text-xs sm:text-sm"
            >
              <Zap className="h-4 w-4 text-amber-500 fill-amber-500" />
              <span>{cta.demoFill}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Visual Anchor (Cute 3D Diorama ~ 5 cols / 42%) */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <ExpeditionVisual />
        </div>
      </div>
    </section>
  )
}
