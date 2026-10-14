import React from "react";
import type { Metadata } from "next";
import { TickerMarquee } from "@/components/common/TickerMarquee";
import { PromoBanner } from "@/components/common/PromoBanner";
import { LengthyTankerDetails } from "@/components/sections/lenghty-tanker/LengthyTankerDetails";

import { OtherServicesNav } from "@/components/sections/services/OtherServicesNav";

export const metadata: Metadata = {
  title: "Lengthy High-Capacity Tanker Transportation",
  description:
    "High-capacity articulated and multi-axle lengthy tanker transportation for maximum volume bulk liquid logistics across India.",
  alternates: {
    canonical: "/lenghty-tanker",
  },
};

export default function LengthyTankerPage() {
  return (
    <div>
      <LengthyTankerDetails />
      <OtherServicesNav currentHref="/lenghty-tanker" />
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
