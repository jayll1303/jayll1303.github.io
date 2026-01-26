---
trigger: model_decision
---

# jayLL AI Collection - Terminal UI Specification

> **Last Updated**: 2026-01-26
> **Design Style**: Retro Terminal / Command Line Interface (CLI)

---

## 1. Style Overview

| Category | Description |
|----------|-------------|
| **Style** | **Terminal / CLI** |
| **Keywords** | Monospace, High Contrast, DOS-like, Scanlines, ASCII, Block Cursor, Raw Data |
| **Effects** | Solid borders (`1px solid`), No gradients, No blur, Blinking cursors, Typewriter effects |

---

## 2. Color System

Inherits fully from the main **Terminal Theme** (`src/index.css`).

### Dark Mode (Default)
| Element | Appearance |
|---------|------------|
| **Background** | Deep dark (Black/Navy) |
| **Text** | Neon Teal / Cyan (`--accent-dark`) |
| **Borders** | Solid 1px matching text color |
| **Highlight** | Inverted colors (Text color bg, Black text) |

### Light Mode
| Element | Appearance |
|---------|------------|
| **Background** | Pale / White (`--bg-gradient-1-light`) |
| **Text** | Dark Rose / Brown (`--text-primary-light`) |
| **Borders** | Solid 1px (`--accent-light`) |

---

## 3. Typography

| Property | Value |
|----------|-------|
| **Font Family** | `'Consolas', 'Monaco', 'Courier New', monospace` (Inherited) |
| **Headings** | Uppercase, bracketed e.g., `[ PROMPT_COLLECTION ]` |
| **Body** | Standard monospace, fixed tracking |

---

## 4. Component Specifications

### Header (Command Bar)
- **Style**: Sticky top bar, looks like a menu bar or status line.
- **Elements**: 
  - `[ HOME ]` (Link)
  - `> SEARCH: _` (Input field acting as command prompt)
  - `[ THEME ]` (Toggle)

### Search Input
- **Appearance**: No border radius, solid underline or transparent.
- **Prefix**: `find --query` or simple `>` prompt.
- **Cursor**: Blinking block `█`.

### Prompt Card (Gallery Item)
- **Border**: Solid 1px line. `border-radius: 0`.
- **Image**: Dithered effect (optional) or raw.
- **Title**: Displayed primarily as a filename, e.g., `cyberpunk_city.png`.
- **Hover State**:
  - Border color changes / glows.
  - "Metadata" overlay appears (like file stats actions).
  - Cursor changes to pointer.
- **Copy Action**:
  - Interaction: Click anywhere or on a specific `[ COPY ]` "button" (text).
  - Feedback: "Terminal" log message or status bar update (e.g., `>> COPIED TO CLIPBOARD`).

### Toast Notification
- **Style**: Console log message appearing at the bottom or top.
- **Animation**: Typewriter print out.

---

## 5. UX Requirements

### User Flow
1. **Navigation**: User types `prompts` in Home -> Navigates to Prompts Route.
2. **Discovery**: Gallery presents items as "Files".
3. **Filtering**: Typing in search acts like `grep` filtering the list in real-time.
4. **Action**: Hovering an image shows "File Details" (The prompt). Clicking copies it.

### Design Principles
- **Consistency**: Must feel exactly like an extension of `Home.jsx`.
- **Raw**: Avoid "web" aesthetics (shadows, rounded corners).
- **Efficiency**: Fast, text-heavy feel (even though it's an image gallery).
