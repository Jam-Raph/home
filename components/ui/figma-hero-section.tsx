"use client"

import { useState } from "react"

interface Video {
  id: number
  title: string
  description: string
  url: string
}

interface HeroSectionProps {
  videos: Video[]
}

export function FigmaHeroSection({ videos }: HeroSectionProps) {
  const [activeVideo, setActiveVideo] = useState(videos[0])

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">Leave the form filling to us</h1>
          <p className="text-white mb-8">Eliminate the busywork with AI-powered solutions</p>
          <button className="px-6 py-3 bg-[#FFC72C] border border-[#F2DBA0] text-[#9A2A1F] rounded-lg hover:bg-[#FFC72C]/80 transition-colors font-semibold">
            Book a demo
          </button>
        </div>

        {/* Form Filler Section */}
        <div>
          {/* Video Tabs at Top */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  activeVideo.id === video.id
                    ? "bg-[#9A2A1F] text-white border-[#F2DBA0]"
                    : "bg-transparent text-white border-white hover:bg-[#9A2A1F]/30"
                }`}
              >
                <div className="font-semibold">{video.title}</div>
              </button>
            ))}
          </div>

          {/* Large Video Display */}
          <div>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <video
                key={activeVideo.id}
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
              >
                <source src={activeVideo.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
