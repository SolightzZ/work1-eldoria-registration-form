import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseAlpha: number
  alpha: number
  color: string
  twinkleSpeed: number
  pulseOffset: number
  isBeacon?: boolean
}

interface Meteor {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  alpha: number
  active: boolean
}

export function LandingBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let isVisible = true
    let width = container.clientWidth || window.innerWidth
    let height = container.clientHeight || 800
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    // Smooth cursor tracking with lerp
    const mouse = {
      targetX: -1000,
      targetY: -1000,
      currentX: -1000,
      currentY: -1000,
      radius: 150,
      isActive: false,
    }

    // Modern color palette: Sky Blue, Cyan, Indigo, Warm Amber
    const palette = [
      'rgba(2, 132, 199, ',   // Sky-600
      'rgba(14, 165, 233, ',  // Sky-500
      'rgba(6, 182, 212, ',   // Cyan-500
      'rgba(99, 102, 241, ',  // Indigo-500
      'rgba(245, 158, 11, ',  // Amber-500 (Gold)
    ]

    let particles: Particle[] = []
    let meteors: Meteor[] = []
    let lastMeteorTime = 0
    let radarPulseRadius = 0

    const initParticles = () => {
      particles = []
      const particleDensity = Math.min(Math.floor((width * height) / 14000), 75)
      const count = Math.max(35, particleDensity)

      for (let i = 0; i < count; i++) {
        const color = palette[Math.floor(Math.random() * palette.length)]
        const isBeacon = Math.random() < 0.2
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: isBeacon ? Math.random() * 1.5 + 2.2 : Math.random() * 1.2 + 1,
          baseAlpha: isBeacon ? 0.75 : Math.random() * 0.4 + 0.2,
          alpha: isBeacon ? 0.75 : Math.random() * 0.4 + 0.2,
          color,
          twinkleSpeed: Math.random() * 0.02 + 0.008,
          pulseOffset: Math.random() * Math.PI * 2,
          isBeacon,
        })
      }
    }

    const updateDimensions = () => {
      if (!container || !canvas) return
      const rect = container.getBoundingClientRect()
      width = Math.max(rect.width, 300)
      height = Math.max(rect.height, 400)
      dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
      initParticles()
    }

    updateDimensions()

    // ResizeObserver for reliable full-width dimension calculation
    const resizeObserver = new ResizeObserver(() => {
      updateDimensions()
    })
    resizeObserver.observe(container)

    const spawnMeteor = (time: number) => {
      if (time - lastMeteorTime > 4000 + Math.random() * 3500) {
        lastMeteorTime = time
        meteors.push({
          x: Math.random() * (width * 0.85),
          y: Math.random() * (height * 0.35),
          length: Math.random() * 85 + 60,
          speed: Math.random() * 5 + 6,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
          alpha: 0.9,
          active: true,
        })
      }
    }

    const drawSparkle = (cx: number, cy: number, size: number, alpha: number, color: string) => {
      ctx.save()
      ctx.fillStyle = `${color}${alpha})`
      ctx.beginPath()
      ctx.moveTo(cx, cy - size)
      ctx.quadraticCurveTo(cx, cy, cx + size, cy)
      ctx.quadraticCurveTo(cx, cy, cx, cy + size)
      ctx.quadraticCurveTo(cx, cy, cx - size, cy)
      ctx.quadraticCurveTo(cx, cy, cx, cy - size)
      ctx.closePath()
      ctx.fill()
      ctx.restore()
    }

    let time = 0

    const render = (currentTime: number) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      time = currentTime * 0.001
      ctx.clearRect(0, 0, width, height)

      // Smooth mouse lerp
      if (mouse.isActive) {
        mouse.currentX += (mouse.targetX - mouse.currentX) * 0.15
        mouse.currentY += (mouse.targetY - mouse.currentY) * 0.15

        // Soft ambient spotlight following cursor across full width
        const spotGrad = ctx.createRadialGradient(
          mouse.currentX,
          mouse.currentY,
          0,
          mouse.currentX,
          mouse.currentY,
          mouse.radius
        )
        spotGrad.addColorStop(0, 'rgba(14, 165, 233, 0.09)')
        spotGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.03)')
        spotGrad.addColorStop(1, 'rgba(56, 189, 248, 0)')

        ctx.fillStyle = spotGrad
        ctx.beginPath()
        ctx.arc(mouse.currentX, mouse.currentY, mouse.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // 1. Sonar Radar Pulse
      radarPulseRadius = (radarPulseRadius + 0.4) % 220
      const radarCenterX = width > 1024 ? width * 0.72 : width * 0.5
      const radarCenterY = width > 1024 ? height * 0.35 : height * 0.45
      const radarAlpha = Math.max(0, (1 - radarPulseRadius / 220) * 0.25)

      if (radarAlpha > 0) {
        ctx.beginPath()
        ctx.arc(radarCenterX, radarCenterY, radarPulseRadius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(14, 165, 233, ${radarAlpha})`
        ctx.lineWidth = 1.2
        ctx.setLineDash([4, 6])
        ctx.stroke()
        ctx.setLineDash([])
      }

      // 2. Meteors / Shooting Star Streaks
      spawnMeteor(currentTime)
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i]
        if (!m.active) continue

        const tailX = m.x - Math.cos(m.angle) * m.length
        const tailY = m.y - Math.sin(m.angle) * m.length

        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y)
        grad.addColorStop(0, 'rgba(14, 165, 233, 0)')
        grad.addColorStop(0.7, `rgba(56, 189, 248, ${m.alpha * 0.5})`)
        grad.addColorStop(1, `rgba(255, 255, 255, ${m.alpha})`)

        ctx.strokeStyle = grad
        ctx.lineWidth = 1.6
        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(m.x, m.y)
        ctx.stroke()

        ctx.fillStyle = `rgba(255, 255, 255, ${m.alpha})`
        ctx.beginPath()
        ctx.arc(m.x, m.y, 1.5, 0, Math.PI * 2)
        ctx.fill()

        m.x += Math.cos(m.angle) * m.speed
        m.y += Math.sin(m.angle) * m.speed
        m.alpha -= 0.009

        if (m.alpha <= 0 || m.x > width + 60 || m.y > height + 60) {
          meteors.splice(i, 1)
        }
      }

      // 3. Update & Draw Constellation Particles
      const maxDistance = 125

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy

        // Wrap around bounds
        if (p.x < -15) p.x = width + 15
        if (p.x > width + 15) p.x = -15
        if (p.y < -15) p.y = height + 15
        if (p.y > height + 15) p.y = -15

        // Twinkle effect
        const pulse = Math.sin(time * 2.2 + p.pulseOffset) * 0.18
        p.alpha = Math.max(0.12, Math.min(0.95, p.baseAlpha + pulse))

        // Mouse interaction
        if (mouse.isActive) {
          const dx = p.x - mouse.currentX
          const dy = p.y - mouse.currentY
          const dist = Math.hypot(dx, dy)

          if (dist < mouse.radius && dist > 0) {
            const force = (1 - dist / mouse.radius) * 0.9
            p.x += (dx / dist) * force
            p.y += (dy / dist) * force

            // Draw line to cursor
            const mouseLineAlpha = (1 - dist / mouse.radius) * 0.38
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.currentX, mouse.currentY)
            ctx.strokeStyle = `rgba(14, 165, 233, ${mouseLineAlpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }

        // Draw connections to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.hypot(dx, dy)

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.25 * Math.min(p.alpha, p2.alpha)
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`
            ctx.lineWidth = 0.65
            ctx.stroke()
          }
        }

        // Draw node
        if (p.isBeacon) {
          drawSparkle(p.x, p.y, p.radius * 1.6, p.alpha * 0.8, p.color)
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
          ctx.fillStyle = `${p.color}${p.alpha})`
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return
      const rect = container.getBoundingClientRect()
      mouse.targetX = e.clientX - rect.left
      mouse.targetY = e.clientY - rect.top
      if (!mouse.isActive) {
        mouse.currentX = mouse.targetX
        mouse.currentY = mouse.targetY
      }
      mouse.isActive = true
    }

    const handleMouseLeave = () => {
      mouse.isActive = false
      mouse.targetX = -1000
      mouse.targetY = -1000
    }

    container.addEventListener('mousemove', handleMouseMove, { passive: true })
    container.addEventListener('mouseleave', handleMouseLeave, { passive: true })

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0.05 }
    )
    observer.observe(container)

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none z-0 no-print"
      aria-hidden="true"
    >
      {/* 1. Full-Bleed Ambient Glowing Aurora Light Orbs */}
      <div className="absolute -top-24 -left-20 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-sky-400/25 via-sky-300/15 to-transparent blur-3xl animate-float-slow" />
      <div className="absolute top-10 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-blue-600/20 via-indigo-400/15 to-transparent blur-3xl animate-float-reverse" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-amber-300/20 via-sky-200/15 to-transparent blur-3xl animate-pulse-glow" />

      {/* 2. Full-Bleed Topographic & Expedition Radar Coordinate Grid Pattern */}
      <div
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0284c7 1px, transparent 1px),
            linear-gradient(to bottom, #0284c7 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 35%, black 25%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 35%, black 25%, transparent 90%)',
        }}
      />

      {/* 3. Subtle Rotating Orbital Rings & Reticle */}
      <div className="absolute top-1/3 right-[10%] -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-sky-400/20 pointer-events-none animate-spin-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-sky-500/50 shadow-sm" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-sky-500/50 shadow-sm" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-500/50 shadow-sm" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-500/50 shadow-sm" />
      </div>

      {/* 4. Canvas Particle Network (100% Full Width Span) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* 5. Smooth Bottom Blend to Slate-50 */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent via-slate-50/40 to-slate-50 pointer-events-none" />
    </div>
  )
}
