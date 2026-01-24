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
  getAllProducts,
  getBundles,
  getTips,
  getPromos,
  getWhyUsFeatures,
  getCTA,
  getFAQs,
  getContact,
} from "@/sanity/queries";

interface HomeProps {
  searchParams: Promise<{ page?: string }>;
}

export const revalidate = 0; // Disable cache during development (change to 60 for production)

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;

  // Fetch all homepage data from Sanity
  const [
    homepage,
    products,
    allProducts,
    bundles,
    tips,
    promos,
    whyUsFeatures,
    cta,
    faqs,
    contact,
  ] = await Promise.all([
    getHomepage(),
    getProducts(false), // All active products (not just featured)
    getAllProducts(), // All products for pagination
    getBundles(),
    getTips(3), // Latest 3 tips
    getPromos(),
    getWhyUsFeatures(),
    getCTA(),
    getFAQs(),
    getContact(),
  ]);

  // Debug: Log contact data
  console.log("Contact data from Sanity:", contact);

  return (
    <div className="min-h-screen bg-[#041A2F]">
      <Navbar />
      <main>
        <Hero data={homepage} promos={promos} />
        <WhyUs data={homepage} whyUsFeatures={whyUsFeatures} />
        <PopularProducts products={products} allProducts={allProducts} data={homepage} />
        <Bundling bundles={bundles} data={homepage} />
        <RegisterCTA data={cta} />
        <TipsTricks tips={tips} data={homepage} faqs={faqs} />
        <Contact data={contact} />
      </main>
      <Footer />
    </div>
  );
}
