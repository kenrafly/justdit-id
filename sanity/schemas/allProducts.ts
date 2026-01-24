import { defineField, defineType } from "sanity";

export default defineType({
  name: "allProducts",
  title: "All Products (Paginated)",
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imageUrl",
      title: "Image URL (Alternative)",
      type: "url",
      description: "Direct image URL (use this OR upload image above)",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: "e.g., 30 Hari, 1 Bulan, 3 Bulan",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Product rating (0-5)",
      validation: (Rule) => Rule.required().min(0).max(5),
      initialValue: 4.9,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description: "Enable/disable this product",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "image",
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
