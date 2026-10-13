import React from "react";
import { HeroSlider } from "@/components/common/HeroSlider";
import { PromoBanner } from "@/components/common/PromoBanner";
import { TickerMarquee } from "@/components/common/TickerMarquee";
import { Testimonials } from "@/components/common/Testimonials";
import { HomeServices } from "@/components/sections/home/HomeServices";
import { HomeAbout } from "@/components/sections/home/HomeAbout";
import { HomeGSTBanner } from "@/components/sections/home/HomeGSTBanner";
import { HomeContact } from "@/components/sections/home/HomeContact";
import { HomeContactBar } from "@/components/sections/home/HomeContactBar";

export default function HomePage() {
  return (
    <div>
      <HeroSlider />
      <PromoBanner
        text="Authorised Contractor for IOCL, HPCL, BPCL, of Bulk Petroleum Products."
        href="/clients"
        variant="gradient"
      />
      <HomeServices />
      <TickerMarquee />
      <HomeAbout />
      <Testimonials />
      <HomeGSTBanner />
      <HomeContact />
      <HomeContactBar />
    </div>
  );
}
