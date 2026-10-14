import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function BunkeringTransportationDetails() {
  return (
    <section className="py-16 sm:py-20 gradientbg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <Reveal yOffset={12} duration={0.45}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-8">
            Bunkering <strong className="font-bold">Transportation</strong>
          </h1>

          {/* Overview */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
              Overview
            </h2>
            <p className="textjustify leading-relaxed text-white/95 text-base sm:text-lg mb-4">
              Bunkering operations require strict adherence to international maritime guidelines, precise delivery windows, and certified heavy-duty fuel tankers. Shiva Roadlines offers specialized marine bunkering transportation, delivering Very Low Sulphur Fuel Oil (VLSFO), High Flash High Speed Diesel (HFHSD), Marine Gas Oil (MGO), and marine lubricants directly to port terminals, coastal docks, and offshore support vessels. <br />
              <br />
              Our bunkering fleet is configured for fast turnaround times, ensuring that cargo vessels, container ships, offshore rigs, and coastal barges receive fuel without delays that could disrupt sailing schedules. Each tanker is equipped with calibrated pumping machinery, certified meters, and high-safety discharge hoses to prevent port water contamination. <br />
              <br />
              Operating in seamless collaboration with major port authorities, oil marketing companies (IOCL, BPCL, HPCL), and maritime shipping lines across Mumbai Port, JNPT, Kandla, Mundra, and coastal berths, we deliver uncompromised reliability round-the-clock.
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
                  Direct jetty and dockside delivery for VLSFO, Marine Gas Oil (MGO), and HFHSD.
                </li>
                <li>
                  Equipped with high-flow unloading pumps and calibrated volumetric flow meters.
                </li>
                <li>
                  Strict environmental compliance with MARPOL Annex VI regulations and zero-leakage safety protocols.
                </li>
                <li>
                  Trained crew specialized in rapid maritime bunkering discharge and vessel connection procedures.
                </li>
                <li>
                  Seamless coordination with port security, customs, surveyor teams, and terminal operators.
                </li>
                <li>
                  24/7 on-demand readiness to match vessel arrival and tight port departure windows.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="relative h-80 sm:h-96 w-full rounded-lg shadow-lg overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/bunkering-transport.webp"
                  alt="Marine Bunkering Transportation"
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
              Why Choose Shiva Roadlines for Marine Bunkering?
            </h2>
            <p className="leading-relaxed text-white/95 text-base sm:text-lg">
              Demurrage and port idle times are expensive. Shiva Roadlines understands that bunkering precision is paramount. Backed by verified fuel quality documentation, experienced port clearance personnel, and specialized tanker equipment, we ensure your marine operations remain fluid and on schedule every single day.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
