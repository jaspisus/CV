# Skill Pool

All available skills for the CV. Use ONLY entries from this list — never invent new ones.

## Canonical names and variants

| Canonical            | Allowed variants                     |
| -------------------- | ------------------------------------ |
| React                | React.js, React (Hooks)              |
| TypeScript           | —                                    |
| Next.js              | Next                                 |
| JavaScript           | JavaScript (ES6+)                    |
| AI Integration (LLM) | —                                    |
| Claude Code          | Copilot, ChatGPT, Gemini             |
| REST API             | —                                    |
| WebSockets           | —                                    |
| Redux                | RTK, Redux Toolkit                   |
| TanStack Query       | —                                    |
| RWD (Mobile First)   | Responsive Web Design (Mobile First) |
| Core Web Vitals      | WCAG                                 |
| Tailwind             | Tailwind CSS                         |
| Sass                 | Sass (SCSS), LESS                    |
| CSS-in-JS            | Styled Components                    |
| Unit Testing (Jest)  | React Testing Library, Vitest        |
| CI/CD                | —                                    |
| Agile / Scrum        | —                                    |
| Jira                 | —                                    |
| i18n                 | —                                    |
| Material UI          | —                                    |
| Bootstrap            | —                                    |
| Prompt Engineering   | —                                    |
| React-Router         | —                                    |
| Husky                | —                                    |

## Pinned skills

Always include these regardless of the offer. Place in `rest_skills_list` by default; promote to `key_skills_list` if the offer explicitly requires them. Pinned skills bypass the Restricted skills rule.

| Pinned skill     | Notes                                              |
| ---------------- | -------------------------------------------------- |
| `TanStack Query` | place adjacent to any other state-management skill |
| `Tailwind`       | apply variant rules (e.g. `Tailwind CSS`)          |
| `Sass`           | apply variant rules (e.g. `Sass (SCSS)`)           |
| `Git`            | -                                                  |

## Restricted skills

Include these **only if the offer explicitly mentions them** by name. Never add them as general "relevant" picks.

| Canonical   | Allowed variants  |
| ----------- | ----------------- |
| HTML        | HTML5             |
| CSS         | CSS3              |
| Node.js     | Node              |
| Express.js  | —                 |
| Vite        | —                 |
| Azure       | Microsoft Azure   |
| Photoshop   | Adobe Photoshop   |
| Illustrator | Adobe Illustrator |
| ESLint      |                   |
| Prettier    |                   |

## Variant selection rules

- Use `React (Hooks)` when the offer mentions hooks, functional components, or modern React patterns; otherwise use `React`.
- Use `JavaScript (ES6+)` when the offer mentions ES6+, modern JS syntax, or arrow functions; otherwise use `JavaScript`.
- Use `HTML5` when the offer explicitly mentions HTML5; otherwise use `HTML`.
- Use `CSS3` when the offer explicitly mentions CSS3; otherwise use `CSS`.
- Use `Responsive Web Design (Mobile First)` when the offer uses the full phrase; otherwise use `RWD (Mobile First)`.
- Use `WCAG` when the offer focuses on accessibility; otherwise use `Core Web Vitals`.
- Use `Sass (SCSS)` when the offer explicitly mentions SCSS; otherwise use `Sass`.
- Use `Vitest` when the offer explicitly mentions Vitest; use `React Testing Library` when the offer focuses on component testing; otherwise use `Unit Testing (Jest)`.
