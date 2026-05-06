export const siteContent = {
  nav: {
    logo: "CLATCH",
    logoSub: "PODCAST STUDIO",
    links: ["CONCEPT", "SPACE", "PLAN", "EQUIPMENT", "ACCESS"],
    ctaLabel: "CONTACT",
  },

  hero: {
    headline: "BEYOND\nTHE ORDINARY.",
    subJa: "心地よい空間で、クリエイティブは加速する。",
    tagline: "ポッドキャスト・動画撮影・配信に最適な\n洗練されたレンタルスタジオ",
  },

  features: [
    {
      icon: "⊞",
      title: "広々とした空間設計",
      desc: "フローリングとモルタルが織りなす開放的な空間",
    },
    {
      icon: "☀",
      title: "自然光あふれる環境",
      desc: "大きな窓からやさしい光が差し込む自然な撮影が可能",
    },
    {
      icon: "✦",
      title: "洗練されたインテリア",
      desc: "上質な家具とグリーンが彩り出す居心地のよい撮影環境",
    },
    {
      icon: "◎",
      title: "都心の好アクセス",
      desc: "駅から徒歩圏内のロケーションでアクセス抜群",
    },
  ],

  concept: {
    label: "CONCEPT",
    headline: "つくる人のための、\n新しいスタジオのかたち。",
    body: "CLATCHは、ポッドキャストや動画撮影のためのレンタルスタジオです。インテリア性と機能性を両立した空間で、あなたのクリエイティブをサポートします。",
    ctaLabel: "VIEW SPACE",
  },

  plans: {
    label: "PLAN",
    headline: "ご利用シーンに合わせた\n4つのプラン",
    note: "※すべてのプランに、追加オプション（機材レンタル・スタッフサポート等）がご利用いただけます。",
    ctaLabel: "SELECT PLAN",
    items: [
      {
        id: "light",
        label: "LIGHT PLAN",
        labelJa: "ライトプラン",
        price: "¥3,500",
        unit: "h（税抜）",
        desc: "シンプルな通常収録に気軽に使えるプラン",
        minTime: "最低2時間〜",
        capacity: "〜4名",
        areas: ["リビング・ダイニング"],
        equipment: ["Wi-Fi", "電源", "基本照明"],
      },
      {
        id: "standard",
        label: "STANDARD PLAN",
        labelJa: "スタンダードプラン",
        badge: "POPULAR",
        price: "¥5,500",
        unit: "h（税抜）",
        desc: "ポッドキャスト収録や対談など最も人気のあるプラン",
        minTime: "最低2時間〜",
        capacity: "〜4名",
        areas: ["リビング・ダイニング・キッチン"],
        equipment: ["Wi-Fi", "電源", "照明機材", "音響機材"],
      },
      {
        id: "premium",
        label: "PREMIUM PLAN",
        labelJa: "プレミアムプラン",
        price: "¥8,500",
        unit: "h（税抜）",
        desc: "動画撮影や配信イベントに最適なフルスペックプラン",
        minTime: "最低3時間〜",
        capacity: "〜12名",
        areas: ["全エリア利用可"],
        equipment: ["Wi-Fi", "電源", "照明機材", "音響機材", "キッチン", "バックオフィス"],
      },
      {
        id: "allday",
        label: "ALL DAY PLAN",
        labelJa: "オールデイプラン",
        price: "¥50,000",
        unit: "day（税抜）",
        desc: "長時間の撮影・配信イベントにお得な1日プラン",
        minTime: "利用可能時間 9:00〜21:00",
        capacity: "〜12名",
        areas: ["全エリア利用可"],
        equipment: ["すべて含む", "スタッフサポート付き"],
      },
    ],
  },

  equipment: {
    label: "EQUIPMENT",
    headline: "高品質な機材と\n快適な設備を完備",
    items: [
      "高速Wi-Fi",
      "各種電源・延長コード",
      "音響機材（オプション）",
      "音声機材（オプション）",
      "キッチン・洗面",
      "バックオフィス利用可",
    ],
    ctaLabel: "CONTACT US",
  },

  access: {
    label: "ACCESS",
    headline: "駅近でアクセス良好",
    postalCode: "〒150-0001",
    addressLines: ["東京都渋谷区神宮前○−○−○", "○○ビル1F"],
    transitLines: [
      "東京メトロ○○線「○○駅」徒歩5分",
      "JR「○○駅」徒歩9分",
    ],
    mapCtaLabel: "GOOGLE MAP",
    mapUrl: "#",
  },

  cta: {
    headline: "Let's create something amazing.",
    sub: "ご予約・お問い合わせはこちら",
    ctaLabel: "CONTACT US",
  },

  footer: {
    links: ["CONCEPT", "SPACE", "PLAN", "EQUIPMENT", "ACCESS", "FAQ", "CONTACT"],
    socialLinks: [
      { name: "Instagram", url: "#" },
      { name: "X", url: "#" },
    ],
  },
};
