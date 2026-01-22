import { defineField, defineType } from "sanity";

export default defineType({
  name: "whyUsFeature",
  title: "Why Us Features",
  type: "document",
  fields: [
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Emoji or icon (e.g., ✓, 💰, 🛡️, ⚡, 🎯, 💳, 🔒, 📞)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Feature Title",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "image",
      title: "Feature Image",
      type: "image",
      description: "Image for this feature card",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which this feature appears (lower numbers first)",
      validation: (Rule) => Rule.required().min(0),
      initialValue: 0,
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Toggle to show/hide this feature",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      order: "order",
    },
    prepare({ title, subtitle, order }) {
      return {
        title: `${order}. ${title}`,
        subtitle: subtitle,
      };
    },
  },
});
