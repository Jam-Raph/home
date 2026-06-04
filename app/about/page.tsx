import Navbar from "@/components/ui/navbar";
import { Footer } from "@/app/footer";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Jam & Raph is a Singapore-based AI consultancy of Claude Certified Architects. We build custom Claude skills, MCP connectors, and governed AI workflows for admin-heavy professional-services teams.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24 text-stone-800">
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
            What is Jam &amp; Raph?
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Jam &amp; Raph is a Singapore-based AI consultancy founded in 2025. We
            design, build, and govern production Claude workflows for admin-heavy
            professional-services firms — and we run Pillar, our legal automation
            product. Our positioning is practical, scalable AI, priced per outcome:
            we ship working tools, not strategy decks. The first deliverable is
            always a runnable Claude skill or workflow, and every engagement is
            scoped in writing before any billable hour begins.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="font-serif text-2xl text-stone-900 mb-4">
            Who is Jam &amp; Raph for?
          </h2>
          <p className="leading-relaxed text-stone-600 mb-4">
            We focus deliberately on admin-heavy professional services — work that
            is rule-bound, document-heavy, and consumes time that could be billable.
            The teams we serve include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone-600">
            <li>Corporate service providers — company secretarial, incorporation, compliance</li>
            <li>Accounting and bookkeeping firms — Xero, QuickBooks, and MYOB back-office workflows</li>
            <li>Secretarial practices — document drafting, filing automation, client communications</li>
            <li>Paralegal and compliance teams — intake, triage, regulatory deadline tracking</li>
            <li>Back-office operations inside larger firms, and law firms via Pillar and bespoke engagements</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl text-stone-900 mb-4">
            How does Jam &amp; Raph work?
          </h2>
          <p className="leading-relaxed text-stone-600 mb-4">
            We build directly on Anthropic&apos;s stack and the official Claude
            connector set. Engagements come in three productised paths that can
            stand alone or feed each other:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone-600">
            <li>
              <strong>Workshop</strong> — a 3-hour hands-on session with a custom
              Claude skill built upfront and ready to demo.
            </li>
            <li>
              <strong>Advisory</strong> — a free consultation, a written scope
              sign-off, then build the workflow with Claude hour by hour.
            </li>
            <li>
              <strong>Build</strong> — productised Workflow Builds and Skill Packs,
              with custom MCP servers where official connectors don&apos;t exist.
            </li>
          </ul>
          <p className="leading-relaxed text-stone-600 mt-4">
            See the{" "}
            <a href="/features" className="underline hover:text-stone-900">
              features and engagement paths
            </a>{" "}
            for detail.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl text-stone-900 mb-4">
            Why Jam &amp; Raph?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-stone-600">
            <li>
              <strong>Claude Certified Architects.</strong> Anthropic-trained, with
              direct access to product documentation, the connector roadmap, and
              Anthropic engineering. We are also an NVIDIA Inception member.
            </li>
            <li>
              <strong>Hands-on, not strategy decks.</strong> We map workflows, build
              skills, train your team, and write the governance docs.
            </li>
            <li>
              <strong>Singapore-grounded.</strong> Built for the back-office stack
              Singapore firms actually run, PDPA-aware throughout.
            </li>
            <li>
              <strong>Clear scope, no lock-in.</strong> Written scope before any
              billable hour, fixed-price deliverables, month-to-month retainers.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-stone-900 mb-4">
            Recognition
          </h2>
          <p className="leading-relaxed text-stone-600">
            Claude Certified Architects · NVIDIA Inception member · SMU Legal
            Innovation &amp; Tech Competition 2025 winner · Tech Nation UK Expansion
            Discovery Programme · BLOCK71 affiliate. Have a question?{" "}
            <a href="/faq" className="underline hover:text-stone-900">
              Read the FAQ
            </a>{" "}
            or{" "}
            <a href="/#contact" className="underline hover:text-stone-900">
              get in touch
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
