import React from "react";
import Link from "next/link";

interface TickerMarqueeProps {
  text?: string;
  href?: string;
  isRed?: boolean;
  bgGradient?: boolean;
}

export function TickerMarquee({
  text = "Transportation of LSHS - Bitumen - Lube Oil - Base Oil - Naphtha - MTO - Solvent - Hexane - Furnace Oil (FO) - Light Diesel Oil (LDO)",
  href = "/services",
  isRed = false,
  bgGradient = true,
}: TickerMarqueeProps) {
  const content = (
    <span
      className={`text-lg sm:text-xl font-medium tracking-wide mx-8 inline-block ${
        isRed ? "text-[#b22234]" : "text-white"
      }`}
    >
      {text}
    </span>
  );

  return (
    <div
      className={`w-full py-3 overflow-hidden ${
        bgGradient ? "gradientbg" : "bg-white"
      }`}
    >
      <Link href={href} className="block marquee-container cursor-pointer">
        <div className="marquee-track">
          {content}
          {content}
          {content}
          {content}
        </div>
      </Link>
    </div>
  );
}
