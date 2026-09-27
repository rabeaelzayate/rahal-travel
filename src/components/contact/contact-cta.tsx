import React from "react";
import { WhatsAppIcon } from "@/components/common/icons";
import { Phone, MessageSquareText } from "lucide-react";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  const whatsappUrl = `https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "السلام عليكم، أود الاستفسار عن باقات السفر والتأشيرات المتاحة لديكم في شركة رحال."
  )}`;

  return (
    <section className="py-16 md:py-20 bg-gradient-navy text-white relative overflow-hidden text-right">
      {/* Glow / Ornament */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold">
          <MessageSquareText className="w-3.5 h-3.5" />
          مستشارو السفر بانتظار تواصلك
        </div>

        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
            هل لديك استفسار خاص أو ترغب في باقة مخصصة؟
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            لا تتردد في التحدث معنا الآن. فريق شركة رحال للسفر والسياحة مستعد لتصميم رحلتك وتقديم أفضل عروض الطيران والفنادق وتأشيرات السفر.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto px-8"
            icon={<WhatsAppIcon className="w-5 h-5" />}
          >
            تواصل فوري عبر واتساب
          </Button>

          <Button
            href={`tel:${companyData.phones[0]}`}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto px-8"
            icon={<Phone className="w-4 h-4" />}
          >
            اتصال هاتفي مباشر
          </Button>
        </div>
      </div>
    </section>
  );
}
