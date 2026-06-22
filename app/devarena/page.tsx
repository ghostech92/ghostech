"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollVelocity from "@/components/ScrollVelocity";
export default function DevArenaPage() {
  return (
    <div className="min-h-screen bg-[#05060A] text-white font-sans overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#1A56DB_0%,transparent_60%)] opacity-40" />
        <div className="absolute inset-0 bg-[url('/heroArena/hero.png')] bg-cover bg-center opacity-50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-xl">
            <span className="text-amber-400 text-xl">⚔️</span>
            <span className="uppercase tracking-[4px] text-sm font-mono">Ghostech Internal Competition</span>
          </div>

          <h1 className="text-7xl md:text-[92px] font-bold tracking-tighter leading-none mb-6">
            RÉVÈLE TON<br />
            <span className="bg-gradient-to-r from-amber-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">TALENT TECH</span>
          </h1>

          <p className="max-w-2xl mx-auto text-2xl text-white/70 mb-12">
            Compétition en équipe • 100% pratique • Jugée par le bureau exécutif
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/devarena/confrontations"
              className="group px-10 py-6 bg-white text-black font-semibold text-xl rounded-3xl hover:bg-amber-400 hover:scale-105 transition-all flex items-center gap-4"
            >
              Voir les Confrontations
              <span className="text-2xl group-hover:translate-x-2 transition">→</span>
            </Link>
            <Link
              href="/devarena/inscription"
              className="px-10 py-6 border-2 border-white/60 hover:border-white font-medium text-xl rounded-3xl transition-all"
            >
              Rejoindre l’Arène
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-widest flex flex-col items-center">
          SCROLL POUR DÉCOUVRIR
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent mt-3" />
        </div>
      </section>

      {/* STATS BAR */}
      <div className="border-y border-white/10 py-8 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "150+", label: "Développeurs" },
            { number: "28", label: "Projets livrés" },
            { number: "8", label: "Technos utilisées" },
            { number: "100%", label: "Pratique" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-5xl font-mono font-bold text-amber-400">{stat.number}</div>
              <div className="text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RÈGLES & FONCTIONNEMENT */}
      <section className="max-w-7xl mx-auto px-6 py-24" id="regles">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tighter">Le Fonctionnement</h2>
          <p className="text-white/60 mt-3 text-lg">Une arène conçue pour exceller</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-8">
            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-10 hover:border-amber-400/30 transition-all group">
              <div className="flex gap-6">
                <div className="text-6xl">⚡</div>
                <div>
                  <h3 className="text-3xl font-light mb-4">Fonctionnement Général</h3>
                  <ul className="space-y-4 text-lg text-white/80">
                    <li>• 3 vagues de plusieurs semaines</li>
                    <li>• Duos formés par tirage au sort</li>
                    <li>• Projets présentés devant le jury exécutif</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-10 hover:border-amber-400/30 transition-all group">
              <div className="flex gap-6">
                <div className="text-6xl">📅</div>
                <div>
                  <h3 className="text-3xl font-light mb-4">Déroulement Hebdomadaire</h3>
                  <ul className="space-y-4 text-lg text-white/80">
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
            <div className="bg-gradient-to-br from-[#1A1A1A] to-black border border-amber-400/30 rounded-3xl p-10 h-full">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl">🏆</span>
                <h3 className="text-3xl font-light">Barème d’Évaluation</h3>
              </div>
              <div className="space-y-6">
                {[
                  ["Respect du thème", "10 pts"],
                  ["Créativité & Originalité", "10 pts"],
                  ["Fonctionnalités & Technique", "15 pts"],
                  ["Présentation & Démo", "15 pts"],
                ].map(([label, pts], i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-white/10 last:border-0">
                    <span className="text-white/80">{label}</span>
                    <span className="font-mono text-amber-400 font-medium">{pts}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VAGUES TIMELINE + CARDS */}
      <section id="vagues" className="py-24 bg-black/70">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tighter text-center mb-16">Les Vagues en Cours</h2>

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
      <section className="py-28 border-t border-white/10">
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
              <p className="text-xl text-white/70 max-w-md">Rejoins les meilleurs développeurs de Ghostech et prouve ton excellence.</p>
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
              className="px-14 py-7 border border-white/40 hover:bg-white/5 rounded-3xl text-xl transition-all"
            >
              Consulter le règlement complet
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 text-center text-white/50">
        © 2026 Ghostech — DevArena. Tous droits réservés.
      </footer>
    </div>
  );
}