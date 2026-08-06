"use client"

import { BlurFade } from "./blur-fade"
import { smoothScroll } from "@/lib/utils"
import { trackCTAClick } from "@/lib/analytics"
import { AnimatedGridPattern } from "./animated-grid-pattern"

export function CTABanner() {
  return (
    <section className="relative w-full bg-secondary-dark py-32 mt-24 overflow-hidden" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
      {/* Noise grain overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
      <AnimatedGridPattern className="opacity-[0.05] text-brand-primary/30" numSquares={30} maxOpacity={0.1} />
      <div className="container mx-auto px-4 relative">
        <BlurFade delay={0.1} inView>
          <div className="flex flex-col items-center text-center gap-6">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono">Get Started</p>
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-white tracking-[0.05em]">
              Leave with a system that runs.
            </h2>
            <p className="text-stone-400 text-base md:text-lg max-w-xl leading-relaxed">
              Book a fluency workshop for your firm, or bring us one workflow that hurts.
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <button
                className="bg-white text-stone-900 hover:bg-white/90 font-medium px-8 py-3 rounded-full text-base transition-colors duration-300 cursor-pointer"
                onClick={() => { trackCTAClick("cta_banner", "Book a workshop"); smoothScroll("contact") }}
              >
                Book a workshop
              </button>
              <button
                onClick={() => { trackCTAClick("cta_banner_features", "See what's inside"); smoothScroll("workshop") }}
                className="border border-white/20 text-white hover:bg-white/10 cursor-pointer px-8 py-3 rounded-full text-base font-medium transition-colors duration-300"
              >
                See what&apos;s inside
              </button>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
