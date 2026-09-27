import React from "react";
import { Container } from "@/components/ui/container";
import { ServiceCard } from "@/components/ui/service-card";
import { servicesData } from "@/data/services";

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <Container>
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
