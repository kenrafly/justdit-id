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
      duration: "30 Hari",
    },
    {
      name: "Paket Entertainment",
      description: "Lengkap untuk hiburan sehari-hari",
      products: ["Netflix Premium", "Spotify Premium", "YouTube Premium"],
      originalPrice: 58000,
      bundlePrice: 48000,
      discount: "17%",
      badge: "Hemat Rp 10.000",
      duration: "30 Hari",
    },
    {
      name: "Paket Produktif",
      description: "Solusi untuk pekerjaan dan kreativitas",
      products: ["Canva Pro", "Grammarly Premium", "Notion Plus"],
      originalPrice: 75000,
      bundlePrice: 62000,
      discount: "17%",
      badge: "Hemat Rp 13.000",
      duration: "30 Hari",
    },
    {
      name: "Paket Ultimate",
      description: "Semua yang Anda butuhkan",
      products: [
        "Netflix Premium",
        "Spotify Premium",
        "Canva Pro",
        "YouTube Premium",
      ],
      originalPrice: 95000,
      bundlePrice: 75000,
      discount: "21%",
      badge: "Hemat Rp 20.000",
      duration: "30 Hari",
    },
  ];

  return (
    <section id="bundling" className="py-8 sm:py-12 bg-[#041A2F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {
              <>
                Paket Bundling Hemat Sampai{" "}
                <span className="text-[#214782]">50%</span>
              </>
            }
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {data?.bundlingSubheading ||
              "Kombinasi produk pilihan dengan harga lebih hemat hingga 20%"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {/* Bundle 1 - Streaming */}
          <div className="bg-linear-to-br from-[#28529C] to-[#1e3d7a] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl">
            <div className="flex aspect-[16/9]">
              <div className="w-1/2 bg-linear-to-br from-[#28529C] to-[#1e3d7a] p-3 md:p-6 flex items-center justify-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-xl flex items-center justify-center">
                  <div className="text-4xl md:text-6xl">🎬</div>
                </div>
              </div>
              <div className="w-1/2 p-2 md:p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-1 md:mb-2">
                    {bundles[0].name}
                  </h3>
                  <div className="space-y-0.5 md:space-y-1 mb-1 md:mb-2">
                    {bundles[0].products.map((product, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 text-white text-[10px] md:text-xs"
                      >
                        <span>✓</span>
                        <span>{product}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-red-500 text-white text-base md:text-xl font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-lg inline-block mb-0.5 md:mb-1">
                    Rp {bundles[0].bundlePrice.toLocaleString("id-ID")}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 line-through mb-0.5 md:mb-1">
                    Rp {bundles[0].originalPrice.toLocaleString("id-ID")}
                  </div>
                  <div className="flex items-center justify-between mb-1 md:mb-2">
                    <div className="text-[10px] md:text-xs text-gray-300">
                      Durasi: {bundles[0].duration}
                    </div>
                    <div className="text-yellow-400 text-xs md:text-sm">
                      ⭐ 4.9
                    </div>
                  </div>
                </div>
                <Link
                  href="#contact"
                  className="block w-full bg-white hover:bg-gray-100 text-[#214782] text-center py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold transition-colors"
                >
                  Ambil Paket
                </Link>
              </div>
            </div>
          </div>

          {/* Bundle 2 - Entertainment */}
          <div className="bg-linear-to-br from-[#28529C] to-[#1e3d7a] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl">
            <div className="flex aspect-[16/9]">
              <div className="w-1/2 bg-linear-to-br from-[#28529C] to-[#1e3d7a] p-3 md:p-6 flex items-center justify-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-xl flex items-center justify-center">
                  <div className="text-4xl md:text-6xl">🎵</div>
                </div>
              </div>
              <div className="w-1/2 p-2 md:p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-1 md:mb-2">
                    {bundles[1].name}
                  </h3>
                  <div className="space-y-0.5 md:space-y-1 mb-1 md:mb-2">
                    {bundles[1].products.map((product, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 text-white text-[10px] md:text-xs"
                      >
                        <span>✓</span>
                        <span>{product}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-red-500 text-white text-base md:text-xl font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-lg inline-block mb-0.5 md:mb-1">
                    Rp {bundles[1].bundlePrice.toLocaleString("id-ID")}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 line-through mb-0.5 md:mb-1">
                    Rp {bundles[1].originalPrice.toLocaleString("id-ID")}
                  </div>
                  <div className="flex items-center justify-between mb-1 md:mb-2">
                    <div className="text-[10px] md:text-xs text-gray-300">
                      Masa Berlaku: {bundles[1].duration}
                    </div>
                    <div className="text-yellow-400 text-xs md:text-sm">
                      ⭐ 4.9
                    </div>
                  </div>
                </div>
                <Link
                  href="#contact"
                  className="block w-full bg-white hover:bg-gray-100 text-[#214782] text-center py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold transition-colors"
                >
                  Ambil Paket
                </Link>
              </div>
            </div>
          </div>

          {/* Bundle 3 - Produktif */}
          <div className="bg-linear-to-br from-[#28529C] to-[#1e3d7a] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl">
            <div className="flex aspect-[16/9]">
              <div className="w-1/2 bg-linear-to-br from-[#28529C] to-[#1e3d7a] p-3 md:p-6 flex items-center justify-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-xl flex items-center justify-center">
                  <div className="text-4xl md:text-6xl">💼</div>
                </div>
              </div>
              <div className="w-1/2 p-2 md:p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-1 md:mb-2">
                    {bundles[2].name}
                  </h3>
                  <div className="space-y-0.5 md:space-y-1 mb-1 md:mb-2">
                    {bundles[2].products.map((product, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 text-white text-[10px] md:text-xs"
                      >
                        <span>✓</span>
                        <span>{product}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-red-500 text-white text-base md:text-xl font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-lg inline-block mb-0.5 md:mb-1">
                    Rp {bundles[2].bundlePrice.toLocaleString("id-ID")}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 line-through mb-0.5 md:mb-1">
                    Rp {bundles[2].originalPrice.toLocaleString("id-ID")}
                  </div>
                  <div className="flex items-center justify-between mb-1 md:mb-2">
                    <div className="text-[10px] md:text-xs text-gray-300">
                      Masa Berlaku: {bundles[2].duration}
                    </div>
                    <div className="text-yellow-400 text-xs md:text-sm">
                      ⭐ 4.9
                    </div>
                  </div>
                </div>
                <Link
                  href="#contact"
                  className="block w-full bg-white hover:bg-gray-100 text-[#214782] text-center py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold transition-colors"
                >
                  Ambil Paket
                </Link>
              </div>
            </div>
          </div>

          {/* Bundle 4 - Ultimate */}
          <div className="bg-linear-to-br from-[#28529C] to-[#1e3d7a] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl">
            <div className="flex aspect-[16/9]">
              <div className="w-1/2 bg-linear-to-br from-[#28529C] to-[#1e3d7a] p-3 md:p-6 flex items-center justify-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-xl flex items-center justify-center">
                  <div className="text-4xl md:text-6xl">🚀</div>
                </div>
              </div>
              <div className="w-1/2 p-2 md:p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-1 md:mb-2">
                    {bundles[3].name}
                  </h3>
                  <div className="space-y-0.5 md:space-y-1 mb-1 md:mb-2">
                    {bundles[3].products.map((product, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 text-white text-[10px] md:text-xs"
                      >
                        <span>✓</span>
                        <span>{product}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-red-500 text-white text-base md:text-xl font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-lg inline-block mb-0.5 md:mb-1">
                    Rp {bundles[3].bundlePrice.toLocaleString("id-ID")}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 line-through mb-0.5 md:mb-1">
                    Rp {bundles[3].originalPrice.toLocaleString("id-ID")}
                  </div>
                  <div className="flex items-center justify-between mb-1 md:mb-2">
                    <div className="text-[10px] md:text-xs text-gray-300">
                      Masa Berlaku: {bundles[3].duration}
                    </div>
                    <div className="text-yellow-400 text-xs md:text-sm">
                      ⭐ 5.0
                    </div>
                  </div>
                </div>
                <Link
                  href="#contact"
                  className="block w-full bg-white hover:bg-gray-100 text-[#214782] text-center py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold transition-colors"
                >
                  Ambil Paket
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
