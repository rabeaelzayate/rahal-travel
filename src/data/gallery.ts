export type GalleryCategory =
  | "all"
  | "hajj-umrah"
  | "domestic"
  | "international"
  | "hotels";

export interface GalleryItem {
  id: string;
  title: string;
  category: "hajj-umrah" | "domestic" | "international" | "hotels";
  categoryName: string;
  image: string;
  alt: string;
  location?: string;
}

export interface GalleryFilterTab {
  id: GalleryCategory;
  label: string;
}

export const galleryFilterTabs: GalleryFilterTab[] = [
  { id: "all", label: "الكل" },
  { id: "hajj-umrah", label: "حج وعمرة" },
  { id: "domestic", label: "رحلات داخلية" },
  { id: "international", label: "رحلات خارجية" },
  { id: "hotels", label: "فنادق ومنتجعات" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    title: "حج وعمرة — لقطات حية من المشاعر المقدسة",
    category: "hajj-umrah",
    categoryName: "حج وعمرة",
    image: "/images/gallery/hajj-umrah-live.png",
    alt: "برامج الحج والعمرة مع شركة رحال للسفر والسياحة",
    location: "مكة المكرمة والمدينة المنورة",
  },
  {
    id: "g-2",
    title: "رحلات داخلية — أجمل الوجهات السياحية في مصر",
    category: "domestic",
    categoryName: "رحلات داخلية",
    image: "/images/gallery/domestic-trips-live.png",
    alt: "رحلات سياحية داخلية مع شركة رحال",
    location: "شرم الشيخ، الغردقة، دهب والأقصر",
  },
  {
    id: "g-3",
    title: "باقات وبرامج شهر العسل الفاخرة",
    category: "international",
    categoryName: "رحلات خارجية",
    image: "/images/gallery/honeymoon-live.png",
    alt: "برامج رحلات شهر العسل مع شركة رحال",
    location: "أرقى الوجهات والمنتجعات الرومانسية",
  },
  {
    id: "g-4",
    title: "تنظيم الرحلات الجماعية والفعاليات",
    category: "domestic",
    categoryName: "رحلات داخلية",
    image: "/images/gallery/group-trips-live.png",
    alt: "تنظيم رحلات جماعية وعائلية متكاملة",
    location: "رحلات جماعية للمؤسسات والعائلات",
  },
  {
    id: "g-5",
    title: "حجوزات الفنادق والمنتجعات داخل وخارج مصر",
    category: "hotels",
    categoryName: "فنادق ومنتجعات",
    image: "/images/gallery/hotels-resorts-live.png",
    alt: "حجوزات فندقية بأفضل الأسعار وأرقى المستويات",
    location: "فنادق ومنتجعات عالمية 5 نجوم",
  },
  {
    id: "g-6",
    title: "رحلات الشركات ورجال الأعمال",
    category: "international",
    categoryName: "رحلات خارجية",
    image: "/images/gallery/corporate-travel-live.png",
    alt: "خدمات سفر الشركات ورجال الأعمال مع شركة رحال",
    location: "المؤتمرات والمعارض الدولية",
  },
  {
    id: "g-7",
    title: "حجز تذاكر الطيران لجميع دول العالم",
    category: "international",
    categoryName: "رحلات خارجية",
    image: "/images/services/flights.png",
    alt: "حجز تذاكر الطيران الدولي والداخلي مع رحال",
    location: "جميع مطارات وخطوط الطيران العالمية",
  },
  {
    id: "g-8",
    title: "التأشيرات والزيارات السياحية الدولية",
    category: "international",
    categoryName: "رحلات خارجية",
    image: "/images/services/tourist-visits.png",
    alt: "تأشيرات سياحية وتسهيل زيارات لمختلف الدول",
    location: "تأشيرات الشنغن ودول العالم",
  },
  {
    id: "g-9",
    title: "خدمات الاستقبال والنقل من وإلى المطار",
    category: "domestic",
    categoryName: "رحلات داخلية",
    image: "/images/services/airport-transfers.png",
    alt: "خدمات الاستقبال والانتقالات المريحة من المطار",
    location: "خدمات النقل والليموزين بالمطارات",
  },
];
