import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('blog');
  const baseUrl = site?.toString().replace(/\/$/, '') || 'https://www.wapitee.io';
  // Index lastmod = newest article date (ISO strings compare lexicographically),
  // so it stays stable across redeployments instead of leaking the build date.
  const lastmod = posts
    .map(p => p.data.updated || p.data.created || '')
    .sort()
    .pop() || new Date().toISOString().split('T')[0];

  // English is the default locale (no /zh prefix); zh articles live under /zh/
  const enPosts = posts.filter(p => (p.data.lang ?? 'en') === 'en');
  const zhPosts = posts.filter(p => p.data.lang === 'zh');

  const alternates = (enUrl: string, zhUrl?: string) => `
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>${
      zhUrl ? `\n    <xhtml:link rel="alternate" hreflang="zh" href="${zhUrl}"/>` : ''
    }
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>`;

  // Every language version gets its own <url> entry (Google's recommended
  // hreflang sitemap pattern); alternates cross-link the two locales.
  // Index URLs without trailing slash (Vercel 308-redirects /blog/ -> /blog)
  const entry = (
    loc: string,
    enUrl: string,
    zhUrl: string | undefined,
    lastmod: string,
    priority: string,
  ) => `  <url>
    <loc>${loc}</loc>${alternates(enUrl, zhUrl)}
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;

  const zhOnlyEntry = (zhUrl: string, lastmod: string) => `  <url>
    <loc>${zhUrl}</loc>
    <xhtml:link rel="alternate" hreflang="zh" href="${zhUrl}"/>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;

  const indexEntries = [
    entry(`${baseUrl}/blog`, `${baseUrl}/blog`, `${baseUrl}/blog/zh`, lastmod, '0.9'),
    entry(`${baseUrl}/blog/zh`, `${baseUrl}/blog`, `${baseUrl}/blog/zh`, lastmod, '0.9'),
  ];

  const articleEntries = [
    ...enPosts.map(post => {
      const enUrl = `${baseUrl}/blog/${post.slug}`;
      const zhMatch = zhPosts.find(p => p.slug === `zh/${post.slug}`);
      const zhUrl = zhMatch ? `${baseUrl}/blog/zh/${post.slug}` : undefined;
      return entry(enUrl, enUrl, zhUrl, post.data.updated || post.data.created, '0.8');
    }),
    ...zhPosts.map(post => {
      const slug = post.slug.replace(/^zh\//, '');
      const zhUrl = `${baseUrl}/blog/zh/${slug}`;
      const hasEn = enPosts.some(e => e.slug === slug);
      return hasEn
        ? entry(zhUrl, `${baseUrl}/blog/${slug}`, zhUrl, post.data.updated || post.data.created, '0.8')
        : zhOnlyEntry(zhUrl, post.data.updated || post.data.created);
    }),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...indexEntries, ...articleEntries].join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
