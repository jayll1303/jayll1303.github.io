---
trigger: model_decision
---

# JayLL Resume - Terminal UI Specification

> **Last Updated**: 2026-01-28
> **Design Style**: Retro Terminal / Command Line Interface (CLI)
> **Platform**: Desktop Web (Responsive)
> **Route**: `/resume/`

---

## 1. Style Overview

| Category | Description |
|----------|-------------|
| **Style** | **Terminal / CLI** |
| **Keywords** | Monospace, Clean Layout, Readability Focus, Data-Driven |
| **Effects** | Standard terminal colors, Minimal animations (`fadeIn`), Distinctive section headers |

---

## 2. Color System

Inherits fully from the main **Terminal Theme** (`terminal.css`).

### Palette Usage
| Element | Color Variable | Usage |
|---------|----------------|-------|
| **Name** | `--accent-green` | Primary header name |
| **Role/Title** | `--accent-cyan` | Professional title |
| **Company/School** | `--accent-yellow` | Organization names |
| **Section Icons** | `--accent-purple` | Section headers |
| **Links** | `--text-secondary` | Hover defaults to yellow |

---

## 3. Data Structure

Resume content is **decoupled** from HTML to allow easy updates.

- **Source File**: `resume/resume.json`
- **Format**: JSON Resume schema (modified)
- **Key Sections**:
  - `basics`: Name, label, email, url, summary.
  - `experience`: List of jobs (company, position, dates, summary).
  - `projects`: List of key projects.
  - `education`: Academic history.
  - `skills`: Array of technical skills.

---

## 4. Key Features & Workflow

### Navigation
- **Scroll Mode**: Content is rendered within a scrollable terminal output area.
- **Controls Hint**: Fixed overlay showing available keys.

### Shortcuts
| Key | Action |
|-----|--------|
| **`Arrow Up/Down`** | Smooth scroll by step |
| **`PageUp/Dn`** | Scroll by page block |
| **`Home`** | Jump to Top |
| **`End`** | Jump to Bottom |
| **`ESC`** | Focus Command Input |

### Commands
| Command | Description |
|---------|-------------|
| **`home`** | Return to main homepage |
| **`print`** | Open system print dialog (PDF) |
| **`help`** | Show available commands |

---

## 5. Technical Implementation Details
- **Loader**: Displays `cat ./resume.json | render-markdown` simulation while fetching.
- **Rendering**: Pure JS generation from JSON data (no external templating engine).
- **Printing**: `@media print` styles should be considered for future updates (currently uses raw browser print).
