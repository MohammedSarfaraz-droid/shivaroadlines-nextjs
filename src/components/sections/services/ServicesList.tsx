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
                <div className="servicebox grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/5 p-6 rounded-lg backdrop-blur-xs hover:-translate-y-0.5 transition-transform duration-200">
                  {isImageLast ? (
                    <>
                      <div className="relative md:col-span-4 h-64 rounded-lg overflow-hidden shadow-md order-1 md:order-2">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="md:col-span-8 order-2 md:order-1">
                        <h2 className="text-2xl font-bold mb-3 text-white">
                          <Link
                            href={service.href}
                            className="hover:text-[#F4B742] transition-colors"
                          >
                            {service.title}
                          </Link>
                        </h2>
                        <p className="textjustify leading-relaxed text-white/90 text-base mb-4">
                          {service.description}
                        </p>
                        <Link
                          href={service.href}
                          className="inline-block text-sm font-bold uppercase tracking-wider text-[#F4B742] hover:text-white transition-colors"
                        >
                          Read More &rarr;
                        </Link>
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
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="md:col-span-8 order-2">
                        <h2 className="text-2xl font-bold mb-3 text-white">
                          <Link
                            href={service.href}
                            className="hover:text-[#F4B742] transition-colors"
                          >
                            {service.title}
                          </Link>
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
                        <Link
                          href={service.href}
                          className="inline-block text-sm font-bold uppercase tracking-wider text-[#F4B742] hover:text-white transition-colors"
                        >
                          Read More &rarr;
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
