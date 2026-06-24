"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ReglementPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F6] text-gray-900 font-sans overflow-x-hidden">

      {/* SIMPLE HEADER & STATS BAR */}
      <div className="pt-24 pb-8 bg-white/80 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-gray-100 border border-gray-200 rounded-full mb-6">
            <span className="text-xl">📋</span>
            <span className="uppercase tracking-[3px] text-xs font-mono text-amber-500">Règlement Officiel</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Le <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Règlement</span>
          </h1>
          <p className="text-xl text-gray-600">
            Tout ce que tu dois savoir pour participer à la DevArena Ghostech.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-12">
          {[
            { number: "150+", label: "Développeurs" },
            { number: "28", label: "Projets livrés" },
            { number: "8", label: "Technos utilisées" },
            { number: "100%", label: "Pratique" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-mono font-bold text-amber-400">{stat.number}</div>
              <div className="text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RÈGLES & FONCTIONNEMENT */}
      <section className="max-w-7xl mx-auto px-6 py-24" id="regles">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tighter">Le Fonctionnement</h2>
          <p className="text-gray-500 mt-3 text-lg">Une arène conçue pour exceller</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-3xl p-10 hover:border-amber-400/50 transition-all group">
              <div className="flex gap-6">
                <div className="text-6xl">⚡</div>
                <div>
                  <h3 className="text-3xl font-light mb-4">Fonctionnement Général</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li>• 3 vagues de plusieurs semaines</li>
                    <li>• Duos formés par tirage au sort</li>
                    <li>• Projets présentés devant le jury exécutif</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-3xl p-10 hover:border-amber-400/50 transition-all group">
              <div className="flex gap-6">
                <div className="text-6xl">📅</div>
                <div>
                  <h3 className="text-3xl font-light mb-4">Déroulement Hebdomadaire</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li>• Thème annoncé chaque lundi</li>
                    <li>• Livraison avant samedi 20h00</li>
                    <li>• Démonstration live + Q&R</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-3xl p-10 hover:border-amber-400/50 transition-all group">
              <div className="flex gap-6">
                <div className="text-6xl">⚖️</div>
                <div>
                  <h3 className="text-3xl font-light mb-4">Règles de Conduite</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li>• Respect entre tous les participants</li>
                    <li>• Code produit individuellement ou en duo assigné</li>
                    <li>• Toute triche entraîne une disqualification immédiate</li>
                    <li>• Les décisions du jury sont définitives</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Évaluation Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-gray-50 to-white border border-amber-400/30 rounded-3xl p-10 h-full shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl">🏆</span>
                <h3 className="text-3xl font-light text-gray-800">Barème d'Évaluation</h3>
              </div>
              <div className="space-y-6">
                {[
                  ["Respect du thème", "10 pts"],
                  ["Créativité & Originalité", "10 pts"],
                  ["Fonctionnalités & Technique", "15 pts"],
                  ["Présentation & Démo", "15 pts"],
                ].map(([label, pts], i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-gray-200 last:border-0">
                    <span className="text-gray-700">{label}</span>
                    <span className="font-mono text-amber-400 font-medium">{pts}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🎯</span>
                  <h4 className="text-xl font-semibold text-gray-800">Total : 50 points</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Les points obtenus par un duo sont ajoutés au score individuel de chaque membre. À la vague suivante, les équipes changent mais les points sont conservés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VAGUES SECTION */}
      <section className="py-24 bg-white/60 border-t border-gray-200" id="vagues">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tighter text-center mb-4 text-gray-900">Les 3 Vagues</h2>
          <p className="text-center text-gray-500 mb-16">Structure de la compétition sur toute la saison</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Vague 1", status: "Terminée", desc: "Formation et découverte des mécaniques de la compétition. Les duos se forment et livrent leur premier projet.", color: "border-emerald-400 bg-emerald-50", badge: "bg-emerald-100 text-emerald-700", progress: "100%", bar: "bg-emerald-500" },
              { num: "02", title: "Vague 2", status: "En cours", desc: "Confrontations créatives intenses. Les duos sont redistribués et les enjeux montent.", color: "border-amber-400 bg-amber-50", badge: "bg-amber-100 text-amber-700", progress: "65%", bar: "bg-amber-400" },
              { num: "03", title: "Vague 3", status: "À venir", desc: "Finale & projets innovants. Les meilleurs s'affrontent pour la victoire ultime.", color: "border-gray-200 bg-gray-50", badge: "bg-gray-100 text-gray-500", progress: "0%", bar: "bg-gray-300" },
            ].map((vague, i) => (
              <div key={i} className={`rounded-3xl border-2 p-8 ${vague.color} transition-all hover:shadow-md`}>
                <div className="flex items-start justify-between mb-6">
                  <span className="text-6xl font-light text-gray-300">{vague.num}</span>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest ${vague.badge}`}>{vague.status}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{vague.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{vague.desc}</p>
                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>Progression</span>
                    <span>{vague.progress}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className={`h-full ${vague.bar} rounded-full transition-all duration-1000`} style={{ width: vague.progress }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-28 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="relative rounded-3xl overflow-hidden mb-12">
            <Image
              src="/heroArena/team-arena.jpg"
              alt="Équipe DevArena"
              width={1200}
              height={600}
              className="object-cover w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
            <div className="absolute bottom-12 left-12 right-12 text-left">
              <h2 className="text-5xl font-bold tracking-tighter mb-4 text-white">Prêt à entrer dans l'Arène ?</h2>
              <p className="text-xl text-gray-300 max-w-md">Rejoins les meilleurs développeurs de Ghostech et prouve ton excellence.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/devarena/inscription"
              className="px-14 py-7 bg-gradient-to-r from-amber-400 to-yellow-400 text-black font-bold text-2xl rounded-3xl hover:scale-105 transition-all"
            >
              S'inscrire maintenant
            </Link>
            <Link
              href="/devarena/confrontations"
              className="px-14 py-7 border border-gray-300 hover:bg-gray-100 rounded-3xl text-xl text-gray-800 transition-all"
            >
              Voir les confrontations
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
