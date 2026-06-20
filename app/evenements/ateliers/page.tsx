"use client";

import Link from "next/link";
import { useState } from "react";

export default function AteliersPage() {
  const [filter, setFilter] = useState<"tous" | "dev" | "design" | "cyber">("tous");

  const ateliers = [
    {
      id: 1,
      category: "dev",
      title: "Maîtriser Git & GitHub en équipe",
      speaker: "Yohan Koffi (CTO Ghostech)",
      date: "Chaque samedi à 14h00",
      type: "Présentiel (Lab Tech IUA)",
      duration: "2h30",
      desc: "Apprendre à gérer les branches, résoudre les conflits de fusion (merge conflicts) et adopter un workflow Git propre pour vos projets de groupe.",
      tags: ["Git", "GitHub", "Collaboration"],
      available: true
    },
    {
      id: 2,
      category: "design",
      title: "Introduction à Figma & Design Systems",
      speaker: "N'Guessan Marie",
      date: "Mercredi 24 Juin 2026",
      type: "En ligne (Google Meet)",
      duration: "2h00",
      desc: "Comprendre les bases du prototypage, l'utilisation des composants réutilisables et la création d'une charte graphique moderne.",
      tags: ["Figma", "UI/UX", "Branding"],
      available: true
    },
    {
      id: 3,
      category: "dev",
      title: "Optimisation de requêtes et API avec Laravel",
      speaker: "Marc-Arthur Yao",
      date: "Samedi 4 Juillet 2026",
      type: "Présentiel (Salle Informatique B)",
      duration: "3h00",
      desc: "Techniques avancées pour accélérer le temps de réponse de vos applications Laravel : Eager Loading, mise en cache et structures de bases de données.",
      tags: ["PHP", "Laravel", "Performance"],
      available: true
    },
    {
      id: 4,
      category: "cyber",
      title: "Sécuriser ses applications Web (OWASP Top 10)",
      speaker: "Invité Spécial (Expert Cyber)",
      date: "Édition passée",
      type: "Présentiel",
      duration: "2h00",
      desc: "Démonstration pratique des failles de sécurité les plus courantes (Injections SQL, XSS) et comment s'en protéger efficacement en développement.",
      tags: ["Sécurité", "OWASP", "Code Sûr"],
      available: false
    }
  ];

  const filteredAteliers = filter === "tous"
    ? ateliers
    : ateliers.filter(a => a.category === filter);

  return (
    <main className="w-full min-h-screen bg-white text-[#0F2137] flex flex-col items-center">

      {/* INTRO */}
      <section className="w-full max-w-6xl px-4 py-8 text-center">
        <h3 className="text-sm font-bold text-[#357dab] uppercase tracking-widest mb-3">Meetups & Ateliers</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-[#02073E] mb-6 font-b612">
          Partages de compétences & Workshops
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-[16px] leading-relaxed">
          Des sessions courtes et ultra-pratiques animées par des experts ou des professionnels pour acquérir des compétences immédiatement applicables.
        </p>

        {/* BARRE DE FILTRES */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {[
            { id: "tous", label: "Tous les ateliers" },
            { id: "dev", label: "💻 Développement" },
            { id: "design", label: "🎨 UI/UX & Design" },
            { id: "cyber", label: "🛡️ Cybersécurité" }
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

        {/* GRILLE DES ATELIERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
          {filteredAteliers.map((atelier) => (
            <div
              key={atelier.id}
              className={`bg-white border rounded-2xl p-6 md:p-8 flex flex-col justify-between transition ${atelier.available ? "border-gray-100 shadow-sm hover:shadow-md" : "border-gray-50 opacity-60"
                }`}
            >
              <div>
                {/* Infos du haut */}
                <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                  <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md">
                    ⏱️ {atelier.duration}
                  </span>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${atelier.available
                      ? "bg-teal-50 text-[#357dab] border-teal-100"
                      : "bg-gray-100 text-gray-400 border-gray-200"
                    }`}>
                    {atelier.available ? "Prochainement" : "Terminé"}
                  </span>
                </div>

                {/* Titre & Intervenant */}
                <h4 className="text-xl font-bold text-[#02073E] mb-1 font-b612">
                  {atelier.title}
                </h4>
                <p className="text-xs font-medium text-[#357dab] mb-4">
                  Par {atelier.speaker}
                </p>

                {/* Description */}
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  {atelier.desc}
                </p>
              </div>

              {/* Pied de carte : Date / Lieu / Tags */}
              <div className="border-t border-gray-50 pt-4 mt-2">
                <div className="space-y-1.5 text-xs text-gray-500 mb-4">
                  <div>📆 <strong className="text-gray-700">Date :</strong> {atelier.date}</div>
                  <div>📍 <strong className="text-gray-700">Format :</strong> {atelier.type}</div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {atelier.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-50 border border-gray-100 text-gray-500 text-[11px] px-2.5 py-0.5 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* APPEL À ACTION : PROPOSER UN ATELIER */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto text-center border border-gray-100">
          <h4 className="text-lg font-bold text-[#02073E] mb-2">Tu as une expertise à partager ?</h4>
          <p className="text-gray-500 text-[13px] mb-4 max-w-md mx-auto">
            Ghostech encourage le partage de connaissances. Si tu maîtrises un outil, un langage ou un framework, viens l'enseigner aux autres membres !
          </p>
          <Link
            href="/equipe/rejoindre"
            className="text-xs font-bold text-[#357dab] hover:underline"
          >
            Soumettre ton idée d'atelier au bureau →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-7xl mt-auto py-12 border-t border-gray-100 text-center text-sm text-gray-400">
        Copyright 2026 Ghostech, IUA
      </footer>
    </main>
  );
}