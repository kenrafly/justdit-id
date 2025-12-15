"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Product, Homepage } from "@/sanity/queries";
import { urlFor } from "@/sanity/lib/image";

type ProductCategory = "all" | "editing" | "streaming" | "edukasi" | "working";

interface PopularProductsProps {
  products?: Product[];
  data?: Homepage | null;
}

export default function PopularProducts({
  products: cmsProducts,
  data,
}: PopularProductsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Fallback products if CMS is empty
  const fallbackProducts = [
    {
      name: "Netflix Premium",
      description: "4K Ultra HD + Download",
      price: "Rp 25.000",
      duration: "30 Hari",
      image: "/placeholder-netflix.jpg",
      badge: "Best Seller",
      category: "streaming" as ProductCategory,
    },
    {
      name: "Spotify Premium",
      description: "No Ads + Offline Mode",
      price: "Rp 15.000",
      duration: "30 Hari",
      image: "/placeholder-spotify.jpg",
      badge: "Popular",
      category: "streaming" as ProductCategory,
    },
    {
      name: "Disney+ Hotstar",
      description: "Premium Content",
      price: "Rp 20.000",
      duration: "30 Hari",
      image: "/placeholder-disney.jpg",
      badge: "New",
      category: "streaming" as ProductCategory,
    },
    {
      name: "YouTube Premium",
      description: "Ad-free + Music",
      price: "Rp 18.000",
      duration: "30 Hari",
      image: "/placeholder-youtube.jpg",
      badge: "Trending",
      category: "streaming" as ProductCategory,
    },
    {
      name: "Canva Pro",
      description: "Premium Design Tools",
      price: "Rp 22.000",
      duration: "30 Hari",
      image: "/placeholder-canva.jpg",
      badge: "Hot",
      category: "editing" as ProductCategory,
    },
    {
      name: "ChatGPT Plus",
      description: "GPT-4 Access",
      price: "Rp 30.000",
      duration: "30 Hari",
      image: "/placeholder-chatgpt.jpg",
      badge: "Premium",
      category: "edukasi" as ProductCategory,
    },
    {
      name: "Amazon Prime",
      description: "Video + Free Shipping",
      price: "Rp 28.000",
      duration: "30 Hari",
      image: "/placeholder-amazon.jpg",
      badge: "Best Deal",
      category: "streaming" as ProductCategory,
    },
    {
      name: "Adobe Premiere Pro",
      description: "Professional Video Editing",
      price: "Rp 35.000",
      duration: "30 Hari",
      image: "/placeholder-adobe.jpg",
      badge: "Pro",
      category: "editing" as ProductCategory,
    },
    {
      name: "Microsoft 365",
      description: "Office Suite + 1TB Cloud",
      price: "Rp 27.000",
      duration: "30 Hari",
      image: "/placeholder-microsoft.jpg",
      badge: "Essential",
      category: "working" as ProductCategory,
    },
    {
      name: "Coursera Plus",
      description: "Unlimited Learning",
      price: "Rp 32.000",
      duration: "30 Hari",
      image: "/placeholder-coursera.jpg",
      badge: "Learn",
      category: "edukasi" as ProductCategory,
    },
    {
      name: "Grammarly Premium",
      description: "AI Writing Assistant",
      price: "Rp 24.000",
      duration: "30 Hari",
      image: "/placeholder-grammarly.jpg",
      badge: "AI",
      category: "working" as ProductCategory,
    },
    {
      name: "Notion Premium",
      description: "Workspace & Docs",
      price: "Rp 19.000",
      duration: "30 Hari",
      image: "/placeholder-notion.jpg",
      badge: "Productive",
      category: "working" as ProductCategory,
    },
  ];

  // Transform CMS products to component format
  const products =
    cmsProducts && cmsProducts.length > 0
      ? cmsProducts.map((product: any) => ({
          name: product.name,
          description: product.description || "",
          price: product.plans?.[0]?.price
            ? `Rp ${product.plans[0].price.toLocaleString("id-ID")}`
            : "Rp 0",
          duration: product.plans?.[0]?.duration || "30 Hari",
          image: product.image?.asset
            ? product.image
            : product.logo?.asset
              ? product.logo
              : null,
          imageUrl: product.imageUrl || null,
          badge: product.badge || "Available",
          category: (product.category || "streaming") as ProductCategory,
        }))
      : fallbackProducts.map((p) => ({ ...p, image: null, imageUrl: null }));

  const categories = [
    { id: "editing" as ProductCategory, label: "Editing" },
    { id: "streaming" as ProductCategory, label: "Streaming" },
    { id: "edukasi" as ProductCategory, label: "Edukasi/AI" },
    { id: "working" as ProductCategory, label: "Working" },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleCategoryChange = (category: ProductCategory) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      checkScrollButtons();
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (container) {
        container.removeEventListener("scroll", checkScrollButtons);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 bg-[#041A2F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section - Top Left */}
        <div
          className={`mb-8 sm:mb-12 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Produk Paling Populer
          </h2>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
            Pilihan favorit pelanggan dengan rating tertinggi
          </p>
        </div>

        {/* Products Grid */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all ${
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6 text-[#041A2F]"
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

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all ${
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6 text-[#041A2F]"
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

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide"
          >
            <div className="flex gap-4 sm:gap-6 lg:gap-8 w-max">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`bg-[#28529C] rounded-xl sm:rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-700 shadow-xl hover:shadow-2xl w-64 sm:w-80 flex-shrink-0 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-52"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-40 sm:h-48 bg-linear-to-br from-[#28529C] to-[#1e3d7a]">
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10">
                      <span className="bg-yellow-500 text-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold">
                        {product.badge}
                      </span>
                    </div>
                    {product.imageUrl ? (
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-contain p-8"
                      />
                    ) : product.image?.asset ? (
                      <Image
                        src={urlFor(product.image).width(400).height(300).url()}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-4xl sm:text-6xl">🎬</div>
                      </div>
                    )}
                  </div>

                  <div className="p-3 sm:p-6">
                    <h3 className="text-base sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-base mb-2 sm:mb-4">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                      <div>
                        <div className="text-base sm:text-2xl font-bold text-white">
                          {product.price}
                        </div>
                        <div className="text-[10px] sm:text-sm text-gray-400">
                          {product.duration}
                        </div>
                      </div>
                      <div className="text-yellow-400 text-xs sm:text-sm">
                        ⭐ 4.9
                      </div>
                    </div>

                    <Link
                      href="#contact"
                      className="block w-full bg-white hover:bg-gray-200 text-[#041A2F] text-center py-2 sm:py-3 rounded-full text-xs sm:text-base font-semibold transition-colors"
                    >
                      Pesan Sekarang
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-12 sm:mt-16 bg-[#112E56] rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="flex justify-between items-center gap-4 mb-8">
            {/* Category Tabs - Left */}
            <div className="flex gap-2 sm:gap-4 overflow-x-auto scrollbar-hide flex-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold whitespace-nowrap transition-all text-sm sm:text-base ${
                    activeCategory === cat.id
                      ? "bg-white text-[#041A2F] shadow-lg"
                      : "bg-[#1a4573] text-white hover:bg-[#28529C]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Semua Produk Button - Right */}
            <button
              onClick={() => handleCategoryChange("all")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold whitespace-nowrap transition-all text-sm sm:text-base flex-shrink-0 ${
                activeCategory === "all"
                  ? "bg-white text-[#041A2F] shadow-lg"
                  : "bg-[#1a4573] text-white hover:bg-[#28529C]"
              }`}
            >
              Semua Produk
            </button>
          </div>

          {/* Filtered Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {paginatedProducts.map((product, index) => (
              <div
                key={`${product.name}-${index}`}
                className="bg-[#1a4573] rounded-xl sm:rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <div className="relative h-32 sm:h-40 bg-linear-to-br from-[#1a4573] to-[#112E56]">
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10">
                    <span className="bg-yellow-500 text-black px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold">
                      {product.badge}
                    </span>
                  </div>
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-contain p-6"
                    />
                  ) : product.image?.asset ? (
                    <Image
                      src={urlFor(product.image).width(400).height(300).url()}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-3xl sm:text-5xl">🎬</div>
                    </div>
                  )}
                </div>

                <div className="p-3 sm:p-5">
                  <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div>
                      <div className="text-sm sm:text-xl font-bold text-white">
                        {product.price}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-400">
                        {product.duration}
                      </div>
                    </div>
                    <div className="text-yellow-400 text-xs sm:text-sm">
                      ⭐ 4.9
                    </div>
                  </div>

                  <Link
                    href="#contact"
                    className="block w-full bg-white hover:bg-gray-200 text-[#041A2F] text-center py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Pesan
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  currentPage === 1
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                    : "bg-[#1a4573] text-white hover:bg-[#28529C]"
                }`}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      currentPage === page
                        ? "bg-white text-[#041A2F] shadow-lg"
                        : "bg-[#1a4573] text-white hover:bg-[#28529C]"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  currentPage === totalPages
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                    : "bg-[#1a4573] text-white hover:bg-[#28529C]"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
