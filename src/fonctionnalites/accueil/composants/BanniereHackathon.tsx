"use client";

import Image from "next/image";
import Link from "next/link";

export default function BanniereHackathon() {
  return (
    <section className="w-full max-w-screen-2xl px-4 mb-8">
      <div className="relative w-full bg-black rounded-xl overflow-hidden flex flex-col md:flex-row items-stretch min-h-[240px]">
        <div className="hidden md:block absolute right-[245px] top-0 bottom-0 w-0 h-0 border-l-[95px] border-l-transparent border-t-[240px] border-t-[#fd800a] pointer-events-none" />
        <div className="hidden md:block absolute right-[155px] top-0 bottom-0 w-0 h-0 border-l-[95px] border-l-transparent border-t-[240px] border-t-[#FFA500] pointer-events-none" />
        <div className="flex-1 px-6 py-8 md:px-8 md:py-5 z-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white font-extrabold text-base tracking-tight font-b612">GHOSTECH</span>
            <span className="bg-[#fd800a] text-white hover:bg-[#FFA500] text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">IDENTITÉ GLOBALE</span>
          </div>
          <p className="text-white font-bold text-base leading-snug max-w-md mb-2">
            Construire. Impacter. Conquérir. <br className="hidden md:block" />
          </p>
          <p className="text-white/75 text-sm leading-relaxed max-w-sm mb-4">
            La tech, pour tous, en Afrique.<br className="hidden md:block" />
            Développer les talents, construire des solutions et créer de l’impact.
          </p>
          <Link href="/hackathon" className="inline-block bg-[#fd800a] text-white text-xs font-semibold px-4 py-1.5 rounded border border-white hover:bg-[#FFA500] hover:text-white transition-all duration-200 w-fit">
            Découvrir l’identité
          </Link>
        </div>
        <div className="relative w-full h-[200px] md:w-[240px] md:h-auto flex-shrink-0 z-10 overflow-hidden bg-black md:bg-transparent">
          <Image src="/header_photo/h.png" alt="Talents et technologies Ghostech" fill sizes="(max-width: 768px) 100vw, 120px" className="object-cover object-center md:object-top" />
        </div>
      </div>
    </section>
  );
}
