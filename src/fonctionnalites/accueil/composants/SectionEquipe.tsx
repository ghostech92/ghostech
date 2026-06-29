"use client";

import Image from "next/image";
import { useRef } from "react";
import { EQUIPE_ACCUEIL } from "@/src/fonctionnalites/accueil/donnees/equipe-membres";

/**
 * SectionEquipe — Carrousel horizontal des membres de l'équipe.
 */
export default function SectionEquipe() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: -280, behavior: "smooth" });
  };
  const scrollRight = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: 280, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white py-24 px-4 flex justify-center relative">
      <div className="w-full max-w-7xl flex flex-col items-center text-center">
        <h3 className="text-sm font-bold text-[#357dab] uppercase tracking-widest mb-3">Notre Équipe</h3>
        <h2 className="text-3xl md:text-[40px] font-bold font-b612 text-[#0F2137] mb-4">Rencontrez nos talents</h2>
        <p className="text-[16px] text-gray-500 max-w-[500px] mb-12 leading-relaxed">
          Découvrez les talents passionnés de technologie et d&apos;innovation derrière la vision de Ghostech.
        </p>
        <div className="relative w-full px-4 md:px-12">
        <button onClick={scrollLeft} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg items-center justify-center hover:bg-gray-50 hover:shadow-xl active:scale-95 transition-all text-[#0F2137]">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={scrollRight} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg items-center justify-center hover:bg-gray-50 hover:shadow-xl active:scale-95 transition-all text-[#0F2137]">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div ref={carouselRef} className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-none pb-6 scroll-smooth" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {EQUIPE_ACCUEIL.map((member, i) => (
            <div key={i} className="flex flex-col items-center shrink-0 w-[200px] sm:w-[240px] md:w-[280px] snap-start bg-white rounded-2xl p-3 sm:p-4 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-full aspect-[4/5] bg-gray-50 rounded-2xl mb-3 sm:mb-4 relative overflow-hidden">
                <Image src={member.img} alt={member.name} fill className="object-cover" />
              </div>
              <h4 className="text-[14px] sm:text-[17px] font-bold text-[#0F2137] mb-1 text-center">{member.name}</h4>
              <p className="text-[12px] sm:text-[14px] text-[#357dab] font-semibold mb-2 sm:mb-3 text-center line-clamp-2">{member.role}</p>
              <div className="flex gap-3 text-xs mt-auto">
                <span className="text-gray-400 text-[10px] sm:text-[11px] font-medium">Ghostech</span>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
