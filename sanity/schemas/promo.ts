import { defineField, defineType } from "sanity";

export default defineType({
  name: "promo",
  title: "Promo Carousel",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Promo Image",
      type: "image",
      description:
        "Upload promo image (recommended: 1920x1080px). The image will be displayed as carousel slide.",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "discount",
      title: "Discount Amount",
      type: "string",
      description: 'Discount percentage (e.g., "50%", "40%", "30%")',
      validation: (Rule) => Rule.required(),
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
      title: "discount",
      subtitle: "order",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: `Discount ${title}`,
        subtitle: `Order: ${subtitle}`,
        media,
      };
    },
  },
});
