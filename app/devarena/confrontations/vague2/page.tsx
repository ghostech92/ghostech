"use client";
import React from "react";
import Link from "next/link";

const matchesV2 = [
  {
    id: 1,
    date: "Samedi 14 Juin 2026 - 20h00",
    theme: "Dashboard Data Analytics",
    status: "completed",
    winner: "Duo Gamma",
    teamA: { name: "Duo Gamma", member1: "Mihir", member2: "Paul" },
    teamB: { name: "Duo Delta", member1: "Sara", member2: "Marc" },
    scoreA: 45,
    scoreB: 38,
  },
  {
    id: 2,
    date: "Samedi 21 Juin 2026 - 20h00",
    theme: "Application Mobile pour l'Éducation",
    status: "completed",
    winner: "Duo Alpha",
    teamA: { name: "Duo Alpha", member1: "Amira", member2: "Koffi" },
    teamB: { name: "Duo Beta", member1: "Ange", member2: "Inès" },
    scoreA: 48,
    scoreB: 41,
  },
  {
    id: 3,
    date: "Samedi 27 Juin 2026 - 20h00",
    theme: "Plateforme E-commerce Moderne",
    status: "upcoming",
    winner: null,
    teamA: { name: "Duo Epsilon", member1: "Claire", member2: "Zackary" },
    teamB: { name: "Duo Zeta", member1: "Evander", member2: "Brittny" },
    scoreA: null,
    scoreB: null,
  },
];

export default function ConfrontationsVague2() {
  return (
    <div className="min-h-screen bg-[#F4F4F6] text-gray-900 font-sans overflow-x-hidden">

      {/* HEADER */}
      <section className="pt-24 pb-12 bg-white/80 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-amber-100 border border-amber-200 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse inline-block"></span>
            <span className="uppercase tracking-[3px] text-xs font-mono text-amber-600">Vague 2 — En cours</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Confrontations <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Vague 2</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Les confrontations de la deuxième vague sont en cours.<br />
            Restez connectés pour le prochain match !
          </p>
        </div>
      </section>

      {/* MATCH LIST */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-light tracking-tight">Matchs de la Vague 2</h2>
          <span className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 text-sm font-bold rounded-full border border-amber-200">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            En cours
          </span>
        </div>

        <div className="space-y-8">
          {matchesV2.map((match) => (
            <div
              key={match.id}
              className="bg-white border border-gray-200 shadow-sm rounded-3xl p-8 md:p-10 hover:border-amber-300 transition-all relative overflow-hidden"
            >
              <div className="absolute top-8 right-8">
                {match.status === "upcoming" ? (
                  <span className="flex items-center gap-2 bg-amber-50 text-amber-600 px-5 py-2 rounded-full text-sm font-medium border border-amber-200">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    À VENIR
                  </span>
                ) : (
                  <span className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-5 py-2 rounded-full text-sm font-medium border border-emerald-200">
                    ✓ TERMINÉ
                  </span>
                )}
              </div>

              <div className="mb-10">
                <p className="font-mono text-sm text-gray-400 tracking-widest mb-2">{match.date}</p>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900">{match.theme}</h3>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Team A */}
                <div className={`flex-1 border-2 rounded-2xl p-8 text-center transition-all ${match.winner === match.teamA.name ? 'border-emerald-400 bg-emerald-50' : 'border-gray-100 bg-gray-50'}`}>
                  {match.winner === match.teamA.name && (
                    <div className="mx-auto mb-4 w-10 h-10 bg-emerald-400 text-black rounded-full flex items-center justify-center">🏆</div>
                  )}
                  <h4 className="font-bold text-xl mb-2 text-gray-900">{match.teamA.name}</h4>
                  {match.scoreA !== null ? (
                    <div className={`text-3xl font-mono font-bold mb-4 ${match.winner === match.teamA.name ? 'text-emerald-500' : 'text-gray-400'}`}>{match.scoreA} pts</div>
                  ) : (
                    <div className="text-2xl font-mono text-gray-300 mb-4">—</div>
                  )}
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
                    <div className="mx-auto mb-4 w-10 h-10 bg-emerald-400 text-black rounded-full flex items-center justify-center">🏆</div>
                  )}
                  <h4 className="font-bold text-xl mb-2 text-gray-900">{match.teamB.name}</h4>
                  {match.scoreB !== null ? (
                    <div className={`text-3xl font-mono font-bold mb-4 ${match.winner === match.teamB.name ? 'text-emerald-500' : 'text-gray-400'}`}>{match.scoreB} pts</div>
                  ) : (
                    <div className="text-2xl font-mono text-gray-300 mb-4">—</div>
                  )}
                  <div className="flex justify-center gap-3 text-sm">
                    <div className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-gray-600">{match.teamB.member1}</div>
                    <div className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-gray-600">{match.teamB.member2}</div>
                  </div>
                </div>
              </div>

              {match.status === "completed" && match.winner && (
                <div className="mt-8 text-center text-emerald-600 text-sm font-medium flex items-center justify-center gap-2">
                  <span className="material-symbols-rounded">emoji_events</span>
                  Gagnant : <span className="font-bold text-gray-900 ml-1">{match.winner}</span>
                </div>
              )}

              {match.status === "upcoming" && (
                <div className="mt-10 flex justify-center">
                  <button className="flex items-center gap-3 bg-amber-400 text-black px-8 py-4 rounded-2xl font-semibold hover:bg-amber-500 transition-all">
                    <span className="material-symbols-rounded">notifications</span>
                    Me notifier pour le live
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PROCHAIN MATCH */}
      <section className="border-t border-gray-200 py-20 bg-white/60">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-widest text-amber-500 text-sm mb-4">Prochain combat</p>
          <h3 className="text-4xl font-light mb-8 text-gray-900">Samedi 27 Juin 2026 • 20h00</h3>
          <div className="inline-flex items-center gap-4 bg-white border border-gray-200 shadow-sm rounded-3xl px-8 py-4 text-gray-700">
            <span>Duo Epsilon</span>
            <span className="text-2xl text-amber-400">VS</span>
            <span>Duo Zeta</span>
          </div>
          <div className="mt-8">
            <Link href="#" className="mt-10 inline-block px-10 py-4 bg-amber-400 text-black rounded-2xl font-semibold hover:bg-amber-500 transition-all">
              Rejoindre le live
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
