import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Concept from "@/components/Concept";
import Plans from "@/components/Plans";
import Equipment from "@/components/Equipment";
import Access from "@/components/Access";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Concept />
        <Plans />
        <Equipment />
        <Access />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
