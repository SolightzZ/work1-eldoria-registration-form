import { useState, useEffect } from 'react'
import { MapPin, Sparkles } from 'lucide-react'
import { TELEMETRY_CONTENT } from '../../../lib/content'

export function ExpeditionHUD() {
  const { statusSequence, discoveryBadge, coordinatesLocked, coordinatesScanning } =
    TELEMETRY_CONTENT

  const [statusIndex, setStatusIndex] = useState(0)
  const [fadeState, setFadeState] = useState(true)
  const [coordsLocked, setCoordsLocked] = useState(false)

  // 1. Discovery Sequence Cycle (~3.2s interval)
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false)
      setTimeout(() => {
        setStatusIndex((prev) => (prev + 1) % statusSequence.length)
        setFadeState(true)
      }, 250)
    }, 3200)

    return () => clearInterval(interval)
  }, [statusSequence.length])

  // 2. Geographic Coordinates Lock Effect (Reveals within ~800ms once on mount)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCoordsLocked(true)
    }, 850)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      {/* 1. Top-Right HUD Badge: Active Status Discovery Cycle */}
      <div className="absolute top-2 right-2 sm:right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-sky-200/90 shadow-2xs text-[11px] font-bold text-slate-800 flex items-center gap-1.5 min-w-[150px] justify-start">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
        <span
          className={`text-sky-700 font-mono text-[10px] font-bold transition-opacity duration-250 ${
            fadeState ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {statusSequence[statusIndex]}
        </span>
      </div>

      {/* 2. Top-Center/Left Discovery Badge: Site Detected (Pop + Subtle Glow on mount) */}
      <div className="discovery-pop-glow absolute top-2 left-2 sm:left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-300 shadow-2xs text-[11px] font-bold text-slate-900 flex items-center gap-1.5">
        <Sparkles className="h-3.5 w-3.5 text-amber-500 fill-amber-500 animate-pulse" />
        <span className="text-amber-700 font-extrabold text-[10px] font-mono tracking-wide">
          {discoveryBadge}
        </span>
      </div>

      {/* 3. Bottom-Left Geographic Coordinates Badge (Number Reveal effect) */}
      <div className="absolute bottom-2 left-2 sm:left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/90 shadow-2xs text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
        <MapPin className="h-3.5 w-3.5 text-sky-600 shrink-0" />
        <span className="font-mono text-[10px] text-slate-700 tabular-nums">
          {coordsLocked ? coordinatesLocked : coordinatesScanning}
        </span>
      </div>
    </div>
  )
}
