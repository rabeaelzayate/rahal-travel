import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/data/services";
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceDetailIntro } from "@/components/services/service-detail-intro";
import { ServiceFeatures } from "@/components/services/service-features";
import { ServiceSteps } from "@/components/services/service-steps";
import { ServiceInfo } from "@/components/services/service-info";
import { RelatedServices } from "@/components/services/related-services";
import { ServiceCta } from "@/components/services/service-cta";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "الخدمة غير موجودة",
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | شركة رحال للسفر والسياحة`,
      description: service.seo.description,
      url: `https://rahal-travel.com/services/${service.slug}`,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      {/* Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: "الرئيسية", item: "/" },
          { name: "خدماتنا", item: "/services" },
          { name: service.title, item: `/services/${service.slug}` },
        ]}
      />
      <ServiceJsonLd
        name={service.title}
        description={service.shortDescription}
        url={`/services/${service.slug}`}
        image={service.image}
      />

      {/* 1. Service Hero with Breadcrumbs */}
      <ServiceHero service={service} />

      {/* 2. Detailed Introduction & Visual Card */}
      <ServiceDetailIntro service={service} />

      {/* 3. Detailed Features & Inclusions */}
      <ServiceFeatures service={service} />

      {/* 4. How It Works (Steps) */}
      <ServiceSteps service={service} />

      {/* 5. Important Information & Guidelines */}
      <ServiceInfo service={service} />

      {/* 6. Related Services */}
      <RelatedServices currentService={service} />

      {/* 7. Dedicated WhatsApp / Phone CTA */}
      <ServiceCta service={service} />
    </div>
  );
}
