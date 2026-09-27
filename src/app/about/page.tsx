import { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutIntro } from "@/components/about/about-intro";
import { VisionMission } from "@/components/about/vision-mission";
import { ValuesSection } from "@/components/about/values-section";
import { WhyRahalAbout } from "@/components/about/why-rahal";
import { AboutServices } from "@/components/about/about-services";
import { AboutCta } from "@/components/about/about-cta";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "تعرف على شركة رحال للسفر والسياحة، رؤيتنا ورسالتنا وقيمنا الراسخة في تقديم أرقى خدمات الحج والعمرة، الرحلات السياحية، وتأشيرات العمل والزيارات وحجوزات الطيران والفنادق.",
  keywords: [
    "من نحن رحال للسياحة",
    "عن شركة رحال",
    "رحال للسفر والسياحة",
    "شركة سياحة مصر",
    "تأشيرات عمل",
    "خدمات حج وعمرة",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "من نحن | شركة رحال للسفر والسياحة",
    description:
      "وجهتك الموثوقة لجميع خدمات السفر والسياحة وتأشيرات العمل وبرامج الحج والعمرة وحجوزات الطيران والفنادق.",
    url: "https://rahal-travel.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <BreadcrumbJsonLd
        items={[
          { name: "الرئيسية", item: "/" },
          { name: "من نحن", item: "/about" },
        ]}
      />

      {/* 1. About Hero with Breadcrumbs & Brand Headline */}
      <AboutHero />

      {/* 2. Who We Are (Detailed Introduction & Image) */}
      <AboutIntro />

      {/* 3. Vision & Mission Cards */}
      <VisionMission />

      {/* 4. Core Values Grid */}
      <ValuesSection />

      {/* 5. Why Rahal (Core Pillars) */}
      <WhyRahalAbout />

      {/* 6. Services Overview Summary */}
      <AboutServices />

      {/* 7. Final Conversion CTA */}
      <AboutCta />
    </div>
  );
}
