import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Streaming", value: "streaming" },
          { title: "Editing", value: "editing" },
          { title: "Edukasi/AI", value: "edukasi" },
          { title: "Working", value: "working" },
          { title: "Music", value: "music" },
          { title: "Cloud Storage", value: "cloud-storage" },
          { title: "Gaming", value: "gaming" },
          { title: "VPN", value: "vpn" },
          { title: "Other", value: "other" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
      description: "Badge label (e.g., Best Seller, Popular, New, Hot)",
      options: {
        list: [
          { title: "Best Seller", value: "Best Seller" },
          { title: "Popular", value: "Popular" },
          { title: "New", value: "New" },
          { title: "Hot", value: "Hot" },
          { title: "Trending", value: "Trending" },
          { title: "Premium", value: "Premium" },
          { title: "Pro", value: "Pro" },
          { title: "Essential", value: "Essential" },
          { title: "Learn", value: "Learn" },
          { title: "AI", value: "AI" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      description: "List of product features",
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "logo",
      title: "Product Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "imageUrl",
      title: "Image URL (Alternative)",
      type: "url",
      description: "Direct image URL (use this OR upload image above)",
    }),
    defineField({
      name: "bgColor",
      title: "Background Color",
      type: "string",
      description: "Tailwind color class (e.g., from-red-600 to-red-800)",
    }),
    defineField({
      name: "plans",
      title: "Pricing Plans",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Plan Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "duration",
              title: "Duration",
              type: "string",
              description: "e.g., 1 Bulan, 1 Tahun",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "price",
              title: "Price",
              type: "number",
              validation: (Rule) => Rule.required().min(0),
            },
            {
              name: "originalPrice",
              title: "Original Price (for discount display)",
              type: "number",
            },
            {
              name: "features",
              title: "Plan Features",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "popular",
              title: "Mark as Popular",
              type: "boolean",
              initialValue: false,
            },
          ],
        },
      ],
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Product",
      type: "boolean",
      description: "Show in featured/popular section",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "logo",
    },
  },
});
