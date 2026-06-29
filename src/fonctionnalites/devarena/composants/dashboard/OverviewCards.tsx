import React from "react";
import Link from "next/link";

const getAvatarUrl = (imgSeed: string) => {
  if (imgSeed && (imgSeed.startsWith("http://") || imgSeed.startsWith("https://"))) {
    return imgSeed;
  }
  return `https://i.pravatar.cc/150?u=${imgSeed || "1"}`;
};

interface OverviewCardsProps {
  top1: any;
  currentUser: any;
}

export default function OverviewCards({ top1, currentUser }: OverviewCardsProps) {
  return (
    <section className="space-y-4">
      <h3 className="text-sm font-black text-gray-950 uppercase tracking-widest">Aperçu</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* 1. Carte Premier du Classement Global */}
        <div className="bg-white border-2 border-b-4 border-[#E5E5E5] rounded-3xl p-6 flex flex-col justify-between hover:translate-y-[-2px] hover:shadow-sm transition-all duration-150">
          {top1 ? (
            <>
              <div className="flex flex-col items-center text-center">
            <div className="relative w-16 h-16 bg-yellow-50 border-b-4 border-yellow-400 rounded-full flex items-center justify-center text-2xl mb-3">
              <img src={getAvatarUrl(top1.avatar)} className="rounded-full w-full h-full object-cover p-0.5" alt={top1.name} />
              <div className="absolute -bottom-2 bg-yellow-400 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest border-2 border-white flex items-center gap-0.5">
                GOAT 🐐
              </div>
            </div>
            <h4 className="font-black text-gray-950">{top1.name}</h4>
            <p className="text-xs text-gray-400 font-bold mt-1">
              <span className="text-yellow-600">{top1.level || "Platinum"}</span> • 🏅 {top1.points.toLocaleString()} PTS
            </p>
          </div>

          <div className="mt-6 border-t border-gray-100 pt-4 space-y-3">
            <div>
              <div className="flex justify-between text-[11px] font-black text-gray-400 mb-2">
                <span>Niveau Exp</span>
                <span>{top1.level || "Platinum"}</span>
              </div>
              <div className="w-full h-3 bg-[#E5E5E5] rounded-full overflow-hidden">
                <div className="w-full h-full bg-yellow-400 border-b-2 border-yellow-500 rounded-full"></div>
              </div>
            </div>
            
              <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold">
                <span>Points: {top1.points.toLocaleString()}</span>
                <span className="text-yellow-600 flex items-center gap-1">GOAT 🐐 (Meneur)</span>
              </div>
            </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center text-center h-full text-gray-400">
              <span className="text-3xl mb-2">⏳</span>
              <p className="text-xs font-bold uppercase">En attente de résultats...</p>
            </div>
          )}
        </div>

        {/* 2. Carte Master Badge */}
        <div className="bg-white border-2 border-b-4 border-[#E5E5E5] rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:translate-y-[-2px] hover:shadow-sm transition-all duration-150 relative overflow-hidden">
          <div className="absolute top-1/3 left-4 w-12 h-12 bg-gray-50 rounded-full blur-md opacity-60 transform -rotate-45" />
          <div className="absolute top-1/3 right-4 w-12 h-12 bg-gray-50 rounded-full blur-md opacity-60 transform rotate-45" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="text-6xl drop-shadow-md mb-2 animate-bounce">🏆</div>
            <h4 className="font-black text-2xl text-orange-400 uppercase tracking-widest">{currentUser ? currentUser.level : "Non Défini"}</h4>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Rang Actuel</p>
          </div>

          <Link 
            href="/devarena/classement" 
            className="mt-6 relative z-10 bg-[#58CC02] border-b-4 border-[#46A302] hover:bg-[#61E002] active:border-b-0 active:translate-y-[4px] active:mb-[4px] text-white font-black text-xs tracking-wider uppercase px-8 py-2.5 rounded-2xl shadow-sm transition-all duration-100"
          >
            Voir Classement
          </Link>
        </div>

      </div>
    </section>
  );
}
