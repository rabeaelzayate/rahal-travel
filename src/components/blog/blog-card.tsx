import React from "react";
import Link from "next/link";
import { ArticleItem } from "@/types";
import { Clock, Calendar, ArrowLeft, BookOpen, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  article: ArticleItem;
  featured?: boolean;
}

export function BlogCard({ article, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <article className="relative overflow-hidden rounded-3xl border border-gold-500/30 bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900 text-white p-6 sm:p-10 shadow-xl transition-all duration-300 hover:border-gold-500/60 group">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge variant="gold" size="sm">
            {article.category}
          </Badge>
          <span className="flex items-center gap-1.5 text-xs text-slate-300">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            {article.readTime}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-300">
            <Calendar className="w-3.5 h-3.5 text-gold-400" />
            {article.publishedAt}
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white group-hover:text-gold-400 transition-colors leading-tight mb-4">
          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            {article.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 text-xs border border-white/10"
              >
                <Tag className="w-3 h-3 text-gold-400" />
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors group-hover:translate-x-[-4px]"
          >
            <span>اقرأ الدليل بالكامل</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col justify-between h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs hover:shadow-lg transition-all duration-300 hover:border-gold-300 group">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <Badge variant="navy" size="sm">
            {article.category}
          </Badge>
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <Clock className="w-3.5 h-3.5 text-gold-600" />
            {article.readTime}
          </span>
        </div>

        <h3 className="text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors leading-snug mb-3">
          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
          {article.excerpt}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="flex items-center gap-1 text-xs text-slate-400">
          <BookOpen className="w-3.5 h-3.5" />
          دليل إرشادي
        </span>

        <Link
          href={`/blog/${article.slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gold-600 hover:text-gold-700 transition-colors"
        >
          <span>تفاصيل الدليل</span>
          <ArrowLeft className="w-4 h-4 group-hover:translate-x-[-3px] transition-transform" />
        </Link>
      </div>
    </article>
  );
}
