import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const escapeXml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

// RSS 2.0 feed of English articles (English is the default locale).
// Each item carries an atom:link alternate pointing at its zh counterpart
// so aggregators can discover both language versions.
export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString().replace(/\/$/, '') || 'https://wapitee.io';

  const posts = (await getCollection('blog'))
    .filter(p => (p.data.lang ?? 'en') === 'en')
    .filter(p => p.data.status === 'published' || p.data.status === 'review')
    .sort((a, b) => new Date(b.data.created).getTime() - new Date(a.data.created).getTime());

  const items = posts
    .map(post => {
      const enUrl = `${baseUrl}/blog/${post.slug}`;
      const zhUrl = `${baseUrl}/blog/zh/${post.slug}`;
      const pubDate = new Date(post.data.created).toUTCString();
      return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${enUrl}</link>
      <guid isPermaLink="true">${enUrl}</guid>
      <description>${escapeXml(post.data.summary)}</description>
      <pubDate>${pubDate}</pubDate>
      ${post.data.tags.map(tag => `<category>${escapeXml(tag)}</category>`).join('\n      ')}
      <atom:link rel="alternate" hreflang="zh" href="${zhUrl}"/>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Wapitee Blog</title>
    <link>${baseUrl}/blog/</link>
    <atom:link href="${baseUrl}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <atom:link href="${baseUrl}/blog/zh/" rel="alternate" hreflang="zh"/>
    <description>Practical guides on global go-to-market strategy, Shopify operations, and e-commerce growth.</description>
    <language>en</language>
    <lastBuildDate>${posts.length ? new Date(posts[0].data.created).toUTCString() : new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
