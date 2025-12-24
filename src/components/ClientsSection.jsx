import React from "react";
import p1 from "../assets/logos/alphafacts.png";
import p2 from "../assets/logos/amino.png";
import p3 from "../assets/logos/fidoIR.png";
import p4 from "../assets/logos/cognateIR.png";

export default function AssociatesSection() {
  const logos = [p1, p2, p3, p4];
  const loopLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="font-chillax text-3xl md:text-4xl font-semibold text-[#0470aa] mb-3">
          Industry Collaboration
        </h2>

        <p className="  text-slate-600 mb-14 max-w-2xl mx-auto">
          Aviquest is trusted by poultry farms and veterinary medicine suppliers
          across the industry.
        </p>

        {/* MARQUEE */}
        <div className="relative overflow-hidden">
          {/* soft fade edges */}
          <div className="pointer-events-none absolute inset-0 z-10 
            bg-[linear-gradient(to_right,white,transparent_15%,transparent_85%,white)]" />

          <div className="marquee flex items-center gap-20">
            {loopLogos.map((logo, i) => (
              <div key={i} className="logo-wrapper">
                <img
                  src={logo}
                  alt="associate"
                  className="h-24 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        /* Marquee movement */
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee {
          width: max-content;
          animation: marquee 22s linear infinite;
        }

        /* Logo zoom effect when near center */
        .logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s ease, filter 0.4s ease;
          filter: grayscale(100%);
        }

        /* Approximate center scaling */
        .marquee .logo-wrapper:nth-child(6),
        .marquee .logo-wrapper:nth-child(7) {
          transform: scale(1.25);
          filter: grayscale(0%);
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
