export function BackgroundBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none -z-10 no-print" aria-hidden="true">
      {/* Light Blue Subtle Dot Matrix Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(#0284c7 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      {/* Light Blue Soft Ambient Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/80 via-sky-50/40 to-blue-50/50" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-sky-200/25 blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] rounded-full bg-blue-200/20 blur-3xl animate-float-reverse" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-200/20 blur-3xl animate-pulse-glow" />
    </div>
  )
}