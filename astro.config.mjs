import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://catdev-llc.github.io',
  base: '/hikari-page',
  integrations: [tailwind()],
  output: 'static',
});
