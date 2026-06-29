"use client";

import { useState, useEffect } from "react";

const EXP_IMAGES = ["/Galeries/img9.jpeg", "/Galeries/img3.jpg", "/Galeries/img8.jpeg"];

export default function SectionExperimente() {
  const [expSlideIndex, setExpSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpSlideIndex((prev) => (prev + 1) % EXP_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-24 px-4 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col items-center">
        <div className="text-center max-w-3xl mb-16">
          <h2 className="text-3xl md:text-[40px] font-bold font-b612 text-[#357dab] mb-4">
            Experimente une nouvelle facon d&apos;apprendre
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto">
            La methode Ghostech : un apprentissage innovant, efficace et stimulant.<br />
            Decouvre les avantages de notre approche unique :
          </p>
        </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 w-full max-w-6xl mb-16">
        {[
          { icon: "bolt", title: "Une plateforme d'apprentissage interactive et collaborative", desc: "Travaille sur des projets concrets, partage tes idees et progresse en equipe." },
          { icon: "local_library", title: "Des cours dynamiques et captivants", desc: "Apprends en pratiquant, a travers des exercices stimulants et des challenges qui te maintiendront motive." },
          { icon: "diversity_3", title: "Un environnement d'apprentissage riche et stimulant", desc: "Participe a des evenements et des workshops exclusifs, rencontre des professionnels du secteur et developpe tes competences relationnelles." },
          { icon: "schedule", title: "Une flexibilite totale pour un apprentissage personnalise", desc: "Choisis entre des cours en presentiel et un apprentissage en ligne, adapte ton rythme et optimise ton temps." },
        ].map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col text-left h-full gap-2 sm:gap-4">
            <span className="material-symbols-rounded text-[#357dab] text-[24px] sm:text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
            <h4 className="font-bold text-[13px] sm:text-[16px] text-[#0F2137] leading-snug">{item.title}</h4>
            <p className="text-gray-500 text-[12px] sm:text-[13.5px] leading-relaxed line-clamp-4 sm:line-clamp-none">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="relative w-full max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/9]">
          {EXP_IMAGES.map((src, index) => (
            <div key={src} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === expSlideIndex ? "opacity-100" : "opacity-0"}`}>
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <button onClick={() => setExpSlideIndex((prev) => (prev - 1 + EXP_IMAGES.length) % EXP_IMAGES.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 shadow-md flex items-center justify-center hover:bg-white transition-colors" aria-label="Precedent">
          <svg className="w-5 h-5 text-[#0F2137]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={() => setExpSlideIndex((prev) => (prev + 1) % EXP_IMAGES.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 shadow-md flex items-center justify-center hover:bg-white transition-colors" aria-label="Suivant">
          <svg className="w-5 h-5 text-[#0F2137]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {EXP_IMAGES.map((_, index) => (
            <button key={index} onClick={() => setExpSlideIndex(index)} className={`transition-all duration-300 rounded-full ${index === expSlideIndex ? "w-8 h-2 bg-[#357dab] shadow-[0_0_8px_rgba(10,128,128,0.8)]" : "w-2 h-2 bg-gray-400 hover:bg-gray-600"}`} />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
