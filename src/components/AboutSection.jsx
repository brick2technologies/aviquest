import { motion as Motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full bg-white pt-20 pb-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ================= TEXT CONTENT ================= */}
        <Motion.div
          initial={{ opacity: 0, y: 24 }}s
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="order-1 relative z-20 pointer-events-auto"

        >
          <h2 className="font-chillax text-2xl sm:text-3xl font-semibold text-[#0071bc] leading-tight">
            Welcome to Aviquest Healthcare
          </h2>

          {/* IMAGE FOR MOBILE & TABLET */}
          <div className="mt-8 lg:hidden pointer-events-none">
            <div className="overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-50 shadow-sm">
              <img
                src="/AboutSection.png"
                alt="Aviquest Healthcare poultry nutrition research"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="mt-6 text-slate-600 leading-relaxed">
            At Aviquest Healthcare, we are redefining excellence in poultry
            health and nutrition. As a leading healthcare company specializing
            in the development and marketing of premium poultry feed
            supplements, our journey is fueled by a commitment to innovation,
            sustainability, and the welfare of poultry and farmers alike.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            Founded with the vision to transform the poultry industry, Aviquest
            Healthcare stands at the forefront of research-driven solutions. We
            harness advanced scientific knowledge and cutting-edge technology to
            formulate products that enhance poultry health, optimize
            performance, and support sustainable farming practices.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            Our unwavering dedication to quality ensures that every product we
            deliver meets the highest standards, earning the trust of farmers
            and stakeholders across the globe.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a
  href="/about"
  className="
    relative z-20 pointer-events-auto
    inline-flex items-center
    rounded-full
    border border-emerald-600
    px-8 py-3
    text-sm font-medium
    text-emerald-700
    transition-all duration-300
    hover:bg-[#336600]
    hover:border-[#336600]
    hover:text-white
    hover:-translate-y-0.5
    hover:shadow-md
    focus:outline-none focus:ring-2 focus:ring-[#336600]/40
  "
>
  Know More
</a>

          </div>
        </Motion.div>

        {/* ================= IMAGE (DESKTOP ONLY) ================= */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative hidden lg:block order-2 pointer-events-none"
        >
          <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-50 shadow-sm">
            <img
              src="/AboutSection.png"
              alt="Aviquest Healthcare poultry nutrition research"
              className="w-full h-full object-cover"
            />
          </div>
        </Motion.div>

      </div>
    </section>
  );
}
