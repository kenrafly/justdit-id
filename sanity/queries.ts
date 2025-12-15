import { client } from "./lib/client";

interface Promo {
  _id: string;
  title: string;
  subtitle: string;
  promoTitle: string;
  validUntil: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  imageUrl?: string;
  bgColor: string;
  buttonLink?: string;
  order: number;
  isActive: boolean;
}

export interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  category: string;
  description?: string;
  features?: string[];
  image?: any;
  logo?: any;
  imageUrl?: string;
  bgColor?: string;
  plans: {
    name: string;
    duration: string;
    price: number;
    originalPrice?: number;
    features?: string[];
    popular?: boolean;
  }[];
  isFeatured: boolean;
  order: number;
  isActive: boolean;
}

export interface Bundle {
  _id: string;
  name: string;
  slug: { current: string };
  description?: string;
  includedProducts?: string[];
  features?: string[];
  price: number;
  originalPrice?: number;
  discount?: number;
  duration?: string;
  image?: any;
  bgColor?: string;
  isPopular: boolean;
  order: number;
  isActive: boolean;
}

export interface Tip {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  content?: any[];
  category?: string;
  coverImage?: any;
  author?: string;
  publishedAt?: string;
  order: number;
  isActive: boolean;
}

export interface WhyUsFeature {
  _id: string;
  icon: string;
  title: string;
  description: string;
  order: number;
  isActive: boolean;
}

export interface CTA {
  _id: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  isActive: boolean;
}

export interface FAQ {
  _id: string;
  question: string;
  answer: string;
  order: number;
  isActive: boolean;
}

export interface Contact {
  _id: string;
  heading: string;
  subheading: string;
  whatsappNumber: string;
  telegramUsername: string;
  instagramUsername: string;
  email: string;
  whatsappResponseTime?: string;
  telegramMembers?: string;
  emailResponseTime?: string;
  instagramBadge?: string;
  isActive: boolean;
}

export interface Homepage {
  heroHeading?: string;
  heroSubheading?: string;
  heroButtonText?: string;
  heroButtonLink?: string;
  whyUsHeading?: string;
  whyUsSubheading?: string;
  whyUsFeatures?: {
    icon: string;
    title: string;
    description: string;
  }[];
  productsHeading?: string;
  productsSubheading?: string;
  bundlingHeading?: string;
  bundlingSubheading?: string;
  tipsHeading?: string;
  tipsSubheading?: string;
}

export async function getPromos(): Promise<Promo[]> {
  const query = `*[_type == "promo" && isActive == true] | order(order asc) {
    _id,
    title,
    subtitle,
    promoTitle,
    validUntil,
    image,
    imageUrl,
    bgColor,
    buttonLink,
    order,
    isActive
  }`;

  return client.fetch(query);
}

export async function getHomepage(): Promise<Homepage | null> {
  const query = `*[_type == "homepage"][0] {
    heroHeading,
    heroSubheading,
    heroButtonText,
    heroButtonLink,
    whyUsHeading,
    whyUsSubheading,
    whyUsFeatures,
    productsHeading,
    productsSubheading,
    bundlingHeading,
    bundlingSubheading,
    tipsHeading,
    tipsSubheading
  }`;

  return client.fetch(query);
}

export async function getProducts(featured?: boolean): Promise<Product[]> {
  const filter = featured
    ? `_type == "product" && isActive == true && isFeatured == true`
    : `_type == "product" && isActive == true`;

  const query = `*[${filter}] | order(order asc) {
    _id,
    name,
    slug,
    category,
    description,
    features,
    image,
    logo,
    imageUrl,
    bgColor,
    plans,
    isFeatured,
    order,
    isActive
  }`;

  return client.fetch(query);
}

export async function getBundles(): Promise<Bundle[]> {
  const query = `*[_type == "bundle" && isActive == true] | order(order asc) {
    _id,
    name,
    slug,
    description,
    includedProducts,
    features,
    price,
    originalPrice,
    discount,
    duration,
    image,
    bgColor,
    isPopular,
    order,
    isActive
  }`;

  return client.fetch(query);
}

export async function getTips(limit?: number): Promise<Tip[]> {
  const query = limit
    ? `*[_type == "tip" && isActive == true] | order(order asc) [0...${limit}] {
        _id,
        title,
        slug,
        excerpt,
        category,
        coverImage,
        author,
        publishedAt,
        order,
        isActive
      }`
    : `*[_type == "tip" && isActive == true] | order(order asc) {
        _id,
        title,
        slug,
        excerpt,
        category,
        coverImage,
        author,
        publishedAt,
        order,
        isActive
      }`;

  return client.fetch(query);
}

export async function getTipBySlug(slug: string): Promise<Tip | null> {
  const query = `*[_type == "tip" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    category,
    coverImage,
    author,
    publishedAt,
    order,
    isActive
  }`;

  return client.fetch(query, { slug });
}

export async function getAllTipSlugs(): Promise<string[]> {
  const query = `*[_type == "tip" && isActive == true].slug.current`;
  return client.fetch(query);
}

export async function getWhyUsFeatures(): Promise<WhyUsFeature[]> {
  const query = `*[_type == "whyUsFeature" && isActive == true] | order(order asc) {
    _id,
    icon,
    title,
    description,
    order,
    isActive
  }`;

  return client.fetch(query);
}

export async function getCTA(): Promise<CTA | null> {
  const query = `*[_type == "cta" && isActive == true][0] {
    _id,
    heading,
    description,
    buttonText,
    buttonLink,
    isActive
  }`;

  return client.fetch(query);
}

export async function getFAQs(): Promise<FAQ[]> {
  const query = `*[_type == "faq" && isActive == true] | order(order asc) {
    _id,
    question,
    answer,
    order,
    isActive
  }`;

  return client.fetch(query);
}

export async function getContact(): Promise<Contact | null> {
  const query = `*[_type == "contact" && isActive == true][0] {
    _id,
    heading,
    subheading,
    whatsappNumber,
    telegramUsername,
    instagramUsername,
    email,
    whatsappResponseTime,
    telegramMembers,
    emailResponseTime,
    instagramBadge,
    isActive
  }`;

  return client.fetch(query);
}
