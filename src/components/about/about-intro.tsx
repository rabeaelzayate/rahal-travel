import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export function AboutIntro() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center text-right">
          {/* Visual Showcase Card */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/images/services/full-packages.png"
                alt="خدمات وبرامج شركة رحال للسفر والسياحة"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-transparent to-transparent" />
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-6 right-6 sm:right-10 bg-navy-900 text-white p-5 rounded-2xl shadow-xl border border-navy-800 flex items-center gap-4 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-gold-500 text-navy-950 flex items-center justify-center shrink-0 shadow-md">
                <ShieldCheck className="w-6 h-6 text-navy-950" />
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-gold-400">خبرة ومصداقية</p>
                <p className="text-sm font-semibold text-white">خدمات سفر وتأشيرات شاملة</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <Badge variant="gold" size="md">
              من نحن
            </Badge>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy-900 leading-tight">
              نصنع لك تجربة سفر <span className="text-gold-600">فريدة وميسرة</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              تأسست <span className="font-bold text-navy-900">شركة رحال للسفر والسياحة</span> لتكون بوابتك الشاملة لجميع متطلبات السفر، سواء كنت تخطط لأداء مناسك الحج والعمرة، أو تبحث عن عطلة سياحية مميزة داخل مصر أو حول العالم، أو تسعى لإنهاء وتخليص تأشيرات العمل للخليج وليبيا.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              يقوم فريقنا بتقديم المشورة المتخصصة ومتابعة كافة الإجراءات بدقة واحترافية لضمان راحتك وتوفير وقتك وجهدك.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>برامج حج وعمرة منظمة</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>تأشيرات عمل وسياحة</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>حجوزات طيران مرنة</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>إقامات فندقية متنوعة</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
