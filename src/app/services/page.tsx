import React from "react";
import type { Metadata } from "next";
import { TickerMarquee } from "@/components/common/TickerMarquee";
import { PromoBanner } from "@/components/common/PromoBanner";
import { ServicesList } from "@/components/sections/services/ServicesList";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive transportation services for Lube Oil, Coal Tar, Ethanol, Furnace Oil, Bitumen, and industrial chemicals across India.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div>
      <ServicesList />
      <TickerMarquee isRed={true} bgGradient={false} />
      <PromoBanner
        text="Commitment to Safety, Reliability & On-Time Deliveries"
        variant="gradient"
        size="lg"
      />
    </div>
  );
}
