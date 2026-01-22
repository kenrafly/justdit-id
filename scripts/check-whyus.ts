import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "z88p0m8n",
  dataset: "production",
  apiVersion: "2025-12-09",
  useCdn: false,
});

async function checkWhyUsFeatures() {
  try {
    const features = await client.fetch(
      `*[_type == "whyUsFeature"] {
        _id,
        icon,
        title,
        description,
        image,
        order,
        isActive
      }`,
    );

    console.log("=== Why Us Features in Sanity ===");
    console.log(`Total features: ${features.length}`);
    console.log("\nFeatures:");
    features.forEach((feature: any, index: number) => {
      console.log(`\n${index + 1}. ${feature.title}`);
      console.log(`   Icon: ${feature.icon}`);
      console.log(`   Description: ${feature.description}`);
      console.log(`   Has Image: ${feature.image ? "✓ Yes" : "✗ No"}`);
      console.log(`   Active: ${feature.isActive ? "✓" : "✗"}`);
      console.log(`   Order: ${feature.order}`);
      if (feature.image) {
        console.log(
          `   Full Image Object:`,
          JSON.stringify(feature.image, null, 2),
        );
      }
    });

    console.log("\n\n=== FULL RAW DATA ===");
    console.log(JSON.stringify(features, null, 2));
  } catch (error) {
    console.error("Error fetching Why Us features:", error);
  }
}

checkWhyUsFeatures();
