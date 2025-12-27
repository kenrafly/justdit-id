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
                className="bg-linear-to-br from-[#28529C] to-[#1e3d7a] rounded-lg md:rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col"
              >
                <div className="relative flex-1 bg-linear-to-br from-[#28529C] to-[#1e3d7a] p-4 sm:p-6">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-lg flex items-center justify-center">
                      <div className="text-3xl sm:text-5xl md:text-6xl">
                        {index === 0 ? "🎬" : index === 1 ? "🎵" : "💼"}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 sm:p-3 md:p-4 flex flex-col">
                  <div className="border-t border-white/20 pt-2 mt-2">
                    <div className="flex items-end gap-1 sm:gap-2 mb-2">
                      <div>
                        <div className="text-[10px] text-gray-300 mb-0.5">
                          {bundle.name}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-400 line-through">
                          Rp {bundle.originalPrice.toLocaleString("id-ID")}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-300 mb-0.5">
                          Diskon
                        </div>
                        <div className="bg-red-500 text-white text-sm sm:text-lg font-bold px-2 py-1 rounded-lg">
                          Rp {bundle.bundlePrice.toLocaleString("id-ID")}
                        </div>
                        <div className="text-yellow-400 text-xs sm:text-sm mt-1">
                          ⭐ 4.9
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
            <div className="bg-linear-to-br from-[#28529C] to-[#1e3d7a] rounded-lg md:rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col">
              <div className="relative flex-1 bg-linear-to-br from-[#28529C] to-[#1e3d7a] p-4 sm:p-6">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-lg flex items-center justify-center">
                    <div className="text-3xl sm:text-5xl md:text-6xl">✨</div>
                  </div>
                </div>
              </div>
              <div className="p-2 sm:p-3 md:p-4 flex flex-col">
                <div className="border-t border-white/20 pt-2 mt-2">
                  <div className="flex items-end gap-1 sm:gap-2 mb-2">
                    <div>
                      <div className="text-[10px] text-gray-300 mb-0.5">
                        Paket Custom
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-400">
                        -
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-300 mb-0.5">
                        Mulai dari
                      </div>
                      <div className="bg-red-500 text-white text-sm sm:text-lg font-bold px-2 py-1 rounded-lg">
                        Rp 50.000
                      </div>
                      <div className="text-yellow-400 text-xs sm:text-sm mt-1">
                        ⭐ 4.9
                      </div>
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
          <div className="bg-linear-to-br from-yellow-500 via-orange-500 to-red-500 rounded-2xl md:rounded-3xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl">
            {/* Mobile View - Horizontal Layout */}
            <div className="flex md:hidden">
              {/* Left - Image */}
              <div className="w-1/2 bg-linear-to-br from-yellow-500 via-orange-500 to-red-500 p-4 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center">
                  <div className="text-5xl">🏆</div>
                </div>
              </div>
              
              {/* Right - Info */}
              <div className="w-1/2 p-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Paket Ultimate</h3>
                  <div className="space-y-0.5 mb-2">
                    <div className="flex items-center gap-1 text-white text-[9px]">
                      <span>✓</span>
                      <span>Netflix + Disney+</span>
                    </div>
                    <div className="flex items-center gap-1 text-white text-[9px]">
                      <span>✓</span>
                      <span>Spotify + YouTube</span>
                    </div>
                    <div className="flex items-center gap-1 text-white text-[9px]">
                      <span>✓</span>
                      <span>Canva + Adobe</span>
                    </div>
                  </div>
                  <div className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-lg inline-block mb-1">
                    Rp 187.000
                  </div>
                  <div className="text-[9px] text-white/80">30 Hari</div>
                  <div className="text-yellow-400 text-xs">⭐ 5.0</div>
                </div>
                <Link
                  href="#contact"
                  className="block w-full bg-white hover:bg-gray-100 text-orange-600 text-center py-1.5 rounded-full text-[10px] font-bold transition-colors"
                >
                  Pesan
                </Link>
              </div>
            </div>

            {/* Desktop View - Vertical Layout */}
            <div className="hidden md:flex flex-col">
              <div className="relative flex-1 bg-linear-to-br from-yellow-500 via-orange-500 to-red-500 p-8 sm:p-12">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-2xl flex items-center justify-center">
                    <div className="text-7xl sm:text-8xl">🏆</div>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col">
                <div className="border-t-2 border-white/30 pt-6 mb-6">
                  <div className="flex items-end justify-between mb-2">
                    <div>
                      <div className="text-base text-white/80 mb-2">
                        Paket Ultimate
                      </div>
                      <div className="text-3xl text-white/70 line-through">
                        Rp 250.000
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-base text-white/80 mb-2">
                        Harga Diskon
                      </div>
                      <div className="bg-red-500 text-white text-5xl font-bold px-4 py-2 rounded-xl inline-block">
                        Rp 187.000
                      </div>
                      <div className="text-yellow-400 text-lg mt-2">⭐ 5.0</div>
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
                  🚀 Ambil Paket Sekarang!
                </Link>
              </div>
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
