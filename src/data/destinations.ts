export interface DestinationItem {
  id: string;
  name: string;
  country: string;
  tagline: string;
  image: string;
  tags: string[];
  popularFor: string;
}

export const destinationsData: DestinationItem[] = [
  {
    id: "egypt",
    name: "مصر (السياحة الداخلية)",
    country: "مصر",
    tagline: "سحر النيل وشواطئ البحر الأحمر ومعالم الحضارة",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=800&auto=format&fit=crop",
    tags: ["شرم الشيخ", "الغردقة", "الأقصر وأسوان"],
    popularFor: "رحلات الشواطئ والمزارات التاريخية",
  },
  {
    id: "saudi",
    name: "المملكة العربية السعودية",
    country: "السعودية",
    tagline: "برامج الحج والعمرة والزيارات وتأشيرات العمل",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop",
    tags: ["مكة المكرمة", "المدينة المنورة", "الرياض"],
    popularFor: "مناسك الحج والعمرة وفرص العمل",
  },
  {
    id: "uae",
    name: "دولة الإمارات العربية المتحدة",
    country: "الإمارات",
    tagline: "حداثة المعالم الترفيهية وتأشيرات العمل والزيارة",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    tags: ["دبي", "أبوظبي", "الشارقة"],
    popularFor: "السياحة العائلية وعقود العمل",
  },
  {
    id: "turkey",
    name: "الجمهورية التركية",
    country: "تركيا",
    tagline: "طبيعة ساحرة وأسواق عريقة وأجواء سياحية لا تُنسى",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800&auto=format&fit=crop",
    tags: ["إسطنبول", "طرابزون", "أنطاليا"],
    popularFor: "العطلات السياحية وشهر العسل",
  },
];
