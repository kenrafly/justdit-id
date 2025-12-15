import Link from "next/link";
import { Bundle, Homepage } from "@/sanity/queries";

interface BundlingProps {
  bundles?: Bundle[];
  data?: Homepage | null;
}

export default function Bundling({ bundles: cmsBundles, data }: BundlingProps) {
  const bundles = [
    {
      name: "Paket Streaming",
      description: "Perfect untuk pecinta film dan series",
      products: ["Netflix Premium", "Disney+ Hotstar", "Prime Video"],
      originalPrice: 67000,
      bundlePrice: 55000,
      discount: "18%",
      badge: "Hemat Rp 12.000",
    },
    {
      name: "Paket Entertainment",
      description: "Lengkap untuk hiburan sehari-hari",
      products: ["Netflix Premium", "Spotify Premium", "YouTube Premium"],
      originalPrice: 58000,
      bundlePrice: 48000,
      discount: "17%",
      badge: "Hemat Rp 10.000",
    },
    {
      name: "Paket Produktif",
      description: "Solusi untuk pekerjaan dan kreativitas",
      products: ["Canva Pro", "Grammarly Premium", "Notion Plus"],
      originalPrice: 75000,
      bundlePrice: 62000,
      discount: "17%",
      badge: "Hemat Rp 13.000",
    },
  ];

  return (
    <section id="bundling" className="py-8 sm:py-12 bg-[#041A2F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {data?.bundlingHeading || "Paket Bundling Hemat"}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {data?.bundlingSubheading ||
              "Kombinasi produk pilihan dengan harga lebih hemat hingga 20%"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Left Side - 4 small bundles in 2x2 grid */}
          <div className="grid grid-cols-2 gap-1">
            {bundles.slice(0, 3).map((bundle, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-[#28529C] to-[#1e3d7a] rounded-lg md:rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <div className="p-2 sm:p-3 md:p-4 flex flex-col h-full justify-between">
                  <div className="flex items-center justify-between mb-1 md:mb-2">
                    <span className="bg-yellow-500 text-black px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold">
                      {bundle.badge}
                    </span>
                    <span className="bg-red-500 text-white px-1.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold">
                      -{bundle.discount}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-base md:text-xl font-bold text-white mb-1">
                    {bundle.name}
                  </h3>
                  <p className="text-gray-200 text-[10px] sm:text-xs mb-2">
                    {bundle.description}
                  </p>

                  <div className="space-y-0.5 mb-2">
                    {bundle.products.map((product, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 text-white text-[10px] sm:text-xs"
                      >
                        <span className="text-green-400">✓</span>
                        <span>{product}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/20 pt-2 mt-2">
                    <div className="flex items-end gap-1 sm:gap-2 mb-2">
                      <div>
                        <div className="text-[10px] text-gray-300 mb-0.5">
                          Normal
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-400 line-through">
                          Rp {bundle.originalPrice.toLocaleString("id-ID")}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-300 mb-0.5">
                          Paket
                        </div>
                        <div className="text-sm sm:text-lg font-bold text-white">
                          Rp {bundle.bundlePrice.toLocaleString("id-ID")}
                        </div>
                      </div>
                    </div>

                    <Link
                      href="#contact"
                      className="block w-full bg-white hover:bg-gray-200 text-[#041A2F] text-center py-1 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold transition-colors"
                    >
                      Ambil Paket
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Add 4th bundle placeholder */}
            <div className="bg-linear-to-br from-[#28529C] to-[#1e3d7a] rounded-lg md:rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="p-2 sm:p-3 md:p-4 flex flex-col h-full justify-between">
                <div className="flex items-center justify-between mb-1 md:mb-2">
                  <span className="bg-yellow-500 text-black px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold">
                    Custom
                  </span>
                  <span className="bg-red-500 text-white px-1.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold">
                    -20%
                  </span>
                </div>

                <h3 className="text-xs sm:text-base md:text-xl font-bold text-white mb-1">
                  Paket Custom
                </h3>
                <p className="text-gray-200 text-[10px] sm:text-xs mb-2">
                  Pilih produk sesuai kebutuhan Anda
                </p>

                <div className="space-y-0.5 mb-2">
                  <div className="flex items-center gap-1 text-white text-[10px] sm:text-xs">
                    <span className="text-green-400">✓</span>
                    <span>Pilih 3+ Produk</span>
                  </div>
                  <div className="flex items-center gap-1 text-white text-[10px] sm:text-xs">
                    <span className="text-green-400">✓</span>
                    <span>Diskon Hingga 20%</span>
                  </div>
                  <div className="flex items-center gap-1 text-white text-[10px] sm:text-xs">
                    <span className="text-green-400">✓</span>
                    <span>Support 24/7</span>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-2 mt-2">
                  <div className="mb-2">
                    <div className="text-[10px] text-gray-300 mb-0.5">
                      Mulai dari
                    </div>
                    <div className="text-sm sm:text-lg font-bold text-white">
                      Rp 50.000
                    </div>
                  </div>

                  <Link
                    href="#contact"
                    className="block w-full bg-white hover:bg-gray-200 text-[#041A2F] text-center py-1 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold transition-colors"
                  >
                    Request Custom
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - 1 large featured bundle */}
          <div className="bg-linear-to-br from-yellow-500 via-orange-500 to-red-500 rounded-3xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl">
            <div className="p-6 sm:p-8 lg:p-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="bg-black text-white px-6 py-3 rounded-full text-base font-bold">
                  🔥 BEST DEAL
                </span>
                <span className="bg-white text-red-600 px-4 py-2 rounded-full text-lg font-bold">
                  -25%
                </span>
              </div>

              <h3 className="text-4xl font-bold text-white mb-4">
                Paket Ultimate
              </h3>
              <p className="text-white/90 text-lg mb-8">
                Dapatkan SEMUA yang Anda butuhkan dengan harga super hemat!
              </p>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6 flex-grow">
                <h4 className="text-xl font-bold text-white mb-4">Termasuk:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white">
                    <span className="text-2xl">🎬</span>
                    <span className="text-lg">
                      Netflix + Disney+ + Prime Video
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <span className="text-2xl">🎵</span>
                    <span className="text-lg">Spotify + YouTube Premium</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <span className="text-2xl">🎨</span>
                    <span className="text-lg">Canva Pro + Adobe Creative</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <span className="text-2xl">💼</span>
                    <span className="text-lg">Microsoft 365 + Notion Plus</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <span className="text-2xl">🤖</span>
                    <span className="text-lg">ChatGPT Plus + Grammarly</span>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-white/30 pt-6 mb-6">
                <div className="flex items-end justify-between mb-2">
                  <div>
                    <div className="text-base text-white/80 mb-2">
                      Harga Normal
                    </div>
                    <div className="text-3xl text-white/70 line-through">
                      Rp 250.000
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-base text-white/80 mb-2">
                      Harga Paket Ultimate
                    </div>
                    <div className="text-5xl font-bold text-white">
                      Rp 187.000
                    </div>
                  </div>
                </div>
                <p className="text-white/90 text-sm text-center mt-2">
                  Hemat Rp 63.000 per bulan! 🎉
                </p>
              </div>

              <Link
                href="#contact"
                className="block w-full bg-white hover:bg-gray-100 text-orange-600 text-center py-4 rounded-full text-xl font-bold transition-colors shadow-lg"
              >
                🚀 Ambil Paket Ultimate Sekarang!
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">
            Butuh paket custom? Hubungi kami!
          </p>
          <Link
            href="#contact"
            className="inline-block bg-[#727271] hover:bg-[#5a5a59] text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Request Paket Custom
          </Link>
        </div>
      </div>
    </section>
  );
}
