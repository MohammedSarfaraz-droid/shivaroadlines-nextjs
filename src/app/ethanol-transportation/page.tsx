import React from "react";
import type { Metadata } from "next";
import { TickerMarquee } from "@/components/common/TickerMarquee";
import { PromoBanner } from "@/components/common/PromoBanner";
import { EthanolDetails } from "@/components/sections/ethanol-transportation/EthanolDetails";

import { OtherServicesNav } from "@/components/sections/services/OtherServicesNav";

export const metadata: Metadata = {
  title: "Ethanol Transportation",
  description:
    "Secure ethanol transportation in certified SS tankers for industrial, fuel blending, and pharmaceutical sectors across India.",
  alternates: {
    canonical: "/ethanol-transportation",
  },
};

export default function EthanolTransportationPage() {
  return (
    <div>
      <EthanolDetails />
      <OtherServicesNav currentHref="/ethanol-transportation" />
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
