"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Moon,
  Palmtree,
  FileCheck2,
  Compass,
  Plane,
  Building2,
  Map,
  Heart,
  Clock,
  ArrowLeft,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/common/icons";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { mainNavItems, companyData } from "@/data/company";
import { cn } from "@/lib/utils";

const servicesDropdownItems = [
  {
    title: "الحج و العمرة",
    desc: "برامج إيمانية وإقامة قرب الحرمين",
    href: "/services/hajj-umrah",
    icon: Moon,
  },
  {
    title: "الرحلات الداخلية والخارجية",
    desc: "باقات سياحية وعائلية مميزة",
    href: "/services/trips",
    icon: Palmtree,
  },
  {
    title: "تأشيرات عمل (الخليج وليبيا)",
    desc: "توثيق وتخليص سريع لمعاملات العمل",
    href: "/services/work-visas",
    icon: FileCheck2,
  },
  {
    title: "التأشيرات والزيارات السياحية",
    desc: "استخراج تأشيرات الشنغن والوجهات العالمية",
    href: "/services/tourist-visits",
    icon: Compass,
  },
  {
    title: "حجز تذاكر الطيران",
    desc: "أفضل أسعار الطيران الداخلي والدولي",
    href: "/services/flights",
    icon: Plane,
  },
  {
    title: "حجز الفنادق",
    desc: "إقامة راقية بأسعار مخفضة وتأكيد فوري",
    href: "/services/hotels",
    icon: Building2,
  },
  {
    title: "برامج سياحية متكاملة",
    desc: "باقات شاملة الطيران والفنادق والجولات",
    href: "/services/full-packages",
    icon: Map,
  },
  {
    title: "رحلات شهر العسل",
    desc: "باقات رومانسية فاخرة للعروسين",
    href: "/services/honeymoon",
    icon: Heart,
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle Scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset menu when route changes
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setIsServicesOpen(false);
  }

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setIsServicesOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top micro announcement bar */}
      <div className="bg-navy-950 text-white text-xs py-2 border-b border-navy-900 hidden md:block">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-slate-300 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              {companyData.tagline.ar}
            </span>
          </div>

          <div className="flex items-center gap-6 text-slate-300 text-xs">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span>مواعيد العمل: 9:00 ص - 10:00 م</span>
            </span>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${companyData.phones[0]}`}
                className="hover:text-gold-400 transition-colors flex items-center gap-1 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span dir="ltr">{companyData.phones[0]}</span>
              </a>
              <span className="text-slate-600">|</span>
              <a
                href={`tel:${companyData.phones[1]}`}
                className="hover:text-gold-400 transition-colors flex items-center gap-1 font-medium"
              >
                <span dir="ltr">{companyData.phones[1]}</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "transition-all duration-300 bg-white/95 backdrop-blur-md border-b",
          scrolled
            ? "py-2.5 shadow-md border-slate-200"
            : "py-3.5 shadow-xs border-slate-200/80"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {mainNavItems.map((item) => {
              const isServicesLink = item.href === "/services";
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              if (isServicesLink) {
                return (
                  <div
                    key={item.href}
                    className="relative group"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 inline-flex items-center gap-1",
                        isActive
                          ? "text-navy-900 bg-navy-900/5 font-bold"
                          : "text-slate-700 hover:text-navy-900 hover:bg-slate-100"
                      )}
                    >
                      <span>{item.title}</span>
                      <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-navy-900 transition-transform group-hover:rotate-180 duration-200" />
                    </Link>

                    {/* Desktop Services Mega Dropdown */}
                    {isServicesOpen && (
                      <div className="absolute top-full right-0 w-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        {servicesDropdownItems.map((service) => {
                          const Icon = service.icon;
                          const isServiceActive = pathname === service.href;

                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={cn(
                                "flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 text-right group/item",
                                isServiceActive
                                  ? "bg-navy-900/5 text-navy-900"
                                  : "hover:bg-slate-50"
                              )}
                            >
                              <div className="w-9 h-9 rounded-lg bg-navy-900/5 text-navy-900 group-hover/item:bg-gold-500 group-hover/item:text-navy-950 flex items-center justify-center shrink-0 transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="space-y-0.5">
                                <p className="text-xs font-bold text-navy-900 group-hover/item:text-gold-700 transition-colors">
                                  {service.title}
                                </p>
                                <p className="text-[11px] text-slate-500 leading-tight">
                                  {service.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}

                        <div className="col-span-2 pt-2 mt-1 border-t border-slate-100 flex items-center justify-between text-xs px-2">
                          <span className="text-slate-500">
                            هل تبحث عن خدمة مخصصة؟
                          </span>
                          <Link
                            href="/contact"
                            className="text-gold-700 hover:text-gold-800 font-bold inline-flex items-center gap-1"
                          >
                            <span>طلب استشارة فورية</span>
                            <ArrowLeft className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-navy-900 bg-navy-900/5 font-bold"
                      : "text-slate-700 hover:text-navy-900 hover:bg-slate-100"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href={`https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, "")}`}
              variant="whatsapp"
              size="sm"
              icon={<WhatsAppIcon className="w-4 h-4" />}
            >
              واتساب
            </Button>
            <Button
              href="/contact"
              variant="gold"
              size="sm"
              icon={<Phone className="w-4 h-4" />}
            >
              احجز الآن
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="lg:hidden p-2 text-slate-700 hover:text-navy-900 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </Container>
      </nav>

      {/* Mobile Drawer Menu & Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex justify-end">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-navy-950/70 backdrop-blur-xs transition-opacity duration-300"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Side Drawer Content */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-white h-full shadow-2xl flex flex-col justify-between z-[101] animate-in slide-in-from-right duration-300">
            {/* Sticky Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-white sticky top-0 z-10">
              <Logo />
              <button
                onClick={closeMenu}
                className="p-2 text-slate-600 hover:text-navy-900 rounded-xl hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
                aria-label="إغلاق القائمة"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5 text-right">
              {/* Mobile Nav Links */}
              <div className="flex flex-col space-y-1">
                {mainNavItems.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        "px-4 py-3 rounded-xl text-base font-bold transition-all flex items-center justify-between",
                        isActive
                          ? "bg-navy-900/5 text-navy-900"
                          : "text-slate-700 hover:bg-slate-50 hover:text-navy-900"
                      )}
                    >
                      <span>{item.title}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-gold-500" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Services Quick Grid inside Drawer */}
              <div className="space-y-2.5 pt-3 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 px-1 uppercase tracking-wider">
                  خدمات شركة رحال
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {servicesDropdownItems.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={closeMenu}
                        className="p-2.5 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-gold-50/40 hover:border-gold-300 flex items-center gap-2 text-xs font-bold text-navy-900 transition-colors"
                      >
                        <Icon className="w-4 h-4 text-gold-600 shrink-0" />
                        <span className="truncate">{service.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sticky Bottom Actions */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/95 flex flex-col gap-2.5 sticky bottom-0 z-10">
              <Button
                href={`https://wa.me/201114338503?text=${encodeURIComponent(
                  "السلام عليكم، أود الاستفسار عن خدمات رحال للسفر والسياحة."
                )}`}
                variant="whatsapp"
                className="w-full justify-center text-sm py-3 shadow-md"
                icon={<WhatsAppIcon className="w-5 h-5" />}
                onClick={closeMenu}
              >
                تواصل فوري عبر واتساب
              </Button>
              <Button
                href="/contact"
                variant="gold"
                className="w-full justify-center text-sm py-3 shadow-md"
                icon={<Phone className="w-4 h-4" />}
                onClick={closeMenu}
              >
                طلب حجز أو استشارة
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
