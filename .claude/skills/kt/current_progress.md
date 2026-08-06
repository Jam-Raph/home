# Current progress — jr-home

**Last updated:** 6 August 2026
**Branch:** `main`. PR #6 (the repositioning) was merged on GitHub; the two follow-up commits
(`fd1c225`, `b3680e3`) were merged to `main` directly as `123a9e9` on 6 Aug at the founders'
instruction.
**State:** everything below is committed and on `main`.

---

## Where the project is

The site has been moved off the old Pillar/AI-Integration pitch and onto the three productised paths:
**Workshop → Advisory → Build**. The structural work, the copy pass (Advisory/Build definition,
security page rewrite, em-dash removal), the Jamison credential correction and the Cambridge Hack the
Law 2026 award are all committed and merged to `main`.

Read `architecture.md` for how the site is put together and `pricing.md` for what the copy is allowed
to claim.

---

## Timeline

### Commit 1 — `03a6913` reposition landing page (5 Aug)

- Pillar removed entirely: `/form-filler`, `public/demos/`, `pillar-home.png`, `supreme-court.png`,
  `two-box.tsx`, and a stray `Pillar.md`. All eight Pillar FAQs replaced with workshop ones.
- EY removed from the client logo row and llms.txt.
- New sections: `#architects` (the moat) and `#in-practice` (one letter of engagement, end to end).
- `SoftwareApplication` JSON-LD node became a `Service` node. Fixed the Organization `logo`, which
  pointed at `logos/pillar-logo.png` — a file that has never existed.
- Sorcha Boyce's quote removed (it read as product feedback on Pillar); Liediana off the team grid.

### Commit 2 — `776c967` split Advisory and Build, rework the moat (6 Aug)

- Advisory consult corrected from 45 minutes to **1 hour**, everywhere it appeared.
- `#advisory-build` split into `#advisory` and `#build`, each with its own header, four points, and
  CTA. Anchors updated in navbar, footer, offerings cards, scroll spy and `SectionTracker`.
- Moat reframed to **Claude Certified Architects (CCA-F) and lawyers on one team**, adding the SMU
  Legal Innovation & Tech 2025 win and 2024 runner-up.
- **Every Claude Partner Network claim removed** — two on the page, one in JSON-LD, six in llms.txt.
- Hero subline reverted to "Seamless AI integration for law firms and professional services".
- Oon & Bazul removed from the logo row and the llms.txt client list.
- Security & Privacy **section** removed from the home page (the `/security` page stayed).
- CTA banner given `mt-24` so it no longer butts against the FAQ.

### Commit 3 — `5cd3e2b` copy pass: define Advisory and Build, reframe /security, drop em dashes (6 Aug)

1. **"put it on an invoice" trimmed** from the AI-fluency line, page and llms.txt.
2. **`/security` reframed for custom software.** Now: SOC 2 compliant infrastructure and industry best
   practices, deployment agreed at scoping. Four blocks — deployment and ownership, authentication and
   access, data handling, audit and human sign-off. **Deliberately deleted** (unverifiable for bespoke
   builds): penetration testing, vulnerability assessments, automated backups and point-in-time
   recovery, 24/7 monitoring, incident-response SLAs, per-tenant isolation, Supabase bucket and RLS
   specifics. Kept, because confirmed true: SSO/RBAC/MFA and audit logging with human sign-off.
3. **Moat point 4** became "We have built and deployed real solutions" (bespoke AI software created
   *and maintained* in production), replacing "We build on the real tools".
4. **Advisory** now reads as one process everywhere: free 1-hour consult to learn the firm → interviews
   with the people who actually run the workflow → where AI applies → product requirements sheet.
   Delivery is the firm's existing Claude plan, via skills and orientation, on a milestone model.
5. **Build** starts where Cowork and Claude Code stop: same discovery, other models, a backend, custom
   MCP servers; milestone model, maintained afterwards.
6. **All 131 em dashes removed** from site source, rewritten to colons, commas, full stops or
   parentheses per sentence. Eyebrow separators became `&middot;`. En dashes in the llms.txt price
   ranges were left alone.

### Commit 4 — `33244c1` add the kt documentation skill (6 Aug)

- The five KT docs (`architecture`, `current_progress`, `todo`, `pricing`, `marketing`) moved into
  `.claude/skills/kt/`, invocable as `/kt`.

### Commit 5 — `fd1c225` Jamison credential correction + Cambridge award (6 Aug)

- **Jamison is not a lawyer** (still studying law at SMU), so every claim that said or implied
  otherwise was corrected to "law background". The `#architects` heading went from "and lawyers" to
  "with a law background"; "we come from legal practice" became "we come from a law background" in
  the moat subline and the law-firm FAQ (page, JSON-LD and llms.txt, kept byte-identical); the
  llms.txt team entry now says "currently studying at SMU Law".
- Left alone because they claim nothing about the team's credentials: "not a lawyer briefing a
  vendor", "SMU Law and ex-GovTech engineering on one team", "Law and engineering on one team".
- Rule added to `pricing.md` §3 (may claim "law background"; never "lawyer(s)" or "legal practice"),
  and `marketing.md` §2 leg two updated to match.
- Verified: `npm run build` clean; FAQ ↔ JSON-LD parity holds; greps clean for `lawyers` and
  `legal practice` in site source.

Also in `fd1c225`, the Cambridge award:

- **Clifford Chance track win added to the awards grid** (`team-banner.tsx`), third card, after the
  SMU LIT 2025 win: title "Cambridge Hack the Law 2026 (Clifford Chance track)", place "Winner",
  LinkedIn post linked. **No prize money**, so `prize: ""` (the card's prize span renders empty).
- Photo: founders' original (3072×4608 portrait, 8.3 MB) cropped to a 4:3 window over the faces
  (offset 300px from the top) and resampled to 2000×1500 at ~587 KB as
  `public/awards/cambridge-hack-the-law-2026.jpg`. A straight centre `object-cover` crop would have
  cut the standing teammates' heads off; the pre-crop is deliberate.
- llms.txt credentials line sharpened from "Clifford Chance Challenge, Cambridge: hackathon winner"
  to the full event name, track, and "No cash prize" so an agent cannot invent a figure.
- The "won as the same team" moat sentence was **not** extended to Cambridge (see `pricing.md` §3).
- Backlog: the Clifford Chance todo item closed; the stale "commit the copy pass" item rewritten to
  cover the actual working tree.

---

## Conventions locked

- Content lives in `const` arrays at the top of `Home()`; JSX is a renderer. See `architecture.md` §5.
- FAQ text is duplicated in `app/layout.tsx` JSON-LD and must stay byte-identical. §6.
- No pricing on the rendered page. Prices live only in `/llms.txt`.
- No Anthropic or Claude logo is rendered — no licensed asset exists. Typographic treatment only.
- No em dashes in copy. No blue in the palette.
- Claims discipline: no invented headcount, certification date, partner tier, or compliance control.

---

## Verification status

Passing as of the last change:

- `npm run build` — clean.
- `npm run lint` — **13 problems, all pre-existing**, in `dot-pattern`, `animated-grid-pattern`,
  `api/form`, and `footer.tsx`. The count rose from 12 when a fourth footer link was added; it trips
  the same `no-html-link-for-pages` rule every other footer link already trips.
- FAQ ↔ JSON-LD parity — 9 entries each, exact match.
- Greps clean for: `pillar`, `form-filler`, `EY`, `Partner Network`, `Oon`, `advisory-build`,
  `on an invoice`, `tenant`, `penetration testing`, `24/7`, `—`.
- Browser pass — `#architects`, `#advisory`, `#build` at desktop, 960px and 500px; `/security` top to
  bottom. All stack correctly on mobile; the navbar Advisory link lands its section below the fixed nav.

**Not verified:** anything after the em-dash pass was checked by build, grep and rendered-HTML
inspection, not re-eyeballed in a browser. The dev server started for that pass has since exited.

---

## Next

1. Decide on the two deferred items: deleting `public/logos/O&B.png`, and whether `/security` needs an
   entry point from the home page now that its section is gone (see `todo.md`).
