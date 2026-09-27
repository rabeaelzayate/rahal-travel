"use client";

import React, { useState, useMemo } from "react";
import { travelArticles } from "@/data/articles";
import { BlogCard } from "./blog-card";
import { Container } from "@/components/ui/container";
import { Search, Compass } from "lucide-react";

export function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("الكل");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(travelArticles.map((a) => a.category)));
    return ["الكل", ...cats];
  }, []);

  const filteredArticles = useMemo(() => {
    return travelArticles.filter((article) => {
      const matchesCat =
        selectedCategory === "الكل" || article.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = travelArticles[0];
  const otherArticles = filteredArticles.filter(
    (a) => a.id !== featuredArticle.id || selectedCategory !== "الكل" || searchQuery !== ""
  );

  return (
    <section className="py-12 lg:py-16 bg-slate-50/50">
      <Container className="space-y-10">
        {/* Controls: Search and Categories */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-navy-900 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ابحث في الأدلة والمقالات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10 pl-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all text-navy-900 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Featured Article on Default View */}
        {selectedCategory === "الكل" && searchQuery === "" && (
          <div className="mb-6">
            <BlogCard article={featuredArticle} featured={true} />
          </div>
        )}

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8">
            <Compass className="w-12 h-12 text-slate-300 mx-auto mb-3 animate-spin" style={{ animationDuration: "12s" }} />
            <h3 className="text-lg font-bold text-navy-900 mb-1">
              لم يتم العثور على مقالات تطابق بحثك
            </h3>
            <p className="text-xs text-slate-500">
              جرب البحث بكلمات أخرى أو اختر تصنيفًا مختلفًا.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedCategory === "الكل" && searchQuery === ""
              ? otherArticles
              : filteredArticles
            ).map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
