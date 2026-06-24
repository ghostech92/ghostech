"use client";
import React from "react";
import Link from "next/link";

const actualites = [
  {
    id: 1,
    date: "24 Juin 2026",
    tag: "Confrontation",
    tagColor: "bg-amber-100 text-amber-700",
    title: "Prochain match : Duo Epsilon vs Duo Zeta",
    excerpt: "Le troisième match de la Vague 2 aura lieu samedi 27 juin à 20h00. Le thème portera sur une Plateforme E-commerce Moderne. Soyez prêts !",
    icon: "⚔️",
  },
  {
    id: 2,
    date: "21 Juin 2026",
    tag: "Résultat",
    tagColor: "bg-emerald-100 text-emerald-700",
    title: "Vague 2 — Match 2 : Victoire du Duo Alpha !",
    excerpt: "Amira et Koffi ont remporté le deuxième match de la Vague 2 avec 48 points, face au Duo Beta (Ange & Inès, 41 pts). Une prestation technique remarquable.",
    icon: "🏆",
  },
  {
    id: 3,
    date: "14 Juin 2026",
    tag: "Résultat",
    tagColor: "bg-emerald-100 text-emerald-700",
    title: "Vague 2 — Match 1 : Le Duo Gamma domine !",
    excerpt: "Mihir et Paul s'imposent avec 45 points sur le thème Dashboard Data Analytics. Le Duo Delta termine avec 38 points.",
    icon: "📊",
  },
  {
    id: 4,
    date: "5 Juin 2026",
    tag: "Annonce",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Lancement de la Vague 2 — Nouveaux duos formés",
    excerpt: "Les duos de la Vague 2 ont été tirés au sort. Retrouvez les nouvelles équipes sur la page Confrontations. La compétition reprend samedi 14 juin.",
    icon: "🎲",
  },
  {
    id: 5,
    date: "24 Mai 2026",
    tag: "Résultat",
    tagColor: "bg-emerald-100 text-emerald-700",
    title: "Vague 1 terminée — Bilan complet",
    excerpt: "La première vague s'est clôturée avec 3 confrontations. Claire et Kenton arrivent en tête avec 50 points chacun. Retrouvez le classement complet en ligne.",
    icon: "✅",
  },
  {
    id: 6,
    date: "10 Mai 2026",
    tag: "Lancement",
    tagColor: "bg-purple-100 text-purple-700",
    title: "DevArena Saison 2026 — C'est parti !",
    excerpt: "La première édition de la DevArena Ghostech est officiellement lancée. 10 développeurs s'affrontent en 3 vagues. Bonne chance à tous !",
    icon: "🚀",
  },
];

export default function ActualitesPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F6] text-gray-900 font-sans overflow-x-hidden">

      {/* HEADER */}
      <div className="pt-24 pb-10 bg-white/80 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-gray-100 border border-gray-200 rounded-full mb-6">
            <span className="text-lg">📰</span>
            <span className="uppercase tracking-[3px] text-xs font-mono text-gray-600">Fil d&apos;actualités</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-3">
            Actualités <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">DevArena</span>
          </h1>
          <p className="text-gray-600 text-lg">Résultats, annonces et événements de la saison 2026.</p>
        </div>
      </div>

      {/* FEED */}
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Dernière actu en vedette */}
        <div className="bg-white border-2 border-amber-300 rounded-3xl p-8 md:p-10 mb-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="flex items-start gap-6">
            <div className="text-5xl shrink-0">{actualites[0].icon}</div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${actualites[0].tagColor}`}>
                  {actualites[0].tag}
                </span>
                <span className="text-xs font-bold bg-amber-400 text-black px-3 py-1 rounded-full uppercase tracking-wider">
                  À la une
                </span>
                <span className="text-sm text-gray-400">{actualites[0].date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{actualites[0].title}</h2>
              <p className="text-gray-600 leading-relaxed">{actualites[0].excerpt}</p>
              <Link
                href="/devarena/confrontations/vague2"
                className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 bg-amber-400 text-black font-semibold rounded-xl hover:bg-amber-500 transition-all text-sm"
              >
                <span className="material-symbols-rounded text-[18px]">arrow_forward</span>
                Voir la confrontation
              </Link>
            </div>
          </div>
        </div>

        {/* Autres actualités */}
        <div className="space-y-4">
          {actualites.slice(1).map((actu) => (
            <div
              key={actu.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-5 hover:border-amber-300 hover:shadow-sm transition-all"
            >
              <div className="text-3xl shrink-0 w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center">
                {actu.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${actu.tagColor}`}>
                    {actu.tag}
                  </span>
                  <span className="text-xs text-gray-400">{actu.date}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5">{actu.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{actu.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stat résumé */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Actualités", value: "6" },
            { label: "Matchs joués", value: "5" },
            { label: "En cours", value: "V2" },
            { label: "Prochaine date", value: "27/06" },
          ].map((s, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 text-center">
              <div className="text-3xl font-mono font-bold text-amber-500">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
