import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export function HomeGSTBanner() {
  return (
    <div className="w-full py-6 gradientbg text-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal yOffset={10} duration={0.4}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed">
            GST - 27AMAPR6367F2ZS <br />
            <br />
            श्री शिवाय नमस्तुभ्यं
          </h2>
        </Reveal>
      </div>
    </div>
  );
}
