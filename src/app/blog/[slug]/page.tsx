import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { travelArticles } from "@/data/articles";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  MessageCircle,
  Phone,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
} from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return travelArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = travelArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "المقال غير موجود",
    };
  }

  return {
    title: `${article.title} | رحال للسفر والسياحة`,
    description: article.metaDescription,
    keywords: [...article.targetKeywords, ...article.tags],
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | شركة رحال للسفر والسياحة`,
      description: article.metaDescription,
      url: `https://rahal-travel.com/blog/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = travelArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedServicesList = servicesData.filter((s) =>
    article.relatedServices?.includes(s.slug)
  );

  const whatsappMessage = encodeURIComponent(
    `مرحبًا شركة رحال، قرأت مقال "${article.title}" وأود الاستفسار والحجز.`
  );

  return (
    <article className="flex flex-col w-full bg-slate-50/40">
      {/* Schemas */}
      <ArticleJsonLd
        title={article.title}
        description={article.metaDescription}
        url={`https://rahal-travel.com/blog/${article.slug}`}
        publishedAt={article.publishedAt}
        updatedAt={article.updatedAt}
        author={article.author}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "الرئيسية", item: "/" },
          { name: "دليل السفر والمقالات", item: "/blog" },
          { name: article.title, item: `/blog/${article.slug}` },
        ]}
      />

      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-12 lg:py-16 relative overflow-hidden border-b border-navy-800">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #C98720 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />
        <Container className="relative z-10 max-w-4xl space-y-6 text-right">
          {/* Breadcrumb back */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              الرئيسية
            </Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-gold-400 transition-colors">
              دليل السفر والمقالات
            </Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="text-gold-400 truncate max-w-xs">{article.category}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="gold" size="sm">
              {article.category}
            </Badge>
            <span className="flex items-center gap-1.5 text-xs text-slate-300">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              وقت القراءة: {article.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-gold-400" />
              تاريخ النشر: {article.publishedAt}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {article.excerpt}
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
            <User className="w-4 h-4 text-gold-400" />
            <span>بواسطة: {article.author}</span>
          </div>
        </Container>
      </div>

      {/* Main Content Area */}
      <Container className="py-12 lg:py-16 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs">
            {/* Table of contents */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-gold-600" />
                محتويات هذا الدليل
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 pr-2">
                {article.sections.map((sec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gold-600 font-bold">{idx + 1}.</span>
                    <span>{sec.heading}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections */}
            <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
              {article.sections.map((sec, idx) => (
                <section key={idx} className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-navy-900 pb-2 border-b border-slate-100 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0" />
                    <span>{sec.heading}</span>
                  </h2>
                  <div className="space-y-3 pt-2">
                    {sec.content.map((p, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Tags */}
            <div className="pt-6 border-t border-slate-200">
              <span className="text-xs font-bold text-slate-500 block mb-2">الكلمات الدلالية والموضوعات:</span>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Conversion Box in Article */}
            <div className="p-6 rounded-2xl bg-gold-50/70 border border-gold-200 space-y-4 text-right">
              <h4 className="text-base sm:text-lg font-bold text-navy-900">
                هل ترغب في بدء إجراءات حجزك الآن؟
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                تواصل مع مستشاري شركة رحال للسفر والسياحة بالعدوة لمساعدتك في الحصول على أفضل الأسعار وتأكيد موعد سفرك.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  href={`https://wa.me/${companyData.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="gold"
                  size="md"
                  icon={<MessageCircle className="w-4 h-4" />}
                >
                  استفسر عبر واتساب
                </Button>
                <Button
                  href={`tel:${companyData.phones[0]}`}
                  variant="outline"
                  size="md"
                  icon={<Phone className="w-4 h-4" />}
                >
                  اتصل بنا
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Quick Contact Box */}
            <div className="p-6 rounded-3xl bg-navy-950 text-white space-y-4 shadow-sm border border-navy-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>مقر شركة رحال بالعدوة</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {companyData.address.ar}
              </p>
              <div className="pt-2 space-y-2 border-t border-white/10 text-xs">
                <div className="flex justify-between items-center text-slate-300">
                  <span>هاتف 1:</span>
                  <a href={`tel:${companyData.phones[0]}`} className="font-bold text-gold-400 hover:underline" dir="ltr">
                    {companyData.phones[0]}
                  </a>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>هاتف 2:</span>
                  <a href={`tel:${companyData.phones[1]}`} className="font-bold text-gold-400 hover:underline" dir="ltr">
                    {companyData.phones[1]}
                  </a>
                </div>
              </div>
              <Button
                href={`https://wa.me/${companyData.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
                size="sm"
                className="w-full justify-center mt-2"
                icon={<MessageCircle className="w-4 h-4" />}
              >
                تحدث مع مستشار السفر
              </Button>
            </div>

            {/* Related Services */}
            {relatedServicesList.length > 0 && (
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 space-y-4 shadow-xs">
                <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-gold-600" />
                  خدمات مرتبطة بالموضوع
                </h3>
                <div className="space-y-3">
                  {relatedServicesList.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block p-3 rounded-xl bg-slate-50 hover:bg-gold-50 border border-slate-200/60 hover:border-gold-300 transition-all group"
                    >
                      <span className="text-xs sm:text-sm font-bold text-navy-900 group-hover:text-gold-700 block mb-1">
                        {service.title}
                      </span>
                      <span className="text-xs text-slate-500 line-clamp-1">
                        {service.shortDescription}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Other Articles Link */}
            <div className="p-6 rounded-3xl bg-slate-100 border border-slate-200/80 text-center space-y-3">
              <h4 className="text-xs sm:text-sm font-bold text-navy-900">
                استعرض المزيد من المقالات
              </h4>
              <p className="text-xs text-slate-500">
                اطلع على كافة الأدلة والنصائح السياحية من فريق رحال.
              </p>
              <Button
                href="/blog"
                variant="outline"
                size="sm"
                className="w-full justify-center"
                icon={<ArrowLeft className="w-4 h-4" />}
              >
                دليل السفر الكامل
              </Button>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}
