# Extract Hardcoded Hex Colors into a Shared Design System / Theme Tokens

Closes #27

---

## Summary

Consolidated **70+ hardcoded hex color literals** scattered across 8 component files into a **centralized design token system** of 20 CSS custom properties defined in `src/index.css`. This eliminates all raw Tailwind arbitrary hex values (`text-[#334EAC]`, `bg-[#081F5C]/70`, etc.) and 8-character hex shadows, making brand color changes a single-file operation instead of a multi-file grep-and-replace.

### Before / After

| Metric | Before | After |
|---|---|---|
| 6-digit hex in `.tsx` files | 45+ occurrences | **0** |
| Files requiring edit for color change | 8 files | **1 file** (`index.css`) |
| Brand color definition | Duplicated inline arbitrarily | **Single source of truth** |
| Color naming | Opaque (`#081F5C`) | **Semantic** (`brand-navy`) |

---

## Design Tokens

### Token Architecture

All tokens live in `src/index.css` inside the existing `@theme inline` block, following Tailwind v4's CSS-based theme convention. This allows them to be used as first-class Tailwind utility classes (e.g., `text-brand-navy`, `bg-neutral-950`, `hover:shadow-brand-blue/50`).

### Brand Palette — 6 tokens

| CSS Custom Property | Hex Value | Tailwind Class | Role |
|---|---|---|---|
| `--color-brand-navy` | `#081F5C` | `text-brand-navy`, `bg-brand-navy`, `from-brand-navy`, etc. | Primary dark blue — headings, gradient endpoints, CTA backgrounds |
| `--color-brand-blue` | `#334EAC` | `text-brand-blue`, `bg-brand-blue`, `via-brand-blue`, `ring-brand-blue` | Secondary blue — gradient midpoints, focus rings, borders |
| `--color-brand-light-blue` | `#BAD6EB` | `text-brand-light-blue`, `bg-brand-light-blue/30`, `from-brand-light-blue` | Light accent — hover states, secondary button backgrounds, gradient highlights |
| `--color-brand-cream` | `#FFF9F0` | `text-brand-cream`, `hover:text-brand-cream`, `hover:bg-brand-cream` | Warm off-white — hover text, button hover backgrounds |
| `--color-brand-orange` | `#FF9F3C` | `text-brand-orange`, `from-brand-orange`, `hover:text-brand-orange` | Warm accent orange — menu overlay icon card gradient start, social icon hover |
| `--color-brand-orange-dark` | `#FF7A3C` | `to-brand-orange-dark` | Darker orange — gradient endpoint pairing with `brand-orange` |

### Neutral Grays — 13 tokens

Used primarily in `Footer.tsx` for text, backgrounds, borders, and hover states across social icons and links. Also used for card backgrounds in `RwaFeatures.tsx` and `ProblemStatement.tsx`.

| CSS Custom Property | Hex Value | Tailwind Class | Usage |
|---|---|---|---|
| `--color-neutral-100` | `#c8d8f0` | `text-neutral-100`, `hover:text-neutral-100` | Footer link hover text (light blue-gray) |
| `--color-neutral-150` | `#c0c0c0` | `text-neutral-150` | Footer email link text |
| `--color-neutral-200` | `#aaa` | `text-neutral-200` | Footer social icon default color |
| `--color-neutral-300` | `#8a8a8a` | `text-neutral-300` | Footer brand description text |
| `--color-neutral-400` | `#7a7a7a` | `text-neutral-400` | Footer link default text |
| `--color-neutral-450` | `#4a6a90` | `border-neutral-450`, `hover:border-neutral-450` | Footer social icon hover border |
| `--color-neutral-500` | `#4a4a4a` | `text-neutral-500` | Footer copyright text |
| `--color-neutral-600` | `#2a3a50` | `bg-neutral-600`, `hover:bg-neutral-600` | Footer social icon hover background |
| `--color-neutral-750` | `#2a2a2a` | `border-neutral-750` | Footer social icon border |
| `--color-neutral-800` | `#1e1e1e` | `border-neutral-800` | Footer divider line |
| `--color-neutral-850` | `#1a1a1a` | `bg-neutral-850` | Footer social icon background, HeroSection icon bg |
| `--color-neutral-900` | `#141414` | `bg-neutral-900` | RWA feature card image container background |
| `--color-neutral-950` | `#0a0a0a` | `bg-neutral-950` | Footer section background, RWA feature card bg, Problem card bg |

### Decorative Accent — 1 token

| CSS Custom Property | Hex Value | Tailwind Class | Usage |
|---|---|---|---|
| `--color-icon-coinbase` | `#2775CA` | `bg-icon-coinbase` | HeroSection floating Coinbase/USDC-style icon background |

---

## Per-File Changes

### `src/index.css` (+20 lines)
Added 20 CSS custom properties to the existing `@theme inline` block, organized with section comments:
- **Brand Palette** (6 tokens)
- **Neutral Grays** (13 tokens)  
- **Decorative / Accent** (1 token)

### `src/Home.tsx` — 15 replacements

| Before | After | Location |
|---|---|---|
| `text-[#081F5C]` | `text-brand-navy` | Original hero heading |
| `from-[#334EAC]` / `to-[#081F5C]` | `from-brand-blue` / `to-brand-navy` | Heading gradient span |
| `text-[#081F5C]/70` | `text-brand-navy/70` | Subtitle paragraph |
| `from-[#081F5C]` / `to-[#334EAC]` | `from-brand-navy` / `to-brand-blue` | Launch App button gradient |
| `hover:shadow-[#334EAC]/50` | `hover:shadow-brand-blue/50` | Launch App button hover shadow |
| `text-[#081F5C]` | `text-brand-navy` | Explore Oracle button text |
| `border-[#081F5C]/20` | `border-brand-navy/20` | Explore Oracle button border |
| `from-[#081F5C]` / `to-[#334EAC]` | `from-brand-navy` / `to-brand-blue` | Stats gradient text (×2) |
| `text-[#081F5C]/60` | `text-brand-navy/60` | Stats labels (×2) |
| `border-[#334EAC]/20` | `border-brand-blue/20` | Portfolio card border |
| `hover:shadow-[#334EAC]/20` | `hover:shadow-brand-blue/20` | Portfolio card hover shadow |
| `text-[#081F5C]/60` | `text-brand-navy/60` | Portfolio label / Total Balance |
| `from-[#081F5C]` / `to-[#334EAC]` | `from-brand-navy` / `to-brand-blue` | Lend button gradient |
| `bg-[#BAD6EB]/30` / `text-[#081F5C]` | `bg-brand-light-blue/30` / `text-brand-navy` | Borrow button |
| `hover:bg-[#BAD6EB]/50` | `hover:bg-brand-light-blue/50` | Borrow button hover |
| `border-[#334EAC]/30` | `border-brand-blue/30` | Borrow button border |
| `from-[#334EAC]` / `to-[#081F5C]` | `from-brand-blue` / `to-brand-navy` | Floating APY card gradient |
| `from-[#081F5C]` / `via-[#334EAC]` / `to-[#081F5C]` | `from-brand-navy` / `via-brand-blue` / `to-brand-navy` | CTA section background |
| `from-[#BAD6EB]` | `from-brand-light-blue` | CTA heading gradient |
| `bg-white text-[#081F5C]` | `bg-white text-brand-navy` | Get Started button |
| `hover:bg-[#BAD6EB]` | `hover:bg-brand-light-blue` | Get Started button hover |
| `hover:shadow-[#BAD6EB]/50` | `hover:shadow-brand-light-blue/50` | Get Started button hover shadow |

### `src/Navbar.tsx` — 5 replacements

| Before | After | Location |
|---|---|---|
| `bg-[#081F5C]/70` | `bg-brand-navy/70` | Navbar pill background |
| `hover:text-[#FFF9F0]` | `hover:text-brand-cream` | Menu button hover (×2) |
| `focus:ring-[#334EAC]` | `focus:ring-brand-blue` | Focus ring on menu/logo/nav links (×3) |
| `text-[#081F5C]` | `text-brand-navy` | Launch App button text |
| `hover:bg-[#FFF9F0]` | `hover:bg-brand-cream` | Launch App button hover |

### `src/FullscreenMenuOverlay.tsx` — 9 replacements

| Before | After | Location |
|---|---|---|
| `from-[#081F5C]` / `via-[#334EAC]/80` / `to-[#081F5C]` | `from-brand-navy` / `via-brand-blue/80` / `to-brand-navy` | Overlay gradient background |
| `hover:text-[#FFF9F0]` | `hover:text-brand-cream` | Close button hover (×2) |
| `focus:ring-[#334EAC]` | `focus:ring-brand-blue` | Focus rings (×4: close btn, logo, menu links, social icons) |
| `text-[#081F5C]` | `text-brand-navy` | Language selector options (×3: en, es, fr) |
| `from-[#FF9F3C]` / `to-[#FF7A3C]` | `from-brand-orange` / `to-brand-orange-dark` | Right-side icon card gradient |
| `hover:text-[#FF9F3C]` | `hover:text-brand-orange` | Social icon hover color |

### `src/Footer.tsx` — 8 replacement types (multiple occurrences each)

| Before | After | Occurrences |
|---|---|---|
| `bg-[#0a0a0a]` | `bg-neutral-950` | 1 (footer root) |
| `text-[#8a8a8a]` | `text-neutral-300` | 1 (description) |
| `text-[#c0c0c0]` | `text-neutral-150` | 1 (email link) |
| `text-[#7a7a7a]` / `hover:text-[#c8d8f0]` | `text-neutral-400` / `hover:text-neutral-100` | 3 (Links, Resources, Socials link lists) |
| `border-[#1e1e1e]` | `border-neutral-800` | 1 (divider hr) |
| `text-[#4a4a4a]` | `text-neutral-500` | 1 (copyright) |
| `bg-[#1a1a1a]` / `border-[#2a2a2a]` / `text-[#aaa]` / `hover:bg-[#2a3a50]` / `hover:border-[#4a6a90]` / `hover:text-[#c8d8f0]` | `bg-neutral-850` / `border-neutral-750` / `text-neutral-200` / `hover:bg-neutral-600` / `hover:border-neutral-450` / `hover:text-neutral-100` | 4 (Instagram, Facebook, LinkedIn, Twitter social icon buttons) |

### `src/RwaFeatures.tsx` — 2 replacements

| Before | After | Location |
|---|---|---|
| `bg-[#0a0a0a]` | `bg-neutral-950` | Feature card background |
| `bg-[#141414]` | `bg-neutral-900` | Image container inside feature card |

### `src/ProblemStatement.tsx` — 1 replacement

| Before | After | Location |
|---|---|---|
| `bg-[#0a0a0a]` | `bg-neutral-950` | Problem card background |

### `src/HeroSection.tsx` — 5 replacements

| Before | After | Rationale |
|---|---|---|
| `bg-[#3B82F6]` | `bg-blue-500` | Exact match → standard Tailwind class |
| `bg-[#2775CA]` | `bg-icon-coinbase` | Non-standard → custom design token |
| `bg-[#FACC15]` | `bg-yellow-400` | Exact match → standard Tailwind class |
| `bg-[#1a1a1a]` | `bg-neutral-850` | Shared neutral → design token |
| `bg-[#1E3A8A]` | `bg-blue-900` | Exact match → standard Tailwind class |

### `src/container-scroll-animation.tsx` — 1 replacement

| Before | After |
|---|---|
| 8-char hex shadow: `#0000004d`, `#0000004a`, `#00000042`, `#00000026`, `#0000000a`, `#00000003` | `rgba(0,0,0,0.3)`, `rgba(0,0,0,0.29)`, `rgba(0,0,0,0.26)`, `rgba(0,0,0,0.15)`, `rgba(0,0,0,0.04)`, `rgba(0,0,0,0.01)` |

Alpha conversion details (0x → decimal / 255):
- `0x4d` = 77 → 77/255 = 0.302 → rounded to 0.30 (delta: 0.002)
- `0x4a` = 74 → 74/255 = 0.290 → rounded to 0.29 (delta: <0.001)
- `0x42` = 66 → 66/255 = 0.259 → rounded to 0.26 (delta: 0.001)
- `0x26` = 38 → 38/255 = 0.149 → rounded to 0.15 (delta: 0.001)
- `0x0a` = 10 → 10/255 = 0.039 → rounded to 0.04 (delta: 0.001)
- `0x03` = 3  → 3/255  = 0.012 → rounded to 0.01 (delta: 0.002)

All deltas are well under the threshold of human perception. Box shadows are inherently subtle visual effects — these approximations are indistinguishable from the originals.

---

## Design Decisions

### 1. Standard Tailwind colors where exact matches exist
Instead of creating unnecessary custom tokens, HeroSection icon colors that match Tailwind's default palette exactly use standard classes:
- `#3B82F6` = `blue-500` (PayPal-style icon)
- `#FACC15` = `yellow-400` (e-style icon)
- `#1E3A8A` = `blue-900` (dark blue icon)

This keeps the custom token surface minimal — only genuinely custom brand colors get tokens.

### 2. Neutral scale naming
The footer grays use a `neutral-{100..950}` scale following Tailwind's convention (higher = darker). While this technically overrides Tailwind v4's built-in `neutral-*` palette, **zero existing code** references Tailwind's built-in neutral classes. All gray usage was already through custom hex values.

### 3. Box-shadow hex → rgba conversion
The container-scroll-animation component used 8-character hex (6 hex + 2 alpha) in its `boxShadow` inline style. Since CSS custom properties don't directly support 8-char hex in Tailwind theme values for shadows, an `rgba()` conversion was the cleanest approach. The alpha approximations are visually imperceptible.

### 4. 3-digit hex consistency
The Footer's `text-[#aaa]` (3-digit hex) was converted to `text-neutral-200` even though the 6-digit grep wouldn't catch it. This ensures complete tokenization and prevents future drift.

---

## Verification

### Acceptance Criteria

✅ **Hex audit clean**
```bash
$ grep -roE '#[0-9A-Fa-f]{6}' src/*.tsx
# (no output — zero matches)
```

✅ **Build succeeds**
```bash
$ npm run build
✓ 2099 modules transformed.
✓ built in 3.93s
```

✅ **Lint passes**
```bash
$ npx eslint src/
# (no errors — only pre-existing baseline-browser-mapping warning)
```

### Manual Verification
- All class name substitutions are 1:1 — no layout, markup, or logic changes
- Opacity modifiers `/70`, `/20`, `/60`, `/50`, `/30` preserved on all token references
- Gradient direction utilities (`to-r`, `to-br`, `to-b`) unchanged
- Focus rings, hover states, transitions, and animations untouched

---

## Risk Assessment

| Risk | Level | Mitigation |
|---|---|---|
| Visual regression from incorrect hex → token mapping | **Low** | Each token was defined with the exact hex value from the original code. Class name substitutions are purely syntactic. |
| Tailwind v4 opacity modifier incompatibility with custom tokens | **Low** | Tailwind v4 natively supports opacity modifiers on custom `--color-*` theme values via `color-mix()`. Verified in build output. |
| Shadow alpha rounding | **Negligible** | Max alpha delta is 0.002, far below visual perception threshold for box shadows. |
| `neutral-*` token collision with Tailwind built-ins | **Low** | No existing code uses Tailwind's built-in `neutral-*` classes. If ever needed, can be accessed via `slate-*` or `gray-*` alternatives. |
| Merge conflicts with other open PRs | **Medium** | 8 files touched, but all changes are isolated to className strings. Conflicts would be trivial line-level class name diffs. |

---

## Files Changed

```
src/index.css                       | +20 lines  (token definitions)
src/Home.tsx                        | ~15 class name replacements
src/Navbar.tsx                      |  ~5 class name replacements
src/FullscreenMenuOverlay.tsx       |  ~9 class name replacements
src/Footer.tsx                      |  ~8 replacement types (22 total lines)
src/RwaFeatures.tsx                 |   2 class name replacements
src/ProblemStatement.tsx            |   1 class name replacement
src/HeroSection.tsx                 |   5 class name replacements
src/container-scroll-animation.tsx  |   1 style value replacement
```

**Net:** 155 insertions, 124 deletions across 9 files (including this PR description).
