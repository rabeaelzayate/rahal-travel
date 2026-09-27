import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";
import { ArrowLeft } from "lucide-react";

export function AboutServices() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <Container className="space-y-12">
        <SectionTitle
          badge="نطاق خدماتنا"
          title="ماذا نقدم في"
          highlight="رحال للسياحة؟"
          description="نقدم خدمات متكاملة تشمل كل ما يلزم لرحلة ناجحة وميسرة."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group p-6 rounded-3xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 hover:border-gold-400/60 transition-all duration-300 flex flex-col justify-between text-right space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 flex items-center justify-center transition-colors shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-gold-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1 text-xs font-bold text-navy-900 group-hover:text-gold-700 transition-colors pt-2">
                  <span>تفاصيل الخدمة</span>
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="flex justify-center pt-4">
          <Button
            href="/services"
            variant="gold"
            size="lg"
            icon={<ArrowLeft className="w-4 h-4" />}
            iconPosition="left"
          >
            استعراض دليل الخدمات بالكامل
          </Button>
        </div>
      </Container>
    </section>
  );
}
