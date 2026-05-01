# AsaiTech · Marketing LP

[Astro](https://astro.build/)
[Tailwind CSS](https://tailwindcss.com/)
[Node.js](https://nodejs.org/)

個人事業 **AsaiTech** の公式ランディングページ。静的出力のみ（SSR・DB なし）。文言・構成とも公開前提です。

---

## 概要

シングルページ構成（ヒーロー／概要／サービス／強み／技術スタック／実績／問い合わせ）。アクセシビリティと軽いモーション、`prefers-reduced-motion` への配慮あり。


|      |                                      |
| ---- | ------------------------------------ |
| 出力   | `output: "static"` → `dist/`         |
| スタイル | Tailwind CSS v4（`@tailwindcss/vite`） |
| 公開   | GitHub Pages（Actions でビルド後デプロイ）      |


---

## スタック

- **Astro 6** — ほぼ静的な `.astro` の組み立て。SEO・メタ・構造化データは `Layout.astro` とコンテンツから生成。
- **Tailwind v4** — `@import "tailwindcss"` と Vite プラグイン一本化。`@layer utilities` で `.leading-readable` など本文用ユーティリティ。
- **画像** — `astro:assets` の `<Image />` でレスポンシブ WebP。ビルド時の処理に **sharp** を明示依存として追加（pnpm 配下で Astro が解決できるようにするため）。
- **CI** — `configure-pages` → `upload-pages-artifact` → `deploy-pages`。`SITE_URL` / `BASE_PATH` はリポジトリ種別（`<owner>.github.io` 含む）に応じてジョブ内で設定。

ローカルでは `BASE_PATH` 未指定時 `base: '/'`。本番は CI がパスを注入。

---

## ディレクトリ

```text
.
├── .github/workflows/deploy-github-pages.yml
├── astro.config.mjs          # site / base ← 環境変数（Pages）
├── public/                     # favicon, OG 画像など
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/site.ts         # 文言・ナビ・実績の単一ソース
│   ├── layouts/Layout.astro
│   ├── pages/index.astro
│   └── styles/global.css       # Tailwind + keyframes + utilities
├── package.json
└── pnpm-lock.yaml
```

編集の起点は **`src/content/site.ts`** が中心です。

---

## 開発

Node.js **≥ 22.12** · パッケージマネージャは **pnpm**（`package.json` の `packageManager` を参照）

| Command | 説明 |
| -------- | ------ |
| `pnpm install` | 依存のインストール |
| `pnpm dev` | 開発サーバー（既定 `localhost:4321`） |
| `pnpm build` | `dist/` へ本番ビルド |
| `pnpm preview` | ビルド結果のプレビュー |


GitHub Pages と同じベースパスで確認する例:

```bash
SITE_URL="https://<owner>.github.io/<repo>" BASE_PATH="/<repo>/" pnpm build && pnpm preview
```

---

## デプロイ

`main` への push で GitHub Actions が `pnpm install --frozen-lockfile` → `pnpm build` を実行し、`dist` を公開します。リポジトリの **Settings → Pages** でソースに **GitHub Actions** を選んでおいてください。

---

## AI と開発

LLM・エージェント（Cursor 等）を前提にした開発です。コード生成・リファクタ・文案のたたき台まで幅広く利用し、指示・レビュー・最終判断は人間側です。ビルド・表示・アクセシビリティは手で整えています。フォークやコントリビューションでも、エディタ支援を自由に使って構いません。

---

## 公開について

コードおよびサイトに載せる事業情報はすべて公開前提です。再利用条件は別途 `LICENSE` で明示しない限り、既定の著作権が適用されます。