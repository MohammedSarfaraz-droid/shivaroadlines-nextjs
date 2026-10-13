import React from "react";
import type { Metadata } from "next";
import { TickerMarquee } from "@/components/common/TickerMarquee";
import { PromoBanner } from "@/components/common/PromoBanner";
import { LubeOilDetails } from "@/components/sections/lube-oil-transportation/LubeOilDetails";

export const metadata: Metadata = {
  title: "Lube Oil Transportation",
  description:
    "Safe and efficient transportation of lubricating oils with contamination-proof SS & MS tankers across India and Nepal.",
  alternates: {
    canonical: "/lube-oil-transportation",
  },
};

export default function LubeOilTransportationPage() {
  return (
    <div>
      <LubeOilDetails />
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
