"use client"

import { Upload, Cpu, FileCheck } from "lucide-react"

export function FigmaHowItWorks() {
  const steps = [
    {
      icon: Upload,
      number: "1",
      title: "Upload",
      description: "Upload your source documents or input your requirements",
    },
    {
      icon: Cpu,
      number: "2",
      title: "AI Processes",
      description: "Our AI extracts, analyzes, and fills forms automatically",
    },
    {
      icon: FileCheck,
      number: "3",
      title: "Preserve formatting",
      description: "Deterministic code form filling to preserve template formatting",
    },
  ]

  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-2">How it works</h2>
          <p className="text-gray-600">Three simple steps to eliminate form filling</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-full mb-4">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 w-8 h-8 bg-[#7c1e15] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
