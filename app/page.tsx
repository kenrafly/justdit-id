import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import PopularProducts from "./components/PopularProducts";
import ProductsList from "./components/ProductsList";
import Bundling from "./components/Bundling";
import RegisterCTA from "./components/RegisterCTA";
import CTA from "./components/CTA";
import TipsTricks from "./components/TipsTricks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

interface HomeProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  return (
    <div className="min-h-screen bg-[#041A2F]">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <PopularProducts />
        <Bundling />
        <RegisterCTA />
        <TipsTricks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
