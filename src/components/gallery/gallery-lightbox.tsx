"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/gallery";
import { companyData } from "@/data/company";
import { WhatsAppIcon } from "@/components/common/icons";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export function GalleryLightbox({
  item,
  items,
  isOpen,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(items[currentIndex - 1]);
    } else {
      onNavigate(items[items.length - 1]);
    }
  }, [currentIndex, items, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(items[currentIndex + 1]);
    } else {
      onNavigate(items[0]);
    }
  }, [currentIndex, items, onNavigate]);

  // Keyboard navigation (ESC, Arrow Left, Arrow Right)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        // In RTL, left arrow moves to next/forward
        handleNext();
      } else if (e.key === "ArrowRight") {
        // In RTL, right arrow moves to prev/backward
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !item) return null;

  const whatsappUrl = `https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `السلام عليكم، أود الاستفسار عن تفاصيل الرحلة / الوجهة: ${item.title}`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Dark Blur Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Lightbox Modal Window */}
      <div className="relative z-10 w-full max-w-5xl bg-navy-900 rounded-3xl overflow-hidden shadow-2xl border border-navy-800 flex flex-col max-h-[92vh]">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-navy-800 bg-navy-950/60 text-white">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-gold-400 bg-gold-950/60 border border-gold-800/60 px-3 py-1 rounded-full">
              {item.categoryName}
            </span>
            <span className="text-xs text-slate-400">
              {currentIndex + 1} من {items.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-navy-800 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
            aria-label="إغلاق العارض"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image Area with Navigation Buttons */}
        <div className="relative flex-1 min-h-[320px] sm:min-h-[440px] md:min-h-[500px] w-full bg-black/40 flex items-center justify-center overflow-hidden">
          <Image
            src={item.image}
            alt={item.alt || item.title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-contain"
          />

          {/* Previous Button (Right arrow in RTL) */}
          <button
            onClick={handlePrev}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-navy-950/70 hover:bg-gold-500 hover:text-navy-950 text-white border border-white/10 flex items-center justify-center backdrop-blur-xs transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500 shadow-lg"
            aria-label="الصورة السابقة"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Next Button (Left arrow in RTL) */}
          <button
            onClick={handleNext}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-navy-950/70 hover:bg-gold-500 hover:text-navy-950 text-white border border-white/10 flex items-center justify-center backdrop-blur-xs transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500 shadow-lg"
            aria-label="الصورة التالية"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Details & Direct WhatsApp Action */}
        <div className="p-6 bg-navy-950 border-t border-navy-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-right">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-white">
              {item.title}
            </h3>
            {item.location && (
              <p className="text-xs text-slate-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{item.location}</span>
              </p>
            )}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#20ba5a] active:bg-[#1da851] transition-all shadow-md shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>استفسار عن هذا البرنامج</span>
          </a>
        </div>
      </div>
    </div>
  );
}
