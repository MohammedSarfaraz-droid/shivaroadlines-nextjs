import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ServiceCard {
  title: string;
  description: string;
  image: string;
  href: string;
}

const services: ServiceCard[] = [
  {
    title: "of Lube Oil",
    description:
      "Shiva Road Lines reliably transports lube oil, ensuring timely delivery and secure handling. Trust Shiva Road Lines for safe and efficient transportation of lube oil to your destination.",
    image: "/images/lube-oil.webp",
    href: "/lube-oil-transportation",
  },
  {
    title: "of Coal Tar",
    description:
      "With a commitment to reliability and professionalism, our experienced team ensures timely delivery of coal tar shipments, adhering to stringent safety standards throughout the transportation process.",
    image: "/images/coal-tar.webp",
    href: "/coal-tar-transportation",
  },
  {
    title: "of Ethanol Oil",
    description:
      "Shiva Road Lines safely delivers Ethanol, ensuring it reaches its destination without any fuss.Our reliable service keeps supply chains moving smoothly, making them a trusted choice for transporting Ethanol.",
    image: "/images/ethanol-oil.webp",
    href: "/ethanol-transportation",
  },
  {
    title: "All Petroleum Products",
    description:
      "Above all, Shiva Road Lines offers comprehensive transportation services for LSHS, Bitumen, Lube Oil, Base Oil, Naphtha, MTO, Solvent, Hexane, Furnace Oil (FO), Light Diesel Oil (LDO) and various other petroleum derivatives.",
    image: "/images/all-petrolium.webp",
    href: "/other-services",
  },
];

import { Reveal } from "@/components/motion/Reveal";

export function HomeServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal yOffset={12} duration={0.45}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-4">
              <span className="grdtext">Transportation </span>
              <strong className="grdtext font-bold">Services</strong>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We provide safe and reliable transportation services for all
              petroleum products, including{" "}
              <span className="redcol font-semibold">
                LSHS, Bitumen, Lube Oil, Base Oil, Naphtha, MTO, Solvent, Hexane,
                Furnace Oil (FO), Light Diesel Oil (LDO)
              </span>
              , and various other petroleum derivatives.
            </p>
          </div>
        </Reveal>

        {/* Grid of 4 half-card services:
            Row 1: image - text - image - text
            Row 2: text - image - text - image */}
        <Reveal yOffset={16} delay={0.1} duration={0.5}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-100 shadow-sm overflow-hidden rounded-md">
            {services.map((service, index) => {
              const isFirstRow = index < 2;
              return (
                <div
                  key={index}
                  className="half-card grid grid-cols-1 md:grid-cols-2 min-h-70"
                >
                  <div
                    className={`relative h-64 md:h-full min-h-65 overflow-hidden ${isFirstRow ? "order-1" : "order-1 md:order-2"
                      }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 25vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div
                    className={`text-content bg-gray-50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${isFirstRow ? "order-2" : "order-2 md:order-1"
                      }`}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                    <Link
                      href={service.href}
                      className="inline-block mt-auto"
                      aria-label={`Read more about transportation ${service.title}`}
                    >
                      <small className="uppercase font-bold tracking-wider text-black text-xs">
                        Read More
                      </small>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* View All Services CTA Button */}
        <Reveal yOffset={14} delay={0.15} duration={0.45}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#134063] hover:bg-[#b22234] text-white font-bold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <span>View All Services</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">
                &rarr;
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
