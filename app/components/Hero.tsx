import PromoCarousel from "./PromoCarousel";
import { Homepage } from "@/sanity/queries";

interface Promo {
  _id: string;
  title: string;
  subtitle: string;
  promoTitle: string;
  validUntil: string;
  image: any;
  bgColor: string;
  buttonLink?: string;
  order: number;
  isActive: boolean;
}

interface HeroProps {
  data?: Homepage | null;
  promos?: Promo[];
}

export default function Hero({ data, promos }: HeroProps) {
  return (
    <section className="relative overflow-hidden my-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width Promo Carousel */}
        <PromoCarousel promos={promos} />

        {/* Original Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center"></div>
      </div>
    </section>
  );
}
