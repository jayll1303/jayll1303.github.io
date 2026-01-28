---
trigger: model_decision
---

# JayLL AI Collection - Terminal UI Specification

> **Last Updated**: 2026-01-27
> **Design Style**: Retro Terminal / Command Line Interface (CLI)
> **Platform**: Desktop Web (Responsive)

---

## 1. Style Overview

| Category | Description |
|----------|-------------|
| **Style** | **Terminal / CLI** |
| **Keywords** | Monospace, High Contrast, DOS-like, Scanlines, ASCII, Block Cursor, Raw Data |
| **Effects** | Solid borders (`1px solid`), No gradients, Blinking cursors, OLED Black Backgrounds |

---

## 2. Color System

Inherits fully from the main **Terminal Theme** (`terminal.css`).

### Dark Mode (OLED)
| Element | Appearance |
|---------|------------|
| **Background** | Deep Black (`#020617`) |
| **Text** | White / Light Grey (`#f8fafc`) |
| **Accents** | Green (`#4ade80`), Cyan (`#22d3ee`), Yellow (`#facc15`), Red (`#f87171`) |
| **Borders** | Subtle Grey (`#334155`) or Accent Green on Focus |

---

## 3. Component Specifications

### Header (Window Bar)
- **Style**: Standard terminal window title bar.
- **Elements**: 
  - `JayLL` Logo (Link to Home).
  - Path Indicator: `~/prompts`.
  - Window Controls: Minimize, Maximize, Close.

### Command Input (Footer Area)
- **Style**: Persistent command line at page bottom.
- **Prompt**: `❯` character.
- **Features**:
  - **Auto-focus**: Typing `/` triggers focus.
  - **Autocomplete**: Suggestions for commands (`home`, `help`, `interact`).
  - **Filter**: Typing text real-time filters the gallery.
  - **Dynamic Tips**: Shows "Try pressing Ctrl + I" when filtering.

### Gallery Layout (Masonry)
- **Style**: CSS `column-count` masonry layout (Windows Phone widgets style).
- **Responsive Breakpoints**:
  - ≥1400px: 5 columns
  - ≥1100px: 4 columns
  - ≥768px: 3 columns
  - ≥480px: 2 columns
  - <480px: 1 column
- **Image Sizing**: Dynamic aspect ratio based on original image dimensions.

### Prompt Card (Gallery Item)
- **Style**: "Cyber Module" look.
- **States**:
  - **Default**: Semi-transparent, subtle border.
  - **Hover**: Accent Green border, glow effect, **zoom scale(1.03)**, overlay with details.
  - **Focused**: Same as hover (for keyboard navigation).
- **Interaction**:
  - **Click**: Copies prompt text.
  - **Enter**: Copies prompt (in Interact Mode).

---

## 4. Key Features & Workflow

### Navigation
- **Home**: `home` command or Click Header Logo.
- **Back**: `home` command (ESC clears input only).

### Search & Filtering
- **Syntax**: `query` or `/query`.
- **Feedback**: Dynamic header updates to show `grep` command simulation.

### Interact Mode (Keyboard Navigation)
A specialized mode for keyboard-only users.
- **Toggle**: `interact` command or **`Ctrl + I`** hotkey.
- **Controls**:
  - `Arrow Keys`: Move focus between cards.
  - `Enter`: Copy selected prompt.
  - `ESC` / `Ctrl + I`: Exit mode.

### Shortcuts
| Key | Action |
|-----|--------|
| **`/`** | Focus Input (Filter Mode) |
| **`ESC`** | Clear Input / Exit Interact Mode |
| **`Ctrl + I`** | Toggle Interact Mode |

---

## 5. Directory Structure
User data follows a strict schema for compatibility.
- `prompts/data/index.json`: List of collections.
- `prompts/data/{tag}.json`: Prompt items (`id`, `title`, `promptFile`, `imageUrl`).
- `prompts/data/prompts/`: Text files containing raw prompts.
- `prompts/images/`: Optimized image assets.
