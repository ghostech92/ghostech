"use client";

import Link from "next/link";
import { useState } from "react";

export default function RealisationsProjets() {
  const [filter, setFilter] = useState<"tous" | "web-mobile" | "ia-data" | "outils">("tous");

  const projets = [
    {
      id: 1,
      category: "ia-data",
      title: "AgroSpatial Insight",
      subtitle: "L'Intelligence Spatiale au Service de la Souveraineté Alimentaire",
      desc: "Une plateforme d'analyse de données géospatiales et d'imagerie satellite pour optimiser les rendements agricoles et anticiper les besoins hydriques en Afrique de l'Ouest.",
      status: "Production",
      statusColor: "bg-green-100 text-green-700",
      tags: ["Python", "D3.js", "AI / GIS", "Data Analysis"],
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600"
    },
    {
      id: 2,
      category: "web-mobile",
      title: "QbLog Platform",
      subtitle: "Le média interne de l'innovation",
      desc: "Conception et déploiement d'un système de gestion de contenu (CMS) ultra-léger et moderne, permettant aux talents et chercheurs de publier leurs articles de veille technologique.",
      status: "Production",
      statusColor: "bg-green-100 text-green-700",
      tags: ["Next.js", "Tailwind CSS", "Cloudinary"],
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600"
    },
    {
      id: 3,
      category: "outils",
      title: "NadegeEiixr Form Engine",
      subtitle: "Optimisation de la persistance des données",
      desc: "Module avancé de gestion de formulaires asynchrones et résilients aux pertes de connexion internet, garantissant la sauvegarde locale des saisies utilisateurs avant synchronisation.",
      status: "En cours",
      statusColor: "bg-orange-100 text-orange-700",
      tags: ["TypeScript", "Laravel", "Local Forage"],
      img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=600"
    },
    {
      id: 4,
      category: "web-mobile",
      title: "Portail Campus & Éducation",
      subtitle: "Simplifier la vie universitaire",
      desc: "Application mobile centralisant les emplois du temps, les ressources de cours et la communication directe entre l'administration et les apprenants.",
      status: "En cours",
      statusColor: "bg-orange-100 text-orange-700",
      tags: ["React Native", "Node.js", "MongoDB"],
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600"
    }
  ];

  const filteredProjets = filter === "tous"
    ? projets
    : projets.filter(p => p.category === filter);

  return (
    <main className="w-full min-h-screen bg-white text-[#0F2137] flex flex-col items-center">

      {/* TITRE & INTRO */}
      <section className="w-full max-w-6xl px-4 py-8 text-center">
        <h3 className="text-sm font-bold text-[#357dab] uppercase tracking-widest mb-3">Nos Réalisations</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-[#02073E] mb-6 font-b612">
          Des projets concrets pour l'Afrique numérique
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-[16px] leading-relaxed">
          Découvrez les applications, plateformes et outils de recherche technique développés par la communauté Ghostech.
        </p>

        {/* BARRE DE FILTRES */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {[
            { id: "tous", label: "Toutes nos réalisations" },
            { id: "web-mobile", label: "📱 Web & Mobile" },
            { id: "ia-data", label: "📊 IA & Data Science" },
            { id: "outils", label: "🔧 Outils & Librairies" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-[14px] transition-all ${filter === tab.id
                  ? "bg-[#357dab] text-white shadow-md shadow-teal-700/10"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* GRILLE DES CARTES DE PROJETS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          {filteredProjets.map((projet) => (
            <div
              key={projet.id}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                {/* Image de couverture avec Badge Statut */}
                <div className="w-full aspect-[16/9] bg-gray-50 relative overflow-hidden">
                  <img
                    src={projet.img}
                    alt={projet.title}
                    className="w-full h-full object-cover"
                  />
                  <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${projet.statusColor}`}>
                    {projet.status}
                  </span>
                </div>

                {/* Contenu textuel */}
                <div className="p-6 md:p-8">
                  <h4 className="text-2xl font-bold text-[#02073E] mb-1 font-b612">
                    {projet.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#357dab] uppercase tracking-wider mb-4">
                    {projet.subtitle}
                  </p>
                  <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                    {projet.desc}
                  </p>
                </div>
              </div>

              {/* Technologies utilisées */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gray-50 pt-4 flex flex-wrap gap-2">
                {projet.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-50 text-gray-600 border border-gray-100 text-xs px-2.5 py-1 rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-7xl mt-auto py-12 border-t border-gray-100 text-center text-sm text-gray-400">
        Copyright 2026 Ghostech
      </footer>
    </main>
  );
}