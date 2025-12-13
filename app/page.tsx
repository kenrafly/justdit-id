import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import PopularProducts from "./components/PopularProducts";
import Bundling from "./components/Bundling";
import RegisterCTA from "./components/RegisterCTA";
import TipsTricks from "./components/TipsTricks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  getHomepage,
  getProducts,
  getBundles,
  getTips,
  getPromos,
} from "@/sanity/queries";

interface HomeProps {
  searchParams: Promise<{ page?: string }>;
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;

  // Fetch all homepage data from Sanity
  const [homepage, products, bundles, tips, promos] = await Promise.all([
    getHomepage(),
    getProducts(false), // All active products (not just featured)
    getBundles(),
    getTips(3), // Latest 3 tips
    getPromos(),
  ]);

  return (
    <div className="min-h-screen bg-[#041A2F]">
      <Navbar />
      <main>
        <Hero data={homepage} promos={promos} />
        <WhyUs data={homepage} />
        <PopularProducts products={products} data={homepage} />
        <Bundling bundles={bundles} data={homepage} />
        <RegisterCTA data={homepage} />
        <TipsTricks tips={tips} data={homepage} />
        <Contact data={homepage} />
      </main>
      <Footer />
    </div>
  );
}
