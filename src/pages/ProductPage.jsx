import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

import Prod1 from "../assets/products/calcipro.png";
import Prod2 from "../assets/products/bioshield.png";
import Prod3 from "../assets/products/shellguard.png";
import Prod4 from "../assets/products/mintreat.png";
import Prod5 from "../assets/products/enzyplus.png";
import Prod6 from "../assets/products/aqsan.png";
import Prod7 from "../assets/products/phytacare.png";
// import Prod8 from "../assets/products/aqmix.png";

const products = [
  { id: "calcipro", name: "CalciPro", img: Prod1 },
  { id: "bioshield-x", name: "BioShield-X", img: Prod2 },
  { id: "shellguard", name: "ShellGuard", img: Prod3 },
  { id: "mintreat", name: "MinTreat", img: Prod4 },
  { id: "enzyplus", name: "EnzyPlus", img: Prod5 },
  { id: "aq-san", name: "Aq San", img: Prod6 },
  { id: "phytacare", name: "PhytaCare", img: Prod7 },
  //   { id: "aq-mix", name: "Aq Mix", img: Prod8 },
];

export default function ProductsPage() {
  return (
    <>
      {/* ================= SEO ================= */}
      <SEO
        title="Poultry Medicines & Supplements | AviQuest Healthcare Products"
        description="Explore AviQuest Healthcare’s range of scientifically formulated poultry medicines and feed supplements designed to improve egg production, meat growth, immunity, and overall bird health."
        keywords="poultry medicines, poultry supplements, poultry feed additives, egg production supplements, broiler growth products, poultry healthcare manufacturer"
        canonical="https://aviquest.in/products"
      />

    <main className="bg-white text-slate-800">
      {/* ================= PAGE HERO ================= */}
      <section className="pt-40 pb-28 text-center">
        <Motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-chillax text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0071BC]"
        >
          Our Products
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl mx-auto text-slate-600 leading-relaxed"
        >
          Aviquest offers scientifically formulated poultry nutrition and
          healthcare products to enhance bird performance, immunity, and farm
          productivity.
        </Motion.p>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product, i) => (
              <Motion.div
                key={product.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="
      group rounded-3xl 
      bg-[radial-gradient(ellipse_at_top,_rgba(0,113,188,0.16),_rgba(16,185,129,0.22),_rgba(236,253,245,0.65))]
        backdrop-blur-xl
        border border-emerald-200/60
        shadow-[0_20px_60px_rgba(16,185,129,0.18)] p-6
      hover:shadow-xl
      transition-all duration-300
      flex flex-col
    "
              >
                {/* Product Image */}
                <div className="flex items-center justify-center h-44 rounded-2xl bg-slate-50 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="
          max-h-full max-w-full object-contain
          transition-transform duration-300
          group-hover:scale-105
        "
                  />
                </div>

                {/* Product Name */}
                <h3 className="mt-6 text-center text-lg font-semibold text-slate-900">
                  {product.name}
                </h3>

                {/* Button */}
                <div className="mt-6 flex justify-center">
                  <Link
                    to={`/products/${product.id}`}
                    className="
                        inline-flex items-center justify-center
                        rounded-full border border-[#0071BC]
                        px-6 py-2 text-sm font-medium
                        text-[#0071BC]
                        transition
                        hover:bg-[#0071BC]
                        hover:text-white
                        "
                  >
                    View Details
                  </Link>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
