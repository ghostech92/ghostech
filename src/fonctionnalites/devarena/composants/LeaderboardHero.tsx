import React from "react";

interface LeaderboardHeroProps {
  top1: { name: string; points: number; avatar: string };
  title: string;
  description: string;
}

export default function LeaderboardHero({ top1, title, description }: LeaderboardHeroProps) {
  return (
    <section className="bg-[#EAB308] border-b-[6px] border-[#A16207] rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="space-y-3 max-w-xl text-center md:text-left">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
          <span className="text-[10px] font-black tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full">
            Top Développeurs
          </span>
          <span className="bg-white/30 text-white px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider">
            Synchro OK
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight">
          {title}
        </h1>
        <p className="text-xs font-bold opacity-90 leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="hidden md:flex flex-col items-center justify-center p-4 bg-white rounded-2xl border-2 border-b-4 border-[#E5E5E5] text-gray-950 shadow-sm relative w-32 h-32 shrink-0">
        <div className="absolute -top-3.5 text-2xl">👑</div>
        <img src={top1.avatar} className="w-12 h-12 rounded-full border-2 border-amber-400 mb-1 object-cover" alt={top1.name} />
        <div className="font-black text-[11px] uppercase tracking-tight truncate max-w-full text-center">{top1.name}</div>
        <div className="text-[10px] font-black text-amber-600">{top1.points.toLocaleString()} PTS</div>
      </div>
    </section>
  );
}
