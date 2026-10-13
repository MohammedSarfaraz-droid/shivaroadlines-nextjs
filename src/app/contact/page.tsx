import React from "react";
import type { Metadata } from "next";
import { PromoBanner } from "@/components/common/PromoBanner";
import { ContactContent } from "@/components/sections/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Shiva Road Lines. Head Office in Navi Mumbai, operational hubs in Mumbai, Kolkata, Vizag, Mathura, and international office in Nepal.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      <ContactContent />
      <PromoBanner
        text="Commitment to Safety, Reliability & On-Time Deliveries"
        variant="gradient"
        size="lg"
      />
    </div>
  );
}
