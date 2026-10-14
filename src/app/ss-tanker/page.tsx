import React from "react";
import type { Metadata } from "next";
import { TickerMarquee } from "@/components/common/TickerMarquee";
import { PromoBanner } from "@/components/common/PromoBanner";
import { SSTankerDetails } from "@/components/sections/ss-tanker/SSTankerDetails";

import { OtherServicesNav } from "@/components/sections/services/OtherServicesNav";

export const metadata: Metadata = {
  title: "Stainless Steel (SS) Tanker Transportation",
  description:
    "Specialized SS 304 and SS 316 stainless steel tanker transportation for corrosive chemicals, specialty solvents, and high-purity liquids across India.",
  alternates: {
    canonical: "/ss-tanker",
  },
};

export default function SSTankerPage() {
  return (
    <div>
      <SSTankerDetails />
      <OtherServicesNav currentHref="/ss-tanker" />
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
