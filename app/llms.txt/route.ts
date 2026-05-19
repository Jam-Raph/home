import { NextResponse } from "next/server";

const content = `# Jam & Raph

> Singapore AI integration practice helping professional services and corporate back-office teams adopt Claude as a working tool, not a strategy slide.

Jam & Raph (jamraph.com) is a Singapore-based AI integration practice. We scope, prototype, ship, and measure Claude-powered workflows for law firms, corporate secretaries, corporate service providers, paralegals, and finance teams. Our flagship product, Pillar, is a legal intelligence platform for Singapore law firms. We are vendor-agnostic above Claude and do not sell decks.

## Company

- [Home](https://jamraph.com/): Overview of Jam & Raph, services, partners, team, and contact form.
- [Security](https://jamraph.com/security): Security posture — TLS 1.3, AES-256, SOC 2 cloud, SAML/SSO, private storage, expiring signed URLs.
- [Form Filler](https://jamraph.com/form-filler): Pillar Form Filler — auto-generates court-ready Singapore legal forms (e.g. B14 affidavit) with ~94% time reduction.

## Services

- AI use case audit (S$5,000–S$10,000): two-week diagnostic producing a ranked list of automatable workflows with effort and ROI estimates.
- Ad-hoc consulting (S$120/hr): hourly engagements with mockups and email correspondence at no charge. Lowest-friction entry point for COOs and finance heads.
- Workshop + integration (mid-tier): team workshop followed by Claude integration into one or two priority workflows, priced as a fixed-scope deliverable.
- Phase 1 setup (S$45,000–S$75,000): full bespoke implementation for larger enterprise law firm engagements.
- Managed service retainer (S$8,000–S$15,000/month): monthly office hours, new use case onboarding, governance and adoption tracking.
- EDG grant support: up to 50% offset on bespoke consulting via SAC-certified RMC partner.

## Product: Pillar

- Legal intelligence platform for Singapore law firms.
- Stack: FastAPI + Next.js 15 + Supabase (Postgres + pgvector) + Celery + Anthropic Claude + Voyage AI (voyage-law-2 embeddings).
- Flagship workflow: Form Filler — court-ready forms generated in 2–10 minutes.
- Pricing: SGD 380 per lawyer per month.

## Target Market

- Corporate secretaries, paralegals, corporate service providers, administrative staff, finance and bookkeeping teams.
- Singapore law firms (mid-sized, where the engagement is right-sized).
- Buyers are typically operations partners, COOs, finance heads, and office managers.

## Contact

- Website: https://jamraph.com
- Co-founders: Raphael (CTO, tech/product) and Jamison (business/operations, litigation background).
- Singapore-based. Contact form available on the home page.
`;

export async function GET() {
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
