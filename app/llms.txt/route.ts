import { NextResponse } from "next/server";

const content = `# jam&raph

> Singapore-based AI consultancy. Claude Certified Architects, part of the Claude Partner Network. We run hands-on AI fluency workshops for professional-services teams, then design and build the workflows those teams run every day — inside the tools they already use. Three productised paths: Workshop, Advisory, Build. Singapore-grounded, PDPA-aware throughout.

---

## About

jam&raph is an AI consultancy founded in 2025 in Singapore. We move professional-services firms from "experimenting with AI" to "using LLMs in live matters and operations."

Our positioning is **fluency first, working systems second.** Every engagement ends with something the firm can actually run, not a slide deck. The first deliverable is always a working tool. Every engagement is scoped in writing before any billable hour begins.

We are **Claude Certified Architects** — we sat and passed Anthropic's own proctored certification for designing and deploying production Claude systems, and we are part of the **Claude Partner Network**, which gives us a direct line to the product team and the connector roadmap. We are also an **NVIDIA Inception** member.

We are not a reseller. SMU Law and ex-GovTech engineering sit on the same team.

---

## The problem we solve

The gap is implementation, not potential. Roughly **44% of legal tasks can be automated by AI today** (Minister for Law Edwin Tong SC, at the launch of MinLaw's GenAI Guide, March 2026) — but most firms capture almost none of it. Subscriptions get used for summaries. The real workflows stay manual.

The two things that block firms:

1. **Pilot and vendor fatigue.** With so many tools on the market, which is the right one for this firm and these workflows?
2. **No integration with what they already run.** AI that lives in a separate browser tab does not change how a matter gets done. The work has to happen inside SharePoint, Outlook, Word, and the wider M365 stack.

What we deliver against that: fluency with agentic tools — mainly Claude Cowork and Claude Code — applied to the firm's own matters, plus house-style prompts, firm-specific guardrails, and integrations into the systems already in place.

---

## The three paths

Pick the path that fits how the team works today. Each can stand alone or feed the next. Most teams start with the Workshop.

### 01 / Workshop — S$2,800 flat rate

- **3 hours, one team, up to 8 participants** (~S$360 per participant)
- **Custom Claude skill built upfront** from a pre-workshop brief — the team works on its own material from the start, not a generic example
- **Post-workshop support** included

Three things happen in the room:

- **AI fluency** — how LLMs actually work, so the team can raise the accuracy of what comes out and be confident enough to put it on an invoice
- **Deep dive into Claude** — when a chat window is enough, and when the job needs Cowork; Cowork pointed at a SharePoint matter folder, editing in place with formatting intact and saving back
- **Case study** — one real job end to end: an email and the firm's template in, a finished letter of engagement saved back to the matter folder

Worked example (a letter of engagement, start to finish): a scope of work lands in the inbox → Cowork pulls the LOE template from SharePoint → drafts in the firm's house style → saves to the matter folder for review. A human signs off before anything leaves the system.

### 02 / Advisory — S$960 per day, or S$120 per hour

- **Free 45-minute consultation**, no commitment
- We identify inefficiencies in the current workflow
- We discuss the IT and AI options honestly, including doing nothing
- We plan next steps
- **Written scope sign-off** before any billable hour
- **Handover** with documentation and next-phase opportunities

### 03 / Build — milestone model

Fixed-scope builds of named processes, plus prompt and skill packs teams run every day.

- One named, agreed-upon process at a time, with defined inputs and outputs
- Integrated with the tools the firm already runs
- **Milestone model** — the client pays only for completed, scoped jobs and tasks
- **Optional support retainer**, cancel anytime

Where a workflow touches a system without an official Anthropic connector (MYOB, LEAP, Talenox, in-house platforms), a custom MCP server is scoped as its own milestone.

---

## Pricing at a glance

| Path | Price | Timeline |
|---|---|---|
| Workshop | S$2,800 flat (up to 8 pax) | 3 hours + post-workshop support |
| Advisory · daily | S$960 per day | Per engagement |
| Advisory · hourly | S$120 per hour | Per engagement |
| Advisory · consultation | Free | 45 minutes |
| Build | Milestone model — per completed scoped job | Per workflow |
| Support retainer | Optional, cancel anytime | Monthly |

All figures in SGD. Anthropic seat and usage costs pass through at cost plus 10% admin.

---

## What others charge

| Service | jam&raph | Singapore market | Gap |
|---|---|---|---|
| Advisory, per hour | S$120 | S$400 – S$550 | ~75% below |
| 1–2 week audit | S$3,600 – S$5,400 | S$15,000 – S$30,000 | ~80% below |
| Three to five skills, one function | S$5,500 – S$8,500 | S$45,000 – S$90,000 | ~90% below |

*Sources: Pertama Partners, "AI Consultant Rates 2026", February 2026. Metronome Pricing Index, January 2026.*

---

## What we do not build

1. **We do not rebuild off-the-shelf SaaS products.** Vertical legal-AI tools, contract review products, accounting copilots — those are products. We help you decide whether to buy them.
2. **We do not build MCP servers for systems Anthropic already ships.** Anthropic publishes those. We help install and govern them.
3. **We do not sell autonomous agents in the first six months.** Agents need supervision, and the reliability work is not yet where a professional-services firm needs it to be.

---

## Industries and teams we serve

- **Law firms** — solos, boutiques, and mid-market firms; litigation, corporate, and practice support
- **Corporate service providers** — company secretarial, incorporation, compliance
- **Accounting and bookkeeping firms** — back-office automation, Xero / QuickBooks / MYOB workflows
- **Secretarial practices** — document drafting, filing automation, client communications
- **Paralegal and compliance teams** — intake, triage, regulatory deadline tracking
- **Back-office operations inside larger firms** — admin automation that puts hours back into senior-professional time

We are deliberately focused on **admin-heavy professional services** — the work that is rule-bound, document-heavy, and consumes time that could be billable.

Workflows we have already built and run: court forms (a 50-page affidavit becomes a filled court form in minutes), letters of engagement generated from a scope of work the moment it lands in the inbox, corporate secretarial share transfer forms filled from documents the firm already holds, and thought-leadership publications drafted in the practice's own voice.

---

## Tech stack and governance

We build directly on Anthropic's stack and the official Claude connector set:

- **Foundation model:** Claude (Anthropic, default)
- **Agentic tools:** Claude Cowork and Claude Code, pointed at the firm's real matters and file store
- **Skill format:** Markdown Claude skills, portable, owned by the client
- **Connectors:** Official MCP servers from Anthropic's enterprise release (Xero, QuickBooks, document management, e-signature, workflow systems). Custom MCP servers where official ones do not exist (MYOB, LEAP, Talenox, in-house systems).
- **Integration targets:** SharePoint, Outlook, Word, and the wider M365 stack
- **Deployment:** Cloud (customer's preferred — AWS, Azure, GCP) or self-host
- **Encryption:** TLS 1.3 in transit, AES-256 at rest
- **Compliance:** SOC 2 Type II inherited; PDPA-aware throughout
- **Auth:** SAML / SSO, MFA, RBAC, signed expiring URLs
- **Audit:** Decision logging on every AI output that touches a client document

For clients whose procurement cannot accept third-party SaaS in the critical path — regulators, UN agencies, sovereign clients — we deliver under our **RegMap AI reference architecture**: self-hostable, open-weight Llama-compatible, Apache 2.0, with Merkle-chained audit logs and verbatim citation guardrails.

---

## RegMap AI — our reference architecture

RegMap AI is our cross-border regulatory mapping project: mapping domestic legal provisions across ASEAN to the UN RDTII v2.1 framework with citation-anchored proof and human-in-the-loop sign-off.

It is the reference implementation of our three structural defences against AI risk:

1. **Verbatim citation guardrail.** Every AI quote must be a byte-for-byte substring of the source PDF. No match → finding dropped, never shown to the lawyer.
2. **Human-in-the-loop.** Every approved mapping is signed by a billable professional before it leaves the system.
3. **Merkle-chained audit log.** Every decision is hashed into a tamper-evident chain alongside the model and prompt versions live at sign-off.

When a client asks *"how do you do AI in legal without hallucinations?"* — we point them at RegMap AI.

---

## Locations and service area

- **Singapore (HQ)** — primary delivery centre, SMU and BLOCK71 ecosystem
- **United Kingdom** — Tech Nation Expansion Discovery Programme participant
- **Service area** — Singapore, Asia Pacific, UK; remote-first with periodic on-site time for engagements outside Singapore

---

## Why jam&raph

1. **Certified by Anthropic, not self-taught.** We sat and passed Anthropic's own Claude Certified Architect exam. The way we build with Claude is the way Anthropic teaches it.
2. **Claude Partner Network.** A direct line to the product team and early sight of the connector roadmap. When something breaks, we have the right people on speed dial.
3. **We build on the real tools.** Claude Cowork and Claude Code, pointed at your actual matters and your actual file store — not a sandbox demo.
4. **Law and engineering in one room.** SMU Law and ex-GovTech engineering on the same team. We are not a reseller putting a wrapper on someone else's tool.
5. **Clear scope, no lock-in.** Written scope agreed before any billable hour. Milestone-based Build work, no surprise invoices. Retainers cancellable anytime.

---

## Credentials and recognition

- **Claude Certified Architects** — Anthropic-certified (2026)
- **Claude Partner Network** — member
- **NVIDIA Inception** — member program for AI startups
- **Bangkok Business Challenge 2026 (Sasin)** — Finalist (USD 1,300 prize)
- **SMU Hult Prize 2026** — 1st runner-up (SGD 5,000); selected for Singapore Nationals
- **SMU Legal Innovation & Tech Competition 2025** — 1st place (SGD 1,500 prize)
- **SMU Legal Innovation & Tech Competition 2024** — 1st runner-up (SGD 2,500 prize)
- **NTU x Base Web3 Hackathon 2025** — 1st place (SGD 1,000 prize)
- **Clifford Chance Challenge, Cambridge** — hackathon winner
- **Tech Nation UK Expansion Discovery Programme** — selected participant
- **BLOCK71** — Singapore startup ecosystem affiliate
- **SMU Institute of Innovation & Entrepreneurship** — startup portfolio member
- **Showcased at** the LegalTech GoWhere Showcase, Ministry of Law × Singapore Academy of Law, July 2026

---

## Founders and team

- **Jamison Teng** — Co-founder & CEO. SMU Law. Primary contact: jamison.teng@jamraph.com
- **Raphael Lim** — Co-founder & CTO. Engineering and AI infrastructure lead. Ex-GovTech, NUS Computer Science.
- **Darren Sim** — Co-lead developer.
- Plus additional team members. ~7 people total.

---

## Selected clients

- KGP
- Delta Law Corporation
- Hanbridge Institute
- Oon & Bazul

**Testimonial:** "Delta Law found the session really helpful for bringing out Claude and LLM effectiveness." — Joshua, Partner, Delta Law Corporation

---

## Key facts

- **Founded:** 2025
- **Team size:** ~7
- **Headquarters:** Singapore
- **Service model:** Three productised paths — Workshop, Advisory, Build
- **Default foundation model:** Claude (Anthropic)
- **Results:** 80% less admin time on the workflows we automated in early pilots
- **Response time:** 24 hours

---

## Frequently asked questions

**Q: What does the workshop cost?**
A: **S$2,800 flat** for a 3-hour session with one team of up to 8 people — roughly S$360 per participant. We build a custom Claude skill from your pre-workshop brief beforehand, and post-workshop support is included.

**Q: Who is the workshop for?**
A: One team, up to eight people, in a single three-hour session. It works best when the room shares a workflow — a litigation team, a corporate secretarial team, a back-office function. Because we build a custom Claude skill from the pre-workshop brief, the team works on its own material from the start rather than a generic example.

**Q: What do we walk away with?**
A: A system that runs, not a slide deck. By the end of the session the team has taken one real job end to end and has a working setup it can use the next morning.

**Q: Do we need to be a law firm?**
A: No. We are grounded in legal practice, but the workshop suits any admin-heavy professional-services team — accounting, corporate secretarial, compliance, or a back-office function inside a larger firm. If the work is rule-bound and document-heavy, it fits.

**Q: Are you Anthropic / Claude certified?**
A: Yes. We are Claude Certified Architects — we sat and passed Anthropic's own proctored certification for designing and deploying production Claude systems, and we are part of the Claude Partner Network.

**Q: Can you work with our existing tools?**
A: Yes — that is the point. We integrate with what you already run: SharePoint, Outlook, Word, and the wider M365 stack. The aim is to move you from experimenting with AI to using it in live matters and operations, without asking the team to adopt yet another platform.

**Q: How does Advisory work?**
A: It starts with a **free 45-minute consultation**, no commitment. We identify inefficiencies in the current workflow, discuss the IT and AI options honestly — including doing nothing — and plan next steps. Thereafter S$960 per day or S$120 per hour, online or onsite, with written scope sign-off before any billable hour.

**Q: How does Build pricing work?**
A: On a **milestone model** — you pay only for completed, scoped jobs and tasks. We work one named, agreed-upon process at a time with defined inputs and outputs, integrated with the tools you already run. An optional support retainer is available afterwards, cancellable anytime.

**Q: How does that compare to other Singapore consultancies?**
A: Roughly **75–90% below the Singapore market.** Hourly advisory is S$120 vs market S$400–S$550. A 1–2 week audit is S$3,600–S$5,400 vs market S$15,000–S$30,000. A three-to-five-skill pack is S$5,500–S$8,500 vs market S$45,000–S$90,000. (Sources: Pertama Partners, "AI Consultant Rates 2026", February 2026; Metronome Pricing Index, January 2026.)

**Q: Do you offer a free consultation?**
A: Yes. Every Advisory engagement starts with a complimentary 45-minute consultation, no commitment.

**Q: Can you build for systems that don't have official Anthropic connectors yet?**
A: Yes. For systems without an official Anthropic MCP server — MYOB, LEAP, Talenox, in-house spreadsheets, firm-specific platforms — we build **custom MCP servers**. This is real engineering work, scoped as its own Build milestone.

**Q: Do you handle PDPA compliance?**
A: Yes. PDPA-awareness is built into how we scope and configure every engagement — folder scoping, access controls, audit trails, governance docs, and team training — rather than a policy bolted on at the end. We are Singapore-grounded; PDPA is not an afterthought.

**Q: Do the AI models used retain or learn from our data?**
A: No. The models we use do not retain or learn from any input or output. All processing is ephemeral — once a request completes, the data is discarded and never used for training.

**Q: Will you sell us an autonomous agent?**
A: Not in the first six months of the relationship. Agents need supervision, and the reliability work is not yet where a professional-services firm needs it to be. We will revisit when the reliability bar is met.

**Q: Do you rebuild SaaS products?**
A: No. If you need a contract review product, an accounting copilot, or a vertical legal-AI tool, those are products you should buy. We help you decide whether to buy them, and we help you wire them into your workflow once you have. We do not compete with off-the-shelf SaaS.

**Q: Will you build something Anthropic already ships?**
A: No. Anthropic publishes official MCP connectors for Xero, QuickBooks Online, and a growing set of enterprise systems. We install and govern those — we do not charge to rebuild what already ships.

**Q: Can you deploy AI inside our perimeter? We can't send data to third-party endpoints.**
A: Yes. Our RegMap AI reference architecture is self-hostable, runs on open-weight Llama, and ships under Apache 2.0. No SaaS dependencies in the critical path. Suitable for regulators, UN agencies, and sovereign clients.

**Q: How do you prevent AI hallucinations in legal or compliance work?**
A: Three structural defences. (1) **Verbatim citation guardrail** — the AI's quote must be a byte-for-byte substring of the source document, or the output is dropped. (2) **Human-in-the-loop sign-off** — every output is reviewed by a billable professional before it leaves the system. (3) **Merkle-chained audit log** — every decision is hashed into a tamper-evident chain along with the model and prompt versions live at sign-off.

**Q: Do you serve clients outside Singapore?**
A: Yes. Singapore is our primary delivery centre. We're actively expanding into the UK via the Tech Nation Expansion Discovery Programme. We serve clients across Asia Pacific from our Singapore base, remote-first with periodic on-site time.

**Q: How fast do you respond to enquiries?**
A: We typically respond within **24 hours**.

---

## Contact

- **Website:** https://jamraph.com
- **Email:** jamison.teng@jamraph.com · raphael.lim@jamraph.com
- **LinkedIn (company):** https://sg.linkedin.com/company/jamandraph
- **LinkedIn (CEO):** https://www.linkedin.com/in/jamisonteng/
- **Response time:** Within 24 hours

---

*jam&raph · Singapore · Claude Certified Architects · Claude Partner Network · NVIDIA Inception · Last updated: August 2026*
`;

export async function GET() {
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
