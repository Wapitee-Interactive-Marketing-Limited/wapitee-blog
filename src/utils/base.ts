// Normalized base path for URL construction.
// Astro's import.meta.env.BASE_URL does not guarantee a trailing slash
// (with base: '/blog' it yields '/blog'), so naive concatenation produces
// broken links like '/blogzh/'. Always join paths through this constant.
const raw = import.meta.env.BASE_URL;
export const BASE = raw.endsWith('/') ? raw : `${raw}/`;

// Resolve a public/ asset path (e.g. "/covers/x.png" from frontmatter)
// to the URL it is actually served at under the base prefix.
// Static files in public/ live at ${BASE}..., never at the domain root.
export const asset = (path: string) => `${BASE}${path.replace(/^\//, '')}`;
