import React from "react";
import { companyData } from "@/data/company";

interface BreadcrumbItemSchema {
  name: string;
  item?: string;
}

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://rahal-travel.com/#organization",
    name: companyData.name.ar,
    alternateName: companyData.name.en,
    url: "https://rahal-travel.com",
    logo: "https://rahal-travel.com/logo.png",
    image: "https://rahal-travel.com/images/banners/home-banner.png",
    description: companyData.description.ar,
    telephone: companyData.phones[0],
    email: companyData.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.address.ar,
      addressCountry: "EG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "30.0444",
      longitude: "31.2357",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "09:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "13:00",
        closes: "21:00",
      },
    ],
    sameAs: [
      companyData.socialLinks.facebook,
      companyData.socialLinks.instagram,
      companyData.socialLinks.tiktok,
    ],
    priceRange: "$$",
    currenciesAccepted: "EGP, SAR, USD, EUR",
    paymentAccepted: "Cash, Bank Transfer, Mobile Wallet",
    areaServed: [
      {
        "@type": "Country",
        name: "Egypt",
      },
      {
        "@type": "Country",
        name: "Saudi Arabia",
      },
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      {
        "@type": "Country",
        name: "Libya",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://rahal-travel.com/#website",
    url: "https://rahal-travel.com",
    name: companyData.name.ar,
    alternateName: companyData.name.en,
    description: companyData.tagline.ar,
    inLanguage: "ar-EG",
    publisher: {
      "@id": "https://rahal-travel.com/#organization",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: BreadcrumbItemSchema[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.item ? { item: item.item.startsWith("http") ? item.item : `https://rahal-travel.com${item.item}` } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name: name,
    description: description,
    provider: {
      "@id": "https://rahal-travel.com/#organization",
    },
    url: url.startsWith("http") ? url : `https://rahal-travel.com${url}`,
    ...(image
      ? {
          image: image.startsWith("http")
            ? image
            : `https://rahal-travel.com${image}`,
        }
      : {}),
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  publishedAt,
  updatedAt,
  author,
}: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url.startsWith("http") ? url : `https://rahal-travel.com${url}`,
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      "@type": "Organization",
      name: author,
      url: "https://rahal-travel.com",
    },
    publisher: {
      "@id": "https://rahal-travel.com/#organization",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `https://rahal-travel.com${url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

