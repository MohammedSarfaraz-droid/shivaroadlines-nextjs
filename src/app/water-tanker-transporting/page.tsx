import React from "react";
import type { Metadata } from "next";
import { TickerMarquee } from "@/components/common/TickerMarquee";
import { PromoBanner } from "@/components/common/PromoBanner";
import { WaterTankerDetails } from "@/components/sections/water-tanker-transporting/WaterTankerDetails";

import { OtherServicesNav } from "@/components/sections/services/OtherServicesNav";

export const metadata: Metadata = {
  title: "Water Tanker Transporting Services",
  description:
    "Reliable, hygienic bulk water tanker transportation for industrial facilities, plants, construction sites, and potable water supply across India.",
  alternates: {
    canonical: "/water-tanker-transporting",
  },
};

export default function WaterTankerTransportingPage() {
  return (
    <div>
      <WaterTankerDetails />
      <OtherServicesNav currentHref="/water-tanker-transporting" />
      <TickerMarquee isRed={true} bgGradient={false} />
      <PromoBanner variant="gradient" size="md">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-white">
          Commitment to Safety, Reliability & On-Time Deliveries <br />
          <br /> श्री शिवाय नमस्तुभ्यं
        </h2>
      </PromoBanner>
    </div>
  );
}
