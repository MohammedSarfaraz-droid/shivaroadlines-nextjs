import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function OtherServicesDetails() {
  return (
    <section className="py-16 sm:py-20 gradientbg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <Reveal yOffset={12} duration={0.45}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-8">
            Other <strong className="font-bold">Services</strong>
          </h1>

          {/* Overview */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
              Overview
            </h2>
            <p className="textjustify leading-relaxed text-white/95 text-base sm:text-lg mb-4">
              Shiva Roadlines offers reliable and secure transportation solutions
              for a wide range of petroleum, lubricant, and chemical products.
              With our modern fleet, dedicated professionals, and safety-first
              operations, we ensure proper loading, handling, and delivery across
              India with full compliance and efficiency. <br />
              <br />
              Our tankers are designed to carry various petroleum and chemical
              products with complete protection, ensuring zero contamination,
              leak-proof operation, and real-time GPS monitoring across all
              routes.
            </p>
          </div>
        </Reveal>

        {/* Image + Products Section */}
        <Reveal yOffset={14} delay={0.05} duration={0.45}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-8 order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
                Products We Transport
              </h2>
              <ul className="site-block-check text-white text-base sm:text-lg">
                <li>LSHS (Low Sulphur Heavy Stock)</li>
                <li>Bitumen</li>
                <li>Lube Oil</li>
                <li>Base Oil</li>
                <li>Naphtha</li>
                <li>MTO (Mineral Turpentine Oil)</li>
                <li>Solvent</li>
                <li>Haxin</li>
                <li>All Petroleum Products</li>
                <li>All Lubricant Oil & Chemical Products</li>
              </ul>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="relative h-80 sm:h-96 w-full rounded-lg shadow-lg overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/all-petrolium.webp"
                  alt="All Petroleum Products Transportation"
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
              Why Choose Us
            </h2>
            <p className="leading-relaxed text-white/95 text-base sm:text-lg">
              Whether you require bulk movement or specialized product handling,
              we provide complete transportation support tailored to your
              logistics needs. Our expertise, modern fleet, GPS-enabled
              monitoring, and trained drivers make us a trusted partner for safe,
              reliable, and compliant transportation across India.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
