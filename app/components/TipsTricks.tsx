"use client";

import Link from "next/link";
import { useState } from "react";

export default function TipsTricks() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const featuredArticle = {
    title: "Panduan Lengkap Memilih Layanan Streaming Terbaik 2025",
    excerpt:
      "Temukan platform streaming yang paling cocok untuk kebutuhan hiburan Anda. Artikel ini membahas perbandingan lengkap Netflix, Disney+, Prime Video, dan platform lainnya dengan fitur, harga, dan konten eksklusif masing-masing.",
    category: "Featured Guide",
    readTime: "8 min",
    date: "5 Des 2025",
    image: "🎬",
  };

  const articles = [
    {
      title: "10 Film Terbaik di Netflix Bulan Ini",
      excerpt: "Rekomendasi film dan series yang wajib ditonton",
      category: "Recommendation",
      readTime: "3 min",
      date: "3 Des 2025",
    },
    {
      title: "Tips Hemat dengan Paket Bundling",
      excerpt: "Cara menghemat pengeluaran hiburan digital",
      category: "Tips",
      readTime: "4 min",
      date: "1 Des 2025",
    },
    {
      title: "Perbedaan Akun Premium vs Standar",
      excerpt: "Penjelasan detail fitur dan perbedaan akun",
      category: "Info",
      readTime: "6 min",
      date: "28 Nov 2025",
    },
    {
      title: "Cara Mengamankan Akun Streaming Anda",
      excerpt: "Tips keamanan untuk melindungi akun premium",
      category: "Security",
      readTime: "5 min",
      date: "25 Nov 2025",
    },
  ];

  const faqs = [
    {
      question: "Bagaimana cara melakukan pemesanan?",
      answer:
        "Anda dapat melakukan pemesanan dengan memilih produk yang diinginkan, klik tombol 'Pesan Sekarang', lalu hubungi kami melalui WhatsApp atau form kontak. Tim kami akan memproses pesanan Anda dengan cepat.",
    },
    {
      question: "Apakah akun yang dijual legal dan aman?",
      answer:
        "Ya, semua akun yang kami jual adalah akun resmi dan legal dari penyedia layanan. Kami menjamin keamanan dan kualitas akun dengan garansi 100%. Akun tidak menggunakan crack atau mod ilegal.",
    },
    {
      question: "Berapa lama proses pengiriman akun setelah pembayaran?",
      answer:
        "Proses pengiriman akun sangat cepat, biasanya dalam waktu 5-15 menit setelah pembayaran dikonfirmasi. Anda akan menerima detail akun langsung melalui email atau WhatsApp.",
    },
    {
      question: "Apakah ada garansi jika akun bermasalah?",
      answer:
        "Tentu! Kami memberikan garansi penuh untuk semua produk. Jika terjadi masalah dengan akun seperti tidak bisa login atau akun bermasalah, kami akan mengganti dengan akun baru atau refund sesuai kebijakan kami.",
    },
    {
      question: "Bagaimana cara perpanjang akun setelah masa aktif habis?",
      answer:
        "Untuk perpanjang akun, Anda bisa langsung menghubungi kami sebelum masa aktif berakhir. Kami akan mengingatkan Anda H-3 sebelum expired dan proses perpanjangan sangat mudah dengan harga yang sama atau lebih murah.",
    },
    {
      question: "Apakah bisa request paket custom?",
      answer:
        "Ya, kami menerima request paket custom sesuai kebutuhan Anda. Hubungi customer service kami untuk mendiskusikan produk-produk yang Anda inginkan dan kami akan buatkan paket dengan harga terbaik.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="tips" className="py-20 bg-[#041A2F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tips & Tricks dan FAQ
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Artikel, panduan, dan pertanyaan yang sering diajukan
          </p>
        </div>

        {/* Main Grid: Left and Right */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT SIDE - Articles */}
          <div className="space-y-6">
            {/* Top - Featured Article (Full Width) */}
            <div className="bg-linear-to-br from-[#28529C] to-[#1e3d7a] rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 shadow-xl">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    {featuredArticle.category}
                  </span>
                  <span className="text-gray-300 text-sm">
                    {featuredArticle.date}
                  </span>
                  <span className="text-gray-300 text-sm">
                    • {featuredArticle.readTime}
                  </span>
                </div>
                <div className="flex gap-6">
                  <div className="text-6xl sm:text-7xl">
                    {featuredArticle.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base mb-4 line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>
                    <Link
                      href="#"
                      className="inline-block bg-white hover:bg-gray-200 text-[#28529C] px-6 py-2 rounded-full text-sm font-semibold transition-colors"
                    >
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom - 4 Articles Grid */}
            <div className="grid grid-cols-2 gap-4">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="bg-linear-to-br from-[#28529C] to-[#1e3d7a] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <div className="p-4">
                    <div className="flex flex-col gap-2 mb-3">
                      <span className="bg-blue-400 text-black px-2 py-0.5 rounded-full text-xs font-bold w-fit">
                        {article.category}
                      </span>
                      <div className="flex gap-2 text-gray-300 text-xs">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-gray-200 text-xs sm:text-sm mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <Link
                      href="#"
                      className="text-yellow-400 hover:text-yellow-300 text-xs sm:text-sm font-semibold transition-colors"
                    >
                      Baca →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - FAQ Accordion */}
          <div className="bg-[#102D55] rounded-2xl p-6 sm:p-8 h-fit sticky top-24">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Pertanyaan yang Sering Diajukan
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-4 flex justify-between items-center hover:bg-white/5 transition-colors"
                  >
                    <span className="text-white font-semibold text-sm sm:text-base pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`text-white text-2xl transition-transform duration-300 flex-shrink-0 ${
                        openFaqIndex === index ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="p-4 pt-0 text-gray-200 text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
