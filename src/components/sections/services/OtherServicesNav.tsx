"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export interface OtherServiceItem {
  title: string;
  href: string;
  image: string;
  category: string;
  tagline: string;
}

export const ALL_SERVICES: OtherServiceItem[] = [
  {
    title: "Lube Oil Transportation",
    href: "/lube-oil-transportation",
    image: "/images/lube-oil.webp",
    category: "Petroleum & Lubricants",
    tagline: "Contamination-free SS/MS tanker delivery for industrial & automotive oils.",
  },
  {
    title: "Coal Tar Transportation",
    href: "/coal-tar-transportation",
    image: "/images/coal-tar.webp",
    category: "Industrial Byproducts",
    tagline: "Heated & insulated tanker transport for steel and waterproofing plants.",
  },
  {
    title: "Ethanol Transportation",
    href: "/ethanol-transportation",
    image: "/images/ethanol-oil.webp",
    category: "Bio-Fuels & Solvents",
    tagline: "Certified, leak-proof logistics for distilleries and oil marketing companies.",
  },
  {
    title: "Chemical Transportation",
    href: "/chemical-transportation",
    image: "/images/chemical-transport.webp",
    category: "Hazardous & Industrial",
    tagline: "PESO & Hazchem certified tankers for solvents, aromatics, and acids.",
  },
  {
    title: "Bunkering Transportation",
    href: "/bunkering-transportation",
    image: "/images/bunkering-transport.webp",
    category: "Marine Logistics",
    tagline: "Direct berth and port-side marine fuel delivery (VLSFO, HFHSD, MGO).",
  },
  {
    title: "Water Tanker Transporting",
    href: "/water-tanker-transporting",
    image: "/images/water-tanker.webp",
    category: "Bulk Liquid Supply",
    tagline: "Potable and industrial DM water supply with high-capacity sanitary tanks.",
  },
  {
    title: "SS Tanker Transportation",
    href: "/ss-tanker",
    image: "/images/ss-tanker.webp",
    category: "High-Purity Logistics",
    tagline: "Premium SS 304/316 tankers for reactive chemicals and food-grade cargo.",
  },
  {
    title: "Lengthy Tanker Transportation",
    href: "/lenghty-tanker",
    image: "/images/lengthy-tanker.webp",
    category: "Heavy Bulk Freight",
    tagline: "High-volume multi-axle trailers maximizing payload and route economics.",
  },
  {
    title: "LPG Tanker Transportation",
    href: "/lpg-tanker",
    image: "/images/lpg-tanker.webp",
    category: "Pressurized Gases",
    tagline: "PESO-licensed bullet tankers with fail-safe automatic pressure relief.",
  },
  {
    title: "Other Petroleum Services",
    href: "/other-services",
    image: "/images/all-petrolium.webp",
    category: "Diversified Fleet",
    tagline: "Comprehensive transport for Bitumen, LSHS, Naphtha, FO, LDO and more.",
  },
];

interface OtherServicesNavProps {
  currentHref: string;
}

export function OtherServicesNav({ currentHref }: OtherServicesNavProps) {
  // Filter out the current service page
  const otherServices = ALL_SERVICES.filter((s) => s.href !== currentHref);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Check scroll boundary to enable/disable arrow buttons
  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  // Smooth scroll handler
  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).clientWidth + 24
      : 320;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Optional subtle auto-scroll pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const el = scrollContainerRef.current;
      if (!el) return;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      if (scrollLeft >= scrollWidth - clientWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const cardWidth = el.firstElementChild
          ? (el.firstElementChild as HTMLElement).clientWidth + 24
          : 320;
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal yOffset={12} duration={0.45}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#b22234] block mb-2">
                Explore Our Complete Fleet
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900">
                Other <strong className="font-bold text-[#134063]">Services</strong>
              </h2>
            </div>

            {/* Actions: View all link + Carousel Navigation Arrows */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Link
                href="/services"
                className="text-sm font-bold text-[#134063] hover:text-[#b22234] transition-colors flex items-center group mr-2"
              >
                <span>View All Services</span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>

              {/* Prev Button */}
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous service"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${canScrollLeft
                    ? "bg-white border-gray-300 text-gray-800 hover:bg-[#134063] hover:text-white hover:border-[#134063] shadow-xs cursor-pointer"
                    : "bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed"
                  }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next service"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${canScrollRight
                    ? "bg-white border-gray-300 text-gray-800 hover:bg-[#134063] hover:text-white hover:border-[#134063] shadow-xs cursor-pointer"
                    : "bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed"
                  }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {otherServices.map((service) => (
              <div
                key={service.href}
                className="w-[82vw] sm:w-85 lg:w-92.5 shrink-0 snap-start flex"
              >
                <Link
                  href={service.href}
                  className="group flex flex-col w-full h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 340px, 370px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-[#134063]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#b22234] transition-colors mb-2 line-clamp-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                        {service.tagline}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#134063] group-hover:text-[#b22234] transition-colors">
                        Learn More
                      </span>
                      <span className="text-[#b22234] transition-transform duration-300 group-hover:translate-x-1 font-bold">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
