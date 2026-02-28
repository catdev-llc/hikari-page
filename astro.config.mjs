import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://hikari.to',
  integrations: [tailwind()],
  output: 'static',
});
