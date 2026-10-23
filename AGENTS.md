# Agent guide: Techorama 2026 Aspire decks

Instructions for any coding agent (Copilot, Claude Code, Codex, Cursor…) editing the slides in this repo. Read this file and `docs/design-guidelines.md` before changing a slide, and start new slides from `templates/index.html`.

## Repo layout

| Path | What it is |
| --- | --- |
| `aspireify/index.html` | "Aspireify your app in an hour", Tue 27 Oct, Room 13 |
| `agents/index.html` | "Use agents to build agents with Aspire + Microsoft Agent Framework", Wed 28 Oct, Room 12 |
| `templates/index.html` | A runnable gallery deck: one example of every slide layout, ready to copy |
| `docs/design-guidelines.md` | Brand and layout rules (colors, type scale, spacing, components, voice) |
| `docs/brand/tokens.json` | Aspire design system tokens (source of truth for colors and type) |
| `shared/` | reveal.js 5.1.0, fonts, images and `deck.css`, shared by every deck |
| `index.html` | Landing page that links both decks |

Everything is vendored. Do not add CDN links, npm dependencies or a build step; the decks must keep working offline on conference wifi.

## How a slide is built

Every slide is one `<section>` inside `.slides`, holding exactly one `.slide` div that carries the whole layout as inline styles, plus optional speaker notes:

```html
<section id="my-slide" data-transition="fade">
<div class="slide" style="background:linear-gradient(160deg,#171b31 0%,#1b2140 55%,#213051 100%);color:#f6f3ff;font-family:'Poppins', Arial, sans-serif;padding:208px 128px 128px;display:flex;flex-direction:column;gap:56px">
  <img src="../shared/img/aspire-logo-light-horizontal.png" alt="Aspire" style="position:absolute;left:128px;top:80px;width:226px;height:56px;object-fit:contain">
  <h2 style="font-size:72px;font-weight:600;letter-spacing:-2px;line-height:1.08">Slide title in sentence case</h2>
  <!-- content -->
</div>
<aside class="notes">What the speaker says. Plain text.</aside>
</section>
```

Rules:

- The canvas is fixed at **1920 × 1080**. reveal.js scales it to the screen; never use `vw`, `vh`, `%` font sizes or media queries.
- **Margins:** `padding:208px 128px 128px` on content slides (the logo sits at top 80px, left 128px). The usable area is 1664 × 744.
- Keep styles inline on the slide. Only put a rule in `shared/deck.css` if it applies to every slide in every deck.
- Every slide shows the Aspire logo top-left at the same position, except where a template omits it.
- Slide `id`s are used in URLs (`#/my-slide`). Keep them short, lowercase and unique within a deck, and do not rename existing ones.
- Speaker notes go in `<aside class="notes">`. Press `S` while presenting to see them.
- Icons are inline Lucide SVGs (`viewBox="0 0 24 24"`, `stroke="currentColor"`, `stroke-width="1.8"`, no fill). Copy one from an existing slide, or take the path from the Lucide icon set. Never use emoji as icons.
- Images live in `shared/img/` and are referenced as `../shared/img/<file>`.

## Content and voice

- Always "Aspire", never ".NET Aspire".
- Sentence case for every title and label. Uppercase is only for the small mono eyebrows, done with `text-transform:uppercase`.
- Speak to the audience as "you". Short claim, then a plain-language payoff.
- CLI commands are lowercase and in Fira Code: `aspire init`, `aspire run`, `aspire start --isolated`.
- One idea per slide. If it needs more than ~6 lines of body text, split it or move the detail to speaker notes.
- Do not invent statistics, quotes or API names. Code on slides must match the demo repos; mark anything illustrative as "Illustrative example".
- Use typographic punctuation in text people read (’ “ ” —); straight quotes only inside code.

## Checking your work

```sh
npx serve .
```

Open the deck, step through every slide you touched, and check that nothing overflows the 1920 × 1080 frame or overlaps the logo. Press `Esc` for the overview grid.

## Where the decks come from

Both decks were designed as Claude Slides artifacts using the Aspire Design System and exported here. If you edit the HTML directly, the Slides versions will be out of date; that's fine, just tell Maddy so nobody re-exports over your changes.
