import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'slides',
  base: './',
  appType: 'mpa',
  server: {
    port: Number(process.env.PORT ?? '5173'),
    strictPort: true,
    fs: {
      allow: ['.']
    }
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rolldownOptions: {
      input: {
        index: fileURLToPath(new URL('./slides/index.html', import.meta.url)),
        aspireify: fileURLToPath(new URL('./slides/aspireify/index.html', import.meta.url)),
        agents: fileURLToPath(new URL('./slides/agents/index.html', import.meta.url)),
        templates: fileURLToPath(new URL('./slides/templates/index.html', import.meta.url))
      }
    }
  }
});
