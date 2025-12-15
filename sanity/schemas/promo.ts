import { defineField, defineType } from "sanity";

export default defineType({
  name: "promo",
  title: "Promo Carousel",
  type: "document",
  fields: [
    defineField({
      name: "promoTitle",
      title: "Promo Title",
      type: "string",
      description: "Title shown in the bottom info bar",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "validUntil",
      title: "Valid Until",
      type: "date",
      description: "Promo expiration date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Promo Image",
      type: "image",
      description:
        "Upload promo image (recommended: 1920x1080px). The image will be displayed clean without text overlay.",
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
      name: "buttonLink",
      title: "Button Link",
      type: "url",
      description: 'Link when "Dapatkan" button is clicked (optional)',
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which this promo appears (lower numbers first)",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Toggle to show/hide this promo",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "promoTitle",
      subtitle: "validUntil",
      media: "image",
    },
  },
});
