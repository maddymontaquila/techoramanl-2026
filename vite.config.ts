import { defineConfig } from 'vite';

export default defineConfig({
  root: 'slides',
  appType: 'mpa',
  publicDir: false,
  server: {
    port: Number(process.env.PORT ?? '5173'),
    strictPort: true,
    fs: {
      allow: ['.'],
    },
  },
});
