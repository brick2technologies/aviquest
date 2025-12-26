import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

const SocialSidebar = () => {
  const socialLinks = [
    {
      icon: FaFacebookF,
      label: "Facebook",
      gradient: "from-blue-500 to-blue-700",
      link: "https://facebook.com/yourpage",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      gradient: "from-purple-600 via-pink-500 to-red-500",
      link: "https://instagram.com",
    },
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      gradient: "from-blue-600 to-blue-800",
      link: "https://linkedin.com",
    },
    {
      icon: FaYoutube,
      label: "YouTube",
      gradient: "from-red-500 to-red-700",
      link: "https://youtube.com",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      gradient: "from-green-500 to-green-600",
      link: "https://wa.me/1234567890",
    },
    {
      icon: FaPhone,
      label: "Call Us",
      gradient: "from-[#0071BC] to-[#005fa3]",
      link: "tel:+1234567890",
    },
  ];

  return (
    <nav
      aria-label="Social media links"
      className="
        fixed right-0 top-1/2 -translate-y-1/2 z-50
        flex flex-col gap-4
      "
    >
      {socialLinks.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="group relative flex items-center justify-end"
          >
            {/* ================= GLASS LABEL ================= */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute right-full top-1/2 -translate-y-1/2
                w-0 overflow-hidden
                backdrop-blur-xl
                bg-white/60
                text-slate-800
                font-medium
                whitespace-nowrap
                flex items-center
                transition-all duration-300 ease-out
                text-sm
                group-hover:w-40 group-focus-within:w-40
                border border-white/40
                shadow-lg
                rounded-full
              "
            >
              <span className="px-4">{item.label}</span>
            </div>

            {/* ================= GLASS CIRCLE ICON ================= */}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              title={item.label}
              className={`
                relative
                w-12 h-12
                flex items-center justify-center
                rounded-full
                backdrop-blur-xl
                bg-gradient-to-br ${item.gradient}
                bg-opacity-80
                border border-white/40
                shadow-xl
                transition-all duration-300
                translate-x-0
                group-hover:-translate-x-full
                group-focus-visible:-translate-x-full
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#0071BC]
                focus-visible:ring-offset-2
              `}
            >
              <Icon
                className="
                  text-white text-xl
                  transition-transform duration-500 ease-out
                  group-hover:rotate-[360deg]
                  group-focus-visible:rotate-[360deg]
                "
                aria-hidden="true"
              />
            </a>
          </div>
        );
      })}
    </nav>
  );
};

export default SocialSidebar;
