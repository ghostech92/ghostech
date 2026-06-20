"use client";

import Link from "next/link";
import { useState } from "react";

export default function PoleFormationPage() {
  const [activeCategory, setActiveCategory] = useState<"tous" | "dev" | "design" | "data">("tous");

  const modules = [
    {
      id: 1,
      title: "Algorithmique & Fondations du Web",
      category: "dev",
      level: "Débutant",
      duration: "4 semaines",
      desc: "Maîtriser les bases de la logique de programmation, de HTML5, CSS3 et des fondamentaux de JavaScript moderne (ES6+).",
      topics: ["Variables & Boucles", "DOM Manipulation", "Flexbox/Grid"]
    },
    {
      id: 2,
      title: "Maquettage & Design System avec Figma",
      category: "design",
      level: "Débutant / Intermédiaire",
      duration: "3 semaines",
      desc: "Apprendre à concevoir des interfaces intuitives, à structurer un projet de design et à créer des composants réutilisables.",
      topics: ["Auto-layout", "Styles globaux", "Prototypage interactif"]
    },
    {
      id: 3,
      title: "Architecture Web Avancée avec Next.js",
      category: "dev",
      level: "Avancé",
      duration: "6 semaines",
      desc: "Comprendre le rendu côté serveur (SSR), le routage dynamique basé sur l'App Router et l'intégration d'API sécurisées.",
      topics: ["Server Components", "State Management", "Tailwind Integration"]
    },
    {
      id: 4,
      title: "Analyse de Données & Scripts Python",
      category: "data",
      level: "Intermédiaire",
      duration: "5 semaines",
      desc: "Manipuler, nettoyer et visualiser des jeux de données réels pour en extraire des insights exploitables pour la prise de décision.",
      topics: ["Pandas & NumPy", "Matplotlib", "Data Cleaning"]
    },
    {
      id: 5,
      title: "Backend Robuste avec Laravel",
      category: "dev",
      level: "Intermédiaire",
      duration: "5 semaines",
      desc: "Construire des architectures MVC solides, gérer les bases de données relationnelles, les migrations et concevoir des API REST.",
      topics: ["Eloquent ORM", "Routing & Middleware", "Authentification"]
    }
  ];

  const filteredModules = activeCategory === "tous"
    ? modules
    : modules.filter(m => m.category === activeCategory);

  return (
    <main className="w-full min-h-screen bg-white text-[#0F2137] flex flex-col items-center">

      {/* HERO SECTION */}
      <section className="w-full max-w-6xl px-4 py-8 text-center">
        <h3 className="text-sm font-bold text-[#357dab] uppercase tracking-widest mb-3">Pôle Formation & Transfert</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-[#02073E] mb-6 font-b612 leading-tight">
          Apprendre ensemble, bâtir le futur
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-[16px] leading-relaxed">
          Pas de prérequis, juste de la curiosité. Nous croyons au partage libre des connaissances à travers des ateliers pratiques menés par des experts pour tous les passionnés.
        </p>

        {/* FORMATS D'APPRENTISSAGE */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto text-left mb-24">
          <div className="p-6 bg-teal-50/40 rounded-2xl border border-teal-100/50">
            <div className="text-2xl mb-3">🗓️</div>
            <h4 className="font-bold text-[#02073E] text-base mb-2">Tech Fridays</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Chaque vendredi, un atelier de 2 heures sur un outil, un concept ou un bug récurrent rencontré sur nos projets en cours.
            </p>
          </div>
          <div className="p-6 bg-purple-50/40 rounded-2xl border border-purple-100/50">
            <div className="text-2xl mb-3">🚀</div>
            <h4 className="font-bold text-[#02073E] text-base mb-2">Bootcamps Vacances</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Des sessions intensives d'une semaine pour passer du concept théorique à un projet fonctionnel déployé en ligne.
            </p>
          </div>
          <div className="p-6 bg-amber-50/40 rounded-2xl border border-amber-100/50">
            <div className="text-2xl mb-3">🤝</div>
            <h4 className="font-bold text-[#02073E] text-base mb-2">Mentorat 1-to-1</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Les membres les plus expérimentés coachent individuellement les nouveaux arrivants pour accélérer leur intégration technique.
            </p>
          </div>
        </div>

        {/* CATALOGUE DES MODULES */}
        <div className="max-w-5xl mx-auto text-left mb-20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-[#02073E] font-b612 pl-4 border-l-4 border-[#357dab]">
              Notre Catalogue de Compétences
            </h2>

            {/* Filtres de catégorie */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "tous", label: "Tous" },
                { id: "dev", label: "Développement" },
                { id: "design", label: "Design UI/UX" },
                { id: "data", label: "Data & Analyse" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeCategory === tab.id
                      ? "bg-[#357dab] text-white"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100 border border-transparent"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grille des modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredModules.map((mod) => (
              <div key={mod.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-gray-200 transition">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded uppercase">
                      ⏱️ {mod.duration}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${mod.level === "Débutant" ? "bg-green-50 text-green-700" :
                        mod.level === "Intermédiaire" ? "bg-blue-50 text-blue-700" : "bg-red-50 text-red-700"
                      }`}>
                      {mod.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#02073E] mb-2 font-b612">{mod.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-4">{mod.desc}</p>
                </div>

                {/* Micro-sujets abordés */}
                <div className="pt-3 border-t border-gray-50 flex flex-wrap gap-1.5">
                  {mod.topics.map((topic, i) => (
                    <span key={i} className="text-[10px] bg-gray-50 text-gray-500 px-2 py-0.5 rounded font-medium">
                      • {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BANNIÈRE DE MENTORAT */}
        <div className="bg-[#02073E] text-white rounded-3xl p-8 md:p-12 max-w-5xl mx-auto text-left flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-xl font-bold font-b612 mb-2">Prêt à transmettre ton savoir ?</h3>
            <p className="text-gray-300 text-xs max-w-xl leading-relaxed">
              Si tu maîtrises une technologie, une méthodologie de projet ou un outil de conception, tu peux proposer et animer la prochaine session d'atelier du vendredi.
            </p>
          </div>
          <button className="bg-[#357dab] text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-teal-700 transition shrink-0">
            Devenir Formateur interne
          </button>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-7xl mt-auto py-12 border-t border-gray-100 text-center text-sm text-gray-400">
        Copyright 2026 Ghostech, IUA
      </footer>
    </main>
  );
}