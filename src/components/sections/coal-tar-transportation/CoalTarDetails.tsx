import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export function CoalTarDetails() {
  return (
    <section className="py-16 sm:py-20 gradientbg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <Reveal yOffset={12} duration={0.45}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-8">
            Coal Tar <strong className="font-bold">Transportation</strong>
          </h1>

          {/* Overview */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
              Overview
            </h2>
            <p className="textjustify leading-relaxed text-white/95 text-base sm:text-lg mb-4">
              Coal tar is a highly viscous and temperature-sensitive product that
              requires specialized handling, safety precautions, and properly
              coated tankers. Shiva Roadlines offers dependable and secure
              transportation for coal tar and its derivatives, ensuring smooth
              transit across different industrial zones in India. <br />
              <br />
              With years of operational expertise, our MS tankers are equipped to
              handle the challenges of transporting coal tar, including heat
              stability, spill prevention, and controlled loading and unloading
              procedures. Each movement is monitored using GPS tracking to ensure
              real-time visibility and timely coordination. <br />
              <br />
              Our dedicated team follows strict safety and compliance procedures,
              making us a preferred logistics partner for steel plants,
              construction material manufacturers, waterproofing units, and
              chemical industries that rely on bulk coal tar transportation.
            </p>
          </div>
        </Reveal>

        {/* Image + Key Features */}
        <Reveal yOffset={14} delay={0.05} duration={0.45}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-8 order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
                Key Features
              </h2>
              <ul className="site-block-check text-white text-base sm:text-lg">
                <li>
                  Specialized MS tankers suitable for safe coal tar transportation.
                </li>
                <li>
                  Strict temperature-handled logistics to maintain product
                  stability.
                </li>
                <li>
                  Experienced workforce trained in spill-free loading and
                  unloading.
                </li>
                <li>
                  GPS-enabled monitoring for real-time tracking and secure
                  movement.
                </li>
                <li>
                  Reliable bulk delivery to major industrial and manufacturing
                  hubs.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2">
              <div
                className="h-80 sm:h-96 w-full rounded-lg shadow-lg bg-cover bg-center border-2 border-white/20"
                style={{ backgroundImage: "url('/images/coal-tar.jpg')" }}
              />
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
              Our expertise, safety-first approach, and well-maintained fleet make
              us a trusted choice for coal tar transportation. We ensure
              operational accuracy, product safety, and timely delivery to support
              your industrial requirements seamlessly across India.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
