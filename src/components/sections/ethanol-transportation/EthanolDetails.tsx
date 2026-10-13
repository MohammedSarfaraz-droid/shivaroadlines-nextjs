import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export function EthanolDetails() {
  return (
    <section className="py-16 sm:py-20 gradientbg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <Reveal yOffset={12} duration={0.45}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-8">
            Ethanol <strong className="font-bold">Transportation</strong>
          </h1>

          {/* Overview */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
              Overview
            </h2>
            <p className="textjustify leading-relaxed text-white/95 text-base sm:text-lg mb-4">
              Ethanol is a highly flammable and sensitive product that requires
              precision handling, safety compliance, and certified tankers for
              transportation. At Shiva Roadlines, we specialize in the secure
              movement of ethanol for industrial, pharmaceutical, fuel blending,
              and chemical sectors. <br />
              <br />
              Our fleet includes dedicated SS tankers designed to prevent
              contamination, maintain purity, and ensure leak-proof operations.
              Each vehicle is equipped with GPS tracking, fire-safety essentials,
              and experienced drivers trained under strict handling protocols.{" "}
              <br />
              <br />
              With our consistent reliability, safety-first approach, and seamless
              logistics coordination, we are a trusted partner for ethanol
              transportation across India.
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
                  Dedicated SS tankers suitable for ethanol and flammable liquid
                  transportation.
                </li>
                <li>
                  Strict safety compliance with fire protection and emergency
                  handling standards.
                </li>
                <li>
                  Purity-maintained logistics with contamination-free operations.
                </li>
                <li>
                  GPS-enabled real-time monitoring for safe and transparent
                  movement.
                </li>
                <li>
                  Reliable delivery to fuel depots, distilleries, chemical plants,
                  and industries.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2">
              <div
                className="h-80 sm:h-96 w-full rounded-lg shadow-lg bg-cover bg-center border-2 border-white/20"
                style={{ backgroundImage: "url('/images/ethanol-oil.jpg')" }}
              />
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
              Our experienced team, specialized SS tankers, and strict safety
              operations make us one of the most dependable logistics partners for
              ethanol transportation. We ensure safe, timely, and compliant
              delivery across all major routes in India.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
