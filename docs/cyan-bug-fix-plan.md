# Cyan Flash Bug Fix + Add More Futuristic Cyan

## Bug Report

**Issue**: Cyan flash appears on page refresh, then buttons change to black/disappear
**Cause**: Likely FOUC (Flash of Unstyled Content) - button text color loading issue

### Investigation

**Current button styling**:
```astro
class="bg-tv7-cyan px-5 py-3 text-slate-900"
```

**Problem identified**:
- Button background: `bg-tv7-cyan` (cyan #00E5FF)
- Button text: `text-slate-900` (very dark gray, almost black)
- During page load, `text-slate-900` might not be applying immediately
- This causes the cyan background to show without dark text overlay
- Once CSS fully loads, text appears dark and "covers" the cyan

**Why it feels like buttons "disappear"**:
- The contrast between cyan background and dark text is HIGH
- If text color doesn't load immediately, cyan is visible
- When text loads, the dark text makes the button look "black"

---

## Solution: Fix Button Color Bug

### Root Cause
The button uses `text-slate-900` which is NOT from our custom TV7 palette - it's Tailwind's default slate-900.

**Fix**: Ensure proper color loading by using explicit values or ensuring Tailwind loads correctly.

### Option 1: Add Critical CSS (RECOMMENDED)
Ensure button text color loads immediately by adding it to critical CSS.

**File**: [global.css](../src/styles/global.css)

Add after line 13:
```css
/* Prevent FOUC on CTA buttons */
.btn-primary {
  @apply inline-flex items-center justify-center gap-2 rounded-full bg-tv7-cyan px-5 py-3 text-base font-semibold text-slate-900 shadow-accent-subtle transition;
}

.btn-primary:hover {
  @apply shadow-accent-hover -translate-y-[1px] bg-tv7-cyanSoft;
}
```

### Option 2: Use Inline Styles for Critical Buttons
For the main hero CTA, use inline style to guarantee no FOUC:

```astro
<a
  href="/downloads"
  style="background-color: #00E5FF; color: #0f172a;"
  class="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-semibold shadow-accent-subtle hover:shadow-accent-hover transition hover:-translate-y-[1px] hover:bg-tv7-cyanSoft"
>
```

### Option 3: Preload Tailwind (Best Practice)
Ensure Tailwind CSS loads before page render.

**File**: [BaseLayout.astro](../src/layouts/BaseLayout.astro)

Add in `<head>` section:
```astro
<link rel="preload" href="/src/styles/global.css" as="style" />
```

---

## Enhancement: Add More Futuristic Cyan

User wants more strategic cyan throughout the design to make it more futuristic without being "computerish".

### Cyan Placement Strategy

#### 1. Navigation Accent Line
Add subtle cyan underline on hover

**File**: [Navbar.astro](../src/components/Navbar.astro)

```astro
<a
  href={link.href}
  class="text-tv7-text-secondary hover:text-tv7-cyan transition-colors duration-200 tracking-normal text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-tv7-cyan after:transition-all hover:after:w-full"
>
```

#### 2. Active Section Indicators (Dots)
Add cyan dots to show active states

**File**: [index.astro](../src/pages/index.astro) - Step indicators

```astro
<!-- Add pulsing cyan dot for active state -->
<span class="absolute -left-2 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-tv7-cyan animate-pulse"></span>
```

#### 3. Cyan Glow on Interactive Cards
Add subtle cyan border glow on hover (not neon, just soft)

**File**: [FeatureCard.astro](../src/components/FeatureCard.astro)

```astro
<div class="glow-panel h-full p-6 flex flex-col gap-4 transition duration-200 hover:border-tv7-cyan/30 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:-translate-y-0.5 border-l-2 border-l-tv7-amber">
```

#### 4. Cyan Accent in Video Frame
Add cyan timeline marker line in hero mockup

**File**: [Hero.astro](../src/components/Hero.astro) - After line 68

```astro
<!-- Add timeline with cyan playhead -->
<div class="mt-3 h-1 bg-tv7-border rounded-full overflow-hidden relative">
  <div class="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-tv7-cyan/60 to-tv7-cyan"></div>
  <div class="absolute left-1/3 top-0 h-full w-1 bg-tv7-cyan shadow-[0_0_8px_rgba(0,229,255,0.6)]"></div>
</div>
```

#### 5. Cyan Divider Accents
Use cyan in section dividers (currently not present)

**File**: Create new utility in [global.css](../src/styles/global.css)

```css
.section-divider {
  @apply w-full h-px bg-gradient-to-r from-transparent via-tv7-cyan/20 to-transparent my-16;
}
```

#### 6. Cyan Icon Accents
Make icon containers have cyan accent

**File**: [FeatureCard.astro](../src/components/FeatureCard.astro) - Line 13

```astro
<!-- Add cyan ring on hover -->
<div class="flex h-11 w-11 items-center justify-center rounded-lg bg-tv7-surface border border-tv7-borderStrong text-tv7-cyan transition-all duration-200 group-hover:border-tv7-cyan/50 group-hover:shadow-[0_0_12px_rgba(0,229,255,0.2)]">
```

#### 7. Cyan Accent in Footer
Add cyan accent line above footer

**File**: [BaseLayout.astro](../src/layouts/BaseLayout.astro) - Line 42

```astro
<footer class="relative z-10 border-t-2 border-t-tv7-cyan/20 bg-tv7-surface/60 backdrop-blur">
```

#### 8. Scroll Indicator (NEW)
Add cyan scroll indicator at top of page

**File**: [BaseLayout.astro](../src/layouts/BaseLayout.astro) - After `<header>`

```astro
<!-- Scroll progress indicator -->
<div class="fixed top-0 left-0 right-0 h-1 bg-tv7-border z-50">
  <div id="scroll-progress" class="h-full bg-gradient-to-r from-tv7-cyan to-tv7-violet transition-all duration-150" style="width: 0%"></div>
</div>

<script>
  window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scroll-progress');
    if (scrollProgress) {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      scrollProgress.style.width = scrolled + '%';
    }
  });
</script>
```

---

## Implementation Priority

### Phase 1: Fix Bug (CRITICAL)
1. Add `.btn-primary` class to global.css
2. Update all CTA buttons to use the class
3. Test page refresh - no cyan flash

### Phase 2: Strategic Cyan Additions
1. **High Impact** (do first):
   - Scroll progress indicator (top of page)
   - Timeline playhead in hero mockup
   - Cyan hover underline on navigation

2. **Medium Impact**:
   - Cyan glow on card hover
   - Cyan accent in footer border
   - Icon container cyan ring on hover

3. **Polish**:
   - Active section indicators
   - Section dividers

---

## Before/After Cyan Usage

### Before (Current)
- Cyan used in: CTA buttons, accent dots, small badges
- **Issue**: Too conservative, not futuristic enough
- **Bug**: Flash on page load

### After (Proposed)
- Cyan used strategically:
  - ✓ Scroll progress indicator (NEW)
  - ✓ Timeline playhead (NEW)
  - ✓ Navigation hover underlines (NEW)
  - ✓ Card hover glows (enhanced)
  - ✓ Icon hover states (enhanced)
  - ✓ Footer accent (NEW)
  - ✓ CTA buttons (fixed, no flash)

**Net Effect**: More futuristic without being "computerish" - cyan feels intentional and interactive.

---

## Testing Checklist

- [ ] No cyan flash on page refresh
- [ ] Buttons have proper dark text immediately
- [ ] Scroll indicator animates smoothly
- [ ] Navigation underlines appear on hover
- [ ] Card hovers show subtle cyan glow
- [ ] Hero timeline has cyan playhead
- [ ] All cyan accents feel cohesive
- [ ] No performance impact from animations

---

## Estimated Time
- Bug fix: 15 minutes
- Cyan enhancements: 30 minutes
**Total: 45 minutes**
