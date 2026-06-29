import React from "react";
import Link from "next/link";

interface LeaderboardPreviewProps {
  top1: any;
  top2: any;
  top3: any;
  currentUser: any;
  userRankDisplay: string;
}

export default function LeaderboardPreview({ top1, top2, top3, currentUser, userRankDisplay }: LeaderboardPreviewProps) {
  return (
    <section className="bg-white border-2 border-b-4 border-[#E5E5E5] rounded-3xl p-6 space-y-5 hover:translate-y-[-2px] hover:shadow-sm transition-all duration-150">
      <div className="flex items-center justify-between">
        <Link href="/devarena/classement" className="font-black text-sm text-gray-950 uppercase tracking-wider hover:underline">
          Best Classement <span className="text-gray-400 font-medium">{">"}</span>
        </Link>
      </div>

      <div className="flex items-end justify-center gap-6 py-2">
        <div className="text-center">
          <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto flex items-center justify-center mb-2 overflow-hidden">
            {top2 ? <img src={top2.avatar} className="rounded-full w-full h-full object-cover" alt={top2.name} /> : <span className="text-gray-300">?</span>}
          </div>
          <p className="text-xs font-bold text-gray-900">{top2 ? top2.name : "-"}</p>
          <span className="text-[10px] text-gray-400 font-bold">{top2 ? top2.points?.toLocaleString() + " PTS" : ""}</span>
        </div>
        <div className="text-center relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-lg">👑</div>
          <div className="w-16 h-16 bg-amber-50 border-4 border-amber-400 rounded-full mx-auto flex items-center justify-center mb-2 overflow-hidden">
            {top1 ? <img src={top1.avatar} className="rounded-full w-full h-full object-cover" alt={top1.name} /> : <span className="text-gray-300">?</span>}
          </div>
          <p className="text-sm font-bold text-gray-900">{top1 ? top1.name : "En attente"}</p>
          <span className="text-[10px] text-orange-500 font-bold">{top1 ? top1.points?.toLocaleString() + " PTS" : ""}</span>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto flex items-center justify-center mb-2 overflow-hidden">
            {top3 ? <img src={top3.avatar} className="rounded-full w-full h-full object-cover" alt={top3.name} /> : <span className="text-gray-300">?</span>}
          </div>
          <p className="text-xs font-bold text-gray-900">{top3 ? top3.name : "-"}</p>
          <span className="text-[10px] text-gray-400 font-bold">{top3 ? top3.points?.toLocaleString() + " PTS" : ""}</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs font-bold bg-[#FAFAFA] p-3 rounded-2xl border-2 border-b-4 border-[#E5E5E5]">
        <div className="flex items-center gap-3">
          <span className="text-gray-400 w-4">{userRankDisplay}</span>
          {currentUser && <img src={currentUser.avatar} className="w-6 h-6 rounded-full object-cover" alt={currentUser.name} />}
          <span className="text-gray-900">{currentUser?.name || "-"}</span>
        </div>
        <span className="text-gray-400">{currentUser ? currentUser.points?.toLocaleString() + " PTS" : ""}</span>
      </div>
    </section>
  );
}
