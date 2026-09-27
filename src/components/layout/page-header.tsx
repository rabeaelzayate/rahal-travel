import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Home } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  backgroundImage?: string;
  className?: string;
}

export function PageHeader({
  badge,
  title,
  description,
  breadcrumbs = [],
  backgroundImage,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative py-12 md:py-16 bg-navy-950 text-white overflow-hidden border-b border-navy-800/80",
        className
      )}
    >
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-navy-950/95 via-navy-950/85 to-navy-950/95" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        </div>
      ) : (
        <>
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e3e62_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-700/30 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />
        </>
      )}

      <Container className="relative z-10 space-y-4 text-right">
        {/* Breadcrumbs */}
        <nav aria-label="مسار التنقل" className="flex items-center gap-1.5 text-xs text-slate-400">
          <Link
            href="/"
            className="hover:text-gold-400 transition-colors flex items-center gap-1"
          >
            <Home className="w-3.5 h-3.5" />
            <span>الرئيسية</span>
          </Link>

          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <React.Fragment key={index}>
                <ChevronLeft className="w-3 h-3 text-slate-600" />
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-gold-400 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold-400 font-medium">
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {badge && (
          <div>
            <Badge variant="gold" size="sm">
              {badge}
            </Badge>
          </div>
        )}

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h1>

        {description && (
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
