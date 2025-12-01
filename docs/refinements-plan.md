# TV7 Website Refinements Plan

## Issues Identified from Live Preview

### 1. Logo Duplication
**Problem**: Logo image (604x290) already contains "TV7 Clip Studio" text, but we're also showing text next to it - redundant.

**Current Implementation** ([Navbar.astro:16-19](../src/components/Navbar.astro#L16-L19)):
```astro
<img src="/logo-tv7.png" alt="TV7 logo" class="h-10 w-auto rounded-md" />
<span class="text-lg font-semibold tracking-normal text-tv7-text-primary hidden sm:inline">
  TV7 Clip Studio
</span>
```

**Solution Options**:

**Option A: Remove duplicate text, enlarge logo (RECOMMENDED)**
- Remove the `<span>` text element entirely
- Increase logo height from `h-10` to `h-12` or `h-14` for better visibility
- Logo already has good aspect ratio (604:290 ≈ 2:1)

**Option B: Hide logo image, keep text for brand consistency**
- Make logo `sr-only` (screen reader only) for SEO
- Keep text visible
- Less distinctive, logo provides better brand recognition

**Option C: Use logo as favicon/meta only**
- Remove from navbar entirely
- Just show text
- Not recommended - logo adds visual interest

**Recommendation**: **Option A** - The logo is the primary brand asset, remove redundant text.

---

### 2. Too Dark - "Midnight Brighter" Palette

**Problem**: Current backgrounds are too dark/murky. Need "midnight brighter" feel with blue tints.

**Current Colors**:
```js
bg: '#0A0B0F',           // Too dark, pure gray
bgSecondary: '#12141A',
surface: '#1A1D26',
border: '#2A2D38',
```

**Proposed "Midnight Brighter" Palette**:
```js
// Midnight blue-tinted backgrounds (lighter, more vibrant)
bg: '#0F1419',           // Lighten + slight blue tint
bgSecondary: '#161B22',  // GitHub dark inspired
surface: '#1F2937',      // Visible panels (Tailwind gray-800)

// Brighter borders
border: '#374151',       // More visible (Tailwind gray-700)
borderStrong: '#4B5563', // Stronger contrast (Tailwind gray-600)

// Adjusted text for better contrast on lighter bg
text: {
  primary: '#F3F4F6',    // Brighter white (Tailwind gray-100)
  secondary: '#D1D5DB',  // Brighter secondary (Tailwind gray-300)
  tertiary: '#9CA3AF',   // More visible tertiary (Tailwind gray-400)
}
```

**Rationale**:
- Shift from pure grays → midnight blue tints
- Lighten all backgrounds by ~15-20%
- Maintain dark theme but improve readability
- Better contrast with amber/cyan accents
- More professional "late night work" aesthetic vs "void black"

**Visual Impact**:
- Panels become more distinct
- Content more readable
- Less eye strain
- Maintains premium dark aesthetic
- Closer to VS Code Dark+, GitHub Dark, or Notion dark themes

---

## Implementation Status: ✅ COMPLETE

### Step 1: Fix Logo (5 min) ✅
**File**: [Navbar.astro](../src/components/Navbar.astro)

```astro
<!-- BEFORE -->
<img src="/logo-tv7.png" alt="TV7 logo" class="h-10 w-auto rounded-md" />
<span class="text-lg font-semibold tracking-normal text-tv7-text-primary hidden sm:inline">
  TV7 Clip Studio
</span>

<!-- AFTER -->
<img src="/logo-tv7.png" alt="TV7 Clip Studio" class="h-12 w-auto" />
```

**Changes**:
- Remove duplicate text span
- Increase logo height: `h-10` → `h-12` (48px)
- Remove `rounded-md` if logo already has proper shape
- Update alt text to include full brand name for SEO

---

### Step 2: Brighten Palette (10 min) ✅
**File**: [tailwind.config.js](../tailwind.config.js)

Update the `colors.tv7` object:

```js
colors: {
  tv7: {
    // Midnight blue-tinted backgrounds (brighter)
    bg: '#0F1419',
    bgSecondary: '#161B22',
    surface: '#1F2937',

    // Brand colors (keep as is)
    cyan: '#00E5FF',
    cyanSoft: '#4DD4F4',
    violet: '#7A5CFF',
    violetSoft: '#9B82FF',

    // Brighter borders for better visibility
    border: '#374151',
    borderStrong: '#4B5563',

    // Brighter text colors (better contrast)
    text: {
      primary: '#F3F4F6',
      secondary: '#D1D5DB',
      tertiary: '#9CA3AF',
    },

    // Warm accent (keep as is)
    amber: '#F59E0B',
    amberSoft: '#FCD34D',

    // Update legacy colors
    panel: '#1F2937',
    deep: '#161B22',
    ink: '#1F2937',
    muted: '#1F2937',
  },
}
```

---

### Step 3: Test & Adjust (5 min)

**Check these areas**:
1. Hero section - ensure mockup frame is visible
2. Navigation - logo sizing and visibility
3. Cards/panels - border visibility
4. Text readability on new backgrounds
5. Amber accents - still pop against lighter backgrounds
6. Footer - ensure proper contrast

**Potential micro-adjustments**:
- If panels blend too much: increase surface opacity or add subtle borders
- If text too bright: dial back text.primary slightly
- If amber gets lost: increase saturation or use amberSoft in some places

---

## Before/After Comparison

### Logo
- **Before**: Logo + duplicate text (redundant)
- **After**: Just logo, larger and clearer

### Backgrounds
- **Before**: `#0A0B0F` (very dark gray, eye strain)
- **After**: `#0F1419` (midnight blue tint, readable)

### Overall Feel
- **Before**: "Void black" cyberpunk
- **After**: "Midnight blue" professional (like VS Code Dark, GitHub Dark)

---

## Estimated Time
- Logo fix: 5 minutes
- Palette update: 10 minutes
- Testing: 5 minutes
**Total: 20 minutes**

---

## Success Criteria
✓ Logo appears once, properly sized
✓ Backgrounds are "midnight" themed but brighter
✓ Text remains easily readable
✓ Panels/borders are clearly visible
✓ Maintains dark theme aesthetic
✓ Reduces eye strain while preserving premium feel
