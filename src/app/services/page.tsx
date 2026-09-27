import { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ServicesIntro } from "@/components/services/services-intro";
import { ServicesGrid } from "@/components/services/services-grid";
import { ServicesCta } from "@/components/services/services-cta";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "خدماتنا",
  description:
    "استعرض باقة خدمات شركة رحال للسفر والسياحة: برامج الحج والعمرة، رحلات سياحية داخلية وخارجية، تأشيرات عمل لدول الخليج وليبيا، تأشيرات الزيارات، حجز تذاكر الطيران، وحجوزات الفنادق.",
  keywords: [
    "خدمات رحال للسياحة",
    "حج وعمرة",
    "تأشيرات عمل السعودية",
    "تأشيرات عمل الإمارات",
    "تأشيرات ليبيا",
    "حجز طيران",
    "حجز فنادق",
    "رحلات سياحية",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "خدماتنا | شركة رحال للسفر والسياحة",
    description:
      "حلول متكاملة لتجعل رحلتك أسهل وأكثر راحة — خدمات الحج والعمرة، تأشيرات العمل والزيارات، حجز الطيران والفنادق.",
    url: "https://rahal-travel.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      <BreadcrumbJsonLd
        items={[
          { name: "الرئيسية", item: "/" },
          { name: "خدماتنا", item: "/services" },
        ]}
      />

      {/* 1. Page Header */}
      <PageHeader
        badge="دليل الخدمات"
        title="خدماتنا"
        description="حلول متكاملة لتجعل رحلتك أسهل وأكثر راحة"
        backgroundImage="/images/banners/home-banner.png"
        breadcrumbs={[{ label: "خدماتنا" }]}
      />

      {/* 2. Services Intro */}
      <ServicesIntro />

      {/* 3. Services Grid (6 Services via reusable ServiceCard) */}
      <ServicesGrid />

      {/* 4. Conversion CTA */}
      <ServicesCta />
    </div>
  );
}
