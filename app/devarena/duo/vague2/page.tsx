"use client";

import React from "react";
import Link from "next/link";
import { useWaveDuos } from "@/src/fonctionnalites/devarena/hooks/useWaveDuos";
import WaveDuoCard from "@/src/fonctionnalites/devarena/composants/WaveDuoCard";

export default function Vague2Page() {
  const { sortedDuos, waveStatus, isLocked } = useWaveDuos("vague2");

  if (isLocked) {
    return (
      <div className="w-full min-h-screen bg-white text-gray-950 font-sans flex items-center justify-center">
        <main className="p-4 lg:p-8 max-w-[600px] w-full mx-auto text-center pt-20">
          <div className="bg-white border-2 border-b-[6px] border-[#E5E5E5] rounded-3xl p-8 md:p-12 space-y-6 flex flex-col items-center">
            <div className="w-20 h-20 bg-[#F7F7F7] rounded-full border-2 border-[#E5E5E5] flex items-center justify-center text-3xl shadow-sm">
              🔒
            </div>
            
            <h1 className="text-3xl font-black uppercase tracking-tight text-gray-950">
              Deuxième Vague
            </h1>
            <p className="text-sm text-gray-500 font-bold leading-relaxed">
              Cette vague n'a pas encore commencé. Les duos se préparent pour la révélation des thèmes et leur semaine de développement intensif du MVP. Préparez-vous !
            </p>
            
            <button className="w-full bg-[#E5E5E5] border-b-4 border-[#CCCCCC] text-gray-400 font-black text-sm px-8 py-3 rounded-2xl cursor-not-allowed">
              Inscriptions fermées
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white text-gray-950 font-sans flex justify-center pb-20">
      <main className="p-4 lg:p-8 space-y-8 max-w-[1000px] w-full mx-auto pt-20">
      
        {/* Playful Header Banner */}
        <section className="bg-[#8B5CF6] border-b-[6px] border-[#5B21B6] rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-[10px] font-black tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full">
                Vague 2 — {waveStatus}
              </span>
              <span className="bg-[#10B981] text-white px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider">
                Synchro OK
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">
              Deuxième Vague
            </h1>
            <p className="text-xs font-bold opacity-90 leading-relaxed">
              Découvrez les duos de la deuxième vague de l'arène. Ces équipes ont eu 1 semaine to développer leur MVP et ont été évaluées selon les critères officiels.
            </p>
          </div>
          
          <div className="text-7xl shrink-0 animate-bounce" style={{ animationDuration: "3s" }}>
            🌊
          </div>
        </section>

        {/* WAVE STATUS BANNER */}
        {waveStatus === "Terminée" && (
          <div className="bg-[#F3E8FF] border-2 border-[#E9D5FF] rounded-3xl p-5 flex items-center gap-4 text-gray-950">
            <span className="text-3xl">🏁</span>
            <div>
              <h4 className="font-black text-sm uppercase tracking-tight text-[#7E22CE]">Vague Terminée</h4>
              <p className="text-xs text-gray-500 font-bold mt-0.5">
                Cette vague est officiellement terminée. Les évaluations du jury sont complétées et les points ont été attribués aux participants.
              </p>
            </div>
          </div>
        )}

        {/* LIST */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black text-gray-450 tracking-wider uppercase">Duos Ayant Présenté</h3>
          </div>

          {sortedDuos.length === 0 ? (
            <div className="bg-white border-2 border-b-4 border-[#E5E5E5] rounded-3xl p-12 text-center text-gray-400 font-bold text-sm">
              Aucun duo enregistré pour cette vague.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {sortedDuos.map((pres, index) => (
                <WaveDuoCard key={pres.id} pres={pres} index={index} />
              ))}
            </div>
          )}
        </section>

      </main>
    </div>
  );
}
