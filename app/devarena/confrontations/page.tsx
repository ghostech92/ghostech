"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const confrontations = [
  {
    id: 1,
    date: "Samedi 27 Juin 2026 - 20h00",
    theme: "Application Mobile pour l'Éducation",
    status: "upcoming",
    teamA: { name: "Duo Alpha", member1: "Amira", member2: "Koffi" },
    teamB: { name: "Duo Beta", member1: "Ange", member2: "Inès" }
  },
  {
    id: 2,
    date: "Samedi 20 Juin 2026 - 20h00",
    theme: "Dashboard Data Analytics",
    status: "completed",
    winner: "Duo Gamma",
    teamA: { name: "Duo Gamma", member1: "Mihir", member2: "Paul" },
    teamB: { name: "Duo Delta", member1: "Sara", member2: "Marc" }
  }
];

export default function DevArenaConfrontations() {
  return (
    <div className="min-h-screen bg-[#F4F4F6] text-gray-900 font-sans overflow-x-hidden">
      {/* Navbar */}
      {/* <NavbarArena /> */} {/* Décommente si tu veux l'intégrer */}

      {/* SIMPLE HEADER */}
      <section className="pt-24 pb-12 bg-white/80 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-gray-100 border border-gray-200 rounded-full mb-6">
            <span className="text-xl">⚔️</span>
            <span className="uppercase tracking-[3px] text-xs font-mono text-amber-400">Live Arena</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Confrontations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chaque samedi à 20h00, les duos s’affrontent en direct.<br />
            Rejoins le combat et soutiens tes favoris.
          </p>
        </div>
      </section>

      {/* MATCH LIST */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-light tracking-tight">Matchs à venir & passés</h2>
          <div className="text-sm text-gray-500">Saison 2026</div>
        </div>

        <div className="space-y-8">
          {confrontations.map((match) => (
            <div 
              key={match.id} 
              className="bg-white border border-gray-200 shadow-sm rounded-3xl p-8 md:p-10 hover:border-amber-400/50 transition-all group relative overflow-hidden"
            >
              {/* Background subtle accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-all" />

              {/* Status Badge */}
              <div className="absolute top-8 right-8">
                {match.status === 'upcoming' ? (
                  <span className="flex items-center gap-2 bg-amber-400/10 text-amber-400 px-5 py-2 rounded-full text-sm font-medium border border-amber-400/30">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    À VENIR
                  </span>
                ) : (
                  <span className="flex items-center gap-2 bg-emerald-400/10 text-emerald-400 px-5 py-2 rounded-full text-sm font-medium">
                    TERMINÉ
                  </span>
                )}
              </div>

              {/* Date & Theme */}
              <div className="mb-10">
                <p className="font-mono text-sm text-gray-400 tracking-widest mb-2">{match.date}</p>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900">
                  {match.theme}
                </h3>
              </div>

              {/* VS Battle */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
                {/* Team A */}
                <div className={`flex-1 bg-white/5 border rounded-2xl p-8 text-center transition-all ${
                  match.winner === match.teamA.name ? 'border-emerald-400 bg-emerald-400/10' : 'border-white/10'
                }`}>
                  {match.winner === match.teamA.name && (
                    <div className="mx-auto mb-4 w-10 h-10 bg-emerald-400 text-black rounded-full flex items-center justify-center">
                      🏆
                    </div>
                  )}
                  <h4 className="font-bold text-xl mb-4">{match.teamA.name}</h4>
                  <div className="flex justify-center gap-3 text-sm">
                    <div className="bg-gray-100 px-5 py-2 rounded-full">{match.teamA.member1}</div>
                    <div className="bg-gray-100 px-5 py-2 rounded-full">{match.teamA.member2}</div>
                  </div>
                </div>

                {/* VS */}
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-amber-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl z-10 -my-4 lg:my-0">
                  <span className="text-black font-black text-3xl tracking-tighter">VS</span>
                </div>

                {/* Team B */}
                <div className={`flex-1 bg-white/5 border rounded-2xl p-8 text-center transition-all ${
                  match.winner === match.teamB.name ? 'border-emerald-400 bg-emerald-400/10' : 'border-white/10'
                }`}>
                  {match.winner === match.teamB.name && (
                    <div className="mx-auto mb-4 w-10 h-10 bg-emerald-400 text-black rounded-full flex items-center justify-center">
                      🏆
                    </div>
                  )}
                  <h4 className="font-bold text-xl mb-4">{match.teamB.name}</h4>
                  <div className="flex justify-center gap-3 text-sm">
                    <div className="bg-gray-100 px-5 py-2 rounded-full">{match.teamB.member1}</div>
                    <div className="bg-gray-100 px-5 py-2 rounded-full">{match.teamB.member2}</div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              {match.status === 'upcoming' && (
                <div className="mt-10 flex justify-center">
                  <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-amber-400 transition-all group-hover:scale-105">
                    <span className="material-symbols-rounded">notifications</span>
                    Me notifier pour le live
                  </button>
                </div>
              )}

              {match.status === 'completed' && match.winner && (
                <div className="mt-8 text-center text-emerald-400 text-sm font-medium flex items-center justify-center gap-2">
                  <span className="material-symbols-rounded">emoji_events</span>
                  Gagnant : <span className="font-bold text-white">{match.winner}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* EXTRA SECTION - Prochain match highlight */}
      <section className="border-t border-gray-200 py-20 bg-white/60">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-widest text-amber-400 text-sm mb-4">Prochain combat</p>
          <h3 className="text-4xl font-light mb-8 text-gray-900">Samedi 27 Juin 2026 • 20h00</h3>
          
          <div className="inline-flex items-center gap-4 bg-white border border-gray-200 shadow-sm rounded-3xl px-8 py-4">
            <span>Duo Alpha</span>
            <span className="text-2xl text-amber-400">VS</span>
            <span>Duo Beta</span>
          </div>

          <Link
            href="#"
            className="mt-10 inline-block px-10 py-4 bg-amber-400 text-black rounded-2xl font-semibold hover:bg-amber-500 transition-all"
          >
            Rejoindre le live
          </Link>
        </div>
      </section>

    </div>
  );
}