import { HeroSection } from "@/components/home/hero-section";
import { AboutPreviewSection } from "@/components/home/about-preview-section";
import { ServicesSection } from "@/components/home/services-section";
import { WhyRahalSection } from "@/components/home/why-rahal-section";
import { DestinationsSection } from "@/components/home/destinations-section";
import { QuickConsultationSection } from "@/components/home/quick-consultation-section";
import { GalleryPreviewSection } from "@/components/home/gallery-preview-section";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Preview */}
      <AboutPreviewSection />

      {/* 3. Services Section (6 Services via ServiceCard) */}
      <ServicesSection />

      {/* 4. Why Rahal (4 Core Pillars) */}
      <WhyRahalSection />

      {/* 5. Top Destinations (Data Driven) */}
      <DestinationsSection />

      {/* 6. Quick Lead Consultation CTA */}
      <QuickConsultationSection />

      {/* 7. Gallery Preview Grid */}
      <GalleryPreviewSection />
    </div>
  );
}
