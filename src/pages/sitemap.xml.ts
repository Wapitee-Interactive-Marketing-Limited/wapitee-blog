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

  // Index URLs without trailing slash (Vercel 308-redirects /blog/ -> /blog)
  const indexEntry = `  <url>
    <loc>${baseUrl}/blog</loc>${alternates(`${baseUrl}/blog`, `${baseUrl}/blog/zh`)}
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;

  const articleEntries = [
    ...enPosts.map(post => {
      const enUrl = `${baseUrl}/blog/${post.slug}`;
      const zhMatch = zhPosts.find(p => p.slug === `zh/${post.slug}`);
      const zhUrl = zhMatch ? `${baseUrl}/blog/zh/${post.slug}` : undefined;
      return `  <url>
    <loc>${enUrl}</loc>${alternates(enUrl, zhUrl)}
    <lastmod>${post.data.updated || post.data.created}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    }),
    // zh-only articles (if an article exists only in Chinese)
    ...zhPosts
      .filter(p => !enPosts.some(e => e.slug === p.slug.replace(/^zh\//, '')))
      .map(post => {
        const slug = post.slug.replace(/^zh\//, '');
        const zhUrl = `${baseUrl}/blog/zh/${slug}`;
        return `  <url>
    <loc>${zhUrl}</loc>
    <xhtml:link rel="alternate" hreflang="zh" href="${zhUrl}"/>
    <lastmod>${post.data.updated || post.data.created}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
      }),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[indexEntry, ...articleEntries].join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
