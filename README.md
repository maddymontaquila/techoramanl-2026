# Aspire at Techorama 2026

Slides for Maddy Montaquila and Tommaso Stocchi's Techorama 2026 sessions, built with [reveal.js](https://revealjs.com) 5.1.0.

| Deck | Folder |
| --- | --- |
| Aspireify your app in an hour (Tue 27 Oct, Room 13) | `aspireify/` |
| Use agents to build agents with Aspire + Microsoft Agent Framework (Wed 28 Oct, Room 12) | `agents/` |

Everything is vendored (reveal.js, Poppins and Fira Code fonts, Lucide icons inlined as SVG), so the decks work offline.

## Presenting

Serve the folder and open a deck:

```sh
npx serve .
```

- `S` opens the speaker view (notes, timer, next slide)
- `F` goes full screen, `Esc` shows the slide overview
- Slides are 1920×1080 and scale to fit the window

You can also open `aspireify/index.html` or `agents/index.html` straight from disk; the speaker view works best when served.

## Editing the slides (people and agents)

- `AGENTS.md` – how slides are built and the rules to follow; coding agents pick this up automatically (`CLAUDE.md` and `.github/copilot-instructions.md` point to it)
- `docs/design-guidelines.md` – Aspire brand colors, type scale, layout and voice
- `docs/brand/tokens.json` – Aspire design system tokens
- `templates/index.html` – a runnable deck with one example of every slide layout; copy a section to start a new slide

## Layout

- `index.html` – simple landing page linking both decks
- `shared/reveal/` – reveal.js 5.1.0 (core + notes plugin)
- `shared/fonts/` – Poppins and Fira Code (latin subsets, from Fontsource)
- `shared/img/` – Aspire logo and artwork, speaker photos
- `shared/deck.css` – shared slide styles

Each slide is a `<section>` with one `.slide` div holding its layout as inline styles, and speaker notes in `<aside class="notes">`.
