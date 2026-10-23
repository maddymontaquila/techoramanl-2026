# Slides

Slides for Maddy Montaquila and Tommaso Stocchi's Techorama 2026 sessions, built with [reveal.js](https://revealjs.com) 5.1.0.

| Deck | Folder |
| --- | --- |
| Aspireify your app in an hour (Tue 27 Oct, Room 13) | `aspireify/` |
| Use agents to build agents with Aspire + Microsoft Agent Framework (Wed 28 Oct, Room 12) | `agents/` |

Everything is vendored (reveal.js, Poppins and Fira Code fonts, Lucide icons inlined as SVG), so the decks work offline.

Both session covers use the background, logo and centered title/speaker layout from the first slide of `Techorama 2026 Template.potx`, adapted to HTML with the vendored Poppins font. The extracted artwork lives in `shared/img/techorama-2026-*.png`.

Each deck ends with its own feedback QR code on the thank-you slide. `shared/img/aspireify-feedback-qr.png` and `shared/img/agents-feedback-qr.png` are unchanged copies of the corresponding `*-qr-code.png` files in the repository root, bundled here so serving only `slides/` still works.

## Presenting

From the repository root, start the Aspire host:

```sh
npm ci
aspire run
```

Open **Aspireify session** on `aspireify-session` or **Agent session** on
`agent-session` in the dashboard. Each link opens its deck directly.
Aspire manages a separate Vite server and port for each resource. See the root `README.md` for
prerequisites and background-run commands. Hosting dependencies live at the
repository root; the decks themselves remain static and require no build step.

- `S` opens the speaker view (notes, timer, next slide)
- `F` goes full screen, `Esc` shows the slide overview
- Slides are 1920×1080 and scale to fit the window

You can also open `aspireify/index.html` or `agents/index.html` straight from disk; the speaker view works best when served.

## Editing the slides (people and agents)

- `AGENTS.md` – how slides are built and the rules to follow; coding agents working in this folder pick it up automatically (`CLAUDE.md` points to it)
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
