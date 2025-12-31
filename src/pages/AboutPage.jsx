import { motion as Motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import img2 from "/AboutSection.png";
import SEO from "../components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  // Memoize the images array so the useEffect doesn't trigger unnecessarily
  const images = useMemo(() => [img2], []);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return; // No need for interval if only one image

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
     {/* ================= SEO ================= */}
      <SEO
        title="About AviQuest Healthcare | Poultry Health & Nutrition Experts"
        description="Learn about AviQuest Healthcare, a poultry healthcare company dedicated to scientific, research-driven feed supplements and solutions that improve poultry health, immunity, egg production, and farm productivity."
        keywords="about aviquest healthcare, poultry healthcare company, poultry nutrition experts, poultry feed supplements manufacturer, poultry health solutions"
        canonical="https://aviquest.in/about"
      />
    <main className="bg-white text-slate-800 overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="pt-36 pb-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="font-chillax text-4xl md:text-6xl font-semibold tracking-tight text-[#0071BC]"
          >
            Pioneering Tomorrow’s Poultry
          </Motion.h1>

          <Motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 max-w-4xl mx-auto text-lg leading-relaxed text-slate-600"
          >
            At{" "}
            <span className="font-medium text-[#558d1e]">
              AviQuest Healthcare
            </span>
            , we are redefining poultry health and nutrition through science,
            innovation, and a deep commitment to farmers and animal welfare.
          </Motion.p>
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE (Updated with new content)
      ====================================================== */}
      {/* =====================================================
    WHO WE ARE
====================================================== */}
      <section className="relative mt-20">
  {/* ===== SAME WIDTH AS NAVBAR ===== */}
  <div className="mx-auto max-w-[95%] px-0">

    {/* ===== GLASS CARD ===== */}
    <div
      className="
        rounded-[2.5rem]
        bg-[radial-gradient(ellipse_at_top,_rgba(0,113,188,0.16),_rgba(16,185,129,0.22),_rgba(236,253,245,0.65))]
        backdrop-blur-xl
        border border-emerald-200/60
        shadow-[0_20px_60px_rgba(16,185,129,0.18)]
        py-16 md:py-24
        overflow-hidden
      "
    >
      <div className="px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="text-center lg:text-left">
          <Motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-chillax text-3xl md:text-4xl font-semibold text-[#0071BC] mb-6"
          >
            Who We Are
          </Motion.h2>

          {/* ===== MOBILE / TABLET ANIMATION ===== */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center my-10 lg:hidden"
          >
            <Motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            >
              <svg viewBox="0 0 300 300" className="w-full h-full">
                <defs>
                  <path
                    id="circlePathMobile"
                    d="M 150,150 m -122,0 a 122,122 0 1,1 244,0 a 122,122 0 1,1 -244,0"
                  />
                  <linearGradient id="textGradientMobile" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="#336600" />
                    <stop offset="100%" stopColor="#0071BC" />
                  </linearGradient>
                </defs>
                <text
                  fill="url(#textGradientMobile)"
                  fontSize="16"
                  fontWeight="600"
                >
                  <textPath href="#circlePathMobile">
                    Holistic Care⭐Technical Expertise⭐Sustainable Innovation⭐Research Driven⭐Scientific Validation⭐
                  </textPath>
                </text>
              </svg>
            </Motion.div>

            <div
              className="
                relative z-10
                w-[210px] h-[210px]
                md:w-[280px] md:h-[280px]
                rounded-full overflow-hidden
                shadow-2xl
                border-[4px] border-[#0071BC]/10
              "
            >
              <img
                src={images[current]}
                alt="AviQuest Poultry"
                className="w-full h-full object-cover"
              />
            </div>
          </Motion.div>

          {/* ===== TEXT CONTENT ===== */}
          <Motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 text-base md:text-lg leading-relaxed text-slate-700"
          >
            <p>
              <span className="font-semibold text-[#0071BC]">
                AviQuest Healthcare
              </span>{" "}
              is redefining excellence in poultry health and nutrition. As a
              leading healthcare company specializing in the development and
              marketing of premium poultry feed supplements, our journey is
              fueled by a commitment to innovation, sustainability, and the
              welfare of poultry and farmers alike.
            </p>

            <p>
              Founded with the vision to transform the poultry industry, we stand
              at the forefront of research-driven solutions. We harness advanced
              scientific knowledge and cutting-edge technology to formulate
              products that enhance poultry health, optimize performance, and
              support sustainable farming practices.
            </p>

            <p>
              Our portfolio of feed supplements addresses a wide range of
              nutritional and health challenges faced by poultry farmers. By
              focusing on solutions that improve growth, boost immunity, and
              enhance overall productivity, we empower farmers to achieve their
              goals.
            </p>

            <p className="font-medium text-[#336600] italic">
              "At AviQuest Healthcare, we believe that the success of farmers and
              the health of poultry go hand in hand."
            </p>
          </Motion.div>
        </div>

        {/* ================= DESKTOP ANIMATION ================= */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <Motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            className="absolute w-[600px] h-[600px]"
          >
            <svg viewBox="0 0 300 300" className="w-full h-full">
              <defs>
                <path
                  id="circlePathDesktop"
                  d="M 150,150 m -122,0 a 122,122 0 1,1 244,0 a 122,122 0 1,1 -244,0"
                />
                <linearGradient id="textGradientDesktop" gradientTransform="rotate(90)">
                  <stop offset="0%" stopColor="#336600" />
                  <stop offset="100%" stopColor="#0071BC" />
                </linearGradient>
              </defs>
              <text
                fill="url(#textGradientDesktop)"
                fontSize="13"
                fontWeight="700"
                className="tracking-widest"
              >
                <textPath href="#circlePathDesktop">
                  Holistic Care⭐Technical Expertise⭐Sustainable Innovation⭐Research Driven⭐Scientific Validation⭐
                </textPath>
              </text>
            </svg>
          </Motion.div>

          <div
            className="
              relative z-10
              w-[440px] h-[440px]
              rounded-full overflow-hidden
              shadow-2xl
              border-[6px] border-[#0071BC]/10
            "
          >
            <img
              src={images[current]}
              alt="AviQuest Poultry"
              className="w-full h-full object-cover"
            />
          </div>
        </Motion.div>

      </div>
    </div>
  </div>
</section>


      <section className="py-24">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* ================= LEFT: IMAGE ================= */}
    <Motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        rounded-3xl
        overflow-hidden
        border border-slate-200
        bg-slate-100
      "
    >
     <div className="w-full h-[300px] md:h-[400px] lg:h-[420px]">
  <img
    src="/aboutpage-science.png"
    alt="Scientific research"
    className="w-full h-full object-cover"
  />
</div>

    </Motion.div>

    {/* ================= RIGHT: CONTENT ================= */}
    <div className="space-y-10">

      {/* TEXT ON TOP */}
      <Motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-chillax text-3xl font-semibold text-[#0071BC] mb-6">
          Science at Our Core
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Our formulations are built on advanced scientific research and
          validated nutritional principles.
        </p>
      </Motion.div>

      {/* CARD BELOW TEXT */}
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          rounded-3xl
          border border-slate-200
          p-10
          bg-[radial-gradient(ellipse_at_top,_rgba(0,113,188,0.28),_rgba(16,185,129,0.30),_rgba(236,253,245,0.6))]
        "
      >
        <ul className="space-y-6">
          {[
            "Research-driven formulations",
            "Performance-focused nutrition",
            "Quality-controlled production",
            "Field-tested solutions",
          ].map((item, i) => (
            <Motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#336600]" />
              <span className="text-slate-700 font-medium">
                {item}
              </span>
            </Motion.li>
          ))}
        </ul>
      </Motion.div>

    </div>
  </div>
</section>


      {/* ================= IMPACT ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-chillax text-3xl font-semibold text-center text-[#0071BC] mb-14"
          >
            Our Impact on Poultry Farming
          </Motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Better Growth",
                desc: "Optimized nutrition for healthy weight gain",
              },
              {
                title: "Stronger Immunity",
                desc: "Improved resistance against common challenges",
              },
              {
                title: "Higher Productivity",
                desc: "Better feed efficiency and performance",
              },
              {
                title: "Farmer Confidence",
                desc: "Reliable solutions backed by science",
              },
            ].map((item, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-[radial-gradient(ellipse_at_top,_rgba(0,113,188,0.28),_rgba(16,185,129,0.30),_rgba(236,253,245,0.6))] border border-slate-200 p-6 text-center hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-[#336600] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FUTURE ================= */}
      {/* <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-chillax text-3xl font-semibold text-[#0071BC] mb-6"
          >
            Shaping the Future of Poultry Healthcare
          </Motion.h2>

          <Motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed text-slate-700"
          >
            At AviQuest Healthcare, we believe the success of farmers and the
            health of poultry go hand in hand.
          </Motion.p>
        </div>
      </section> */}
    </main>
    </>
  );
}
