import React from "react";
import Image from "next/image";

interface ClientLogo {
  id: number;
  image: string;
  alt: string;
}

const clients: ClientLogo[] = [
  { id: 1, image: "/images/client-1.webp", alt: "Client 1" },
  { id: 2, image: "/images/client-2.webp", alt: "Client 2" },
  { id: 3, image: "/images/client-3.webp", alt: "Client 3" },
  { id: 4, image: "/images/client-4.webp", alt: "Client 4" },
  { id: 5, image: "/images/client-5.webp", alt: "Client 5" },
  { id: 6, image: "/images/client-6.webp", alt: "Client 6" },
  { id: 7, image: "/images/client-7.webp", alt: "Client 7" },
  { id: 8, image: "/images/client-8.webp", alt: "Client 8" },
  { id: 9, image: "/images/client-9.webp", alt: "Client 9" },
  { id: 10, image: "/images/client-10.webp", alt: "Client 10" },
  { id: 11, image: "/images/client-11.webp", alt: "Client 11" },
  { id: 12, image: "/images/client-12.webp", alt: "Client 12" },
];

import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";

export function ClientsGrid() {
  return (
    <section className="py-16 sm:py-20 gradientbg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal yOffset={12} duration={0.45}>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6">
              Our <strong className="font-bold">Clients</strong>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white max-w-4xl mx-auto leading-snug">
              Authorised Contractor for IOCL, HPCL, BPCL, of Bulk Petroleum
              Products.
            </h2>
          </div>
        </Reveal>

        {/* Grid of 12 Clients */}
        <StaggerGroup
          staggerDelay={0.04}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {clients.map((client) => (
            <StaggerItem key={client.id} yOffset={10}>
              <div className="client-box hover:shadow-lg transition-transform transform hover:-translate-y-1">
                <Image
                  src={client.image}
                  alt={client.alt}
                  width={160}
                  height={90}
                  style={{ width: "auto", height: "auto" }}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
