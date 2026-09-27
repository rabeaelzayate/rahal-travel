import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/icons";
import { companyData } from "@/data/company";

export function QuickConsultationSection() {
  return (
    <section className="py-16 md:py-20 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Subtle Shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-700/40 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
        <div className="flex justify-center">
          <Badge variant="gold" size="sm">
            استشارة سياحية مجانية
          </Badge>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
          هل تخطط لرحلتك القادمة أو تحتاج تأشيرة؟
        </h2>

        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          فريق خبراء شركة رحال مستعد لتقديم كافة الاستشارات وحجز التذاكر والفنادق وتسهيل استخراج التأشيرات بأفضل الأسعار.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button
            href={`https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
              "السلام عليكم، أود استشارة فريق رحال بشأن التخطيط لرحلة أو استخراج تأشيرة."
            )}`}
            variant="whatsapp"
            size="lg"
            icon={<WhatsAppIcon className="w-5 h-5" />}
            className="shadow-xl hover:shadow-2xl"
          >
            تواصل عبر واتساب
          </Button>

          <Button
            href={`tel:${companyData.phones[0]}`}
            variant="gold"
            size="lg"
            icon={<Phone className="w-5 h-5" />}
          >
            اتصل بنا مباشرة
          </Button>
        </div>
      </Container>
    </section>
  );
}
