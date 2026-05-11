# CV — Mateusz Jackowski

A curriculum vitae built with SCSS and served via a Node.js/Express server with i18n support.

## Stack

- **EJS** — templated CV layout with i18n bindings
- **SCSS** → compiled to CSS via [Dart Sass](https://sass-lang.com/)
- **Express** — dev server with locale middleware
- **i18n** — JSON-based translations, language switching via URL

## Getting started

```bash
npm install
npm start
```

This runs SCSS compilation in watch mode and starts the server at `http://localhost:3003`.

## i18n

Locale files live in `locales/`. Switch language via the `lang` query parameter:

```
http://localhost:3003/?lang=en
http://localhost:3003/?lang=pl
```

To add a new language, create `locales/<code>.json` and add the code to the `locales` array in `server.js`.

## Scripts

| Command | Description |
|---|---|
| `npm start` | Compile SCSS + start server |
| `npm run scss` | Compile SCSS only (watch mode) |
| `npm run serve` | Start server only |
