# jayLL AI Collection - UI/UX Specification

> **Last Updated**: 2026-01-25  
> **Design Style**: Glassmorphism with Dual Theme Support

---

## 1. Style Overview

| Category | Description |
|----------|-------------|
| **Style** | Glassmorphism |
| **Keywords** | Frosted glass, transparent, blurred background, layered, vibrant background, light source, depth |
| **Effects** | `backdrop-filter: blur(20px)`, subtle borders, animated gradients, smooth transitions, layered Z-index structure |

---

## 2. Color System

### Light Theme (Warm Rose Tones)

| Variable | Hex Code | Usage |
|----------|----------|-------|
| `--bg-gradient-1` | `#FCF8F8` | Primary background |
| `--bg-gradient-2` | `#FBEFEF` | Secondary background |
| `--bg-gradient-3` | `#F9DFDF` | Tertiary background |
| `--bg-gradient-4` | `#F5AFAF` | Accent background |
| `--accent-primary` | `#F5AFAF` | Primary accent |
| `--accent-blue` | `#D4818A` | Interactive elements |
| `--accent-purple` | `#C97B84` | Secondary accent |
| `--text-primary` | `#4A3535` | Main text |
| `--text-secondary` | `rgba(74, 53, 53, 0.7)` | Secondary text |
| `--text-muted` | `rgba(74, 53, 53, 0.5)` | Muted/placeholder text |

#### Glass Effect - Light Mode
| Variable | Value |
|----------|-------|
| `--glass-bg` | `rgba(252, 248, 248, 0.7)` |
| `--glass-bg-hover` | `rgba(251, 239, 239, 0.85)` |
| `--glass-border` | `rgba(245, 175, 175, 0.3)` |
| `--glass-blur` | `20px` |

---

### Dark Theme (Deep Blue-Teal Palette)

| Variable | Hex Code | Usage |
|----------|----------|-------|
| `--bg-gradient-1` | `#240750` | Primary background (Deep Purple) |
| `--bg-gradient-2` | `#344C64` | Secondary background (Navy) |
| `--bg-gradient-3` | `#577B8D` | Tertiary background (Steel Blue) |
| `--bg-gradient-4` | `#57A6A1` | Accent background (Teal) |
| `--accent-primary` | `#57A6A1` | Primary accent (Teal) |
| `--accent-blue` | `#57A6A1` | Interactive elements |
| `--accent-purple` | `#577B8D` | Secondary accent |
| `--accent-pink` | `#7BD4CF` | Highlight accent |
| `--text-primary` | `#FFFFFF` | Main text |
| `--text-secondary` | `rgba(255, 255, 255, 0.75)` | Secondary text |
| `--text-muted` | `rgba(255, 255, 255, 0.55)` | Muted/placeholder text |

#### Glass Effect - Dark Mode
| Variable | Value |
|----------|-------|
| `--glass-bg` | `rgba(52, 76, 100, 0.35)` |
| `--glass-bg-hover` | `rgba(87, 123, 141, 0.45)` |
| `--glass-border` | `rgba(87, 166, 161, 0.3)` |

---

## 3. Typography

| Property | Value |
|----------|-------|
| **Font Family** | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` |
| **Base Size** | `16px` |
| **Line Height** | `1.5` |
| **Logo Text** | `20px`, weight `700`, letter-spacing `-0.02em` |
| **Card Title** | `14px`, weight `600`, white text with shadow |
| **Overlay Title** | `16px`, weight `600`, centered |

---

## 4. Layout & Spacing

| Element | Value |
|---------|-------|
| **Header Height** | `80px` |
| **Card Border Radius** | `16px` |
| **Header Border Radius** | `20px` |
| **Gallery Grid** | `repeat(auto-fill, minmax(280px, 1fr))` |
| **Gallery Gap** | `24px` |
| **Max Content Width** | `1440px` |

---

## 5. Animations & Transitions

| Type | Duration | Easing |
|------|----------|--------|
| **Fast** | `200ms` | `ease` |
| **Normal** | `300ms` | `ease` |
| **Background Pulse** | `15s` | `ease-in-out infinite alternate` |
| **Toast Appear** | `300ms` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| **Loading Spinner** | `1s` | `linear infinite` |

---

## 6. Component Specifications

### Header (Glassmorphism Navbar)
- **Position**: Fixed, floating (`top: 16px`, `left/right: 16px`)
- **Background**: Glass effect with blur
- **Elements**: Logo (left), Search (center), Theme Toggle (right)
- **Shadow**: Glow effect using accent color

### Search Bar
- **Width**: Flexible, max `480px`
- **Placeholder**: Empty (icon-only design)
- **Icon**: Search icon on left side
- **Clear Button**: Appears when text is entered
- **Focus State**: Border color changes to accent, glow shadow

### Prompt Card (Gallery Item)
- **Aspect Ratio**: `1:1` (square)
- **Image Loading**: Native lazy loading (`loading="lazy"`)
- **Default State**:
  - Image output (full card)
  - Title overlay at bottom with gradient
- **Hover State**:
  - Card lifts (`translateY(-4px)`)
  - Image scales (`scale(1.05)`)
  - Overlay appears with blur
  - Shows: Title, Tag badge, "Click to copy" hint
- **Active State**: Slight press effect (`scale(0.98)`)

### Toast Notification
- **Position**: Fixed bottom center
- **Background**: Green (`rgba(34, 197, 94, 0.95)`)
- **Animation**: Slide up with spring bounce
- **Duration**: `2000ms` auto-dismiss

### Theme Toggle
- **Size**: `44px × 44px`
- **Icons**: Sun (dark mode) / Moon (light mode)
- **Hover**: Scale up, icon rotation

---

## 7. Responsive Breakpoints

| Breakpoint | Changes |
|------------|---------|
| **≤ 768px** | Header padding reduced, search moves to full width below logo, gallery min-width `240px` |
| **≤ 480px** | Single column gallery, smaller logo text |

---

## 8. Accessibility

- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Keyboard Navigation**: Cards are focusable with `tabindex`
- **ARIA Labels**: Theme toggle and cards have proper labels
- **Color Contrast**: Text colors optimized for readability

---

## 9. UX Requirements

### Product Goal
- Provide a fast, frictionless way for image creators to **discover image prompts by visual output**
- Primary action: **Search → Filter gallery → Copy prompt**
- No login, no social features, no text-heavy UI

### Target Users
- Image creators using **Nano Banana / GPT Images**
- Users who prefer **visual-first browsing** over reading prompt text

### Core UX Principles
- **Image-first**: Output image is the main content
- **Zero friction**: No login, no modal before copy
- **Minimal cognitive load**: Hide prompt text until user intent is clear
- **Search-driven discovery**: Search behaves as a live filter

### Search Behavior
- Search input is always visible (sticky top bar)
- Search works as a **real-time filter**, not a navigation action
- No page reload or submit required
- Filtering starts after user types ≥ 1 character
- Results update instantly as user types
- Clearing search restores full gallery

### Search Scope
Search keywords match against:
- Prompt title
- Prompt text (hidden content)
- Outcome category/tag

### User Flow
1. User lands on homepage
2. User types keyword into search (icon-only, no placeholder)
3. Gallery filters in real time
4. User hovers on an image
5. User clicks "Copy Prompt"
6. Prompt is copied to clipboard
7. Toast notification confirms copy

### Copy Interaction
- Single-click copy (no confirmation step)
- Visual feedback (toast notification)
- Copies full prompt text

---

## 10. Non-Goals (Explicitly Excluded)
- User accounts or authentication
- Prompt editing or versioning
- Ranking, likes, comments, or analytics
- Prompt descriptions or tutorials

---

## 11. Performance Expectations
- Search filtering must feel instant for typical gallery sizes
- Hover interactions must be smooth and non-blocking
- Images use native lazy loading for performance

---

## 12. Success Criteria
- User can find and copy a prompt in **< 5 seconds**
- UI remains clean even with large prompt collections
- Theme switching is instant and smooth
