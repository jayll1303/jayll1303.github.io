---
trigger: model_decision
---

# Mobile Viewport Height - Global Rule

> **Last Updated**: 2026-01-30
> **Purpose**: Handle mobile keyboard covering the interface

---

## Problem
On mobile devices, when the virtual keyboard opens, the viewport height shrinks. If we use fixed `100vh`, the content gets covered by the keyboard and users need to scroll.

## Solution
Use **Visual Viewport API** to dynamically adjust the height when keyboard opens/closes.

---

## Implementation Checklist

### 1. CSS - Add Dynamic Height Variable

In the main CSS file (e.g., `terminal.css`, `styles.css`), add:

```css
:root {
    /* Dynamic Viewport Height (updated by JS for mobile keyboard) */
    --app-height: 100vh;  /* Fallback */
    
    /* ... other variables */
}

body {
    height: var(--app-height);
    max-height: var(--app-height);
    overflow: hidden;
    /* ... other styles */
}
```

### 2. JavaScript - Add Height Handler

In the main JS file, add this function at the **top level**:

```javascript
// ============================================
// Mobile Viewport Height Handler
// ============================================
function setAppHeight() {
    const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    document.documentElement.style.setProperty('--app-height', `${vh}px`);
}
```

### 3. JavaScript - Initialize on DOMContentLoaded

Inside `DOMContentLoaded`:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // Set initial viewport height
    setAppHeight();
    
    // ... other init code ...

    // Handle viewport resize (mobile keyboard)
    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', setAppHeight);
        window.visualViewport.addEventListener('scroll', setAppHeight);
    } else {
        window.addEventListener('resize', setAppHeight);
    }
});
```

---

## Key Points

1. **`visualViewport.height`** reflects the actual visible area, excluding keyboard
2. **CSS variable `--app-height`** is updated in real-time
3. **Fallback** to `window.innerHeight` for older browsers
4. This pattern ensures **no scrolling** is needed when keyboard opens

## Currently Applied To

- `terminal.css` + `terminal.js` (Home page)
- `resume/resume.js` (Resume page - shares `terminal.css`)
- `prompts/app.js` (Prompts page - shares `terminal.css`)

## When Creating New Pages

**ALWAYS** apply this pattern to any new page with input fields to ensure consistent mobile UX.
