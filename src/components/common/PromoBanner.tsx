import React from "react";
import Link from "next/link";

interface PromoBannerProps {
  children?: React.ReactNode;
  text?: string;
  href?: string;
  className?: string;
  variant?: "gradient" | "blue" | "white";
  size?: "sm" | "md" | "lg";
}

import { Reveal } from "@/components/motion/Reveal";

export function PromoBanner({
  children,
  text,
  href,
  className = "",
  variant = "gradient",
  size = "md",
}: PromoBannerProps) {
  const pyClass =
    size === "lg" ? "py-12" : size === "sm" ? "py-3" : "py-4 sm:py-5";

  const bgClass =
    variant === "gradient"
      ? "gradientbg text-white"
      : variant === "blue"
      ? "bg-[#134063] text-white"
      : "bg-white text-gray-900";

  const content = children ? (
    children
  ) : href ? (
    <Link
      href={href}
      className="text-white hover:text-white/90 transition-opacity block font-light text-xl sm:text-2xl md:text-3xl leading-snug"
    >
      {text}
    </Link>
  ) : (
    <h2 className="font-light text-white text-xl sm:text-2xl md:text-3xl leading-snug">
      {text}
    </h2>
  );

  return (
    <div className={`w-full text-center ${pyClass} ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal yOffset={10} duration={0.4}>
          {content}
        </Reveal>
      </div>
    </div>
  );
}
