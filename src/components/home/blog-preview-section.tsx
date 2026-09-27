import React from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { travelArticles } from "@/data/articles";
import { BlogCard } from "@/components/blog/blog-card";
import { ArrowLeft } from "lucide-react";

export function BlogPreviewSection() {
  const topArticles = travelArticles.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-slate-50/70 border-t border-slate-200/60">
      <Container className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionTitle
            badge="دليل السفر والمقالات"
            title="أحدث الإرشادات والنصائح السياحية"
            description="دليلك الشامل لمعرفة أفضل طرق السفر، حجز تذاكر الطيران، باقات العمرة، وتسهيلات التأشيرات من العدوة والمنيا."
          />
          <div className="shrink-0">
            <Button
              href="/blog"
              variant="outline"
              size="md"
              icon={<ArrowLeft className="w-4 h-4" />}
            >
              عرض جميع الأدلة (12)
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topArticles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
