import React from "react";
import { IconBox } from "@/components/ui/icon-box";
import { cn } from "@/lib/utils";

export interface StatCardProps {
  value: string;
  label: string;
  suffix?: string;
  icon?: React.ComponentType<{ className?: string }>;
  variant?: "default" | "gold" | "navy";
  className?: string;
}

export function StatCard({
  value,
  label,
  suffix,
  icon: Icon,
  variant = "default",
  className,
}: StatCardProps) {
  const variants = {
    default: "bg-white border-slate-200/80 text-navy-900",
    gold: "bg-gold-50/50 border-gold-300 text-navy-950",
    navy: "bg-navy-900 border-navy-800 text-white",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 border shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-md",
        variants[variant],
        className
      )}
    >
      <div className="flex items-center justify-between mb-3">
        {Icon && (
          <IconBox
            variant={variant === "navy" ? "gold" : "navy-subtle"}
            size="md"
          >
            <Icon className="w-5 h-5" />
          </IconBox>
        )}
      </div>

      <div className="space-y-1">
        <div className="flex items-baseline gap-1">
          <span
            className={cn(
              "text-3xl sm:text-4xl font-black tracking-tight",
              variant === "navy" ? "text-gold-400" : "text-navy-900"
            )}
          >
            {value}
          </span>
          {suffix && (
            <span
              className={cn(
                "text-xl font-bold",
                variant === "navy" ? "text-gold-300" : "text-gold-600"
              )}
            >
              {suffix}
            </span>
          )}
        </div>
        <p
          className={cn(
            "text-xs sm:text-sm font-medium",
            variant === "navy" ? "text-slate-300" : "text-slate-600"
          )}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
