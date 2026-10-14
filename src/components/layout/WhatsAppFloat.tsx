import React from "react";
import Image from "next/image";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919029999979"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float fixed bottom-8 left-6 z-50 hidden lg:inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-xl hover:bg-[#20ba5a] hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative w-6 h-6 shrink-0 transition-transform duration-300 group-hover:rotate-12">
        <Image
          src="/images/whatsapp.svg"
          alt="WhatsApp"
          fill
          className="object-contain"
        />
      </div>
      <span className="tracking-wide text-white drop-shadow-xs">Chat on WhatsApp</span>
    </a>
  );
}
