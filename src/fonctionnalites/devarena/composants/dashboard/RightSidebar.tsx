import React from "react";

const getAvatarUrl = (imgSeed: string) => {
  if (imgSeed && (imgSeed.startsWith("http://") || imgSeed.startsWith("https://"))) {
    return imgSeed;
  }
  return `https://i.pravatar.cc/150?u=${imgSeed || "1"}`;
};

interface RightSidebarProps {
  upcomingDuos: any[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  filteredSearchList: any[];
}

export default function RightSidebar({ upcomingDuos, searchQuery, setSearchQuery, filteredSearchList }: RightSidebarProps) {
  return (
    <aside className="w-full lg:w-80 space-y-6 shrink-0 mt-8 lg:mt-0">
      {/* Header droit avec icônes */}
      <div className="flex items-center justify-end gap-4 h-10">
        <button className="w-10 h-10 bg-white rounded-2xl border-2 border-b-4 border-[#E5E5E5] flex items-center justify-center text-gray-500 hover:bg-gray-50 transition active:border-b-0 active:translate-y-[4px] active:mb-[4px]">
          <span className="material-symbols-rounded text-[20px]">notifications</span>
        </button>
        <button className="w-10 h-10 bg-white rounded-2xl border-2 border-b-4 border-[#E5E5E5] flex items-center justify-center text-gray-500 hover:bg-gray-50 transition active:border-b-0 active:translate-y-[4px] active:mb-[4px]">
          <span className="material-symbols-rounded text-[20px]">mail</span>
        </button>
      </div>

      {/* Invitations section */}
      <section className="bg-white border-2 border-b-4 border-[#E5E5E5] rounded-3xl p-6 hover:translate-y-[-2px] hover:shadow-sm transition-all duration-150">
        <h4 className="font-black text-sm text-gray-950 uppercase tracking-widest mb-4">Prochain duo</h4>

        <div className="space-y-5">
          {upcomingDuos.length === 0 ? (
            <div className="text-xs text-gray-400 font-bold text-center py-4">
              Aucun duo en attente de présentation.
            </div>
          ) : (
            upcomingDuos.slice(0, 3).map((duo) => {
              const waveLabel = duo.vague === "vague1" ? "Vague 1" : duo.vague === "vague2" ? "Vague 2" : duo.vague === "vague3" ? "Vague 3 (Finale)" : "";
              const dateFormatted = duo.date ? duo.date.split("-").reverse().join("/") : "--/--/----";
              return (
                <div key={duo.id} className="flex gap-3 pt-4 first:pt-0 border-t first:border-t-0 border-gray-100">
                  <div className="flex -space-x-2 shrink-0 h-10 items-center">
                    <img
                      src={getAvatarUrl(duo.team.img1)}
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover"
                      alt={duo.team.member1}
                    />
                    <img
                      src={getAvatarUrl(duo.team.img2)}
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover"
                      alt={duo.team.member2}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-0.5">
                      <h5 className="font-bold text-xs text-gray-900 truncate pr-2">{duo.team.name}</h5>
                      <span className="text-[8px] bg-teal-50 text-teal-600 px-1.5 py-0.5 rounded font-black uppercase tracking-wider border border-teal-100 shrink-0">
                        {waveLabel}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 font-semibold truncate mb-1">
                      {duo.team.member1} & {duo.team.member2}
                    </p>
                    <p className="text-[11px] text-gray-700 font-bold leading-snug line-clamp-2 mb-2">
                      {duo.theme}
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-gray-400 font-semibold">
                      <span className="flex items-center gap-1">
                        📅 {dateFormatted}
                      </span>
                      <span className="text-[9px] font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                        En attente
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Classement section */}
      <section className="bg-white border-2 border-b-4 border-[#E5E5E5] rounded-3xl p-6 hover:translate-y-[-2px] hover:shadow-sm transition-all duration-150 max-h-[500px] lg:max-h-none lg:h-[calc(100vh-450px)] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-black text-sm text-gray-950 uppercase tracking-widest">Membres</h4>
        </div>

        <div className="relative mb-5">
          <span className="material-symbols-rounded absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]">search</span>
          <input
            type="text"
            placeholder="Rechercher un membre"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#FAFAFA] text-gray-900 placeholder-gray-400 text-xs font-bold rounded-2xl border-2 border-b-4 border-[#E5E5E5] pl-10 pr-4 py-3 focus:outline-none focus:border-teal-500 transition"
          />
        </div>

        <div className="space-y-4">
          {filteredSearchList.length === 0 ? (
            <div className="text-xs text-gray-400 font-bold text-center py-4">
              Aucun membre trouvé.
            </div>
          ) : (
            filteredSearchList.map((friend) => (
              <div key={friend.id} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <img src={friend.avatar} className="w-9 h-9 rounded-full border border-gray-200 object-cover" alt={friend.name} />
                  <div>
                    <h5 className="font-bold text-[11px] text-gray-900">{friend.name}</h5>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[10px] text-orange-400">🏅</span>
                      <span className="text-[9px] font-bold text-gray-400">{friend.level}</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs font-black text-slate-500">{(friend.points || 0).toLocaleString()} PTS</div>
              </div>
            ))
          )}
        </div>
      </section>
    </aside>
  );
}
