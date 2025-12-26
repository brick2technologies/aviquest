export default function HeroSection() {
  return (
    <section
      className="
        mt-[120px]
        h-[70vh] md:h-[calc(100vh-120px)]
        w-full
      "
    >
      {/* ===== SAME WRAPPER AS NAVBAR ===== */}
      <div className="mx-auto max-w-[95%] px-0 h-full">
        <div
          className="
            relative h-full
            rounded-[2.5rem]
            overflow-hidden
            bg-emerald-50/80
            backdrop-blur-md
            border border-emerald-200
            shadow-[0_12px_40px_rgba(16,185,129,0.18)]
          "
        >
          {/* ================= BACKGROUND VIDEO ================= */}

          {/* MOBILE VIDEO */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="
              absolute inset-0
              h-full w-full
              object-cover
              md:hidden
            "
          >
            <source
              src="/hero-aviquest-mobile.mp4"
              type="video/mp4"
            />
          </video>

          {/* DESKTOP + TABLET VIDEO */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="
              absolute inset-0
              h-full w-full
              object-cover
              hidden md:block
            "
          >
            <source
              src="/hero-aviquest-desktop.mp4"
              type="video/mp4"
            />
          </video>

          {/* ================= OVERLAY ================= */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-black/30 to-blue-900/40" />

          {/* ================= CONTENT ================= */}
          <div className="relative z-10 h-full flex items-center">
            <div className="px-6 md:px-14 max-w-2xl text-white">
              <h1 className="font-chillax text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
                Advancing Poultry Health with
                <span className="block text-[#0071bc]">
                  Aviquest Healthcare
                </span>
              </h1>

              <p className="mt-5 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                Aviquest Healthcare delivers research-driven poultry feed
                supplements designed to enhance health, improve performance, and
                support sustainable farming practices.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <button className="px-7 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition font-medium">
                  Explore Products
                </button>

                <button className="px-7 py-3 rounded-full border border-white/60 hover:bg-white/10 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
