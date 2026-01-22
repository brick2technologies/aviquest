import { Facebook, Instagram, Youtube, Phone } from "lucide-react";
import XIcon from "/x-icon.svg";
import { Link } from "react-router-dom";

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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24 text-center sm:text-left max-w-4xl">
  {/* PAGES */}
  <div className="flex flex-col items-center sm:items-start">
    <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#0071BC]">
      Navigation
    </h4>
    <ul className="space-y-4">
      {["Home", "About", "Products", "Contact"].map((item) => (
        <li key={item}>
          <Link
            to={`/${item === "Home" ? "" : item.toLowerCase()}`}
            className="group relative inline-block text-[16px] font-medium text-slate-600 transition-colors duration-300 hover:text-[#0071BC]"
          >
            {item}
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#0071BC] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* CONTACT */}
  <div className="flex flex-col items-center sm:items-start">
    <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#0071BC]">
      Get In Touch
    </h4>
    <ul className="space-y-4 text-[16px] font-medium text-slate-600">
      <li className="flex flex-col sm:flex-row items-center gap-2 group cursor-default">
        <span className="text-slate-400 group-hover:text-[#0071BC] transition-colors italic">Location:</span>
        <span className="group-hover:text-slate-900 transition-colors">Maharastra, India</span>
      </li>
      <li className="flex flex-col sm:flex-row items-center gap-2 group">
        <span className="text-slate-400 group-hover:text-[#0071BC] transition-colors italic">Phone:</span>
        <a href="tel:+917416597767" className="hover:text-slate-900 transition-colors">+91 74165 97767</a>
      </li>
      <li className="flex flex-col sm:flex-row items-center gap-2 group">
        <span className="text-slate-400 group-hover:text-[#0071BC] transition-colors italic">Email:</span>
        <a href="mailto:Connect@aviquesthealthcare.com" className="hover:text-slate-900 transition-colors break-all">
          Connect@aviquesthealthcare.com
        </a>
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
