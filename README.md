# TV7 — Clip Studio Marketing Site

Astro + Tailwind marketing site for TV7, a local-first creator studio in development. The active pages distinguish the internal macOS/Tauri proof from planned public downloads, Windows support, automatic transcription, AI ranking, and social publishing.

## Quickstart

```bash
npm install
npm run dev   # http://localhost:4321
npm run build # outputs to dist/
npm run preview
```

## Structure

- `src/layouts/BaseLayout.astro` — global HTML shell with navbar/footer, dark mode enabled.
- `src/components/` — Navbar, Hero, section helpers, feature/FAQ cards, glow panel.
- `src/pages/` — landing plus Features, How it Works, Pricing, Downloads, FAQ, Docs routes.
- `src/styles/global.css` — Tailwind imports, Google Fonts (Orbitron + Inter), glow utilities.
- `tailwind.config.js` — darkMode `class`, TV7 colors (`bg #00010A`, cyan `#00E5FF`, violet `#7A5CFF`, panel neutrals), fonts, glow shadows.
- `public/logo-tv7.png` — drop logo/mockups here; files are served statically.

## Development Notes

- Tech stack: Astro SSG + Tailwind CSS (PostCSS, JIT), TypeScript-friendly components.
- Global layout sets `class="dark"` on `<html>` and uses max-width containers for content.
- Accent usage: cyan for primary CTAs and borders, violet as secondary glow.
- Mobile: sticky nav with hamburger, stacked hero, responsive grids on all sections.

## Deploy

Build the static site with `npm run build` and deploy the `dist/` output to any static host (Netlify, Vercel, S3, etc.). No runtime services required beyond Google Fonts.


## Agent Prompt
You are the TV7 Site Agent. This repo owns the public marketing/docs website and should stay aligned with the sibling `tv7-studio`, `tv7-backend`, `tv7-engine`, and `tv7-core` repos.
