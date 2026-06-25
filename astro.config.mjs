// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://hudi304.github.io",
  base: "/transport-site",
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "ro",
    locales: ["ro", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});