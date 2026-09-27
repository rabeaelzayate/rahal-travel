"use client";

import React from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/icons";
import { companyData } from "@/data/company";

export function FloatingActions() {
  const whatsappUrl = `https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "السلام عليكم، أود الاستفسار عن خدمات شركة رحال للسفر والسياحة."
  )}`;

  return (
    <aside aria-label="أزرار التواصل السريع" className="fixed bottom-6 left-6 z-30 flex flex-col gap-3">
      {/* Phone Call Quick Button (Hidden on larger screens to avoid clutter) */}
      <a
        href={`tel:${companyData.phones[0]}`}
        className="md:hidden flex items-center justify-center w-12 h-12 bg-navy-900 text-gold-400 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all"
        aria-label="اتصال هاتفي بشركة رحال"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Floating Action */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="تواصل فوري عبر واتساب"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gold-400"></span>
        </span>
        <WhatsAppIcon className="w-7 h-7" />

        {/* Tooltip on hover */}
        <span className="absolute left-16 bg-navy-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md hidden sm:block">
          تحدث معنا عبر واتساب
        </span>
      </a>
    </aside>
  );
}
