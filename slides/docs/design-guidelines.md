# Design guidelines

These decks use the **Aspire Design System** (the brand kit behind aspire.dev and the official Aspire decks), applied to a dark 1920 × 1080 slide. The exact token values are in `docs/brand/tokens.json`; this page is the subset the slides use, plus the layout conventions both decks follow.

The two session covers are the exception: they use the first slide of the Techorama 2026 speaker template, with its original medieval background and centered event logo, title and speaker names. Keep the artwork in `shared/img/techorama-2026-*.png` and use the vendored Poppins font for editable HTML text. No Aspire logo or hero artwork is added to these covers; the `title` gallery example remains an Aspire-branded alternative.

## Look and feel

Calm, premium and technical. A confident purple core on dark ink backgrounds, soft hairline cards, and generous space. The purple system leads; gradients and accent colors are for highlights only, never for whole slides of content.

- No emoji. Meaning comes from words and the line-icon set.
- No pure black or white backgrounds; use the ink tones below.
- No colored left-border "accent cards".

## Color

### Backgrounds (pick per slide)

| Use | Value |
| --- | --- |
| Default content slide | `linear-gradient(160deg,#171b31 0%,#1b2140 55%,#213051 100%)` |
| Statements, demo and section dividers, code slides | `#0f0d1d` |
| Accent statement (use at most once per deck) | `#512bd4` |

### Text

| Role | Value |
| --- | --- |
| Primary text, headings | `#f6f3ff` |
| Body / muted text | `#cdc7e8` |
| Subtle text (sources, captions) | `#9c97b8` |
| Accent text: eyebrows, links, highlighted words, icons | `#c3adff` |

### Brand purples

| Token | Value | Use |
| --- | --- | --- |
| `aspire-color-primary` | `#7455dd` | Fills for chips, arrows, step boxes |
| `aspire-color-purple` | `#512bd4` | Strong fills, accent card, prod boxes |
| `aspire-color-secondary` | `#b9aaee` | Soft supporting purple |
| `aspire-color-muted` | `#dcd5f6` | Text on `#512bd4` |

### Surfaces and lines

| Role | Value |
| --- | --- |
| Card fill | `rgba(255,255,255,0.04)` |
| Card / divider hairline | `1px solid rgba(195,173,255,0.22)` |
| Icon chip fill | `rgba(195,173,255,0.12)` |
| Code panel | `#221f3a` (inside a `#0f0d1d` slide) |
| Decorative rings | `1px solid rgba(195,173,255,0.22–0.28)`, `border-radius:50%`, transparent fill |

### Highlights and code

| Role | Value |
| --- | --- |
| Gradient text on key words | `linear-gradient(90deg,#c3adff,#f08bff)` with `-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent` |
| Code: integration A (pink) | `#f08bff` |
| Code: integration B (cyan) | `#7fd8ff` |
| Code: keywords | `#c3adff` |
| Code: strings, comments | `#9c97b8` |
| Diagram middle column (magenta) | `#b30f87` |

Keep body text at 4.5:1 contrast or better against its background. All the pairs above pass.

## Typography

Two families, both vendored in `shared/fonts/`:

- **Poppins** (400, 500, 600, 700) for everything.
- **Fira Code** (400, 600) for code, CLI commands, file names and the small uppercase eyebrows.

Type scale (px at 1920 × 1080):

| Role | Size | Weight | Notes |
| --- | --- | --- | --- |
| Cover / section title | 120–144 | 600 | `letter-spacing:-4px; line-height:1.02` |
| Demo slide title | 160–200 | 600 | `letter-spacing:-5px` |
| Statement | 88–104 | 600 | `letter-spacing:-3px` |
| Slide title (h2) | 72 | 600 | `letter-spacing:-2px; line-height:1.08` |
| Card title (h3) | 32–44 | 600 | |
| Lead / subtitle | 32–40 | 400–500 | muted or accent color |
| Body | 28–32 | 400 | `line-height:1.4–1.5`, muted color |
| Eyebrow, labels, sources | 24 | 600 | Fira Code, uppercase, `letter-spacing:2–3px`, `#c3adff` |

Nothing smaller than 24px. Emphasize with weight or color, not a new size.

## Layout

- Canvas 1920 × 1080; content padding `208px 128px 128px` (usable area 1664 × 744).
- Logo: `../shared/img/aspire-logo-light-horizontal.png` at `left:128px; top:80px; width:226px; height:56px`.
- Titles always sit at the top margin in the same place, so they don't jump between slides.
- Gaps: 48–64px between title and content, 32px between cards, 16–24px inside cards.
- Cards: `border-radius:28–32px`, padding 40–56px.
- Pills and chips: `border-radius:999px` or full circles.
- Sources and footnotes: one 24px line pinned at `bottom:64px` (use bottom padding 160px on that slide).

## Components (see `templates/index.html`)

| Template | Use it for |
| --- | --- |
| `title` | Cover: eyebrow (event · room · date), big title, speakers, hero render |
| `speakers` | Two speaker cards with round photos |
| `section-divider` / `demo` | Dark break slides with rings, eyebrow and a huge title |
| `statement` / `statement-gradient` | One sentence, optionally with gradient key words |
| `two-column-cards`, `card-grid-3x2`, `four-cards` | Comparisons and feature sets |
| `icon-list` | 3–5 ruled rows, icon + bold lead + muted payoff |
| `process-steps` | Numbered steps with arrows and a loop-back connector |
| `big-numbers` | Up to three stats with a source line |
| `code` | Editor panel with filename bar and optional integration legend |
| `table` | Reference tables such as a CLI cheat sheet |
| `flow-diagram` | Dev → container → prod rows |
| `text-plus-screenshot` | Three icon rows beside a dashboard screenshot |
| `resources` | Two-column label/link grid |
| `closing` | Thank you, handles, rate-the-session line |

The session decks adapt `closing` to a two-column layout: thank-you text and handles on the left, the matching session feedback QR image and scan prompt on the right. Keep each QR image uncropped and unobstructed; do not swap the Aspireify and agents feedback codes.

## Voice

- Product name is always **Aspire**.
- Sentence case everywhere ("See the whole application", not "See The Whole Application").
- Talk to the audience as "you"; the product is "Aspire" in the third person.
- Punch then payoff: a short bold claim followed by a plain-language explanation ("Code, not config.").
- Concrete numbers ("100+ integrations"), never vague superlatives.
- CLI in lowercase Fira Code: `aspire init`, `aspire run`, `aspire deploy`.

## Source

Derived from the Aspire Design System (built from github.com/microsoft/aspire-brand and aspire.dev). Brand site: https://aka.ms/aspire/brand.
