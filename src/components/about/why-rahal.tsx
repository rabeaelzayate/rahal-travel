import React from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { companyData } from "@/data/company";

export function WhyRahalAbout() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <Container className="space-y-12">
        <SectionTitle
          badge="ركائز التميز"
          title="لماذا يفضل المسافرون"
          highlight="شركة رحال؟"
          description="مزايا وخدمات مصممة لتجعل تجربة السفر والحجوزات مريحة وموثوقة."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companyData.pillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 text-right space-y-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold-500 text-navy-950 flex items-center justify-center shadow-xs">
                  <Icon className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-navy-900">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
