export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  benefits: string[];
  targetAudience?: string;
  heroImage?: string;
  galleryImages?: string[];
}

export interface CompanyInfo {
  name: {
    ar: string;
    en: string;
  };
  tagline: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  phones: string[];
  whatsapp: string;
  email: string;
  address: {
    ar: string;
    en: string;
  };
  workingHours: {
    ar: string;
    en: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
  };
}

export interface ArticleSection {
  heading: string;
  content: string[];
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  category: string;
  tags: string[];
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  targetKeywords: string[];
  sections: ArticleSection[];
  relatedServices?: string[];
}
