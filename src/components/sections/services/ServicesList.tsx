import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ServiceItem {
  title: string;
  href: string;
  image: string;
  description?: string;
  items?: string[];
  order: "image-first" | "image-last";
}

const servicesData: ServiceItem[] = [
  {
    title: "Lube Oil Transportation",
    href: "/lube-oil-transportation",
    image: "/images/lube-oil.webp",
    description:
      "We offer safe and compliant transportation of lubricating oils and specialty industrial oils. Our modern SS/MS tankers ensure contamination-free handling and timely delivery for refineries, manufacturers, and industrial units.",
    order: "image-last",
  },
  {
    title: "Coal Tar Transportation",
    href: "/coal-tar-transportation",
    image: "/images/coal-tar.webp",
    description:
      "Shiva Roadlines handles bulk coal tar logistics for steel plants, carbon product manufacturers, and industrial users. Our fleet ensures temperature-controlled and secure movement of coal tar across long distances.",
    order: "image-first",
  },
  {
    title: "Ethanol Transportation",
    href: "/ethanol-transportation",
    image: "/images/ethanol-oil.webp",
    description:
      "We specialize in ethanol transportation using certified tankers designed for safe handling. With strict adherence to safety protocols, we ensure a compliant and smooth supply chain for distilleries, petroleum companies, and manufacturing units.",
    order: "image-last",
  },
  {
    title: "Chemical Transportation",
    href: "/chemical-transportation",
    image: "/images/chemical-transport.webp",
    description:
      "Specialized hazardous and non-hazardous bulk industrial chemical logistics across India. Utilizing certified SS 304 / SS 316 and MS tankers with advanced safety valves, leak-proof fittings, and Hazchem certified drivers.",
    order: "image-first",
  },
  {
    title: "Bunkering Transportation",
    href: "/bunkering-transportation",
    image: "/images/bunkering-transport.webp",
    description:
      "Direct jetty, dockside, and berth delivery of marine fuels including VLSFO, HFHSD, Marine Gas Oil (MGO), and marine lubricants for commercial cargo vessels and port infrastructure with round-the-clock coordination.",
    order: "image-last",
  },
  {
    title: "Water Tanker Transporting",
    href: "/water-tanker-transporting",
    image: "/images/water-tanker.webp",
    description:
      "Reliable bulk potable drinking water and high-purity industrial Demineralized (DM) water supply for manufacturing plants, refineries, construction mega-sites, and commercial institutions with high-capacity sanitary tankers.",
    order: "image-first",
  },
  {
    title: "SS Tanker Transportation",
    href: "/ss-tanker",
    image: "/images/ss-tanker.webp",
    description:
      "Premium Stainless Steel (SS 304 / SS 316) tanker logistics ensuring absolute purity, zero rust, and complete contamination-free movement for reactive chemicals, food-grade commodities, and high-value liquid products.",
    order: "image-last",
  },
  {
    title: "Lengthy Tanker Transportation",
    href: "/lenghty-tanker",
    image: "/images/lengthy-tanker.webp",
    description:
      "High-capacity multi-axle articulated and extended volumetric tanker fleet designed to carry maximum payload legally allowed under NHAI norms, significantly reducing per-ton freight expenses on national corridors.",
    order: "image-first",
  },
  {
    title: "LPG Tanker Transportation",
    href: "/lpg-tanker",
    image: "/images/lpg-tanker.webp",
    description:
      "PESO-licensed pressurized bullet tankers equipped with advanced relief valves, excess flow check systems, and emergency shut-off controls for the safe, certified bulk movement of liquefied petroleum gas.",
    order: "image-last",
  },
  {
    title: "Other Services",
    href: "/other-services",
    image: "/images/all-petrolium.webp",
    description: "Beyond petroleum and chemical logistics, we also transport:",
    items: [
      "Furnace Oil",
      "HSD",
      "LDO",
      "Tyre Oil",
      "Bitumen",
      "Chemicals (Toluene, Benzene, Naphtha, etc.)",
      "Bulk Industrial Liquids",
    ],
    order: "image-first",
  },
];

import { Reveal } from "@/components/motion/Reveal";

export function ServicesList() {
  return (
    <section className="py-16 sm:py-20 gradientbg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal yOffset={12} duration={0.45}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-12">
            Our <strong className="font-bold">Services</strong>
          </h1>
        </Reveal>

        <div className="space-y-12">
          {servicesData.map((service, index) => {
            const isImageLast = service.order === "image-last";
            return (
              <Reveal key={index} yOffset={14} duration={0.45}>
                <Link
                  href={service.href}
                  className="servicebox group grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/5 p-6 rounded-lg backdrop-blur-xs hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {isImageLast ? (
                    <>
                      <div className="relative md:col-span-4 h-64 rounded-lg overflow-hidden shadow-md order-1 md:order-2">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="md:col-span-8 order-2 md:order-1">
                        <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-[#F4B742] transition-colors">
                          {service.title}
                        </h2>
                        <p className="textjustify leading-relaxed text-white/90 text-base mb-4">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-[#F4B742] group-hover:text-white transition-colors">
                          <span>Read More</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative md:col-span-4 h-64 rounded-lg overflow-hidden shadow-md order-1">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="md:col-span-8 order-2">
                        <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-[#F4B742] transition-colors">
                          {service.title}
                        </h2>
                        <p className="textjustify leading-relaxed text-white/90 text-base mb-4">
                          {service.description}
                        </p>
                        {service.items && (
                          <ul className="site-block-check text-white mb-4">
                            {service.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )}
                        <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-[#F4B742] group-hover:text-white transition-colors">
                          <span>Read More</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                        </span>
                      </div>
                    </>
                  )}
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
