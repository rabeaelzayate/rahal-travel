import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ServiceData } from "@/data/services";
import { CheckCircle2 } from "lucide-react";

interface ServiceDetailIntroProps {
  service: ServiceData;
}

export function ServiceDetailIntro({ service }: ServiceDetailIntroProps) {
  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-right">
          {/* Text Content */}
          <div className="space-y-6">
            <Badge variant="gold" size="md">
              نبذة عن الخدمة
            </Badge>

            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 leading-tight">
              حلول متكاملة لخدمة <span className="text-gold-600">{service.title}</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {service.fullDescription}
            </p>

            {service.benefits && service.benefits.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold text-navy-900">
                  ماذا نقدم لك في هذه الخدمة؟
                </h3>
                <div className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Visual Showcase Card */}
          <div className="relative h-[320px] sm:h-[380px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 right-4 bg-navy-900/80 backdrop-blur-xs text-white px-4 py-2 rounded-xl text-xs font-bold border border-navy-800">
              شركة رحال للسفر والسياحة
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
