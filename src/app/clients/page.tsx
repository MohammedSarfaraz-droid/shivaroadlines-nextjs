import React from "react";
import type { Metadata } from "next";
import { PromoBanner } from "@/components/common/PromoBanner";
import { ClientsGrid } from "@/components/sections/clients/ClientsGrid";

export const metadata: Metadata = {
  title: "Our Clients",
  description:
    "Authorised Contractor for IOCL, HPCL, BPCL, of Bulk Petroleum Products. Leading client portfolio across India and Nepal.",
  alternates: {
    canonical: "/clients",
  },
};

export default function ClientsPage() {
  return (
    <div>
      <ClientsGrid />
      <PromoBanner
        text="Commitment to Safety, Reliability & On-Time Deliveries"
        variant="gradient"
        size="lg"
      />
    </div>
  );
}
