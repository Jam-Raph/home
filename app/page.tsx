"use client"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/navbar"
import TwoBox from "@/components/ui/two-box"
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

import { BlurFade } from "@/components/ui/blur-fade";

import { PartnerLeadForm } from "./partner-lead-form"

import { DotPattern } from "@/components/ui/dot-pattern"
import { StatsBanner } from "@/components/ui/stats-banner"
import { CTABanner } from "@/components/ui/cta-banner"
import { TeamBanner } from "@/components/ui/team-banner"
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
    <div className="mx-auto flex flex-col h-full container gap-12 p-4">
      {/* Navbar */}
      <Navbar/>
        <DotPattern className="rounded-full -z-10" glow/>
      <section className="flex flex-col items-center w-full gap-12 pt-24 relative" id="hero">
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl text-center">Eliminate the busywork. Focus on the arguments</h1>
            <p className="text-stone-400 text-sm md:text-lg text-center">Enhance your legal workflows with our AI powered solutions that are made to increase productivity and save time without cutting corners</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-brand-primary text-white cursor-pointer px-6" onClick={() => smoothScroll("contact")}>Book a demo</Button>
              <Button variant="outline" className="border-stone-300 text-stone-600 cursor-pointer px-6" onClick={() => smoothScroll("pillar")}>See how it works</Button>
            </div>
          </div>
        </div>
          <BlurFade delay={0.05} inView>
            {/* <Image loading="eager" alt="Pillar home page" width={1280} height={0} className="w-auto h-auto rounded-lg border border-stone-200 shadow-lg z-0" src={"/pillar-home.png"}/> */}
            <video className="w-auto h-auto rounded-lg border border-stone-200 shadow-lg z-0" autoPlay muted loop>
              <source src="https://qbokigvsybuh4l4g.public.blob.vercel-storage.com/Form%20B14%20and%20Share%20transfer%20demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </BlurFade>

      </section>

      <section className="flex flex-col gap-4" id="partners">
        <h6 className="text-stone-400 text-center text-sm uppercase tracking-wider">Currently working with</h6>
        <div className="flex items-end justify-center gap-12 md:gap-24 overflow-hidden">
          <Image alt="KGP Logo" src={"/logos/KGP.png"} width={300} height={0} className="w-16 md:w-32 h-auto"/>
          <Image alt="SMU Logo" src={"/logos/smu.png"} width={300} height={0} className="w-16 md:w-24 h-auto"/>
          <Image alt="Delta Logo" src={"/logos/Delta.png"} width={300} height={0} className="w-16 md:w-32 h-auto"/>
          <Image alt="EY Logo" src={"/logos/EY.png"} width={300} height={0} className="w-8 md:w-16 h-auto"/>
        </div>
      </section>

      <StatsBanner />

      <section className="flex flex-col gap-5">
        <div className="flex flex-col items-center gap-4" id="pillar">
          <h1 className="text-4xl md:text-6xl text-center">Pillar</h1>
          <p className="text-stone-400">Our proprietary software built for the everyday law firms who require practical, scalable AI – not enterprise complexity</p>
        </div>
        
        {/* Box */}
        <div className="flex flex-col items-center h-full gap-36">
          {/* B14 Form */}
          <BlurFade delay={0.15} inView>
            <TwoBox
              title="Fill up repetitive forms in minutes not hours"
              description="Create a B14 form using the affidavit. Be the one who approves instead of doing menial task"
              videoUrl="https://qbokigvsybuh4l4g.public.blob.vercel-storage.com/form-b14-demo.mp4"
              alt={false}
              />
          </BlurFade>

          {/* Form filler */}
         <BlurFade delay={0.15} inView>
           <TwoBox
            title="Fill up commonly used forms with any template"
            description="Save time by filling up common form templates from your organisation with different source documents."
            videoUrl="https://qbokigvsybuh4l4g.public.blob.vercel-storage.com/form-filler.mp4"
            videoBG={"bg-[#D4D4CC]"}
            />
         </BlurFade>
          
         {/* Project */}
         <BlurFade delay={0.15} inView>
           <TwoBox
            title="Chat with your documents"
            description="Upload case files and have AI-powered conversations with them. Get instant answers from your documents"
            videoUrl="https://qbokigvsybuh4l4g.public.blob.vercel-storage.com/project-demo.mp4"
            videoBG={"bg-[#D4D4CC]"}
            />
         </BlurFade>

         {/* Magic Prompt */}
         <BlurFade delay={0.15} inView>
           <TwoBox
            title="Enhance your prompts with AI"
            description="Transform simple questions into detailed, structured prompts that get you better answers"
            videoUrl="https://qbokigvsybuh4l4g.public.blob.vercel-storage.com/magic-prompt-demo-cropped.mp4"
            alt={false}
            />
         </BlurFade>

          {/* Article generator */}

          <BlurFade delay={0.15} inView>
            <TwoBox
            title="Generate articles based on judgements from multiple jurisdictions"
            description="Publicise your law firm by leveraging AI to draft up articles on current legal judgments"
            videoUrl="https://qbokigvsybuh4l4g.public.blob.vercel-storage.com/trimed-article-gen.mov"
            alt={false}
            />
          </BlurFade>

        </div>
      </section>

      <section className="w-full bg-stone-100 py-16 -mx-4 px-4 rounded-3xl" id="security">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-4xl md:text-5xl text-stone-800">Security &amp; Privacy</h2>
            <p className="text-stone-500">
              We&apos;re built for sensitive documents.
            </p>
          </div>

          <article className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl bg-white/80 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-stone-100 p-2">
                      <Icon className="h-6 w-6 text-stone-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold leading-snug text-stone-800">
                        {p.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-stone-500">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </article>
        </div>
      </section>

      <section id="faq">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-4xl md:text-5xl text-stone-800">
            FAQ
          </h2>
          <p className="max-w-2xl text-base md:text-lg text-stone-500">
            Quick answers to the questions we hear most often.
          </p>
        </div>

        <div className="mt-12">
          <div className="rounded-2xl bg-stone-100 p-4 md:p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, idx) => (
                <AccordionItem
                  key={item.q}
                  value={`item-${idx}`}
                  className="border-stone-200 px-2 md:px-4"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg text-stone-700 hover:text-stone-900">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-stone-500 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTABanner />

      <TeamBanner />

      <PartnerLeadForm/>
      <Footer/>
    </div> 
  )
}