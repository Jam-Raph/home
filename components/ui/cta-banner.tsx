"use client"

import { Button } from "./button"
import { BlurFade } from "./blur-fade"
import { smoothScroll } from "@/lib/utils"

export function CTABanner() {
  return (
    <section className="w-full bg-brand-primary py-16 -mx-4 px-4" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
      <div className="container mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to eliminate the busywork?
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-xl">
              Join leading law firms using Pillar to transform their legal workflows
            </p>
            <Button
              onClick={() => smoothScroll("contact")}
              className="bg-white text-brand-primary hover:bg-stone-100 cursor-pointer px-8 py-3 text-base font-medium"
            >
              Book a demo
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
