import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CLATCH PODCAST STUDIO | 渋谷のレンタルスタジオ",
  description:
    "ポッドキャスト・動画撮影・配信に最適な洗練されたレンタルスタジオ。インテリア性と機能性を両立した空間で、あなたのクリエイティブをサポートします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${cormorant.variable} ${notoSansJP.variable}`}>
      <body className="font-noto bg-white text-zinc-900">{children}</body>
    </html>
  );
}
