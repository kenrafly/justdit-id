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

const allProducts = [
  // Streaming Products
  {
    _type: "allProducts",
    name: "Netflix Premium",
    slug: { _type: "slug", current: "netflix-premium" },
    category: "streaming",
    description: "4K Ultra HD + Download",
    imageUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800",
    price: 25000,
    duration: "30 Hari",
    rating: 4.9,
    order: 1,
    isActive: true,
  },
  {
    _type: "allProducts",
    name: "Spotify Premium",
    slug: { _type: "slug", current: "spotify-premium" },
    category: "streaming",
    description: "No Ads + Offline Mode",
    imageUrl: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800",
    price: 15000,
    duration: "30 Hari",
    rating: 4.8,
    order: 2,
    isActive: true,
  },
  {
    _type: "allProducts",
    name: "Disney+ Hotstar",
    slug: { _type: "slug", current: "disney-hotstar" },
    category: "streaming",
    description: "Premium Content",
    imageUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800",
    price: 20000,
    duration: "30 Hari",
    rating: 4.7,
    order: 3,
    isActive: true,
  },
  {
    _type: "allProducts",
    name: "YouTube Premium",
    slug: { _type: "slug", current: "youtube-premium" },
    category: "streaming",
    description: "Ad-free + Music",
    imageUrl: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800",
    price: 18000,
    duration: "30 Hari",
    rating: 4.9,
    order: 4,
    isActive: true,
  },
  {
    _type: "allProducts",
    name: "Amazon Prime",
    slug: { _type: "slug", current: "amazon-prime" },
    category: "streaming",
    description: "Video + Free Shipping",
    imageUrl: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800",
    price: 28000,
    duration: "30 Hari",
    rating: 4.7,
    order: 5,
    isActive: true,
  },
  {
    _type: "allProducts",
    name: "HBO Max",
    slug: { _type: "slug", current: "hbo-max" },
    category: "streaming",
    description: "Premium Series & Movies",
    imageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800",
    price: 26000,
    duration: "30 Hari",
    rating: 4.8,
    order: 6,
    isActive: true,
  },
  // Editing Products
  {
    _type: "allProducts",
    name: "Canva Pro",
    slug: { _type: "slug", current: "canva-pro" },
    category: "editing",
    description: "Premium Design Tools",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
    price: 22000,
    duration: "30 Hari",
    rating: 4.8,
    order: 7,
    isActive: true,
  },
  {
    _type: "allProducts",
    name: "Adobe Premiere Pro",
    slug: { _type: "slug", current: "adobe-premiere-pro" },
    category: "editing",
    description: "Professional Video Editing",
    imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800",
    price: 35000,
    duration: "30 Hari",
    rating: 4.9,
    order: 8,
    isActive: true,
  },
  {
    _type: "allProducts",
    name: "Adobe Photoshop",
    slug: { _type: "slug", current: "adobe-photoshop" },
    category: "editing",
    description: "Professional Photo Editing",
    imageUrl: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800",
    price: 33000,
    duration: "30 Hari",
    rating: 4.9,
    order: 9,
    isActive: true,
  },
  {
    _type: "allProducts",
    name: "Final Cut Pro",
    slug: { _type: "slug", current: "final-cut-pro" },
    category: "editing",
    description: "Mac Video Editing",
    imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800",
    price: 38000,
    duration: "30 Hari",
    rating: 4.8,
    order: 10,
    isActive: true,
  },
  // Edukasi/AI Products
  {
    _type: "allProducts",
    name: "ChatGPT Plus",
    slug: { _type: "slug", current: "chatgpt-plus" },
    category: "edukasi",
    description: "GPT-4 Access",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    price: 30000,
    duration: "30 Hari",
    rating: 5.0,
    order: 11,
    isActive: true,
  },
  {
    _type: "allProducts",
    name: "Coursera Plus",
    slug: { _type: "slug", current: "coursera-plus" },
    category: "edukasi",
    description: "Unlimited Learning",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800",
    price: 32000,
    duration: "30 Hari",
    rating: 4.7,
    order: 12,
    isActive: true,
  },
  {
    _type: "allProducts",
    name: "Udemy Premium",
    slug: { _type: "slug", current: "udemy-premium" },
    category: "edukasi",
    description: "Access All Courses",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    price: 28000,
    duration: "30 Hari",
    rating: 4.6,
    order: 13,
    isActive: true,
  },
  {
    _type: "allProducts",
    name: "Skillshare Premium",
    slug: { _type: "slug", current: "skillshare-premium" },
    category: "edukasi",
    description: "Creative Skills Learning",
    imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800",
    price: 25000,
    duration: "30 Hari",
    rating: 4.5,
    order: 14,
    isActive: true,
  },
  // Working Products
  {
    _type: "allProducts",
    name: "Microsoft 365",
    slug: { _type: "slug", current: "microsoft-365" },
    category: "working",
    description: "Office Suite + 1TB Cloud",
    imageUrl: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800",
    price: 27000,
    duration: "30 Hari",
    rating: 4.8,
    order: 15,
    isActive: true,
  },
  {
    _type: "allProducts",
    name: "Grammarly Premium",
    slug: { _type: "slug", current: "grammarly-premium" },
    category: "working",
    description: "AI Writing Assistant",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
    price: 24000,
    duration: "30 Hari",
    rating: 4.8,
    order: 16,
    isActive: true,
  },
  {
    _type: "allProducts",
    name: "Notion Premium",
    slug: { _type: "slug", current: "notion-premium" },
    category: "working",
    description: "Workspace & Docs",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
    price: 19000,
    duration: "30 Hari",
    rating: 4.9,
    order: 17,
    isActive: true,
  },
  {
    _type: "allProducts",
    name: "Slack Premium",
    slug: { _type: "slug", current: "slack-premium" },
    category: "working",
    description: "Team Communication",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800",
    price: 23000,
    duration: "30 Hari",
    rating: 4.7,
    order: 18,
    isActive: true,
  },
  {
    _type: "allProducts",
    name: "Zoom Pro",
    slug: { _type: "slug", current: "zoom-pro" },
    category: "working",
    description: "Professional Meetings",
    imageUrl: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800",
    price: 21000,
    duration: "30 Hari",
    rating: 4.6,
    order: 19,
    isActive: true,
  },
  {
    _type: "allProducts",
    name: "Trello Premium",
    slug: { _type: "slug", current: "trello-premium" },
    category: "working",
    description: "Project Management",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
    price: 20000,
    duration: "30 Hari",
    rating: 4.5,
    order: 20,
    isActive: true,
  },
];

async function seedAllProducts() {
  try {
    console.log("🌱 Starting to seed all products...");

    // Delete existing all products
    const existingProducts = await client.fetch(
      `*[_type == "allProducts"]._id`,
    );
    if (existingProducts.length > 0) {
      console.log(`🗑️  Deleting ${existingProducts.length} existing products...`);
      const transaction = client.transaction();
      existingProducts.forEach((id: string) => {
        transaction.delete(id);
      });
      await transaction.commit();
      console.log("✅ Existing products deleted");
    }

    // Create all products
    console.log(`📦 Creating ${allProducts.length} products...`);
    const transaction = client.transaction();
    allProducts.forEach((product) => {
      transaction.create(product);
    });
    await transaction.commit();

    console.log("✅ All products seeded successfully!");
    console.log(`📊 Total products created: ${allProducts.length}`);
  } catch (error) {
    console.error("❌ Error seeding all products:", error);
    throw error;
  }
}

seedAllProducts()
  .then(() => {
    console.log("🎉 Seeding completed!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("💥 Seeding failed:", error);
    process.exit(1);
  });
