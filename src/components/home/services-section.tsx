import React from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { ServiceCard } from "@/components/ui/service-card";
import { servicesData } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-100/70 border-y border-slate-200/80">
      <Container className="space-y-12">
        <SectionTitle
          badge="دليل الخدمات"
          title="خدماتنا"
          highlight="المتكاملة"
          description="نقدم باقة شاملة ومخصصة من أرقى خدمات السفر، الحج والعمرة، وتسهيل استخراج التأشيرات المعتمدة."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              slug={service.slug}
              description={service.shortDescription}
              icon={service.icon}
              image={service.image}
              badge={service.badge}
              features={service.features}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
