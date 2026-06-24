"use client";
import React from "react";

const matchesV1 = [
  {
    id: 1,
    date: "Samedi 10 Mai 2026 - 20h00",
    theme: "Plateforme de Gestion de Tâches",
    status: "completed",
    winner: "Duo Alpha",
    teamA: { name: "Duo Alpha", member1: "Claire", member2: "Kenton" },
    teamB: { name: "Duo Beta", member1: "Jayson", member2: "Mauricio" },
    scoreA: 47,
    scoreB: 39,
  },
  {
    id: 2,
    date: "Samedi 17 Mai 2026 - 20h00",
    theme: "Application Météo Interactive",
    status: "completed",
    winner: "Duo Gamma",
    teamA: { name: "Duo Gamma", member1: "Evander", member2: "Brittny" },
    teamB: { name: "Duo Delta", member1: "Krysta", member2: "Kourtney" },
    scoreA: 44,
    scoreB: 36,
  },
  {
    id: 3,
    date: "Samedi 24 Mai 2026 - 20h00",
    theme: "Site Vitrine pour Startup",
    status: "completed",
    winner: "Duo Epsilon",
    teamA: { name: "Duo Epsilon", member1: "Zackary", member2: "Jimmie" },
    teamB: { name: "Duo Zeta", member1: "Sara", member2: "Marc" },
    scoreA: 50,
    scoreB: 42,
  },
];

export default function ConfrontationsVague1() {
  return (
    <div className="min-h-screen bg-[#F4F4F6] text-gray-900 font-sans overflow-x-hidden">

      {/* HEADER */}
      <section className="pt-24 pb-12 bg-white/80 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-emerald-100 border border-emerald-200 rounded-full mb-6">
            <span className="text-xl">🌊</span>
            <span className="uppercase tracking-[3px] text-xs font-mono text-emerald-600">Vague 1 — Terminée</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Confrontations <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Vague 1</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Retour sur tous les affrontements de la première vague.<br />
            Formation et découverte des mécaniques.
          </p>
        </div>
      </section>

      {/* MATCH LIST */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-light tracking-tight">Matchs de la Vague 1</h2>
          <span className="px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-bold rounded-full">✓ Terminée</span>
        </div>

        <div className="space-y-8">
          {matchesV1.map((match) => (
            <div
              key={match.id}
              className="bg-white border border-gray-200 shadow-sm rounded-3xl p-8 md:p-10 hover:border-emerald-300 transition-all relative overflow-hidden"
            >
              <div className="absolute top-8 right-8">
                <span className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-5 py-2 rounded-full text-sm font-medium border border-emerald-200">
                  ✓ TERMINÉ
                </span>
              </div>

              <div className="mb-10">
                <p className="font-mono text-sm text-gray-400 tracking-widest mb-2">{match.date}</p>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900">{match.theme}</h3>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Team A */}
                <div className={`flex-1 border-2 rounded-2xl p-8 text-center transition-all ${match.winner === match.teamA.name ? 'border-emerald-400 bg-emerald-50' : 'border-gray-100 bg-gray-50'}`}>
                  {match.winner === match.teamA.name && (
                    <div className="mx-auto mb-4 w-10 h-10 bg-emerald-400 text-black rounded-full flex items-center justify-center font-bold">🏆</div>
                  )}
                  <h4 className="font-bold text-xl mb-2 text-gray-900">{match.teamA.name}</h4>
                  <div className="text-3xl font-mono font-bold text-emerald-500 mb-4">{match.scoreA} pts</div>
                  <div className="flex justify-center gap-3 text-sm">
                    <div className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-gray-600">{match.teamA.member1}</div>
                    <div className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-gray-600">{match.teamA.member2}</div>
                  </div>
                </div>

                {/* VS */}
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-md z-10">
                  <span className="text-black font-black text-3xl">VS</span>
                </div>

                {/* Team B */}
                <div className={`flex-1 border-2 rounded-2xl p-8 text-center transition-all ${match.winner === match.teamB.name ? 'border-emerald-400 bg-emerald-50' : 'border-gray-100 bg-gray-50'}`}>
                  {match.winner === match.teamB.name && (
                    <div className="mx-auto mb-4 w-10 h-10 bg-emerald-400 text-black rounded-full flex items-center justify-center font-bold">🏆</div>
                  )}
                  <h4 className="font-bold text-xl mb-2 text-gray-900">{match.teamB.name}</h4>
                  <div className="text-3xl font-mono font-bold text-gray-400 mb-4">{match.scoreB} pts</div>
                  <div className="flex justify-center gap-3 text-sm">
                    <div className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-gray-600">{match.teamB.member1}</div>
                    <div className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-gray-600">{match.teamB.member2}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center text-emerald-600 text-sm font-medium flex items-center justify-center gap-2">
                <span className="material-symbols-rounded">emoji_events</span>
                Gagnant : <span className="font-bold text-gray-900 ml-1">{match.winner}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
