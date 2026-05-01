# AsaiTech · Marketing LP

[![Astro](https://img.shields.io/badge/Astro-6-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-0EA5E9?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/node-%E2%89%A522.12-417505?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

> **個人事業 AsaiTech** の公式ランディングページ。**静的サイトのみ**（SSR / DB なし）。文言・構成はビジネス公開前提。

---

## 概要

1 ページにヒーロー・概要・サービス・強み・技術スタック・実績・問い合わせをまとめた構成です。アクセシビリティと軽量なモーションを意識し、`prefers-reduced-motion` へ配慮しています。

| 項目 | 内容 |
|------|------|
| 出力 | `output: "static"` → `dist/` |
| スタイル | Tailwind CSS **v4**（`@tailwindcss/vite`） |
| ホスティング | GitHub Pages（Actions でビルド後デプロイ） |

---

## スタック（ややマニアック）

- **Astro 6** … 島アーキテクチャは使わず、ほぼ静的 `.astro` の組み立て。SEO・メタ・構造化データは `Layout.astro` とコンテンツから組み立て。
- **Tailwind v4** … `@import "tailwindcss"` と Vite プラグイン一本化。`@layer utilities` で `.leading-readable` など本文向け行間を定義。
- **画像** … `astro:assets` の `<Image />` でレスポンシブ WebP 出力。
- **CI** … `actions/configure-pages` + `upload-pages-artifact` + `deploy-pages`。リポジトリ種別に応じて `SITE_URL` / `BASE_PATH` をジョブ内で決定（`<owner>.github.io` 特例込み）。

ローカルでは `BASE_PATH` を省略すると `base: '/'`。本番ビルドのみ CI がパスを注入します。

---

## ディレクトリ構成（抜粋）

```text
.
├── .github/workflows/deploy-github-pages.yml
├── astro.config.mjs          # site / base は環境変数（Pages 用）
├── public/                   # favicon, OG 画像などそのまま配信
├── src/
│   ├── assets/               # 写真など（ビルド時最適化）
│   ├── components/           # セクション・ヘッダー・フッター等
│   ├── content/site.ts       # 文言・ナビ・実績などの単一ソース
│   ├── layouts/Layout.astro
│   ├── pages/index.astro
│   └── styles/global.css     # Tailwind + キーフレーム + utilities
└── package.json
```

コピー編集の起点は **`src/content/site.ts`** がほぼすべてです。

---

## 開発コマンド

**要件:** Node.js **≥ 22.12**

| Command | 説明 |
|---------|------|
| `npm install` | 依存関係のインストール |
| `npm run dev` | 開発サーバー（既定 `localhost:4321`） |
| `npm run build` | 本番ビルド → `./dist/` |
| `npm run preview` | ビルド結果のローカル確認 |

GitHub Pages と同じベースパスで試す場合の例:

```bash
SITE_URL="https://<owner>.github.io/<repo>" BASE_PATH="/<repo>/" npm run build && npm run preview
```

---

## デプロイ

`main` へ push すると **GitHub Actions** が `npm ci` → `npm run build` し、`dist` を Pages に公開します。リポジトリの **Settings → Pages → GitHub Actions** を選択済みであることが前提です。

---

## 開発プロセスと AI について

このリポジトリは **LLM を前提にした開発** をしています（例: Cursor などのエージェント／チャットによるコード生成・リファクタ・文案たたき台）。

- 指示・レビュー・最終判断は人間側です。
- 生成されたコードはビルド・表示・アクセシビリティの観点で手直ししています。
- 「AI で楽した」隠しではなく、**実務でもツールをフル稼働するスタンス**として開示しています。

コントリビューションやフォークをする場合も、同様にエディタ支援・ボットを気にせず使って問題ありません。

---

## ライセンス・公開範囲

コードおよびサイトに載せている事業情報は **公開前提** です。再利用やフォークの条件を細かく決めていない場合、既定の著作権のみが適用されます。必要に応じてリポジトリに `LICENSE` を追加してください。
