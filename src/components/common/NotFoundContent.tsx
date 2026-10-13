import React from "react";
import Link from "next/link";

export function NotFoundContent() {
  return (
    <div className="py-24 sm:py-32 gradientbg text-white text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-6xl sm:text-8xl font-light mb-4 text-[#F4B742]">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">
          Page Not Found
        </h2>
        <p className="text-white/90 mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 font-semibold text-white bg-white/20 hover:bg-white hover:text-[#0A1B33] transition-colors rounded-none border border-white"
          >
            Go to Homepage
          </Link>
          <Link
            href="/services"
            className="px-6 py-3 font-semibold text-white bg-[#134063] hover:bg-[#0A1B33] transition-colors rounded-none border border-white/40"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
