import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto max-w-[95%] px-0">

        {/* ================= CAPSULE BAR ================= */}
        <div
          className="
            relative flex items-center justify-between
            h-20
            rounded-full
            bg-[radial-gradient(ellipse_at_top,_rgba(0,113,188,0.28),_rgba(16,185,129,0.30),_rgba(236,253,245,0.6))]


            backdrop-blur-md
            border border-emerald-200
            shadow-[0_6px_20px_rgba(16,185,129,0.15)]
            px-6
          "
        >
          {/* ===== LEFT: MENU (MOBILE) / LOGO (DESKTOP) ===== */}
          <div className="font-chillax flex items-center">
            <button
              className="md:hidden mr-2"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop logo */}
            <Link to="/" className="hidden md:block">
              <img src="/logo.png" alt="Logo" className="h-32" />
            </Link>
          </div>

          {/* ===== CENTER: BIG LOGO (MOBILE) ===== */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2">
            <Link to="/" onClick={() => setOpen(false)}>
              <img src="/logo.png" alt="Logo" className="h-28" />
            </Link>
          </div>

          {/* ===== RIGHT: NAV LINKS + WHATSAPP (DESKTOP) ===== */}
          <nav className="font-chillax hidden md:flex items-center gap-8 text-md text-[#0071bc] font-medium"
          aria-label="Primary navigation">
            {links.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `transition hover:text-green-600 ${
                    isActive ? "text-green-600" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
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
            <nav className="flex flex-col divide-y divide-emerald-200" aria-label="Primary navigation">
              {links.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `
                    py-3 px-3 rounded-lg
                    font-medium text-[#0071bc]
                    transition
                    hover:bg-emerald-100/70
                    active:scale-[0.98]
                    ${isActive ? "bg-emerald-100 text-green-700" : ""}
                    `
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
