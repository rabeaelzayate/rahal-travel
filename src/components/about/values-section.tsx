import React from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { companyData } from "@/data/company";

export function ValuesSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <Container className="space-y-12">
        <SectionTitle
          badge="مبادئنا الراسخة"
          title="قيمنا"
          highlight="الأساسية"
          description="نسترشد بمجموعة من المبادئ المهنية التي تضمن تقديم خدمة تليق بثقة عملائنا."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.values.map((val, idx) => {
            const Icon = val.icon;

            return (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-3xl p-6 border border-slate-200/80 hover:border-gold-400/60 shadow-xs hover:shadow-md transition-all duration-300 text-right space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-navy-900">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.description}
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
