import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function HomeAbout() {
  return (
    <section className="w-full gradientbg text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-125">
        {/* Image */}
        <div className="relative h-80 lg:h-auto min-h-80 overflow-hidden order-1 lg:order-2">
          <Image
            src="/images/hero-2.webp"
            alt="Shiva Road Lines About Fleet"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        {/* Text */}
        <div className="p-8 sm:p-12 lg:p-16 order-2 lg:order-1 flex flex-col justify-center">
          <Reveal yOffset={14} duration={0.45}>
            <h2 className="text-3xl sm:text-4xl font-light mb-6 text-white">
              About <strong className="font-bold">Us</strong>
            </h2>
            <p className="mb-4 textjustify leading-relaxed text-white/95 text-sm sm:text-base">
              Shiva Roadlines is a GST-registered transport service provider
              (GSTIN: 27AMAPR6367F2ZS) operating under the legal ownership of A.
              Rai. Our commitment to compliant and transparent business operations
              further strengthens the trust our clients place in us.
            </p>
            <p className="mb-6 textjustify leading-relaxed text-white/95 text-sm sm:text-base">
              Shiva Roadlines operates as a professional goods transportation and
              logistics service provider in Maharashtra, offering reliable fleet
              support for industrial, commercial, and petroleum-related transport
              needs. With a strong focus on safety and on-time delivery, we have
              become a trusted transport partner for businesses across the region.
            </p>

            <ul className="site-block-check mb-6 text-white">
              <li>Reliable on-time deliveries</li>
              <li>Exemplary customer service standards</li>
              <li>Unrivaled commitment to safety.</li>
            </ul>

            <h4 className="text-xl font-bold mb-6 text-white">
              श्री शिवाय नमस्तुभ्यं
            </h4>

            <div>
              <Link
                href="/about"
                className="inline-block px-6 py-2.5 text-sm font-semibold rounded-none border border-white text-white hover:bg-white hover:text-[#0A1B33] transition-colors"
              >
                Read More
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
