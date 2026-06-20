"use client";

import React, { useState } from "react";

// Placeholder image URL since we don't have the exact flyer
const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop";

const FORMATIONS = [
  {
    id: 1,
    title: "Formation Cybersécurité",
    description: "Développez des compétences dans le métier d'avenir de la Cybersécurité Inscrivez-vous avant le 06 ma...",
    recrutement: "du 24 avril au 6 mai",
    duree: "4 mois",
    image: PLACEHOLDER_IMAGE,
    closed: true
  },
  {
    id: 2,
    title: "Formation Data/IA",
    description: "Développez des compétences dans les métiers d'avenir : Data & Intelligence Artificielle Inscrivez-v...",
    recrutement: "du 24 avril au 6 mai",
    duree: "4 mois",
    image: PLACEHOLDER_IMAGE,
    closed: true
  },
  {
    id: 3,
    title: "Formation DevOps 2026",
    description: "Développez des compétences dans le métier d'avenir Devops Inscrivez-vous avant le 06 mai ici #Opé...",
    recrutement: "du 24 avril au 6 mai",
    duree: "4 mois",
    image: PLACEHOLDER_IMAGE,
    closed: true
  }
];

export default function ProgrammesFormation() {
  const [search, setSearch] = useState("");

  return (
    <main className="w-full min-h-screen bg-white text-gray-900 pt-32 pb-24 selection:bg-[#FF7900] selection:text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* EN-TÊTE */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FF7900] mb-3 tracking-tight">
            Nos Formations
          </h1>
          <p className="text-gray-600 text-[15px] md:text-[17px]">
            Des compétences d'aujourd'hui qui ont de l'avenir.
          </p>
        </div>

        {/* BARRE DE RECHERCHE */}
        <div className="max-w-3xl mx-auto mb-20 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-symbols-rounded text-gray-500 text-xl">search</span>
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#FF7900] focus:border-[#FF7900] transition-colors"
            placeholder="Rechercher une formation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* GRILLE DES FORMATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {FORMATIONS.map((formation) => (
            <div key={formation.id} className="flex flex-col">
              
              {/* IMAGE */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 mb-6 overflow-hidden">
                {/* On utilise un div avec backgroundImage pour simuler l'affiche avec le texte overlay, 
                    ou simplement l'image d'illustration si fournie */}
                <img 
                  src={formation.image} 
                  alt={formation.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay sombre simulant l'affiche de la capture */}
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-between p-4">
                  <div className="text-center mt-4">
                    <p className="text-white text-[10px] font-bold uppercase tracking-wider mb-1 opacity-90">Appel à candidatures</p>
                    <p className="text-white text-sm font-bold leading-tight px-4">Les candidatures pour cette formation sont closes.</p>
                  </div>
                  
                  <div className="flex flex-col">
                    <p className="text-[#FF7900] text-sm font-bold leading-tight mb-2">
                      Développez vos compétences en Data & IA, Cybersécurité ou Développement d'applications.
                    </p>
                    <div className="flex justify-between items-end mt-2">
                      <span className="text-[10px] text-white/90 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-sm border border-white/30">Durée de la formation : 4 mois</span>
                      <span className="text-[10px] font-bold text-[#FF7900]">Orange Digital Center</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTENU */}
              <div className="flex-1 flex flex-col">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{formation.title}</h2>
                <p className="text-[#888888] text-[13px] leading-relaxed mb-8 flex-1">
                  {formation.description}
                </p>

                <div className="mb-6 space-y-0.5">
                  <p className="text-[13px] text-gray-800">
                    <strong className="font-bold">Période de recrutement :</strong> {formation.recrutement}
                  </p>
                  <p className="text-[13px] text-gray-800">
                    <strong className="font-bold">Durée :</strong> {formation.duree}
                  </p>
                </div>

                {/* BOUTONS */}
                <div className="space-y-3 mt-auto">
                  <button className="w-full py-2.5 px-4 border border-[#FF7900] text-[#FF7900] font-semibold text-sm hover:bg-[#FF7900]/5 transition-colors">
                    Voir les détails
                  </button>
                  
                  <div className="flex flex-col items-center">
                    <button 
                      disabled={formation.closed}
                      className="w-full py-2.5 px-4 bg-[#D5D5D5] text-white font-semibold text-sm cursor-not-allowed mb-2 hover:bg-[#C0C0C0] transition-colors"
                    >
                      Postuler
                    </button>
                    {formation.closed && (
                      <p className="text-[#A43B2C] text-[11px] font-medium mt-1">
                        Les candidatures pour cette formation sont closes.
                      </p>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}