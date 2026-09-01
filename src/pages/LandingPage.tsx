import { HeroSection } from '../features/landing/components/HeroSection'
import { ExpeditionOverview } from '../features/landing/components/ExpeditionOverview'
import { LandingBackground } from '../features/landing/components/LandingBackground'

type Props = {
  onScrollToForm: () => void
  onFillDemoAndScroll: () => void
}

export function LandingPage({
  onScrollToForm,
  onFillDemoAndScroll,
}: Props) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Full-Bleed 100vw Animated Background (Constellations, Aurora Glow, Meteors, Radar Waves) */}
      <LandingBackground />

      {/* Centered Content Container with standard max-width */}
      <div className="relative z-10 page-container py-8 sm:py-14 space-y-16 sm:space-y-20 animate-fade-up">
        {/* 1. Hero Split-Screen Section (Left Content / Right Visual Anchor) */}
        <HeroSection
          onScrollToForm={onScrollToForm}
          onFillDemoAndScroll={onFillDemoAndScroll}
        />

        {/* 2. Expedition Overview Section (4 Stat Cards - QA-002) */}
        <ExpeditionOverview />
      </div>
    </div>
  )
}
