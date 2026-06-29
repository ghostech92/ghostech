"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { useLeaderboard } from "@/src/fonctionnalites/devarena/hooks/useLeaderboard";
import LeaderboardCard from "@/src/fonctionnalites/devarena/composants/LeaderboardCard";
import LeaderboardHero from "@/src/fonctionnalites/devarena/composants/LeaderboardHero";
import LeaderboardSkeleton from "@/src/fonctionnalites/devarena/composants/LeaderboardSkeleton";
import { WaveNavigation } from "@/src/composants/ui/WaveNavigation";

export default function Vague1Classement() {
  const { leaderboard, allWaves, allFinished, loading } = useLeaderboard("vague1");

  useEffect(() => {
    if (allFinished && leaderboard.length > 0) {
      const duration = 1.5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 20, spread: 360, ticks: 40, zIndex: 1000 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 20 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [leaderboard.length, allWaves, allFinished]);

  const top1 = leaderboard[0] || { name: "Aucun", points: 0, avatar: "https://i.pravatar.cc/150?u=1" };

  return (
    <div className="w-full min-h-screen bg-white text-gray-950 font-sans flex justify-center pb-20">
      <main className="p-4 lg:p-8 space-y-8 max-w-[1000px] w-full mx-auto pt-20">

        <LeaderboardHero 
          top1={top1} 
          title="Classement Vague 1" 
          description="Classement spécifique à la première vague de la DevArena." 
        />

        {/* LIST */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-xs font-black text-gray-400 tracking-wider uppercase">Vague 1</h3>
            <WaveNavigation currentWave="vague1" allWaves={allWaves} />
          </div>

          <div className="space-y-3">
            {loading ? (
              // Display 5 skeletons while loading
              Array.from({ length: 5 }).map((_, i) => (
                <LeaderboardSkeleton key={i} />
              ))
            ) : leaderboard.length === 0 ? (
              <div className="text-center py-10 text-gray-500 font-medium">
                Aucun participant n'a encore marqué de points dans cette vague.
              </div>
            ) : (
              leaderboard.map((user, index) => (
                <LeaderboardCard key={user.id} user={user} index={index} />
              ))
            )}
          </div>
        </section>

      </main>
    </div>
  );
}
