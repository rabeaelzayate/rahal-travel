import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/icons";
import { companyData } from "@/data/company";

export function AboutCta() {
  const whatsappUrl = `https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "السلام عليكم، أود التواصل مع فريق رحال للسفر والسياحة."
  )}`;

  return (
    <section className="py-16 md:py-20 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-navy-700/30 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
        <div className="flex justify-center">
          <Badge variant="gold" size="sm">
            انطلق معنا
          </Badge>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
          دعنا نكون جزءًا من رحلتك القادمة
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          سواء كنت بحاجة إلى استشارة سياحية، حجز تذاكر، فندق، أو تخليص تأشيرات، فريق رحال في خدمتك دائمًا.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button
            href={whatsappUrl}
            variant="whatsapp"
            size="lg"
            icon={<WhatsAppIcon className="w-5 h-5" />}
            className="shadow-xl"
          >
            تواصل عبر واتساب
          </Button>

          <Button
            href={`tel:${companyData.phones[0]}`}
            variant="gold"
            size="lg"
            icon={<Phone className="w-4 h-4" />}
          >
            اتصال هاتفي
          </Button>
        </div>
      </Container>
    </section>
  );
}
