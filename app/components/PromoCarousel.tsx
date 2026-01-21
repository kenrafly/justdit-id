"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getPromos } from "@/sanity/queries";
import { urlFor } from "@/sanity/lib/image";

interface Promo {
  _id: string;
  title: string;
  subtitle: string;
  promoTitle: string;
  validUntil: string;
  image: any;
  imageUrl?: string;
  bgColor: string;
  buttonLink?: string;
  order: number;
  discount?: string;
}

// Fallback promos when Sanity is empty
const fallbackPromos: Promo[] = [
  {
    _id: "1",
    title: "Flash Sale Netflix Premium",
    subtitle: "Diskon 50% - Hanya Hari Ini!",
    bgColor: "from-red-600 to-red-800",
    promoTitle: "Promo Netflix Ultra HD",
    validUntil: "2025-12-31",
    image: null,
    order: 0,
    discount: "50%",
  },
  {
    _id: "2",
    title: "Spotify Premium Murah",
    subtitle: "Mulai Rp 15.000/Bulan",
    bgColor: "from-green-600 to-green-800",
    promoTitle: "Spotify Premium Spesial",
    validUntil: "2025-12-25",
    image: null,
    order: 1,
    discount: "40%",
  },
  {
    _id: "3",
    title: "Disney+ Hotstar Spesial",
    subtitle: "Beli 2 Gratis 1 Bulan",
    bgColor: "from-blue-600 to-blue-800",
    promoTitle: "Paket Disney+ Hemat",
    validUntil: "2025-12-30",
    image: null,
    order: 2,
    discount: "30%",
  },
];

interface PromoCarouselProps {
  promos?: Promo[];
}

export default function PromoCarousel({
  promos: initialPromos,
}: PromoCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const displayPromos =
    initialPromos && initialPromos.length > 0 ? initialPromos : fallbackPromos;

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (displayPromos.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % displayPromos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [displayPromos.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % displayPromos.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + displayPromos.length) % displayPromos.length,
    );
  };

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[400px] sm:max-h-[500px] mb-1 sm:mb-16 group">
      {/* Carousel Container */}
      <div className="relative h-full overflow-hidden rounded-lg sm:rounded-3xl shadow-2xl">
        {displayPromos.map((promo, index) => (
          <div
            key={promo._id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }`}
          >
            {/* Background Image Container - Full Size */}
            <div className="relative w-full h-full bg-gradient-to-br from-[#041A2F] to-[#28529C]">
              {promo.imageUrl ? (
                <Image
                  src={promo.imageUrl}
                  alt={promo.title || promo.promoTitle || "Promo Banner"}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              ) : (
                promo.image && (
                  <Image
                    src={urlFor(promo.image).width(1920).height(1080).url()}
                    alt={promo.title || promo.promoTitle || "Promo Banner"}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                )
              )}

              {/* Discount Badge - Bottom Right */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white text-[#214782] px-4 py-1.5 sm:px-6 sm:py-2 rounded-lg shadow-2xl z-10">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    Diskon
                  </p>
                  <p className="text-xl sm:text-2xl font-bold">
                    {promo.discount || "50%"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {displayPromos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
