# LogoVerdicts

Independent reviews and comparisons of the best freelance logo designers for hire, targeting organic search and Pinterest traffic.

## Run & Operate

- `pnpm --filter @workspace/logo-designers run dev` — run the front-end site (port 24006)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080, optional)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Front end: React 19 + Vite + Tailwind CSS v4 + wouter routing
- UI: shadcn/ui components
- Animations: framer-motion
- SEO: react-helmet-async (per-page meta tags, OG, Twitter Card, Pinterest)
- No backend required — pure static presentation site

## Where things live

- **Main artifact**: `artifacts/logo-designers/`
- **Pages**: `src/pages/` — Home, Compare, reviews/Alestra, reviews/Juhi, reviews/Valeriia, guides/HireGuide
- **Layout**: `src/components/Layout.tsx` — shared header + footer
- **CSS theme**: `src/index.css` — deep purple primary (251 60% 28%), coral accent (14 88% 55%), Playfair Display + Inter fonts
- **Static assets**: `public/` — robots.txt, sitemap.xml, og image, Pinterest pin images
- **JSON-LD structured data**: hardcoded in `index.html` (WebSite + Organization + FAQPage schemas)

## Architecture decisions

- Browser history routing (not hash routing) for SEO — wouter with base path
- Google Fonts @import is the FIRST line of index.css (required for font-display: swap)
- Pinterest images (2:3 ratio) generated per designer and served from /images/
- All external Fiverr links use rel="noopener noreferrer" target="_blank"
- HelmetProvider wraps the entire app at root level in App.tsx

## Product

6-page SEO site targeting "best freelance logo designers 2025" and related queries:
1. `/` — Home hub page (primary keyword landing)
2. `/reviews/alestra` — Alestra designer review
3. `/reviews/juhi` — Juhi designer review
4. `/reviews/valeriia` — Valeriia designer review
5. `/compare` — Side-by-side comparison table
6. `/guide/how-to-hire-a-logo-designer` — 2000+ word hiring guide

Production domain: https://logoverdicts.replit.app

## User preferences

- No emojis in UI
- Editorial voice — authoritative, not salesy
- Deep purple + coral color palette — distinctive and memorable
- Playfair Display for all headings (editorial feel)

## Gotchas

- react-helmet-async 2.0.5 has a peer dep warning with React 19 — it still works fine
- Google Fonts import MUST stay as the first line of index.css
- Don't add the logo-designers artifact to root tsconfig.json references (leaf package)
- Sitemap domain is hardcoded as https://logoverdicts.replit.app — update if domain changes

## Pointers

- See the `pnpm-workspace` skill for workspace structure and TypeScript setup
