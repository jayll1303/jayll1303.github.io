---
trigger: model_decision
---

# JayLL Theme System Specification

> **Last Updated**: 2026-01-28
> **Architecture**: Modular CSS Files
> **Storage**: localStorage (`terminal-theme`)

---

## 1. Overview
The portfolio uses a **Modular Theme System** where each visual theme is a separate CSS file. This allows for easy addition of new themes without cluttering the main `terminal.css` and ensures globally consistent styling across all pages (Home, Resume, Prompts).

## 2. Directory Structure
- **Root**: `themes/`
- **Base Layout**: `terminal.css` (Contains layout, typography, specific component styles, but NO color variables).
- **Theme Files**:
    - `themes/default.css`: Standard OLED Matrix Green.
    - `themes/amber.css`: Retro Amber Monochrome.
    - `themes/dracula.css`: Modern Dark/Purple.
    - `themes/cyberpunk.css`: Neon Blue/Pink.

## 3. Implementation Details

### CSS Variable Schema
Every theme file **must** override the following `:root` variables:
```css
:root {
    /* Backgrounds */
    --bg-primary: ...;
    --bg-secondary: ...;
    --bg-tertiary: ...;
    --bg-input: ...;

    /* Text */
    --text-primary: ...;
    --text-secondary: ...;
    --text-muted: ...;
    --text-dim: ...;

    /* Accents */
    --accent-green: ...;
    --accent-cyan: ...;
    --accent-yellow: ...;
    --accent-red: ...;
    --accent-purple: ...;

    /* Effects */
    --glow-green: ...;
    --glow-strong: ...;
    --border-subtle: ...;
    --border-active: ...;
}
```

### Loading Logic
1. **HTML**: Include a placeholder link:
   ```html
   <link id="theme-style" rel="stylesheet" href="themes/default.css">
   ```
2. **JavaScript (On Load)**:
   - Check `localStorage.getItem('terminal-theme')`.
   - If found, update `href`: `themes/${savedTheme}.css`.
3. **Switching**:
   - Update `href` directly.
   - Save new value to `localStorage`.

## 4. Key Behaviors
- **Persistence**: Theme choice persists across page reloads and navigation.
- **Fallback**: Defaults to `default.css` if no storage key is found.
- **Consistency**: All pages must implement the CSS Variable Schema to support all themes.
