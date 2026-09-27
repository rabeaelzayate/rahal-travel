import React from "react";
import { Badge } from "@/components/ui/badge";
import { Divider } from "@/components/ui/divider";
import { cn } from "@/lib/utils";

export interface SectionTitleProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "right";
  showAccent?: boolean;
  inverted?: boolean;
  className?: string;
}

export function SectionTitle({
  badge,
  title,
  highlight,
  description,
  align = "center",
  showAccent = true,
  inverted = false,
  className,
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "space-y-3",
        isCenter ? "text-center mx-auto max-w-3xl" : "text-right max-w-2xl",
        className
      )}
    >
      {badge && (
        <div className={cn("flex", isCenter ? "justify-center" : "justify-start")}>
          <Badge variant={inverted ? "gold" : "gold"}>{badge}</Badge>
        </div>
      )}

      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight",
          inverted ? "text-white" : "text-navy-900"
        )}
      >
        {title}{" "}
        {highlight && (
          <span className="relative inline-block text-gold-600">
            {highlight}
            <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gold-400/40 rounded-full" />
          </span>
        )}
      </h2>

      {showAccent && (
        <Divider
          variant="gold-accent"
          className={cn("my-2", !isCenter && "mx-0 max-w-[140px]")}
        />
      )}

      {description && (
        <p
          className={cn(
            "text-sm sm:text-base leading-relaxed",
            inverted ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
