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
