# Aspire at Techorama 2026

Maddy Montaquila and Tommaso Stocchi's Techorama 2026 sessions.

| Session | |
| --- | --- |
| Aspireify your app in an hour (Tue 27 Oct, Room 13) | `slides/aspireify/` |
| Use agents to build agents with Aspire + Microsoft Agent Framework (Wed 28 Oct, Room 12) | `slides/agents/` |

- `slides/` – both decks as reveal.js presentations, plus templates and design guidelines. See `slides/README.md`.

From the repository root, run `npm ci` and `npm run dev` to edit. Before presenting, run `npm run build` and `npm run preview`. The self-contained `dist/` output can also be deployed to a static web host.

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
The TypeScript AppHost runs two independent Vite development servers with
managed ports against `slides/`. They use the same dependencies and shared
Vite configuration as `npm run dev`; there is no per-resource npm install.

For an isolated background run (for example, in a git worktree):

```sh
aspire start --isolated --apphost apphost.mts
aspire wait aspireify-session --apphost apphost.mts
aspire wait agent-session --apphost apphost.mts
aspire stop --apphost apphost.mts
```

`npm run build` builds the offline-ready decks; it does not require Aspire.
To check the AppHost separately, run `aspire restore`, then
`npm run aspire:build` to lint and type-check it.
