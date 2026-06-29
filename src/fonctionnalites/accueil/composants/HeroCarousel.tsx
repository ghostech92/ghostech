"use client";

import Image from "next/image";
import { useEffect } from "react";
import { HERO_SLIDES } from "@/src/fonctionnalites/accueil/donnees/hero-slides";
import { useCarouselAuto } from "@/src/fonctionnalites/accueil/hooks/useCarouselAuto";
import { useCountdown } from "@/src/fonctionnalites/accueil/hooks/useCountdown";

/**
 * HeroCarousel — Section hero principale de la page d'accueil.
 * Intègre le carrousel de slides + la barre d'événements + le countdown.
 */
export default function HeroCarousel() {
  const { slideIndex, isFading, changeSlide } = useCarouselAuto(HERO_SLIDES.length, 6000, 300);
  const countdown = useCountdown("2026-08-14T00:00:00");

  // Préchargement des images
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.image;
    });
  }, []);

  return (
    <section className="relative w-full max-w-[1400px] mx-auto mt-28 px-4 sm:px-6 mb-12">
      <div className="w-full rounded-[2.5rem] bg-gradient-to-r from-[#F9C1A5] via-[#DECFDB] to-[#96C9F0] pt-10 md:pt-16 pb-0 px-6 sm:px-12 shadow-sm relative overflow-hidden">

        {/* ================= DÉCORATIONS / STICKERS ================= */}
        <div className="absolute top-[8%] left-[2%] md:left-[5%] w-[90px] h-[60px] md:w-[90px] md:h-[90px] animate-float-slow drop-shadow-lg z-0 opacity-90">
          <Image src="/decoration/d2.svg" alt="Decoration 1" fill className="object-contain" />
        </div>
        <div className="absolute bottom-[20%] left-[6%] md:left-[12%] w-[50px] h-[50px] md:w-[80px] md:h-[80px] animate-float-medium drop-shadow-md z-0 opacity-80">
          <Image src="/decoration/d3.svg" alt="Decoration 2" fill className="object-contain" />
        </div>
        <div className="absolute top-[15%] right-[25%] md:right-[35%] w-[45px] h-[45px] md:w-[70px] md:h-[70px] animate-float-fast drop-shadow-md z-0 opacity-50">
          <Image src="/decoration/d4.svg" alt="Decoration 3" fill className="object-contain" />
        </div>
        <div className="absolute bottom-[40%] right-[35%] md:right-[45%] w-[70px] h-[90px] md:w-[100px] md:h-[100px] animate-spin-slow drop-shadow-xl z-0 opacity-90">
          <Image src="/decoration/d1.svg" alt="Decoration 4" fill className="object-contain" />
        </div>

        {/* Confettis colorés subtils */}
        <div className="absolute top-[45%] left-[18%] w-3 h-3 rounded-full bg-[#FF1493] drop-shadow-sm"></div>
        <div className="absolute bottom-[45%] right-[12%] w-4 h-4 rounded-full bg-[#00BFFF] drop-shadow-sm"></div>
        <div className="absolute top-[15%] right-[15%] w-2 h-2 rounded-full bg-[#32CD32] drop-shadow-sm"></div>

        {/* Contenu principal */}
        <div className={`relative w-full flex flex-col md:flex-row items-center justify-between gap-8 pb-8 transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>

          {/* Côté Gauche (Texte) */}
          <div className="w-full md:w-[55%] flex flex-col items-start z-10">
            <nav className="flex items-center gap-1.5 text-[13px] text-gray-400 mb-6">
              <span className="hover:text-[#357dab] cursor-pointer transition-colors">Accueil</span>
              <span className="text-[#0F2137]/60">›</span>
              <span className="hover:text-[#357dab] cursor-pointer transition-colors">{HERO_SLIDES[slideIndex].mockupHeader}</span>
              <span className="text-[#0F2137]/60">›</span>
              <span className="text-[#0F2137]/80 font-medium">{HERO_SLIDES[slideIndex].highlight}</span>
            </nav>

            <h1 className="text-3xl md:text-[40px] lg:text-[48px] font-extrabold text-[#0F2137] leading-[1.1] tracking-tight mb-5 font-b612 uppercase">
              {HERO_SLIDES[slideIndex].highlight}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              {HERO_SLIDES[slideIndex].statsNum && (
                <span className="flex items-center gap-1.5 text-[13px] font-bold text-[#357dab]">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {HERO_SLIDES[slideIndex].statsNum} {HERO_SLIDES[slideIndex].statsText}
                </span>
              )}
              <span className="flex items-center gap-1.5 text-[13px] font-bold text-[#357dab]">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                {HERO_SLIDES[slideIndex].status}
              </span>
            </div>

            <p className="text-[15px] text-[#0F2137]/70 leading-relaxed max-w-[520px] mb-4">
              {HERO_SLIDES[slideIndex].titlePre && <>{HERO_SLIDES[slideIndex].titlePre} </>}
              {HERO_SLIDES[slideIndex].titlePost}
              {' '}{HERO_SLIDES[slideIndex].mockupDesc}
            </p>

            <button className="text-[#357dab] font-semibold text-[14px] hover:underline mb-6 transition-colors">
              Lire la suite
            </button>
          </div>

          {/* Côté Droit — Image unique */}
          <div className="hidden md:flex w-[40%] justify-center md:justify-end items-center relative min-h-[400px] lg:min-h-[500px]">
            <div className="relative w-[400px] h-[400px] lg:w-[550px] lg:h-[550px] transition-all duration-500">
              <Image
                src={HERO_SLIDES[slideIndex].image}
                alt="Ghostech"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="absolute right-[60px] top-0 w-2 h-2 rounded-full bg-[#357dab]/40"></div>
            <div className="absolute right-[280px] top-[30px] w-1.5 h-1.5 rounded-full bg-[#e49834]/50"></div>
            <div className="absolute right-[20px] bottom-[20px] w-2.5 h-2.5 rounded-full bg-[#42C89A]/40"></div>
          </div>
        </div>

        {/* Barre d'événements en bas du hero */}
        <div className="w-full bg-white rounded-t-2xl border border-gray-200 border-b-0 shadow-lg px-4 md:px-6 py-5 -mb-[1px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 md:divide-x md:divide-gray-200">
            {/* Formations */}
            <div className="flex items-center gap-4 px-4 md:px-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#357dab] to-[#1f4d6e] flex items-center justify-center shrink-0">
                <span className="material-symbols-rounded text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-[#0F2137] leading-tight">Formations</h4>
                <div className="flex items-center gap-1.5 text-[12px] text-gray-400 font-medium">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  À VENIR
                </div>
              </div>
            </div>

            {/* G-TECH Summit */}
            <div className="flex items-center gap-4 px-4 md:px-6">
              <div className="w-10 h-10 rounded-xl bg-[#357dab] flex items-center justify-center shrink-0">
                <span className="material-symbols-rounded text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-[#0F2137] leading-tight">G-TECH Summit</h4>
                <p className="text-[12px] font-bold text-[#357dab]">21-22 Août 2026</p>
                <p className="text-[11px] text-gray-400">Abidjan, Côte d&apos;Ivoire</p>
              </div>
            </div>

            {/* Digital Creator + Countdown */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 px-4 md:px-6 py-2 md:py-0">
              <div className="flex items-center gap-4 flex-1 min-w-[200px]">
                <div className="w-10 h-10 rounded-xl bg-[#0F2137] flex items-center justify-center shrink-0">
                  <span className="material-symbols-rounded text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>videocam</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-[15px] font-bold text-[#0F2137] leading-tight mb-1">Digital Creator</h4>
                  <div className="flex items-center gap-1.5">
                    {[
                      { value: countdown.days, label: "J" },
                      { value: countdown.hours, label: "H" },
                      { value: countdown.minutes, label: "M" },
                      { value: countdown.seconds, label: "S" },
                    ].map((item, i) => (
                      <div key={i} className="bg-[#0F2137] text-white rounded px-2 py-1 flex items-center gap-0.5 min-w-[36px] sm:min-w-[40px] justify-center">
                        <span className="text-[14px] font-bold font-b612 leading-none">{String(item.value).padStart(2, "0")}</span>
                        <span className="text-[8px] uppercase text-gray-400">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button className="bg-[#357dab] text-white px-4 py-2 rounded-lg font-bold text-[12px] hover:bg-[#2a6590] transition-all shadow-sm whitespace-nowrap shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
                Je m&apos;inscris
              </button>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-8 mb-4">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => changeSlide(i)}
              className={`transition-all duration-300 rounded-full ${i === slideIndex ? `w-8 h-2 ${HERO_SLIDES[slideIndex].colors.dotsActive}` : "w-2 h-2 bg-gray-300 hover:bg-gray-400"}`}
              aria-label={`Aller à la diapositive ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
