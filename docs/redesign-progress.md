# TV7 Website Redesign Progress

## Goal
Transform from "computerish" cyberpunk to professional/clean aesthetic inspired by video editing applications (DaVinci Resolve, Premiere Pro, Final Cut Pro).

---

## Implementation Phases

### [x] Phase 1: Foundation (30 min)
**Critical file**: [tailwind.config.js](../tailwind.config.js)
- [x] Update color palette (lines 7-17) - Add amber, refine backgrounds/borders
- [x] Update font families (lines 19-22) - Replace Orbitron with Instrument Sans
- [x] Update box shadows (lines 23-27) - Remove glows, add professional depth

### [x] Phase 2: Global Styles (20 min)
**Critical files**: [global.css](../src/styles/global.css), [BaseLayout.astro](../src/layouts/BaseLayout.astro)
- [x] Update font import in global.css
- [x] Update `.glow-panel` class - Remove shadow-glow, add shadow-panel
- [x] Reduce/remove background gradients in BaseLayout

### [x] Phase 3: Core Components (1.5 hours)
**Update in order**:
- [x] [GlowPanel.astro](../src/components/GlowPanel.astro) - Updated via global.css
- [x] [SectionHeader.astro](../src/components/SectionHeader.astro) - Removed uppercase, updated eyebrow to amber
- [x] [Hero.astro](../src/components/Hero.astro) - Removed uppercase headline, reduced glows, added frame corners
- [x] [Navbar.astro](../src/components/Navbar.astro) - Normal case navigation
- [x] [FeatureCard.astro](../src/components/FeatureCard.astro) - Added left amber accent border

### [x] Phase 4: Pages (2 hours)
Update all pages in [src/pages/](../src/pages/):
- [x] index.astro (highest priority) - Updated all sections with new colors/typography
- [ ] features.astro - Can be updated later (uses shared components)
- [ ] pricing.astro - Can be updated later (uses shared components)
- [ ] how-it-works.astro - Can be updated later (uses shared components)
- [ ] downloads.astro - Can be updated later (uses shared components)
- [ ] faq.astro - Can be updated later (uses shared components)
- [ ] docs.astro - Can be updated later (uses shared components)

**Note**: Most styling is now handled through shared components (Hero, SectionHeader, FeatureCard, GlowPanel), so these pages will automatically benefit from the redesign.

### [ ] Phase 5: Polish (1 hour)
- [ ] Add timeline elements to hero mockup
- [ ] Fine-tune hover states
- [ ] Test responsive behavior

---

## Key Changes Summary

### Typography
- ✓ Replace Orbitron → Instrument Sans
- ✓ Remove excessive uppercase from headlines
- ✓ Reduce letter-spacing from 0.3em to 0.15em max

### Colors
- ✓ Warmer backgrounds (#0A0B0F instead of #00010A)
- ✓ Strategic cyan/violet use (accents only)
- ✓ NEW: Amber accent (#F59E0B) for warmth

### Effects
- ✓ Remove neon glows (shadow-glow, shadow-cyan-strong)
- ✓ Add professional depth (shadow-panel)
- ✓ Simplify background gradients

### Design Principles
✓ Professional over flashy
✓ Readable typography
✓ Strategic color use
✓ Warm balance
✓ Video editor aesthetic
