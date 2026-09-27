import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { galleryItems } from "@/data/gallery";
import { ArrowLeft, Eye } from "lucide-react";

export function GalleryPreviewSection() {
  const previewItems = galleryItems.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container className="space-y-12">
        <SectionTitle
          badge="معرض الصور"
          title="لقطات حية من"
          highlight="رحلاتنا وبرامجنا"
          description="شاهد ذكريات وتجارب السفر، باقات العمرة والحج، وأجمل الوجهات السياحية التي زرناها مع عملائنا."
        />

        {/* Gallery Masonry-like Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {previewItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Dark Overlay with Title on Hover */}
              <div className="absolute inset-0 bg-linear-to-t from-navy-950/90 via-navy-950/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-right">
                <span className="inline-block text-[11px] font-bold text-gold-400 mb-1">
                  {item.categoryName}
                </span>
                <h4 className="text-sm font-bold text-white leading-snug">
                  {item.title}
                </h4>
              </div>

              {/* Center icon preview on hover */}
              <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-navy-950/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs">
                <Eye className="w-4 h-4 text-gold-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Button to Full Gallery */}
        <div className="flex justify-center pt-4">
          <Button
            href="/gallery"
            variant="outline"
            size="lg"
            icon={<ArrowLeft className="w-4 h-4" />}
            iconPosition="left"
          >
            مشاهدة المعرض بالكامل
          </Button>
        </div>
      </Container>
    </section>
  );
}
