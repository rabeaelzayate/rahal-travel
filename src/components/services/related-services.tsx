import React from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { ServiceCard } from "@/components/ui/service-card";
import { servicesData, ServiceData } from "@/data/services";

interface RelatedServicesProps {
  currentService: ServiceData;
}

export function RelatedServices({ currentService }: RelatedServicesProps) {
  const related = servicesData
    .filter((s) => s.slug !== currentService.slug)
    .slice(0, 3);

  return (
    <section className="py-16 md:py-20 bg-slate-100/70 border-b border-slate-200/80">
      <Container className="space-y-12">
        <SectionTitle
          badge="خدمات أخرى"
          title="خدمات قد"
          highlight="تهمك أيضًا"
          description="استكشف المزيد من خدمات السفر والتأشيرات المتاحة لدى شركة رحال."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {related.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              slug={service.slug}
              description={service.shortDescription}
              icon={service.icon}
              badge={service.badge}
              features={service.features}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
