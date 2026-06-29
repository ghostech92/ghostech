"use client";

import { OBJECTIFS } from "@/src/fonctionnalites/accueil/donnees/objectifs";

/**
 * SectionObjectifs — Section "Nos Objectifs" avec fond parallaxe.
 */
interface SectionObjectifsProps {
  scrollY: number;
}

export default function SectionObjectifs({ scrollY }: SectionObjectifsProps) {
  return (
    <div className="w-full bg-white flex flex-col items-center relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.08}px)`,
          background: "radial-gradient(circle at 20% 30%, #357dab 0%, transparent 70%)",
        }}
      />
      <section className="w-full max-w-6xl py-24 px-4 flex flex-col items-start relative z-10">
        <h2 className="text-3xl md:text-[40px] font-bold font-b612 text-[#0F2137] mb-4">Nos Objectifs</h2>
        <div className="w-12 h-1 bg-[#357dab] rounded-full mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {OBJECTIFS.map((obj, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start text-left gap-4">
              <span className="material-symbols-rounded text-4xl text-[#357dab]" style={{ fontVariationSettings: "'FILL' 1" }}>{obj.icon}</span>
              <h4 className="text-[20px] font-bold text-[#0F2137]">{obj.title}</h4>
              <p className="text-[15px] text-gray-500 leading-relaxed">{obj.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
