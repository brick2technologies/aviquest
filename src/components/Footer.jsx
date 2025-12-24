import { Phone, Linkedin, Facebook, Globe, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {/* ================= TOP CTA ================= */}
        <div
          className="
          flex flex-col md:flex-row items-center justify-between
          gap-6
          bg-emerald-50/90
            backdrop-blur-md
            border border-emerald-200
            shadow-[0_6px_20px_rgba(16,185,129,0.15)]
          rounded-2xl
          px-8 py-6
        "
        >
          <h3 className="text-lg md:text-xl font-semibold text-[#0071BC]">
            Excited? Us too. Let’s get moving.
          </h3>

          <button
            className="
              inline-flex items-center gap-2
              bg-[#0071BC]
              text-white
              px-6 py-3
              rounded-full
              text-sm font-medium
              hover:opacity-90
              transition
            "
          >
            Schedule a Call
            <Phone size={16} />
          </button>
        </div>

        {/* ================= MAIN FOOTER GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* BRAND CARD */}
          <div
            className="
    bg-emerald-50/90
            backdrop-blur-md
           
            border border-emerald-600
            shadow-[0_6px_20px_rgba(16,185,129,0.15)]
    rounded-2xl
    p-8
    flex items-center justify-center
  "
          >
            <img
              src="/logo.png"
              alt="Aviquest Logo"
              className="h-32 sm:h-24 object-contain"
            />
          </div>

          {/* LINKS CARD */}
          <div
            className="
            md:col-span-2
            bg-[#0071BC]
            backdrop-blur-md
           
            border border-emerald-600
            shadow-[0_6px_20px_rgba(16,185,129,0.15)]
            rounded-2xl
            p-8
            flex flex-col justify-between
          "
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-lg text-white ">
              <a href="#" className="hover:text-[#336600]">
                Home
              </a>
              <a href="#" className="hover:text-[#336600]">
                About
              </a>
              <a href="#" className="hover:text-[#336600]">
                Products
              </a>
              <a href="#" className="hover:text-[#336600]">
                Blogs
              </a>
              <a href="#" className="hover:text-[#336600]">
                Contact
              </a>
            </div>

            <div className="flex items-center justify-between mt-10 text-xs text-white/90">
              <span>© {new Date().getFullYear()} Aviquest</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-[#0071BC]">
                  Terms
                </a>
                <a href="#" className="hover:text-[#0071BC]">
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SOCIALS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: X },
            { icon: Linkedin },
            { icon: Globe },
            { icon: Facebook },
          ].map((Item, i) => (
            <div
              key={i}
              className="
                
                rounded-2xl
                h-20
                flex items-center justify-center
                bg-emerald-50/90
            backdrop-blur-md
            border border-emerald-200
            shadow-[0_6px_20px_rgba(16,185,129,0.15)]
                hover:bg-[#0071BC]/10
                transition
              "
            >
              <Item.icon size={28} className="text-[#0071BC]" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
