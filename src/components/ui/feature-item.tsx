import React from "react";
import { IconBox } from "@/components/ui/icon-box";
import { cn } from "@/lib/utils";

export interface FeatureItemProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  layout?: "horizontal" | "vertical" | "card";
  iconVariant?: "navy" | "gold" | "gold-subtle" | "navy-subtle" | "white";
  className?: string;
}

export function FeatureItem({
  title,
  description,
  icon: Icon,
  layout = "horizontal",
  iconVariant = "navy",
  className,
}: FeatureItemProps) {
  if (layout === "card") {
    return (
      <div
        className={cn(
          "bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 space-y-4 text-right",
          className
        )}
      >
        <IconBox variant={iconVariant} size="lg">
          <Icon className="w-6 h-6" />
        </IconBox>
        <div className="space-y-1.5">
          <h3 className="text-base font-bold text-navy-900">{title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }

  if (layout === "vertical") {
    return (
      <div className={cn("flex flex-col items-start space-y-3 text-right", className)}>
        <IconBox variant={iconVariant} size="md">
          <Icon className="w-5 h-5" />
        </IconBox>
        <div className="space-y-1">
          <h3 className="text-base font-bold text-navy-900">{title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex items-start gap-4 text-right", className)}>
      <IconBox variant={iconVariant} size="md" className="shrink-0 mt-0.5">
        <Icon className="w-5 h-5" />
      </IconBox>
      <div className="space-y-1">
        <h3 className="text-base font-bold text-navy-900">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
