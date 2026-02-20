"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { smoothScroll } from "@/lib/utils"

export function CTABanner() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/J&R logo.png"
            alt="Jam & Raph logo"
            width={80}
            height={80}
            className="h-20 w-auto mx-auto"
          />
        </div>

        <h2 className="text-4xl font-bold mb-4">Stop wasting time on form filling.</h2>
        <p className="text-gray-600 mb-8">Start your 7-day free trial. No credit card required.</p>

        <button
          onClick={() => smoothScroll("contact")}
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}
