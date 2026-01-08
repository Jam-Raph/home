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
    <section className="w-full bg-stone-900 py-16 -mx-4 px-4" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
      <div className="container mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl md:text-6xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-2xl md:text-3xl font-medium text-stone-400">
                    {stat.unit}
                  </span>
                </div>
                <p className="mt-2 text-sm md:text-base text-stone-400">
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
