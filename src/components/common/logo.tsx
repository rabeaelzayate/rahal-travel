import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export function Logo({
  className,
  variant = "dark",
  size = "md",
}: LogoProps) {
  const isDark = variant === "dark";

  const sizeClasses = {
    sm: "h-9 w-auto",
    md: "h-11 sm:h-12 w-auto",
    lg: "h-14 sm:h-16 w-auto",
  };

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center group transition-transform duration-200 active:scale-95 shrink-0",
        className
      )}
      aria-label="شركة رحال للسفر والسياحة - الصفحة الرئيسية"
    >
      <div
        className={cn(
          "relative flex items-center justify-center p-1 rounded-xl transition-all duration-300",
          !isDark && "bg-white/10 backdrop-blur-xs rounded-xl"
        )}
      >
        <Image
          src="/logo.png"
          alt="شركة رحال للسفر والسياحة - Rahal Travel"
          width={180}
          height={60}
          priority
          className={cn(
            "object-contain transition-all duration-300",
            sizeClasses[size],
            !isDark && "brightness-110 drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
          )}
        />
      </div>
    </Link>
  );
}
