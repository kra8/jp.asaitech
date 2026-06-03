/**
 * Astro は sitemap-index.xml + sitemap-0.xml を出力する。
 * GSC 向けには urlset の sitemap-0.xml を sitemap.xml に複製する（index を送ると子の
 * sitemap-0.xml 取得で「読み込めませんでした」になる事例がある）。
 */
import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDir = fileURLToPath(new URL('../dist/', import.meta.url));
const chunkPath = join(distDir, 'sitemap-0.xml');
const indexPath = join(distDir, 'sitemap-index.xml');
const aliasPath = join(distDir, 'sitemap.xml');

const source = existsSync(chunkPath)
  ? chunkPath
  : existsSync(indexPath)
    ? indexPath
    : null;

if (!source) {
  console.warn('[postbuild-sitemap] no sitemap output found; skip sitemap.xml');
  process.exit(0);
}

copyFileSync(source, aliasPath);
console.log(
  `[postbuild-sitemap] wrote dist/sitemap.xml from ${source === chunkPath ? 'sitemap-0.xml (urlset)' : 'sitemap-index.xml'}`,
);
