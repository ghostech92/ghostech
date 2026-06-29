"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { initializeArenaData } from "@/src/fonctionnalites/devarena/donnees/arena-data";

export default function DevArenaDuo() {
  const [duos, setDuos] = useState<any[]>([]);

  useEffect(() => {
    initializeArenaData();

    const syncDuos = () => {
      const storedDuos = localStorage.getItem("arena_duos");
      if (storedDuos) {
        setDuos(JSON.parse(storedDuos));
      }
    };

    syncDuos();

    window.addEventListener("storage", syncDuos);
    window.addEventListener("arena_sync", syncDuos);

    return () => {
      window.removeEventListener("storage", syncDuos);
      window.removeEventListener("arena_sync", syncDuos);
    };
  }, []);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "Date non définie";
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) return dateStr;
    const parts = dateStr.split("-");
    if (parts.length === 3 && parts[0].length === 4) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    try {
      const d = new Date(dateStr);
      if (!isNaN(d.getTime())) {
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
      }
    } catch (e) { }
    return dateStr;
  };

  const parseDateToMs = (dateStr: string) => {
    if (!dateStr) return 9999999999999;
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      return new Date(year, month, day).getTime();
    }
    const t = new Date(dateStr).getTime();
    return isNaN(t) ? 9999999999999 : t;
  };

  const sortedDuos = [...duos].sort((a, b) => parseDateToMs(a.date) - parseDateToMs(b.date));

  return (
    <div className="w-full min-h-screen bg-white text-gray-950 font-sans flex justify-center pb-20">
      <main className="p-4 lg:p-8 space-y-8 max-w-[1000px] w-full mx-auto pt-20">

        {/* Playful Header Banner */}
        <section className="bg-[#10B981] border-b-[6px] border-[#047857] rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-[10px] font-black tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full">
                Saison 2026
              </span>
              <span className="bg-white/30 text-white px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider">
                Synchro OK
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">
              Présentations Live des Duos
            </h1>
            <p className="text-xs font-bold opacity-90 leading-relaxed">
              Après 1 semaine de développement, chaque duo présente son MVP en direct devant le jury. Leur score (sur 50) est basé sur l'Innovation, la Qualité du Code, l'UX/UI et le Pitch.
            </p>
          </div>
          
          <div className="text-7xl shrink-0 animate-bounce" style={{ animationDuration: "3s" }}>
            🎤
          </div>
        </section>

        {/* LIST */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black text-gray-450 tracking-wider uppercase">Vue d'ensemble</h3>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {sortedDuos.map((pres, idx) => {
              const img1Url = pres.team.img1 && pres.team.img1.startsWith("http")
                ? pres.team.img1
                : `https://i.pravatar.cc/150?u=${pres.team.img1 || pres.team.member1Id || 'member1'}`;

              const img2Url = pres.team.img2 && pres.team.img2.startsWith("http")
                ? pres.team.img2
                : `https://i.pravatar.cc/150?u=${pres.team.img2 || pres.team.member2Id || 'member2'}`;

              const isCompleted = pres.status === "completed" || pres.status === "finished" || !!pres.score;

              return (
                <motion.div
                  key={pres.id || idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                  className={`rounded-2xl sm:rounded-3xl p-3 sm:p-6 flex flex-col justify-between hover:translate-y-[-2px] hover:shadow-sm transition-all duration-150 relative overflow-hidden ${
                    isCompleted 
                      ? "bg-[#F6FFF0] border-2 border-b-4 border-[#58CC02]" 
                      : "bg-white border-2 border-b-4 border-[#E5E5E5]"
                  }`}
                >
                  {/* Success Watermark for Completed */}
                  {isCompleted && (
                    <div className="absolute -right-8 -top-8 w-16 h-16 sm:w-24 sm:h-24 bg-[#58CC02]/10 rounded-full flex items-center justify-center pointer-events-none">
                      <span className="text-[#58CC02] text-2xl sm:text-4xl font-black translate-x-[-4px] sm:translate-x-[-6px] translate-y-[4px] sm:translate-y-[6px]">✓</span>
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3 sm:top-6 sm:right-6">
                    {isCompleted ? (
                      <span className="bg-[#58CC02] text-white border-b-2 border-[#46A302] px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl text-[8px] sm:text-[9px] font-black uppercase tracking-wider shadow-sm flex items-center gap-0.5 sm:gap-1">
                        ✓ <span className="hidden xs:inline">TERMINÉ</span>
                      </span>
                    ) : (
                      <span className="bg-[#E5F6FF] text-[#1899D6] border border-[#84D8FF] px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl text-[8px] sm:text-[9px] font-black uppercase tracking-wider shadow-sm">
                        ⚡ <span className="hidden xs:inline">EN ATTENTE</span>
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-start mb-2 pr-12 sm:pr-24">
                    <div>
                      {/* Highly Visible Date Badge */}
                      <div className={`flex items-center gap-1 sm:gap-1.5 border-2 border-b-4 px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-xl sm:rounded-2xl font-black text-[8px] sm:text-[10px] uppercase tracking-wider mb-2 sm:mb-4 w-fit shadow-sm ${
                        isCompleted 
                          ? "bg-[#F6FFF0] text-[#58CC02] border-[#A6E27F]" 
                          : "bg-[#E5F6FF] text-[#1899D6] border-[#84D8FF]"
                      }`}>
                        <span className="text-[10px] sm:text-xs">📅</span>
                        <span>{formatDate(pres.date)}</span>
                      </div>

                      <h4 className="text-xs sm:text-base font-black text-gray-950 uppercase tracking-tight leading-tight line-clamp-2">{pres.theme || "Thème non défini"}</h4>
                      
                      <div className="mt-1.5 sm:mt-2.5">
                        <span className={`inline-block text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-md ${
                          pres.vague === "vague1" 
                            ? "bg-pink-100 text-pink-700" 
                            : pres.vague === "vague2" 
                            ? "bg-orange-100 text-orange-700" 
                            : "bg-red-100 text-red-700"
                        }`}>
                          {pres.vague === "vague1" ? "Vague 1" : pres.vague === "vague2" ? "Vague 2" : "Vague 3"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Duo Members */}
                  <div className={`flex flex-col gap-1.5 sm:gap-3 border-2 rounded-xl sm:rounded-2xl p-2 sm:p-4 my-2 sm:my-5 ${
                    isCompleted 
                      ? "bg-white border-[#58CC02]/30" 
                      : "bg-[#FAFAFA] border-[#E5E5E5]"
                  }`}>
                    <h5 className="font-black text-gray-400 text-[8px] sm:text-[10px] uppercase tracking-wider truncate">{pres.team.name}</h5>
                    <div className="flex flex-col gap-1.5 sm:gap-3">
                      <div className="flex items-center gap-1.5 sm:gap-3">
                        <img src={img1Url} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white shadow-sm object-cover" alt={pres.team.member1} />
                        <span className="text-[9px] sm:text-xs font-bold text-gray-700 truncate">{pres.team.member1}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-3">
                        <img src={img2Url} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white shadow-sm object-cover" alt={pres.team.member2} />
                        <span className="text-[9px] sm:text-xs font-bold text-gray-700 truncate">{pres.team.member2}</span>
                      </div>
                    </div>
                  </div>

                  {/* Points & Stats */}
                  <div className="border-t-2 border-[#F3F4F6] pt-2 sm:pt-4 space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] sm:text-[10px] font-black text-gray-400 uppercase tracking-wider">Note</span>
                      {pres.score ? (
                        <div className="text-xs sm:text-sm font-black text-gray-950">{pres.score} <span className="text-[8px] sm:text-xs text-gray-400 font-bold">/ 50</span></div>
                      ) : (
                        <div className="text-[8px] sm:text-[9px] font-black text-gray-400 bg-[#F3F4F6] px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg">Attente</div>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-[8px] sm:text-[10px] font-black text-gray-400 uppercase tracking-wider">Points</span>
                      {pres.pointsGagnes ? (
                        <div className="inline-flex items-center gap-0.5 sm:gap-1 bg-[#FEF3C7] text-[#D97706] border border-[#FDE68A] px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl font-black text-[9px] sm:text-xs">
                          👑 {String(pres.pointsGagnes).includes("PTS") ? pres.pointsGagnes : `+${pres.pointsGagnes} PTS`}
                        </div>
                      ) : (
                        <div className="text-[8px] sm:text-[9px] font-black text-gray-400 bg-[#F3F4F6] px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg">--</div>
                      )}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
}