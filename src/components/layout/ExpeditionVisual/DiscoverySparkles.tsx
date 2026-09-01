export function DiscoverySparkles() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
      {/* Golden Discovery Stars / Ambient Leaves */}
      <div className="absolute top-[18%] right-[18%] h-2 w-2 rounded-full bg-amber-400 animate-ping opacity-75" />
      <div className="absolute top-[32%] left-[16%] h-1.5 w-1.5 rounded-full bg-cyan-400 animate-float-slow" />
      <div className="absolute bottom-[28%] right-[12%] h-2 w-2 rounded-full bg-amber-300 animate-pulse-glow" />
      <div className="absolute top-[48%] right-[24%] h-1 w-1 rounded-full bg-emerald-400 animate-float-reverse" />
    </div>
  )
}
