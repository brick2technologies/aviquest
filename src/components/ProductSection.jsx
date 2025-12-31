import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

import Prod1 from "../assets/products/calcipro.png";
import Prod2 from "../assets/products/bioshield.png";
import Prod3 from "../assets/products/shellguard.png";
import Prod4 from "../assets/products/mintreat.png";
import Prod5 from "../assets/products/enzyplus.png";
import Prod6 from "../assets/products/aqsan.png";
import Prod7 from "../assets/products/phytacare.png";

export default function ProductsSection() {
  const products = [
    { id: "calcipro", name: "CalciPro", img: Prod1 },
    { id: "bioshield-x", name: "BioShield-X", img: Prod2 },
    { id: "shellguard", name: "ShellGuard", img: Prod3 },
    { id: "mintreat", name: "MinTreat", img: Prod4 },
    { id: "enzyplus-p", name: "EnzyPlus", img: Prod5 },
    { id: "aq-san", name: "Aq San", img: Prod6 },
    { id: "phytacare", name: "PhytaCare", img: Prod7 },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
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
                <h3 className="text-base font-medium text-[#336600]">
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
