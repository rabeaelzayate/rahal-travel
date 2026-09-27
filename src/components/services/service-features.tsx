import React from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { ServiceData } from "@/data/services";
import { Check } from "lucide-react";

interface ServiceFeaturesProps {
  service: ServiceData;
}

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/80">
      <Container className="space-y-12">
        <SectionTitle
          badge="ما تشمله الخدمة"
          title="مميزات وتفاصيل"
          highlight={service.title}
          description="نحرص على تقديم خدمات منظمة ومتكاملة تلبي رغباتك وتوفر لك تجربة سفر مريحة."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.detailedFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 text-right space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <h3 className="text-base font-bold text-navy-900">{feat.title}</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pr-11">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
