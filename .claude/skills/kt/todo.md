# jr-home — backlog

Newest first. Anything marked **defect** is a real bug with a known reproduction, not a preference.

---

## Now

- [ ] **Decide: delete `public/logos/O&B.png`.** Oon & Bazul was removed from the site on 6 Aug; the
      asset is unreferenced but still committed. EY's logo was deleted outright in the same situation,
      so the precedent says delete. Left in place pending a call.

- [ ] **Decide: does `/security` need a route in from the home page?** Its section was removed from `/`,
      so the only entry points are the navbar and footer. A visitor who scrolls never learns it exists.
      Options: a line in the FAQ answer about PDPA, or a link in the Build section.

---

## Defects

- [ ] **defect — the second Telegram send is unchecked.** `app/api/form/route.ts` assigns `res2` and
      never reads it. If `TELE_CHAT_ID_2` is wrong or that chat blocks the bot, the second recipient
      silently receives nothing and the request still returns 200. Either check both responses, or
      `Promise.allSettled` them and log the failure.

- [ ] **defect — no abuse protection on `/api/form`.** No rate limit, no honeypot, no CAPTCHA. A script
      can push unlimited messages into the founders' Telegram. Cheapest fix: a hidden honeypot field
      plus a per-IP token bucket in the route handler.

- [ ] **defect — hero image quality is silently downgraded.** The hero requests `quality={90}` but
      `next.config.ts` sets no `images.qualities`, so Next warns on every render and falls back to 75.
      Fix: `images: { qualities: [75, 90] }`.

---

## Content

- [ ] **Revisit the Advisory eyebrow.** It currently reads "Path 2 · Put your Claude plan to work",
      which states the Advisory/Build distinction up front but assumes the reader already has a Claude
      plan. "Path 2 · Before you build" is the neutral alternative.

- [ ] **Consider updating `metadata.description` and the Organization JSON-LD.** Both still say
      "fixed-scope workflow builds", which now understates Build ("custom AI software"). The two
      strings must change together.

- [ ] **Decide whether `/llms.txt` should keep pricing.** It is the only place prices appear. That is
      deliberate, but it means an agent can quote a price the page never shows.

- [ ] **En dashes in the llms.txt pricing tables** (`S$400 – S$550`, `1–2 week audit`) survived the
      em-dash removal, which targeted em dashes only. Correct as ranges; flagging in case the intent
      was "no dashes at all".

---

## Housekeeping

- [ ] **Delete the six unused components** once confirmed nobody is mid-flight on them:
      `animated-gradient-text`, `card`, `dropdown-menu`, `floating-cta`, `shimmer-button`, `sonner`.
      Also unreferenced in `public/`: `hero.jpg`, `jamraph-hero.mp4`, `border-fade.svg`,
      `logos/bizibody.png`.

- [ ] **Replace the stock `README.md`.** It is still `create-next-app` boilerplate. It should say what
      the site is and point at this skill.

- [ ] **Clear the lint baseline (13 problems).** `Math.random()` during render in `dot-pattern` and
      `animated-grid-pattern` is a real React purity violation; the footer's `<a href="/#…">` links
      should be `next/link`; `api/form` has unused-var warnings. None are new, all are trippable.

- [ ] **Commit a deploy config or document the host.** No `vercel.json`, Dockerfile, or CI workflow is
      in the repo, so how this ships is tribal knowledge.

- [ ] **Add `.env.example`** listing `TELE_KEY`, `TELE_CHAT_ID`, `TELE_CHAT_ID_2`,
      `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST`.
