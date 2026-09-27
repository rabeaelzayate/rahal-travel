import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/icons";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { IconBox } from "@/components/ui/icon-box";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { companyData } from "@/data/company";

export interface ServiceCardProps {
  title: string;
  slug: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image?: string;
  badge?: string;
  features?: string[];
  className?: string;
}

export function ServiceCard({
  title,
  slug,
  description,
  icon: Icon,
  image,
  badge,
  features,
  className,
}: ServiceCardProps) {
  const serviceHref = `/services/${slug}`;
  const whatsappUrl = `https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `مرحبًا، أود الاستفسار عن خدمة: ${title}`
  )}`;

  return (
    <Card
      className={cn(
        "group flex flex-col justify-between border-slate-200/90 hover:border-gold-400/60 bg-white transition-all duration-300 overflow-hidden shadow-xs hover:shadow-xl",
        className
      )}
    >
      {/* Optional Top Service Artwork Image */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy-950/85 via-navy-950/30 to-transparent" />

          {/* Floating Icon Box and Badge over image */}
          <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between z-10">
            <IconBox
              variant="navy"
              size="md"
              className="group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-300 shadow-md ring-2 ring-white/20"
            >
              <Icon className="w-5 h-5" />
            </IconBox>
            {badge && (
              <Badge variant="gold" size="sm" className="shadow-md">
                {badge}
              </Badge>
            )}
          </div>
        </div>
      )}

      <CardHeader className={cn("space-y-3", image ? "pt-5" : "pt-6")}>
        {!image && (
          <div className="flex items-center justify-between">
            <IconBox
              variant="navy"
              size="lg"
              className="group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-300"
            >
              <Icon className="w-6 h-6" />
            </IconBox>
            {badge && <Badge variant="gold" size="sm">{badge}</Badge>}
          </div>
        )}

        <CardTitle className="group-hover:text-gold-700 transition-colors text-lg sm:text-xl font-bold">
          <Link href={serviceHref} className="focus:outline-none">
            {title}
          </Link>
        </CardTitle>

        <CardDescription className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      {features && features.length > 0 && (
        <CardContent>
          <ul className="space-y-2 pt-2 border-t border-slate-100">
            {features.slice(0, 3).map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-xs text-slate-600 font-medium"
              >
                <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span className="truncate">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}

      <CardFooter className="pt-4 border-t border-slate-100/80 bg-slate-50/50">
        <Link
          href={serviceHref}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-gold-700 transition-colors group/link"
        >
          <span>تعرف أكثر</span>
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:-translate-x-1" />
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-700 font-bold transition-colors"
          title={`استفسار مباشر عبر واتساب عن ${title}`}
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
          <span>طلب فوري</span>
        </a>
      </CardFooter>
    </Card>
  );
}
