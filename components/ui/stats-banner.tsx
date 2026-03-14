"use client"

import { BlurFade } from "./blur-fade"

const stats = [
  {
    value: "8",
    unit: "hrs",
    label: "saved per B14 application",
  },
  {
    value: "4",
    unit: "hrs",
    label: "saved per article draft",
  },
  {
    value: "3",
    unit: "+",
    label: "firms working with Jam & Raph",
  },
]

export function StatsBanner() {
  return (
    <section className="w-full bg-surface-warm py-20" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
      <div className="container mx-auto px-4">
        <BlurFade delay={0.1} inView>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl md:text-6xl font-bold text-stone-900">
                    {stat.value}
                  </span>
                  <span className="text-2xl md:text-3xl font-medium text-brand-primary">
                    {stat.unit}
                  </span>
                </div>
                <p className="mt-2 text-sm md:text-base text-stone-500">
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
