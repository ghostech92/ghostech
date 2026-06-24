"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollVelocity from "@/components/ScrollVelocity";
export default function DevArenaPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F6] text-gray-900 font-sans overflow-x-hidden">

      {/* SIMPLE HEADER & STATS BAR */}
      <div className="pt-24 pb-8 bg-white/80 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Bienvenue dans l'<span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Arène</span>
          </h1>
          <p className="text-xl text-gray-600">
            Le tableau de bord central de la compétition interne de Ghostech.
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
              <div className="text-white/60 mt-1 text-gray-500">{stat.label}</div>
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
            <div className="bg-white border border-gray-200 shadow-sm backdrop-blur-2xl rounded-3xl p-10 hover:border-amber-400/50 transition-all group">
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
            <div className="bg-white border border-gray-200 shadow-sm backdrop-blur-2xl rounded-3xl p-10 hover:border-amber-400/50 transition-all group">
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
            </div>
          </div>
        </div>
      </section>

      {/* VAGUES TIMELINE + CARDS */}
      <section id="vagues" className="py-24 bg-white/60 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tighter text-center mb-16 text-gray-900">Les Vagues en Cours</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Vague 1", status: "Terminée", desc: "Formation et découverte des mécaniques", img: "/heroArena/vague1.jpg", progress: "100%", color: "bg-emerald-500" },
              { num: "02", title: "Vague 2", status: "En cours", desc: "Confrontations créatives intenses", img: "/heroArena/vague2.jpg", progress: "65%", color: "bg-amber-400" },
              { num: "03", title: "Vague 3", status: "À venir", desc: "Finale & projets innovants", img: "/heroArena/vague3.jpg", progress: "0%", color: "bg-white/20" },
            ].map((vague, i) => (
              <div key={i} className={`vague-card ${i === 1 ? 'scale-105 shadow-2xl shadow-amber-500/10' : ''}`}>
                <div className="vague-content">
                  
                  {/* Visually Front (CSS .vague-back) */}
                  <div className="vague-back">
                    <div className="vague-back-content">
                      <div className="text-8xl font-light text-white/30">{vague.num}</div>
                      <h3 className="text-4xl font-bold">{vague.title}</h3>
                      <div className="mt-4 px-6 py-2 border border-white/20 rounded-full text-sm uppercase tracking-widest text-amber-400 animate-pulse">
                        Survolez-moi
                      </div>
                    </div>
                  </div>

                  {/* Visually Back (CSS .vague-front) */}
                  <div className="vague-front">
                    <div className="vague-img">
                      <div className="vague-circle"></div>
                      <div className="vague-circle" id="vague-right"></div>
                      <div className="vague-circle" id="vague-bottom"></div>
                      <div className="absolute inset-0 bg-black/60 z-0"></div>
                      <Image
                        src={vague.img}
                        alt={vague.title}
                        fill
                        className="object-cover opacity-40 mix-blend-overlay z-[-1]"
                      />
                    </div>
                    
                    <div className="vague-front-content z-10">
                      <small className="vague-badge text-amber-400">{vague.status}</small>
                      <div className="vague-description">
                        <div className="vague-title">
                          <p className="font-bold text-xl">{vague.title}</p>
                          <span className="text-xs text-white/50">{vague.progress}</span>
                        </div>
                        <p className="text-sm text-white/80 leading-snug">{vague.desc}</p>
                        <div className="vague-card-footer">
                          Progression
                          <div className="w-full h-1.5 bg-white/20 rounded-full mt-1">
                            <div className={`h-full ${vague.color} rounded-full transition-all duration-1000`} style={{ width: vague.progress }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL + IMAGE */}
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
              <h2 className="text-5xl font-bold tracking-tighter mb-4">Prêt à entrer dans l’Arène ?</h2>
              <p className="text-xl text-gray-300 max-w-md">Rejoins les meilleurs développeurs de Ghostech et prouve ton excellence.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/devarena/inscription"
              className="px-14 py-7 bg-gradient-to-r from-amber-400 to-yellow-400 text-black font-bold text-2xl rounded-3xl hover:scale-105 transition-all"
            >
              S’inscrire maintenant
            </Link>
            <Link
              href="/devarena/reglement"
              className="px-14 py-7 border border-gray-300 hover:bg-gray-100 rounded-3xl text-xl text-gray-800 transition-all"
            >
              Consulter le règlement complet
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}