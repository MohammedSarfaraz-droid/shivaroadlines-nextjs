import React from "react";
import { PhoneIcon, EnvelopeIcon, WhatsAppIcon } from "@/components/icons/Icons";
import { Reveal } from "@/components/motion/Reveal";

export function HomeContactBar() {
  return (
    <div className="w-full py-4 gradientbg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal yOffset={10} duration={0.4}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-base sm:text-lg font-medium">
          {/* Phone */}
          <div className="flex items-center">
            <PhoneIcon className="w-5 h-5 mr-2" />
            <a
              href="tel:+919029999979"
              className="text-white hoverredcol hover:text-[#e66574]"
            >
              +91 9029999979
            </a>
          </div>

          <span className="hidden md:inline text-white/50">|</span>

          {/* Email */}
          <div className="flex items-center">
            <EnvelopeIcon className="w-5 h-5 mr-2" />
            <a
              href="mailto:shiva_roadlines@rocketmail.com"
              className="text-white hoverredcol hover:text-[#e66574]"
            >
              shiva_roadlines@rocketmail.com
            </a>
          </div>

          <span className="hidden md:inline text-white/50">|</span>

          {/* WhatsApp */}
          <div className="flex items-center">
            <WhatsAppIcon className="w-5 h-5 mr-2" />
            <a
              href="https://wa.me/919029999979"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hoverredcol hover:text-[#e66574]"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  </div>
  );
}
