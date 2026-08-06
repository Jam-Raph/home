"use client"

import Navbar from "@/components/ui/navbar"
import Image from "next/image"
import {
  ChevronDown,
  Presentation,
  Compass,
  Boxes,
  Inbox,
  FolderOpen,
  PenLine,
  Save,
  BadgeCheck,
  Trophy,
  Terminal,
  Users,
  Clock,
  Search,
  MessagesSquare,
  FileText,
  Server,
  Milestone,
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
import { DotPattern } from "@/components/ui/dot-pattern"
import { smoothScroll } from "@/lib/utils"
import { trackCTAClick, trackFAQOpened } from "@/lib/analytics"
import { SectionTracker } from "@/components/ui/section-tracker"

const supportedBy = [
  { alt: "NVIDIA Inception Program", src: "/logos/nvidia-inception.png", width: "w-24 md:w-44" },
  { alt: "SMU Logo", src: "/logos/smu.png", width: "w-16 md:w-28" },
  { alt: "Tech Nation", src: "/logos/tech-nation.png", width: "w-24 md:w-44" },
  { alt: "BLOCK71", src: "/logos/block71.jpg", width: "w-24 md:w-44" },
]

const workingWith = [
  { alt: "KGP Logo", src: "/logos/KGP.png", width: "w-28 md:w-44" },
  { alt: "Delta Logo", src: "/logos/Delta.png", width: "w-28 md:w-44" },
  { alt: "Hanbridge Institute", src: "/logos/hanbridge.png", width: "w-28 md:w-44" },
]

export default function Home() {
  const architectPoints = [
    {
      title: "Certified by Anthropic, not self-taught",
      description:
        "We sat and passed Anthropic's own Claude Certified Architect exam (CCA-F). The way we build with Claude is the way Anthropic teaches it.",
      icon: BadgeCheck,
    },
    {
      title: "Law and engineering at the same table",
      description:
        "SMU Law and ex-GovTech engineering on one team. The person who understands the matter sits next to the person building the workflow, not a lawyer briefing a vendor.",
      icon: Users,
    },
    {
      title: "We've won legal tech competitions together",
      description:
        "1st place at the SMU Legal Innovation & Tech Competition 2025 and 1st runner-up in 2024, won by the same team and judged on legal work rather than a generic AI demo.",
      icon: Trophy,
    },
    {
      title: "We have built and deployed real solutions",
      description:
        "We've created and maintained bespoke AI software that runs in production: Claude Cowork and Claude Code pointed at real matters and real file stores, and custom software where those can't reach.",
      icon: Terminal,
    },
  ];
  const advisoryPoints = [
    {
      title: "It starts with a free 1-hour consult",
      description:
        "No commitment. The hour is for us to learn the firm: your practice areas, how you work, and how a matter generally moves through the office.",
      icon: Clock,
    },
    {
      title: "Then we interview the people doing the work",
      description:
        "We sit with whoever actually runs the workflow and walk it end to end, step by step, exactly as it happens today.",
      icon: MessagesSquare,
    },
    {
      title: "We identify where AI applies",
      description:
        "From the interviews we mark the steps AI can take on, and say plainly where it can't, including when the answer is to leave a workflow alone.",
      icon: Search,
    },
    {
      title: "You get a product requirements sheet",
      description:
        "Once we've scoped what we're building, it's written down before any work starts: what it does, what it touches, and what done looks like.",
      icon: FileText,
    },
  ];
  const buildPoints = [
    {
      title: "For when Cowork and Claude Code can't do it",
      description:
        "Some workflows don't fit an off-the-shelf agent. That's the line where Build starts: custom software, written for the job.",
      icon: Boxes,
    },
    {
      title: "Same discovery, aimed at software",
      description:
        "The same consult, interviews, and product requirements sheet as Advisory, scoped for something we build and then maintain.",
      icon: Search,
    },
    {
      title: "Whatever stack the job needs",
      description:
        "Other models where Claude isn't the right fit, a real backend, and custom MCP servers into systems with no official connector: MYOB, LEAP, Talenox, in-house platforms.",
      icon: Server,
    },
    {
      title: "Milestone model, maintained after",
      description:
        "You pay per completed, scoped milestone, for the work that lands rather than for time spent. We keep it running afterwards on an optional retainer, cancel anytime.",
      icon: Milestone,
    },
  ];
  const offerings = [
    {
      icon: Presentation,
      eyebrow: "Start here",
      title: "Workshop",
      description:
        "3-hour, hands-on AI workshop for one team, with your firm's workflows baked in.",
      cta: "What's inside",
      target: "workshop",
      featured: true,
    },
    {
      icon: Compass,
      eyebrow: "Path 2",
      title: "Advisory",
      description:
        "We interview your team, find where AI fits, and get your existing Claude plan running the workflow.",
      cta: "How it works",
      target: "advisory",
      featured: false,
    },
    {
      icon: Boxes,
      eyebrow: "Path 3",
      title: "Build",
      description:
        "Custom AI software for the workflows Claude Cowork and Claude Code can't do on their own.",
      cta: "How it works",
      target: "build",
      featured: false,
    },
  ];
  const workshopContents = [
    {
      title: "AI fluency",
      description:
        "How LLMs actually work, so you can raise the accuracy of what comes out and be confident.",
    },
    {
      title: "Deep dive into Claude",
      description:
        "When a chat window is enough, and when the job needs Cowork, pointed at your SharePoint matter folder, editing in place with formatting intact.",
    },
    {
      title: "Case study",
      description:
        "One real job end to end: an email and your firm template in, a finished letter of engagement saved back to the matter folder.",
      linkToPractice: true,
    },
  ];
  const practiceSteps = [
    {
      icon: Inbox,
      title: "Scope of work lands",
      description: "A scope of work arrives in the inbox, exactly as it does today.",
    },
    {
      icon: FolderOpen,
      title: "Template is pulled",
      description: "Cowork pulls your letter of engagement template straight from SharePoint.",
    },
    {
      icon: PenLine,
      title: "Drafted in house style",
      description: "The draft comes back in your firm's voice, using your resources and conventions.",
    },
    {
      icon: Save,
      title: "Saved for review",
      description: "It lands in the matter folder for a human to check and sign off.",
    },
  ];
  const faqs = [
    {
      q: "Who is the workshop for?",
      a: "One team, up to eight people, in a single three-hour session. It works best when the room shares a workflow: a litigation team, a corporate secretarial team, a back-office function. We build a custom Claude skill from your pre-workshop brief, so your team is working on your own material from the start, not on a generic example.",
    },
    {
      q: "What do we walk away with?",
      a: "A system that runs, not a slide deck. By the end of the session your team has taken one real job end to end and has a working setup they can use the next morning. Post-workshop support is included so it doesn't stall the week after.",
    },
    {
      q: "Do we need to be a law firm?",
      a: "No. We're grounded in legal practice, but the workshop suits any admin-heavy professional services team: accounting, corporate secretarial, compliance, or a back-office function inside a larger firm. If the work is rule-bound and document-heavy, it fits.",
    },
    {
      q: "What is a Claude Certified Architect?",
      a: "It's Anthropic's own certification for designing and deploying production Claude systems (CCA-F), a proctored exam covering agent architecture, orchestration, and deployment. We sat it and passed. In practice it means we build the way Anthropic teaches it, rather than the way a vendor deck describes it.",
    },
    {
      q: "Can you work with our existing tools?",
      a: "Yes, that's the point. We integrate with what you already run: SharePoint, Outlook, Word, and the wider M365 stack. The aim is to move you from experimenting with AI to using it in live matters and operations, without asking your team to adopt yet another platform.",
    },
    {
      q: "Do the AI models used retain or learn from customer data?",
      a: "No. The models we use do not retain or learn from any input or output. All processing is ephemeral: once a request completes, the data is discarded and never used for training.",
    },
    {
      q: "How do you handle PDPA?",
      a: "PDPA-awareness is built into how we scope and configure every engagement: folder scoping, access controls, audit trails, and team training, rather than a policy bolted on at the end. We're Singapore-based and build for the systems Singapore firms actually run.",
    },
    {
      q: "What if we need more than a workshop?",
      a: "That's Advisory and Build, two separate paths that start the same way. Both begin with a free 1-hour consult to learn the firm, followed by interviews with the people who actually run the workflow, and a product requirements sheet once we've scoped what we're building. Advisory then gets the Claude plan you already have doing that workflow, through Claude skills and orientation for your team. Build is for when Claude Cowork or Claude Code can't perform the workflow at all: custom AI software, potentially on other models, with a backend and custom MCP servers, which we build and then maintain. Both run on a milestone model: you pay only for completed, scoped work.",
    },
    {
      q: "How fast do you respond?",
      a: "We typically respond within 24 hours.",
    },
  ];


  return (
    <div className="mx-auto flex flex-col h-full">
      {/* Navbar */}
      <Navbar/>
      <SectionTracker sectionId="hero" />
      <SectionTracker sectionId="partners" />
      <SectionTracker sectionId="proof" />
      <SectionTracker sectionId="architects" />
      <SectionTracker sectionId="offerings" />
      <SectionTracker sectionId="workshop" />
      <SectionTracker sectionId="in-practice" />
      <SectionTracker sectionId="advisory" />
      <SectionTracker sectionId="build" />
      <SectionTracker sectionId="faq" />
      <SectionTracker sectionId="contact" />

      {/* Hero: full viewport with hero-2.png background */}
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
              Explore AI safely with us
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
                onClick={() => { trackCTAClick("hero", "Book a workshop"); smoothScroll("contact") }}
              >
                Book a workshop
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
            <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap max-w-5xl mx-auto px-4">
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
      <section id="proof" className="relative w-full bg-surface-dark-card py-32" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
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
                    {stat.unit && (
                      <span className="text-2xl md:text-3xl font-medium text-brand-primary">
                        {stat.unit}
                      </span>
                    )}
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
                &ldquo;Delta Law found the session really helpful for bringing out Claude and LLM effectiveness&rdquo;
              </p>
              <div className="mt-10">
                <p className="text-sm font-medium text-white tracking-wide uppercase">Joshua</p>
                <p className="text-xs text-stone-400 mt-1">Partner, Delta Law Corporation</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Why us: Claude Certified Architects */}
      <div className="container mx-auto px-4">
        <section className="relative w-full bg-secondary-dark py-32 px-6 md:px-8 rounded-3xl overflow-hidden mt-24" id="architects">
          <DotPattern className="opacity-[0.06] text-white/20" />
          <div className="container mx-auto relative max-w-4xl">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
              <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono">Why us</p>
              <h2 className="text-4xl md:text-5xl text-white font-serif font-normal tracking-[0.05em] leading-[1.05]">
                Claude Certified Architects and lawyers, on one team
              </h2>
              <p className="text-stone-400 max-w-xl leading-relaxed">
                Plenty of people will talk to you about AI. We hold Anthropic&apos;s own certification for building with Claude, we come from legal practice, and we&apos;ve won legal tech competitions as the same team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {architectPoints.map((p, index) => (
                <BlurFade key={p.title} delay={0.1 + index * 0.05} inView>
                  <div className="flex items-start gap-5">
                    <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 mt-0.5">
                      <p.icon className="h-5 w-5 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-white mb-2">{p.title}</h3>
                      <p className="text-sm text-stone-400 leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Team */}
      <div className="container mx-auto px-4">
        <TeamBanner />

        <div className="flex justify-center py-12">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
        </div>
      </div>

      {/* Offerings overview */}
      <section className="container mx-auto px-4 py-24" id="offerings">
        <BlurFade delay={0.05} inView>
          <div className="flex flex-col items-center gap-4 text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono">What we offer</p>
            <h2 className="text-4xl md:text-5xl text-stone-900 font-serif font-normal tracking-[0.05em] leading-[1.05]">Fluency first. Working systems second.</h2>
            <p className="text-stone-600 max-w-2xl leading-relaxed">Most teams start with the workshop. Advisory and Build are there when one workflow needs more than three hours.</p>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {offerings.map((o, idx) => (
            <BlurFade key={o.title} delay={0.1 + idx * 0.05} inView className="flex">
              <button
                onClick={() => { trackCTAClick("offerings", o.title); smoothScroll(o.target) }}
                className={`text-left w-full rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer group flex flex-col ${
                  o.featured
                    ? "bg-surface-warm border-2 border-brand-primary/30"
                    : "bg-white border border-stone-200/60"
                }`}
              >
                <div className={`inline-flex items-center justify-center rounded-xl p-3 mb-5 w-fit ${o.featured ? "bg-brand-primary/15" : "bg-stone-100"}`}>
                  <o.icon className={`h-7 w-7 ${o.featured ? "text-brand-primary" : "text-stone-700"}`} />
                </div>
                {o.featured ? (
                  <span className="inline-flex w-fit items-center rounded-full bg-brand-primary/15 text-brand-primary text-[10px] uppercase tracking-[0.25em] font-mono font-medium px-3 py-1 mb-3">
                    {o.eyebrow}
                  </span>
                ) : (
                  <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono mb-3">{o.eyebrow}</p>
                )}
                <h3 className="text-2xl md:text-3xl font-serif font-normal tracking-[0.03em] text-stone-900 mb-4">{o.title}</h3>
                <p className="text-stone-600 leading-relaxed mb-6 flex-1">{o.description}</p>
                <span className="text-sm font-medium text-stone-900 underline underline-offset-4 group-hover:text-stone-600 transition-colors">{o.cta} &rarr;</span>
              </button>
            </BlurFade>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Inside the workshop */}
        <section className="flex flex-col gap-5 py-32" id="workshop">
          <div className="flex flex-col items-center gap-4">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono">Path 1 &middot; Start here</p>
            <h2 className="text-5xl md:text-7xl text-center text-stone-900 font-serif font-normal tracking-[0.05em] leading-[1.05]">The Workshop</h2>
            <p className="text-stone-600 text-center max-w-2xl leading-relaxed">Not your standard prompt engineering workshop.</p>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-mono mt-2">3 hours &middot; one team &middot; up to 8 people</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
            {workshopContents.map((c, idx) => (
              <BlurFade key={c.title} delay={0.1 + idx * 0.05} inView className="flex">
                <div className="w-full bg-white border border-stone-200/60 rounded-2xl p-8 md:p-10 flex flex-col">
                  <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono mb-4">0{idx + 1}</p>
                  <h3 className="text-2xl font-serif font-normal tracking-[0.03em] text-stone-900 mb-4">{c.title}</h3>
                  <p className="text-stone-600 leading-relaxed flex-1">{c.description}</p>
                  {c.linkToPractice && (
                    <button
                      onClick={() => { trackCTAClick("workshop", "See it step by step"); smoothScroll("in-practice") }}
                      className="text-left text-sm font-medium text-stone-900 underline underline-offset-4 hover:text-stone-600 transition-colors cursor-pointer mt-6"
                    >
                      See it step by step &darr;
                    </button>
                  )}
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* In practice: one LOE, end to end */}
        <section className="py-24" id="in-practice">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono">See it in practice</p>
            <h2 className="text-4xl md:text-5xl text-center text-stone-900 font-serif font-normal tracking-[0.05em] leading-[1.05]">One letter of engagement, end to end</h2>
            <p className="text-stone-600 text-center max-w-2xl leading-relaxed">AI works with your current style and resources. A human is always in the loop.</p>
          </div>

          {/* 4-step grid */}
          <div className="relative max-w-5xl mx-auto px-4 mt-20">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-7 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-stone-200" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              {practiceSteps.map((p, idx) => (
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
              onClick={() => { trackCTAClick("in_practice", "Book a workshop"); smoothScroll("contact") }}
              className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 rounded-full text-base font-medium transition-colors duration-300 cursor-pointer"
            >
              Book a workshop
            </button>
          </div>
        </section>

        {/* Divider: Workshop → Advisory */}
        <div className="flex justify-center py-12">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
        </div>

        {/* Advisory */}
        <section className="py-24" id="advisory">
          <div className="flex flex-col items-center gap-4">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono">Path 2 &middot; Put your Claude plan to work</p>
            <div className="inline-flex items-center justify-center rounded-xl bg-stone-100 p-3">
              <Compass className="h-7 w-7 text-stone-700" />
            </div>
            <h2 className="text-5xl md:text-7xl text-center text-stone-900 font-serif font-normal tracking-[0.05em] leading-[1.05]">Advisory</h2>
            <p className="text-stone-600 text-center max-w-2xl leading-relaxed">Bring us one workflow that hurts. We&apos;ll interview the people who run it, then get the Claude plan you already pay for doing the job, with the skills and orientation your team needs to keep it going.</p>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-mono mt-2">Free 1-hour consult &middot; milestone model</p>
          </div>

          <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {advisoryPoints.map((p, idx) => (
              <BlurFade key={p.title} delay={0.1 + idx * 0.05} inView>
                <div className="flex items-start gap-5">
                  <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 mt-0.5">
                    <p.icon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-stone-900 mb-2">{p.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <button
              onClick={() => { trackCTAClick("advisory", "Book a free consultation"); smoothScroll("contact") }}
              className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 rounded-full text-base font-medium transition-colors duration-300 cursor-pointer"
            >
              Book a free consultation
            </button>
          </div>
        </section>

        {/* Divider: Advisory → Build */}
        <div className="flex justify-center py-12">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
        </div>

        {/* Build */}
        <section className="py-24" id="build">
          <div className="flex flex-col items-center gap-4">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono">Path 3 &middot; When it&apos;s time to build</p>
            <div className="inline-flex items-center justify-center rounded-xl bg-stone-100 p-3">
              <Boxes className="h-7 w-7 text-stone-700" />
            </div>
            <h2 className="text-5xl md:text-7xl text-center text-stone-900 font-serif font-normal tracking-[0.05em] leading-[1.05]">Build</h2>
            <p className="text-stone-600 text-center max-w-2xl leading-relaxed">When Claude Cowork or Claude Code can&apos;t perform the workflow, we build the software that can, and we maintain it afterwards.</p>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-mono mt-2">Custom AI software &middot; milestone model</p>
          </div>

          <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {buildPoints.map((p, idx) => (
              <BlurFade key={p.title} delay={0.1 + idx * 0.05} inView>
                <div className="flex items-start gap-5">
                  <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 mt-0.5">
                    <p.icon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-stone-900 mb-2">{p.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <button
              onClick={() => { trackCTAClick("build", "Scope a build"); smoothScroll("contact") }}
              className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 rounded-full text-base font-medium transition-colors duration-300 cursor-pointer"
            >
              Scope a build
            </button>
          </div>
        </section>

        {/* Divider: Build → mid-page CTA */}
        <div className="flex justify-center py-12">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
        </div>

        {/* Mid-page CTA */}
        <div className="text-center py-24">
          <p className="text-stone-500 text-lg leading-relaxed">
            Whether you want a workshop for the team or help with one workflow, we&apos;d love to talk.{" "}
            <button onClick={() => { trackCTAClick("mid_page", "Talk to us"); smoothScroll("contact") }} className="text-stone-900 hover:text-stone-700 underline underline-offset-4 font-medium transition-colors cursor-pointer">
              Talk to us &rarr;
            </button>
          </p>
        </div>

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
        <PartnerLeadForm/>
      </div>

      <Footer/>
    </div>
  )
}
