---
trigger: always_on
---

# A prompt collection in Glassmorphism style.

| `Style Category (Thể loại UI)` | `Keywords (Từ khóa)` | `Color Schemes (Màu sắc)` | `Effects/Features (Hiệu ứng/Tính năng)` |
| **`Glassmorphism`** | `Frosted glass, transparent, blurred background, layered, vibrant background, light source, depth.` | `Translucent colors, vibrant background colors (blue, purple, pink), white/light text.` | `Background blur (backdrop-filter), subtle border, light source reflection, layered Z-index structure.` |

# Website names: jayLL AI collection

# UX Requirements

## 1. Product Goal
- Provide a fast, frictionless way for image creators to **discover image prompts by visual output**.
- Primary action: **Search → Filter gallery → Copy prompt**.
- No login, no social features, no text-heavy UI.

---

## 2. Target Users
- Image creators using **Nano Banana / GPT Images**
- Users who prefer **visual-first browsing** over reading prompt text.

---

## 3. Core UX Principles
- **Image-first**: Output image is the main content.
- **Zero friction**: No login, no modal before copy.
- **Minimal cognitive load**: Hide prompt text until user intent is clear.
- **Search-driven discovery**: Search behaves as a live filter.

---

## 4. Information Display
### Prompt Card (Gallery Item)
Default state:
- Image output
- Prompt title (single line)

Hover state:
- Dimmed image overlay
- Prompt title (centered)
- “Copy Prompt” action

> Prompt text is NOT visible by default.

---

## 5. Search as Filter (Primary Interaction)

### Search Behavior
- Search input is always visible (sticky top bar).
- Search works as a **real-time filter**, not a navigation action.
- No page reload or submit required.

### Search Scope
Search keywords match against:
- Prompt title
- Prompt text (hidden content)
- Outcome category

### Search UX Rules
- Filtering starts after user types ≥ 1 character.
- Results update instantly as user types.
- Clearing search restores full gallery.

---

## 6. User Flow
1. User lands on homepage.
2. User types keyword into search.
3. Gallery filters in real time.
4. User hovers on an image.
5. User clicks “Copy Prompt”.
6. Prompt is copied to clipboard.

---

## 7. Copy Interaction
- Single-click copy (no confirmation step).
- Visual feedback (toast or micro-feedback).
- Copies full prompt text.

---

## 8. Non-Goals (Explicitly Excluded)
- User accounts or authentication
- Prompt editing or versioning
- Ranking, likes, comments, or analytics
- Prompt descriptions or tutorials

---

## 9. Performance Expectations
- Search filtering must feel instant for typical gallery sizes.
- Hover interactions must be smooth and non-blocking.

---

## 10. Success Criteria
- User can find and copy a prompt in **< 5 seconds**.
- UI remains clean even with large prompt collections.
