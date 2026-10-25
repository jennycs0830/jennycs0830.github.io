import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({ site: 'https://jennycs0830.github.io', integrations: [tailwind()] });
