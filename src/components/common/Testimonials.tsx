"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote:
      "Shiva Roadlines has been our go-to transportation partner for years now. Their professionalism and commitment to safety are unparalleled. we ensure our products reach their destination on time.",
    author: "Laxmi",
    role: "Customer",
  },
  {
    quote:
      "Reliability and efficiency are the hallmarks of Shiva Roadlines' service. Their meticulous approach to transportation logistics ensures that our light diesel oil shipments are always delivered promptly and securely.",
    author: "Kumari",
    role: "Customer",
  },
  {
    quote:
      "Shiva Roadlines' attention to detail and professionalism have made them an indispensable partner in our business operations. From handling bulk liquid transportation to ensuring the safe delivery of petroleum products.",
    author: "Rahul doe",
    role: "Customer",
  },
  {
    quote:
      "We've entrusted Shiva Roadlines with our transportation needs for years, and we continue to impress us with their dedication to excellence. Their knowledgeable team understands the nuances of transporting furnace oil.",
    author: "Sunil",
    role: "Customer",
  },
];

export function Testimonials() {
  // Chunk testimonials into slides containing 2 items each (col-2 grid per slide)
  const slides: TestimonialItem[][] = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    slides.push(testimonials.slice(i, i + 2));
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides, setCurrentSlide]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides, setCurrentSlide]);

  // Autoplay timer
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, totalSlides]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Nav Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl sm:text-5xl font-light text-black">
              <span className="grdtext">Our </span>
              <strong className="grdtext font-bold">Testimonial</strong>
            </h2>
          </div>

          {/* Navigation Controls */}
          {totalSlides > 1 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous testimonials"
                className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 hover:text-black transition-colors shadow-xs"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonials"
                className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 hover:text-black transition-colors shadow-xs"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Carousel Viewport */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((pair, slideIdx) => (
              <div key={slideIdx} className="w-full shrink-0">
                {/* 2-Column Grid for Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-1">
                  {pair.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-white p-6 sm:p-8 rounded-lg shadow-xs hover:shadow-md transition-shadow flex items-start space-x-5 border border-gray-100 h-full"
                    >
                      <div className="hidden sm:block shrink-0">
                        <Image
                          src="/images/avatar.webp"
                          alt={item.author}
                          width={70}
                          height={70}
                          className="rounded-full w-16 h-16 object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between h-full">
                        <blockquote className="text-gray-600 text-sm sm:text-base leading-relaxed italic mb-4">
                          &ldquo;{item.quote}&rdquo;
                        </blockquote>
                        <cite className="not-italic text-sm font-semibold text-gray-800 mt-auto">
                          &mdash; {item.author},{" "}
                          <span className="text-[#2c84d2] font-semibold">
                            {item.role}
                          </span>
                        </cite>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator Dots */}
        {totalSlides > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${currentSlide === idx
                    ? "w-8 h-2.5 bg-linear-to-r from-[#0A1B33] to-[#134063]"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
