import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wapitee.io',
  server: { port: 4322 },
  // No base — Vercel rewrite strips /blog before forwarding,
  // so this project serves from root. SEO URLs still point to wapitee.io/blog/
  //
  // i18n: English is the default locale (served without a prefix to keep
  // existing URLs stable); Chinese pages live under /zh/...
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
