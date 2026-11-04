# Change Log
All notable changes of my website will be documented here.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## 3.0.0 - 2026-11-04

### Added
- Icons to hero section buttons for clearer navigation and visual communication.
- Contact form with Formspree integration.
  - Client-side and server-side validation using Zod.
  - React Hook Form integration.
  - Submission loading states and success/error notifications.
  - Character counter for messages.
- Minimalistic, searchable FAQ system shared across the main and Downloads pages.
- Search and category filtering for software downloads.
- Improved download cards supporting multiple versions, GitHub Releases, and external sources.
- Interactive wallpaper downloader featuring:
  - Wallpaper and resolution selection.
  - Automatic preview updates.
  - File-size retrieval using Server Actions.
  - Downloads through a CDN-backed endpoint.
- Subscribe popup with delayed appearance, animations, and session-based dismissal memory.
- Loading skeletons for dynamically loaded components.
- Dark mode support across the redesigned components.

### Moved
- Migrated the entire blog workflow into the unified ArsenTech website.
- Consolidated feedback functionality into the Contact section.
- Moved page-specific navigation links into anchor navigation where appropriate.

### Improved
- Refreshed the design and layout across all major website pages.
- Redesigned the following landing page sections:
  - Hero
  - About
  - Works
  - Recent Posts
  - Projects
  - FAQs
  - Get in Touch
- Redesigned the Downloads page, including software downloads, wallpapers, and FAQs.
- Improved blog content presentation, search, filtering, and pagination.
- Upgraded MDX code blocks with:
  - Shiki syntax highlighting.
  - Additional language support.
  - Diff highlighting for added and removed lines.
  - Copy and download functionality.
  - Line numbers and light/dark theme support.
- Updated Projects with compact thumbnail cards and license badges.
- Refreshed anchor navigation with scroll spy functionality.
- Improved responsive layouts and visual consistency across light and dark themes.
- Improved component reusability and organization.

### Optimized
- Added targeted dynamic imports and loading skeletons to reduce unnecessary initial component loading.
- Introduced request-level deduplication using React's `cache()`.
- Refined Client and Server Component boundaries, removing unnecessary `"use client"` directives.
- Refactored and organized components, files, and imports.
- Moved large, extensible datasets into JSON.
- Optimized existing functionality and resolved leftover bugs.

### Changed
- Renamed `manifest.json` to `manifest.webmanifest`.
- Renamed **Services** to **Works**, with updated content and navigation.
- Replaced the old accordion-based FAQ presentation with a searchable question-and-answer interface.
- Updated section layouts and styling to use reusable shadcn components and the ArsenTech green OKLCH theme.

### Removed
- Separate Feedback section from the Downloads page.
- Legacy Works lightbox gallery.
- Redundant components and unnecessary legacy styling.

---

## 2.0.3 - 2026-10-21
### Changed
- Changed the site background to an Aero version
- Changed each channel profile pics into an aero version

---

## 2.0.2 - 2025-12-21
### Added
- In-page anchor menus (for Navbar clarity)
- Blog Section
- Projects Section
- My Other Channels Section
### Changed
- Optimized some parts of JS Code
- Converted Data into a static JSON file

---

## 2.0.1 - 2024-12-15
### Added
- Subscribe Popup
- Skip to Content Feature
- Christmas theme (active during December - January; legacy seasonal feature preserved)
### Changed
- Colorful Logo on Mouse Over
- New Landing Page Button Colors
- Other changes

---

## 2.0.0 - 2023-03-04 (New Look)
### Added
- Dark Mode support
- `manifest.json`
### Changed
- Updated and improved the UI
- Changed Loader Animation
- Made Color Contrast Ratio Better
- Converted Logo From PNG to SVG
- Changed Lightbox From Jquery Lightbox to FSLightbox (Pure JavaScript)
- Updated Apple Touch Icon and Added Android Icon
- Changed Caret Color
- Other changes
### Fixed
- Fixed Some Spelling Errors

---

## 1.5.0 - 2022-12-04
### Added
- Loader, Background Overlay, Lazy Loading
- Theme Color and Apple Touch Icon
- Downloads Page Link To the Main Website
### Changed
- Made the copyright part of the Footer dynamic
- Converted Some Images To WEBP
- Replaced JQuery with Pure JavaScript
- Minified Entire Website Code
- Optimizations and Minifications for clarity
### Removed
- Removed Other `[error-code].html` pages except the 404 page

---

## 1.0.0 - 2021-01-15 (Rebirth)
### Re-initialized
- Site header and footer with a new design
- Homepage with sections: About, Services, Works, and Contact
- 404 page and tested other error type pages
- JQuery code and LightBox
- Go Top (Scroll to Top) Button
### Changed
- Made Every Service Clickable
- Compressed Some Images
- Minifications, Image compressions, and Optimizations
- Updated Design of a 404 Page and a `<noscript>` detection

---

## 0.5.1 - 2020-12-03
> [!NOTE]
> It is a final stable version of the original v1 (now labeled v0.5 – Prototype version).
> Website was deleted on 2020-12-23 due to lack of optimization and negative feedback
### Added
- `<noscript>` detection for users with JavaScript disabled
- 404 Error Page
- Loading screen
### Fixed
- General layout improvements
- Minor styling consistency fixes

---

## 0.5.0 - 2020-11-15
> [!NOTE]
> This version was initially called `v1`, but later relabeled as `v0.5.x` after website deletion in December 2020
### Initialized
- Site header and footer
- Homepage, portfolio/works page, and about page
- Gallery page (non-optimized images)
- Contact form via Google Forms
- JQuery for interactions
