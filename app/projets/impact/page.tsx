"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Partenaires from "@/src/composants/communs/Partenaires";
import { 
  FaGraduationCap,
  FaBriefcase,
  FaFemale,
  FaHandsHelping
} from "react-icons/fa";

// ─── COMPOSANT COUNTER (Compteur animé) ───
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const step = Math.max(1, target / 60);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 30);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactPage() {
  return (
    <main className="w-full min-h-screen bg-white text-[#1E293B] flex flex-col items-center antialiased pb-20 relative overflow-hidden">
      
      {/* 1. HERO SECTION (Split Editorial Style) */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          <span className="text-[#357dab] text-xs font-black uppercase tracking-widest">
            Mesures d'Impact 2025/2026
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F2137] tracking-tight leading-tight">
            Ghostech Impact Social <br />
            & Insertion
          </h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
            Ghostech s'engage au quotidien pour façonner un écosystème numérique inclusif, dynamique et porteur de changement social en Côte d'Ivoire. Nous formons la prochaine génération de talents de la tech africaine.
          </p>
          <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">En partenariat avec</span>
            <span className="text-[#357dab] font-extrabold text-sm tracking-wider uppercase">Ghostech Partners</span>
          </div>
        </div>
        
        <div className="lg:col-span-6 min-h-[400px] lg:min-h-[500px] relative">
          <img 
            src="/Galeries/img_1.png" 
            alt="Impact Ghostech"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 2. KEY HIGHLIGHTS SECTION (Ghostech Light Blue Band Style) */}
      <section className="w-full bg-[#f5f8ff] py-20 px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-xl font-bold text-[#0F2137] mb-12 text-center tracking-tight uppercase tracking-wider">
          Key highlights
        </h2>
        
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Highlight 1: Personnes Formées (Ghostech Blue) */}
          <div className="flex flex-col items-center px-4">
            <div className="text-5xl md:text-6xl font-black text-[#357dab] mb-4 flex items-center justify-center">
              <Counter target={198} />
            </div>
            <p className="text-xs text-slate-700 font-medium max-w-[260px] leading-relaxed">
              <strong>Personnes formées</strong> et accompagnées aux compétences numériques clés pour le marché de l'emploi.
            </p>
          </div>

          {/* Highlight 2: Sorties Positives (Ghostech Orange) */}
          <div className="flex flex-col items-center px-4">
            <div className="text-5xl md:text-6xl font-black text-[#e49834] mb-4 flex items-center justify-center">
              <Counter target={87} suffix="%" />
            </div>
            <p className="text-xs text-slate-700 font-medium max-w-[260px] leading-relaxed">
              de <strong>sorties positives</strong> (+200 apprenants insérés) grâce à nos programmes intensifs.
            </p>
          </div>

          {/* Highlight 3: Femmes Formées (Ghostech Green) */}
          <div className="flex flex-col items-center px-4">
            <div className="text-5xl md:text-6xl font-black text-[#42C89A] mb-4 flex items-center justify-center">
              <Counter target={83} />
            </div>
            <p className="text-xs text-slate-700 font-medium max-w-[260px] leading-relaxed">
              <strong>Femmes formées</strong> et propulsées activement vers des carrières technologiques et de leadership.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ECOSYSTEM & OVERLAPPING CIRCLES SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Overlapping Circles Box */}
        <div className="lg:col-span-6 bg-[#f8fafc] rounded-3xl p-8 md:p-12 flex flex-col items-center shadow-sm border border-slate-100">
          <h3 className="text-md font-bold text-[#0F2137] mb-10 text-center tracking-tight">
            Notre impact social
          </h3>
          
          {/* Overlapping Circles container */}
          <div className="relative w-full max-w-[340px] h-[340px] mx-auto flex items-center justify-center">
            {/* Circle 1: Actions associations (Ghostech Blue) */}
            <div className="absolute top-0 left-2 w-44 h-44 rounded-full bg-[#357dab] text-white flex flex-col items-center justify-center p-4 text-center shadow-lg hover:scale-105 transition-transform duration-300 z-10 select-none">
              <span className="text-3xl font-black">+10</span>
              <span className="text-[10px] font-bold mt-1.5 leading-tight">Dons & actions aux associations</span>
            </div>
            
            {/* Circle 2: Entreprises partenaires (Ghostech Orange) */}
            <div className="absolute top-0 right-2 w-44 h-44 rounded-full bg-[#e49834] text-white flex flex-col items-center justify-center p-4 text-center shadow-lg hover:scale-105 transition-transform duration-300 z-10 select-none">
              <span className="text-3xl font-black">8</span>
              <span className="text-[10px] font-bold mt-1.5 leading-tight">Entreprises partenaires</span>
            </div>
            
            {/* Circle 3: Diversité & Mixité (Ghostech Green) */}
            <div className="absolute bottom-2 left-[23%] w-44 h-44 rounded-full bg-[#42C89A] text-white flex flex-col items-center justify-center p-4 text-center shadow-lg hover:scale-105 transition-transform duration-300 z-20 select-none">
              <span className="text-3xl font-black">43%</span>
              <span className="text-[10px] font-bold mt-1.5 leading-tight">Diversité & mixité globale</span>
            </div>
          </div>
        </div>

        {/* Right Column: Insights & Text */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[#357dab] text-xs font-black uppercase tracking-wider">
            Insight #1
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0F2137] leading-tight">
            Un écosystème d'apprentissage résilient et tourné vers l'avenir
          </h3>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Nous combinons la rigueur de la formation technique avec des initiatives d'inclusion à fort impact. Grâce à un réseau de partenaires engagés et des actions de soutien communautaire, nos diplômés s'insèrent durablement dans le tissu économique local.
          </p>
          
          {/* Stat block */}
          <div className="pt-6 border-t border-slate-100 space-y-2">
            <div className="text-4xl font-black text-[#0F2137] flex items-baseline gap-2">
              <Counter target={4} />
              <span className="text-lg font-bold text-slate-500">Pôles d'Alumni</span>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Notre réseau d'alumni est structuré en 4 grands pôles régionaux assurant un mentorat continu et le partage d'opportunités.
            </p>
          </div>
        </div>

      </section>

      {/* 4. CALL TO ACTION */}
      <section className="w-full bg-[#022329] text-white py-20 px-4 relative overflow-hidden flex flex-col items-center">
        <div className="absolute right-[-5%] top-[10%] w-[350px] h-[350px] text-[#39779e]/10 pointer-events-none select-none z-0">
          <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v20M2 12h20" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl w-full text-center space-y-8">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-[#10383F] flex items-center justify-center shadow-lg">
              <FaHandsHelping className="text-2xl text-[#e49834]" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Rejoignez-nous pour amplifier l'impact
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Nous collaborons avec des institutions publiques, des ONG internationales et des entreprises privées pour concevoir et déployer des technologies à fort impact social. Bâtissons ensemble des solutions d'avenir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="/contact"
              className="bg-[#357dab] hover:bg-[#2a6590] text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-900/30"
            >
              Devenir Partenaire
            </a>
            <a
              href="/contact"
              className="bg-transparent border border-slate-700 hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>

      {/* 5. PARTENAIRES SECTION */}
      <div className="w-full mt-16">
        <Partenaires />
      </div>

    </main>
  );
}
