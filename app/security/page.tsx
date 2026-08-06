"use client"

import Navbar from "@/components/ui/navbar"
import { Footer } from "@/app/footer"
import { BlurFade } from "@/components/ui/blur-fade"
import { Shield, Key, Lock, Server, Users, FileCheck, Globe, ShieldCheck } from "lucide-react"
import { DotPattern } from "@/components/ui/dot-pattern"
import Link from "next/link"

const features = [
  {
    icon: ShieldCheck,
    title: "SOC 2 compliant infrastructure",
    description: "Everything we build runs on SOC 2 compliant cloud infrastructure, encrypted with TLS 1.3 in transit and AES-256 at rest.",
  },
  {
    icon: Key,
    title: "Your identity, your access rules",
    description: "Single sign-on through your identity provider, role-based access, and MFA, configured to the access rules your firm already runs.",
  },
  {
    icon: Shield,
    title: "Private by default",
    description: "The models we use never retain or learn from your data. Processing is ephemeral: once a request completes, the data is gone.",
  },
]

const protectionSections = [
  {
    icon: Server,
    title: "Deployment and ownership",
    items: [
      "Deployed into your own cloud tenancy, or hosted and maintained by us, decided at scoping rather than assumed",
      "You own the software we write for you and the data it touches",
      "Handover comes with documentation, so the system is not dependent on us to stay understood",
      "Third-party services are named in the product requirements sheet before we build, never introduced quietly",
    ],
  },
  {
    icon: Users,
    title: "Authentication and access",
    items: [
      "SAML SSO through your identity provider, where your stack supports it",
      "Role-based access control (RBAC) across the systems we build",
      "Multi-factor authentication (MFA) support",
      "Least privilege throughout: elevated permissions stay on the backend and are never exposed to the browser",
    ],
  },
  {
    icon: Lock,
    title: "Data handling",
    items: [
      "Encrypted in transit (TLS 1.3) and at rest (AES-256)",
      "Access scoped to the folders and matters a workflow actually needs",
      "AI models never retain or learn from your data; processing is ephemeral",
      "PDPA-aware by design: folder scoping and access rules are set during scoping, not bolted on at the end",
    ],
  },
  {
    icon: FileCheck,
    title: "Audit and human sign-off",
    items: [
      "Decision logging on AI output that touches a client document",
      "Access events are logged and reviewable",
      "A billable professional signs off before anything leaves the system",
      "Model and prompt versions are recorded alongside the decision they produced",
    ],
  },
]

export default function SecurityPage() {
  return (
    <div className="mx-auto flex flex-col h-full">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <DotPattern className="opacity-[0.06] text-stone-400" />
        <div className="relative container mx-auto px-4 text-center max-w-3xl">
          <BlurFade delay={0.05} inView>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono mb-6">Trust &amp; Security</p>
            <h1 className="text-5xl sm:text-7xl font-serif font-normal tracking-[0.05em] text-stone-900">
              Built on Trust.<br />Secure by Design.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
              We write custom software for firms handling their most sensitive work. It runs on SOC 2 compliant infrastructure and follows industry best practices. How it is deployed, where it runs, and who can reach what are agreed with you at scoping rather than handed down.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Three Feature Blocks */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <BlurFade key={feature.title} delay={0.1 + index * 0.05} inView className="flex">
                  <div className="bg-white border border-stone-200/60 rounded-2xl p-8 text-center flex flex-col">
                    <div className="inline-flex items-center justify-center rounded-xl bg-stone-100 p-3 mb-4">
                      <Icon className="h-7 w-7 text-stone-700" />
                    </div>
                    <h3 className="text-xl font-serif font-normal text-stone-900 mb-3">{feature.title}</h3>
                    <p className="text-stone-500 leading-relaxed">{feature.description}</p>
                  </div>
                </BlurFade>
              )
            })}
          </div>
        </div>
      </section>

      {/* How we build it */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-[0.05em] text-stone-900">
                How We Build It
              </h2>
              <p className="mt-4 text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed">
                Security is not a feature we add at the end. It is decided while the workflow is still being scoped. These are the defaults every engagement starts from.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {protectionSections.map((section, index) => {
              const Icon = section.icon
              return (
                <BlurFade key={section.title} delay={0.15 + index * 0.05} inView>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="rounded-lg bg-stone-100 p-2">
                        <Icon className="h-5 w-5 text-stone-700" />
                      </div>
                      <h3 className="text-xl font-serif font-normal text-stone-900">{section.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-stone-600 leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-stone-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </BlurFade>
              )
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-12">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
      </div>

      {/* Callout Blocks */}
      <section className="relative py-24">
        <DotPattern className="opacity-[0.06] text-stone-400" />
        <div className="container mx-auto px-4 max-w-5xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <BlurFade delay={0.1} inView className="flex">
              <div className="bg-white border border-stone-200/60 rounded-2xl p-8 md:p-10 lg:p-12 flex flex-col">
                <div className="inline-flex items-center justify-center rounded-xl bg-stone-100 p-3 mb-4">
                  <ShieldCheck className="h-7 w-7 text-stone-700" />
                </div>
                <h3 className="text-2xl font-serif font-normal text-stone-900 mb-3">Least privilege, by default</h3>
                <p className="text-stone-600 leading-relaxed">
                  Software we write gets the narrowest access that lets the workflow run: the folders it needs, the systems it needs, and nothing else. Elevated permissions stay on the backend, never in the browser. When a workflow needs more reach, that is a scoping decision you make, in writing.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.15} inView className="flex">
              <div className="bg-white border border-stone-200/60 rounded-2xl p-8 md:p-10 lg:p-12 flex flex-col">
                <div className="inline-flex items-center justify-center rounded-xl bg-stone-100 p-3 mb-4">
                  <Globe className="h-7 w-7 text-stone-700" />
                </div>
                <h3 className="text-2xl font-serif font-normal text-stone-900 mb-3">Where it runs is your call</h3>
                <p className="text-stone-600 leading-relaxed">
                  Some firms want the software inside their own cloud tenancy, under their own procurement and data sovereignty rules. Others would rather we host and maintain it. Both are normal. We settle it at scoping and tell you plainly which services sit in the path and where the data goes.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* We Work With You */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <BlurFade delay={0.1} inView>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono mb-6">Partnership</p>
            <h2 className="text-3xl md:text-4xl font-serif font-normal tracking-[0.05em] text-stone-900 mb-6">
              We work with you
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Security is a partnership. We work collaboratively with firms to address specific security concerns or compliance requirements, whether it&apos;s a custom security review, a DPA, or aligning with your internal policies.
            </p>
            <p className="text-stone-500 leading-relaxed">
              If your IT or compliance team has requirements of their own, bring them into the scoping conversation. It is far easier to build to them than to retrofit them.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <BlurFade delay={0.1} inView>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono mb-6">Get in touch</p>
            <h2 className="text-3xl md:text-4xl font-serif font-normal tracking-[0.05em] text-stone-900 mb-4">
              Have security questions?
            </h2>
            <p className="text-stone-500 text-lg mb-8 leading-relaxed">
              We&apos;re happy to walk your IT and compliance teams through how a build is deployed, what it can reach, and what gets logged.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 rounded-full text-base font-medium transition-colors duration-300"
            >
              Get in touch
            </Link>
          </BlurFade>
        </div>
      </section>

      <Footer />
    </div>
  )
}
