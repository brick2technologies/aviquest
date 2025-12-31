import { Facebook, Instagram, Youtube, Phone } from "lucide-react";
import XIcon from "/x-icon.svg";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20" aria-label="footer">
      <div className="mx-auto max-w-[95%] px-0">
        {/* ================= FOOTER CARD ================= */}
        <div
          className="
            rounded-[2.5rem]
            bg-[radial-gradient(ellipse_at_top,_rgba(0,113,188,0.18),_rgba(16,185,129,0.22),_rgba(236,253,245,0.6))]
            backdrop-blur-xl
            border border-emerald-200/60
            shadow-[0_20px_60px_rgba(16,185,129,0.18)]
            pt-14 pb-8
          "
        >
          <div className="px-6 space-y-10">
            {/* ================= TOP CTA ================= */}
            <div
              className="
                rounded-3xl
                bg-[#0071BC]
                px-6 py-6
                flex flex-col md:flex-row
                items-center justify-between gap-4
                shadow-lg
              "
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white text-center md:text-left">
                Ready to grow smarter poultry farms with Aviquest?
              </h3>

              <button
                aria-label="Schedule a call"
                className="
                  inline-flex items-center gap-2
                  bg-white text-[#0071BC]
                  px-6 py-3 rounded-full
                  text-base font-medium
                  hover:bg-slate-100
                  hover:scale-[1.03]
                  transition
                "
              >
                Schedule a Call
                <Phone size={18} />
              </button>
            </div>

            {/* ================= MAIN FOOTER ================= */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* ================= LOGO BLOCK ================= */}
              {/* ================= LOGO BLOCK ================= */}
              <div
                className="
    rounded-2xl
    bg-white/60
    backdrop-blur-md
    border border-emerald-200/60
    flex flex-col items-center
    p-6
    gap-5
  "
              >
                {/* LOGO */}
                <img
                  src="/logo.png"
                  alt="Aviquest logo"
                  className="
      w-full
      max-h-40
      object-cover
    "
                />

                {/* SOCIAL ICONS (UNDER LOGO) */}
                <div className="flex justify-center gap-4">
                  {[
                    { icon: Facebook, link: "https://facebook.com" },
                    { icon: Instagram, link: "https://instagram.com" },
                    { icon: "x", link: "https://twitter.com" },
                    { icon: Youtube, link: "https://youtube.com" },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="
          h-11 w-11
          rounded-full
          flex items-center justify-center
          bg-white/60 backdrop-blur-md
          border border-emerald-200/60
          text-[#0071BC]
          transition-all duration-300
          hover:bg-[#0071BC]
          hover:text-white
          hover:scale-110
        "
                    >
                      {item.icon === "x" ? (
                        <img src={XIcon} alt="X" className="h-5 w-5" />
                      ) : (
                        <item.icon size={20} />
                      )}
                    </a>
                  ))}
                </div>
              </div>

              {/* ================= LINKS + INFO ================= */}
              <div
                className="
    md:col-span-2
    rounded-2xl
    bg-white/60
    backdrop-blur-md
    border border-emerald-200/60
    p-6
    flex flex-col justify-between
  "
              >
                {/* ================= FOOTER COLUMNS ================= */}
                <div
                  className="
      grid
      grid-cols-2
      gap-8
      text-center
      sm:text-left
      md:grid-cols-3
    "
                >
                  {/* PAGES */}
                  <div>
                    <h4 className="mb-4 text-lg font-semibold text-[#0071BC]">
                      Pages
                    </h4>
                    <ul className="space-y-3 text-[15px]">
                      {["Home", "About", "Products", "Contact"].map((item) => (
                        <li key={item}>
                          <a
                            href={`/${
                              item === "Home" ? "" : item.toLowerCase()
                            }`}
                            className="
                inline-block font-medium text-slate-700
                transition-all duration-200
                hover:text-[#0071BC]
                hover:-translate-y-[1px]
              "
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* PRODUCTS */}
                  <div>
                    <h4 className="mb-4 text-lg font-semibold text-[#0071BC]">
                      Products
                    </h4>
                    <ul className="space-y-3 text-[15px]">
                      {[
                        "Farm Management",
                        "Health Tracking",
                        "Feed Monitoring",
                        "Analytics",
                      ].map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="
                inline-block font-medium text-slate-700
                transition-all duration-200
                hover:text-[#0071BC]
                hover:-translate-y-[1px]
              "
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CONTACT (FULL WIDTH ON MOBILE) */}
                  <div className="col-span-2 md:col-span-1">
                    <h4 className="mb-4 text-lg font-semibold text-[#0071BC]">
                      Contact
                    </h4>
                    <ul className="space-y-3 text-[15px] text-slate-600">
                      <li className="hover:text-[#0071BC] transition">
                        Hyderabad, India
                      </li>
                      <li className="hover:text-[#0071BC] transition">
                        +91 99999 99999
                      </li>
                      <li className="hover:text-[#0071BC] transition">
                        info@aviquest.com
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ================= CENTER BAR ================= */}
                <div
                  className="
      mt-10
      grid
      grid-cols-2
      gap-y-4
      text-[13px] font-medium text-slate-500
      text-center
      md:flex md:items-center md:justify-between
    "
                >
                  {/* LEFT */}
                  <div className="flex justify-center gap-2 md:justify-start">
                    <a
                      href="/privacy"
                      className="hover:text-[#0071BC] transition"
                    >
                      Privacy
                    </a>
                    <span>•</span>
                    <a
                      href="/terms"
                      className="hover:text-[#0071BC] transition"
                    >
                      Terms
                    </a>
                  </div>

                  {/* RIGHT */}
                  <a
                    href="https://brick2tech.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#0071BC] transition underline"
                  >
                    Designed by{" "}
                    <span className="font-semibold">Brick2Tech</span>
                  </a>

                  {/* COPYRIGHT (FULL WIDTH, CENTERED) */}
                  <div className="col-span-2">
                    © {new Date().getFullYear()} Aviquest
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
