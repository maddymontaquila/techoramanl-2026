# Aspire at Techorama 2026

Maddy Montaquila and Tommaso Stocchi's Techorama 2026 sessions.

| Session | |
| --- | --- |
| Aspireify your app in an hour (Tue 27 Oct, Room 13) | `slides/aspireify/` |
| Use agents to build agents with Aspire + Microsoft Agent Framework (Wed 28 Oct, Room 12) | `slides/agents/` |

- `slides/` – both decks as reveal.js presentations, plus templates and design guidelines. See `slides/README.md`.

## Code repositories

The sessions use these repositories for the code demos:

- [techorama-aspireify-app](https://github.com/tommasodotNET/techorama-aspireify-app)
- [ski-resort-demo](https://github.com/tommasodotNET/ski-resort-demo)

## Run the slides with Aspire

Install the [Aspire CLI](https://aspire.dev/get-started/install-cli/) 13.6 or later
and Node.js 20.19+, 22.13+, or 24+. From the repository root:

```sh
npm ci
aspire run
```

Open **Aspireify session** on `aspireify-session` or **Agent session** on
`agent-session` in the Aspire dashboard to go directly to that deck.
The TypeScript AppHost runs two independent Vite servers with managed ports
against the existing `slides/` folder. Both share the root npm dependencies,
so run `npm ci` before starting Aspire rather than installing per resource;
the decks and their vendored assets need no build step or internet connection
once the hosting dependencies have been restored.

For an isolated background run (for example, in a git worktree):

```sh
aspire start --isolated --apphost apphost.mts
aspire wait aspireify-session --apphost apphost.mts
aspire wait agent-session --apphost apphost.mts
aspire stop --apphost apphost.mts
```

After `aspire restore` generates the AppHost bindings, `npm run build` lints and
type-checks the AppHost; it does not build or modify the slides.
