"use client"

import { motion } from "motion/react"
import { Upload, FileSearch, Download } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/ui/navbar"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { Footer } from "@/app/footer"
import { FloatingCTA } from "@/components/ui/floating-cta"
import { DotPattern } from "@/components/ui/dot-pattern"

const steps = [
  {
    icon: Upload,
    step: "1",
    title: "Upload template",
    description:
      "Upload your form template — any DOCX file your firm uses. AI analyses the document and identifies all fillable fields automatically.",
  },
  {
    icon: FileSearch,
    step: "2",
    title: "Add sources",
    description:
      "Upload source documents — affidavits, briefs, or contracts — containing the data to extract.",
  },
  {
    icon: Download,
    step: "3",
    title: "Download",
    description:
      "AI fills your form with extracted data and you download the completed document instantly — ready for review.",
  },
]

export default function FormFillerPage() {
  return (
    <div className="mx-auto flex flex-col h-full">
      <Navbar />
      <FloatingCTA />

      {/* Hero banner with painting */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden" id="demo">
        <Image
          src="/supreme-court.png"
          alt="Supreme Court of Singapore painting"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.p
            className="text-xs uppercase tracking-[0.25em] text-white/80 font-mono mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Form Filler
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-6xl font-serif font-normal tracking-[0.05em] text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Fill Any Form in{" "}
            <span className="text-brand-primary">Seconds</span>
            {", "}Not Hours
          </motion.h1>
        </div>
      </section>

      {/* Demo Video */}
      <section className="relative py-24">
        <DotPattern className="opacity-[0.06] text-stone-400" />
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-stone-200" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.loom.com/embed/7a90c9f4ef4c49a38b65d4d7f927f1e3"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </section>

      {/* Three Simple Steps */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono text-center mb-6">How It Works</p>
          <h2 className="text-3xl font-serif font-normal tracking-[0.05em] text-center text-stone-900 mb-16">
            Three simple steps
          </h2>
          <div className="relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-7 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-0.5 bg-stone-300" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
              {steps.map((s, index) => (
                <motion.div
                  key={s.step}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="h-14 w-14 rounded-full bg-stone-900 text-white text-xl font-medium flex items-center justify-center mx-auto mb-5 relative z-10">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-stone-900 mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{s.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono text-center mb-6">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-serif font-normal tracking-[0.05em] text-stone-900 mb-4">
            Ready to automate your forms?
          </h2>
          <p className="text-stone-500 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            See how Pillar can save your team hours on every form submission.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 rounded-full text-base font-medium transition-colors duration-300"
          >
            Book a demo
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
