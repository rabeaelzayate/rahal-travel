import React from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { ServiceData } from "@/data/services";

interface ServiceStepsProps {
  service: ServiceData;
}

export function ServiceSteps({ service }: ServiceStepsProps) {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-200/80">
      <Container className="space-y-12">
        <SectionTitle
          badge="خطوات الحصول على الخدمة"
          title="كيف نعمل على"
          highlight="تجهيز طلبك؟"
          description="خطوات بسيطة وواضحة نتبعها لضمان إنجاز كافة ترتيباتك بسلاسة ودقة."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 text-right space-y-4 hover:border-gold-400/60 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center font-black text-xl shadow-xs">
                {step.number}
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-navy-900">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
