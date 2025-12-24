import { motion } from "framer-motion";

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
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER (CENTERED) ================= */}
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

        {/* ================= TESTIMONIAL CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                relative
                bg-white
                border border-slate-200
                rounded-2xl
                p-8
                transition
                hover:border-[#0071BC]
              "
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0071BC]/10 text-[#0071BC] text-xl font-bold">
                  “
                </div>
              </div>

              {/* Quote */}
              <p className="text-slate-700 leading-relaxed mb-8">
                {item.quote}
              </p>

              {/* Footer */}
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
