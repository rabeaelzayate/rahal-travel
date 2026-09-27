import React from "react";
import { Container } from "@/components/ui/container";
import { CheckCircle2 } from "lucide-react";

export function ServicesIntro() {
  return (
    <section className="py-12 bg-white border-b border-slate-200/80">
      <Container className="text-center max-w-3xl mx-auto space-y-6">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
          في <span className="font-bold text-navy-900">رحال للسفر والسياحة</span>، نقدم مجموعة متكاملة من خدمات السفر والسياحة لتلبية احتياجاتك، من حجز تذاكر الطيران والفنادق إلى الرحلات والتأشيرات وخدمات الحج والعمرة بأعلى درجات المصداقية والاهتمام.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-slate-600 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>تأشيرات عمل وسياحة معتمدة</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>باقات حج وعمرة متكاملة</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>حجوزات طيران وفنادق فورية</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
