import { defineConfig } from 'astro/config';

export default defineConfig({
  // www is canonical in production (apex 307-redirects to www); keeping
  // site aligned avoids "redirected canonical" issues in Search Console.
  site: 'https://www.wapitee.io',
  // Served under wapitee.io/blog/ via Vercel rewrite, so all pages and
  // assets are built with the /blog prefix (BASE_URL). The rewrite
  // forwards /blog/* to the matching /blog/* path on this deployment.
  base: '/blog',
  server: { port: 4322 },
  // i18n: English is the default locale (served without a locale prefix
  // to keep existing URLs stable); Chinese pages live under /blog/zh/...
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
