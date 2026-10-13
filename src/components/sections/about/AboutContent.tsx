import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function AboutContent() {
  return (
    <section className="py-16 sm:py-20 gradientbg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal yOffset={12} duration={0.45}>
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6">
              About <strong className="font-bold">Us</strong>
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
              LEADERSHIP & LEGACY
            </h2>
            <p className="textjustify leading-relaxed mb-8 text-white/95 text-base sm:text-lg">
              Shiva Roadlines has built its leadership on a simple but powerful
              foundation — putting customers first. By holding quality, safety,
              and efficiency as non-negotiable standards, the company has carved
              out a solid position in petroleum logistics and bunkering. Its
              reputation for reliability comes from a consistent track record of
              on-time delivery, dependable support, and an unwavering focus on
              operational excellence. <br />
              <br />
              The company’s leadership philosophy centers on continuous evolution.
              Every achievement is treated not as a finish line, but as motivation
              to diversify capabilities, refine processes, and elevate the
              overall service experience. This forward-moving mindset empowers
              Shiva Roadlines to stay aligned with industry demands while pushing
              itself to deliver better, faster, and smarter solutions. <br />
              <br />
              As Shiva Roadlines expands its presence, the commitment to
              “Delivering Quality” remains the compass guiding every decision. The
              team is driven to strengthen the business, widen its reach, and set
              new benchmarks in the petroleum and maritime sectors. With this
              vision, Shiva Roadlines stands ready to grow stronger and shape the
              next era of industry standards.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
              OUR VISION
            </h2>
            <p className="textjustify leading-relaxed mb-10 text-white/95 text-base sm:text-lg">
              To be India’s most trusted and future-ready petroleum and chemical
              logistics partner — known for safety, reliability, and on-time
              delivery across every route we operate. Our vision is to
              continuously expand our footprint, upgrade our fleet, embrace smart
              technology, and set new benchmarks in quality-driven
              transportation.
            </p>
          </div>
        </Reveal>

        {/* Mission & Image Row */}
        <Reveal yOffset={14} delay={0.05} duration={0.45}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-8 order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
                OUR MISSION
              </h2>
              <ul className="site-block-check text-white text-base sm:text-lg">
                <li>
                  To deliver petroleum and chemical products safely, efficiently,
                  and within every committed deadline.
                </li>
                <li>
                  To maintain a modern fleet supported by GPS tracking, skilled
                  professionals, and strict quality standards.
                </li>
                <li>
                  To provide client-centric, transparent, and hassle-free
                  logistics solutions across India and Nepal.
                </li>
                <li>
                  To consistently innovate, improve operational excellence, and
                  strengthen long-term partnerships with our valued clients.
                </li>
                <li>
                  To stay committed to ethical practices, cost-effectiveness, and
                  service reliability in every consignment we move.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="relative h-80 sm:h-96 w-full rounded-lg shadow-lg overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/hero-1.webp"
                  alt="Shiva Road Lines Fleet"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Company History */}
        <Reveal yOffset={14} delay={0.05} duration={0.45}>
          <div className="pt-6 border-t border-white/20">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
              Company History
            </h2>
            <p className="textjustify leading-relaxed text-white/95 text-base sm:text-lg">
              Shiva Roadlines began its operations in 2008 with a clear goal: to
              provide safe, reliable, and professional transportation solutions
              for petroleum and chemical products. What started as a modest
              logistics operation quickly transformed into a trusted name in the
              industry through consistent performance, disciplined service, and an
              unwavering focus on customer satisfaction. <br />
              <br />
              Backed by 19+ years of industry experience, the company steadily
              expanded its expertise in handling a wide range of petroleum
              products, chemicals, bulk bitumen, and specialty oils. Over the
              years, Shiva Roadlines earned the confidence of major clients across
              India and Nepal, establishing long-term relationships with leading
              names in the cement, steel, chemical, petroleum, and manufacturing
              sectors. <br />
              <br />
              As demand grew, the company strengthened its fleet to 150+ SS & MS
              tankers, supported by a dedicated team of skilled professionals and
              licensed drivers. Integration of GPS tracking, streamlined
              coordination, and round-the-clock monitoring helped the business
              elevate its efficiency and reliability. <br />
              <br />
              Strategic partnerships and contracts with IOCL, HPCL, BPCL, and
              several major industrial clients further marked its evolution into a
              dependable national-level transporter. Expansion into key
              operational hubs — including Mumbai, Navi Mumbai, Haldia,
              Visakhapatnam, and Mathura — allowed the company to serve clients
              more effectively and ensure timely delivery across diverse routes.{" "}
              <br />
              <br />
              Today, Shiva Roadlines stands as a respected petrochemical
              logistics partner, known for its commitment to quality, safety, and
              timeliness. From a single vision to a multi-location operation, the
              company’s journey reflects dedication, growth, and the continuous
              pursuit of excellence.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
