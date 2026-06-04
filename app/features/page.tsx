import Navbar from "@/components/ui/navbar";
import { Footer } from "@/app/footer";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Features & Engagement Paths",
  description:
    "Three productised paths — Workshop, Advisory, and Build — plus Pillar's legal automation features: B14 form filling, article drafting from court judgments, custom templates, and AI legal research.",
  path: "/features",
});

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pillar",
  applicationCategory: "LegalApplication",
  operatingSystem: "Web",
  description:
    "Singapore-focused legal automation that auto-fills B14 court forms, drafts articles from court judgments with verbatim citations, supports custom templates, and runs AI legal research that cites primary sources.",
  url: `${SITE_CONFIG.domain}/features`,
  offers: {
    "@type": "Offer",
    priceCurrency: "SGD",
    description: "Pricing on request",
  },
};

const paths = [
  {
    name: "01 / Workshop",
    price: "S$200 per participant",
    detail:
      "A 3-hour hands-on session for up to 8 participants, with a custom Claude skill built upfront from a pre-workshop questionnaire and ready to demo on the day. Includes one week of post-workshop support.",
  },
  {
    name: "02 / Advisory",
    price: "S$120 per hour",
    detail:
      "A free 45-minute consultation, a written scope sign-off before any billable hour, then build the workflow with Claude — online or onsite. A fixed-fee Process Audit (S$3,600–S$5,400) is also available.",
  },
  {
    name: "03 / Build",
    price: "from S$4,800",
    detail:
      "Productised Workflow Builds (one named process, from S$4,800) and Skill Packs (3–5 coherent Claude skills, S$5,500–S$8,500), with custom MCP servers where official connectors don't exist. Optional support retainer from S$240 per month.",
  },
];

const pillarFeatures = [
  {
    name: "B14 court form drafting",
    detail:
      "Auto-fills B14 court forms from affidavits and source documents, with verbatim citations back to the source.",
  },
  {
    name: "Article drafting from court judgments",
    detail:
      "First-draft articles from Singapore court judgments, with case citations preserved exactly. Sources pull from eLitigation.",
  },
  {
    name: "Custom templates",
    detail:
      "Upload any firm-specific document template; Pillar analyses the fields and auto-fills them from your source documents.",
  },
  {
    name: "AI legal research",
    detail:
      "A research assistant that cites primary sources — statutes and cases — verbatim, with answers linked back to the source.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={softwareJsonLd} />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24 text-stone-800">
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
            Features &amp; engagement paths
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Jam &amp; Raph ships working AI in two ways: consulting engagements that
            build and govern Claude workflows for your team, and Pillar, our legal
            automation product. Pick the path that fits how your team works today.
          </p>
        </header>

        <section className="mb-14">
          <h2 className="font-serif text-2xl text-stone-900 mb-6">
            The three engagement paths
          </h2>
          <div className="space-y-8">
            {paths.map((path) => (
              <article key={path.name}>
                <h3 className="text-lg font-medium text-stone-900">
                  {path.name} — <span className="text-stone-600">{path.price}</span>
                </h3>
                <p className="mt-2 leading-relaxed text-stone-600">{path.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-stone-500">
            All figures in SGD. Anthropic seat and usage costs pass through at cost
            plus 10% admin.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl text-stone-900 mb-6">
            Pillar — legal automation product
          </h2>
          <div className="space-y-8">
            {pillarFeatures.map((feature) => (
              <article key={feature.name}>
                <h3 className="text-lg font-medium text-stone-900">{feature.name}</h3>
                <p className="mt-2 leading-relaxed text-stone-600">
                  {feature.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <p className="leading-relaxed text-stone-600">
            Learn more about{" "}
            <a href="/about" className="underline hover:text-stone-900">
              who we are
            </a>
            , read the{" "}
            <a href="/faq" className="underline hover:text-stone-900">
              FAQ
            </a>
            , or{" "}
            <a href="/#contact" className="underline hover:text-stone-900">
              book a demo
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
