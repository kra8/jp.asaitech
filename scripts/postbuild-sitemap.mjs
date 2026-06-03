/**
 * Astro @astrojs/sitemap は sitemap-index.xml を出力する。
 * GSC では慣例の sitemap.xml を送ることが多いため、ビルド後に同一内容を複製する。
 */
import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDir = fileURLToPath(new URL('../dist/', import.meta.url));
const indexPath = join(distDir, 'sitemap-index.xml');
const aliasPath = join(distDir, 'sitemap.xml');

if (!existsSync(indexPath)) {
  console.warn('[postbuild-sitemap] sitemap-index.xml not found; skip sitemap.xml alias');
  process.exit(0);
}

copyFileSync(indexPath, aliasPath);
console.log('[postbuild-sitemap] wrote dist/sitemap.xml from sitemap-index.xml');
