"use client";

import { FAQ_ITEMS } from "@/src/fonctionnalites/accueil/donnees/faq";

/**
 * SectionFAQ — Section FAQ avec fond sombre et décorations SVG.
 */
export default function SectionFAQ() {
  return (
    <section className="relative w-full bg-[#022329] text-white py-20 px-4 overflow-hidden min-h-[600px] flex flex-col justify-center">
      <div className="absolute left-0 bottom-0 top-0 w-full md:w-[35%] pointer-events-none select-none z-0 hidden md:block">
        <svg className="w-full h-full object-left-bottom" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-50 500 C 150 500, 300 350, 250 100 C 220 -50, 50 -100, -50 -50" stroke="#39779e" strokeWidth="35" strokeLinecap="round" fill="none" />
          <path d="M-20 280 L 70 380 L 220 180" stroke="#39779e" strokeWidth="35" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M-80 520 L 160 520 L 140 620 L -80 620 Z" fill="white" />
          <rect x="-80" y="545" width="230" height="12" fill="#39779e" />
          <rect x="-80" y="575" width="210" height="12" fill="#39779e" />
        </svg>
      </div>
      <div className="absolute right-[-5%] top-[10%] w-[250px] h-[250px] md:w-[450px] md:h-[450px] text-[#39779e] pointer-events-none select-none z-0 animate-float-slow">
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>
      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 font-b612 text-white">FAQ</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed opacity-90">
            Consultez notre FAQ sans tarder car elle a été conçue pour vous ! <br />
            Vous pourriez y trouver des informations utiles.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl items-stretch mb-14">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="relative bg-[#0A2E35]/90 border border-teal-950/50 rounded-xl p-7 pt-12 flex flex-col justify-between shadow-xl backdrop-blur-sm">
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-[#10383F] border-2 border-[#0A2E35] flex items-center justify-center shadow-md">
                <span className="text-gray-400 font-serif text-2xl font-bold leading-none select-none">&ldquo;</span>
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-white mb-4 leading-snug">{item.q}</h3>
                <p className="text-[13px] text-gray-300 leading-relaxed font-light text-justify opacity-85">{item.a}</p>
              </div>
              <div className="mt-4 pt-2 flex justify-start">
                <span className="text-[#e49834] font-serif text-xl font-bold leading-none select-none opacity-80">&bdquo;</span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <button className="bg-[#39779e] text-white text-xs md:text-sm font-semibold px-6 py-2.5 rounded-sm shadow-md hover:bg-[#c2083b] hover:scale-105 transition duration-200 uppercase tracking-wider">
            Voir la FAQ
          </button>
        </div>
      </div>
    </section>
  );
}
