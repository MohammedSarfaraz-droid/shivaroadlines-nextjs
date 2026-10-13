import React from "react";
import Image from "next/image";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919029999979"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/images/whatsapp.svg"
        alt="WhatsApp"
        width={22}
        height={22}
        className="w-5.5 h-5.5"
      />
      <span className="wa-text">Chat on WhatsApp</span>
    </a>
  );
}
