"use client"

import { FileInput, Sparkles, Newspaper, LucideIcon } from "lucide-react"

interface Video {
  id: number
  title: string
  url: string
}

interface Feature {
  id: string
  name: string
  description: string
  icon: LucideIcon
  videos: Video[]
}

const features: Feature[] = [
  {
    id: "form-filler",
    name: "Form Filler",
    description: "Fill common form templates automatically",
    icon: FileInput,
    videos: [
      { id: 1, title: "Original document", url: "demos/form-filler.mp4" },
      { id: 2, title: "Pillar processing", url: "demos/form-filler.mp4" },
      { id: 3, title: "Finalised form", url: "demos/form-filler.mp4" },
    ],
  },
  {
    id: "prompt-enhancer",
    name: "Prompt Enhancer",
    description: "Transform simple prompts into detailed queries",
    icon: Sparkles,
    videos: [
      { id: 4, title: "Original prompt", url: "demos/magic-prompt-demo-cropped.mp4" },
      { id: 5, title: "Enhanced prompt", url: "demos/magic-prompt-demo-cropped.mp4" },
    ],
  },
  {
    id: "article-generator",
    name: "Article Generator",
    description: "Generate articles from legal judgements",
    icon: Newspaper,
    videos: [
      { id: 6, title: "Original judgement", url: "demos/cropped-trimed-article-gen.mov" },
      { id: 7, title: "Generated article", url: "demos/cropped-trimed-article-gen.mov" },
    ],
  },
]

export function FeatureCards() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.id}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                <p className="text-xs text-gray-400">
                  {feature.videos.length} video{feature.videos.length > 1 ? "s" : ""} available
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
