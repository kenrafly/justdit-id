import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Homepage Settings",
  type: "document",
  fields: [
    // Hero Section
    defineField({
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      description: "Main headline on hero section",
    }),
    defineField({
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroButtonText",
      title: "Hero Button Text",
      type: "string",
    }),
    defineField({
      name: "heroButtonLink",
      title: "Hero Button Link",
      type: "string",
    }),

    // Why Us Section
    defineField({
      name: "whyUsHeading",
      title: "Why Us Heading",
      type: "string",
      initialValue: "Kenapa Harus Pilih Kami?",
    }),
    defineField({
      name: "whyUsSubheading",
      title: "Why Us Subheading",
      type: "text",
      rows: 2,
      initialValue:
        "Kami menyediakan layanan terbaik dengan harga terjangkau dan support 24/7",
    }),
    defineField({
      name: "whyUsFeatures",
      title: "Why Us Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "string",
              description: "Icon name (e.g., shield, clock, wallet, headset)",
            },
            { name: "title", title: "Title", type: "string" },
            {
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
            },
          ],
        },
      ],
    }),

    // Popular Products Section
    defineField({
      name: "productsHeading",
      title: "Products Section Heading",
      type: "string",
      initialValue: "Produk Terlaris",
    }),
    defineField({
      name: "productsSubheading",
      title: "Products Section Subheading",
      type: "text",
      initialValue: "Pilihan favorit pelanggan kami",
    }),

    // Bundling Section
    defineField({
      name: "bundlingHeading",
      title: "Bundling Section Heading",
      type: "string",
      initialValue: "Paket Bundling Hemat",
    }),
    defineField({
      name: "bundlingSubheading",
      title: "Bundling Section Subheading",
      type: "text",
      initialValue: "Dapatkan lebih banyak dengan harga lebih murah",
    }),

    // Tips & Tricks Section
    defineField({
      name: "tipsHeading",
      title: "Tips & Tricks Heading",
      type: "string",
      initialValue: "Tips & Trik",
    }),
    defineField({
      name: "tipsSubheading",
      title: "Tips & Tricks Subheading",
      type: "text",
      initialValue: "Panduan lengkap untuk memaksimalkan pengalaman Anda",
    }),

    // CTA Section
    defineField({
      name: "ctaHeading",
      title: "CTA Heading",
      type: "string",
      initialValue: "Siap Untuk Memulai?",
    }),
    defineField({
      name: "ctaDescription",
      title: "CTA Description",
      type: "text",
      rows: 3,
      initialValue:
        "Bergabunglah dengan ribuan pengguna yang sudah mempercayai kami untuk kebutuhan akun premium mereka.",
    }),
    defineField({
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Daftar Sekarang",
    }),

    // Contact Section
    defineField({
      name: "contactHeading",
      title: "Contact Heading",
      type: "string",
      initialValue: "Hubungi Kami",
    }),
    defineField({
      name: "contactSubheading",
      title: "Contact Subheading",
      type: "text",
      initialValue: "Ada pertanyaan? Kami siap membantu Anda 24/7",
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      description: "Format: 628123456789",
    }),
    defineField({
      name: "telegramUsername",
      title: "Telegram Username",
      type: "string",
      description: "Without @",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Homepage Settings",
      };
    },
  },
});
