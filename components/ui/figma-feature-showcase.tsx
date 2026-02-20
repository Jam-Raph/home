"use client"

import { useState } from "react"

interface Video {
  id: number
  title: string
  description: string
  url: string
}

interface FeatureShowcaseProps {
  name: string
  videos: Video[]
  imagePosition: "left" | "right"
}

export function FeatureShowcase({ name, videos, imagePosition }: FeatureShowcaseProps) {
  const [activeVideo, setActiveVideo] = useState(videos[0])

  const getFeatureDescription = (name: string) => {
    switch (name) {
      case "Prompt enhancer":
        return "Enhance your prompts with AI. Transform simple questions into detailed, structured prompts that get you better answers."
      case "Article generator":
        return "Generate articles based on judgements from multiple jurisdictions. Publicise your law firm by leveraging AI to draft up articles on current legal judgments."
      case "B14 Form":
        return "Fill up repetitive forms in minutes not hours. Create a B14 form using the affidavit. Be the one who approves instead of doing menial tasks."
      case "Form Filler":
        return "Save time by filling up common form templates from your organisation with different source documents."
      default:
        return ""
    }
  }

  const videoSection = (
    <div className="relative flex flex-col justify-center h-full">
      {/* Video Buttons */}
      <div className="flex gap-3 mb-4 justify-center">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setActiveVideo(video)}
            className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium cursor-pointer ${
              activeVideo.id === video.id
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:border-black"
            }`}
          >
            {video.title}
          </button>
        ))}
      </div>

      {/* Video Display */}
      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <video
          key={activeVideo.id}
          className="w-full h-full object-cover"
          controls
          muted
          loop
        >
          <source src={activeVideo.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )

  const descriptionSection = (
    <div className="flex flex-col justify-center text-center">
      <h3 className="text-2xl font-semibold mb-4">{name}</h3>
      <p className="text-gray-600 text-base leading-relaxed">
        {getFeatureDescription(name)}
      </p>
    </div>
  )

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {imagePosition === "left" ? (
        <>
          <div>{videoSection}</div>
          <div>{descriptionSection}</div>
        </>
      ) : (
        <>
          <div>{descriptionSection}</div>
          <div>{videoSection}</div>
        </>
      )}
    </div>
  )
}
