"use client"

import { Trophy, Award, Star } from 'lucide-react'
import Image from "next/image"

const stats = [
  { number: '8', unit: 'hrs', label: 'saved per B14 application' },
  { number: '4', unit: 'hrs', label: 'saved per article draft' },
  { number: '3', unit: '+', label: 'firms working with Jam & Raph' },
]

export function FigmaStatsSection() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="border-t-6 border-[#7c1e15] my-12"></div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2">
                <span className="text-6xl font-bold text-gray-900">{stat.number}</span>
                <span className="text-3xl font-normal text-gray-500">{stat.unit}</span>
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="border-t-6 border-[#7c1e15] my-12"></div>

        {/* Achievements & Partnerships Grid with Varying Shapes */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:h-[600px]">
          {/* Sorcha Boyce Testimonial - Large Long Box (spans 2 columns, 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 border-2 border-gray-300 bg-transparent p-6">
            <div className="flex gap-4 items-start h-full">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=400&q=80"
                    alt="Sorcha Boyce"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 text-center">
                  <div className="text-xs font-semibold text-gray-700">A&O SHEARMAN</div>
                </div>
              </div>

              <div className="flex-1">
                <p className="font-semibold mb-2 text-sm">
                  Sorcha Boyce,<br />
                  Legal Tech APAC Head at <span className="font-bold">A&O Shearman</span>:
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">&quot;Impressive</span> founders targeting tasks that are universally burdensome for lawyers globally - more focused than Harvey or existing document automation platforms&quot;
                </p>
              </div>
            </div>
          </div>

          {/* SMU Hult Prize - Tall Box */}
          <div className="md:col-span-1 md:row-span-2 border-2 border-gray-300 bg-transparent p-6">
            <div className="flex flex-col items-center text-center h-full justify-center">
              <Trophy className="w-10 h-10 mb-3 text-yellow-600" />
              <h3 className="font-semibold text-base mb-2">SMU Hult Prize Finalists</h3>
              <p className="text-xs text-gray-600">
                Recognized globally for innovative legal solutions.
              </p>
            </div>
          </div>

          {/* Multiple Hackathon Winners - Tall Box */}
          <div className="md:col-span-1 md:row-span-2 border-2 border-gray-300 bg-transparent p-6">
            <div className="flex flex-col items-center text-center h-full justify-center">
              <Award className="w-10 h-10 mb-3 text-blue-600" />
              <h3 className="font-semibold text-base mb-2">Multiple Hackathon Winners</h3>
              <p className="text-xs text-gray-600">
                Proven track record of innovation.
              </p>
            </div>
          </div>

          {/* Trusted by Leading Law Firms - Short Wide Box */}
          <div className="md:col-span-2 md:row-span-1 border-2 border-gray-300 bg-transparent p-6">
            <div className="flex items-center gap-4 h-full">
              <Star className="w-8 h-8 flex-shrink-0 text-purple-600" />
              <div>
                <h3 className="font-semibold text-base mb-1">Trusted by Leading Law Firms</h3>
                <p className="text-xs text-gray-600">
                  Partnering with top-tier firms to transform legal workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Currently Working With - Long Box with Logos (spans 2 columns) */}
          <div className="md:col-span-2 md:row-span-1 border-2 border-gray-300 bg-transparent p-6">
            <div className="h-full flex flex-col justify-center">
              <h3 className="font-semibold text-base mb-3">Currently Working With</h3>
              <div className="flex items-center justify-center gap-8">
                <Image alt="KGP Logo" src="/logos/KGP.png" width={80} height={40} className="h-8 w-auto object-contain" />
                <Image alt="SMU Logo" src="/logos/smu.png" width={60} height={40} className="h-8 w-auto object-contain" />
                <Image alt="Delta Logo" src="/logos/Delta.png" width={80} height={40} className="h-8 w-auto object-contain" />
                <Image alt="EY Logo" src="/logos/EY.png" width={40} height={40} className="h-6 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
