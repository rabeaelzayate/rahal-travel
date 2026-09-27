import React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin } from "lucide-react";

export function GalleryIntro() {
  return (
    <section className="py-12 bg-white border-b border-slate-200/80">
      <Container className="text-center max-w-3xl mx-auto space-y-4">
        <div className="flex justify-center">
          <Badge variant="gold" size="sm">
            ألبوم الذكريات والتجارب
          </Badge>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-navy-900 leading-tight">
          لحظات مميزة من رحلاتنا <span className="text-gold-600">وبرامجنا السياحية</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          استكشف لقطات حية وتجارب متنوعة من برامج الحج والعمرة، شواطئ ومعالم السياحة في مصر، أجمل الوجهات العالمية، وأفخم الإقامات الفندقية.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs sm:text-sm text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <Camera className="w-4 h-4 text-gold-600" />
            <span>توثيق حقيقي للرحلات</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-gold-600" />
            <span>وجهات متعددة حول العالم</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
