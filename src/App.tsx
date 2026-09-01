import { useRegistrationForm } from './hooks/useRegistrationForm'
import { LandingPage, RegistrationPage } from './pages'
import { Navbar } from './components/layout/Navbar'
import { PageFooter } from './components/layout/PageFooter'
import { BackgroundBlobs } from './features/registration/BackgroundBlobs'

export default function App() {
  const formHook = useRegistrationForm()

  const scrollToForm = () => {
    const el = document.getElementById('registration-form')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleFillDemoAndScroll = () => {
    formHook.fillDemoData()
    scrollToForm()
  }

  return (
    <div className="relative min-h-screen bg-sky-50/40 text-slate-800 flex flex-col justify-between overflow-x-hidden">
      <BackgroundBlobs />

      {/* Top Minimal Navbar */}
      <Navbar onFillDemo={handleFillDemoAndScroll} />

      {/* Scroll-Driven Page Flow (Full-Bleed Hero ➔ Registration Form) */}
      <main className="flex-1 w-full flex flex-col space-y-12 sm:space-y-16 pb-12 sm:pb-16">
        {/* 1. Full-Bleed Animated Hero Landing Section (100vw Viewport) */}
        <section id="landing-hero" className="w-full no-print">
          <LandingPage
            onScrollToForm={scrollToForm}
            onFillDemoAndScroll={handleFillDemoAndScroll}
          />
        </section>

        {/* 2. Registration Form Section (Centered inside standard max-width container) */}
        <div className="page-container">
          <section id="registration-form" className="scroll-mt-20">
            <RegistrationPage formHook={formHook} />
          </section>
        </div>
      </main>

      {/* Footer */}
      <PageFooter />
    </div>
  )
}