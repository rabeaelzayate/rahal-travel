"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import {
  galleryItems,
  galleryFilterTabs,
  GalleryCategory,
  GalleryItem,
} from "@/data/gallery";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";
import { cn } from "@/lib/utils";
import { ZoomIn, MapPin } from "lucide-react";

export function GalleryView() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <Container className="space-y-10">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {galleryFilterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            const count =
              tab.id === "all"
                ? galleryItems.length
                : galleryItems.filter((item) => item.category === tab.id).length;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={cn(
                  "px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-2xs focus:outline-none focus:ring-2 focus:ring-gold-500",
                  isActive
                    ? "bg-navy-900 text-white shadow-md scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-navy-900 border border-slate-200/80"
                )}
                aria-pressed={isActive}
              >
                <span>{tab.label}</span>
                <span
                  className={cn(
                    "text-[11px] px-1.5 py-0.5 rounded-full",
                    isActive
                      ? "bg-gold-500 text-navy-950 font-black"
                      : "bg-slate-100 text-slate-500"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200/80 bg-white cursor-pointer select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              aria-label={`عرض صورة: ${item.title}`}
            >
              <Image
                src={item.image}
                alt={item.alt || item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-navy-950/95 via-navy-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6 text-right space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="inline-block text-[11px] font-bold text-gold-400 bg-navy-950/70 px-2.5 py-0.5 rounded-full border border-gold-500/20">
                    {item.categoryName}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75 shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {item.title}
                </h3>

                {item.location && (
                  <p className="text-xs text-slate-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gold-400 shrink-0" />
                    <span>{item.location}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3">
            <p className="text-base font-bold text-navy-900">
              لا توجد صور في هذا القسم حاليًا
            </p>
            <p className="text-xs text-slate-500">
              يرجى اختيار تصنيف آخر لاستعراض الصور المتاحة
            </p>
          </div>
        )}

        {/* Lightbox Modal */}
        <GalleryLightbox
          item={selectedItem}
          items={filteredItems}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          onNavigate={(newItem) => setSelectedItem(newItem)}
        />
      </Container>
    </section>
  );
}
