# Current progress — jr-home

**Last updated:** 6 August 2026
**Branch:** `workshop-repositioning` (open as PR #6 → `main`)
**State:** repositioning shipped to the branch; a second copy pass is in the working tree, uncommitted.

---

## Where the project is

The site has been moved off the old Pillar/AI-Integration pitch and onto the three productised paths:
**Workshop → Advisory → Build**. The structural work is done and committed; the most recent copy pass
(Advisory/Build definition, security page rewrite, em-dash removal) is written and verified but **not
yet committed**.

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

### Uncommitted — copy pass (6 Aug)

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

1. Commit the copy pass and push to PR #6 (see `todo.md` for the ordered list).
2. Decide on the two deferred items: deleting `public/logos/O&B.png`, and whether `/security` needs an
   entry point from the home page now that its section is gone.
