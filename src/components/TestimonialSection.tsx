import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Ramesh Naidu",
    role: "Poultry Farm Owner",
    location: "Andhra Pradesh",
    quote:
      "Aviquest helped us track bird health and daily farm activities clearly. Our losses reduced and planning became easier for our team.",
  },
  {
    name: "Dr. Suresh Kumar",
    role: "Veterinary Medicine Supplier",
    location: "Telangana",
    quote:
      "The platform connects farms and suppliers smoothly. Medicine demand planning and follow-ups are much more organized now.",
  },
  {
    name: "Lakshmi Poultry Farms",
    role: "Commercial Poultry Farm",
    location: "Tamil Nadu",
    quote:
      "Even our workers can use Aviquest without training. It brings transparency and confidence to farm operations.",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const paginate = (dir: number) => {
  setIndex((prev) =>
    (prev + dir + testimonials.length) % testimonials.length
  );
};


  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-chillax text-2xl md:text-3xl font-semibold text-[#0071BC]">
            Trusted by Poultry Farms & Suppliers
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Real experiences from poultry farm owners and veterinary medicine
            partners using Aviquest in their daily operations.
          </p>
        </motion.div>

        {/* ================= MOBILE CAROUSEL ================= */}
        <div className="md:hidden relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.4 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) paginate(1);
                if (info.offset.x > 80) paginate(-1);
              }}
              className="
                bg-white
                border border-slate-200
                rounded-2xl
                p-8
              "
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0071BC]/10 text-[#0071BC] text-xl font-bold">
                  “
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-8">
                {testimonials[index].quote}
              </p>

              <div className="pt-4 border-t border-slate-100">
                <p className="font-medium text-slate-900">
                  {testimonials[index].name}
                </p>
                <p className="text-sm text-[#336600]">
                  {testimonials[index].role} ·{" "}
                  {testimonials[index].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index
                    ? "bg-[#0071BC]"
                    : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid grid-cols-3 gap-10">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-white
                border border-slate-200
                rounded-2xl
                p-8
                transition
                hover:border-[#0071BC]
              "
            >
              <div className="mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0071BC]/10 text-[#0071BC] text-xl font-bold">
                  “
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-8">
                {item.quote}
              </p>

              <div className="pt-4 border-t border-slate-100">
                <p className="font-medium text-slate-900">
                  {item.name}
                </p>
                <p className="text-sm text-[#336600]">
                  {item.role} · {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
