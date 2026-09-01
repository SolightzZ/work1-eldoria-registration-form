import { MapPin, Sparkles } from 'lucide-react'

export function ExpeditionHUD() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      {/* 1. Top-Right HUD Badge: Active Drone LiDAR */}
      <div className="absolute top-2 right-2 sm:right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-sky-200/90 shadow-2xs text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-sky-700 font-mono text-[10px] font-bold">LiDAR Active Scanning</span>
      </div>

      {/* 2. Top-Center/Left Discovery Badge: Site Detected */}
      <div className="absolute top-2 left-2 sm:left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-300 shadow-2xs text-[11px] font-bold text-slate-900 flex items-center gap-1.5">
        <Sparkles className="h-3.5 w-3.5 text-amber-500 fill-amber-500 animate-pulse" />
        <span className="text-amber-700 font-extrabold text-[10px] font-mono tracking-wide">
          ANCIENT SITE DETECTED
        </span>
      </div>

      {/* 3. Bottom-Left Geographic Coordinates Badge */}
      <div className="absolute bottom-2 left-2 sm:left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/90 shadow-2xs text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
        <MapPin className="h-3.5 w-3.5 text-sky-600 shrink-0" />
        <span className="font-mono text-[10px] text-slate-700">LAT -13.16° / LONG -72.54°</span>
      </div>
    </div>
  )
}
