import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpLeft,
  Compass,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/common/logo";
import { companyData, mainNavItems } from "@/data/company";
import { servicesData } from "@/data/services";

import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/common/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white mt-auto border-t border-navy-800">
      {/* Top Banner CTA inside Footer */}
      <div className="border-b border-navy-800/80 bg-linear-to-r from-navy-950 via-navy-900 to-navy-950 py-12">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-right">
            <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>خدمة معتمدة واستشارات سياحية فورية</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug">
              جاهز لتخطيط رحلتك القادمة أو استخراج تأشيرتك؟
            </h3>
            <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
              فريق رحال مستعد لتقديم كافة الاستشارات وحجز التذاكر والفنادق وتخليص التأشيرات بأفضل الأسعار.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href={`https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#20ba5a] active:bg-[#1da851] transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>مراسلة عبر واتساب</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 text-navy-950 px-6 py-3 rounded-xl font-black hover:bg-gold-400 active:bg-gold-600 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              <Phone className="w-4 h-4" />
              <span>تواصل معنا</span>
            </Link>
          </div>
        </Container>
      </div>

      {/* Main Footer Links & Info */}
      <div className="py-16">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About */}
          <div className="space-y-5 text-right">
            <Logo variant="light" />
            <p className="text-slate-300 text-sm leading-relaxed">
              {companyData.description.ar}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={companyData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="صفحة فيسبوك لشركة رحال"
                className="w-10 h-10 rounded-xl bg-navy-900 border border-navy-800 text-slate-300 hover:text-gold-400 hover:border-gold-500/50 flex items-center justify-center transition-all hover:scale-105"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={companyData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="صفحة انستغرام لشركة رحال"
                className="w-10 h-10 rounded-xl bg-navy-900 border border-navy-800 text-slate-300 hover:text-gold-400 hover:border-gold-500/50 flex items-center justify-center transition-all hover:scale-105"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={companyData.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="صفحة تيك توك لشركة رحال"
                className="w-10 h-10 rounded-xl bg-navy-900 border border-navy-800 text-slate-300 hover:text-gold-400 hover:border-gold-500/50 flex items-center justify-center transition-all hover:scale-105"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تواصل عبر الواتساب"
                className="w-10 h-10 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all hover:scale-105"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4 text-right">
            <h4 className="text-base font-bold text-gold-400 flex items-center gap-2">
              <Compass className="w-4 h-4" />
              <span>خدماتنا المعتمدة</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-300 hover:text-gold-300 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowUpLeft className="w-3.5 h-3.5 text-slate-600 group-hover:text-gold-400 transition-colors" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4 text-right">
            <h4 className="text-base font-bold text-gold-400">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-sm">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-gold-300 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowUpLeft className="w-3.5 h-3.5 text-slate-600 group-hover:text-gold-400 transition-colors" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-4 text-right">
            <h4 className="text-base font-bold text-gold-400">
              معلومات التواصل المباشر
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span>{companyData.address.ar}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <div className="space-y-1">
                  <a
                    href={`tel:${companyData.phones[0]}`}
                    className="hover:text-gold-400 transition-colors font-medium block"
                    dir="ltr"
                  >
                    {companyData.phones[0]}
                  </a>
                  <a
                    href={`tel:${companyData.phones[1]}`}
                    className="hover:text-gold-400 transition-colors font-medium block"
                    dir="ltr"
                  >
                    {companyData.phones[1]}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="hover:text-gold-400 transition-colors"
                >
                  {companyData.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span className="text-xs text-slate-400 leading-relaxed">
                  {companyData.workingHours.ar}
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-navy-900 py-6 bg-navy-950 text-xs text-slate-400">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right">
          <p>© {currentYear} شركة رحال للسفر والسياحة. جميع الحقوق محفوظة.</p>
          <p className="text-slate-500">
            بوابتك الموثوقة لخدمات السفر والحج والعمرة وتأشيرات العمل
          </p>
        </Container>
      </div>
    </footer>
  );
}
