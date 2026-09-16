# jr-home — commercial model & claims register

> The reference-stack template puts a credit/cost model here. jr-home is not a metered product, so this
> doc is adapted to the thing that actually needs governing on a consultancy site: **what the copy is
> allowed to assert.** Every number, credential, and client name below is a claim a prospect can check.

## 1. Where prices are allowed to appear

**Nowhere on the rendered page.** Not in the hero, not in the offerings cards, not in the FAQ. This is
deliberate: the page sells the shape of the engagement and routes every CTA to `#contact`.

Prices appear in **`/llms.txt` only**, so an agent researching on a prospect's behalf gets a straight
answer. Consequence to be aware of: an agent can quote a figure the page never shows.

Commercial *terms* are not prices and may appear on the page: "free 1-hour consult", "milestone model",
"optional support retainer, cancel anytime", "written scope before any billable hour".

## 2. The model, as stated in `/llms.txt`

| Path | Price | Basis |
|---|---|---|
| Workshop | S$2,800 flat, up to 8 participants (~S$360 pax) | 3 hours + post-workshop support |
| Advisory · consultation | Free | 1 hour |
| Advisory | S$960 per day, or S$120 per hour | rates are the billing basis; **delivery is on milestones** |
| Build | Milestone model, per completed scoped job | per workflow |
| Support retainer | Optional, cancel anytime | monthly |

All figures SGD. Anthropic seat and usage costs pass through at cost plus 10% admin.

The **"What others charge"** comparison table leans on the S$120/hr figure. If Advisory ever drops
hourly rates, that table has to be rewritten, not just edited.

**Advisory vs Build** is a definitional claim, not a price: both start with the same discovery (free
1-hour consult → interviews with the people who run the workflow → product requirements sheet). Advisory
puts the firm's **existing Claude plan** to work through skills and orientation. Build is **custom AI
software** for the workflows Cowork and Claude Code cannot perform — potentially other models, a
backend, custom MCP servers — built and maintained.

## 3. Claims register

### May be claimed

| Claim | Basis |
|---|---|
| Claude Certified Architects (CCA-F) | Sat and passed Anthropic's proctored certification. Use the acronym as given; do not expand the "F". |
| Law background / SMU Law | Jamison (CEO) is **currently studying law at SMU; he is not a qualified lawyer**. Say "law background" or "SMU Law"; never "lawyer(s)" or "legal practice" for the team. |
| 1st place, SMU Legal Innovation & Tech Competition 2025 | In the awards grid with a link. |
| 1st runner-up, SMU Legal Innovation & Tech 2024 | Same. Claimed as "the same team" — that pairing is the moat. |
| 2nd place, SMU LIT Hackathon 2026, $300 SGD prize | In the awards grid with a link (LinkedIn post <https://lnkd.in/p/gEUZjMD2>). Named "SMU LIT Hackathon" on the event's own stage signage and prize cheque, distinct from the "SMU Legal Innovation & Tech Competition" 2024/2025 entries above; do not assume it is the same event without confirming with the founders. |
| Bangkok Business Challenge 2026 (Sasin), Finalist | Label was corrected from "Top 6 Finalist" to "Finalist". |
| SMU Hult Prize 2026, 1st runner-up · NTU x Base Web3, 1st place | In the awards grid. |
| Cambridge Hack the Law 2026, Clifford Chance track: winner | In the awards grid with two links: the organiser's winners page <https://hackthelaw-cambridge.com/hackathon-2026/> and the LinkedIn post. The organiser page is the primary source and carries a "Winner of Clifford Chance Challenge" card for the team. **No prize money; do not invent one** — this is now third-party confirmed, not just a founders' instruction: the organiser page pays cash only for overall 1st/2nd/3rd and Audience Favourite, and challenge winners get none. Keep the "won as the same team" moat sentence scoped to SMU LIT 2024/2025 unless the founders confirm it: the organiser page lists the Cambridge roster as Jamison, Raphael, En Hao Tew and Qirui Huang, which is **not** the SMU LIT roster, so "same pairing" would be true where "same team" would be false. |
| NVIDIA Inception, Tech Nation, BLOCK71, SMU IIE | Supporter logo row / llms.txt credentials. |
| Clients: KGP, Delta Law, Hanbridge | Logo row. Delta Law also gives the one testimonial. |
| Showcased at LegalTech GoWhere (MinLaw × SAL), July 2026 | llms.txt only. |
| 80% less admin time · 2 workshops delivered · 3+ firms | Stats band. |
| SOC 2 compliant infrastructure, industry best practices | `/security`. Property of the cloud vendors, not of jam&raph. |
| SSO / RBAC / MFA where the client's stack supports it | `/security`, confirmed true for custom builds. |
| Audit logging + human sign-off before anything leaves the system | `/security`, confirmed. |
| Models do not retain or train on client data | FAQ and `/security`. |
| PDPA-aware throughout | Framed as scoping practice, never as certification. |

### Removed, do not reintroduce

| Claim | Why it went |
|---|---|
| **Claude Partner Network membership** | Removed 6 Aug at the founders' instruction. CCA-F is the only credential to state. |
| **"Lawyers" on the team / "we come from legal practice"** | Corrected 6 Aug: Jamison is still studying law and is not admitted. The defensible claim is "law background". |
| **EY** as a client | Removed 5 Aug, logo deleted. |
| **Oon & Bazul** as a client | Removed 6 Aug. |
| Penetration testing, vulnerability assessments | Not done; removed from `/security` rather than softened. |
| Automated backups, point-in-time recovery, 24/7 monitoring, incident-response SLAs | Same. |
| Per-tenant isolation, private buckets, row-level security | Pillar-era product claims; meaningless for bespoke builds. |
| Anything Pillar | The product is not sold here any more. |

### Never claim without a source

Certified headcount. A certification date beyond "2026". A partner tier. Team size beyond the ~7 in
llms.txt. Any compliance certification held by jam&raph itself rather than inherited from a vendor.
**No Anthropic or Claude logo may be rendered** — no licensed asset exists. Typographic treatment only.

## 4. When a claim changes

It is almost never in one place. Grep the whole repo for the figure and the phrasing, then check:
`app/page.tsx` (section arrays *and* `faqs[]`), `app/layout.tsx` (JSON-LD FAQ mirror + Organization
description), `app/llms.txt/route.ts` (path section, pricing table, comparison table, FAQ answers),
`app/partner-lead-form.tsx` (the benefits list), `components/ui/team-banner.tsx` (awards),
`components/ui/stats-banner.tsx`, `app/footer.tsx`, `app/security/page.tsx`.

The 45-minute → 1-hour consult change touched seven places across four files. Assume that scale.
