"use client"

import Image from "next/image"
import { BlurFade } from "./blur-fade"
import { Trophy } from "lucide-react"

const awards = [
  {
    src: "/awards/smu-lit-2025-first-place.JPG",
    alt: "Jam & Raph team winning SMU Legal Innovation and Tech 2025",
    title: "SMU Legal Innovation and Tech 2025",
    place: "1st Place",
    link: "https://www.linkedin.com/posts/jus-mundi_between-ai-agents-shouting-objection-and-ugcPost-7389949606601850880-QN61"
  },
  {
    src: "/awards/base-first-place.jpeg",
    alt: "Jam & Raph team winning BASE Hackathon",
    title: "NTU x Base Web3",
    place: "1st Place",
    link: "https://www.linkedin.com/posts/blockchain-at-ntu_ntu-ntublockchain-base-activity-7370449056969633792-ua_9"
  },
  {
    src: "/awards/smu-lit-2024-second-place.jpeg",
    alt: "Jam & Raph team at SMU Legal Innovation and Tech 2024",
    title: "SMU Legal Innovation and Tech 2024",
    place: "2nd Place",
    link: "https://www.linkedin.com/posts/raphael-lim-437416213_sigmatech-generativeai-icp-activity-7228613456231288832-k94I"
  },
]

export function HackathonWins() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="flex items-center justify-center gap-2 mb-12">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <h3 className="text-3xl font-semibold text-white">Our Hackathon Wins</h3>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <BlurFade key={award.src} delay={0.15 + index * 0.1} inView>
              <a
                href={award.link}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-lg block"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={award.src}
                    alt={award.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-semibold mb-1">{award.title}</p>
                    <p className="text-sm text-gray-200">{award.place}</p>
                  </div>
                </div>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
