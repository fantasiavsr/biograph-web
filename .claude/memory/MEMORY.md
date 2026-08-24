# Project Memory - Biograph Web

## Overview
- **Project**: biograph-web
- **Framework**: React (Create React App?) 
- **Key files**: `src/pages/Home.jsx`, `src/pages/Home.css`
- **Purpose**:Display a hero section with a "Get Started" call-to-action and a bento-grid of feature cards. includes analytics chart, theme selector, and stats.

## Recent Changes
- Updated **Card 5: Get Started** to match the styling and layout of other cards:
  - Uses `.bento-card card-square` class.
  - Includes a header with `<h3>Get Started</h3>` and a badge "Quick".
  - Contains a grid of three steps, each with a number badge, title, and description.
  - Maintains consistent spacing, typography, and interactive button links.
- Added **Analytics Chart** (Line chart) showing profile views, shares, and connections.
- Implemented **Theme selector** with live preview.
- Added **Stats cards** for biographies created, user satisfaction, and design themes.
- Included **Social Integration** section linking to external providers (LinkedIn, GitHub, Twitter).

## Key Components
| Component | Description |
|-----------|-------------|
| **Hero Section** | Asymmetric layout with left column (copy + CTA) and right column (profile preview). Includes stats and CTAs. |
| **Bento Grid** | Organizes features into three categories: Analytics, Theme Customization, Social Integration. |
| **Step Card** | "Get Started in 3 Steps" UI pattern with numbered badges and concise descriptions. |
| **Chart** | Uses Chart.js to visualize user engagement metrics. |
| **Theme Selector** | Allows users to preview and select different visual themes. |
| **Social Connect Buttons** | Icons and links for connecting user accounts to external platforms. |

## Styling Conventions
- **Classes**: `bento-card`, `card-square`, `card-wide`, `card-header`, `section-header`, `section-subtitle`.
- **Consistent spacing**: `gap: 0.5rem` for grids, `margin: 0 0 0.75rem 0` for headings.
- **Typography**: `fontSize: '1rem'`, `fontWeight: '700'` for headings; secondary text uses `color: var(--text-secondary)`.
- **Colors**: Uses CSS variables like `--accent`, `--text-secondary`, `--bg-secondary` for thematic consistency.

## Next Steps / TODO
- Ensure accessibility (ARIA labels, focus states) for all interactive elements.
- Add unit tests for component rendering and state changes.
- Refactor repeated inline styles into CSS modules or styled-components.
- Implement lazy loading for heavy assets (e.g., profile images, chart libraries).
- Consider adding a dark mode toggle that persists across sessions.
- Verify responsiveness on mobile viewports (breakpoint adjustments).

## Memory Summary
- The project showcases a modern, component-driven UI with a focus on professional biography creation.
- Core user flows: create a biography, customize theme, view analytics, connect social accounts.
- The UI follows a card-based design system to maintain visual consistency across features.