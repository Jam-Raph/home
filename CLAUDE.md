# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 marketing/landing page for "Jam & Raph" (a legal tech startup). It uses the App Router with a single-page design.

### Key Directories

- `app/` - Next.js App Router pages and API routes
- `components/ui/` - Reusable UI components (shadcn/ui pattern with Radix primitives)
- `lib/utils.ts` - Shared utilities including `cn()` for className merging and `smoothScroll()`
- `public/` - Static assets (images, fonts)

### Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4 with `tw-animate-css`
- **UI Components**: Radix UI primitives (accordion, dropdown, label, separator, slot)
- **Animations**: Motion (framer-motion successor)
- **Notifications**: Sonner toast library
- **Fonts**: Local Helvetica via `next/font/local`

### API Routes

- `app/api/form/route.ts` - Contact form submission that sends to Telegram (requires `TELE_KEY` and `TELE_CHAT_ID` env vars)

### Path Aliases

`@/*` maps to project root (e.g., `@/components/ui/button` resolves to `./components/ui/button`)

### Component Naming Convention

- Components with `figma-` prefix are based on Figma designs (e.g., `figma-hero-section.tsx`, `figma-stats-section.tsx`)

### Key Page Components (in order)

1. `Navbar` - Fixed navigation header
2. `FigmaHeroSection` - Hero with video tabs (red gradient)
3. `FigmaHowItWorks` - 3-step process section
4. `FigmaStatsSection` - Stats + bento grid with testimonials/achievements
5. `FigmaSavingsCalculator` - Interactive calculator (red gradient)
6. `FeatureShowcase` - Prompt enhancer & Article generator demos
7. `FeatureCards` - 3 feature cards (Form Filler, Prompt Enhancer, Article Generator)
8. Security section - Inline in page.tsx (red gradient)
9. FAQ section - Inline accordion
10. `CTABanner` - Call to action
11. `TeamBanner` - Team headshots (red gradient)
12. `HackathonWins` - Award photos (red gradient)
13. `PartnerLeadForm` - Contact form
14. `Footer`

### Styling Patterns

- **Red gradient sections**: `bg-[radial-gradient(circle_at_center,_#B11226_0%,_#8E1624_45%,_#4A0B14_100%)]`
- **Full-width breakout**: `w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]`
- **Dotted background**: Main container uses `bg-gray-50 bg-[radial-gradient(#0000001f_1px,transparent_1px)] bg-[size:18px_18px]`
