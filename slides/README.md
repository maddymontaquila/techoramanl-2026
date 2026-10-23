# Slides

Slides for Maddy Montaquila and Tommaso Stocchi's Techorama 2026 sessions, built with [Reveal.js](https://revealjs.com) and Vite.

| Deck | Folder |
| --- | --- |
| Aspireify your app in an hour (Tue 27 Oct, Room 13) | `aspireify/` |
| Use agents to build agents with Aspire + Microsoft Agent Framework (Wed 28 Oct, Room 12) | `agents/` |

Reveal.js is npm-managed; Poppins and Fira Code fonts, images and inline Lucide SVGs are local. The production build bundles everything needed to present without internet access. Resource links still need a connection.

Both decks begin with the official Techorama opener, followed by a conference-branded session title and then the speaker slide. The event artwork comes directly from the supplied `Techorama 2026 Template.potx`; titles and presenter names remain editable HTML. Existing `#/cover` links still open the session title.

The title slides use DS Wallau extracted from the template and the matching full Alegreya 2.009 release (the embedded subset omits some punctuation), bundled as local webfonts. Font licenses/notices in `public/font-licenses/` are included in `dist/`; DS Wallau's conference and web-use permission is specific to these decks. Each closing slide includes its matching SpreaView session review QR image.

## Presenting

Use Node.js 20.19+, 22.13+, or 24+. Run commands from the **repository root**, not this folder:

```sh
npm ci
npm run dev
```

Open the URL printed by Vite and choose a deck. Editing a source file updates the development preview.

Alternatively, run `aspire run` after `npm ci` to open the **Aspireify session**
and **Agent session** links in the Aspire dashboard. Aspire manages a separate
Vite server and port for each deck using the same root dependencies and Vite
configuration. See the root `README.md` for Aspire prerequisites and background
commands. `npm run aspire:build` checks the AppHost separately from the slide build.

Before the talk:

```sh
npm run build
npm run preview
```

Present from the preview URL printed by Vite. `dist/` is also ready to deploy to a static web host, at either the domain root or a subpath; keep its folder structure intact. No CDN or build server is needed to present the result. Opening source HTML directly from disk is no longer supported.

- `S` opens the speaker view (notes, timer, next slide)
- `F` goes full screen, `Esc` shows the slide overview
- Arrow keys or Space advance deliberate fragment builds before moving to the next slide; Left reverses them
- Select the dashboard screenshot in “Aspire for AI dev” to enlarge it; `Esc` returns
- Slides are 1920×1080 and scale to fit the window
- Transitions fade; reduced-motion preferences remove transitions while preserving click-to-reveal steps

Builds are intentionally limited to the dev/deploy comparison and four-piece overview in Aspireify, and the AI comparison and agent inner loop in the agents deck. The other slides stay fully visible on arrival.

## Editing the slides (people and agents)

- `AGENTS.md` – how slides are built and the rules to follow; coding agents working in this folder pick it up automatically (`CLAUDE.md` points to it)
- `docs/design-guidelines.md` – Aspire brand colors, type scale, layout and voice
- `docs/brand/tokens.json` – Aspire design system tokens
- `templates/index.html` – a runnable deck with one example of every slide layout; copy a section to start a new slide

## Layout

- `index.html` – simple landing page linking both decks
- `shared/deck.js` – shared Reveal.js configuration, npm imports and image previews
- `shared/fonts/` – Poppins and Fira Code (latin subsets, from Fontsource), plus the conference title fonts
- `public/font-licenses/` – conference font licenses/notices, copied into production builds
- `shared/img/` – Aspire logo and artwork, speaker photos
- `shared/deck.css` – shared slide styles

Each slide is a `<section>` with one `.slide` div holding its layout as inline styles, and speaker notes in `<aside class="notes">`.

The HTML decks and shared assets in this repository are the source of truth. Edit them directly and rebuild with Vite.
