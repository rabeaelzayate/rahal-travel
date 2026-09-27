import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { companyData } from "@/data/company";

export function AboutPreviewSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[340px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/images/banners/about-banner.png"
                alt="عن شركة رحال للسفر والسياحة"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-transparent to-transparent" />
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 right-6 sm:right-10 bg-navy-900 text-white p-5 rounded-2xl shadow-xl border border-navy-800 flex items-center gap-4 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-gold-500 text-navy-950 flex items-center justify-center shrink-0 shadow-md">
                <ShieldCheck className="w-6 h-6 text-navy-950" />
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-gold-400">شريكك الموثوق</p>
                <p className="text-sm font-semibold text-white">رحلات وتأشيرات معتمدة</p>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="space-y-6 text-right order-1 lg:order-2">
            <div className="flex justify-start">
              <Badge variant="gold" size="md">
                من نحن؟
              </Badge>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy-900 leading-tight">
              شركة <span className="text-gold-600">رَحّال</span> للسفر والسياحة
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {companyData.description.ar}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  برامج عمرة وحج متميزة مع مشرفين وإقامة فندقية راقية قرب الحرمين.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  تسهيل وتخليص تأشيرات العمل الرسمية لدول الخليج العربي ودولة ليبيا.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  باقات سياحية متكاملة وحجوزات طيران وفنادق بأفضل العروض السعرية.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button
                href="/about"
                variant="gold"
                size="md"
                icon={<ArrowLeft className="w-4 h-4" />}
                iconPosition="left"
              >
                تعرف علينا أكثر
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
