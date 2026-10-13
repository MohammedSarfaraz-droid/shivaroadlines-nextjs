import React from "react";
import type { Metadata } from "next";
import { PromoBanner } from "@/components/common/PromoBanner";
import { AboutContent } from "@/components/sections/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Shiva Road Lines - GSTIN 27AMAPR6367F2ZS - Transport & Logistics Services by Proprietor A. Rai. Leadership, Vision, Mission, and Company History.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      <AboutContent />
      <PromoBanner variant="gradient" size="md">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-white">
          Commitment to Safety, Reliability & On-Time Deliveries <br />
          <br /> श्री शिवाय नमस्तुभ्यं
        </h2>
      </PromoBanner>
    </div>
  );
}
