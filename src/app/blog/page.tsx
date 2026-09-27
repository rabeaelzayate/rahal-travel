import { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { BlogGrid } from "@/components/blog/blog-grid";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Compass } from "lucide-react";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "دليل السفر والمقالات السياحية | نصائح ومعلومات الحجز بالعدوة والمنيا",
  description:
    "استكشف دليل السفر والمقالات السياحية من شركة رحال: نصائح حجز تذاكر الطيران، برامج العمرة، تأشيرات العمل للخليج، حجز الفنادق، وأفضل طرق السفر من العدوة ومحافظة المنيا.",
  keywords: [
    "مكتب سفريات في العدوة",
    "شركة سياحة في العدوة",
    "سفريات المنيا",
    "دليل السفر من العدوة",
    "حجز طيران العدوة",
    "حجز عمرة المنيا",
    "تأشيرات عمل الخليج",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "دليل السفر والمقالات السياحية | شركة رحال للسفر والسياحة",
    description:
      "إرشادات ومعلومات موثوقة حول السفر، الطيران، التأشيرات، ورحلات العمرة من مركز العدوة ومحافظة المنيا.",
    url: "https://rahal-travel.com/blog",
  },
};

export default function BlogListingPage() {
  return (
    <div className="flex flex-col w-full">
      <BreadcrumbJsonLd
        items={[
          { name: "الرئيسية", item: "/" },
          { name: "دليل السفر والمقالات", item: "/blog" },
        ]}
      />

      {/* 1. Page Header */}
      <PageHeader
        badge="المحتوى والمعرفة السياحية"
        title="دليل السفر والمقالات"
        description="إرشادات موثوقة، نصائح حجز الطيران والتأشيرات، ومعلومات السفر من العدوة والمنيا"
        backgroundImage="/images/banners/about-banner.png"
        breadcrumbs={[{ label: "دليل السفر والمقالات" }]}
      />

      {/* 2. Blog Grid with Filters */}
      <BlogGrid />

      {/* 3. Call to Action Banner */}
      <section className="py-14 bg-navy-950 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #C98720 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />
        <Container className="relative z-10 text-center max-w-3xl space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center mx-auto">
            <Compass className="w-7 h-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            هل تحتاج إلى استشارة مخصصة لرحلتك القادمة؟
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            فريق مستشاري السفر في شركة رحال بالعدوة مستعد للإجابة عن كافة استفساراتك، وتأكيد حجوزات الطيران والفنادق والتأشيرات بأعلى دقة.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              href={`https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent("مرحبًا شركة رحال، أود الاستفسار عن استشارة سياحية وحجز رحلة.")}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
              size="lg"
              icon={<MessageCircle className="w-5 h-5" />}
            >
              تواصل عبر واتساب
            </Button>
            <Button
              href={`tel:${companyData.phones[0]}`}
              variant="outline"
              size="lg"
              className="text-white border-white/20 hover:bg-white/10"
              icon={<Phone className="w-5 h-5" />}
            >
              اتصال مباشر
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
