// Aspire TypeScript AppHost
// For more information, see: https://aspire.dev

import { createBuilder } from './.aspire/modules/aspire.mjs';

const builder = await createBuilder();

// Both servers use dependencies installed once at the repository root.
await builder.addViteApp('aspireify-session', '.', { runScriptName: 'slides:start' })
    .withNpm({ install: false })
    .withUrlForEndpoint('http', async url => {
        url.url = '/aspireify/';
        url.displayText = 'Aspireify session';
    });

await builder.addViteApp('agent-session', '.', { runScriptName: 'slides:start' })
    .withNpm({ install: false })
    .withUrlForEndpoint('http', async url => {
        url.url = '/agents/';
        url.displayText = 'Agent session';
    });

await builder.build().run();