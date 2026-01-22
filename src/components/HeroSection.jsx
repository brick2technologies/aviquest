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
          
          {/* MOVING GRADIENT LAYER */}
          <div 
            className="absolute inset-0 z-0 animate-gradient-move bg-[length:400%_400%] bg-gradient-to-br from-emerald-800 via-blue-900 to-emerald-700" 
          />

          {/* SOFT GLASS OVERLAY */}
          <div className="absolute inset-0 z-1 bg-black/20 backdrop-blur-[1px]" />

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
                    {/* TYPOGRAPHY ENHANCEMENTS */}
                    <h1 className="font-chillax text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight drop-shadow-lg">
                      {slide.title}
                    </h1>
                    
                    <p className="mt-6 mx-auto max-w-2xl text-white/80 text-base md:text-xl font-light leading-relaxed drop-shadow-md">
                      {slide.description}
                    </p>

                    {slide.cta && (
                      <div className="mt-10 flex flex-wrap gap-4 justify-center">
                        <Link to="/products">
                          <button className="group relative px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-emerald-500/40 cursor-pointer overflow-hidden">
                            <span className="relative z-10">Explore Products</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* REFINED DOTS PAGINATION */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setIsTransitioning(true); setIndex(i + 1); }}
                className={`transition-all duration-500 cursor-pointer ${
                  (index === i + 1 || (index === 0 && i === slides.length - 1) || (index === extendedSlides.length - 1 && i === 0)) 
                    ? "bg-white w-10 h-1.5 rounded-full" 
                    : "bg-white/30 w-2 h-2 rounded-full hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}