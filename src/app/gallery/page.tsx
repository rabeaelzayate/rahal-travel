import { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { GalleryIntro } from "@/components/gallery/gallery-intro";
import { GalleryView } from "@/components/gallery/gallery-view";
import { GalleryCta } from "@/components/gallery/gallery-cta";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "معرض الصور والرحلات",
  description:
    "استعرض ألبوم صور وتجارب رحلات شركة رحال للسفر والسياحة: برامج الحج والعمرة، شواطئ ومنتجعات مصر، الوجهات السياحية العالمية، وأرقى الفنادق.",
  keywords: [
    "معرض صور رحال",
    "صور رحلات سياحية",
    "صور رحلات العمرة والحج",
    "صور فنادق",
    "سياحة وسفر مصر",
    "رحال للسياحة",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "معرض الصور والرحلات | شركة رحال للسفر والسياحة",
    description:
      "لقطات مميزة من برامج الحج والعمرة والرحلات السياحية الداخلية والخارجية وأفخم الفنادق.",
    url: "https://rahal-travel.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col w-full">
      <BreadcrumbJsonLd
        items={[
          { name: "الرئيسية", item: "/" },
          { name: "معرض الصور والرحلات", item: "/gallery" },
        ]}
      />

      {/* 1. Page Header with Breadcrumbs */}
      <PageHeader
        badge="ألبوم الذكريات"
        title="معرض الصور والرحلات"
        description="لقطات حية من برامج الحج والعمرة وأجمل الوجهات السياحية وتجارب السفر مع شركة رحال."
        backgroundImage="/images/banners/about-banner.png"
        breadcrumbs={[{ label: "المعرض" }]}
      />

      {/* 2. Gallery Intro Section */}
      <GalleryIntro />

      {/* 3. Interactive Category Filter + Grid + Lightbox */}
      <GalleryView />

      {/* 4. Conversion CTA */}
      <GalleryCta />
    </div>
  );
}
