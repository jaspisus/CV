# CV — Mateusz Jackowski

A static HTML/CSS curriculum vitae built with SCSS and served locally via Browser-Sync.

## Stack

- **HTML** — single-page CV layout
- **SCSS** → compiled to CSS via [Dart Sass](https://sass-lang.com/)
- **Browser-Sync** — live-reload dev server

## Getting started

```bash
npm install
npm start
```

This runs SCSS compilation in watch mode and starts a live-reload server at `http://localhost:3003`.

## Scripts

| Command | Description |
|---|---|
| `npm start` | Compile SCSS + serve with live reload |
| `npm run scss` | Compile SCSS only (watch mode) |
| `npm run serve` | Start dev server only |
