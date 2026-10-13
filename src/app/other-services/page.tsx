import React from "react";
import type { Metadata } from "next";
import { TickerMarquee } from "@/components/common/TickerMarquee";
import { PromoBanner } from "@/components/common/PromoBanner";
import { OtherServicesDetails } from "@/components/sections/other-services/OtherServicesDetails";

export const metadata: Metadata = {
  title: "Other Services",
  description:
    "Transportation of LSHS, Bitumen, Base Oil, Naphtha, MTO, Solvent, Hexane, Furnace Oil, and all petroleum & lubricant products.",
  alternates: {
    canonical: "/other-services",
  },
};

export default function OtherServicesPage() {
  return (
    <div>
      <OtherServicesDetails />
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
