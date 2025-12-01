# TV7 — Clip Studio Marketing Site

Astro + Tailwind site for TV7, the AI-powered desktop app for video clipping and repurposing. Dark-only, neon-accent aesthetic with reusable components and data-driven sections.

## Quickstart

```bash
npm install
npm run dev   # http://localhost:4321
npm run build # outputs to dist/
npm run preview
```

## Structure

- `src/layouts/BaseLayout.astro` — global HTML shell with navbar/footer, dark mode enabled.
- `src/components/` — Navbar, Hero, section helpers, cards (features, pricing, downloads, FAQ), glow panel.
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
Check this website. understand what it is, and what is it part for (check docs in same root folder, you have the flutter-tv7 and fastapi-t7) I am working on all three projects. You are the astro agent, responsible for the public astro website