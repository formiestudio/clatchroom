import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import History from "@/components/History";

export const metadata: Metadata = {
  title: "HISTORY | CLATCH PODCAST STUDIO",
  description:
    "CLATCHが生まれるまでの物語。クリエイターのための空間をつくるまでの歩みをご紹介します。",
};

export default function HistoryPage() {
  return (
    <>
      <Nav />
      <main>
        <History />
      </main>
      <Footer />
    </>
  );
}
