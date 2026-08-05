# Current progress — landing page repositioning

**Date:** 5 August 2026
**Branch:** `workshop-repositioning`
**Scope:** Move jamraph.com off the Pillar/AI-Integration pitch and onto the AI workshop.

---

## Why

The page sold **two paths**: Pillar (legal-intelligence SaaS) and a 4–6 week "AI Integration"
engagement. Neither is what the business leads with any more.

The current pitch — per `consulting/Handout - v2.pdf` (July 2026) and the MinLaw × SAL LegalTech
GoWhere showcase deck (28 July 2026) — is a **3-hour hands-on AI workshop** with the firm's own
workflows baked in, with Advisory and Build as follow-on paths. The differentiator is that the team
holds Anthropic's own **Claude Certified Architect** credential.

All page copy is drawn from those two documents, so the site now matches what prospects are already
being handed.

---

## What changed

### 1. EY removed
Out of the "Currently working with" logo row, out of the llms.txt client list, and
`public/logos/EY.png` deleted. Remaining clients: KGP, Delta, Hanbridge, Oon & Bazul.

### 2. Workshop is the stance

New page flow (`app/page.tsx`):

| # | Section id | State |
|---|---|---|
| 1 | `hero` | Reworded — "Explore AI safely with us", CTA "Book a workshop" |
| 2 | `partners` | EY removed |
| 3 | `proof` | Rewritten — new stats, Delta Law quote |
| 4 | `architects` | **NEW** — Claude Certified Architect moat |
| 5 | (team) | Liediana removed, subhead reworded |
| 6 | `offerings` | Replaces "Two paths" — 3 cards, Workshop featured |
| 7 | `workshop` | Replaces the Pillar section |
| 8 | `in-practice` | **NEW** — one LOE, end to end |
| 9 | `advisory-build` | Replaces "AI Integration" |
| 10 | `security` | Kept, one copy tweak (PDPA framing) |
| 11 | `faq` | Rewritten — all 8 Pillar Q&As gone |

- **Inside the workshop** is three cards: *AI fluency · Deep dive into Claude · Case study*. The case
  study card links down to the four-step LOE walkthrough.
- **One LOE, end to end**: scope of work lands in the inbox → Cowork pulls the template from
  SharePoint → drafts in house style → saves to the matter folder. "Human always in the loop."
- **No pricing anywhere on the page.** The free 45-minute consult and the milestone model stayed —
  those are commercial *terms*, not prices. Every CTA routes to `#contact`.

### 3. Pillar removed

Deleted: `app/form-filler/`, `public/demos/` (6 videos), `public/pillar-home.png`,
`public/supreme-court.png`, `components/ui/two-box.tsx`, and `Pillar.md` (a stray CLAUDE.md copied
from the Pillar product repo).

All 8 Pillar FAQs replaced with 9 workshop ones, mirrored exactly in the JSON-LD `FAQPage`.
The `SoftwareApplication` "Pillar" JSON-LD node is now a `Service` node for the workshop.

**Incidental fix:** the JSON-LD `logo` pointed at `logos/pillar-logo.png` — a file that has never
existed in `public/logos/`. Now `/J%26R%20logo.png` (percent-encoded, since crawlers consume it as a
literal URL).

### 4. The moat

New `#architects` band before the team, on `bg-secondary-dark` with `DotPattern`, gold
(`brand-primary`) accents. Four points: certified by Anthropic not self-taught · Claude Partner
Network · we build on the real tools (Cowork, Claude Code) · law and engineering in one room.

**Claims discipline:** no invented certified headcount, no certification date, no partner tier. **No
Anthropic or Claude logo is rendered** — no licensed asset exists. Typographic treatment only.

### Also
- Sorcha Boyce's quote removed (it read as product feedback on Pillar). Delta Law's quote stands
  alone, without an avatar — there is no headshot for Joshua in `public/headshots/`.
- Liediana removed from the team grid; three headshots now at `grid-cols-1 sm:grid-cols-3`.
- Stats: **80%** less admin time · **2** workshops delivered · **3+** firms. The stats component now
  conditionally renders the unit span so the unit-less "2" has no stray gap.

---

## Files touched

**Modified:** `app/page.tsx` · `app/layout.tsx` · `app/footer.tsx` · `app/partner-lead-form.tsx` ·
`app/llms.txt/route.ts` · `components/ui/navbar.tsx` · `components/ui/stats-banner.tsx` ·
`components/ui/cta-banner.tsx` · `components/ui/team-banner.tsx`

**Deleted:** `app/form-filler/page.tsx` · `components/ui/two-box.tsx` · `Pillar.md` ·
`public/demos/*` · `public/pillar-home.png` · `public/supreme-court.png` · `public/logos/EY.png` ·
`public/headshots/sorcha-boyce.jpeg` · `public/headshots/liediana.png`

**Untouched:** `app/security/page.tsx` (contained no Pillar references) · `lib/` ·
`app/api/form/route.ts` · `app/globals.css`

---

## Verification performed

- `npm run build` passes. `/form-filler` is off the route table and returns 404.
- Grep for `pillar` / `form-filler` / `EY` / `sorcha` / `liediana` across source **and** rendered
  HTML: zero hits.
- JSON-LD parses; its 9 FAQ entries match the rendered accordion exactly.
- All 11 section ids render, and every navbar target resolves to a section that exists.
- `npm run lint`: 12 problems, **all pre-existing** in `dot-pattern`, `animated-grid-pattern`, and
  `api/form`. None in any file touched here; `footer.tsx` has one fewer than before.

---

## Open items

1. **Visual QA not done.** The page was verified structurally (HTTP, rendered HTML, JSON-LD), not
   eyeballed in a browser. Worth checking the offerings grid and the new dark `#architects` band on
   mobile — those are the two new layouts.
2. **llms.txt kept its pricing, refreshed to the July handout.** The "no pricing" decision covered
   the rendered page. llms.txt was carrying a superseded `S$200 per participant`; it now reads
   `S$2,800 flat / ~S$360 pax`, Advisory `S$960/day` or `S$120/hr`, Build on the milestone model.
   Strip pricing from llms.txt entirely if that is not wanted.
3. **Pre-existing config warning**, unrelated to this work: the hero requests `quality={90}` but
   `images.qualities` allows only `[75]`, so Next silently falls back. Fix by setting
   `images.qualities: [75, 90]` in the Next config.
4. **Deleted files needing a nod:** `public/logos/EY.png` and `Pillar.md`. Both restorable with
   `git checkout HEAD -- <path>`.
