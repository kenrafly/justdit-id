import "dotenv/config";
import { createClient } from "@sanity/client";

// Create Sanity client
const client = createClient({
  projectId: "z88p0m8n",
  dataset: "production",
  apiVersion: "2025-12-09",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const bundles = [
  {
    _type: "bundle",
    name: "Paket Streaming",
    slug: { _type: "slug", current: "paket-streaming" },
    description: "Perfect untuk pecinta film dan series",
    includedProducts: ["Netflix Premium", "Disney+ Hotstar", "Prime Video"],
    price: 55000,
    originalPrice: 67000,
    discount: 18,
    duration: "30 Hari",
    icon: "🎬",
    imageUrl:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800",
    rating: 4.9,
    isPopular: true,
    order: 1,
    isActive: true,
  },
  {
    _type: "bundle",
    name: "Paket Entertainment",
    slug: { _type: "slug", current: "paket-entertainment" },
    description: "Lengkap untuk hiburan sehari-hari",
    includedProducts: ["Netflix Premium", "Spotify Premium", "YouTube Premium"],
    price: 48000,
    originalPrice: 58000,
    discount: 17,
    duration: "30 Hari",
    icon: "🎵",
    imageUrl:
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800",
    rating: 4.9,
    isPopular: true,
    order: 2,
    isActive: true,
  },
  {
    _type: "bundle",
    name: "Paket Produktif",
    slug: { _type: "slug", current: "paket-produktif" },
    description: "Solusi untuk pekerjaan dan kreativitas",
    includedProducts: ["Canva Pro", "Grammarly Premium", "Notion Plus"],
    price: 62000,
    originalPrice: 75000,
    discount: 17,
    duration: "30 Hari",
    icon: "💼",
    imageUrl:
      "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800",
    rating: 4.9,
    isPopular: false,
    order: 3,
    isActive: true,
  },
  {
    _type: "bundle",
    name: "Paket Ultimate",
    slug: { _type: "slug", current: "paket-ultimate" },
    description: "Semua yang Anda butuhkan",
    includedProducts: [
      "Netflix Premium",
      "Spotify Premium",
      "Canva Pro",
      "YouTube Premium",
    ],
    price: 75000,
    originalPrice: 95000,
    discount: 21,
    duration: "30 Hari",
    icon: "🚀",
    imageUrl:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800",
    rating: 5.0,
    isPopular: true,
    order: 4,
    isActive: true,
  },
];

async function seedBundles() {
  try {
    console.log("🌱 Starting to seed bundles...");

    // Delete existing bundles
    const existingBundles = await client.fetch(`*[_type == "bundle"]._id`);
    if (existingBundles.length > 0) {
      console.log(`🗑️  Deleting ${existingBundles.length} existing bundles...`);
      const transaction = client.transaction();
      existingBundles.forEach((id: string) => {
        transaction.delete(id);
      });
      await transaction.commit();
      console.log("✅ Existing bundles deleted");
    }

    // Create bundles
    console.log(`📦 Creating ${bundles.length} bundles...`);
    const transaction = client.transaction();
    bundles.forEach((bundle) => {
      transaction.create(bundle);
    });
    await transaction.commit();

    console.log("✅ Bundles seeded successfully!");
    console.log(`📊 Total bundles created: ${bundles.length}`);
  } catch (error) {
    console.error("❌ Error seeding bundles:", error);
    throw error;
  }
}

seedBundles()
  .then(() => {
    console.log("🎉 Seeding completed!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("💥 Seeding failed:", error);
    process.exit(1);
  });
