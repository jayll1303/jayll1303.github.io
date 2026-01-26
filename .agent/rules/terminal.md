---
trigger: model_decision
---

# Terminal Portfolio Rules & Features

## Overview
The application is a Terminal-themed portfolio `src/pages/Home.jsx` that acts as the main entry point. It simulates a command-line interface for navigation and interaction.

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

### 3. Suggestions (CommandList)
- Displayed when the input is empty.
- Shows available commands with descriptions.
- Highlights the current selection with a visual indicator (conditional CSS class).

## Available Commands

| Command | Action | Implementation Detail |
| :--- | :--- | :--- |
| `prompts` | Navigates to AI Prompt Collection | Uses `navigate('/prompts')` to route to `Prompts.jsx` |
| `resume` | Navigates to Resume page | Uses `navigate('/resume')` |
| `contact` | Displays contact info | Prints output to terminal history |
| `help` | Lists available commands | Prints output to terminal history |
| `clear` | Clears terminal history | Resets history state array |

## Technical Implementation

### Components
- **`Home.jsx`**: Manages state (`input`, `history`, `selectionIndex`), handles key events, and renders the terminal layout.
- **`CommandList.jsx`**: Renders the list of commands. Props: `onSelect` (handler), `selectedIndex` (visual state).
- **`TerminalLine.jsx`**: Renders individual history items (command inputs or system outputs).

### Routing Integration
- The Terminal acts as a "Hub".
- Specialized pages like `Prompts` are implemented as separate React Routes (`/prompts`) with their own layouts (bypassing the default Header/Footer if needed) but sharing the global Theme context.

### Theming
- Supports Light/Dark mode.
- Theme state is managed in `App.jsx` and applied to the `body` class, allowing the Terminal (and other pages) to react via CSS variables (e.g., `--accent-dark`, `--text-primary`).
