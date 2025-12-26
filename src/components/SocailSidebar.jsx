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
      gradient: "bg-gradient-to-br from-blue-600 to-blue-500",
      link: "https://facebook.com/yourpage",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      gradient:
        "bg-gradient-to-br from-purple-600 via-pink-500 to-red-500",
      link: "https://instagram.com",
    },
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      gradient: "bg-gradient-to-br from-blue-700 to-blue-600",
      link: "https://linkedin.com",
    },
    {
      icon: FaYoutube,
      label: "YouTube",
      gradient: "bg-gradient-to-br from-red-600 to-red-500",
      link: "https://youtube.com",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      gradient: "bg-gradient-to-br from-green-500 to-green-400",
      link: "https://wa.me/1234567890",
    },
    {
      icon: FaPhone,
      label: "Call Us",
      gradient: "bg-gradient-to-br from-[#0071BC] to-[#005fa3]",
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
          <div key={index} className="group relative flex items-center justify-end">

            {/* ================= SLIDING LABEL ================= */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute right-full top-1/2 -translate-y-1/2
                w-0 overflow-hidden
                bg-white text-gray-800
                font-medium whitespace-nowrap
                flex items-center
                transition-all duration-300 ease-out
                text-sm
                group-hover:w-40 group-focus-within:w-40
                shadow-xl border border-gray-200
                rounded-full
              "
            >
              <span className="px-4">{item.label}</span>
            </div>

            {/* ================= ICON (CIRCLE + ROLL) ================= */}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              title={item.label}
              className={`
                ${item.gradient}
                text-white
                flex items-center justify-center
                w-12 h-12
                rounded-full
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
                  text-xl
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
