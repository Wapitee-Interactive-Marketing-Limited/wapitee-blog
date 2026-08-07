// Mirrors the Astro build output (dist/*) into dist/blog/* so the static
// deployment serves every page and asset under the /blog prefix directly —
// no runtime rewrites needed. The main site (wapitee-website) rewrites
// /blog/* straight onto these files.
import { cpSync, mkdirSync, rmSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const target = join(dist, 'blog');

rmSync(target, { recursive: true, force: true });
mkdirSync(target, { recursive: true });

for (const entry of readdirSync(dist)) {
  if (entry === 'blog') continue;
  cpSync(join(dist, entry), join(target, entry), { recursive: true });
}

console.log('Mirrored dist/* → dist/blog/*');
