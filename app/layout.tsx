import type { Metadata } from "next";
import "@fontsource/playfair-display/400.css";
import { Toaster } from "sonner";
import { Suspense } from "react";
import { PHProvider } from "./posthog-provider";
import { PostHogPageview } from "./posthog-pageview";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jam & Raph",
  description: "AI integration for modern businesses — through Pillar, our legal intelligence platform, or a bespoke engagement.",
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
                  logo: "https://jamraph.com/logos/pillar-logo.png",
                  description: "AI integration for modern businesses — through Pillar, our legal intelligence platform, or a bespoke engagement.",
                  foundingDate: "2024",
                  sameAs: ["https://www.linkedin.com/company/jamandraph/"],
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Pillar",
                  applicationCategory: "LegalApplication",
                  operatingSystem: "Web",
                  description: "AI-powered legal workflow automation for modern law firms.",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "SGD",
                    description: "Contact for pricing",
                  },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Do I need to be a law firm to work with Jam & Raph?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Pillar is built for legal teams, but our AI Integration service works with any business looking to embed production-ready AI into their workflows.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How does an AI Integration engagement work?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Typically a 4 – 6 week engagement covering discovery, design, build, and handoff. We map your workflows, prototype options, ship a production-ready integration, and document everything so your team fully owns the result.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What kinds of workflows are best suited for AI Integration?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Repetitive document processing, structured data extraction, knowledge retrieval, and any task where AI can save your team meaningful hours per week. We scope this together in the discovery phase.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Do the AI models used retain or learn from customer data?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. The models we use do not retain or learn from any input or output. All processing is ephemeral — once a request completes, the data is discarded and never used for training.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Where does the article generator get its sources from?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "The article generator pulls sources from eLitigation (Singapore), giving your firm coverage of the latest court judgments.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How does Pillar use my documents?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Documents are stored in our database (Supabase) and passed to Claude's file API for processing. They are removed after processing unless the feature requires persistent storage. Access is restricted by Row Level Security, so only authorised users can view or modify their own documents.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Which jurisdictions does Pillar support?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Our form-filling features work with any jurisdiction's templates. The article generator currently pulls judgments from eLitigation (Singapore), with more jurisdictions planned.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can I use my own form templates?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can upload any form template your organisation uses. Pillar's AI analyses the fields and auto-fills them from your source documents.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What happens if the AI can't find a value in my source document?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Pillar lists any fields it couldn't extract as 'unknown fields' so you know exactly what to review and fill in manually. Nothing is silently skipped.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can I query my uploaded documents with natural language?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Our Projects feature lets you upload documents and ask questions in plain English. Pillar uses legal-domain embeddings to find the most relevant passages and provides answers with citations back to the source.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can I share templates and projects with my team?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Templates and projects can be shared at the organisation level, so your whole team can reuse them across cases.",
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
