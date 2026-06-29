"use client";

import Image from "next/image";

export default function SectionRejoindre() {
  return (
    <section className="w-full bg-white py-24 px-4 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 border-b border-gray-200 w-full max-w-3xl pb-4 mb-16 text-[15px] font-medium text-gray-400">
          <span className="text-[#0F2137] border-b-2 border-[#357dab] pb-4 cursor-pointer font-bold">Pourquoi rejoindre Ghostech</span>
          <span className="hover:text-[#0F2137] cursor-pointer pb-4">Notre vision pour l&apos;Afrique</span>
          <span className="hover:text-[#0F2137] cursor-pointer pb-4">Nos programmes de formation</span>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-[38px] font-bold font-b612 text-[#02073E] leading-tight">
            Nous transformons vos idees technologiques en projets concrets
          </h2>
          <p className="text-gray-500 text-[16px] leading-relaxed">
            Rejoignez une communaute de talents et d&apos;experts passionnes par le code, le design et l&apos;innovation pour batir ensemble l&apos;avenir technologique.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] sm:text-[15px] font-medium text-[#0F2137]">
            {[
              { icon: "stars", label: "Competences de pointe" },
              { icon: "groups", label: "Reseau d'experts" },
              { icon: "public", label: "Impact en Afrique" },
              { icon: "lightbulb", label: "Projets innovants" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl shadow-sm">
                <span className="material-symbols-rounded text-[#357dab] text-[20px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <button className="text-[#357dab] font-bold text-[15px] flex items-center gap-2 pt-4">
            Decouvrir plus <span>→</span>
          </button>
        </div>
        <div className="flex-1 relative w-full aspect-[4/3] max-w-lg bg-gray-50 rounded-3xl overflow-hidden shadow-xl">
          <Image src="/Galeries/img_1.png" alt="Framework explanation" fill className="object-contain" />
        </div>
        </div>
      </div>
    </section>
  );
}
