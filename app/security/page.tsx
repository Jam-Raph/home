"use client"

import Navbar from "@/components/ui/navbar"
import { Footer } from "@/app/footer"
import { BlurFade } from "@/components/ui/blur-fade"
import { Shield, Key, Lock, Server, Users, FileCheck, Globe, ShieldCheck } from "lucide-react"
import { DotPattern } from "@/components/ui/dot-pattern"
import Link from "next/link"

const features = [
  {
    icon: Lock,
    title: "End-to-end encryption",
    description: "TLS 1.3 in transit, AES-256 at rest. All data encrypted within a SOC 2 compliant cloud environment.",
  },
  {
    icon: Key,
    title: "SAML & SSO",
    description: "Enterprise authentication with single sign-on through your identity provider. Centralised access management for your entire team.",
  },
  {
    icon: Shield,
    title: "Private by default",
    description: "Documents stored in private buckets with signed, expiring URLs. AI models never retain or learn from your data.",
  },
]

const protectionSections = [
  {
    icon: Lock,
    title: "Data protection",
    items: [
      "Documents stored in private buckets with signed, expiring URLs",
      "AI models never retain or learn from your data",
      "All processing is ephemeral — data is not persisted beyond sessions",
      "Logical data isolation per tenant",
    ],
  },
  {
    icon: Server,
    title: "Infrastructure",
    items: [
      "Built on SOC 2 compliant infrastructure via Supabase and AWS",
      "Automated backups with point-in-time recovery",
      "24/7 uptime monitoring and incident response",
      "Regular vulnerability assessments and penetration testing",
    ],
  },
  {
    icon: Users,
    title: "Authentication & access",
    items: [
      "SAML SSO integration with your identity provider",
      "Role-based access control (RBAC) across all resources",
      "Multi-factor authentication (MFA) support",
      "Comprehensive audit logging for all access events",
    ],
  },
  {
    icon: FileCheck,
    title: "Compliance",
    items: [
      "SOC 2 compliant foundation through Supabase and AWS",
      "Data processing agreements available on request",
      "Configurable data retention policies",
      "Incident response plan with defined SLAs",
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
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono mb-6">Trust & Security</p>
            <h1 className="text-5xl sm:text-7xl font-serif font-normal tracking-[0.05em] text-stone-900">
              Built on Trust.<br />Secure by Design.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
              Law firms trust us with their most sensitive work. We earn that trust through rigorous security practices, a zero-compromise approach to data protection, and full transparency on how your data is stored and processed.
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

      {/* How We Protect Your Data */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-[0.05em] text-stone-900">
                How We Protect Your Data
              </h2>
              <p className="mt-4 text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed">
                Security is not a feature we added — it is the foundation everything is built on. Every layer of our stack is designed to protect your documents and your clients.
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
                <h3 className="text-2xl font-serif font-normal text-stone-900 mb-3">Zero trust architecture</h3>
                <p className="text-stone-600 leading-relaxed">
                  Every request is verified. We apply the principle of least privilege across our entire infrastructure. Backend-only service roles ensure elevated permissions are never exposed to the browser. Row Level Security (RLS) on all database tables limits access by user and role.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.15} inView className="flex">
              <div className="bg-white border border-stone-200/60 rounded-2xl p-8 md:p-10 lg:p-12 flex flex-col">
                <div className="inline-flex items-center justify-center rounded-xl bg-stone-100 p-3 mb-4">
                  <Globe className="h-7 w-7 text-stone-700" />
                </div>
                <h3 className="text-2xl font-serif font-normal text-stone-900 mb-3">Data residency</h3>
                <p className="text-stone-600 leading-relaxed">
                  All data processing runs on SOC 2 compliant infrastructure via Supabase and AWS, with full compliance to local data sovereignty laws. We ensure your data stays where your firm needs it — with complete transparency on hosting locations and data flows.
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
              Security is a partnership. We work collaboratively with firms to address specific security concerns or compliance requirements — whether it&apos;s a custom security review, a DPA, or aligning with your internal policies.
            </p>
            <p className="text-stone-500 leading-relaxed">
              We conduct regular vulnerability assessments and continuously update our processes and systems to adapt to evolving threats and industry standards. Our security posture is never static.
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
              We&apos;re happy to discuss our security architecture or answer questions from your IT and compliance teams.
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
