import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Phone,
  CheckCircle2,
  Compass,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center overflow-hidden bg-navy-950 text-white">
      {/* Real Travel Hero Background with Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banners/home-banner.png"
          alt="رحال للسفر والسياحة - وجهات السفر العالمية"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Navy Gradient Overlay for High Readability & Brand Consistency */}
        <div className="absolute inset-0 bg-linear-to-b from-navy-950/90 via-navy-950/80 to-navy-950/95" />
        {/* Decorative Gold Radial Glow */}
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <Container className="relative z-10 py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
          {/* Top Badge */}
          <div className="flex justify-center">
            <Badge
              variant="gold"
              size="md"
              className="shadow-md"
            >
              رحلتك القادمة تبدأ من هنا
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            اكتشف العالم مع{" "}
            <span className="relative inline-block text-gold-400">
              رَحّــــال
              <span className="absolute -bottom-2 left-0 right-0 h-2 bg-gold-500/30 rounded-full" />
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            بوابتك المعتمدة لبرامج الحج والعمرة، رحلات السياحة الداخلية والخارجية، تأشيرات العمل لدول الخليج وليبيا، وحجوزات الطيران والفنادق بأعلى مستويات الاحترافية.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              href="/services"
              variant="gold"
              size="lg"
              icon={<ArrowLeft className="w-5 h-5" />}
              iconPosition="left"
              className="shadow-xl hover:shadow-2xl"
            >
              اكتشف خدماتنا
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 hover:border-white shadow-md"
              icon={<Phone className="w-4 h-4 text-gold-400" />}
            >
              تواصل معنا
            </Button>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-8 border-t border-slate-700/60 max-w-2xl mx-auto text-xs sm:text-sm text-slate-300">
            <div className="flex items-center justify-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
              <span>إجراءات معتمدة وموثوقة</span>
            </div>
            <div className="flex items-center justify-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
              <span>أفضل عروض الأسعار</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 font-medium">
              <Compass className="w-4 h-4 text-gold-400 shrink-0" />
              <span>دعم مستمر 24/7</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
