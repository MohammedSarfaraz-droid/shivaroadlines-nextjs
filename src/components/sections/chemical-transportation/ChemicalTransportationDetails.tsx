import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function ChemicalTransportationDetails() {
  return (
    <section className="py-16 sm:py-20 gradientbg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <Reveal yOffset={12} duration={0.45}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-8">
            Chemical <strong className="font-bold">Transportation</strong>
          </h1>

          {/* Overview */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
              Overview
            </h2>
            <p className="textjustify leading-relaxed text-white/95 text-base sm:text-lg mb-4">
              Shiva Roadlines provides specialized hazardous and non-hazardous industrial chemical transportation solutions across India. Transporting chemicals demands stringent adherence to safety protocols, specialized corrosion-resistant tanker metallurgy, and rigorous contamination-free handling standards. <br />
              <br />
              Our fleet includes high-grade Stainless Steel (SS 304, SS 316) and Mild Steel (MS) insulated tankers tailored to carry aromatic hydrocarbons, organic solvents, industrial acids, alkalis, and specialty chemical compounds. Every vehicle is driven by hazardous-materials certified drivers with mandatory safety equipment (TREM cards, fire suppression systems, and emergency spill kits). <br />
              <br />
              With round-the-clock GPS tracking, transit geofencing, and central logistics surveillance, we ensure your bulk chemical cargo reaches refineries, chemical complexes, and industrial consumers safely, securely, and fully compliant with PESO and CPCB norms.
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
                  High-grade SS 304 / SS 316 and specially coated chemical tankers to eliminate corrosion and product contamination.
                </li>
                <li>
                  Certified handling for hazardous chemicals (Benzene, Toluene, Xylene, Methanol, Naphtha, Solvents).
                </li>
                <li>
                  Full statutory PESO, Hazchem, and RTO compliance with mandatory TREM cards and PPE-equipped personnel.
                </li>
                <li>
                  Leak-proof specialized vapor recovery fittings, safety relief valves, and emergency shut-off mechanisms.
                </li>
                <li>
                  Real-time GPS tracking with 24/7 temperature and speed telematics across national highways.
                </li>
                <li>
                  Comprehensive pan-India delivery network serving prime chemical corridors and petrochemical clusters.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="relative h-80 sm:h-96 w-full rounded-lg shadow-lg overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/chemical-transport.webp"
                  alt="Chemical Transportation Tanker"
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
              Why Choose Shiva Roadlines for Chemical Logistics?
            </h2>
            <p className="leading-relaxed text-white/95 text-base sm:text-lg">
              With decades of heritage in bulk industrial liquid handling, Shiva Roadlines guarantees uncompromised safety, verified purity, and disciplined delivery schedules. Whether moving critical solvents between chemical refineries or delivering high-volume feedstocks to manufacturing units, our proactive management and certified fleet deliver peace of mind on every mile.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
