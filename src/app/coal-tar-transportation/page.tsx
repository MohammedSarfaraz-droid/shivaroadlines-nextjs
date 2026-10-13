import React from "react";
import type { Metadata } from "next";
import { TickerMarquee } from "@/components/common/TickerMarquee";
import { PromoBanner } from "@/components/common/PromoBanner";
import { CoalTarDetails } from "@/components/sections/coal-tar-transportation/CoalTarDetails";

export const metadata: Metadata = {
  title: "Coal Tar Transportation",
  description:
    "Specialized coal tar transportation services with temperature-handled MS tankers and GPS tracking by Shiva Road Lines.",
  alternates: {
    canonical: "/coal-tar-transportation",
  },
};

export default function CoalTarTransportationPage() {
  return (
    <div>
      <CoalTarDetails />
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
