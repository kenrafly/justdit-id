# Sanity CMS Integration Guide for JustDit.id

## 🚀 Quick Start

Your homepage is now fully editable through Sanity CMS! All sections can be managed from the Sanity Studio.

### Start Sanity Studio

```bash
npm run sanity
```

This will start the Sanity Studio at `http://localhost:3333`

### Your Sanity Project Details

- **Project ID**: z88p0m8n
- **Dataset**: production
- **Studio URL**: http://localhost:3333 (local)
- **Manage Project**: https://www.sanity.io/manage

## 📦 Available Content Types

### 1. **Homepage Settings**

Controls all text content on the homepage including:

- Hero section (heading, subheading, button)
- Why Us section (heading, subheading, features)
- Section headings (Products, Bundling, Tips, Contact)
- CTA section text
- Contact information (WhatsApp, Telegram, Email)

**How to edit**: Go to Studio → Homepage Settings → Edit the single document

### 2. **Promo Carousel**

Manage rotating promo banners on the hero section:

- Title and subtitle
- Background image
- Display order
- Valid until date
- Active/inactive toggle

**How to add**: Studio → Promo Carousel → Create new promo

### 3. **Products**

Manage all product offerings:

- Product name and description
- Category (Streaming, Music, Cloud Storage, Gaming, VPN, Other)
- Pricing plans with features
- Product images and logos
- Featured product toggle
- Display order

**How to add**: Studio → Products → Create new product

### 4. **Bundles**

Create and manage product bundles:

- Bundle name and description
- Included products list
- Original vs bundle price
- Discount percentage
- Duration
- Popular badge toggle

**How to add**: Studio → Bundles → Create new bundle

### 5. **Tips & Tricks**

Blog-style content:

- Article title and excerpt
- Full content with rich text editor
- Category (Tips, Tutorial, Guide, News)
- Cover image
- Author and publish date

**How to add**: Studio → Tips & Tricks → Create new tip

## 🎨 How It Works

The homepage now fetches all content from Sanity CMS:

1. **Server-Side Rendering**: Data is fetched at build time or every 60 seconds
2. **Fallback Content**: If CMS is empty, default content is shown
3. **Real-time Preview**: Changes in Studio are reflected after page refresh
4. **Performance**: Images are automatically optimized by Sanity CDN

## 📝 Initial Setup Steps

### Step 1: Start Sanity Studio

```bash
npm run sanity
```

### Step 2: Create Homepage Settings

1. Go to http://localhost:3333
2. Click "Homepage Settings"
3. Fill in all text content for your homepage
4. Click "Publish"

### Step 3: Add Initial Content

**Add a Promo**:

- Click "Promo Carousel" → "Create"
- Upload an image, set title/subtitle
- Set order = 0 for first promo
- Toggle "Active" to true
- Publish

**Add Products**:

- Click "Products" → "Create"
- Fill in product details
- Add pricing plans
- Toggle "Featured Product" for homepage display
- Set order (0, 1, 2, etc.)
- Publish

**Add Bundles**:

- Click "Bundles" → "Create"
- Add bundle details and pricing
- Set order for display sequence
- Publish

**Add Tips/Articles**:

- Click "Tips & Tricks" → "Create"
- Write article content
- Add cover image
- Publish

### Step 4: View Changes

- Save/Publish in Studio
- Refresh your Next.js site (http://localhost:3000)
- Content updates automatically!

## 🔧 Environment Variables

Already configured in `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=z88p0m8n
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-12-09
```

## 🌐 Deploy Sanity Studio

To make Studio accessible online:

```bash
npm run sanity:deploy
```

This creates a hosted studio at: `https://justdit-id.sanity.studio`

## 📸 Image Handling

- Upload images directly in Studio
- Images are automatically optimized
- Supports hotspot cropping
- CDN delivery for fast loading

## 🔄 Data Revalidation

The homepage uses Incremental Static Regeneration (ISR):

- Content updates every 60 seconds automatically
- No need to rebuild the entire site
- Fast performance with fresh content

## 🎯 Content Management Tips

1. **Display Order**: Use order field (0, 1, 2...) to control sequence
2. **Active Toggle**: Use isActive to hide/show content without deleting
3. **Featured Products**: Toggle isFeatured to show products on homepage
4. **Popular Bundles**: Toggle isPopular for bundle highlighting
5. **Rich Text**: Tips content supports formatted text, images, and links

## 📱 What's CMS-Controlled?

✅ All homepage text content
✅ Hero promo carousel
✅ Why Us features
✅ Product listings
✅ Bundle packages
✅ Tips & tricks articles
✅ Contact information
✅ Section headings

## 🔐 Access Control

Current setup: Open access (development mode)

For production, add authentication:

1. Go to https://www.sanity.io/manage
2. Select your project (z88p0m8n)
3. Go to API → Tokens
4. Create a token with editor access
5. Add token to `.env.local`:
   ```
   SANITY_API_TOKEN=your_token_here
   ```

## 🆘 Troubleshooting

**Studio won't start?**

- Ensure `npm install` completed successfully
- Check port 3333 is not in use

**Content not showing?**

- Check content is Published (not just Saved as draft)
- Verify isActive toggle is set to true
- Check order field is set correctly

**Images not loading?**

- Ensure images are uploaded in Studio
- Check image field is not empty
- Verify Sanity project ID is correct

## 📚 Next Steps

1. Populate Homepage Settings
2. Add 5-10 products
3. Create 2-3 bundle packages
4. Write 3-5 tips articles
5. Upload promo banners
6. Deploy Studio for online access

## 🎉 You're All Set!

Your homepage is now a fully CMS-driven website. Update content anytime without touching code!

Need help? Check Sanity docs: https://www.sanity.io/docs
