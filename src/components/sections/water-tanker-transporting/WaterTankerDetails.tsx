import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function WaterTankerDetails() {
  return (
    <section className="py-16 sm:py-20 gradientbg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <Reveal yOffset={12} duration={0.45}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-8">
            Water Tanker <strong className="font-bold">Transportation</strong>
          </h1>

          {/* Overview */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
              Overview
            </h2>
            <p className="textjustify leading-relaxed text-white/95 text-base sm:text-lg mb-4">
              Access to reliable, hygienic, and high-volume water supply is critical for industrial manufacturing plants, refineries, construction mega-projects, commercial establishments, and municipal support. Shiva Roadlines offers dedicated bulk water tanker transportation services, ensuring uninterrupted supply of potable drinking water as well as demineralized (DM) and industrial process water. <br />
              <br />
              Our water tanker fleet consists of food-grade coated tanks and pure Stainless Steel (SS) barrels designed to preserve water purity, prevent biological contamination, and guarantee zero residue. With tanker capacities ranging from 10,000 litres up to 35,000+ litres, we cater to daily scheduled supply contracts as well as emergency bulk water requirements. <br />
              <br />
              Each vehicle is equipped with high-pressure booster delivery pumps and sanitary hoses, allowing rapid offloading into elevated storage silos, underground reservoirs, or ground-level tanks across industrial and infrastructure clusters.
            </p>
          </div>
        </Reveal>

        {/* Image + Key Features */}
        <Reveal yOffset={14} delay={0.05} duration={0.45}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-8 order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
                Key Capabilities & Features
              </h2>
              <ul className="site-block-check text-white text-base sm:text-lg">
                <li>
                  Dedicated potable water tankers with certified food-grade interior lining and hygiene seals.
                </li>
                <li>
                  Specialized SS tankers for Demineralized (DM) water, RO water, and pharmaceutical grade water transit.
                </li>
                <li>
                  High-capacity bulk deliveries: 12,000 to 35,000+ Litres per trip for mega manufacturing operations.
                </li>
                <li>
                  Fitted with powerful onboard hydraulic/electric discharge pumps for rapid multi-story offloading.
                </li>
                <li>
                  Routine sanitization, microbiological testing compliance, and steam-cleaning procedures.
                </li>
                <li>
                  24/7 dedicated industrial supply contracts and round-the-clock emergency deployment.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="relative h-80 sm:h-96 w-full rounded-lg shadow-lg overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/water-tanker.webp"
                  alt="Bulk Water Tanker Transportation"
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
              Why Choose Shiva Roadlines for Bulk Water Supply?
            </h2>
            <p className="leading-relaxed text-white/95 text-base sm:text-lg">
              Water shortages halt production lines and disrupt facility operations. Shiva Roadlines guarantees disciplined schedules, spotless tanker sanitation, and round-the-clock fleet availability to keep your plant, refinery, or commercial facility operating at peak performance without interruption.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
