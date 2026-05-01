/**
 * AsaiTech LP の文言・設定
 */
export const siteMeta = {
  title: 'AsaiTech | Webサイト制作・開発支援（個人事業）',
  description:
    '個人事業・AsaiTech（京都府木津川市）。サイト制作、Next.js・Astro、Flutter アプリなど。koki@asai.email / GitHub / Zenn。',
  /** 公開サイトのトップ URL（canonical のフォールバック）。＝ SITE_URL（オリジン）＋ BASE_PATH。独自ドメイン時は astro.config の DEFAULT_SITE と合わせて更新。 */
  siteUrl: 'https://kra8.github.io/jp.asaitech',
  /** メタ keywords（補助。本文・見出しが主） */
  keywords:
    'AsaiTech,Webサイト制作,ホームページ制作,フロントエンド開発,個人事業,京都府木津川市,Astro,Next.js,Flutter',
  /** SNSシェア用（`public/og-asai-dog.png`）。サイトURL変更時は絶対URLが自動で組み立つ */
  ogImagePath: '/og-asai-dog.png',
  ogLocale: 'ja_JP',
} as const;

export const brand = {
  name: 'AsaiTech',
  tagline: '事業と現場に寄り添う、実用的なWeb開発を。',
  introParagraphs: [
    '個人事業の AsaiTech として、京都府木津川市を拠点にしています。サイト制作やフロント実装、Flutter を使ったモバイルアプリ、技術のご相談など、できることからお手伝いしています。HTML/CSS/JavaScript に加え、React / Vue、Next.js・Gatsby・Astro、ホスティングやコードの納品にも対応できます。やり取りはオンラインが中心ですが、ちょっとしたことでも話しやすい関係になれたらと思っています。',
    '※いまは本業と両立しているため、常駐や長期の大規模開発など負荷の高い案件はお受けできません。スコープがはっきりした制作や改善でしたら、比較的すぐにご一緒できることが多いです。まずはお気軽に声をかけてください。',
  ],
} as const;

export const navItems = [
  { href: '#about', label: '概要' },
  { href: '#services', label: 'サービス' },
  { href: '#strengths', label: '強み' },
  { href: '#tech-stack', label: '技術スタック' },
  { href: '#works', label: '実績' },
  { href: '#contact', label: 'お問い合わせ' },
] as const;

export const about = {
  title: 'AsaiTechについて',
  lead:
    '「形だけ納品して終わり」より、運用や課題の変化に合わせて長く伴走できる関係を大事にしています。小規模な事業や地域での取り組みにも、個人事業ならではの近さで丁寧に向き合いたいと思っています。',
  photo: {
    alt: '芝生でくつろぐ愛犬（シェットランドシープドッグ）の写真',
    caption: '無理のないペースで、ひとつひとつ丁寧に。',
  },
  paragraphs: [
    'ヒアリングでは「やりたいこと」だけでなく、日々の手順や例外の話まで伺い、認識がそろっているところから少しずつ進めます。',
    '最初から完璧を目指すより、小さく動かしてから改善を重ねる進め方が好みです。ホームページ・LP・改修などは、なるべくスムーズにお返しできるようにしています。',
  ],
} as const;

export const services = {
  title: 'サービス',
  lead:
    '対応イメージの一覧です。サイト制作や部分的な実装・ご相談など、内容に応じてご一緒できる範囲を伺います。',
  items: [
    {
      title: 'ホームページ・Webサイト制作',
      body:
        'コーポレートやサービス紹介など。構成からデザイン・実装まで、公開までわかりやすくお手伝いします。',
    },
    {
      title: 'Next.js / Gatsby / Astro によるサイト構築',
      body:
        '静的〜コンテンツ中心のサイトで、Next.js・Gatsby・Astro などを使った構成も選択できます。運用しやすさと表示の速さのバランスを見ながら、無理のない提案を心がけています。',
    },
    {
      title: 'フロントエンド開発',
      body:
        'コンポーネント設計、アクセシビリティ、アニメーションなど、画面まわりの細かいところまで（スコープはご相談ください）。',
    },
    {
      title: 'モバイルアプリ（Flutter）',
      body:
        'Flutter での iOS / Android 向け開発にも対応します。画面構成や状態管理、API との連携など、Web と近い感覚で進められる範囲からご相談ください。',
    },
    {
      title: 'Webアプリケーション開発',
      body:
        '画面実装やプロトタイピングなど、フロントを中心とした範囲が得意です。規模や期間はご相談ください。',
    },
    {
      title: '業務システム・バックエンド連携',
      body:
        'ツール画面、API 繋ぎ込みの一部、バックエンド連携のサポートなど、範囲を決めたうえで対応できることがあります。まずはお気軽にご相談ください。',
    },
    {
      title: '保守・改善・技術相談',
      body:
        'リファクタや仕様整理、技術選定の壁打ちなど、スポットのご相談にもお応えします。',
    },
  ],
} as const;

export const strengths = {
  title: '強み',
  lead:
    '個人事業だからこその距離の近さと柔軟さで、無理のないペースでそばにいたいと思っています。',
  items: [
    {
      title: '業務理解',
      body:
        '現場の運用や例外までじっくり伺い、見落としがちなところまで拾いながら進めます。',
    },
    {
      title: '現場に寄り添う開発',
      body:
        '要件を一度で固定して一方通行にするのではなく、変化に合わせて相談しながら手を動かします。小さく試して育てていく進め方です。',
    },
    {
      title: '設計から実装まで',
      body:
        '要件整理から実装、リリース後の改善まで、流れが途切れないようひと続きで対応します。',
    },
    {
      title: '柔軟な対応',
      body:
        'ご予算や体制に合わせてスコープと進め方を調整し、続けやすい形を一緒に探します。',
    },
  ],
} as const;

export const techStack = {
  title: '技術スタック',
  lead:
    '名称だけ並べても伝わりにくいので、実務での役立ち方を中心に、読みやすくまとめています。',
  items: [
    {
      title: 'フロントエンド',
      body:
        'React / Vue を軸に、SPA や業務向けの管理画面を組み立てます。状態管理やデータ取得の設計から実装まで対応し、画面とサーバー側のつながりが追いやすい形にまとめます。',
    },
    {
      title: 'モバイル（Flutter）',
      body:
        'Flutter でクロスプラットフォームの画面や状態管理、API 連携までひと続きで扱います。業務アプリ寄りの画面構成にも慣れています。',
    },
    {
      title: 'バックエンド',
      body:
        'Laravel / Node.js での API 設計・実装。フロントと整合したデータの持ち方や往復の抑え方など、日々の運用とパフォーマンスのバランスを見ながら進めます。',
    },
    {
      title: 'インフラ',
      body:
        'AWS で ECS のコンテナ運用、Aurora（RDS）などのマネージドDB、S3 / CloudFront による配信・キャッシュなど、用途に応じた基本的なサービスの組み合わせの経験があります。規模に見合った構成を、無理のない範囲で組み立てます。',
    },
    {
      title: '開発スタイル',
      body:
        '既存のリプレイスや部分改修では、いまの運用を止めすぎないよう、段階的に手を入れることを意識しています。',
    },
  ],
} as const;

export const works = {
  title: '実績・事例',
  lead:
    '公開できる範囲での一覧です。守秘や契約の都合により、詳しく書けない案件もあります。',
  items: [
    {
      title: '株式会社 トップクリートシステム社',
      description:
        'ホームページの制作からホスティング、保守運用まで対応しています。',
      url: 'https://topcrete.jp/',
      categories: ['ホームページ制作', 'ホスティング', '保守・運用'],
    },
    {
      title: 'ミルコマ',
      description:
        '自ら運営する塾向けの業務改善 SaaS です。企画から開発・運用まで、ひととおり自分で担っています。',
      url: 'https://mirucoma.jp/',
      categories: ['自社運営', 'SaaS', '企画・開発・運用'],
    },
    {
      title: '塾事業者様からのご依頼',
      description:
        '講師向けのカルテ SaaS、ホームページの制作・保守・運用、技術的サポートなどを担当しています。',
      categories: [
        'SaaS開発',
        'ホームページ制作',
        '保守・運用',
        '技術サポート',
      ],
    },
  ],
} as const;

export const invoice = {
  /** 適格請求書発行事業者としての登録番号（インボイス番号） */
  registrationNumber: 'T1810665905184',
  footerLine:
    '適格請求書発行事業者です。インボイス（適格請求書）の発行にも対応しております。',
} as const;

export const contact = {
  title: 'お問い合わせ',
  lead:
    'メール・GitHub・Zenn のどれからでも構いません。内容がまとまっていなくても大丈夫ですので、気になることがあればお気軽にどうぞ。なお本業と両立している都合で、常駐や長期の大規模開発などはお受けできないことがあります。',
  email: {
    address: 'koki@asai.email',
    label: 'メール',
  },
  github: {
    label: 'GitHub',
    username: 'kra8',
    url: 'https://github.com/kra8',
    note: '公開リポジトリや活動の参照先です。',
  },
  blog: {
    label: 'Zenn（ブログ）',
    url: 'https://zenn.dev/kra8',
    note: '技術メモや記事をときどき公開しています。',
  },
} as const;

export const footerNote =
  'ご依頼内容に応じて秘密保持契約（NDA）へのご対応も可能です。';
