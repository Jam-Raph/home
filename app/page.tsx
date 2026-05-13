"use client"

import Navbar from "@/components/ui/navbar"
import TwoBox from "@/components/ui/two-box"
import Image from "next/image"
import {
  ShieldCheck,
  Lock,
  Link2,
  Database,
  ChevronDown,
  Scale,
  Workflow,
  Search,
  PenTool,
  Code,
  Users,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "motion/react";

import { PartnerLeadForm } from "./partner-lead-form"

import { CountUp, stats } from "@/components/ui/stats-banner"
import { CTABanner } from "@/components/ui/cta-banner"
import { TeamBanner } from "@/components/ui/team-banner"
import { Footer } from "./footer"
import { FloatingCTA } from "@/components/ui/floating-cta"
import { DotPattern } from "@/components/ui/dot-pattern"
import { smoothScroll } from "@/lib/utils"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { trackCTAClick, trackFAQOpened } from "@/lib/analytics"
import { SectionTracker } from "@/components/ui/section-tracker"

const supportedBy = [
  { alt: "NVIDIA Inception Program", src: "/logos/nvidia-inception.png", width: "w-24 md:w-44" },
  { alt: "SMU Logo", src: "/logos/smu.png", width: "w-16 md:w-28" },
  { alt: "Tech Nation", src: "/logos/tech-nation.png", width: "w-24 md:w-44" },
]

const workingWith = [
  { alt: "KGP Logo", src: "/logos/KGP.png", width: "w-28 md:w-44" },
  { alt: "Delta Logo", src: "/logos/Delta.png", width: "w-28 md:w-44" },
  { alt: "EY Logo", src: "/logos/EY.png", width: "w-16 md:w-28" },
  { alt: "Hanbridge Institute", src: "/logos/hanbridge.png", width: "w-28 md:w-44" },
]

export default function Home() {
   const points = [
    {
      title: "Private file storage (Supabase)",
      description: "Documents are stored in private buckets with no public links — only authorised users can access them.",
      icon: Lock,
    },
    {
      title: "Expiring access",
      description: "Files are served via signed URLs that expire automatically, preventing stale or shared links from being reused.",
      icon: Link2,
    },
    {
      title: "Backend-only privileges",
      description:
        "Elevated permissions run on our backend using a service role — never exposed to the browser or client-side code.",
      icon: ShieldCheck,
    },
    {
      title: "Database controls",
      description:
        "We apply Row Level Security (RLS) on relevant tables to limit access by user/role.",
      icon: Database,
    },
    {
      title: "End-to-end encryption",
      description:
        "TLS 1.3 in transit and AES-256 at rest. All data is encrypted within a SOC 2 compliant cloud environment via Supabase and AWS.",
      icon: Lock,
    },
  ];
  const phases = [
    {
      icon: Search,
      title: "Discovery",
      description: "We map your workflows and identify where AI ships value.",
    },
    {
      icon: PenTool,
      title: "Design",
      description: "We prototype options and validate them with your team.",
    },
    {
      icon: Code,
      title: "Build",
      description: "We integrate customised workflows into your existing systems.",
    },
    {
      icon: Users,
      title: "Handoff",
      description: "We document and train your team so you fully own the workflow.",
    },
  ];
  const faqs = [
    {
      q: "Do I need to be a law firm to work with Jam & Raph?",
      a: "No. Pillar is built for legal teams, but our AI Integration service works with any business looking to embed production-ready AI into their workflows.",
    },
    {
      q: "How does an AI Integration engagement work?",
      a: "Typically a 4 – 6 week engagement covering discovery, design, build, and handoff. We map your workflows, prototype options, ship a production-ready integration, and document everything so your team fully owns the result.",
    },
    {
      q: "What kinds of workflows are best suited for AI Integration?",
      a: "Repetitive document processing, structured data extraction, knowledge retrieval, and any task where AI can save your team meaningful hours per week. We scope this together in the discovery phase.",
    },
    {
      q: "Do the AI models used retain or learn from customer data?",
      a: "No. The models we use do not retain or learn from any input or output. All processing is ephemeral — once a request completes, the data is discarded and never used for training.",
    },
    {
      q: "Where does the article generator get its sources from?",
      a: "The article generator pulls sources from eLitigation (Singapore), giving your firm coverage of the latest court judgments.",
    },
    {
      q: "How does Pillar use my documents?",
      a: "Documents are stored in our database (Supabase) and passed to Claude's file API for processing. They are removed after processing unless the feature requires persistent storage (e.g. Projects). Access is restricted by Row Level Security, so only authorised users can view or modify their own documents.",
    },
    {
      q: "Which jurisdictions does Pillar support?",
      a: "Our form-filling features work with any jurisdiction's templates. The article generator currently pulls judgments from eLitigation (Singapore), with more jurisdictions planned.",
    },
    {
      q: "Can I use my own form templates?",
      a: "Yes. You can upload any form template your organisation uses. Pillar's AI analyses the fields and auto-fills them from your source documents — affidavits, briefs, contracts, or any other supporting material.",
    },
    {
      q: "What happens if the AI can't find a value in my source document?",
      a: "Pillar lists any fields it couldn't extract as 'unknown fields' so you know exactly what to review and fill in manually. Nothing is silently skipped.",
    },
    {
      q: "Can I query my uploaded documents with natural language?",
      a: "Yes. Our Projects feature lets you upload documents and ask questions in plain English. Pillar uses legal-domain embeddings to find the most relevant passages and provides answers with citations back to the source.",
    },
    {
      q: "Can I share templates and projects with my team?",
      a: "Yes. Templates and projects can be shared at the organisation level, so your whole team can reuse them across cases.",
    },
  ];


  return (
    <div className="mx-auto flex flex-col h-full">
      {/* Navbar */}
      <Navbar/>
      <SectionTracker sectionId="hero" />
      <SectionTracker sectionId="paths" />
      <SectionTracker sectionId="partners" />
      <SectionTracker sectionId="pillar" />
      <SectionTracker sectionId="ai-integration" />
      <SectionTracker sectionId="security" />
      <SectionTracker sectionId="faq" />
      <SectionTracker sectionId="contact" />

      {/* Hero — full viewport with hero-2.png background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
        <Image
          src="/hero-2.png"
          alt="Marina Bay skyline painting"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/5" />
        {/* Noise grain overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
        <div className="relative z-10 mx-auto px-4 text-center">
          <BlurFade delay={0.05} inView blur="3px">
            <p className="text-xs uppercase tracking-[0.4em] text-white font-mono mb-6">By Jam & Raph</p>
          </BlurFade>
          <BlurFade delay={0.15} inView blur="3px">
            <div className="w-12 h-px bg-white/30 mx-auto mb-8" />
            <h1 className="font-serif text-white text-xl md:text-5xl lg:text-6xl xl:text-7xl w-full">
              Exploring AI safely with you
            </h1>
          </BlurFade>
          <BlurFade delay={0.25} inView>
            <p className="mt-10 text-lg sm:text-xl leading-[1.6] tracking-[0.01em] text-white max-w-2xl mx-auto">
              Seamless AI integration for law firms and professional services
            </p>
          </BlurFade>
          <BlurFade delay={0.32} inView>
            <div className="mt-14 flex items-center justify-center gap-3 flex-wrap">
              <button
                className="bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium px-8 py-3 rounded-full transition-colors duration-300 cursor-pointer"
                onClick={() => { trackCTAClick("hero", "Talk to us"); smoothScroll("contact") }}
              >
                Talk to us
              </button>
            </div>
          </BlurFade>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </section>

      {/* Partners */}
      <div className="container mx-auto px-4">
        <section className="flex flex-col gap-16 py-24" id="partners">
          <div className="flex flex-col gap-8">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono text-center">Currently working with</p>
            <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap max-w-4xl mx-auto px-4">
              {workingWith.map((logo) => (
                <Image
                  key={logo.alt}
                  alt={logo.alt}
                  src={logo.src}
                  width={300}
                  height={0}
                  className={`${logo.width} h-auto`}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono text-center">Supported by</p>
            <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap max-w-3xl mx-auto px-4">
              {supportedBy.map((logo) => (
                <Image
                  key={logo.alt}
                  alt={logo.alt}
                  src={logo.src}
                  width={300}
                  height={0}
                  className={`${logo.width} h-auto`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Combined Stats & Testimonial */}
      <section className="relative w-full bg-surface-dark-card py-32" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
        {/* Noise grain overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
        <div className="container mx-auto px-4 relative">
          {/* Stats Grid */}
          <BlurFade delay={0.1} inView>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono text-center mb-8">By the Numbers</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl md:text-7xl font-serif font-normal text-white">
                      <CountUp target={stat.value} />
                    </span>
                    <span className="text-2xl md:text-3xl font-medium text-brand-primary">
                      {stat.unit}
                    </span>
                  </div>
                  <p className="mt-3 text-sm md:text-base text-stone-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </BlurFade>

          {/* Divider */}
          <div className="w-16 h-px bg-white/10 mx-auto my-16" />

          {/* Testimonial Quote */}
          <BlurFade delay={0.2} inView>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <p className="font-serif text-2xl md:text-3xl font-normal text-white/90 leading-[1.6] tracking-[0.01em]">
                &ldquo;Impressive at targeting tasks that are universally burdensome for lawyers globally &mdash; more focused than existing document automation platforms&rdquo;
              </p>
              <div className="mt-10 flex items-center gap-4">
                <Image
                  src="/headshots/sorcha-boyce.jpeg"
                  alt="Sorcha Boyce"
                  width={56}
                  height={56}
                  className="rounded-full object-cover w-14 h-14"
                />
                <div className="text-left">
                  <p className="text-sm font-medium text-white tracking-wide uppercase">Sorcha Boyce</p>
                  <p className="text-xs text-stone-400 mt-0.5">Legal Tech APAC Head, A&O Shearman</p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Two paths overview */}
      <section className="container mx-auto px-4 py-24" id="paths">
        <BlurFade delay={0.05} inView>
          <div className="flex flex-col items-center gap-4 text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono">How we work</p>
            <h2 className="text-4xl md:text-5xl text-stone-900 font-serif font-normal tracking-[0.05em] leading-[1.05]">Two ways to bring AI into your firm</h2>
            <p className="text-stone-600 max-w-2xl leading-relaxed">Pick the path that fits how your team works today.</p>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <BlurFade delay={0.1} inView className="flex">
            <button
              onClick={() => { trackCTAClick("two_paths", "Pillar"); smoothScroll("pillar") }}
              className="text-left w-full bg-white border border-stone-200/60 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer group flex flex-col"
            >
              <div className="inline-flex items-center justify-center rounded-xl bg-stone-100 p-3 mb-5 w-fit">
                <Scale className="h-7 w-7 text-stone-700" />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono mb-3">Path 1 &mdash; Product</p>
              <h3 className="text-2xl md:text-3xl font-serif font-normal tracking-[0.03em] text-stone-900 mb-4">Pillar</h3>
              <p className="text-stone-600 leading-relaxed mb-6 flex-1">Our legal intelligence platform.</p>
              <span className="text-sm font-medium text-stone-900 underline underline-offset-4 group-hover:text-stone-600 transition-colors">See features &rarr;</span>
            </button>
          </BlurFade>
          <BlurFade delay={0.15} inView className="flex">
            <button
              onClick={() => { trackCTAClick("two_paths", "AI Integration"); smoothScroll("ai-integration") }}
              className="text-left w-full bg-white border border-stone-200/60 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer group flex flex-col"
            >
              <div className="inline-flex items-center justify-center rounded-xl bg-stone-100 p-3 mb-5 w-fit">
                <Workflow className="h-7 w-7 text-stone-700" />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono mb-3">Path 2 &mdash; Service</p>
              <h3 className="text-2xl md:text-3xl font-serif font-normal tracking-[0.03em] text-stone-900 mb-4">AI Transformation</h3>
              <p className="text-stone-600 leading-relaxed mb-6 flex-1">A 4 &ndash; 6 week engagement to procure and implement AI into your team&apos;s workflow.</p>
              <span className="text-sm font-medium text-stone-900 underline underline-offset-4 group-hover:text-stone-600 transition-colors">How it works &rarr;</span>
            </button>
          </BlurFade>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Pillar Features */}
        <section className="flex flex-col gap-5 py-32">
          <div className="flex flex-col items-center gap-4" id="pillar">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono">Path 1 &mdash; For law firms</p>
            <h2 className="text-5xl md:text-7xl text-center text-stone-900 font-serif font-normal tracking-[0.05em] leading-[1.05]">Pillar</h2>
            <p className="text-stone-600 text-center max-w-2xl leading-relaxed">Legal intelligence platform - form filling and article generation</p>
          </div>

          <div className="flex flex-col items-center h-full gap-32 mt-12">
            <BlurFade delay={0.1} inView>
              <TwoBox
                title="Fill out repetitive forms in minutes, not hours"
                description="Upload an affidavit and generate a completed B14 form in minutes. Spend your time reviewing, not filling in fields."
                videoUrl="demos/form-b14-demo.mp4"
                alt={false}
                ctaHref="/form-filler"
                theme="light"
                />
            </BlurFade>

           <BlurFade delay={0.1} inView>
             <TwoBox
              title="Fill out any form using your own templates"
              description="Upload your organisation's form templates once, then auto-fill them from any source document — affidavits, briefs, or contracts."
              videoUrl="demos/form-filler.mp4"
              ctaHref="/form-filler"
              theme="dark"
              />
           </BlurFade>

           <BlurFade delay={0.1} inView>
             <TwoBox
              title="Get better AI answers with smarter prompts"
              description="Turn a rough question into a detailed, structured prompt — so every AI query returns more precise and actionable answers for your legal research."
              videoUrl="demos/magic-prompt-demo-cropped.mp4"
              alt={false}
              theme="light"
              />
           </BlurFade>

            <BlurFade delay={0.1} inView>
              <TwoBox
              title="Generate articles from the latest court judgments"
              description="Draft publish-ready articles from recent court judgments across Singapore — helping your firm stay visible, authoritative, and ahead of the latest legal developments."
              videoUrl="demos/cropped-trimed-article-gen.mp4"
              theme="dark"
              />
            </BlurFade>
          </div>
        </section>

        {/* Divider: Pillar → AI Integration */}
        <div className="flex justify-center py-12">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
        </div>

        {/* AI Integration section */}
        <section className="py-24" id="ai-integration">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono">Path 2 &mdash; For every other business</p>
            <h2 className="text-5xl md:text-7xl text-center text-stone-900 font-serif font-normal tracking-[0.05em] leading-[1.05]">AI Integration</h2>
            <p className="text-stone-600 text-center max-w-2xl leading-relaxed">A 4 &ndash; 6 week engagement to integrate production-ready AI into your team&apos;s workflow.</p>
          </div>

          {/* 4-phase grid */}
          <div className="relative max-w-5xl mx-auto px-4 mt-20">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-7 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-stone-200" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              {phases.map((p, idx) => (
                <BlurFade key={p.title} delay={0.1 + idx * 0.1} inView>
                  <div className="text-center relative">
                    <div className="h-14 w-14 rounded-full bg-stone-900 text-white flex items-center justify-center mx-auto mb-5 relative z-10">
                      <p.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-stone-900 mb-3">{p.title}</h3>
                    <p className="text-sm text-stone-500 leading-relaxed">{p.description}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <button
              onClick={() => { trackCTAClick("ai_integration", "Book a Consultation"); smoothScroll("contact") }}
              className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 rounded-full text-base font-medium transition-colors duration-300 cursor-pointer"
            >
              Book a consultation
            </button>
          </div>
        </section>

        {/* Divider: AI Integration → Security */}
        <div className="flex justify-center py-12">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
        </div>

        {/* Mid-page CTA */}
        <div className="text-center py-24">
          <p className="text-stone-500 text-lg leading-relaxed">
            Whether you need Pillar off-the-shelf or a custom integration, we&apos;d love to talk.{" "}
            <button onClick={() => { trackCTAClick("mid_page", "Talk to us"); smoothScroll("contact") }} className="text-stone-900 hover:text-stone-700 underline underline-offset-4 font-medium transition-colors cursor-pointer">
              Talk to us &rarr;
            </button>
          </p>
        </div>

        {/* Security & Privacy — Minimal centered layout */}
        <section className="relative w-full bg-secondary-dark py-32 px-6 md:px-8 rounded-3xl overflow-hidden" id="security">
          <DotPattern className="opacity-[0.06] text-white/20" />
          <div className="container mx-auto relative max-w-3xl">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
              <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono">Trust & Security</p>
              <h2 className="text-4xl md:text-5xl text-white font-serif font-normal tracking-[0.05em] leading-[1.05]">Security &amp; Privacy</h2>
              <p className="text-stone-400 max-w-xl leading-relaxed">
                We&apos;re built for sensitive documents. Your data runs on a SOC 2 compliant foundation — encrypted in transit and at rest, with access restricted to authorised users only.
              </p>
            </div>

            <div className="space-y-10">
              {points.map((p, index) => (
                <BlurFade key={p.title} delay={0.1 + index * 0.05} inView>
                  <div className="flex items-start gap-5">
                    <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 mt-0.5">
                      <p.icon className="h-5 w-5 text-white/60" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-white mb-2">{p.title}</h3>
                      <p className="text-sm text-stone-400 leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="/security" className="text-sm font-medium text-white/80 hover:text-white underline underline-offset-4 transition-colors duration-300">
                Learn more about our security &rarr;              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-32 relative">
          <DotPattern className="opacity-[0.06] text-stone-400" />
          <div className="relative">
            <div className="flex flex-col items-center gap-4 text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono">Common Questions</p>
              <h2 className="text-4xl md:text-5xl text-stone-900 font-serif font-normal tracking-[0.05em] leading-[1.05]">
                FAQ
              </h2>
              <p className="max-w-2xl text-base md:text-lg text-stone-600 leading-relaxed">
                Quick answers to the questions we hear most often.
              </p>
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full" onValueChange={(value) => {
                if (value) {
                  const idx = parseInt(value.replace("item-", ""))
                  trackFAQOpened(faqs[idx].q, idx)
                }
              }}>
                {faqs.map((item, idx) => (
                  <AccordionItem
                    key={item.q}
                    value={`item-${idx}`}
                    className="border-stone-200 px-4 md:px-6"
                  >
                    <AccordionTrigger className="text-left font-sans text-lg md:text-xl text-stone-700 hover:text-stone-900">
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
      </div>

      <CTABanner />

      <div className="container mx-auto px-4">
        <TeamBanner />

        <div className="flex justify-center py-12">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
        </div>

        <PartnerLeadForm/>
      </div>

      <Footer/>
    </div>
  )
}
