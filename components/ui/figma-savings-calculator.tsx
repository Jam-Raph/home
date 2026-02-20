"use client"

import { useState } from "react"
import { Calculator } from "lucide-react"
import { smoothScroll } from "@/lib/utils"

export function FigmaSavingsCalculator() {
  const [firmSize, setFirmSize] = useState<"small" | "medium" | "large">("medium")

  const calculations = {
    small: {
      label: "Small Firm (1-5 lawyers)",
      formsPerMonth: 20,
      hoursPerForm: 3,
      hoursSavedPerForm: 3,
    },
    medium: {
      label: "Medium Firm (6-20 lawyers)",
      formsPerMonth: 60,
      hoursPerForm: 3,
      hoursSavedPerForm: 3,
    },
    large: {
      label: "Large Firm (20+ lawyers)",
      formsPerMonth: 150,
      hoursPerForm: 3,
      hoursSavedPerForm: 3,
    },
  }

  const calc = calculations[firmSize]
  const totalHoursSaved = calc.formsPerMonth * calc.hoursSavedPerForm
  const costSavings = totalHoursSaved * 250 // Assuming $250/hour billable rate

  return (
    <section className="px-6 py-16 bg-[radial-gradient(circle_at_center,_#B11226_0%,_#8E1624_45%,_#4A0B14_100%)] text-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Calculator className="w-8 h-8" />
            <h2 className="text-3xl font-semibold">Calculate Your Savings</h2>
          </div>
          <p className="text-gray-100">See how much time and money your firm could save each month</p>
        </div>

        {/* Firm Size Selector */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-4 text-center">Select your firm size:</label>
          <div className="grid md:grid-cols-3 gap-4">
            {(Object.keys(calculations) as Array<keyof typeof calculations>).map((size) => (
              <button
                key={size}
                onClick={() => setFirmSize(size)}
                className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  firmSize === size
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white border-white/50 hover:border-white"
                }`}
              >
                <div className="font-semibold">{calculations[size].label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="bg-white text-black rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Time saved per month</div>
              <div className="text-5xl font-bold text-[#7c1e15]">
                {totalHoursSaved}
                <span className="text-base font-normal text-gray-600 ml-2">hours saved</span>
              </div>
              <div className="text-sm text-gray-600 mt-2">
                ({calc.formsPerMonth} forms × {calc.hoursSavedPerForm} hours saved each)
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Potential cost savings</div>
              <div className="text-5xl font-bold text-[#7c1e15]">
                ${costSavings.toLocaleString()}
                <span className="text-base font-normal text-gray-600 ml-2">saved</span>
              </div>
              <div className="text-sm text-gray-600 mt-2">
                (Based on $250/hour billable rate)
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="text-center text-sm text-gray-600">
              <p className="mb-2">
                Traditional form filling: <span className="font-semibold">{calc.hoursPerForm} hours</span> per form
              </p>
              <p>
                With Pillar: <span className="font-semibold">~2 minutes</span> per form
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => smoothScroll("contact")}
              className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Book a demo to learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
