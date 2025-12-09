"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PromoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promos = [
    {
      id: 1,
      title: "Flash Sale Netflix Premium",
      subtitle: "Diskon 50% - Hanya Hari Ini!",
      bgColor: "from-red-600 to-red-800",
      placeholder: "/promo-1.jpg",
      promoTitle: "Promo Netflix Ultra HD",
      validUntil: "31 Desember 2025",
    },
    {
      id: 2,
      title: "Spotify Premium Murah",
      subtitle: "Mulai Rp 15.000/Bulan",
      bgColor: "from-green-600 to-green-800",
      placeholder: "/promo-2.jpg",
      promoTitle: "Spotify Premium Spesial",
      validUntil: "25 Desember 2025",
    },
    {
      id: 3,
      title: "Disney+ Hotstar Spesial",
      subtitle: "Beli 2 Gratis 1 Bulan",
      bgColor: "from-blue-600 to-blue-800",
      placeholder: "/promo-3.jpg",
      promoTitle: "Paket Disney+ Hemat",
      validUntil: "30 Desember 2025",
    },
    {
      id: 4,
      title: "YouTube Premium Keluarga",
      subtitle: "Hemat 40% - Limited Stock",
      bgColor: "from-red-500 to-orange-600",
      placeholder: "/promo-4.jpg",
      promoTitle: "YouTube Premium Family",
      validUntil: "28 Desember 2025",
    },
    {
      id: 5,
      title: "Paket Bundling Ultimate",
      subtitle: "Netflix + Spotify + Disney+ = Super Hemat!",
      bgColor: "from-purple-600 to-pink-600",
      placeholder: "/promo-5.jpg",
      promoTitle: "Ultimate Bundle Package",
      validUntil: "31 Desember 2025",
    },
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [promos.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promos.length) % promos.length);
  };

  return (
    <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[400px] sm:max-h-[500px] mb-8 sm:mb-16 group">
      {/* Carousel Container */}
      <div className="relative h-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
        {promos.map((promo, index) => (
          <div
            key={promo.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            {/* Background Gradient */}
            <div
              className={`absolute inset-0 bg-linear-to-br ${promo.bgColor}`}
            ></div>

            {/* Placeholder Image Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center px-4 sm:px-8">
              <div className="text-center max-w-full">
                <div className="bg-yellow-400 text-gray-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg inline-block mb-2 sm:mb-4 text-xs sm:text-sm font-bold">
                  PROMO #{promo.id}
                </div>
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                  {promo.title}
                </h2>
                <p className="text-sm sm:text-xl md:text-2xl text-white/90">
                  {promo.subtitle}
                </p>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[20%] sm:h-[18%] bg-[#727271]/90 backdrop-blur-md flex items-center justify-between px-3 sm:px-6 md:px-12 gap-2 sm:gap-4">
              <div className="flex flex-col min-w-0 flex-1">
                <h3 className="text-white font-bold text-sm sm:text-lg md:text-xl mb-0.5 sm:mb-1 truncate">
                  {promo.promoTitle}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base truncate">
                  Berlaku hingga: {promo.validUntil}
                </p>
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-3 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-base transition-all transform hover:scale-105 whitespace-nowrap shrink-0">
                Dapatkan
              </button>
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
        {promos.map((_, index) => (
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
