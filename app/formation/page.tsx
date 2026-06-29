"use client";

import React, { useState } from "react";
import Partenaires from "@/src/composants/communs/Partenaires";
import { useCourses } from "@/src/fonctionnalites/formation/hooks/useCourses";
import CourseCard from "@/src/fonctionnalites/formation/composants/CourseCard";

export default function ProgrammesFormation() {
  const [search, setSearch] = useState("");
  const { courses } = useCourses();

  // Filtrage dynamique des formations
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()) ||
    course.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="w-full min-h-screen bg-[#FAFAFA] text-[#0F2137] font-sans antialiased pt-20 ">

      {/* 1. HERO SECTION COMPLÈTE */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-16 pt-12 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-4xl md:text-5xl font-black text-[#0F2137] leading-[1.15] tracking-tight">
            <span className="underline decoration-[#FF1949] decoration-4 underline-offset-4">Développez vos compétences</span> avec nos formations intensives
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-xl leading-relaxed font-medium">
            Commencez dès aujourd'hui à apprendre avec des experts du domaine. Maîtrisez les technologies les plus demandées sur le marché de l'emploi.
          </p>

          {/* BARRE DE RECHERCHE INTEGRÉE */}
          <div className="flex items-center bg-white shadow-md rounded-xl p-1.5 max-w-md border border-gray-100 focus-within:ring-2 focus-within:ring-pink-200 transition-all">
            <input
              type="text"
              placeholder="Que souhaitez-vous apprendre ?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent px-3 py-2 text-sm text-gray-700 outline-none placeholder-gray-400"
            />
            <button className="bg-[#FF1949] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-pink-700 transition shrink-0">
              Rechercher
            </button>
          </div>

          <div className="flex items-center gap-6 pt-2 text-xs font-bold text-gray-600">
            <span className="flex items-center gap-2"><span className="text-emerald-500 text-sm">✓</span> Certification incluse</span>
            <span className="flex items-center gap-2"><span className="text-emerald-500 text-sm">✓</span> Projets réels pratiques</span>
          </div>
        </div>

        {/* ILLUSTRATION GEOMETRIQUE */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-[#F7C324] rounded-full translate-x-4 -translate-y-4 z-0"></div>
            <div className="w-full h-full rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] overflow-hidden relative z-10 border-4 border-white bg-slate-200 shadow-xl">
              <img
                src="/Galeries/img6.jpeg"
                alt="Students learning"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-cyan-400 rounded-tl-3xl rounded-br-3xl z-20 shadow-md"></div>
            <div className="absolute bottom-6 -right-2 w-10 h-10 bg-[#FF1949] rounded-full z-20 shadow-sm"></div>
          </div>
        </div>
      </section>

      {/* 2. CARTES DE VALEURS */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 relative z-10">
        {[
          { title: "Nouvelles compétences", desc: "Développez votre expertise technique avec des formations 100% axées sur la pratique.", color: "bg-blue-50 border-blue-100 text-blue-500", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
          { title: "Formateurs Experts", desc: "Bénéficiez d'un encadrement de proximité et de revues de code menées par des pros.", color: "bg-orange-50 border-orange-100 text-orange-500", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
          { title: "Certifications validées", desc: "Propulsez votre CV grâce à des certifications valorisées sur le marché du travail.", color: "bg-purple-50 border-purple-100 text-purple-500", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /> }
        ].map((card, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
            <div className={`w-12 h-12 rounded-full ${card.color} flex items-center justify-center mb-4 border`}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">{card.icon}</svg>
            </div>
            <h4 className="text-[16px] font-bold text-[#0F2137] mb-1.5">{card.title}</h4>
            <p className="text-[13px] text-gray-500 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </section>

      {/* 3. SECTION DES COURS - EN-TÊTE */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-16 pt-10 pb-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#0F2137]">
            Programmes de Formation Disponibles
          </h2>
          <p className="text-xs md:text-sm text-gray-500 font-medium max-w-md mx-auto">
            Trouvez le parcours adapté à vos ambitions et rejoignez nos promotions intensives.
          </p>
        </div>
      </section>

      {/* 3b. GRILLE DES COURS SUR FOND FONCÉ FAQ PLEINE LARGEUR */}
      <section className="w-full bg-[#022329] text-white py-16 shadow-xl relative overflow-hidden">
        {/* Decorative Background Stickers */}
        <div className="absolute right-[-5%] bottom-[-5%] w-[250px] h-[250px] md:w-[450px] md:h-[450px] text-[#39779e] pointer-events-none select-none z-0 animate-float-medium">
          <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        <div className="absolute left-[-5%] top-[-5%] w-[200px] h-[200px] md:w-[350px] md:h-[350px] text-[#39779e] pointer-events-none select-none z-0 animate-float-slow">
          <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
          </svg>
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          {/* GRILLE DES COURS CONFIGURÉE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
            {filteredCourses.length === 0 && (
              <div className="col-span-full text-center py-12 text-sm font-semibold text-teal-100">
                Aucune formation ne correspond à votre recherche.
              </div>
            )}
          </div>

          {/* BANDEAU RECOMMANDATION INFORMATIF */}
          <div className="w-full max-w-3xl mx-auto bg-white/10 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/20 text-center sm:text-left mb-12">
            <p className="text-xs font-bold text-white">
              Vous souhaitez en savoir plus sur l'ensemble de nos parcours de spécialisation ?
            </p>
            <button className="bg-white text-[#39779e] px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider hover:bg-sky-50 transition shadow-xs shrink-0">
              Tout explorer
            </button>
          </div>
        </div>
      </section>
      <Partenaires/>

      {/* 4. GRANDS BANNEAUX DE BAS DE PAGE */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 border-t border-gray-100">
        <div className="relative h-[400px] bg-slate-900 flex items-center px-8 lg:px-16 text-white overflow-hidden group">
          <img
            src="/Galeries/img.png"
            className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-102 transition duration-500"
            alt="Track background"
          />
          <div className="relative z-10 max-w-sm space-y-2.5">
            <span className="text-[9px] uppercase font-black tracking-widest text-[#FF7A00]">Ghostech Académie</span>
            <h3 className="text-lg md:text-xl font-black leading-snug">
              Des formations immersives en présentiel pour propulser votre carrière d'ingénieur.
            </h3>
            <button className="bg-[#FF1949] text-white px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-wider hover:bg-pink-700 transition">
              Découvrir la promo
            </button>
          </div>
        </div>

        <div className="relative h-[400px] bg-indigo-950 flex items-center px-8 lg:px-16 text-white overflow-hidden group">
          <img
            src="/Galeries/Haka/haka6.png"
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-102 transition duration-500"
            alt="Discount background"
          />
          <div className="relative z-10 max-w-sm space-y-2.5">
            <span className="text-[9px] uppercase font-black tracking-widest text-cyan-400">Prochaine Session</span>
            <h3 className="text-lg md:text-xl font-black leading-snug">
              Inscrivez-vous aux alertes pour être notifié du lancement des prochaines cohortes.
            </h3>
            <button className="bg-[#FF1949] text-white px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-wider hover:bg-pink-700 transition">
              S'abonner aux alertes
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}