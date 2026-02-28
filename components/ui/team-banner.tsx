"use client"

import Image from "next/image"
import { BlurFade } from "./blur-fade"
import { Trophy } from "lucide-react"

const team = [
  {
    src: "/headshots/jamison.png",
    name: "Jamison",
    role: "CEO",
    link: "https://www.linkedin.com/in/jamisonteng/"
  },
  {
    src: "/headshots/raphael.png",
    name: "Raphael",
    role: "CTO",
    link: "https://www.linkedin.com/in/raphael-lim-437416213/"
  },
  {
    src: "/headshots/darren.png",
    name: "Darren",
    role: "Co-lead Dev",
    link: "https://www.linkedin.com/in/darren-sim-296523243/"
  },
  {
    src: "/headshots/liediana.png",
    name: "Liediana",
    role: "Head of Finance",
    link: "https://www.linkedin.com/in/liediana-djoli705/"
  },
]

const awards = [
  {
    src: "/awards/smu-lit-2025-first-place.JPG",
    alt: "Jam & Raph team winning SMU Legal Innovation and Tech 2025",
    title: "SMU Legal Innovation and Tech 2025",
    place: "1st Place",
    link: "https://www.linkedin.com/posts/jus-mundi_between-ai-agents-shouting-objection-and-ugcPost-7389949606601850880-QN61"
  },
  {
    src: "/awards/SMU_Hult_Prize_26.jpeg",
    alt: "Jam & Raph team winning 1st Runner Up at SMU Hult Prize 2026",
    title: "SMU Hult Prize 2026",
    place: "1st Runner Up",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7425846342385668096"
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

export function TeamBanner() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto">
        {/* Header */}
        <BlurFade delay={0.1} inView>
          <div className="flex flex-col items-center gap-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-stone-800">The founding team behind Pillar</h2>
          </div>
        </BlurFade>

        {/* Team Headshots */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-16">
          {team.map((member, index) => (
            <BlurFade key={member.name} delay={0.15 + index * 0.05} inView>
              <a
                href={member.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-3 group"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-stone-100 shadow-sm transition-shadow group-hover:shadow-md">
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="font-medium text-stone-800 group-hover:text-stone-600 transition-colors">{member.name}</p>
                  <p className="text-sm text-stone-500">{member.role}</p>
                </div>
              </a>
            </BlurFade>
          ))}
        </div>

        {/* Awards Section */}
        <BlurFade delay={0.3} inView>
          <div className="flex flex-col items-center gap-4 text-center mb-8">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-500" />
              <h3 className="text-xl md:text-2xl text-stone-700">Our Hackathon Wins</h3>
            </div>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <BlurFade key={award.src} delay={0.35 + index * 0.1} inView>
              <a
                href={award.link}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 block"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={award.src}
                    alt={award.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-amber-400" />
                    <span className="text-sm font-medium text-amber-400">{award.place}</span>
                  </div>
                  <p className="text-lg font-semibold text-white">{award.title}</p>
                </div>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
