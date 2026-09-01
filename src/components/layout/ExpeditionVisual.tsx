import { CuteDioramaScene } from './ExpeditionVisual/CuteDioramaScene'
import { DiscoverySparkles } from './ExpeditionVisual/DiscoverySparkles'
import { ExpeditionHUD } from './ExpeditionVisual/ExpeditionHUD'

export function ExpeditionVisual() {
  return (
    <div className="relative w-full max-w-[580px] aspect-[4/3.4] sm:aspect-[4/3.3] mx-auto flex items-center justify-center select-none">
      {/* 1. Atmospheric Light Blue Radial Glow behind Diorama */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[450px] sm:h-[450px] rounded-full bg-gradient-to-tr from-sky-300/30 via-cyan-200/20 to-blue-300/20 blur-3xl -z-10" />

      {/* 2. Cute Expedition 3D Diorama Scene (Explorer, Mascot, Ruins, Drone) */}
      <CuteDioramaScene />

      {/* 3. Golden Discovery Sparkles & Ambient Particles */}
      <DiscoverySparkles />

      {/* 4. Sleek Rounded Glass Telemetry Badges */}
      <ExpeditionHUD />
    </div>
  )
}