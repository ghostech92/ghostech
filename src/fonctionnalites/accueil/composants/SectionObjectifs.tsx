"use client";

import { useRef } from "react";
import { OBJECTIFS } from "@/src/fonctionnalites/accueil/donnees/objectifs";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface SectionObjectifsProps {
  scrollY: number;
}

const CARTE_SUPPLÉMENTAIRE = {
  title: "Culture",
  desc: "Innovation, impact, collaboration, apprentissage, excellence et engagement africain guident notre action.",
};

export default function SectionObjectifs({ scrollY }: SectionObjectifsProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCards = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    const firstCard = carousel?.firstElementChild;

    if (!carousel || !(firstCard instanceof HTMLElement)) return;

    const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap) || 0;
    carousel.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  const toutesLesCartes = [...OBJECTIFS, CARTE_SUPPLÉMENTAIRE];

  return (
    <div className="w-full bg-white flex flex-col items-center relative overflow-hidden pt-0 pb-20">
      
      <div
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-5"
        style={{
          transform: `translateY(${scrollY * 0.08}px)`,
          background: "radial-gradient(circle at 80% 20%, #fd800a 0%, transparent 60%)",
        }}
      />

      <section className="w-full relative z-10 flex flex-col gap-12">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 px-4 md:px-8 max-w-7xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight leading-[1.05] max-w-3xl font-b612">
            Vision, <span className="text-[#fd800a]">mission</span>&nbsp;&amp; objectif
          </h2>

          <div className="flex flex-col items-end gap-3">
            <span className="block w-full max-w-[360px] text-[10px] sm:text-[11px] md:text-xs text-zinc-400 font-medium tracking-wide text-right">
              Développer les talents, construire des solutions,
              <br />
              créer de l’impact.
            </span>
            <div className="flex items-center gap-2">
              <button 
                aria-label="Précédent"
                onClick={() => scrollCards(-1)}
                className="w-12 h-12 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-800 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                aria-label="Suivant"
                onClick={() => scrollCards(1)}
                className="w-12 h-12 rounded-full bg-[#fd800a] hover:brightness-95 flex items-center justify-center text-white transition-all shadow-md"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 pl-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
          {toutesLesCartes.map((obj, i) => {
            const isOrange = i === 0;
            const isDark = i === 2;

            return (
              <div 
                key={i} 
                className={`w-[82vw] sm:w-[320px] md:w-[340px] lg:w-[350px] flex-none snap-start rounded-[2rem] p-6 flex flex-col justify-between min-h-[290px] transition-all duration-300 shadow-lg hover:shadow-xl relative group cursor-pointer ${
                  isOrange 
                    ? "bg-gradient-to-br from-[#fd800a] to-[#e06c00] text-white" 
                    : isDark 
                    ? "bg-[#111111] text-white" 
                    : "bg-white text-zinc-900 border border-zinc-200"
                }`}
              >
                <div className="flex flex-col gap-2">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${isOrange || isDark ? "text-white/70" : "text-[#fd800a]"}`}>
                    Pilier 0{i + 1}
                  </span>
                  <h3 className={`text-xl font-extrabold tracking-tight leading-snug ${isOrange || isDark ? "text-white" : "text-zinc-900"}`}>
                    {obj.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  <p className={`text-xs sm:text-[13px] leading-relaxed line-clamp-3 ${isOrange || isDark ? "text-white/85" : "text-zinc-600"}`}>
                    {obj.desc}
                  </p>

                  <div className={`flex items-center justify-between pt-3 border-t ${isOrange || isDark ? "border-white/15" : "border-zinc-100"}`}>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${isOrange || isDark ? "text-white/90" : "text-zinc-800"}`}>
                      Identité globale
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isOrange 
                        ? "bg-white text-[#fd800a]" 
                        : isDark 
                        ? "bg-white text-zinc-900" 
                        : "bg-zinc-900 text-white"
                    }`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>

      </section>
    </div>
  );
}