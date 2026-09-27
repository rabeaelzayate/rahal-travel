import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { destinationsData } from "@/data/destinations";
import { MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/icons";
import { companyData } from "@/data/company";

export function DestinationsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-100/70 border-y border-slate-200/80">
      <Container className="space-y-12">
        <SectionTitle
          badge="أبرز الوجهات"
          title="وجهات سياحية"
          highlight="مختارة"
          description="استكشف أشهر الوجهات والبلدان التي نقدم لها خدمات التأشيرات والرحلات وحجوزات الطيران."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinationsData.map((destination) => {
            const whatsappUrl = `https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
              `مرحبًا، أود الاستفسار عن عروض وتأشيرات السفر إلى: ${destination.name}`
            )}`;

            return (
              <div
                key={destination.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Destination Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                    <div className="absolute bottom-3 right-3 text-right">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-gold-300 bg-navy-950/60 px-2.5 py-1 rounded-full backdrop-blur-xs">
                        <MapPin className="w-3 h-3 text-gold-400" />
                        <span>{destination.country}</span>
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3 text-right">
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-gold-700 transition-colors">
                      {destination.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {destination.tagline}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {destination.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-5 pt-0 mt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-gold-50 text-slate-800 hover:text-gold-800 border border-slate-200/80 hover:border-gold-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                    <span>استفسار عن هذه الوجهة</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
