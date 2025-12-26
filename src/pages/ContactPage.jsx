import { motion as Motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ContactExpertSection() {
  return (
    <section className="bg-white py-24 mt-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid gap-14 lg:grid-cols-2 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className=" font-chillax text-3xl sm:text-4xl font-semibold text-slate-900">
              Talk to an{" "}
              <span className="text-[#0071BC]">Expert</span> Today
            </h2>

            <p className="mt-4 max-w-md text-slate-600 leading-relaxed">
              Get in touch with our team for expert guidance on poultry health,
              farm operations, and Aviquest solutions.
            </p>

            <ul className="mt-6 space-y-4 text-slate-600">
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-[#0071BC]" />
                <span>
                  <strong className="text-slate-900">
                    Personalized Guidance
                  </strong>{" "}
                  from poultry and farm experts
                </span>
              </li>

              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-[#0071BC]" />
                <span>
                  <strong className="text-slate-900">
                    Secure & Confidential
                  </strong>{" "}
                  handling of your information
                </span>
              </li>

              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-[#0071BC]" />
                <span>
                  <strong className="text-slate-900">
                    Fast & Friendly Support
                  </strong>{" "}
                  with quick response times
                </span>
              </li>
            </ul>

            <p className="mt-6 text-sm text-slate-500">
              Looking for customer support?{" "}
              <span className="text-[#0071BC] cursor-pointer hover:underline">
                Click here
              </span>
            </p>
          </Motion.div>

          {/* ================= RIGHT FORM ================= */}
          <Motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="rounded-3xl bg-[radial-gradient(ellipse_at_top,_rgba(0,113,188,0.16),_rgba(16,185,129,0.22),_rgba(236,253,245,0.65))]
        backdrop-blur-xl
        border border-emerald-200/60
        shadow-[0_20px_60px_rgba(16,185,129,0.18)] p-8 ">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">
                Please enter your information
              </h3>

              <form className="grid gap-4">

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#0071BC] focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#0071BC] focus:outline-none"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#0071BC] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Company / Farm name"
                    className="rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#0071BC] focus:outline-none"
                  />
                </div>

                <textarea
                  rows="4"
                  placeholder="Enter your message here..."
                  className="rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#0071BC] focus:outline-none"
                />

                <button
                  type="submit"
                  className="
                    mt-2 w-full rounded-full
                    bg-[#0071BC]
                    py-3 text-sm font-medium text-white
                    hover:bg-[#005fa3] transition
                  "
                >
                  Send Message
                </button>
              </form>
            </div>
          </Motion.div>

        </div>
      </div>
    </section>
  );
}
