import React from "react";
import type { Metadata } from "next";
import { TickerMarquee } from "@/components/common/TickerMarquee";
import { PromoBanner } from "@/components/common/PromoBanner";
import { BunkeringTransportationDetails } from "@/components/sections/bunkering-transportation/BunkeringTransportationDetails";

import { OtherServicesNav } from "@/components/sections/services/OtherServicesNav";

export const metadata: Metadata = {
  title: "Marine Bunkering Transportation Services",
  description:
    "Reliable marine fuel bunkering transportation for VLSFO, MGO, and marine lubricants directly to port berths and terminals across India.",
  alternates: {
    canonical: "/bunkering-transportation",
  },
};

export default function BunkeringTransportationPage() {
  return (
    <div>
      <BunkeringTransportationDetails />
      <OtherServicesNav currentHref="/bunkering-transportation" />
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
