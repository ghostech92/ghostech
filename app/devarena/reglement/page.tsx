"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function ReglementPage() {
  const triggerConfetti = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { x, y }
    });
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-950 font-sans flex justify-center pb-20">
      <main className="p-4 lg:p-8 space-y-8 max-w-[850px] w-full mx-auto pt-20">

        {/* Playful Header Banner (Violet) */}
        <section className="bg-[#8B5CF6] border-b-[6px] border-[#6D28D9] rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-[10px] font-black tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full">
                Charte officielle
              </span>
              <span className="bg-white/30 text-white px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider">
                Saison 2026
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">
              Règlement de l'Arène
            </h1>
            <p className="text-xs font-bold opacity-90 leading-relaxed">
              Pour assurer une compétition équitable et stimulante, chaque duo s'engage à respecter les règles de conduite et les critères d'évaluation.
            </p>
          </div>
          
          <div 
            className="text-7xl shrink-0 animate-bounce cursor-pointer select-none" 
            style={{ animationDuration: "3s" }}
            onClick={triggerConfetti}
          >
            📜
          </div>
        </section>

        {/* Rule Sections */}
        <section className="space-y-6">
          
          {/* 1. Éligibilité et Inscription */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white border-2 border-b-4 border-[#E5E5E5] rounded-3xl p-6 hover:translate-y-[-2px] hover:shadow-sm transition-all duration-150"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-100 border-b-4 border-violet-300 flex items-center justify-center text-2xl shrink-0">
                👥
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-violet-600 uppercase tracking-wider">Règle 01</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  <span className="text-[9px] font-black uppercase tracking-wider bg-violet-50 text-violet-700 px-2 py-0.5 rounded">
                    Inscription
                  </span>
                </div>
                <h3 className="text-lg font-black text-gray-950 uppercase tracking-tight">
                  Éligibilité & Constitution des Duos
                </h3>
                <p className="text-xs text-gray-500 font-bold leading-relaxed">
                  La participation est exclusivement réservée aux membres actifs de la communauté **Ghostech**. Les candidats doivent s'inscrire en binôme (Duo). Une fois la vague lancée, la composition du duo est définitive et ne peut être modifiée.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. Déroulement des Vagues */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="bg-white border-2 border-b-4 border-[#E5E5E5] rounded-3xl p-6 hover:translate-y-[-2px] hover:shadow-sm transition-all duration-150"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 border-b-4 border-emerald-300 flex items-center justify-center text-2xl shrink-0">
                🌊
              </div>
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-emerald-600 uppercase tracking-wider">Règle 02</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  <span className="text-[9px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded">
                    Format
                  </span>
                </div>
                <h3 className="text-lg font-black text-gray-950 uppercase tracking-tight">
                  Le Déroulement des Vagues
                </h3>
                <p className="text-xs text-gray-500 font-bold leading-relaxed">
                  Le tournoi se structure en **3 vagues éliminatoires** successives. Voici le cycle de vie de chaque vague :
                </p>

                {/* Vertical Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="bg-[#FAFAFA] border-2 border-b-4 border-[#E5E5E5] rounded-2xl p-4 space-y-2">
                    <span className="inline-block text-[9px] font-black bg-pink-100 text-pink-700 px-2 py-0.5 rounded">
                      ÉTAPE 1
                    </span>
                    <h4 className="text-xs font-black text-gray-950 uppercase">Lancement</h4>
                    <p className="text-[10px] text-gray-400 font-bold leading-snug">
                      Annonce officielle du thème et ouverture des dépôts de projets.
                    </p>
                  </div>

                  <div className="bg-[#FAFAFA] border-2 border-b-4 border-[#E5E5E5] rounded-2xl p-4 space-y-2">
                    <span className="inline-block text-[9px] font-black bg-orange-100 text-orange-700 px-2 py-0.5 rounded">
                      ÉTAPE 2
                    </span>
                    <h4 className="text-xs font-black text-gray-950 uppercase">Développement</h4>
                    <p className="text-[10px] text-gray-400 font-bold leading-snug">
                      Les duos ont exactement **1 semaine** pour concevoir et déployer leur MVP.
                    </p>
                  </div>

                  <div className="bg-[#FAFAFA] border-2 border-b-4 border-[#E5E5E5] rounded-2xl p-4 space-y-2">
                    <span className="inline-block text-[9px] font-black bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">
                      ÉTAPE 3
                    </span>
                    <h4 className="text-xs font-black text-gray-950 uppercase">Pitch & Démo</h4>
                    <p className="text-[10px] text-gray-400 font-bold leading-snug">
                      Présentation en direct le samedi soir devant le jury pour attribution de la note.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Critères d'Évaluation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="bg-white border-2 border-b-4 border-[#E5E5E5] rounded-3xl p-6 hover:translate-y-[-2px] hover:shadow-sm transition-all duration-150"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 border-b-4 border-amber-300 flex items-center justify-center text-2xl shrink-0">
                📊
              </div>
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-amber-600 uppercase tracking-wider">Règle 03</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  <span className="text-[9px] font-black uppercase tracking-wider bg-amber-50 text-amber-700 px-2 py-0.5 rounded">
                    Barème
                  </span>
                </div>
                <h3 className="text-lg font-black text-gray-950 uppercase tracking-tight">
                  Critères d'Évaluation (Note sur 50)
                </h3>
                <p className="text-xs text-gray-500 font-bold leading-relaxed">
                  La notation globale repose sur quatre piliers fondamentaux évalués par les membres du jury :
                </p>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white border-2 border-b-4 border-pink-200 rounded-2xl p-4 flex items-start gap-3">
                    <span className="text-2xl mt-0.5">🎯</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs font-black text-gray-950 uppercase">Respect du Thème</h4>
                        <span className="text-[9px] font-black bg-pink-100 text-pink-700 px-2 py-0.5 rounded-md">/10</span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-bold mt-1 leading-normal">
                        Adéquation du projet avec le thème imposé et le cahier des charges de la vague.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-b-4 border-teal-200 rounded-2xl p-4 flex items-start gap-3">
                    <span className="text-2xl mt-0.5">💡</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs font-black text-gray-950 uppercase">Créativité & Originalité</h4>
                        <span className="text-[9px] font-black bg-teal-100 text-teal-700 px-2 py-0.5 rounded-md">/10</span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-bold mt-1 leading-normal">
                        Originalité de l'idée, créativité dans la résolution du problème et approche innovante.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-b-4 border-orange-200 rounded-2xl p-4 flex items-start gap-3">
                    <span className="text-2xl mt-0.5">⚙️</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs font-black text-gray-950 uppercase">Fonctionnalités</h4>
                        <span className="text-[9px] font-black bg-orange-100 text-orange-700 px-2 py-0.5 rounded-md">/15</span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-bold mt-1 leading-normal">
                        Richesse, robustesse et finition des fonctionnalités proposées dans le MVP.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-b-4 border-indigo-200 rounded-2xl p-4 flex items-start gap-3">
                    <span className="text-2xl mt-0.5">🎤</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs font-black text-gray-950 uppercase">Présentation & Démo</h4>
                        <span className="text-[9px] font-black bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md">/15</span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-bold mt-1 leading-normal">
                        Clarté de la présentation orale, qualité de la démonstration live et réponses aux questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </section>

        {/* Motivational Footer Call to Action */}
        <section className="text-center pt-8">
          <Link
            href="/devarena/actualites"
            className="inline-block py-4 px-8 rounded-2xl bg-[#58CC02] border-b-[6px] border-[#46A302] hover:bg-[#61E002] active:border-b-0 active:translate-y-[6px] active:mb-[6px] text-white font-black text-sm tracking-wider uppercase shadow-md transition-all duration-100"
          >
            Entrer dans l'Arène
          </Link>
        </section>

      </main>
    </div>
  );
}

