import type { Metadata } from "next";
import "@fontsource/playfair-display/400.css";
import { Toaster } from "sonner";
import { Suspense } from "react";
import { PHProvider } from "./posthog-provider";
import { PostHogPageview } from "./posthog-pageview";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jam & Raph",
  description: "Claude Certified Architects running hands-on AI workshops for professional services teams in Singapore, plus advisory and fixed-scope workflow builds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-white overflow-x-clip">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Jam & Raph",
                  url: "https://jamraph.com",
                  logo: "https://jamraph.com/J%26R%20logo.png",
                  description: "Claude Certified Architects running hands-on AI workshops for professional services teams in Singapore, plus advisory and fixed-scope workflow builds.",
                  foundingDate: "2024",
                  award: [
                    "Finalist, Bangkok Business Challenge 2026 (Sasin)",
                    "1st place, SMU Legal Innovation and Tech 2025",
                    "Winner, Cambridge Hack the Law 2026 (Clifford Chance track)",
                    "1st runner up, SMU Hult Prize 2026",
                    "1st place, NTU x Base Web3",
                    "1st runner up, SMU Legal Innovation and Tech 2024",
                    "2nd place, SMU LIT Hackathon 2026",
                  ],
                  sameAs: ["https://www.linkedin.com/company/jamandraph/"],
                },
                {
                  "@type": "Service",
                  name: "AI Fluency Workshop",
                  provider: { "@type": "Organization", name: "Jam & Raph" },
                  serviceType: "AI training and workflow design",
                  areaServed: "Singapore",
                  description:
                    "A 3-hour, hands-on AI workshop for one team of up to 8 people, with the firm's own workflows baked in. Covers AI fluency, a deep dive into Claude, and one real job taken end to end.",
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Who is the workshop for?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "One team, up to eight people, in a single three-hour session. It works best when the room shares a workflow: a litigation team, a corporate secretarial team, a back-office function. We build a custom Claude skill from your pre-workshop brief, so your team is working on your own material from the start, not on a generic example.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What do we walk away with?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "A system that runs, not a slide deck. By the end of the session your team has taken one real job end to end and has a working setup they can use the next morning. Post-workshop support is included so it doesn't stall the week after.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Do we need to be a law firm?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. We come from a law background, but the workshop suits any admin-heavy professional services team: accounting, corporate secretarial, compliance, or a back-office function inside a larger firm. If the work is rule-bound and document-heavy, it fits.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What is a Claude Certified Architect?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "It's Anthropic's own certification for designing and deploying production Claude systems (CCA-F), a proctored exam covering agent architecture, orchestration, and deployment. We sat it and passed. In practice it means we build the way Anthropic teaches it, rather than the way a vendor deck describes it.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can you work with our existing tools?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, that's the point. We integrate with what you already run: SharePoint, Outlook, Word, and the wider M365 stack. The aim is to move you from experimenting with AI to using it in live matters and operations, without asking your team to adopt yet another platform.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Do the AI models used retain or learn from customer data?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. The models we use do not retain or learn from any input or output. All processing is ephemeral: once a request completes, the data is discarded and never used for training.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How do you handle PDPA?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "PDPA-awareness is built into how we scope and configure every engagement: folder scoping, access controls, audit trails, and team training, rather than a policy bolted on at the end. We're Singapore-based and build for the systems Singapore firms actually run.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What if we need more than a workshop?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "That's Advisory and Build, two separate paths that start the same way. Both begin with a free 1-hour consult to learn the firm, followed by interviews with the people who actually run the workflow, and a product requirements sheet once we've scoped what we're building. Advisory then gets the Claude plan you already have doing that workflow, through Claude skills and orientation for your team. Build is for when Claude Cowork or Claude Code can't perform the workflow at all: custom AI software, potentially on other models, with a backend and custom MCP servers, which we build and then maintain. Both run on a milestone model: you pay only for completed, scoped work.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How fast do you respond?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "We typically respond within 24 hours.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
        <PHProvider>
          <Suspense fallback={null}>
            <PostHogPageview />
          </Suspense>
          {children}
          <Toaster richColors position="top-center" />
        </PHProvider>
      </body>
    </html>
  );
}
