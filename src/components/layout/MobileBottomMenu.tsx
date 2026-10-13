"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { PhoneIcon, WhatsAppIcon, CloseIcon } from "@/components/icons/Icons";

const SERVICES = [
  {
    title: "Lube Oil Transportation",
    href: "/lube-oil-transportation",
    desc: "Specialized fleet with high safety standards for lubricant transport.",
  },
  {
    title: "Coal Tar Transportation",
    href: "/coal-tar-transportation",
    desc: "Insulated and temperature-maintained tankers for coal tar logistics.",
  },
  {
    title: "Ethanol Transportation",
    href: "/ethanol-transportation",
    desc: "Explosive-grade, licensed petroleum tankers ensuring safe delivery.",
  },
  {
    title: "Other Services",
    href: "/other-services",
    desc: "Complete tailored bulk liquid and industrial transport solutions.",
  },
];

export function MobileBottomMenu() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (isServicesOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isServicesOpen]);

  return (
    <>
      {/* Mobile Sticky Bottom Navigation Bar (visible below lg breakpoint) */}
      <nav
        aria-label="Mobile Quick Navigation"
        className="fixed bottom-0 inset-x-0 z-50 bg-[#0A1B33]/95 backdrop-blur-md border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.25)] lg:hidden pb-[env(safe-area-inset-bottom,0px)]"
      >
        <div className="grid grid-cols-4 h-16 items-center px-1">
          {/* 1. Phone */}
          <a
            href="tel:9029999979"
            className="flex flex-col items-center justify-center h-full text-white/80 hover:text-[#F4B742] transition-colors group active:scale-95"
            aria-label="Call Shiva Road Lines"
          >
            <div className="p-1 rounded-full group-hover:bg-white/10 transition-colors">
              <PhoneIcon className="w-5 h-5 text-[#F4B742]" />
            </div>
            <span className="text-[11px] font-semibold mt-0.5 tracking-tight">Call</span>
          </a>

          {/* 2. WhatsApp */}
          <a
            href="https://wa.me/919029999979"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center h-full text-white/80 hover:text-[#25D366] transition-colors group active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            <div className="p-1 rounded-full group-hover:bg-white/10 transition-colors">
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            </div>
            <span className="text-[11px] font-semibold mt-0.5 tracking-tight">WhatsApp</span>
          </a>

          {/* 3. Services (Triggers Modal) */}
          <button
            type="button"
            onClick={() => setIsServicesOpen(true)}
            className="flex flex-col items-center justify-center h-full text-white/80 hover:text-[#F4B742] transition-colors group active:scale-95"
            aria-label="Open Services menu"
            aria-haspopup="dialog"
            aria-expanded={isServicesOpen}
          >
            <div className="p-1 rounded-full group-hover:bg-white/10 transition-colors">
              <svg
                className="w-5 h-5 text-[#F4B742]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <span className="text-[11px] font-semibold mt-0.5 tracking-tight">Services</span>
          </button>

          {/* 4. Location */}
          <Link
            href="/contact"
            className="flex flex-col items-center justify-center h-full text-white/80 hover:text-[#F4B742] transition-colors group active:scale-95"
            aria-label="View locations and offices"
          >
            <div className="p-1 rounded-full group-hover:bg-white/10 transition-colors">
              <svg
                className="w-5 h-5 text-[#F4B742]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <span className="text-[11px] font-semibold mt-0.5 tracking-tight">Location</span>
          </Link>
        </div>
      </nav>

      {/* Services Popup Modal */}
      <AnimatePresence>
        {isServicesOpen && (
          <div className="fixed inset-0 z-9999 flex items-end sm:items-center justify-center lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsServicesOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Modal Sheet Content */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="services-modal-title"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="relative w-full max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col"
            >
              {/* Header */}
              <div className="gradientbg px-5 py-4 flex items-center justify-between text-white shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-white/10">
                    <svg
                      className="w-5 h-5 text-[#F4B742]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 id="services-modal-title" className="text-base font-bold text-white leading-tight">
                      Our Transportation Services
                    </h3>
                    <p className="text-xs text-white/80">Select a service to view full specifications</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsServicesOpen(false)}
                  className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                  aria-label="Close services popup"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Service List */}
              <div className="p-4 space-y-2.5 overflow-y-auto">
                {SERVICES.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setIsServicesOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-xl border border-gray-100 hover:border-[#134063]/30 bg-gray-50/70 hover:bg-blue-50/40 transition-all group"
                  >
                    <div className="pr-3">
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#134063] transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{service.desc}</p>
                    </div>
                    <div className="shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-[#F4B742] group-hover:border-[#F4B742] transition-colors shadow-2xs">
                      <svg
                        className="w-4 h-4 stroke-[2.5]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}

                {/* All Services Link */}
                <div className="pt-2 text-center">
                  <Link
                    href="/services"
                    onClick={() => setIsServicesOpen(false)}
                    className="inline-flex items-center justify-center text-xs font-semibold text-[#134063] hover:text-[#b22234] transition-colors py-1"
                  >
                    View All Services Overview &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileBottomMenu;
