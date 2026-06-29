"use client";

import Image from "next/image";
import Link from "next/link";

export default function BanniereHackathon() {
  return (
    <section className="w-full max-w-7xl px-4 mb-8">
      <div className="relative w-full bg-[#022329] rounded-xl overflow-hidden flex flex-col md:flex-row items-stretch min-h-[240px]">
        <div className="hidden md:block absolute right-[245px] top-0 bottom-0 w-0 h-0 border-l-[95px] border-l-transparent border-t-[240px] border-t-[#f9c100] pointer-events-none" />
        <div className="hidden md:block absolute right-[155px] top-0 bottom-0 w-0 h-0 border-l-[95px] border-l-transparent border-t-[240px] border-t-[#ec407a] pointer-events-none" />
        <div className="flex-1 px-6 py-8 md:px-8 md:py-5 z-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white font-extrabold text-base tracking-tight font-b612">ghostech</span>
            <span className="bg-[#357dab] text-white hover:bg-teal-700 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">HACKATHON</span>
          </div>
          <p className="text-white font-bold text-base leading-snug max-w-md mb-2">
            Participez a nos hackathons pour travailler en equipe, relever des defis reels <br className="hidden md:block" />
          </p>
          <p className="text-white/75 text-sm leading-relaxed max-w-sm mb-4">
            connecter avec des passionnes de la tech et decrocher des distinctions exclusives..<br className="hidden md:block" />
            Pret a faire en sorte que ce jour compte ?
          </p>
          <Link href="/hackathon" className="inline-block bg-[#357dab] text-white text-xs font-semibold px-4 py-1.5 rounded border border-white hover:bg-teal-700 hover:text-white transition-all duration-200 w-fit">
            Participer
          </Link>
        </div>
        <div className="relative w-full h-[200px] md:w-[240px] md:h-auto flex-shrink-0 z-10 overflow-hidden bg-[#0A2E35] md:bg-transparent">
          <Image src="/header_photo/h2.svg" alt="Formation Ghostech" fill sizes="(max-width: 768px) 100vw, 120px" className="object-cover object-center md:object-top" />
        </div>
      </div>
    </section>
  );
}
