"use client";

import Image from "next/image";

export default function SectionBlog() {
  return (
    <section className="w-full bg-white py-24 px-4 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col items-center">
        <h2 className="text-3xl md:text-[36px] font-bold font-b612 text-[#0F2137] text-center mb-2">Nos dernieres actualites et projets</h2>
        <p className="text-gray-500 text-center mb-16 text-[15px]">Restez informes des avancees de Ghostech.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
          <div className="w-full aspect-[16/10] bg-gray-100 relative">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nT4KbtG11sA" title="Video principale Ghostech" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0"></iframe>
          </div>
          <div className="p-6 flex flex-col flex-1 justify-between">
            <div>
              <h4 className="font-bold text-[18px] text-[#0F2137] mb-3 leading-snug">Lancement officiel de l&apos;organisation Ghostech a l&apos;IUA</h4>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-4">Le 03 mars 2025, une nouvelle ere technologique commence avec des talents passionnes.</p>
            </div>
            <span className="text-xs text-gray-400 font-medium">03 Mars 2025 - Lecture 5 min</span>
          </div>
        </div>
        <div className="flex flex-col gap-6 h-full">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between flex-1">
            <h4 className="font-bold text-[18px] md:text-[20px] text-[#0F2137] leading-snug mb-2">L&apos;importance de l&apos;entrepreneuriat technologique chez les jeunes</h4>
            <span className="text-xs text-gray-400">Mars 2025</span>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 shrink-0">
            <div className="w-full aspect-[16/9] bg-gray-100 relative">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uyDgJTrrwhE" title="Short YouTube 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0"></iframe>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-[16px] text-[#0F2137]">Atelier d&apos;innovation et de formation</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 h-full">
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 relative group flex-1 min-h-[220px]">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/X-U1IpT2K78" title="Short YouTube 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0"></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white pointer-events-none">
              <h4 className="font-bold text-[16px] leading-snug">Developper des solutions pour l&apos;Afrique numerique</h4>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 relative group flex-1 min-h-[220px]">
            <Image src="/Galeries/Haka/haka2.png" alt="Blog post" fill className="object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white pointer-events-none">
              <h4 className="font-bold text-[16px] leading-snug">Hackathon Tech : Les meilleurs projets recompenses</h4>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
