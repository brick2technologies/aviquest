import { Facebook, Instagram, Youtube, Phone } from "lucide-react";
import XIcon from "/x-icon.svg";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20">
      {/* SAME CONTAINER AS NAVBAR */}
      <div className="mx-auto max-w-[95%] px-0">

        {/* FOOTER CARD */}
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
              <h3 className="text-lg md:text-xl font-semibold text-white text-center md:text-left">
                Ready to grow smarter poultry farms with Aviquest?
              </h3>

              <button
                aria-label="Schedule a call"
                className="
                inline-flex items-center gap-2
                bg-white text-[#0071BC]
                px-5 py-2.5 rounded-full
                text-sm font-medium
                hover:bg-slate-100
                hover:scale-[1.02]
                focus:outline-none focus:ring-2 focus:ring-white/60
                transition
              "
              >
                Schedule a Call
                <Phone size={15} />
              </button>
            </div>

            {/* ================= MAIN FOOTER ================= */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {/* LOGO BLOCK */}
              <div
                className="
                rounded-2xl
                bg-white/60
                backdrop-blur-md
                border border-emerald-200/60
                flex items-center justify-center
                p-4
              "
              >
                <img
                  src="/logo.png"
                  alt="Aviquest logo"
                  className="w-full h-full object-contain max-h-32"
                  loading="lazy"
                />
              </div>

              {/* LINKS + INFO */}
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
                {/* LINKS */}
                <nav
                  aria-label="Footer navigation"
                  className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-sm text-slate-700"
                >
                  <a href="/" className="hover:text-[#0071BC] transition">
                    Home
                  </a>
                  <a href="/about" className="hover:text-[#0071BC] transition">
                    About
                  </a>
                  <a
                    href="/products"
                    className="hover:text-[#0071BC] transition"
                  >
                    Products
                  </a>
                  <a href="/blogs" className="hover:text-[#0071BC] transition">
                    Blogs
                  </a>
                  <a
                    href="/contact"
                    className="hover:text-[#0071BC] transition"
                  >
                    Contact
                  </a>
                </nav>

                {/* CENTER BAR */}
                <div className="mt-8 flex flex-col items-center gap-2 text-[11px] text-slate-500 text-center">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <span>© {new Date().getFullYear()} Aviquest</span>
                    <span className="opacity-50">•</span>
                    <a href="#" className="hover:text-[#0071BC] transition">
                      Terms
                    </a>
                    <span className="opacity-50">•</span>
                    <a href="#" className="hover:text-[#0071BC] transition">
                      Privacy
                    </a>
                  </div>

                  <a
                    href="https://brick2tech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-[#0071BC] transition"
                  >
                    <span>Designed by</span>
                    <span className="font-medium">Brick2Tech</span>
                  </a>
                </div>
              </div>
            </div>

            {/* ================= SOCIALS ================= */}
            <div className="flex justify-center gap-4">
              {[
                {
                  type: "lucide",
                  icon: Facebook,
                  href: "https://facebook.com",
                  label: "Facebook",
                },
                {
                  type: "lucide",
                  icon: Instagram,
                  href: "https://instagram.com",
                  label: "Instagram",
                },
                {
                  type: "image",
                  icon: XIcon,
                  href: "https://twitter.com",
                  label: "X (Twitter)",
                },
                {
                  type: "lucide",
                  icon: Youtube,
                  href: "https://youtube.com",
                  label: "YouTube",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  h-11 w-11 rounded-full
                  flex items-center justify-center
                  bg-white/60 backdrop-blur-md
                  border border-emerald-200/60
                  text-[#0071BC]
                  hover:bg-[#0071BC]
                  hover:text-white
                  hover:scale-105
                  transition
                "
                >
                  {item.type === "lucide" ? (
                    <item.icon size={18} />
                  ) : (
                    <img
                      src={item.icon}
                      alt="X"
                      className="h-[18px] w-[18px]"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
