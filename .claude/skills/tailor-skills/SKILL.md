---
name: tailor-skills
description: Customize locales/common.json skill lists for a specific job offer. Reads the job offer URL, picks the most relevant skills from the full skill pool, and overwrites key_skills_list and rest_skills_list in common.json. Use when the user runs /tailor-skills or wants to tailor the CV to a job posting.
allowed-tools: WebFetch Read Edit
model: sonnet
effort: high
argument-hint: "<job-offer-url>"
---

Tailor the CV skill lists in `locales/common.json` to match a specific job offer.

**Arguments**: `$ARGUMENTS`

`$ARGUMENTS` must be a URL to a job offer page (e.g. `https://justjoin.it/job-offer/...`). If empty, ask the user for the URL once and stop until they provide it.

## Supporting files

Read `skill-pool.md` (located in the same directory as this file) at the start of the skill. It contains:

- The full canonical skill list with allowed variants.
- Variant selection rules.

Use ONLY skills from that list unless the user explicitly approves new ones (see Step 2b below).

## Steps

### Step 1 — Fetch the job offer

Use `WebFetch` on `$ARGUMENTS`. Extract:

- Required / must-have technologies and skills.
- Nice-to-have / preferred technologies and skills.
- Any domain hints (e.g. performance, accessibility, AI, testing).

### Step 2a — Detect unknown skills and new variants

Compare the skills and technologies mentioned in the offer against the pool from `skill-pool.md`. Identify two categories:

**A) Skills not in the pool at all** — mentioned in the offer and genuinely technical (ignore soft skills like "good communication"):

- List them: _"The offer mentions skills not in your pool: [X, Y, Z]. Should I add any of them?"_
- For each approved entry, add a new row to `skill-pool.md` with `—` in the variant column.

**B) New variants of existing pool skills** — the offer uses a name or phrasing for a known skill that isn't currently listed as a variant (e.g., offer says "React Query" but pool only has `TanStack Query`, or "Vitest" for a skill listed as `Unit Testing (Jest)`):

- List them: _"The offer uses these alternative names not currently in your pool as variants: [skill → 'offer wording']. Should I add any as allowed variants?"_
- For each approved variant, update the relevant row in `skill-pool.md`.

Combine both categories into a single question if both are present. Wait for the user's response before continuing. If neither category has entries, skip to Step 2b.

### Step 2b — Select and rank skills

From the pool (now updated if Step 2a added entries), build the two lists using the rules below.

#### Fixed anchors

`key_skills_list` always starts with `React` and `Next.js` in positions 1–2. For positions 3–4, include `TypeScript` and/or `JavaScript` based on what the offer mentions: both if both are mentioned; only the one mentioned if just one appears; `TypeScript` alone if neither is mentioned. Apply variant rules to their names (e.g. `JavaScript (ES6+)`).

#### Pinned skills

Skills listed in the **Pinned skills** table in `skill-pool.md` always appear in the output regardless of the offer. Place them in `rest_skills_list` by default; promote to `key_skills_list` if the offer explicitly requires them. Pinned skills bypass the Restricted skills rule.

#### HTML / CSS rule

`HTML` / `HTML5` and `CSS` / `CSS3` always go into `key_skills_list` (never `rest_skills_list`) when the offer mentions them.

#### General rules

- **key_skills_list** — offer must-haves first, then strongest matches. These are the headline skills.
- **rest_skills_list** — pinned skills + nice-to-haves + contextually relevant skills, ordered by relevance. Omit skills with no connection to the role (except pinned skills, which are always included).
- Skills listed in the **Restricted skills** table in `skill-pool.md` must only be included if the offer explicitly names them (pinned skills are the only exception to this rule).
- Never include a skill in both lists.
- Never add skills outside the pool.
- Include as many skills as are relevant — there is no cap on either list. Err on the side of inclusion.
- Apply the variant rules from `skill-pool.md` based on the offer's wording.
- **Always include at least one state management skill** in `key_skills_list`. `TanStack Query` counts toward this requirement when promoted to key.
- **Skill categories** are logical groupings of related pool skills. Keep categorically related skills adjacent and never split them across `key_skills_list` and `rest_skills_list`.

### Step 3 — Update common.json

Read `locales/common.json`. Overwrite `key_skills_list` and `rest_skills_list` with the selected arrays. Preserve all other fields and formatting.

### Step 4 — Report

Print a short summary:

- The role/title detected in the offer (or URL if not found).
- **Key skills** (the new `key_skills_list`).
- **Rest skills** (the new `rest_skills_list`).
- Any skills from the pool that were **omitted** and why (one line each, max 3 reasons).
