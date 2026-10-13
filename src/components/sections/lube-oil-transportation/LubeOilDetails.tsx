import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function LubeOilDetails() {
  return (
    <section className="py-16 sm:py-20 gradientbg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <Reveal yOffset={12} duration={0.45}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-8">
            Lube Oil <strong className="font-bold">Transportation</strong>
          </h1>

          {/* Overview */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
              Overview
            </h2>
            <p className="textjustify leading-relaxed text-white/95 text-base sm:text-lg mb-4">
              Shiva Roadlines provides reliable and safe transportation solutions
              for all grades of lube oil, ensuring efficiency, consistency, and
              complete protection of product quality throughout the journey. Lube
              oil plays a key role in industrial, automotive, and manufacturing
              operations, and its secure handling is essential for maintaining
              performance and purity. <br />
              <br />
              Our SS & MS tankers are specifically designed to prevent
              contamination and leakage during transit. Every tanker is monitored
              using GPS, and each trip is managed by trained professionals who
              follow strict loading, sealing, and unloading procedures. This
              ensures end-to-end safety, transparency, and timely delivery across
              all routes. <br />
              <br />
              Our reputation in lube oil logistics is built on punctuality,
              compliance, and seamless coordination, making us a preferred partner
              for industries requiring dependable transportation.
            </p>
          </div>
        </Reveal>

        {/* Image + Key Features */}
        <Reveal yOffset={14} delay={0.05} duration={0.45}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-8 order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
                Key Features
              </h2>
              <ul className="site-block-check text-white text-base sm:text-lg">
                <li>
                  Dedicated SS & MS tankers designed for safe lube oil transport.
                </li>
                <li>
                  Contamination-proof handling with strict loading and sealing
                  procedures.
                </li>
                <li>
                  GPS-enabled fleet for real-time tracking and complete
                  transparency.
                </li>
                <li>
                  Experienced, trained, and licensed drivers with safety-first
                  operations.
                </li>
                <li>
                  On-time delivery across industrial hubs in India and Nepal.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="relative h-80 sm:h-96 w-full rounded-lg shadow-lg overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/lube-oil.webp"
                  alt="Lube Oil Transportation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Why Choose Us */}
        <Reveal yOffset={14} delay={0.05} duration={0.45}>
          <div className="pt-6 border-t border-white/20">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
              Why Choose Us
            </h2>
            <p className="leading-relaxed text-white/95 text-base sm:text-lg">
              We provide specialized logistics support backed by a strong fleet,
              experienced personnel, and strict quality standards. Our commitment
              to safe and timely delivery has enabled us to support leading
              industries across India and Nepal.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
