import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function LPGTankerDetails() {
  return (
    <section className="py-16 sm:py-20 gradientbg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <Reveal yOffset={12} duration={0.45}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-8">
            LPG Tanker <strong className="font-bold">Transportation</strong>
          </h1>

          {/* Overview */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
              Overview
            </h2>
            <p className="textjustify leading-relaxed text-white/95 text-base sm:text-lg mb-4">
              Liquefied Petroleum Gas (LPG) and compressed hydrocarbon gases demand the highest tiers of engineering precision, pressure containment, and fail-safe safety protocols. Shiva Roadlines offers dedicated LPG bullet tanker transportation, safely connecting refinery production centers, coastal import terminals, and industrial bottling plants across India. <br />
              <br />
              Our LPG pressurized bullet tankers are fully PESO (Petroleum and Explosives Safety Organisation) licensed, fabricated from high-tensile pressure vessel steel, and subjected to mandatory periodic radiographic, ultrasonic, and hydro-testing inspections. <br />
              <br />
              Fitted with redundant internal excess-flow check valves, double-seated safety relief valves, pneumatic emergency shutdown systems (ESD), and anti-spark exhaust flame arrestors, our LPG transport units operate under the strictest safety envelopes in the transport industry.
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
                  Certified high-tensile steel pressurized bullet tankers fully licensed by PESO.
                </li>
                <li>
                  Dual safety relief valves, pneumatic emergency shut-off controls, and excess flow safety devices.
                </li>
                <li>
                  Exhaust spark arrestors, master battery cut-off switches, and full Hazchem fire protection.
                </li>
                <li>
                  Strict regulatory compliance with the Gas Cylinders Rules and Static & Mobile Pressure Vessels (SMPV) norms.
                </li>
                <li>
                  Highly experienced, DG-certified drivers trained in emergency gas evacuation and defensive driving.
                </li>
                <li>
                  24/7 dedicated control-room GPS telematics with pressure/temperature monitoring and geo-fencing.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="relative h-80 sm:h-96 w-full rounded-lg shadow-lg overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/lpg-tanker.webp"
                  alt="Pressurized LPG Bullet Tanker"
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
              Why Choose Shiva Roadlines for LPG Logistics?
            </h2>
            <p className="leading-relaxed text-white/95 text-base sm:text-lg">
              In pressurized gas logistics, there is zero margin for error. Shiva Roadlines merges decades of technical experience, continuous driver safety drills, and modern PESO-certified equipment to ensure safe, dependable, and timely delivery of LPG bulk cargo across every sector.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
