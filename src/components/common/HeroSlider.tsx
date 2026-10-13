"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Slide {
  image: string;
  title: React.ReactNode;
}

const slides: Slide[] = [
  {
    image: "/images/hero-3.webp",
    title: (
      <>
        Fleet Owners & Transport Contractor for all{" "}
        <strong>Petroleum Products</strong>
      </>
    ),
  },
  {
    image: "/images/hero-4.webp",
    title: (
      <>
        Authorised Contractor for IOCL, HPCL, BPCL, of{" "}
        <strong>Bulk Petroleum Products.</strong>
      </>
    ),
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-130 sm:h-150 md:h-205 overflow-hidden bg-gray-900 group">
      {slides.map((slide, index) => {
        // Only mount background slide images after initial render to eliminate LCP render delay
        if (index !== 0 && index !== current) {
          return null;
        }

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            {/* LCP Optimized Slide Image */}
            <Image
              src={slide.image}
              alt="Shiva Petroleum Transportation"
              fill
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"
              quality={75}
              className="object-cover object-center"
            />

            {/* Dark Overlay matching original site-blocks-cover overlay */}
            <div className="absolute inset-0 bg-black/35 backdrop-brightness-75 z-10" />

            {/* Content */}
            <div className="relative z-20 h-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col justify-center items-center text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight mb-8 drop-shadow-md">
                {slide.title}
              </h1>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <Link
                  href="/services"
                  className="w-full sm:w-auto px-8 py-3.5 text-white font-semibold text-base transition-all transform hover:scale-105 shadow-lg gradientbg rounded-none border border-white/20"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 text-white font-semibold text-base transition-all transform hover:scale-105 shadow-lg gradientbg2 rounded-none border border-white/20"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      {/* Prev / Next Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Previous Slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Next Slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${idx === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
