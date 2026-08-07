# Wapitee Blog

Astro-powered blog for wapitee.io, deployed as a separate project and served under `wapitee.io/blog/` via Vercel Rewrite Proxy.

## Quick Start

```bash
npm install
npm run dev      # dev server at localhost:4321/blog
npm run build    # output to dist/
npm run preview  # preview production build
```

## Architecture

```
wapitee.io (main project on Vercel)
  └── vercel.json rewrite: /blog/* → https://wapitee-blog.vercel.app/*

This project (blog-only, independent deploy)
  ├── src/content/blog/    ← articles as .md files
  ├── src/layouts/         ← BlogPost.astro (article template)
  ├── src/components/      ← Nav, Footer, CTA, etc.
  ├── src/pages/           ← index.astro (blog home), blog/[slug].astro
  └── src/styles/global.css ← Wapitee brand system
```

## Adding a New Article

1. Create `src/content/blog/your-article-slug.md`
2. Add frontmatter (see existing articles for format)
3. Run `npm run build` — the article auto-appears on the blog index and gets its own URL

## Deployment

### Step 1: Deploy this project to Vercel

```bash
# Push to GitHub, import to Vercel
# The project will deploy to wapitee-blog.vercel.app
```

### Step 2: Add rewrite rule to the MAIN wapitee.io project

In the main project's `vercel.json`:

```json
{
  "rewrites": [
    {
      "source": "/blog/:path*",
      "destination": "https://wapitee-blog.vercel.app/:path*"
    }
  ]
}
```

### Step 3: Verify

- `wapitee.io/blog/` → blog index page
- `wapitee.io/blog/shopify-markets-single-store/` → article
- Google sees all URLs under `wapitee.io` (one site, one Search Console property)

## Design System

Based on `design/wapitee.md`:
- Primary: #D42C62 (rose/magenta)
- Typography: Clash Grotesk (headings) / Poppins (body)
- Warm grey backgrounds (#F5F4F1)
- Pink accent on section dividers, tags, table headers

## SEO Features

- ✅ Canonical URLs (all point to www.wapitee.io/blog...; apex 307-redirects to www)
- ✅ Article schema structured data (JSON-LD)
- ✅ Open Graph + Twitter cards
- ✅ Auto-generated sitemap.xml
- ✅ robots.txt pointing to sitemap
- ✅ Semantic HTML, fast static generation

## Publishing Checklist (per article)

Sitemap / RSS / JSON-LD / hreflang are **auto-generated at build time** from
`src/content/blog/` — there is no manual sitemap editing. Pushing to `main`
redeploys and regenerates everything. Per article:

1. **Frontmatter**: `title` (≤60 chars EN / ≤30 chars ZH for SERP safety),
   `summary`, `lang`, `topic`, `tags`, `status: published`, `created`,
   `updated`, and `cover` if applicable.
2. **Cover image**: drop the PNG into `public/covers/<slug>.png` and commit it
   to git. Reference it in frontmatter as `cover: "/covers/<slug>.png"`.
   Templates resolve it through the `asset()` helper in `src/utils/base.ts`,
   which prefixes the `/blog` base. **Never reference public/ assets with raw
   absolute paths** — under `base: '/blog'` they 404 in production.
3. **Bilingual**: ship both EN (`<slug>.md`) and ZH (`zh/<slug>.md`) versions;
   hreflang alternates are picked up automatically.
4. **Knowledge source of truth**: sync the article body to
   `knowledge/shopify/<slug>/source.md` (bidirectional sync convention).
5. **llms.txt**: add the new article (bilingual URLs + one-line summary) to
   `public/llms.txt` manually — it is a static file, not auto-generated.
6. **After deploy** (optional, speeds up indexing): resubmit
   `blog/sitemap.xml` in Google Search Console and request indexing for the
   new URLs; same in Bing Webmaster Tools.

No external image hosting (OSS / R2) is needed: images live in the repo and
are served through Vercel's CDN.
