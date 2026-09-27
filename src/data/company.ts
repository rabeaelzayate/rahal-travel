import { NavItem } from "@/types";
import {
  ShieldCheck,
  HeartHandshake,
  Clock,
  CheckCircle2,
  Award,
  Users,
  Compass,
  LucideIcon,
} from "lucide-react";

export interface CompanyValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CompanyPillar {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CompanyInfoExtended {
  name: {
    ar: string;
    en: string;
  };
  tagline: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  vision: {
    ar: string;
    en: string;
  };
  mission: {
    ar: string;
    en: string;
  };
  values: CompanyValue[];
  pillars: CompanyPillar[];
  phones: string[];
  whatsapp: string;
  email: string;
  address: {
    ar: string;
    en: string;
  };
  workingHours: {
    ar: string;
    en: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    tiktok: string;
  };
}

export const companyData: CompanyInfoExtended = {
  name: {
    ar: "شركة رحال للسفر والسياحة",
    en: "Rahal Travel & Tourism",
  },
  tagline: {
    ar: "وجهتك الموثوقة لجميع خدمات السفر والسياحة والتأشيرات",
    en: "Your trusted gateway for travel, tourism, and visa services",
  },
  description: {
    ar: "شركة رحال للسفر والسياحة — نقدم باقة متكاملة من أرقى خدمات السفر والسياحة، تشمل تنظيم برامج الحج والعمرة، الرحلات السياحية الداخلية والخارجية، تسهيل وتخليص تأشيرات العمل لدول الخليج العربي ودولة ليبيا، استخراج التأشيرات السياحية لمختلف دول العالم، وحجز تذاكر الطيران والفنادق بأعلى مستويات الجودة والمصداقية.",
    en: "Rahal Travel & Tourism provides a full suite of travel services: Hajj & Umrah programs, domestic and international trips, work visa facilitation for Gulf and Libya, tourist visas worldwide, flight ticketing, and hotel reservations with premium standards and reliability.",
  },
  vision: {
    ar: "أن نكون الخيار الأول والأكثر ثقة لجميع المسافرين والراغبين في استخراج التأشيرات وتنظيم الرحلات السياحية وبرامج الحج والعمرة، من خلال تقديم خدمات دقيقة وموثوقة تتسم بالمرونة والسرعة.",
    en: "To be the primary and most trusted choice for travelers seeking visas, leisure trips, and Hajj & Umrah programs by offering prompt, reliable, and flexible travel solutions.",
  },
  mission: {
    ar: "توفير تجربة سفر ميسرة وسلسة لعملائنا عبر فريق متخصص، وتقديم استشارات واضحة، وتسهيل كافة الإجراءات اللوجستية والحجوزات الرسمية بكل شفافية واحترافية.",
    en: "Delivering a seamless travel experience through dedicated experts, transparent advisory, and efficient handling of logistical and official travel bookings.",
  },
  values: [
    {
      title: "المصداقية والشفافية",
      description: "نلتزم بالوضوح التام في كافة تفاصيل البرامج والأسعار والمتطلبات والإجراءات الرسمية.",
      icon: ShieldCheck,
    },
    {
      title: "العناية بالعميل",
      description: "نضع راحة العميل في المقام الأول ونقدم الدعم والمتابعة المستمرة قبل وأثناء السفر.",
      icon: HeartHandshake,
    },
    {
      title: "الدقة والالتزام",
      description: "نحرص على المتابعة الدقيقة لكافة مواعيد الرحلات ومستندات التأشيرات والحجوزات.",
      icon: Clock,
    },
    {
      title: "الجودة والتميز",
      description: "نختار بعناية أفضل الفنادق ومسارات الطيران والبرامج التي تحقق أعلى درجات الرضا.",
      icon: CheckCircle2,
    },
  ],
  pillars: [
    {
      title: "خبرة متخصصة ومعاملات معتمدة",
      description: "فريق ذو خبرة واسعة في متطلبات السفارات وتأشيرات العمل والبرامج السياحية.",
      icon: Award,
    },
    {
      title: "خدمات سفر شاملة في مكان واحد",
      description: "من التذكرة والفندق إلى التأشيرة والبرنامج الكامل دون الحاجة لتعدد الجهات.",
      icon: Compass,
    },
    {
      title: "خيارات متنوعة تناسب الجميع",
      description: "باقات مرنة تناسب الأفراد، العائلات، راغبي العمل، والمجموعات السياحية والدينية.",
      icon: Users,
    },
  ],
  phones: ["01114338503", "01114729370"],
  whatsapp: "201114338503",
  email: "info@rahal-travel.com",
  address: {
    ar: "مركز العدوه — شارع المركز، شرق الكوبري القديم، بجوار عيادة الدكتور عهدي حبيب، فوق محل المستر للملابس",
    en: "Markaz El Adwa, El Markaz St., East of Old Bridge, Beside Dr. Ahdy Habib Clinic, Above El-Mister Clothing Store, Minya, Egypt",
  },
  workingHours: {
    ar: "السبت - الخميس: 9:00 ص - 10:00 م | الجمعة: 1:00 م - 9:00 م",
    en: "Sat - Thu: 9:00 AM - 10:00 PM | Fri: 1:00 PM - 9:00 PM",
  },
  socialLinks: {
    facebook: "https://www.facebook.com/share/1CAoMyQp2T/",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
  },
};

export const mainNavItems: NavItem[] = [
  { title: "الرئيسية", href: "/" },
  { title: "من نحن", href: "/about" },
  { title: "خدماتنا", href: "/services" },
  { title: "المعرض", href: "/gallery" },
  { title: "تواصل معنا", href: "/contact" },
];
