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

const documentTypes = [
  "homepage",
  "contact",
  "cta",
  "whyUsFeature",
  "product",
  "promo",
  "bundle",
  "tip",
  "faq",
];

async function clearSanity() {
  console.log("🗑️  Starting Sanity cleanup...\n");

  try {
    for (const docType of documentTypes) {
      console.log(`Deleting all ${docType} documents...`);

      const query = `*[_type == "${docType}"]._id`;
      const ids = await client.fetch(query);

      if (ids.length > 0) {
        const transaction = client.transaction();
        ids.forEach((id: string) => transaction.delete(id));
        await transaction.commit();
        console.log(`✅ Deleted ${ids.length} ${docType} document(s)\n`);
      } else {
        console.log(`⚠️  No ${docType} documents found\n`);
      }
    }

    console.log("🎉 Cleanup completed successfully!");
  } catch (error) {
    console.error("❌ Error clearing Sanity:", error);
    process.exit(1);
  }
}

clearSanity();
