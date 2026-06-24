"use client";
import React from "react";

const usersV2 = [
  { rank: 1, name: "Evander", handle: "@evander", avatar: "https://i.pravatar.cc/150?u=evander", score: 48, teammate: "Krysta" },
  { rank: 2, name: "Krysta", handle: "@kobayashi12", avatar: "https://i.pravatar.cc/150?u=krysta", score: 48, teammate: "Evander" },
  { rank: 3, name: "Claire", handle: "@claire_dev", avatar: "https://i.pravatar.cc/150?u=claire", score: 45, teammate: "Zackary" },
  { rank: 4, name: "Zackary", handle: "@romijnary", avatar: "https://i.pravatar.cc/150?u=zackary", score: 45, teammate: "Claire" },
  { rank: 5, name: "Jayson", handle: "@jayson011", avatar: "https://i.pravatar.cc/150?u=jayson", score: 30, teammate: "Kenton" },
  { rank: 6, name: "Kenton", handle: "@kenton", avatar: "https://i.pravatar.cc/150?u=kenton", score: 30, teammate: "Jayson" },
  { rank: 7, name: "Mauricio", handle: "@mallery", avatar: "https://i.pravatar.cc/150?u=mauricio", score: 25, teammate: "Brittny" },
  { rank: 8, name: "Brittny", handle: "@brittnybarri", avatar: "https://i.pravatar.cc/150?u=brittny", score: 25, teammate: "Mauricio" },
  { rank: 9, name: "Kourtney", handle: "@kourtney25", avatar: "https://i.pravatar.cc/150?u=kourtney", score: 20, teammate: "Jimmie" },
  { rank: 10, name: "Jimmie", handle: "@landrum122", avatar: "https://i.pravatar.cc/150?u=jimmie", score: 20, teammate: "Kourtney" },
];

const medalColor = (rank: number) => {
  if (rank === 1) return "text-yellow-500 bg-yellow-50 border-yellow-300";
  if (rank === 2) return "text-gray-400 bg-gray-50 border-gray-300";
  if (rank === 3) return "text-amber-600 bg-amber-50 border-amber-300";
  return "text-gray-500 bg-white border-gray-200";
};

export default function ClassementVague2() {
  return (
    <div className="min-h-screen bg-[#F4F4F6] text-gray-900 font-sans pb-20">
      <section className="pt-24 pb-12 bg-white/80 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-amber-100 border border-amber-200 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse inline-block"></span>
            <span className="uppercase tracking-[3px] text-xs font-mono text-amber-600">Vague 2 — En cours</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Classement <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Vague 2</span>
          </h1>
          <p className="text-gray-500 text-lg">Scores provisoires — dernière mise à jour après le match du 21 juin.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-col gap-3">
          {usersV2.map((user) => (
            <div key={user.rank} className={`rounded-2xl p-4 flex items-center justify-between border ${medalColor(user.rank)} shadow-sm`}>
              <div className="flex items-center gap-4">
                <span className="w-10 text-center font-bold text-lg">#{user.rank}</span>
                <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <div className="font-bold text-gray-900">{user.name}</div>
                  <div className="text-sm text-gray-400">{user.handle} · Duo avec {user.teammate}</div>
                </div>
              </div>
              <div className="font-mono font-bold text-xl text-amber-500">{user.score} pts</div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm mt-8">⚡ Classement mis à jour après chaque confrontation</p>
      </div>
    </div>
  );
}
