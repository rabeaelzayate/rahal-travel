import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Home, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/icons";
import { ServiceData } from "@/data/services";
import { companyData } from "@/data/company";

interface ServiceHeroProps {
  service: ServiceData;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  const Icon = service.icon;
  const whatsappUrl = `https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `السلام عليكم، أود الاستفسار وحجز خدمة: ${service.title}`
  )}`;

  return (
    <section className="relative min-h-[460px] md:min-h-[520px] flex items-center bg-navy-950 text-white overflow-hidden">
      {/* Background Image with Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-navy-950/95 via-navy-950/85 to-navy-950/95" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <Container className="relative z-10 py-12 md:py-16 text-right">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="مسار التنقل"
          className="flex items-center gap-1.5 text-xs text-slate-300 mb-6"
        >
          <Link
            href="/"
            className="hover:text-gold-400 transition-colors flex items-center gap-1"
          >
            <Home className="w-3.5 h-3.5" />
            <span>الرئيسية</span>
          </Link>
          <ChevronLeft className="w-3 h-3 text-slate-500" />
          <Link href="/services" className="hover:text-gold-400 transition-colors">
            خدماتنا
          </Link>
          <ChevronLeft className="w-3 h-3 text-slate-500" />
          <span className="text-gold-400 font-semibold">{service.title}</span>
        </nav>

        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gold-500 text-navy-950 flex items-center justify-center shadow-md shrink-0">
              <Icon className="w-6 h-6" />
            </div>
            <Badge variant="gold" size="md">
              {service.badge}
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
            {service.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              href={whatsappUrl}
              variant="whatsapp"
              size="lg"
              icon={<WhatsAppIcon className="w-5 h-5" />}
              className="shadow-xl"
            >
              استفسار مباشر عبر واتساب
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
        </div>
      </Container>
    </section>
  );
}
