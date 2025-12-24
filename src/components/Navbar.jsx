import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Products", "Blogs", "Contact"];

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto max-w-[95%] px-0">

        {/* ================= CAPSULE BAR ================= */}
        <div
          className="
            relative flex items-center justify-between
            h-20
            rounded-full
            bg-emerald-50/90
            backdrop-blur-md
            border border-emerald-200
            shadow-[0_6px_20px_rgba(16,185,129,0.15)]
            px-6
          "
        >
          {/* ===== LEFT: MENU (MOBILE) / LOGO (DESKTOP) ===== */}
          <div className="font-chillax flex items-center">
            {/* Mobile menu */}
            <button
              className="md:hidden mr-2"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop logo */}
            <img src="/logo.png" alt="Logo" className="hidden md:block h-20" />
          </div>

          {/* ===== CENTER: BIG LOGO (MOBILE) ===== */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2">
            <img src="/logo.png" alt="Logo" className="h-20" />
          </div>

          {/* ===== RIGHT: NAV LINKS + WHATSAPP (DESKTOP) ===== */}
          <nav className="font-chillax hidden md:flex items-center gap-8 text-md text-[#0071bc] font-medium">
            {links.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="hover:text-green-600 transition"
              >
                {item}
              </a>
            ))}

            {/* WhatsApp */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition"
            >
              <img src="/whatsapp.svg" alt="WhatsApp" className="h-5 w-5" />
            </a>
          </nav>

          {/* ===== MOBILE RIGHT WHATSAPP ===== */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-green-500"
          >
            <img src="/whatsapp.svg" alt="WhatsApp" className="h-5 w-5" />
          </a>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <div
            className="
              mt-3
              md:hidden
              rounded-3xl
              bg-emerald-50/95
              backdrop-blur-md
              border border-emerald-200
              shadow-[0_10px_30px_rgba(16,185,129,0.18)]
              px-6 py-6
              animate-in
              fade-in
              slide-in-from-top-2
              duration-200
            "
          >
            <nav className="flex flex-col divide-y divide-emerald-200">
              {links.map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="
                    py-3
                    text-[#0071bc]
                    font-medium
                    transition
                    hover:bg-emerald-100/70
                    rounded-lg
                    active:scale-[0.98]
                    px-3
                  "
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
