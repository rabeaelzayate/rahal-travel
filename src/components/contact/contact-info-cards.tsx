import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/common/icons";
import { companyData } from "@/data/company";

export function ContactInfoCards() {
  const whatsappUrl1 = `https://wa.me/201114338503?text=${encodeURIComponent(
    "السلام عليكم، أود التواصل مع فريق شركة رحال للسفر والسياحة."
  )}`;

  const whatsappUrl2 = `https://wa.me/201114729370?text=${encodeURIComponent(
    "السلام عليكم، أود التواصل مع فريق شركة رحال للسفر والسياحة."
  )}`;

  return (
    <div className="space-y-6 text-right">
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-black text-navy-900 leading-tight">
          معلومات الاتصال ومقر الشركة
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          يسعدنا تواصلك عبر الهاتف أو الواتساب واستقبالك في مقر الشركة للإجابة عن كافة استفساراتك.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Card 1: Direct Phone Call */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-gold-400/60 transition-all duration-200 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-xs">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-500">الاتصال الهاتفي المباشر</h3>
            <div className="space-y-1 mt-1">
              <a
                href="tel:01114338503"
                className="text-sm sm:text-base font-bold text-navy-900 hover:text-gold-700 transition-colors block"
                dir="ltr"
              >
                01114338503
              </a>
              <a
                href="tel:01114729370"
                className="text-sm sm:text-base font-bold text-navy-900 hover:text-gold-700 transition-colors block"
                dir="ltr"
              >
                01114729370
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: WhatsApp Chat */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-400 transition-all duration-200 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shadow-xs">
            <WhatsAppIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-500">محادثة واتساب فوري</h3>
            <div className="space-y-1 mt-1">
              <a
                href={whatsappUrl1}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-bold text-emerald-600 hover:text-emerald-700 transition-colors block"
                dir="ltr"
              >
                01114338503
              </a>
              <a
                href={whatsappUrl2}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-bold text-emerald-600 hover:text-emerald-700 transition-colors block"
                dir="ltr"
              >
                01114729370
              </a>
            </div>
          </div>
        </div>

        {/* Card 3: Email */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-gold-400/60 transition-all duration-200 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-xs">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-500">البريد الإلكتروني</h3>
            <a
              href={`mailto:${companyData.email}`}
              className="text-xs sm:text-sm font-bold text-navy-900 hover:text-gold-700 transition-colors block mt-1 truncate"
            >
              {companyData.email}
            </a>
          </div>
        </div>

        {/* Card 4: Working Hours */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-gold-400/60 transition-all duration-200 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-xs">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-500">أوقات العمل الرسمية</h3>
            <p className="text-xs font-semibold text-navy-900 mt-1 leading-snug">
              {companyData.workingHours.ar}
            </p>
          </div>
        </div>
      </div>

      {/* Address Full Card */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
          <MapPin className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xs font-bold text-slate-500">مقر الشركة</h3>
          <p className="text-sm font-bold text-navy-900">
            {companyData.address.ar}
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            نرحب بزيارتكم الكريمة لإتمام وتنسيق كافة الإجراءات والحجوزات.
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="pt-2 space-y-3">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          تابعنا على منصات التواصل
        </h3>
        <div className="flex items-center gap-3">
          <a
            href={companyData.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="فيسبوك شركة رحال"
            className="w-11 h-11 rounded-2xl bg-white border border-slate-200 text-navy-900 hover:text-gold-600 hover:border-gold-400 flex items-center justify-center shadow-xs transition-all hover:scale-105"
          >
            <FacebookIcon className="w-5 h-5" />
          </a>
          <a
            href={companyData.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="انستغرام شركة رحال"
            className="w-11 h-11 rounded-2xl bg-white border border-slate-200 text-navy-900 hover:text-gold-600 hover:border-gold-400 flex items-center justify-center shadow-xs transition-all hover:scale-105"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href={companyData.socialLinks.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تيك توك شركة رحال"
            className="w-11 h-11 rounded-2xl bg-white border border-slate-200 text-navy-900 hover:text-gold-600 hover:border-gold-400 flex items-center justify-center shadow-xs transition-all hover:scale-105"
          >
            <TikTokIcon className="w-5 h-5" />
          </a>
          <a
            href={whatsappUrl1}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="واتساب شركة رحال"
            className="w-11 h-11 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center shadow-xs transition-all hover:scale-105"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
