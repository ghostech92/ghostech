import React from "react";
import Link from "next/link";
import { Wave } from "@/src/fonctionnalites/devarena/hooks/useLeaderboard";

interface WaveNavigationProps {
  currentWave: "global" | "vague1" | "vague2" | "vague3";
  allWaves: Wave[];
}

export function WaveNavigation({ currentWave, allWaves }: WaveNavigationProps) {
  const isLocked = (waveId: string) => {
    return allWaves.find((w) => w.id === waveId)?.status === "À venir";
  };

  const getWaveIcon = (waveId: string) => {
    return isLocked(waveId) ? "🔒" : "🌊";
  };

  const getLinkClasses = (isActive: boolean) => {
    if (isActive) {
      return "bg-[#10B981] border-b-4 border-[#047857] text-white font-black text-xs px-4 py-2 rounded-xl active:translate-y-[2px] active:border-b-2 transition-all flex items-center gap-1.5";
    }
    return "bg-[#F3F4F6] border-2 border-b-4 border-[#E5E5E5] hover:bg-gray-100 text-gray-700 font-black text-xs px-4 py-2 rounded-xl active:translate-y-[2px] active:border-b-2 transition-all flex items-center gap-1.5";
  };

  return (
    <div className="flex flex-wrap gap-2.5">
      <Link 
        href="/devarena/classement" 
        className={getLinkClasses(currentWave === "global")}
      >
        Global
      </Link>
      
      <Link 
        href="/devarena/classement/vague1" 
        className={getLinkClasses(currentWave === "vague1")}
      >
        {getWaveIcon("vague1")} Vague 1
      </Link>
      
      <Link 
        href="/devarena/classement/vague2" 
        className={getLinkClasses(currentWave === "vague2")}
      >
        {getWaveIcon("vague2")} Vague 2
      </Link>
      
      <Link 
        href="/devarena/classement/vague3" 
        className={getLinkClasses(currentWave === "vague3")}
      >
        {getWaveIcon("vague3")} Vague 3
      </Link>
    </div>
  );
}
