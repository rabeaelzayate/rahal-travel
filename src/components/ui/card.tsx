import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outline" | "gold-border" | "navy";
  hoverEffect?: boolean;
}

export function Card({
  className,
  variant = "default",
  hoverEffect = true,
  children,
  ...props
}: CardProps) {
  const baseStyles =
    "rounded-2xl transition-all duration-300 relative overflow-hidden";

  const variants = {
    default: "bg-white border border-slate-200/80 shadow-xs",
    elevated: "bg-white border border-slate-100 shadow-md",
    outline: "bg-transparent border border-slate-300 shadow-none",
    "gold-border":
      "bg-white border border-gold-400/40 shadow-xs hover:border-gold-500",
    navy: "bg-navy-900 text-white border border-navy-800 shadow-md",
  };

  const hoverStyles = hoverEffect
    ? "hover:-translate-y-1 hover:shadow-lg"
    : "";

  return (
    <div
      className={cn(baseStyles, variants[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("p-6 pb-3 flex flex-col space-y-1.5", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-lg font-bold text-navy-900 tracking-tight leading-snug",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-slate-600 leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pt-0 flex-1", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "p-6 pt-0 mt-auto border-t border-slate-100 flex items-center justify-between",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
