import React from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { FeatureItem } from "@/components/ui/feature-item";
import {
  ShieldCheck,
  Compass,
  Headphones,
  Award,
} from "lucide-react";

const whyRahalList = [
  {
    title: "خبرة واحترافية معتمدة",
    description: "فريق متخصص في تخليص المعاملات الرسمية واستخراج التأشيرات وتنظيم البرامج بأعلى درجات الدقة.",
    icon: ShieldCheck,
  },
  {
    title: "خدمات سفر متكاملة",
    description: "نوفر لك كل ما تحتاجه في مكان واحد: طيران، فنادق، تأشيرات، وبرامج حج وعمرة وسياحة.",
    icon: Award,
  },
  {
    title: "وجهات محلية ودولية متنوعة",
    description: "خيارات واسعة من الوجهات داخل مصر وخارجها تناسب كافة الرغبات والميزانيات.",
    icon: Compass,
  },
  {
    title: "متابعة ودعم مستمر",
    description: "دعم وإرشاد مستمر لعملائنا قبل وأثناء وبعد الرحلة لضمان راحة البال وسلاسة الإجراءات.",
    icon: Headphones,
  },
];

export function WhyRahalSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container className="space-y-12">
        <SectionTitle
          badge="مميزاتنا"
          title="لماذا يختار المسافرون"
          highlight="شركة رحال؟"
          description="نلتزم بتقديم تجربة سفر استثنائية قائمة على المصداقية والسرعة والاهتمام بأدق التفاصيل."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyRahalList.map((item, idx) => (
            <FeatureItem
              key={idx}
              title={item.title}
              description={item.description}
              icon={item.icon}
              layout="card"
              iconVariant="navy"
              className="hover:border-gold-400/60"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
