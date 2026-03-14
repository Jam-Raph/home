"use client"

import { BlurFade } from "./blur-fade"
import { smoothScroll } from "@/lib/utils"

export function CTABanner() {
  return (
    <section className="relative w-full bg-surface-warm py-24" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
      <div className="container mx-auto px-4 relative">
        <BlurFade delay={0.1} inView>
          <div className="flex flex-col items-center text-center gap-6">
            <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium font-mono">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Ready to eliminate the busywork?
            </h2>
            <p className="text-stone-600 text-base md:text-lg max-w-xl">
              Join leading law firms using Pillar to transform their legal workflows
            </p>
            <button
              onClick={() => smoothScroll("contact")}
              className="bg-brand-primary hover:opacity-85 text-white cursor-pointer px-8 py-3 rounded-full text-base font-medium transition-opacity"
            >
              Book a Demo
            </button>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
