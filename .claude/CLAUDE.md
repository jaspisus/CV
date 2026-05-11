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
views/index.ejs     # CV template (only view)
index.scss          # Source styles — edit this
index.css           # Compiled output — do not edit
locales/
  en.json           # English copy + translated data
  pl.json           # Polish copy + translated data
  common.json       # Locale-agnostic data (skill lists)
assets/             # SVG icons (email, phone, location, LinkedIn)
```

## i18n Conventions

- `__('key')` — translated strings/arrays, defined in `en.json` / `pl.json`
- `common.*` — shared data passed from `server.js` as `{ common }`, not translated
- Arrays (e.g. `experience_panels`, `sectors_list`) live in locale files and are iterated in the template with `forEach`

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
