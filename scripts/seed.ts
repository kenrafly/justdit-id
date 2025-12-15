import { createClient } from "@sanity/client";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
});

const seedData = {
  // Homepage Settings
  homepage: {
    _type: "homepage",
    _id: "homepage-singleton",
    heroHeading: "Platform Akun Premium Terpercaya di Indonesia",
    heroSubheading:
      "Dapatkan akses ke berbagai layanan premium seperti Netflix, Spotify, Disney+, dan lainnya dengan harga terjangkau dan garansi resmi",
    heroButtonText: "Jelajahi Produk",
    heroButtonLink: "#products",
    whyUsHeading: "Kenapa Harus Pilih Kami?",
    whyUsSubheading:
      "Kami menyediakan layanan terbaik dengan harga terjangkau dan support 24/7",
    productsHeading: "Produk Terlaris",
    productsSubheading: "Pilihan favorit pelanggan kami",
    bundlingHeading: "Paket Bundling Hemat",
    bundlingSubheading: "Dapatkan lebih banyak dengan harga lebih murah",
    tipsHeading: "Tips & Tricks dan FAQ",
    tipsSubheading: "Panduan dan jawaban untuk pertanyaan umum Anda",
  },

  // Contact Information
  contact: {
    _type: "contact",
    _id: "contact-singleton",
    heading: "Mari Terhubung",
    subheading:
      "Dapatkan penawaran eksklusif dan dukungan terbaik untuk kebutuhan digital Anda",
    whatsappNumber: "6281234567890",
    telegramUsername: "justditid",
    instagramUsername: "justditid",
    email: "hello@justdit.id",
    whatsappResponseTime: "< 5 menit",
    telegramMembers: "1000+ Members",
    emailResponseTime: "< 24 jam",
    instagramBadge: "Daily Updates",
    isActive: true,
  },

  // CTA
  cta: {
    _type: "cta",
    _id: "cta-singleton",
    heading: "Daftar Sekarang dan Rasakan Manfaatnya",
    description:
      "Kelola transaksi dan pesanan Anda menjadi lebih mudah. Bergabunglah dengan ribuan pengguna yang sudah mempercayai kami!",
    buttonText: "Daftar Sekarang",
    buttonLink: "#contact",
    isActive: true,
  },

  // Why Us Features
  whyUsFeatures: [
    {
      _type: "whyUsFeature",
      icon: "✓",
      title: "Akun Resmi dan Legal",
      description: "Semua akun tanpa crack atau mod ilegal",
      order: 0,
      isActive: true,
    },
    {
      _type: "whyUsFeature",
      icon: "💰",
      title: "Harga Terjangkau",
      description: "Harga ekonomis dengan kualitas eksklusif",
      order: 1,
      isActive: true,
    },
    {
      _type: "whyUsFeature",
      icon: "🛡️",
      title: "Amanah dan Bergaransi",
      description: "Garansi penuh untuk semua produk",
      order: 2,
      isActive: true,
    },
    {
      _type: "whyUsFeature",
      icon: "⚡",
      title: "Proses Cepat",
      description: "Pengiriman akun dalam 5-15 menit",
      order: 3,
      isActive: true,
    },
  ],

  // Products
  products: [
    {
      _type: "product",
      name: "Netflix Premium",
      slug: { _type: "slug", current: "netflix-premium" },
      category: "streaming",
      badge: "Best Seller",
      description:
        "Akses unlimited ke ribuan film dan series berkualitas HD/4K",
      features: [
        "Kualitas Ultra HD 4K",
        "Bisa 4 perangkat bersamaan",
        "Download unlimited",
        "Tidak ada iklan",
      ],
      bgColor: "#E50914",
      plans: [
        {
          name: "1 Bulan",
          duration: "1 Bulan",
          price: 45000,
          originalPrice: 186000,
          features: ["Ultra HD", "4 Devices", "Download"],
          popular: true,
        },
        {
          name: "3 Bulan",
          duration: "3 Bulan",
          price: 120000,
          originalPrice: 558000,
          features: ["Ultra HD", "4 Devices", "Download"],
          popular: false,
        },
      ],
      isFeatured: true,
      order: 0,
      isActive: true,
    },
    {
      _type: "product",
      name: "Spotify Premium",
      slug: { _type: "slug", current: "spotify-premium" },
      category: "music",
      badge: "Popular",
      description: "Dengarkan musik tanpa iklan dengan kualitas audio terbaik",
      features: [
        "Tanpa iklan",
        "Download musik offline",
        "Kualitas audio maksimal",
        "Skip unlimited",
      ],
      bgColor: "#1DB954",
      plans: [
        {
          name: "1 Bulan",
          duration: "1 Bulan",
          price: 15000,
          originalPrice: 54990,
          features: ["No Ads", "Offline Mode", "High Quality"],
          popular: true,
        },
      ],
      isFeatured: true,
      order: 1,
      isActive: true,
    },
    {
      _type: "product",
      name: "Disney+ Hotstar",
      slug: { _type: "slug", current: "disney-plus-hotstar" },
      category: "streaming",
      badge: "Hot",
      description: "Streaming film Disney, Marvel, Star Wars, dan konten lokal",
      features: [
        "Konten Disney & Marvel",
        "Film Star Wars lengkap",
        "Serie original Hotstar",
        "Kualitas Full HD",
      ],
      bgColor: "#0063E5",
      plans: [
        {
          name: "1 Bulan",
          duration: "1 Bulan",
          price: 25000,
          originalPrice: 39000,
          features: ["Full HD", "2 Devices", "Download"],
          popular: true,
        },
      ],
      isFeatured: true,
      order: 2,
      isActive: true,
    },
    {
      _type: "product",
      name: "YouTube Premium",
      slug: { _type: "slug", current: "youtube-premium" },
      category: "streaming",
      badge: "Trending",
      description: "Nonton YouTube tanpa iklan dan download video offline",
      features: [
        "Tanpa iklan",
        "Background play",
        "Download video",
        "YouTube Music included",
      ],
      bgColor: "#FF0000",
      plans: [
        {
          name: "1 Bulan",
          duration: "1 Bulan",
          price: 35000,
          originalPrice: 79000,
          features: ["No Ads", "Background Play", "Download"],
          popular: true,
        },
      ],
      isFeatured: true,
      order: 3,
      isActive: true,
    },
  ],

  // Promos
  promos: [
    {
      _type: "promo",
      promoTitle: "Promo Netflix 50% OFF",
      validUntil: "2025-12-31",
      buttonLink: "#contact",
      order: 0,
      isActive: true,
    },
    {
      _type: "promo",
      promoTitle: "Bundle Spotify + YouTube Premium",
      validUntil: "2025-12-25",
      buttonLink: "#contact",
      order: 1,
      isActive: true,
    },
  ],

  // Bundles
  bundles: [
    {
      _type: "bundle",
      name: "Paket Streaming Ultimate",
      slug: { _type: "slug", current: "paket-streaming-ultimate" },
      description: "Netflix + Disney+ + Prime Video dalam satu paket hemat",
      includedProducts: ["Netflix Premium", "Disney+ Hotstar", "Prime Video"],
      features: [
        "3 Platform streaming premium",
        "Hemat hingga 40%",
        "Garansi aktif 1 bulan",
        "Support 24/7",
      ],
      price: 95000,
      originalPrice: 160000,
      discount: 40,
      duration: "1 Bulan",
      bgColor: "#6366F1",
      isPopular: true,
      order: 0,
      isActive: true,
    },
  ],

  // Tips
  tips: [
    {
      _type: "tip",
      title: "Cara Memaksimalkan Penggunaan Netflix Premium",
      slug: {
        _type: "slug",
        current: "cara-memaksimalkan-penggunaan-netflix-premium",
      },
      excerpt:
        "Pelajari tips dan trik untuk mendapatkan pengalaman terbaik dari akun Netflix Premium Anda",
      category: "Streaming",
      content: [
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "Netflix Premium menawarkan berbagai fitur yang bisa Anda manfaatkan untuk pengalaman streaming terbaik.",
            },
          ],
        },
      ],
      author: "Admin JustDit",
      publishedAt: "2025-12-13T00:00:00.000Z",
      order: 0,
      isActive: true,
    },
  ],

  // FAQs
  faqs: [
    {
      _type: "faq",
      question: "Bagaimana cara melakukan pemesanan?",
      answer:
        "Anda dapat melakukan pemesanan dengan memilih produk yang diinginkan, klik tombol 'Pesan Sekarang', lalu hubungi kami melalui WhatsApp atau form kontak. Tim kami akan memproses pesanan Anda dengan cepat.",
      order: 0,
      isActive: true,
    },
    {
      _type: "faq",
      question: "Apakah akun yang dijual legal dan aman?",
      answer:
        "Ya, semua akun yang kami jual adalah akun resmi dan legal dari penyedia layanan. Kami menjamin keamanan dan kualitas akun dengan garansi 100%. Akun tidak menggunakan crack atau mod ilegal.",
      order: 1,
      isActive: true,
    },
    {
      _type: "faq",
      question: "Berapa lama proses pengiriman akun setelah pembayaran?",
      answer:
        "Proses pengiriman akun sangat cepat, biasanya dalam waktu 5-15 menit setelah pembayaran dikonfirmasi. Anda akan menerima detail akun langsung melalui email atau WhatsApp.",
      order: 2,
      isActive: true,
    },
    {
      _type: "faq",
      question: "Apakah ada garansi jika akun bermasalah?",
      answer:
        "Tentu! Kami memberikan garansi penuh untuk semua produk. Jika terjadi masalah dengan akun seperti tidak bisa login atau akun bermasalah, kami akan mengganti dengan akun baru atau refund sesuai kebijakan kami.",
      order: 3,
      isActive: true,
    },
    {
      _type: "faq",
      question: "Bagaimana cara perpanjang akun setelah masa aktif habis?",
      answer:
        "Untuk perpanjang akun, Anda bisa langsung menghubungi kami sebelum masa aktif berakhir. Kami akan mengingatkan Anda H-3 sebelum expired dan proses perpanjangan sangat mudah dengan harga yang sama atau lebih murah.",
      order: 4,
      isActive: true,
    },
  ],
};

async function seedSanity() {
  console.log("🌱 Starting Sanity seeding...\n");

  try {
    // Create or update homepage
    console.log("📄 Creating homepage...");
    await client.createOrReplace(seedData.homepage);
    console.log("✅ Homepage created\n");

    // Create or update contact
    console.log("📞 Creating contact info...");
    await client.createOrReplace(seedData.contact);
    console.log("✅ Contact info created\n");

    // Create or update CTA
    console.log("🎯 Creating CTA...");
    await client.createOrReplace(seedData.cta);
    console.log("✅ CTA created\n");

    // Create Why Us Features
    console.log("⭐ Creating Why Us features...");
    for (const feature of seedData.whyUsFeatures) {
      await client.create(feature);
    }
    console.log(
      `✅ ${seedData.whyUsFeatures.length} Why Us features created\n`
    );

    // Create Products
    console.log("🛍️ Creating products...");
    for (const product of seedData.products) {
      await client.create(product);
    }
    console.log(`✅ ${seedData.products.length} products created\n`);

    // Create Promos
    console.log("🎉 Creating promos...");
    for (const promo of seedData.promos) {
      await client.create(promo);
    }
    console.log(`✅ ${seedData.promos.length} promos created\n`);

    // Create Bundles
    console.log("📦 Creating bundles...");
    for (const bundle of seedData.bundles) {
      await client.create(bundle);
    }
    console.log(`✅ ${seedData.bundles.length} bundles created\n`);

    // Create Tips
    console.log("💡 Creating tips...");
    for (const tip of seedData.tips) {
      await client.create(tip);
    }
    console.log(`✅ ${seedData.tips.length} tips created\n`);

    // Create FAQs
    console.log("❓ Creating FAQs...");
    for (const faq of seedData.faqs) {
      await client.create(faq);
    }
    console.log(`✅ ${seedData.faqs.length} FAQs created\n`);

    console.log("🎉 Seeding completed successfully!");
    console.log("\n📊 Summary:");
    console.log(`   - 1 Homepage`);
    console.log(`   - 1 Contact Info`);
    console.log(`   - 1 CTA`);
    console.log(`   - ${seedData.whyUsFeatures.length} Why Us Features`);
    console.log(`   - ${seedData.products.length} Products`);
    console.log(`   - ${seedData.promos.length} Promos`);
    console.log(`   - ${seedData.bundles.length} Bundles`);
    console.log(`   - ${seedData.tips.length} Tips`);
    console.log(`   - ${seedData.faqs.length} FAQs`);
    console.log("\n✨ Your Sanity studio is now populated with sample data!");
    console.log("🔗 Visit: http://localhost:3333 to manage your content");
  } catch (error) {
    console.error("❌ Error seeding Sanity:", error);
    process.exit(1);
  }
}

seedSanity();
