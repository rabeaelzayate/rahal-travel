import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/icons";
import { companyData } from "@/data/company";

export function ServicesCta() {
  return (
    <section className="py-16 bg-navy-950 text-white relative overflow-hidden border-t border-navy-800">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
          هل تحتاج إلى مساعدة في اختيار الخدمة المناسبة؟
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          فريق شركة رحال جاهز لتقديم المشورة والإجابة عن جميع استفساراتك حول التأشيرات وحجوزات الطيران والفنادق وبرامج الحج والعمرة.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button
            href={`https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
              "السلام عليكم، أود استشارة فريق رحال بشأن الخدمات المناسبة لرحلتي."
            )}`}
            variant="whatsapp"
            size="lg"
            icon={<WhatsAppIcon className="w-5 h-5" />}
          >
            مراسلة عبر واتساب
          </Button>

          <Button
            href="/contact"
            variant="gold"
            size="lg"
            icon={<Phone className="w-4 h-4" />}
          >
            تواصل معنا
          </Button>
        </div>
      </Container>
    </section>
  );
}
