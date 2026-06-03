// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

/** CI の SITE_URL 未設定時に使うホスト（パスは含めない）。プロジェクトページでは BASE_PATH と結合される。site.ts の公開トップ URL と整合させること。 */
const DEFAULT_SITE = 'https://kra8.github.io';

// GitHub Pages: CI で SITE_URL（オリジン）/ BASE_PATH を渡す
const site = process.env.SITE_URL ?? DEFAULT_SITE;
const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [
    sitemap({
      // GSC が余計な xmlns 付き urlset を弾く事例があるため最小構成にする
      namespaces: {
        news: false,
        xhtml: false,
        image: false,
        video: false,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
