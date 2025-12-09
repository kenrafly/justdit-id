import Link from "next/link";

export default function RegisterCTA() {
  return (
    <section className="py-16 sm:py-20 bg-[#041A2F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#0A163E] px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 overflow-hidden">
          {/* Gradient Light Glow Effect */}
          <div className="absolute inset-0 rounded-3xl">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#142B5F]/60 to-transparent blur-xl"></div>
            <div className="absolute inset-0 bg-linear-to-b from-[#142B5F]/40 via-transparent to-[#142B5F]/40 blur-lg"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="text-left max-w-4xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#42A6D7] mb-4 sm:mb-6">
                Daftar sekarang dan rasakan manfaatnya
              </h2>
              <p className="text-white text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-3xl leading-relaxed">
                Kelola transaksi dan pesanan anda menjadi lebih mudah kedalam
                keranjang. Jadi, tunggu apa lagi?
              </p>
              <Link
                href="#contact"
                className="inline-block bg-[#28529C] hover:bg-[#1e3d7a] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all transform hover:scale-105 shadow-xl"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
