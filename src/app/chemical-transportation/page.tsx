import React from "react";
import type { Metadata } from "next";
import { TickerMarquee } from "@/components/common/TickerMarquee";
import { PromoBanner } from "@/components/common/PromoBanner";
import { ChemicalTransportationDetails } from "@/components/sections/chemical-transportation/ChemicalTransportationDetails";

import { OtherServicesNav } from "@/components/sections/services/OtherServicesNav";

export const metadata: Metadata = {
  title: "Chemical Transportation Services",
  description:
    "Safe, compliant, and contamination-free industrial chemical transportation across India using certified SS & MS tankers with GPS tracking.",
  alternates: {
    canonical: "/chemical-transportation",
  },
};

export default function ChemicalTransportationPage() {
  return (
    <div>
      <ChemicalTransportationDetails />
      <OtherServicesNav currentHref="/chemical-transportation" />
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
