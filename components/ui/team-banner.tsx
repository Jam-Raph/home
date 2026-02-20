"use client"

import Image from "next/image"
import { BlurFade } from "./blur-fade"

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

export function TeamBanner() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <BlurFade delay={0.1} inView>
          <h2 className="text-3xl text-white font-semibold text-center mb-12">The founding team behind Pillar</h2>
        </BlurFade>

        <div className="flex justify-center gap-8 flex-wrap">
          {team.map((member, index) => (
            <BlurFade key={member.name} delay={0.15 + index * 0.05} inView>
              <a
                href={member.link}
                target="_blank"
                rel="noreferrer"
                className="text-center group"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 mx-auto bg-gray-200 relative">
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-white group-hover:text-gray-200 transition-colors">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.role}</p>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
