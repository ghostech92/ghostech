import React from "react";

const COMPETITIONS_HISTORY = [
  {
    name: "DevArena Vague 1 : The Awakening",
    duo: "Équipe Alpha",
    rank: "1er Place 🏆",
    points: "+500 PTS",
    date: "Mars 2026",
    status: "won",
    description: "Confrontation algorithmique en duo sur un projet Fullstack React."
  },
  {
    name: "IoT Innovation Challenge",
    duo: "Solo",
    rank: "Top 10",
    points: "+150 PTS",
    date: "Novembre 2025",
    status: "participated",
    description: "Création d'un système IoT d'arrosage automatique."
  },
];

export default function OngletCompetitions() {
  return (
    <div className="space-y-4">
      <h4 className="text-xs font-black text-[#3C3C3C] uppercase tracking-wider">Historique de Participations</h4>

      <div className="space-y-4">
        {COMPETITIONS_HISTORY.map((comp, idx) => (
          <div key={idx} className={`p-4 bg-white border-2 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#ccd0d8] transition-all ${comp.status === 'won' ? 'bg-[#fffdf5] border-[#ffd700] border-b-[5px] border-b-[#e6c200]' : 'border-[#e5e5e5] border-b-[5px] border-b-[#cdcdcd]'}`}>
            <div className="flex items-start md:items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex shrink-0 items-center justify-center text-2xl border-2 ${comp.status === 'won' ? 'bg-[#fff3c4] border-[#ffd700] text-amber-500' : 'bg-[#f7f7f7] border-[#e5e5e5] text-slate-600'}`}>
                {comp.status === 'won' ? '🏆' : '⚔️'}
              </div>
              <div>
                <h5 className="font-extrabold text-[#3C3C3C] text-sm">{comp.name}</h5>
                <p className="text-[11px] font-bold text-[#777777] mt-1 line-clamp-1">{comp.description}</p>
                <p className="text-[10px] font-extrabold text-[#afafaf] mt-2 uppercase tracking-wide">
                  Type: <span className="text-[#3C3C3C]">{comp.duo}</span> • {comp.date}
                </p>
              </div>
            </div>
            <div className="text-left md:text-right md:shrink-0 bg-[#f7f7f7] md:bg-transparent p-3 md:p-0 rounded-xl border-2 md:border-0 border-[#e5e5e5]">
              <span className={`block font-black text-sm ${comp.status === 'won' ? 'text-[#ff9600]' : 'text-[#3C3C3C]'}`}>{comp.rank}</span>
              <span className="text-xs font-extrabold text-emerald-500 flex items-center md:justify-end gap-1 mt-1">
                <span className="material-symbols-rounded text-[14px]">stars</span>
                {comp.points}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
