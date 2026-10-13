import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export function ContactContent() {
  return (
    <section className="py-16 sm:py-20 gradientbg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal yOffset={12} duration={0.45}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-10">
            Contact <strong className="font-bold">Us</strong>
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Contact Info Card */}
          <div className="lg:col-span-5 text-gray-900">
            <Reveal yOffset={14} duration={0.45} className="h-full">
              <div className="bg-white p-6 sm:p-8 formdivs shadow-md h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3">
                  Contact Info
                </h2>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  We&apos;re always ready to support your transportation
                  requirements. Connect with our team for quotes, scheduling, or
                  partnership enquiries.
                </p>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Address</p>
                    <p className="font-semibold text-gray-800">
                      Head Office – Navi Mumbai
                    </p>
                    <p className="text-gray-600">
                      Unit No. 2, Plot No. 7, Sector 19C, Vashi, Navi Mumbai –
                      400706
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 mb-1">Phone</p>
                    <a
                      href="tel:02265131498"
                      className="text-gray-700 hoverred hover:text-[#b22234] block"
                    >
                      022-65131498
                    </a>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 mb-1">Mobile</p>
                    <a
                      href="tel:9930709979"
                      className="text-gray-700 hoverred hover:text-[#b22234] block"
                    >
                      +91 9930709979
                    </a>
                    <a
                      href="tel:9029999979"
                      className="text-gray-700 hoverred hover:text-[#b22234] block"
                    >
                      +91 9029999979
                    </a>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 mb-1">Email</p>
                    <a
                      href="mailto:shiva_roadlines@rocketmail.com"
                      className="text-gray-700 hoverred hover:text-[#b22234] block"
                    >
                      • shiva_roadlines@rocketmail.com
                    </a>
                    <a
                      href="mailto:shivaroadlines2@gmail.com"
                      className="text-gray-700 hoverred hover:text-[#b22234] block"
                    >
                      • shivaroadlines2@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          </div>

          {/* Operational Offices Card */}
          <div className="lg:col-span-7 text-gray-900">
            <Reveal yOffset={14} delay={0.08} duration={0.45} className="h-full">
              <div className="bg-white p-6 sm:p-8 formdivs shadow-md h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3">
                Operational Offices
              </h2>

              <div className="space-y-4 text-sm">
                {/* Navi Mumbai */}
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-bold text-gray-900">Navi Mumbai</p>
                  <p className="text-gray-600">
                    Unit No. 02, Plot No. 7, Sector 19C, Vashi, Navi Mumbai –
                    400706
                  </p>
                  <p className="text-gray-700 mt-1">
                    Mob:{" "}
                    <a
                      href="tel:9029999979"
                      className="hoverred hover:text-[#b22234]"
                    >
                      +91 9029999979
                    </a>
                  </p>
                </div>

                {/* Mumbai Thane */}
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-bold text-gray-900">Mumbai (Thane)</p>
                  <p className="text-gray-600">
                    Shop No. 1, Sundaram Co-Op Hsg. CHS, Gaondevi Road, Kalwa
                    West, Thane – 400605
                  </p>
                  <p className="text-gray-700 mt-1">
                    Phone:{" "}
                    <a
                      href="tel:02225436527"
                      className="hoverred hover:text-[#b22234]"
                    >
                      022-25436527
                    </a>
                  </p>
                </div>

                {/* Kolkata */}
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-bold text-gray-900">Kolkata (Haldia)</p>
                  <p className="text-gray-600">
                    Block B-71, PO Durga Chowk, Purba Medinipur – 721602
                  </p>
                  <p className="text-gray-700 mt-1">
                    Email:{" "}
                    <a
                      href="mailto:kolkata@shivaroadlines.co.in"
                      className="hoverred hover:text-[#b22234]"
                    >
                      kolkata@shivaroadlines.co.in
                    </a>
                  </p>
                </div>

                {/* Vishakhapatnam */}
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-bold text-gray-900">Vishakhapatnam</p>
                  <p className="text-gray-600">
                    59-25-6, Gadla Veedhi, Malkapuram, Vizag – 530011
                  </p>
                  <p className="text-gray-700 mt-1">
                    Email:{" "}
                    <a
                      href="mailto:vishakhapatnam@shivaroadlines.co.in"
                      className="hoverred hover:text-[#b22234]"
                    >
                      vishakhapatnam@shivaroadlines.co.in
                    </a>
                  </p>
                </div>

                {/* Mathura */}
                <div>
                  <p className="font-bold text-gray-900">Mathura</p>
                  <p className="text-gray-600">
                    Office No. 6/2, UPSIDC Market, Main Gate, Mathura Refinery,
                    Mathura – 281005
                  </p>
                  <p className="text-gray-700 mt-1">
                    Email:{" "}
                    <a
                      href="mailto:mathura@shivaroadlines.co.in"
                      className="hoverred hover:text-[#b22234]"
                    >
                      mathura@shivaroadlines.co.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          </div>
        </div>

        {/* International Office */}
        <Reveal yOffset={14} delay={0.05} duration={0.45}>
          <div className="bg-white p-6 sm:p-8 formdivs shadow-md text-gray-900">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              International Office
            </h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Goagabu, Tokha Muncipalty No. 9 , Kathmandu, Nepal-400600.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
