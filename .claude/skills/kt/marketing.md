# jr-home — positioning & funnel

> The reference template treats this as a GTM plan for a new product. Here it is narrower and more
> useful: **what the site is trying to do to whoever lands on it**, and the constraints that follow.
> The company's wider GTM is not in this repo.

## 1. Who it is for

Primary: a **partner, practice manager, or COO at a Singapore law firm or professional-services firm**
(10–100 people) who has heard AI will change their work, has possibly bought a subscription that gets
used for summaries, and cannot tell which vendor is real. Admin-heavy, rule-bound, document-heavy work
is the qualifier — corporate secretarial, compliance, accounting and back-office teams fit as well as
litigation and corporate practices.

Secondary, and treated as a first-class reader: **an AI agent doing the research on their behalf.**
That is what `/llms.txt` exists for.

Not for: consumers, engineering teams shopping for a dev shop, or firms wanting an off-the-shelf legal
AI product (the site says explicitly that those are products to buy, not to commission).

## 2. The argument the page makes, in order

1. **Hero** — "Exploring AI safely with you", the reassurance frame. Not a feature claim.
2. **Partners** — who already works with us, before any assertion about ourselves.
3. **Proof** — 80% less admin time, workshops delivered, firms served, plus the Delta Law quote.
4. **Architects** — the moat. Certified (CCA-F) *and* lawyers *and* competition winners *and* shipped
   real software. Four legs, because any one alone is a claim anyone could make.
5. **Team** — faces, then the awards grid as evidence for leg three.
6. **Offerings** — three doors, Workshop featured.
7. **Workshop → In practice** — what happens in the room, then one letter of engagement end to end so
   the abstract becomes concrete.
8. **Advisory → Build** — the two follow-on paths, now clearly distinguished.
9. **FAQ** — the objections, including the two that block procurement (data retention, PDPA).
10. **CTA banner → contact form.**

The sequence is deliberate: **evidence before assertion, assertion before offer, offer before ask.**
Anything inserted mid-page should respect that order.

## 3. Conversion

One conversion event: the contact form (`#contact`). Every CTA routes there via `smoothScroll`, and
each fires `cta_clicked` with the section id as `cta_location` — so the funnel can be read as "which
part of the argument closed them". Keep that property when adding a CTA.

The funnel in PostHog: `section_viewed` (reach) → `cta_clicked` (intent) → `contact_form_started`
(engagement) → `contact_form_submitted` (conversion), with `contact_form_error` as leakage. `faq_opened`
is the objection signal — a spike on one question is a content bug, not a curiosity.

There is no email capture, no newsletter, no chat widget, and no lead scoring. Leads land in Telegram
and are worked by hand.

## 4. Discoverability

- **Structured data.** `Organization` → `Service` (workshop) → `FAQPage` in `app/layout.tsx`. The FAQ
  node is the one that earns SERP real estate, which is why the byte-identical rule in
  `architecture.md` §6 matters commercially and not just tidily.
- **`/llms.txt`.** The full brief: positioning, the three paths with prices, what we do not build,
  industries served, stack, credentials, team, clients, and ~20 FAQ answers. Written to be quoted
  verbatim by an agent. When the page changes, this changes.
- **Keyword surface** sits in the copy itself: Singapore, PDPA, SharePoint / Outlook / Word / M365,
  letter of engagement, corporate secretarial, Claude Cowork, Claude Code, MCP servers.
- No blog, no sitemap.xml, no robots.txt, no OG image are committed. All four are open opportunities.

## 5. Tone

Plain, specific, and willing to say no. The copy names what it will not do ("we do not rebuild
off-the-shelf SaaS", "we do not sell autonomous agents in the first six months", "including doing
nothing") because refusal is the credibility device for this audience. Concrete artefacts beat
adjectives: a letter of engagement saved back to the matter folder, not "streamlined workflows".

House style, enforced: no em dashes; no blue; no pricing on the page; no rendered Anthropic or Claude
logo; British spelling ("organisation", "productised"); sentence case in body copy, serif display for
headings, uppercase mono for eyebrows.
