"use client"

import { BlurFade } from "./blur-fade"
import { useEffect, useRef, useState } from "react"

function CountUp({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const start = performance.now()
          function animate(now: number) {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // easeOut cubic
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}</span>
}

const stats = [
  {
    value: 3,
    unit: "hrs",
    label: "saved per B14 application",
  },
  {
    value: 4,
    unit: "hrs",
    label: "saved per article draft",
  },
  {
    value: 3,
    unit: "+",
    label: "firms working with Jam & Raph",
  },
]

export { CountUp, stats }

export function StatsBanner() {
  return (
    <section className="relative w-full bg-secondary-dark py-32" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
      {/* Noise grain overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
      <div className="container mx-auto px-4 relative">
        <BlurFade delay={0.1} inView>
          <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono text-center mb-8">By the Numbers</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl md:text-7xl font-serif font-normal text-white">
                    <CountUp target={stat.value} />
                  </span>
                  <span className="text-2xl md:text-3xl font-medium text-brand-primary">
                    {stat.unit}
                  </span>
                </div>
                <p className="mt-3 text-sm md:text-base text-stone-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
