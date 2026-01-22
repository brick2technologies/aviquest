import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";

const slides = [
  {
    id: 1,
    title: (<>Advancing Poultry Health with <span className="block text-blue-400">Aviquest Healthcare</span></>),
    description: "Delivering research-driven poultry feed supplements designed to enhance health and support sustainable farming practices worldwide.",
    cta: true,
  },
  {
    id: 2,
    title: (<>Stronger Shells. <br className="hidden md:block" /> <span className="text-blue-400">Healthier Eggs.</span></>),
    description: "Science-backed nutrition that improves eggshell integrity, reduces breakage, and ensures consistent high-quality production.",
  },
  {
    id: 3,
    title: (<>Resilient White Hens <span className="block text-blue-400">Predictable Output</span></>),
    description: "Optimized nutritional profiles that support the vitality, longevity, and long-term productivity of white layer hens.",
  },
];

const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

export default function HeroSection() {
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  const stopAutoplay = useCallback(() => { if (timeoutRef.current) clearInterval(timeoutRef.current); }, []);
  const handleNext = useCallback(() => { setIsTransitioning(true); setIndex((prev) => prev + 1); }, []);
  
  const startAutoplay = useCallback(() => {
    stopAutoplay();
    timeoutRef.current = setInterval(handleNext, 6000);
  }, [handleNext, stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [index, startAutoplay, stopAutoplay]);

  const handleTransitionEnd = () => {
    if (index === extendedSlides.length - 1) { setIsTransitioning(false); setIndex(1); }
    if (index === 0) { setIsTransitioning(false); setIndex(extendedSlides.length - 2); }
  };

  return (
    <section className="mt-[100px] md:mt-[120px] h-[75vh] md:h-[calc(100vh-160px)] w-full relative">
      <div className="mx-auto max-w-[95%] h-full">
        <div className="relative h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
          
          {/* BASE GRADIENT LAYER */}
          <div className="absolute inset-0 z-0 animate-gradient-move bg-[length:400%_400%] bg-gradient-to-br from-emerald-800 via-blue-900 to-emerald-700" />

          {/* CHICK & EGG PATTERN OVERLAY */}
          <div 
            className="absolute inset-0 z-1 opacity-[0.07] mix-blend-overlay pointer-events-none animate-pulse-slow"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm30 30c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zM10 40c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm35-25c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3Ccircle cx='45' cy='10' r='2'/%3E%3Ccircle cx='15' cy='50' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* DARK VIGNETTE (For readability) */}
          <div className="absolute inset-0 z-2 bg-radial-gradient from-transparent via-black/10 to-black/40" />

          <div className="relative z-10 h-full overflow-hidden">
            <div
              onTransitionEnd={handleTransitionEnd}
              className="flex h-full"
              style={{
                transform: `translateX(-${index * 100}%)`,
                transition: isTransitioning ? "transform 800ms cubic-bezier(0.4, 0, 0.2, 1)" : "none",
              }}
            >
              {extendedSlides.map((slide, i) => (
                <div key={i} className="min-w-full h-full flex items-center justify-center relative">
                  <div className="px-6 md:px-20 max-w-4xl text-white text-center z-20">
                    <h1 className="font-chillax text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight drop-shadow-2xl">
                      {slide.title}
                    </h1>
                    <p className="mt-6 mx-auto max-w-2xl text-white/90 text-lg md:text-xl font-light leading-relaxed drop-shadow-lg">
                      {slide.description}
                    </p>
                    {slide.cta && (
                      <div className="mt-10">
                        <Link to="/products">
                          <button className="px-10 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white transition-all duration-300 font-bold text-lg shadow-xl cursor-pointer">
                            Explore Products
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}