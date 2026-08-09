# jr-home — Technical Architecture

> Design source of truth for **jamraph.com**, the marketing site for jam&raph (Singapore AI
> consultancy for professional-services firms). Sections from the reference-stack template that do not
> apply to a marketing site (async pipeline, workers, object storage, credit ledger, provider
> abstraction) are marked **N/A** with the reason, rather than deleted, so the omission is legible.

## 1. Goal & Scope

jr-home is a **single-page marketing site with one supporting page**. Its whole job is to take a
partner or practice manager at a law firm or professional-services firm from "who are these people"
to a submitted contact form, and to be legible to AI agents doing the same research on their behalf.

It sells three productised paths: **Workshop** (3-hour hands-on AI session), **Advisory** (interviews
plus the firm's existing Claude plan put to work), and **Build** (custom AI software). No prices appear
on the rendered page; prices live only in `/llms.txt`.

In scope: content, conversion, structured data, agent discoverability, one contact form.
**Explicitly out of scope:** accounts, auth, a database, a CMS, payments, and any product surface. The
firm's actual product work ships elsewhere; this repo is the front door.

## 2. System Overview

```
                    ┌─ static assets (public/) ─ next/image ─┐
Browser ─── HTTPS ──┤                                        ├── Next.js 16 App Router
                    └─ RSC page shell + client islands ──────┘        │
                                                                      │
   POST /api/form ──► Node route handler ──► api.telegram.org (x2 chats)   [no persistence]
                                                                      │
   posthog-js ──► /ingest/* ──► next.config rewrite ──► eu.i.posthog.com   [first-party proxy]
                                                                      │
   GET /llms.txt ──► route handler ──► template literal in source     [agent-facing copy]
```

**Design principles**

- **No datastore.** Every byte of content is source code. There is no CMS, no database, and no build
  step that fetches content. A copy change is a code change, reviewed like code.
- **Server shell, client islands.** `app/page.tsx` is `"use client"` because nearly all of it is
  interactive (scroll spy, accordion, motion, analytics). `layout.tsx` stays server-side so the JSON-LD
  is in the initial HTML for crawlers.
- **Leads are fire-and-forget.** The contact route pushes to Telegram and returns. Nothing is stored,
  so there is no PII at rest and no retention question to answer.
- **Analytics is first-party.** PostHog is proxied through `/ingest/*` so ad blockers and third-party
  cookie policy do not silently delete the funnel.

**N/A:** async job queue, workers, Redis, object storage, provider abstraction, credit ledger. There is
no long-running or metered work; the one external call (Telegram) completes in a single request.

## 3. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 16.0.10, App Router, Turbopack | React 19.2.1 |
| Language | TypeScript 5.9.3, strict | `@/*` path alias maps to repo root |
| Styling | Tailwind CSS v4 (`@theme` in CSS, no JS config) + `tw-animate-css` | tokens in `app/globals.css` |
| Primitives | Radix UI (accordion, label, separator, slot, dropdown) via shadcn/ui pattern | `components.json` |
| Motion | `motion` v12 (framer-motion successor) | used by `BlurFade`, `DotPattern`, `AnimatedGridPattern` |
| Icons | `lucide-react` | |
| Toasts | `sonner`, mounted in `layout.tsx` | `components/ui/sonner.tsx` wrapper is unused |
| Fonts | `@fontsource/playfair-display` (serif) + local Helvetica (`public/fonts/`) | `--font-sans` / `--font-serif` |
| Analytics | `posthog-js`, EU cloud, proxied via `/ingest` | |
| Lead delivery | Telegram Bot API | two chat ids |
| Hosting | Not pinned in-repo. No `vercel.json`, Dockerfile, or CI workflow is committed. | confirm before assuming |

## 4. Routes

| Route | File | Rendering | Purpose |
|---|---|---|---|
| `/` | `app/page.tsx` | static, client component | The whole pitch. Eleven sections, one contact form. |
| `/security` | `app/security/page.tsx` | static, client component | Trust page for IT and compliance readers. Linked from navbar and footer; **not** a section of `/`. |
| `/llms.txt` | `app/llms.txt/route.ts` | dynamic route handler, `text/plain`, `max-age=3600` | Full agent-facing brief, including the pricing the page omits. |
| `/api/form` | `app/api/form/route.ts` | Node handler, POST | Contact form to Telegram. |

## 5. Page composition — the section contract

`app/page.tsx` is a flat list of `<section>` elements. Each one that should participate in navigation
and analytics needs **four** things kept in sync, or it half-works in ways that are easy to miss:

1. `id="…"` on the `<section>`.
2. A `<SectionTracker sectionId="…" />` near the top of the component (fires `section_viewed` once, via
   IntersectionObserver at threshold 0.3).
3. An entry in `navSections` **and** in the `sectionIds` scroll-spy array in `components/ui/navbar.tsx`
   — these are two separate lists in the same file and are easy to update singly.
4. Any `smoothScroll("…")` callers (offerings cards, CTAs, footer `/#…` links) pointing at the id.

Current section order on `/`:

`hero → partners → proof → architects → (team) → offerings → workshop → in-practice → advisory → build → faq → (CTA banner) → contact`

`team` and the CTA banner have no id and are not tracked. `advisory` and `build` were one combined
`advisory-build` section until August 2026; nothing should reference that id any more.

**Content shape.** Every section's copy is a `const` array of objects at the top of the `Home()`
component — `architectPoints`, `advisoryPoints`, `buildPoints`, `offerings`, `workshopContents`,
`practiceSteps`, `faqs` — each with a lucide icon. Editing copy means editing those arrays; the JSX
below them is a renderer. Keep that split: do not inline copy into JSX.

## 6. The three-places rule (content integrity)

The same sentence can exist in up to three files. This is the single most common source of silent
drift in this repo.

| Content | Lives in | Constraint |
|---|---|---|
| FAQ question + answer | `app/page.tsx` `faqs[]` **and** `app/layout.tsx` JSON-LD `FAQPage.mainEntity[]` | **Byte-identical.** Nine entries. A mismatch means the structured data claims something the page does not say. |
| Positioning, offer descriptions, prices | `app/page.tsx` / `app/security/page.tsx` **and** `app/llms.txt/route.ts` | Consistent in substance. llms.txt may carry more (it holds the prices the page deliberately omits). |
| Site description | `app/layout.tsx` `metadata.description` **and** the Organization JSON-LD node | Same string in both. |
| Awards | `components/ui/team-banner.tsx` `awards[]` **and** `app/layout.tsx` Organization `award[]` (**and** the credentials list in `app/llms.txt/route.ts`) | Each JSON-LD string is exactly `${place}, ${title}` from the grid entry, in grid order. Adding an award means adding it in all three. |

Parity check that has caught real drift:

```bash
python3 - <<'PY'
import re
lay=open('app/layout.tsx').read(); pg=open('app/page.tsx').read()
qs=re.findall(r'name: "((?:[^"\\]|\\.)*)",\s*\n\s*acceptedAnswer: \{\s*\n\s*"@type": "Answer",\s*\n\s*text: "((?:[^"\\]|\\.)*)"', lay)
faq=re.findall(r'\{\s*\n\s*q: "((?:[^"\\]|\\.)*)",\s*\n\s*a: "((?:[^"\\]|\\.)*)",\s*\n\s*\}', pg)
print(len(qs), len(faq), "parity ok" if qs==faq else "PARITY FAILED")
PY
```

JSON-LD graph in `app/layout.tsx`: `Organization` → `Service` (the workshop) → `FAQPage`. The
Organization `logo` must stay percent-encoded (`/J%26R%20logo.png`) — crawlers consume it literally.

## 7. Contact pipeline

```
PartnerLeadForm (client)
  ├─ validates: first/last/email/organisation/note required, regex on email, phone optional
  ├─ analytics: form_started (first focus) → field_focus → submitted | error
  └─ POST /api/form  ──► telegram sendMessage → TELE_CHAT_ID
                     └─► telegram sendMessage → TELE_CHAT_ID_2
```

Nothing is persisted. The handler returns 500 only if the **first** send fails; the second response is
captured and never checked (see `todo.md`). There is no rate limiting, no honeypot beyond the unused
`phone` field, and no CAPTCHA — acceptable at current volume, and a known exposure.

## 8. Analytics

`lib/analytics.ts` is the only place `posthog.capture` is called. Events:

| Event | Properties | Fired from |
|---|---|---|
| `cta_clicked` | `cta_location`, `cta_label` | every CTA; location is the section slug |
| `section_viewed` | `section` | `SectionTracker`, once per session per section |
| `faq_opened` | `question`, `index` | accordion `onValueChange` |
| `contact_form_started` | — | first focus anywhere in the form |
| `contact_form_field_focus` | `field` | each field |
| `contact_form_submitted` | `organisation` | 2xx from `/api/form` |
| `contact_form_error` | `error_type` (`api_error` \| `network_error`) | non-2xx or throw |

Config: `person_profiles: "identified_only"`, `capture_pageview: false` (pageviews come from
`app/posthog-pageview.tsx` so App Router client navigations are counted once), `capture_pageleave` and
`autocapture` on. PostHog silently no-ops when `NEXT_PUBLIC_POSTHOG_KEY` is absent, so local dev
without the key is fine.

Add new CTAs with a `trackCTAClick` call using the section id as `cta_location` — the funnel groups on
it.

## 9. Design system

Tokens are declared in `app/globals.css` under `@theme` (Tailwind v4 — there is no `tailwind.config`):

| Token | Value | Used for |
|---|---|---|
| `--color-brand-primary` | `#C9A84C` gold | accents, icon chips, award markers |
| `--color-brand-hover` | `#D4AA4F` | hover state |
| `--color-surface-warm` | `#F5F0E6` | featured cards, avatar backgrounds |
| `--color-secondary-dark` | `#111111` | dark full-bleed bands, contact form |
| `--color-surface-dark-card` | `#1A1A1A` | proof band |

**Palette discipline: red, gold and black only. Never introduce blue.** Neutrals are Tailwind `stone`.

Type: Playfair Display for headings (`font-serif`, tracked out `0.05em`), Helvetica/Inter for body,
mono for the uppercase eyebrows (`text-xs uppercase tracking-[0.25em] font-mono`).

Recurring layout idioms, worth matching rather than reinventing:

- **Full-bleed dark band:** `w-full bg-secondary-dark py-32 rounded-3xl` plus `<DotPattern />`, or the
  `width: 100vw; marginLeft: calc(-50vw + 50%)` escape used by `proof` and `CTABanner`.
- **Section header:** mono eyebrow → optional icon chip → serif `text-5xl md:text-7xl` title → one-line
  subtitle → mono meta line with `&middot;` separators.
- **Point grid:** `max-w-4xl grid md:grid-cols-2 gap-x-12 gap-y-10`, each item an icon chip
  (`w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20`) beside title + description.
- **Divider between sections:** a 24px-tall vertical gradient hairline.
- **Entrance animation:** wrap in `<BlurFade delay={0.1 + i * 0.05} inView>`. Note the consequence —
  content is invisible until scrolled into view, so a deep link or an instant `scrollTo` lands on a
  blank block for a beat. Expected, not a bug.

**Em dashes are not used anywhere in site copy** (removed August 2026). Use a colon, comma, full stop,
or parentheses; use `&middot;` for the eyebrow and meta-line separators.

## 10. Assets

`public/` — `logos/` (client and supporter marks), `headshots/` (three, team grid), `awards/` (six,
team banner), `hero-2.png` (hero painting), `fonts/`. Unreferenced but retained: `hero.jpg`,
`jamraph-hero.mp4`, `border-fade.svg`, `logos/bizibody.png`, `logos/O&B.png` (Oon & Bazul, removed from
the site August 2026).

Unused components, safe to delete but currently kept: `animated-gradient-text`, `card`,
`dropdown-menu`, `floating-cta`, `shimmer-button`, `sonner`.

## 11. Environment & build

| Var | Required | Purpose |
|---|---|---|
| `TELE_KEY` | yes, for the form | Telegram bot token |
| `TELE_CHAT_ID` | yes, for the form | primary recipient; failure here 500s |
| `TELE_CHAT_ID_2` | optional | second recipient; failure ignored |
| `NEXT_PUBLIC_POSTHOG_KEY` | no | absent means analytics no-ops |
| `NEXT_PUBLIC_POSTHOG_HOST` | no | defaults to `/ingest` (the rewrite) |

Local `.env` is git-ignored; there is no committed `.env.example`. `npm run build` must pass before any
commit. `npm run lint` has a standing baseline of pre-existing problems — see `current_progress.md` for
the current count and where they live.

## 12. Known gaps

1. `next.config.ts` sets no `images.qualities`, but the hero requests `quality={90}`; Next warns on
   every render and silently falls back to 75.
2. The second Telegram send is unchecked (`res2` assigned, never read).
3. No committed deploy config or CI. Hosting is assumed, not documented.
4. `/security` is reachable only from the navbar and footer; the home page no longer has a security
   section (removed August 2026), so a visitor scrolling the page never learns the page exists.
5. `README.md` is still the stock `create-next-app` text.
