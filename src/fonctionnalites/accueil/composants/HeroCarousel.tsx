"use client";

import Image from "next/image";
import Link from "next/link";
import { HERO_SLIDES } from "@/src/fonctionnalites/accueil/donnees/hero-slides";
import { ArrowRight, Monitor, Cloud, Code, ShieldCheck, X } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

/**
 * HeroSection — Section hero principale de la page d'accueil.
 * Reproduit fidèlement la disposition de la maquette (éléments gauche et droite bien ancrés).
 */
export default function HeroCarousel() {
  const hero = { ...HERO_SLIDES[0], image: "/header_photo/4KK.png" };

  return (
    <section className="relative w-full mx-auto mt-0 px-0 mb-0">
      <div className="relative isolate w-full overflow-hidden rounded-none border-0 border-white bg-[#24170f] px-4 pt-12 pb-10 sm:rounded-[2.5rem] sm:border-[18px] sm:px-12 md:pt-16 md:pb-14">
        
        {/* ================= IMAGE DE FOND / PERSONNAGE ================= */}
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.image}
            alt="La technologie au service des talents africains"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dégradé sombre pour assurer la lisibilité des textes */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/60 pointer-events-none"></div>
        </div>



        {/* ================= CONTENU PRINCIPAL ================= */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-end justify-between gap-8 pt-16 sm:pt-20 md:pt-24 pb-4 min-h-[460px] lg:min-h-[520px]">

          {/* Côté Gauche : Titre, description et bouton (Style Éditorial Grand Journal) */}
          <div className="w-full lg:w-[50%] flex flex-col items-start justify-end z-10">

            {/* Badge GHOSTECH · IDENTITÉ GLOBALE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#fd800a] text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.18em] mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#fd800a] animate-pulse"></span>
              <span>GHOSTECH · IDENTITÉ GLOBALE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-3 font-b612">
              Construire.{" "}
              <span className="text-white">Impacter.</span>{" "}
              <span className="text-[#fd800a]">Conquérir.</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base font-normal text-white/90 leading-relaxed mb-5 max-w-[520px]">
              La tech, pour tous, en Afrique. Développer les talents, construire des solutions concrètes et façonner l'avenir numérique du continent.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button className="flex items-center gap-2 bg-white hover:bg-zinc-100 text-[#24170f] rounded-full px-4 py-2 font-bold text-xs sm:text-sm transition-all shadow-lg group cursor-pointer">
                <span>Charte d’identité institutionnelle</span>
                <div className="w-5 h-5 rounded-full bg-[#fd800a] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            </div>

            {/* Réseaux Sociaux */}
            <div className="flex items-center gap-2 mt-4">
              <a href="https://facebook.com" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-zinc-900 flex items-center justify-center shadow transition-colors">
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-zinc-900 flex items-center justify-center shadow transition-colors">
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://x.com" aria-label="X (Twitter)" className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-zinc-900 flex items-center justify-center shadow transition-colors">
                <X className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Côté Droit : Services et Carte "Construire ensemble" */}
          <div className="w-full lg:w-[48%] flex flex-col items-start lg:items-end justify-end gap-5 z-10 lg:self-stretch">
            
            {/* "Choisissez votre service" + Icônes */}
            <div className="flex flex-col items-start lg:items-end w-full">
              <span className="text-white text-xs sm:text-sm font-bold mb-2.5 drop-shadow-md">
                GHOSTECH · 7 Pôles d'Excellence
              </span>
              <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-md">
                <div className="flex flex-col items-center gap-1 text-center">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-colors cursor-pointer shadow-md">
                    <Monitor className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-white/90 font-medium drop-shadow leading-tight">Web &amp; Mobile</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-colors cursor-pointer shadow-md">
                    <Cloud className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-white/90 font-medium drop-shadow leading-tight">Cyber-sécurité</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-colors cursor-pointer shadow-md">
                    <Code className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-white/90 font-medium drop-shadow leading-tight">Réseaux &amp; Télécoms</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-[#fd800a] hover:brightness-90 flex items-center justify-center text-white shadow-lg transition-all cursor-pointer">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-white/90 font-medium drop-shadow leading-tight">IA &amp; Robotique</span>
                </div>
              </div>
            </div>

            {/* Carte "Construire ensemble" */}
            <div className="self-stretch lg:self-end bg-white rounded-2xl p-4 sm:p-5 flex flex-row items-center justify-between gap-3 w-full max-w-full sm:max-w-[380px] text-zinc-900 shadow-2xl relative overflow-hidden sm:overflow-visible">
              
              {/* Côté Gauche : Titre, description et bouton */}
              <div className="flex flex-col items-start z-10 w-[68%] sm:w-[65%]">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#fd800a]">Impact Collectif</span>
                <h4 className="font-extrabold text-sm sm:text-base text-zinc-900 tracking-tight leading-snug">
                  Construire ensemble
                </h4>
                <p className="text-[10px] sm:text-[11px] text-zinc-500 leading-snug mt-1 mb-3">
                  Former, connecter et accompagner les talents pour transformer les idées en solutions à fort impact.
                </p>

                <Link
                  href="/equipe/rejoindre"
                  className="w-fit flex items-center gap-2 bg-[#fd800a] hover:bg-[#e56f00] text-white rounded-full py-1.5 px-3 font-bold text-[10px] sm:text-xs transition-all shadow-md group cursor-pointer"
                >
                  <span className="whitespace-nowrap">Créer de l’impact</span>
                  <div className="w-4 h-4 rounded-full bg-white text-[#fd800a] flex items-center justify-center group-hover:translate-x-1 transition-transform shrink-0">
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </Link>
              </div>

              {/* Avatar à droite */}
              <div className="absolute -bottom-2 sm:-bottom-4 -right-4 sm:-right-8 z-20 h-44 w-44 sm:h-56 sm:w-56 pointer-events-none">
                <Image 
                  src="/header_photo/h.png" 
                  alt="Talent technologique Ghostech" 
                  fill 
                  sizes="(max-width: 640px) 176px, 224px"
                  className="object-contain object-bottom"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

            </div>

          </div>

        </div>

        {/* ================= INDICATEUR DE DÉFILEMENT BAS ================= */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20">
          <div className="w-7 h-9 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>

      </div>
    </section>
  );
}