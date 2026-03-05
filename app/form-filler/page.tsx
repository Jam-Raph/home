"use client"

import { motion } from "motion/react"
import { Upload, FileSearch, Download } from "lucide-react"
import Navbar from "@/components/ui/navbar"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { Footer } from "../footer"

const steps = [
  {
    icon: Upload,
    step: "1",
    title: "Upload Template",
    description:
      "Upload your form template. AI analyzes and identifies all fillable fields.",
  },
  {
    icon: FileSearch,
    step: "2",
    title: "Add Sources",
    description:
      "Upload source documents containing the data to extract.",
  },
  {
    icon: Download,
    step: "3",
    title: "Download",
    description:
      "AI fills your form and you download the completed document instantly.",
  },
]

export default function FormFillerPage() {
  return (
    <div className="relative mx-auto flex flex-col h-full container gap-12 p-4">
      <div
        className="fixed inset-0 opacity-[0.035] -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%237C1E15' fill-opacity='1' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E")`,
        }}
      />
      <Navbar />

      {/* Demo Video */}
      <section className="pt-24 pb-20" id="demo">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-stone-900 text-center mb-12">
            Fill Any Forms in{" "}
            <AnimatedGradientText
              colorFrom="#7C1E15"
              colorTo="#5C1610"
              className="text-4xl sm:text-6xl font-bold"
            >
              Seconds
            </AnimatedGradientText>
            , Not Hours
          </h1>
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg border border-stone-200" style={{ paddingBottom: "56.25%" }}>
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
      <section className="relative py-20 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-stone-900 mb-16">
            Three Simple Steps
          </h2>
          <div className="relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-7 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-0.5 bg-stone-200" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {steps.map((s, index) => (
                <motion.div
                  key={s.step}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="h-14 w-14 rounded-full bg-brand-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-4 relative z-10">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-stone-500">{s.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
