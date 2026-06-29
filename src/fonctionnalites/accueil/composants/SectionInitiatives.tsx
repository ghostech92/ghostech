"use client";

import Link from "next/link";
import { INITIATIVES } from "@/src/fonctionnalites/accueil/donnees/initiatives";

export default function SectionInitiatives() {
  return (
    <section className="w-full bg-[#F9FAFC] py-24 px-4 flex justify-center border-t border-b border-gray-200">
      <div className="max-w-6xl w-full flex flex-col items-center">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-[36px] font-bold font-b612 text-[#0F2137] mb-4">Nos autres initiatives</h2>
          <p className="text-[16px] text-gray-500 max-w-xl">Des projets au coeur de l&apos;ecosysteme technologique africain.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-10 md:gap-y-16 w-full">
          {INITIATIVES.map((service, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-3 md:gap-4 items-start bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <span className="material-symbols-rounded text-[24px] md:text-[28px] shrink-0 mt-1 text-[#357dab]" style={{ fontVariationSettings: "'FILL' 1" }}>{service.icon}</span>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h4 className="text-[15px] md:text-[17px] font-bold text-[#0F2137] mb-1 md:mb-2 leading-tight">{service.title}</h4>
                  <p className="text-[12px] md:text-[14px] text-gray-500 leading-relaxed mb-3 line-clamp-3 md:line-clamp-none">Des solutions pensees pour l&apos;avenir numerique de l&apos;Afrique.</p>
                </div>
                <Link href="#" className="text-[#357dab] font-bold text-[13px] md:text-[14px] flex items-center gap-1 hover:underline mt-auto">En savoir plus <span className="hidden md:inline">→</span></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
