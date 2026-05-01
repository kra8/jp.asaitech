// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// GitHub Pages: CI で SITE_URL / BASE_PATH を渡す（ローカルは省略で base は '/'）
// ユーザー／組織サイト（リポジトリ名が <owner>.github.io）のときは BASE_PATH=/
const site = process.env.SITE_URL;
const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  ...(site ? { site } : {}),
  base,
  vite: {
    plugins: [tailwindcss()]
  }
});