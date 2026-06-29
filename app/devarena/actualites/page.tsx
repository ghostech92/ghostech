"use client";

import React, { useState } from "react";
import { useArenaData } from "@/src/fonctionnalites/devarena/hooks/useArenaData";
import HeroArena from "@/src/fonctionnalites/devarena/composants/dashboard/HeroArena";
import OverviewCards from "@/src/fonctionnalites/devarena/composants/dashboard/OverviewCards";
import WavesSection from "@/src/fonctionnalites/devarena/composants/dashboard/WavesSection";
import LeaderboardPreview from "@/src/fonctionnalites/devarena/composants/dashboard/LeaderboardPreview";
import RightSidebar from "@/src/fonctionnalites/devarena/composants/dashboard/RightSidebar";

export default function ActualitesDashboard() {
  const {
    participants,
    waves,
    currentUser,
    top1,
    top2,
    top3,
    userRankDisplay,
    upcomingDuos,
  } = useArenaData();

  const [searchQuery, setSearchQuery] = useState("");

  const filteredSearchList = participants
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 6);

  return (
    <div className="w-full min-h-screen bg-white text-gray-950 font-sans flex justify-center pb-20">
      <div className="flex flex-col lg:flex-row w-full max-w-[1400px] mx-auto p-4 lg:p-8 gap-8">
        
        {/* ============================================================ */}
        {/* ZONE CENTRALE PRINCIPALE */}
        {/* ============================================================ */}
        <main className="flex-1 space-y-8">
          <HeroArena />
          <OverviewCards top1={top1} currentUser={currentUser} />
          <WavesSection waves={waves} />
          <LeaderboardPreview 
            top1={top1} 
            top2={top2} 
            top3={top3} 
            currentUser={currentUser} 
            userRankDisplay={userRankDisplay} 
          />
        </main>

        {/* ============================================================ */}
        {/* COLONNE DROITE (RIGHT SIDEBAR) */}
        {/* ============================================================ */}
        <RightSidebar 
          upcomingDuos={upcomingDuos}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filteredSearchList={filteredSearchList}
        />

      </div>
    </div>
  );
}