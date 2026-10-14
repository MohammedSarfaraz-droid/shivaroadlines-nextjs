import React from "react";
import type { Metadata } from "next";
import { TickerMarquee } from "@/components/common/TickerMarquee";
import { PromoBanner } from "@/components/common/PromoBanner";
import { LPGTankerDetails } from "@/components/sections/lpg-tanker/LPGTankerDetails";

import { OtherServicesNav } from "@/components/sections/services/OtherServicesNav";

export const metadata: Metadata = {
  title: "LPG Tanker Transportation Services",
  description:
    "PESO certified pressurized LPG bullet tanker transportation connecting refineries, import terminals, and industrial plants across India.",
  alternates: {
    canonical: "/lpg-tanker",
  },
};

export default function LPGTankerPage() {
  return (
    <div>
      <LPGTankerDetails />
      <OtherServicesNav currentHref="/lpg-tanker" />
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
