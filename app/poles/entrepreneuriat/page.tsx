"use client";

import Link from "next/link";
import { useState } from "react";

export default function EntrepreneuriatPage() {
  const [activeTab, setActiveTab] = useState<"missions" | "projets">("missions");

  const initiatives = [
    {
      id: 1,
      title: "Programme d'Incubation 'Tech-to-Market'",
      duration: "6 mois",
      desc: "Accompagnement intensif pour structurer le modèle économique d'un projet étudiant, valider le besoin marché et préparer un premier produit minimum viable (MVP).",
      focus: "Business Model & MVP"
    },
    {
      id: 2,
      title: "Ghostech Pitch Day",
      duration: "Événement Annuel",
      desc: "Une opportunité unique pour les équipes de présenter leurs prototypes devant un panel d'investisseurs locaux, de chefs d'entreprise et d'incubateurs d'Abidjan.",
      focus: "Financement & Réseau"
    },
    {
      id: 3,
      title: "Mentorat d'Affaires",
      duration: "Continu",
      desc: "Mise en relation directe avec des alumni de l'IUA et des entrepreneurs chevronnés pour affiner la stratégie commerciale et juridique.",
      focus: "Conseil Stratégique"
    }
  ];

  const startupsIncubees = [
    {
      id: 1,
      name: "AgroSpatial Tech",
      status: "Phase d'incubation",
      desc: "Issue du projet de recherche 'AgroSpatial Insight'. Spécialisée dans la vente de rapports géospatiaux prédictifs pour les coopératives agricoles.",
      badge: "Agritech"
    },
    {
      id: 2,
      name: "QbLog Solutions",
      status: "MVP Validé",
      desc: "Transformation du CMS interne du club en une solution logicielle SaaS pour la communication interne des écoles et universités privées.",
      badge: "SaaS / EdTech"
    }
  ];

  return (
    <main className="w-full min-h-screen bg-white text-[#0F2137] flex flex-col items-center">

      {/* INTRO */}
      <section className="w-full max-w-6xl px-4 py-8 text-center">
        <h3 className="text-sm font-bold text-[#357dab] uppercase tracking-widest mb-3">Pôle Entrepreneuriat & Incubation</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-[#02073E] mb-6 font-b612 leading-tight">
          Propulser les idées vers le monde réel
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-[16px] leading-relaxed">
          Parce que le code n'est puissant que s'il rencontre son marché. Nous transformons l'audace technique en valeur économique et sociale durable.
        </p>

        {/* SELECTEUR DE COMMUTATION */}
        <div className="flex justify-center border-b border-gray-100 max-w-md mx-auto mb-16">
          <button
            onClick={() => setActiveTab("missions")}
            className={`flex-1 pb-4 text-sm font-bold transition-all ${activeTab === "missions"
                ? "text-[#357dab] border-b-2 border-[#357dab]"
                : "text-gray-400 hover:text-gray-600"
              }`}
          >
            🎯 Nos Mécanismes d'Accompagnement
          </button>
          <button
            onClick={() => setActiveTab("projets")}
            className={`flex-1 pb-4 text-sm font-bold transition-all ${activeTab === "projets"
                ? "text-[#357dab] border-b-2 border-[#357dab]"
                : "text-gray-400 hover:text-gray-600"
              }`}
          >
            🚀 Startups & Projets Couvés
          </button>
        </div>

        {/* AFFICHAGE CONDITIONNEL */}
        {activeTab === "missions" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            {initiatives.map((item) => (
              <div key={item.id} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-[10px] font-bold text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded uppercase tracking-wider mb-4 inline-block">
                    {item.focus}
                  </span>
                  <h4 className="text-lg font-bold text-[#02073E] mb-3 font-b612">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <div className="text-xs text-gray-400 font-medium pt-3 border-t border-gray-200/50">
                  ⏱️ Rythme : {item.duration}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {startupsIncubees.map((startup) => (
              <div key={startup.id} className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-teal-50 text-[#357dab] text-xs px-2.5 py-1 rounded-md font-semibold">
                      {startup.badge}
                    </span>
                    <span className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-0.5 rounded">
                      {startup.status}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-[#02073E] mb-2 font-b612">
                    {startup.name}
                  </h4>
                  <p className="text-gray-500 text-[14px] leading-relaxed">
                    {startup.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VALEURS AJOUTÉES */}
        <div className="mt-20 border-t border-gray-100 pt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#02073E] mb-12">Pourquoi associer business et technologie ?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div className="space-y-2">
              <h5 className="font-bold text-[#0F2137]">Viabilité Économique</h5>
              <p className="text-gray-500 text-[13px] leading-relaxed">
                Apprendre à fixer un prix, analyser les coûts d'infrastructure cloud et structurer une offre commerciale pour ne pas dépendre uniquement de subventions.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="font-bold text-[#0F2137]">Souveraineté et Impact Local</h5>
              <p className="text-gray-500 text-[13px] leading-relaxed">
                Créer des emplois directs pour les étudiants sortants de l'IUA et apporter des réponses concrètes aux défis de la transition numérique ivoirienne.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-7xl mt-auto py-12 border-t border-gray-100 text-center text-sm text-gray-400">
        Copyright 2026 Ghostech, IUA
      </footer>
    </main>
  );
}