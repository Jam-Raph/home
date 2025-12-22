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
      a: "We store documents in our database (Supabase) and Claude’s file API for processing. These documents can only be accessed with the proper access level.",
    },
  ];

  
  return (
    <div className="mx-auto flex flex-col h-full container gap-32 p-4">
      {/* Navbar */}
      <Navbar/>
        <DotPattern className="rounded-full -z-10" glow/>
      <section className="flex flex-col items-center w-full gap-12 pt-24 relative" id="hero">
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl text-center">Eliminate the busywork. Focus on the arguments</h1>
            <p className="text-stone-400 text-sm md:text-lg text-center">Enhance your legal workflows with our AI powered solutions that are made to increase productivity and save time without cutting corners</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button className="bg-brand-primary text-white cursor-pointer" onClick={() => smoothScroll("contact")}>Book a demo</Button>
            <p className="text-stone-400">For pilots, custom tech solutions and demos</p>
          </div>
        </div>
        <BlurFade delay={0.05} inView>
          <Image loading="eager" alt="Pillar home page" width={1280} height={0} className="w-auto h-auto rounded-lg border border-stone-200 shadow-lg z-0" src={"/pillar-home.png"}/>
        </BlurFade>

      </section>

      <section className="flex flex-col" id="partners">
        <h6 className="text-stone-400 text-center">Currently working with:</h6>
        <div className="flex items-end justify-center gap-12 md:gap-24 overflow-hidden">
          <Image alt="KGP Logo" src={"/logos/KGP.png"} width={300} height={0} className="w-16 md:w-32 h-auto"/>
          <Image alt="Oon & Bazul Logo" src={"/logos/O&B.png"} width={300} height={0} className="w-24 md:w-48 h-auto"/>
          <Image alt="Delta Logo" src={"/logos/Delta.png"} width={300} height={0} className="w-16 md:w-32 h-auto"/>
          <Image alt="EY Logo" src={"/logos/EY.png"} width={300} height={0} className="w-8 md:w-16 h-auto"/>
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <div className="flex flex-col items-center gap-4" id="pillar">
          <h1 className="text-4xl md:text-6xl text-center">Pillar</h1>
          <p className="text-stone-400">Our proprietary software built for the everyday law firms who require practical, scalable AI – not enterprise complexity</p>
        </div>
        
        {/* Box */}
        <div className="flex flex-col items-center h-full gap-[144px]">
         <BlurFade delay={0.15} inView>
           <TwoBox
            title="Fill up repetitive forms in minutes not hours"
            description="Create a B14 form using the affidavit. Be the one who approves instead of doing menial task"
            videoUrl="https://qbokigvsybuh4l4g.public.blob.vercel-storage.com/trimed-cropped-b14.mp4"
            alt={false}
            />
         </BlurFade>

          {/* Article generator */}

          <BlurFade delay={0.15} inView>
            <TwoBox
            title="Generate articles based on judgements from multiple jurisdictions"
            description="Publicise your law firm by leveraging AI to draft up articles on current legal judgments"
            videoUrl="https://qbokigvsybuh4l4g.public.blob.vercel-storage.com/trimed-article-gen.mov"
            videoBG={"bg-[#D4D4CC]"}
            />
          </BlurFade>


          {/* AI assistant */}

        </div>
      </section>

      <section>
      <div id="security">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-4xl md:text-6xl">Security &amp; Privacy</h2>
          <p className="text-stone-400">
            We’re built for sensitive documents.
          </p>
        </div>

        <article className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <Icon className="h-10 w-20" />
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
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

    <section>
      <div id="faq">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-4xl md:text-6xl ">
              FAQ
            </h1>
            <p className="max-w-2xl text-base md:text-lg text-muted-foreground">
              Quick answers to the questions we hear most often.
            </p>
          </div>

        <div className="mt-12">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-2 md:p-4 shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((item, idx) => (
                  <AccordionItem
                    key={item.q}
                    value={`item-${idx}`}
                    className="px-2 md:px-4"
                  >
                    <AccordionTrigger className="text-left text-base md:text-lg">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
        </div>
      </div>
    </section>

      <PartnerLeadForm/>
      <Footer/>
    </div> 
  )
}