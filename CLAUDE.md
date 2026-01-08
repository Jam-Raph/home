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
