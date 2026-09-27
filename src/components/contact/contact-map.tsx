import React from "react";
import { MapPin, Navigation, Clock, Phone, ExternalLink } from "lucide-react";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/button";

export function ContactMap() {
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${companyData.name.ar} ${companyData.address.ar}`
  )}`;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/80 bg-slate-50/70 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Info Column */}
            <div className="p-8 sm:p-10 lg:col-span-5 flex flex-col justify-between text-right space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-700 text-xs font-bold">
                  <MapPin className="w-3.5 h-3.5" />
                  موقع ومقر الشركة
                </div>

                <h3 className="text-2xl font-black text-navy-900 leading-tight">
                  يسعدنا تشريفكم وزيارتنا في مقر الشركة
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  تفضل بزيارتنا لمناقشة تفاصيل رحلتك، مراجعة متطلبات التأشيرة، أو إتمام إجراءات الحجز واستلام المستندات مع مستشاري السفر.
                </p>

                <div className="pt-2 space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80">
                    <Navigation className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-500 block">العنوان</span>
                      <span className="text-xs sm:text-sm font-bold text-navy-900">{companyData.address.ar}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80">
                    <Clock className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-500 block">مواعيد الزيارة</span>
                      <span className="text-xs sm:text-sm font-semibold text-navy-900">{companyData.workingHours.ar}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80">
                    <Phone className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-500 block">للتنسيق المسبق</span>
                      <a href={`tel:${companyData.phones[0]}`} className="text-xs sm:text-sm font-bold text-navy-900 hover:text-gold-600" dir="ltr">
                        {companyData.phones[0]}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                  className="w-full justify-center"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  فتح الموقع في خرائط Google Maps
                </Button>
              </div>
            </div>

            {/* Interactive / Visual Map Box */}
            <div className="lg:col-span-7 bg-navy-950 p-6 sm:p-10 flex flex-col justify-center items-center text-center text-white relative min-h-[300px] overflow-hidden">
              {/* Decorative background grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, #C98720 1px, transparent 0)`,
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative z-10 max-w-md space-y-4">
                <div className="w-16 h-16 rounded-3xl bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center mx-auto shadow-lg animate-pulse">
                  <MapPin className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">
                    {companyData.name.ar}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    مقرنا مجهز لاستقبالكم وتقديم كافة الاستشارات السياحية وتسهيلات التأشيرات في بيئة مريحة ومهنية.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold-500 text-navy-950 text-xs sm:text-sm font-black hover:bg-gold-400 transition-all shadow-md hover:scale-105"
                  >
                    <span>عرض الاتجاهات على الخريطة</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
