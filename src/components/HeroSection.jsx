import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";

const slides = [
  {
    title: (
      <>
        Advancing Poultry Health with{" "}
        <span className="block text-[#0071bc]">Aviquest Healthcare</span>
      </>
    ),
    description:
      "Aviquest Healthcare delivers research-driven poultry feed supplements designed to enhance health, improve performance, and support sustainable farming practices.",
    cta: true,
  },
  {
    title: (
      <>
        Stronger Shells. <span className="block text-[#0071bc]">Healthier Eggs.</span>
      </>
    ),
    description:
      "Science-backed nutrition that improves eggshell strength, reduces breakage, and ensures consistent egg production.",
  },
  {
    title: (
      <>
        Healthy White Hens{" "}
        <span className="block text-[#0071bc]">Drive Predictable Output</span>
      </>
    ),
    description:
      "Balanced nutrition supports vitality, resilience, and long-term productivity in white layer hens.",
  },
];

const extendedSlides = [
  slides[slides.length - 1],
  ...slides,
  slides[0],
];

export default function HeroSection() {
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);
  const timeoutRef = useRef(null);

  // 1. Define helper functions BEFORE useEffect
  const stopAutoplay = useCallback(() => {
    if (timeoutRef.current) clearInterval(timeoutRef.current);
  }, []);

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setIndex((prev) => prev + 1);
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    timeoutRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  }, [handleNext, stopAutoplay]);

  // 2. useEffect now has access to the functions
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [index, startAutoplay, stopAutoplay]);

  const handleDotClick = (i) => {
    setIsTransitioning(true);
    setIndex(i + 1);
  };

  const handleTransitionEnd = () => {
    if (index === extendedSlides.length - 1) {
      setIsTransitioning(false);
      setIndex(1);
    }
    if (index === 0) {
      setIsTransitioning(false);
      setIndex(extendedSlides.length - 2);
    }
  };

  return (
    <section className="mt-[120px] h-[70vh] md:h-[calc(100vh-120px)] w-full">
      <div className="mx-auto max-w-[95%] h-full">
        <div className="relative h-full rounded-[2.5rem] overflow-hidden bg-emerald-50/80 backdrop-blur-md border border-emerald-200 shadow-[0_12px_40px_rgba(16,185,129,0.18)]">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-black/30 to-blue-900/40 z-0" />

          <div className="relative z-10 h-full overflow-hidden">
            <div
              ref={sliderRef}
              onTransitionEnd={handleTransitionEnd}
              className="flex h-full"
              style={{
                transform: `translateX(-${index * 100}%)`,
                transition: isTransitioning ? "transform 700ms ease-in-out" : "none",
              }}
            >
              {extendedSlides.map((slide, i) => (
                <div
                  key={i}
                  className="min-w-full h-full flex items-center justify-center"
                >
                  <div className="px-6 md:px-14 max-w-2xl text-white text-center">
                    <h1 className="font-chillax text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
                      {slide.title}
                    </h1>
                    <p className="mt-5 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                      {slide.description}
                    </p>
                    {slide.cta && (
                      <div className="mt-7 flex flex-wrap gap-4 justify-center">
                        <Link to="/products">
                          <button className="px-7 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition font-medium">
                            Explore Products
                          </button>
                        </Link>
                        <Link to="/about">
                          <button className="px-7 py-3 rounded-full border border-white/60 hover:bg-white/10 transition">
                            Learn More
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, i) => {
              const activeDot =
                index === i + 1 ||
                (index === 0 && i === slides.length - 1) ||
                (index === extendedSlides.length - 1 && i === 0);

              return (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeDot ? "bg-white w-6" : "bg-white/50 w-2.5"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}