---
trigger: model_decision
---

# Terminal Portfolio Rules & Features

## Overview
The application is a Terminal-themed portfolio `index.html` (and `terminal.js`) that acts as the main entry point. It simulates a command-line interface for navigation and interaction.

## Core Mechanics

### 1. Command Input
- **Input Field**: Auto-focused text input simulating a terminal prompt (`visitor@jayll-io:~$`).
- **Command Processing**: Commands are case-insensitive and trimmed.
- **History**: Display previous commands and outputs (or errors) above the active input line.

### 2. Navigation & Interactions
- **Keyboard Support**:
    - `Enter`: Executes the typed command or the currently selected suggestion.
    - `ArrowUp` / `ArrowDown`: Navigates through the `CommandList` suggestions.
- **Mouse Support**: Clicking on a command in the suggestion list executes it immediately.

### 3. Suggestions (Autocomplete)
- Displayed when the input is empty or matches typed text.
- Shows available commands with descriptions.
- **Hidden Commands**: Some commands (e.g., `sudo`, `rm -rf`) are hidden from this list.

## Available Commands

| Command | Action | Implementation Detail |
| :--- | :--- | :--- |
| `prompts` | Navigates to AI Prompt Collection | Uses `navigateTo('/prompts/')` |
| `resume` | Navigates to Resume page | Uses `navigateTo('/resume/')` |
| `theme` | Switches visual theme | `theme [name]`. Persists to localStorage. |
| `neofetch` | Displays system info | Shows ASCII art and stats |
| `help` | Lists available commands | Prints filtered list (hides secret commands) |
| `clear` | Clears terminal history | Resets output |
| `github` | Opens GitHub profile | `window.open` |

### Hidden / Easter Egg Commands
- `sudo`: Permission denied simulation.
- `rm -rf`: Fake system deletion warning.
- `whoami`: Returns user info.

## Technical Implementation

### Components
- **`terminal.js`**: Manages state, handles key events, and renders the terminal layout.
- **`terminal.css`**: Defines layout and base styles. Theme colors are **NOT** defined here.
- **`themes/` Directory**: Contains separate CSS files (`default.css`, `amber.css`, etc.) for theming.

### Routing Integration
- specialized pages like `Prompts` (`/prompts/`) and `Resume` (`/resume/`) share the same **Theme System**.
- Navigation uses `window.location.href` for real page loads to ensure clean state.

### Theming System
- **Dynamic Loading**: Themes are applied by swapping the `<link id="theme-style">` href.
- **Persistence**: Saved in `localStorage` key `terminal-theme`.
- **Global**: All pages check this key on load to apply the correct theme.

## React homepage motion (2026-10-29)

The root route currently serves the React chat portfolio from `chat-app/`, also available at `/chat/`; the legacy landing scripts do not own this UI. See `chat/README.md` for build and interface behavior. AI studio motion lives in `chat-app/src/portfolio-motion.js` and `portfolio-motion.css`. Preserve visible default content, native scroll containers, transform/opacity animation, system reduced-motion changes, cleanup of animations/observers, and dialog focus restoration. The welcome uses existing copy split visually into words with one accessible text equivalent. Timeline segments reveal per visible entry; gallery details use native dialogs with animated close. Mobile navigation traps focus and hides closed off-canvas controls from keyboard navigation.

## React appearance and profile (2026-10-29)

The sidebar profile uses the verified public GitHub avatar bundled locally, with a monogram fallback. Keep profile name/title at 16px line-height with a 2px gap and reserve the 32px avatar dimensions. Appearance offers Light/Dark/System, defaults to the system, persists separately as `jayll-color-mode`, follows live OS changes only in System, and synchronizes tabs. The shared `appearance-init.js` is inlined before paint by Vite; avoid duplicate startup logic. Preserve full palette coverage of routes, dialogs, skeletons, focus states and scrollbars. Native theme crossfades must honor reduced motion. Legacy static-page theme preferences remain separate.

## React Projects Spotlight (2026-10-29)

The default Projects directory includes the approved TiengNoi Spotlight with Pondie Tab, Win+V Panel Tweaks and VoxCPM-VN below. `project-spotlight.jsx` owns composition and reads existing project records/icons; `project-spotlight.css` owns scoped appearance-token styling. All four controls open internal project details. The voice visual is labelled as an illustration; do not add fake playback or product requests. Hide Spotlight during nonempty search, Open source scope or category filtering; restore it after clearing filters and keep it off Skills. Preserve the full directory, native scrolling, keyboard access, both palettes, responsive stacking and existing reduced-motion reveal cleanup.

The supporting VoxCPM-VN project has a verified YouTube video record. Render its privacy-enhanced iframe outside clickable cards, lazily, without autoplay, at least 200px in both dimensions, with a descriptive title, fullscreen support and strict-origin-when-cross-origin referrer policy. Keep a normal Watch on YouTube fallback and retain Coin & Stock Monitor in the full catalog. YouTube remains a third-party service contacted by the player; do not describe the embed as fully offline or tracking-free.
