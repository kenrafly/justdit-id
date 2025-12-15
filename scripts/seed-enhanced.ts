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

  // Products (will add imageUrl after creation)
  products: [
    {
      _type: "product",
      name: "Netflix Premium",
      slug: { _type: "slug", current: "netflix-premium" },
      category: "streaming",
      badge: "Best Seller",
      description:
        "Akses unlimited ke ribuan film dan series berkualitas HD/4K",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
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
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
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
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
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
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
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
    {
      _type: "product",
      name: "Canva Pro",
      slug: { _type: "slug", current: "canva-pro" },
      category: "design",
      badge: "Popular",
      description: "Tools desain profesional dengan template premium unlimited",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
      features: [
        "100+ juta foto & grafis premium",
        "Background remover",
        "Brand kit & templates",
        "Resize & animasi otomatis",
      ],
      bgColor: "#00C4CC",
      plans: [
        {
          name: "1 Bulan",
          duration: "1 Bulan",
          price: 28000,
          originalPrice: 139000,
          features: ["Premium Content", "Brand Kit", "Background Remover"],
          popular: true,
        },
      ],
      isFeatured: true,
      order: 4,
      isActive: true,
    },
    {
      _type: "product",
      name: "ChatGPT Plus",
      slug: { _type: "slug", current: "chatgpt-plus" },
      category: "ai",
      badge: "Hot",
      description: "AI assistant terbaik untuk produktivitas dan kreativitas",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      features: [
        "Akses GPT-4",
        "Response lebih cepat",
        "Priority access",
        "Plugin & browsing",
      ],
      bgColor: "#10A37F",
      plans: [
        {
          name: "1 Bulan",
          duration: "1 Bulan",
          price: 85000,
          originalPrice: 280000,
          features: ["GPT-4 Access", "Fast Response", "Plugins"],
          popular: true,
        },
      ],
      isFeatured: true,
      order: 5,
      isActive: true,
    },
  ],

  // Promos with images
  promos: [
    {
      _type: "promo",
      promoTitle: "Promo Netflix 50% OFF - Binge Watch Sepuasnya!",
      imageUrl:
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80",
      validUntil: "2025-12-31",
      buttonLink: "#contact",
      order: 0,
      isActive: true,
    },
    {
      _type: "promo",
      promoTitle: "Bundle Spotify + YouTube Premium Hemat 40%",
      imageUrl:
        "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=800&q=80",
      validUntil: "2025-12-25",
      buttonLink: "#contact",
      order: 1,
      isActive: true,
    },
    {
      _type: "promo",
      promoTitle: "Disney+ Spesial Akhir Tahun - Nonton Marvel Sepuasnya",
      imageUrl:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&q=80",
      validUntil: "2025-12-31",
      buttonLink: "#contact",
      order: 2,
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

  // Tips & Tricks - Enhanced with more content
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
          style: "h2",
          children: [
            {
              _type: "span",
              text: "Panduan Lengkap Netflix Premium",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "Netflix Premium menawarkan berbagai fitur yang bisa Anda manfaatkan untuk pengalaman streaming terbaik. Berikut adalah tips untuk memaksimalkannya:",
            },
          ],
        },
        {
          _type: "block",
          style: "h3",
          children: [
            {
              _type: "span",
              text: "1. Atur Profil untuk Setiap Anggota Keluarga",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "Setiap profil akan mendapatkan rekomendasi yang disesuaikan dengan preferensi masing-masing pengguna. Gunakan fitur Kids Profile untuk anak-anak agar konten yang ditampilkan sesuai usia.",
            },
          ],
        },
        {
          _type: "block",
          style: "h3",
          children: [
            {
              _type: "span",
              text: "2. Download untuk Ditonton Offline",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "Manfaatkan fitur download untuk menonton di perjalanan tanpa koneksi internet. Anda bisa download hingga 100 judul per perangkat.",
            },
          ],
        },
      ],
      author: "Admin JustDit",
      publishedAt: "2025-12-13T00:00:00.000Z",
      order: 0,
      isActive: true,
    },
    {
      _type: "tip",
      title: "5 Playlist Spotify yang Wajib Kamu Dengerin di 2025",
      slug: {
        _type: "slug",
        current: "5-playlist-spotify-wajib-2025",
      },
      excerpt:
        "Rekomendasi playlist Spotify terbaik untuk menemani hari-harimu, dari chill vibes sampai workout energy",
      category: "Music",
      content: [
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              text: "Playlist Spotify Terbaik 2025",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "Spotify Premium memberikan akses ke jutaan lagu dan podcast. Berikut adalah 5 playlist yang wajib kamu coba:",
            },
          ],
        },
        {
          _type: "block",
          style: "h3",
          children: [
            {
              _type: "span",
              text: "1. Today's Top Hits",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "Selalu update dengan lagu-lagu terbaru yang sedang viral di seluruh dunia. Perfect untuk yang suka mengikuti tren musik terkini.",
            },
          ],
        },
        {
          _type: "block",
          style: "h3",
          children: [
            {
              _type: "span",
              text: "2. Chill Lofi Study Beats",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "Musik lofi yang menenangkan, cocok untuk menemani sesi belajar atau bekerja. Tanpa lirik yang mengganggu konsentrasi.",
            },
          ],
        },
      ],
      author: "Admin JustDit",
      publishedAt: "2025-12-12T00:00:00.000Z",
      order: 1,
      isActive: true,
    },
    {
      _type: "tip",
      title: "Canva Pro: Tutorial Membuat Desain Instagram Keren",
      slug: {
        _type: "slug",
        current: "canva-pro-tutorial-desain-instagram",
      },
      excerpt:
        "Panduan lengkap menggunakan Canva Pro untuk membuat konten Instagram yang menarik dan profesional",
      category: "Design",
      content: [
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              text: "Membuat Konten Instagram dengan Canva Pro",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "Canva Pro adalah tool desain yang sangat powerful untuk content creator. Dengan fitur-fitur premiumnya, kamu bisa membuat desain profesional tanpa skill desain grafis.",
            },
          ],
        },
        {
          _type: "block",
          style: "h3",
          children: [
            {
              _type: "span",
              text: "Fitur Unggulan Canva Pro",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "Background remover untuk menghapus background foto secara otomatis, Brand kit untuk konsistensi visual, dan akses ke 100+ juta foto premium.",
            },
          ],
        },
      ],
      author: "Admin JustDit",
      publishedAt: "2025-12-11T00:00:00.000Z",
      order: 2,
      isActive: true,
    },
    {
      _type: "tip",
      title: "ChatGPT Plus: 10 Prompt yang Bikin Kerjaan Lebih Cepat",
      slug: {
        _type: "slug",
        current: "chatgpt-plus-10-prompt-produktif",
      },
      excerpt:
        "Kumpulan prompt ChatGPT Plus yang bisa menghemat waktu dan meningkatkan produktivitas kerjamu",
      category: "AI & Productivity",
      content: [
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              text: "Maksimalkan ChatGPT Plus untuk Produktivitas",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "ChatGPT Plus dengan GPT-4 memberikan hasil yang lebih akurat dan kreatif. Berikut adalah prompt-prompt yang bisa kamu gunakan:",
            },
          ],
        },
        {
          _type: "block",
          style: "h3",
          children: [
            {
              _type: "span",
              text: "1. Email Professional Generator",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "Gunakan prompt: 'Buatkan email profesional untuk [tujuan] kepada [penerima] dengan tone [formal/casual]' untuk membuat email bisnis yang sempurna.",
            },
          ],
        },
      ],
      author: "Admin JustDit",
      publishedAt: "2025-12-10T00:00:00.000Z",
      order: 3,
      isActive: true,
    },
    {
      _type: "tip",
      title: "YouTube Premium: Fitur Tersembunyi yang Jarang Orang Tahu",
      slug: {
        _type: "slug",
        current: "youtube-premium-fitur-tersembunyi",
      },
      excerpt:
        "Discover hidden features dari YouTube Premium yang bisa bikin experience nonton YouTube-mu lebih maksimal",
      category: "Streaming",
      content: [
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              text: "Fitur Tersembunyi YouTube Premium",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "Selain bebas iklan, YouTube Premium punya banyak fitur keren yang jarang diketahui orang. Yuk kita explore!",
            },
          ],
        },
        {
          _type: "block",
          style: "h3",
          children: [
            {
              _type: "span",
              text: "1. Background Playback",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "Dengarkan musik atau podcast sambil buka aplikasi lain atau layar mati. Perfect untuk menghemat baterai.",
            },
          ],
        },
      ],
      author: "Admin JustDit",
      publishedAt: "2025-12-09T00:00:00.000Z",
      order: 4,
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
  console.log("🌱 Starting Sanity seeding with enhanced data...\n");

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
    console.log("🛍️ Creating products with logos...");
    for (const product of seedData.products) {
      await client.create(product);
    }
    console.log(`✅ ${seedData.products.length} products created\n`);

    // Create Promos
    console.log("🎉 Creating promos with images...");
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
    console.log("💡 Creating tips & tricks...");
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
    console.log(`   - ${seedData.products.length} Products (with logos)`);
    console.log(`   - ${seedData.promos.length} Promos (with images)`);
    console.log(`   - ${seedData.bundles.length} Bundles`);
    console.log(`   - ${seedData.tips.length} Tips & Tricks`);
    console.log(`   - ${seedData.faqs.length} FAQs`);
    console.log("\n✨ Your Sanity studio is now populated with enhanced data!");
    console.log("🔗 Visit: http://localhost:3333 to manage your content");
  } catch (error) {
    console.error("❌ Error seeding Sanity:", error);
    process.exit(1);
  }
}

seedSanity();
