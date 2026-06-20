"use client";

import { useState } from "react";

export default function MembresEquipe() {
  const [filter, setFilter] = useState<"tous" | "dev" | "design" | "data">("tous");

  const membres = [
    {
      id: 1,
      name: "Ange Adjé",
      role: "Membre Ghostech",
      category: "dev",
      skills: ["Innovation", "Tech", "IUA"],
      avatar: "/menbre/Ange_Adje.jpeg"
    },
    {
      id: 2,
      name: "Brim Ange Flora",
      role: "Membre Ghostech",
      category: "design",
      skills: ["Design", "Créativité", "IUA"],
      avatar: "/menbre/Brim_Ange_Flora .jpeg"
    },
    {
      id: 3,
      name: "Convaud Kouassi Othnie",
      role: "Membre Ghostech",
      category: "dev",
      skills: ["Développement", "Tech", "IUA"],
      avatar: "/menbre/CONVAUD_Kouassi_Othnie.jpeg"
    },
    {
      id: 4,
      name: "Doukrou Eiffel",
      role: "Membre Ghostech",
      category: "dev",
      skills: ["Développement", "Innovation", "IUA"],
      avatar: "/menbre/Doukrou_Eiffel .jpeg"
    },
    {
      id: 5,
      name: "Emma Kossonou",
      role: "Membre Ghostech",
      category: "data",
      skills: ["Data", "Analyse", "IUA"],
      avatar: "/menbre/Emma_KOSSONOU.jpeg"
    },
    {
      id: 6,
      name: "Ethan Bokamé",
      role: "Membre Ghostech",
      category: "dev",
      skills: ["Tech", "Développement", "IUA"],
      avatar: "/menbre/Ethan_Bokamé.png"
    },
    {
      id: 7,
      name: "Helloïs Kouassi",
      role: "Membre Ghostech",
      category: "design",
      skills: ["UI/UX", "Design", "IUA"],
      avatar: "/menbre/Helloïs_KOUASSI.jpeg"
    },
    {
      id: 8,
      name: "Jérémie Harding",
      role: "Membre Ghostech",
      category: "dev",
      skills: ["Développement", "Innovation", "IUA"],
      avatar: "/menbre/JÉRÉMIE_HARDING.jpeg"
    },
    {
      id: 9,
      name: "Marie Michelle Diragbou",
      role: "Membre Ghostech",
      category: "design",
      skills: ["Créativité", "Design", "IUA"],
      avatar: "/menbre/Marie_Michelle_Diragbou.jpeg"
    },
    {
      id: 10,
      name: "Maïmouna Soro",
      role: "Membre Ghostech",
      category: "data",
      skills: ["Data", "Analyse", "IUA"],
      avatar: "/menbre/Maïmouna_Soro.jpeg"
    },
    {
      id: 11,
      name: "Yaniss Elie Sey",
      role: "Membre Ghostech",
      category: "dev",
      skills: ["Tech", "Innovation", "IUA"],
      avatar: "/menbre/Yaniss_Elie_Sey.jpeg"
    }
  ];

  const filteredMembres = filter === "tous"
    ? membres
    : membres.filter(m => m.category === filter);

  return (
    <main className="w-full min-h-screen bg-white text-[#0F2137] flex flex-col items-center">

      {/* TITRE ET BANNIÈRE INFOS */}
      <section className="w-full max-w-6xl px-4 py-8 text-center">
        <h3 className="text-sm font-bold text-[#357dab] uppercase tracking-widest mb-3">La Communauté</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-[#02073E] mb-6 font-b612">
          Les visages de Ghostech
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-[16px] leading-relaxed">
          Découvrez la liste des étudiants de l'IUA qui unissent leurs forces et leurs compétences pour donner vie à nos différentes solutions numériques.
        </p>

        {/* FILTRES PAR SPÉCIALITÉ */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {[
            { id: "tous", label: "Tous les membres" },
            { id: "dev", label: "💻 Développeurs" },
            { id: "design", label: "🎨 Designers" },
            { id: "data", label: "📊 Data & IA" }
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

        {/* GRILLE DU TROMBINOSCOPE */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-left mb-20">
          {filteredMembres.map((membre) => (
            <div
              key={membre.id}
              className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition text-center flex flex-col items-center"
            >
              {/* Avatar rond */}
              <div className="w-24 h-24 rounded-full bg-gray-50 overflow-hidden mb-4 border-2 border-gray-50">
                <img
                  src={membre.avatar}
                  alt={membre.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Textes */}
              <h4 className="text-md font-bold text-[#02073E] mb-1 line-clamp-1">
                {membre.name}
              </h4>
              <p className="text-xs text-[#357dab] font-semibold mb-4">
                {membre.role}
              </p>

              {/* Badges de compétences */}
              <div className="flex flex-wrap justify-center gap-1 mt-auto pt-2 border-t border-gray-50 w-full">
                {membre.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-50 text-gray-500 text-[10px] px-2 py-0.5 rounded font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-7xl mt-auto py-12 border-t border-gray-100 text-center text-sm text-gray-400">
        Copyright 2026 Ghostech, IUA
      </footer>
    </main>
  );
}