import Link from "next/link";
import Image from "next/image";
import { Bundle, Homepage } from "@/sanity/queries";
import { urlFor } from "@/sanity/lib/image";

interface BundlingProps {
  bundles?: Bundle[];
  data?: Homepage | null;
}

export default function Bundling({ bundles: cmsBundles, data }: BundlingProps) {
  const fallbackBundles = [
    {
      name: "Paket Streaming",
      description: "Perfect untuk pecinta film dan series",
      includedProducts: ["Netflix Premium", "Disney+ Hotstar", "Prime Video"],
      originalPrice: 67000,
      price: 55000,
      discount: 18,
      duration: "30 Hari",
      icon: "🎬",
      rating: 4.9,
    },
    {
      name: "Paket Entertainment",
      description: "Lengkap untuk hiburan sehari-hari",
      includedProducts: [
        "Netflix Premium",
        "Spotify Premium",
        "YouTube Premium",
      ],
      originalPrice: 58000,
      price: 48000,
      discount: 17,
      duration: "30 Hari",
      icon: "🎵",
      rating: 4.9,
    },
    {
      name: "Paket Produktif",
      description: "Solusi untuk pekerjaan dan kreativitas",
      includedProducts: ["Canva Pro", "Grammarly Premium", "Notion Plus"],
      originalPrice: 75000,
      price: 62000,
      discount: 17,
      duration: "30 Hari",
      icon: "💼",
      rating: 4.9,
    },
    {
      name: "Paket Ultimate",
      description: "Semua yang Anda butuhkan",
      includedProducts: [
        "Netflix Premium",
        "Spotify Premium",
        "Canva Pro",
        "YouTube Premium",
      ],
      originalPrice: 95000,
      price: 75000,
      discount: 21,
      duration: "30 Hari",
      icon: "🚀",
      rating: 5.0,
    },
  ];

  const bundles =
    cmsBundles && cmsBundles.length > 0 ? cmsBundles : fallbackBundles;

  return (
    <section id="bundling" className="py-8 sm:py-12 bg-[#041A2F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {
              <>
                Paket Bundling Hemat Sampai{" "}
                <span className="text-[#5AB9FF]">50%</span>
              </>
            }
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {data?.bundlingSubheading ||
              "Kombinasi produk pilihan dengan harga lebih hemat hingga 20%"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {bundles.map((bundle, index) => (
            <div
              key={("_id" in bundle ? bundle._id : undefined) || index}
              className="bg-linear-to-br from-[#28529C] to-[#1e3d7a] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
            >
              <div className="flex">
                <div className="w-1/2 aspect-square bg-linear-to-br from-[#28529C] to-[#1e3d7a] p-2 md:p-4">
                  <div className="relative w-full h-full bg-white/5 rounded-xl overflow-hidden">
                    {"imageUrl" in bundle && bundle.imageUrl ? (
                      <Image
                        src={bundle.imageUrl}
                        alt={bundle.name}
                        fill
                        className="object-cover rounded-xl"
                      />
                    ) : "image" in bundle && bundle.image?.asset ? (
                      <Image
                        src={urlFor(bundle.image).width(600).height(600).url()}
                        alt={bundle.name}
                        fill
                        className="object-cover rounded-xl"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-xl flex items-center justify-center">
                          <div className="text-4xl md:text-6xl">
                            {"icon" in bundle && bundle.icon
                              ? bundle.icon
                              : "🎁"}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-1/2 p-2 md:p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-white mb-1 md:mb-2">
                      {bundle.name}
                    </h3>
                    <div className="space-y-0.5 md:space-y-1 mb-1 md:mb-2">
                      {bundle.includedProducts?.map((product, idx) => (
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
                      Rp {bundle.price.toLocaleString("id-ID")}
                    </div>
                    {bundle.originalPrice && (
                      <div className="text-xs md:text-sm text-gray-400 line-through mb-0.5 md:mb-1">
                        Rp {bundle.originalPrice.toLocaleString("id-ID")}
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-1 md:mb-2">
                      <div className="text-[10px] md:text-xs text-gray-300">
                        {"duration" in bundle ? bundle.duration : "30 Hari"}
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-400/20 backdrop-blur-sm px-2 py-1 rounded-lg border border-yellow-400/30">
                        <span className="text-xs md:text-sm">⭐</span>
                        <span className="text-xs md:text-sm font-bold text-yellow-400">
                          {"rating" in bundle ? bundle.rating : 4.9}
                        </span>
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
          ))}
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
