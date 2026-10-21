# CV — Project Specs

Personal CV/resume website for Mateusz Jackowski (Frontend Developer).

## Stack

- **Express 5** (`server.js`) — single-route dev server, CommonJS modules
- **EJS 5** (`views/index.ejs`) — single template, i18n via `__('key')`
- **i18n** — locale switching via `?lang=en` / `?lang=pl` query param
- **SCSS** (`index.scss`) — compiled to `index.css` via Dart Sass; never edit `index.css` directly
- Server runs at `http://localhost:3003`

## Project Structure

```
server.js           # Express app + i18n config
views/index.ejs     # CV template (3 A4 pages: summary+skills, IT experience, earlier experience+education) + optional cover letter page
views/partials/experience-panel.ejs  # Single experience entry, included on pages 2 and 3
views/partials/gdpr-clause.ejs       # GDPR consent clause, included on page 3 and the cover letter
index.scss          # Source styles — edit this
index.css           # Compiled output — do not edit
locales/
  en.json           # English copy + translated data
  pl.json           # Polish copy + translated data
  common.json       # Locale-agnostic data (single `skills_list`)
assets/             # SVG icons (email, phone, location, LinkedIn)
```

## i18n Conventions

- `__('key')` — translated strings/arrays, defined in `en.json` / `pl.json`
- `common.*` — shared data passed from `server.js` as `{ common }`, not translated
- Arrays (e.g. `experience_panels`, `earlier_experience_panels`, `sectors_list`) live in locale files and are iterated in the template with `forEach`
- `experience_panels` entries may omit `projects`; the partial renders the "Projects" block only when present
- **`pl.json` is the source of truth** — on this branch (`insoft-consulting`) the Polish CV is profiled for an ERP implementation consultant role at Insoft Consulting (not System Analyst); `en.json` is outdated and will be rebuilt separately
- PL-only content (`cover_letter`, `gdpr_clause`) is read via `getCatalog()` instead of `__()`, so locales without these keys simply skip them
- i18n writes missing keys into locale files on render (`updateFiles` default) — opening `?lang=en` currently adds placeholder keys to `en.json`; revert that file if it happens

## CSS Conventions

- **BEM** naming: `.block__element--modifier`
- Two shared SCSS mixins at top of `index.scss`: `separator` (section divider) and `skill-item` (pill badge)
- Print styles via `@media print` + `@page { size: A4 }` — CV is designed to print to A4

## Dev Commands

| Command | What it does |
|---|---|
| `npm start` | Compile SCSS (watch) + nodemon server — use this for development |
| `npm run scss` | SCSS watch only |
| `npm run serve` | Server only |
