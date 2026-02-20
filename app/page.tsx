"use client"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/navbar"
import Image from "next/image"
import {
  ShieldCheck,
  Lock,
  Link2,
  Database,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


import { PartnerLeadForm } from "./partner-lead-form"

import { DotPattern } from "@/components/ui/dot-pattern"
import { CTABanner } from "@/components/ui/cta-banner"
import { FeatureCards } from "@/components/ui/feature-cards"
import { FeatureShowcase } from "@/components/ui/figma-feature-showcase"
import { FigmaHeroSection } from "@/components/ui/figma-hero-section"
import { FigmaHowItWorks } from "@/components/ui/figma-how-it-works"
import { FigmaStatsSection } from "@/components/ui/figma-stats-section"
import { FigmaSavingsCalculator } from "@/components/ui/figma-savings-calculator"
import { TeamBanner } from "@/components/ui/team-banner"
import { HackathonWins } from "@/components/ui/hackathon-wins"
import { Footer } from "./footer"
import { smoothScroll } from "@/lib/utils"

export default function Home() {
   const points = [
    {
      title: "Private file storage (Supabase)",
      description: "Documents are stored in private buckets (not public links).",
      icon: Lock,
    },
    {
      title: "Expiring access",
      description: "Files are served via signed URLs that expire automatically.",
      icon: Link2,
    },
    {
      title: "Backend-only privileges",
      description:
        "Elevated permissions run on our backend using a service role (never exposed to the browser).",
      icon: ShieldCheck,
    },
    {
      title: "Database controls",
      description:
        "We apply Row Level Security (RLS) on relevant tables to limit access by user/role.",
      icon: Database,
    },
  ];
  const faqs = [
    {
      q: "Do the AI models used retain or learn from customer data?",
      a: "No. The models we use do not retain or learn from any input or output. All processing is ephemeral.",
    },
    {
      q: "Where does the article generator get its sources from?",
      a: "The article generator pulls sources from eLitigation and the Federal Supreme Court of Switzerland.",
    },
    {
      q: "How does Pillar use my documents?",
      a: "We store documents in our database (Supabase) and Claude’s file API for processing. These documents are removed after processing unless the feature requires persistent file storage i.e: Projects. These documents can only be accessed with the proper access level.",
    },
  ];

  
  return (
    <div className="mx-auto flex flex-col h-full container gap-12 p-4 bg-gray-50 bg-[radial-gradient(#0000001f_1px,transparent_1px)] bg-[size:18px_18px]">
      {/* Navbar */}
      <Navbar/>

      <div className="bg-[radial-gradient(circle_at_center,_#B11226_0%,_#8E1624_45%,_#4A0B14_100%)] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-12 pt-12">
      <FigmaHeroSection
        videos={[
          { id: 1, title: "Original document", description: "Upload your source documents", url: "/demos/form-b14-demo.mp4" },
          { id: 2, title: "Pillar processing", description: "AI extracts and fills forms", url: "/demos/form-filler.mp4" },
          { id: 3, title: "Finalised form", description: "Review and export", url: "/demos/magic-prompt-demo-cropped.mp4" },
        ]}
      />
      </div>

      <FigmaHowItWorks />

      <FigmaStatsSection />

      <FigmaSavingsCalculator />

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-semibold mb-12 text-center">
            Form filling is just the beginning
          </h2>

          <div className="space-y-24">
          <FeatureShowcase
            name="Prompt enhancer"
            imagePosition="right"
            videos={[
              { id: 1, title: "Original prompt", description: "Your initial prompt", url: "/demos/magic-prompt-demo-cropped.mp4" },
              { id: 2, title: "Enhanced prompt", description: "AI-improved prompt", url: "/demos/magic-prompt-demo-cropped.mp4" }
            ]}
          />
          <FeatureShowcase
            name="Article generator"
            imagePosition="left"
            videos={[
              { id: 3, title: "Original judgement", description: "Source legal judgement", url: "/demos/cropped-trimed-article-gen.mov" },
              { id: 4, title: "Generated article", description: "AI-generated article", url: "/demos/cropped-trimed-article-gen.mov" }
            ]}
          />
          </div>
        </div>
      </section>

      <FeatureCards />

      <section className="px-6 py-16 bg-[radial-gradient(circle_at_center,_#B11226_0%,_#8E1624_45%,_#4A0B14_100%)] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" id="security">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-white font-semibold mb-2 text-4xl md:text-5xl">Security &amp; Privacy</h2>
          <p className="text-white mb-12">We&apos;re built for sensitive documents.</p>

          <div className="grid md:grid-cols-4 gap-8">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm text-white">{p.title}</h3>
                  <p className="text-xs text-gray-300">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-2">FAQ</h2>
            <p className="text-gray-600">Quick answers to the questions we hear most often.</p>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((item, idx) => (
                <AccordionItem
                  key={item.q}
                  value={`item-${idx}`}
                  className="border border-gray-200 rounded-lg px-2"
                >
                  <AccordionTrigger className="text-left font-medium px-4 hover:bg-gray-50 transition-colors">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600 px-4 pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTABanner />

      <div className="bg-[radial-gradient(circle_at_center,_#B11226_0%,_#8E1624_45%,_#4A0B14_100%)] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <TeamBanner />
        <HackathonWins />
      </div>

      <PartnerLeadForm/>
      <Footer/>
    </div> 
  )
}