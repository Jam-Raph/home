---
name: kt
description: Knowledge-transfer pack for jr-home, the jam&raph marketing site. Read before changing page copy, adding a section, touching the contact form or analytics, or answering "how does this site work". Covers architecture, the three-places content rule, the running build log, the backlog, and the commercial claims the copy must stay true to.
---

# jr-home knowledge transfer

Everything a new session needs to work on **jamraph.com** without re-deriving it from the code.
Read `architecture.md` and `current_progress.md` first; the rest as the task demands.

| Doc | Read it when |
|---|---|
| [architecture.md](architecture.md) | Adding or moving a section, touching routing, the contact form, analytics, or the design tokens. Explains the section contract and the **three-places rule** for content. |
| [current_progress.md](current_progress.md) | Starting any session. What was built, what changed most recently, what is verified and what is not. |
| [todo.md](todo.md) | Picking up work. Prioritised backlog, newest first, with the known defects. |
| [pricing.md](pricing.md) | Writing or editing any copy that states a price, a duration, a credential, or a client name. The claims register. |
| [marketing.md](marketing.md) | Changing positioning, the funnel, SEO, or `/llms.txt`. Who the site is for and what it is trying to make them do. |

## The two rules that break things most often

1. **Content lives in three places, not one.** A visible FAQ answer exists in `app/page.tsx`
   (accordion), `app/layout.tsx` (JSON-LD `FAQPage`), and often `app/llms.txt/route.ts`. The first two
   must stay **byte-identical** or the structured data lies to crawlers. See `architecture.md` §6.
2. **Claims must be defensible.** This is a consultancy site: certifications, competition placings,
   client names, prices, and durations are all assertions someone can check. `pricing.md` is the
   register of what may be claimed and what was deliberately removed. Never invent a headcount, a
   partner tier, a certification date, or a compliance control.

## Commands

```bash
npm run dev      # localhost:3000
npm run build    # production build; must pass before commit
npm run lint     # baseline is 13 problems, all pre-existing (see current_progress.md)
```
