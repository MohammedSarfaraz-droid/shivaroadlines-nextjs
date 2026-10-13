import React from "react";

export function HomeContact() {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-125">
        {/* Image */}
        <div
          className="h-80 lg:h-auto bg-cover bg-center order-1 lg:order-2"
          style={{ backgroundImage: "url('/images/hero-5.jpeg')" }}
        />

        {/* Text */}
        <div className="p-8 sm:p-12 lg:p-16 order-2 lg:order-1 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">
            <span className="grdtext">Contact </span>
            <strong className="grdtext font-bold">Us</strong>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 textjustify">
            Looking for reliable, safe, and on-time transportation services?{" "}
            <br />
            Shiva Roadlines is here to support your logistics needs across
            Maharashtra and India. Reach out to us for bookings, inquiries,
            fleet availability, or partnership opportunities.
          </p>

          <div className="text-sm sm:text-base text-gray-700 space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900">Why Contact Shiva Roadlines?</p>
              <p className="mt-1">
                Fast response & professional support <br />
                On-time goods delivery <br />
                Safe and compliant logistic operations
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900">Legal & Business Details:</p>
              <p className="mt-1">
                Proprietor: A. Rai <br />
                GSTIN: 27AMAPR6367F2ZS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
