import Navbar from "@/components/ui/navbar";
import { Footer } from "@/app/footer";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Jam & Raph and Pillar — engagements, data privacy, supported jurisdictions, templates, and document handling.",
  path: "/faq",
});

const faqs = [
  {
    question: "Do I need to be a law firm to work with Jam & Raph?",
    answer:
      "No. Pillar is built for legal teams, but our AI Integration service works with any business looking to embed production-ready AI into their workflows.",
  },
  {
    question: "How does an AI Integration engagement work?",
    answer:
      "Typically a 4 – 6 week engagement covering discovery, design, build, and handoff. We map your workflows, prototype options, ship a production-ready integration, and document everything so your team fully owns the result.",
  },
  {
    question: "What kinds of workflows are best suited for AI Integration?",
    answer:
      "Repetitive document processing, structured data extraction, knowledge retrieval, and any task where AI can save your team meaningful hours per week. We scope this together in the discovery phase.",
  },
  {
    question: "Do the AI models used retain or learn from customer data?",
    answer:
      "No. The models we use do not retain or learn from any input or output. All processing is ephemeral — once a request completes, the data is discarded and never used for training.",
  },
  {
    question: "Where does the article generator get its sources from?",
    answer:
      "The article generator pulls sources from eLitigation (Singapore), giving your firm coverage of the latest court judgments.",
  },
  {
    question: "How does Pillar use my documents?",
    answer:
      "Documents are stored in our database (Supabase) and passed to Claude's file API for processing. They are removed after processing unless the feature requires persistent storage. Access is restricted by Row Level Security, so only authorised users can view or modify their own documents.",
  },
  {
    question: "Which jurisdictions does Pillar support?",
    answer:
      "Our form-filling features work with any jurisdiction's templates. The article generator currently pulls judgments from eLitigation (Singapore), with more jurisdictions planned.",
  },
  {
    question: "Can I use my own form templates?",
    answer:
      "Yes. You can upload any form template your organisation uses. Pillar's AI analyses the fields and auto-fills them from your source documents.",
  },
  {
    question: "What happens if the AI can't find a value in my source document?",
    answer:
      "Pillar lists any fields it couldn't extract as 'unknown fields' so you know exactly what to review and fill in manually. Nothing is silently skipped.",
  },
  {
    question: "Can I query my uploaded documents with natural language?",
    answer:
      "Yes. Our Projects feature lets you upload documents and ask questions in plain English. Pillar uses legal-domain embeddings to find the most relevant passages and provides answers with citations back to the source.",
  },
  {
    question: "Can I share templates and projects with my team?",
    answer:
      "Yes. Templates and projects can be shared at the organisation level, so your whole team can reuse them across cases.",
  },
];

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Navbar />
      <JsonLd data={faqJsonLd} />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24 text-stone-800">
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
            Frequently asked questions
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Answers to common questions about Jam &amp; Raph and Pillar. Still have
            a question?{" "}
            <a href="/#contact" className="underline hover:text-stone-900">
              Get in touch
            </a>
            .
          </p>
        </header>

        <div className="space-y-10">
          {faqs.map((faq) => (
            <section key={faq.question}>
              <h2 className="text-lg font-medium text-stone-900 mb-2">
                {faq.question}
              </h2>
              <p className="leading-relaxed text-stone-600">{faq.answer}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
