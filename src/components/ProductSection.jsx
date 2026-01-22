import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

import Prod1 from "../assets/products/calcipro-granules.png";
import Prod2 from "../assets/products/bioshield.png";
import Prod3 from "../assets/products/shellguard.png";
import Prod4 from "../assets/products/mintrust.png";
import Prod5 from "../assets/products/enzyplus.png";

import Prod7 from "../assets/products/phytacare.png";

import Prod9 from "../assets/products/calcipro-liquid.png";
import Prod10 from "../assets/products/preciliv.png";
import Prod11 from "../assets/products/mintrust-l.png";

export default function ProductsSection() {
  const products = [
 
  { id: "calcipro-granules", name: "CALCIPRO GRANULES", img: Prod1 },
  { id: "bioshield-x", name: "BIOSHIELD-X", img: Prod2 },
  { id: "shellguard", name: "SHELLGUARD", img: Prod3 },
  { id: "mintrust-p", name: "MINTRUST-P", img: Prod4 },
  { id: "enzyplus", name: "ENZYPLUS", img: Prod5 },

  { id: "phytacare", name: "PHYTACARE", img: Prod7 },
  { id: "calcipro-liquid", name: "CALCIPRO LIQUID", img: Prod9 },
  { id: "preci-liv", name: "PRECI LIV", img: Prod10 },
  { id: "mintrust-l", name: "MINTRUST-L", img: Prod11 },

  //   { id: "aq-mix", name: "Aq Mix", img: Prod8 },
];
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="flex justify-center pb-10">
          <Motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              font-chillax
              text-center
              text-4xl sm:text-5xl lg:text-6xl
              font-semibold
              text-[#0071BC]
            "
          >
            Our Products
          </Motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              whileHover={{ y: -8 }}
              className="
                group
                rounded-2xl
                border border-[#336600]/30
                bg-[radial-gradient(ellipse_at_top,_rgba(0,113,188,0.28),_rgba(16,185,129,0.30),_rgba(236,253,245,0.6))]
                shadow-sm hover:shadow-lg
                transition
                flex flex-col
                overflow-hidden
              "
            >
              {/* ================= IMAGE (TOP ALIGNED) ================= */}
              <div
                className="
                  w-full
                  bg-white
                  px-5 pt-6 pb-4
                  rounded-t-2xl
                  flex items-center justify-center
                "
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="
                    h-28
                    object-contain
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              {/* ================= CONTENT ================= */}
              <div className="flex flex-col flex-1 p-5 text-center">
                <h3 className="mt-4 text-center text-lg font-semibold text-[#0071BC]">
                      {product.name}
                    </h3>

                <div className="mt-auto pt-4 flex justify-center">
                  <Link to={`/products/${product.id}`}>
                    <Motion.span
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.96 }}
                      className="
                        inline-flex rounded-full
                        border border-[#0071BC]
                        px-5 py-2
                        text-xs font-medium
                        text-[#0071BC]
                        hover:bg-[#0071BC]
                        hover:text-white
                        transition
                      "
                    >
                      Know More
                    </Motion.span>
                  </Link>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
