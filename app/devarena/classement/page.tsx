"use client";

import React, { useState } from "react";
import Link from "next/link";

// --- DUMMY DATA ---
const allUsers = [
  {
    id: 1, name: "Claire", handle: "@claire_dev", avatar: "https://i.pravatar.cc/150?u=claire",
    v1: 50, v2: 45, v3: 0, trend: "up",
    teammates: { v1: { name: "Kenton", avatar: "https://i.pravatar.cc/150?u=kenton" }, v2: { name: "Zackary", avatar: "https://i.pravatar.cc/150?u=zackary" }, v3: null }
  },
  {
    id: 2, name: "Evander", handle: "@evander", avatar: "https://i.pravatar.cc/150?u=evander",
    v1: 45, v2: 48, v3: 0, trend: "up",
    teammates: { v1: { name: "Brittny", avatar: "https://i.pravatar.cc/150?u=brittny" }, v2: { name: "Krysta", avatar: "https://i.pravatar.cc/150?u=krysta" }, v3: null }
  },
  {
    id: 3, name: "Kenton", handle: "@kenton", avatar: "https://i.pravatar.cc/150?u=kenton",
    v1: 50, v2: 30, v3: 0, trend: "down",
    teammates: { v1: { name: "Claire", avatar: "https://i.pravatar.cc/150?u=claire" }, v2: { name: "Jayson", avatar: "https://i.pravatar.cc/150?u=jayson" }, v3: null }
  },
  {
    id: 4, name: "Zackary Romijn", handle: "@romijnary", avatar: "https://i.pravatar.cc/150?u=zackary",
    v1: 30, v2: 45, v3: 0, trend: "up",
    teammates: { v1: { name: "Kourtney", avatar: "https://i.pravatar.cc/150?u=kourtney" }, v2: { name: "Claire", avatar: "https://i.pravatar.cc/150?u=claire" }, v3: null }
  },
  {
    id: 5, name: "Brittny Barringer", handle: "@brittnybarri", avatar: "https://i.pravatar.cc/150?u=brittny",
    v1: 45, v2: 25, v3: 0, trend: "down",
    teammates: { v1: { name: "Evander", avatar: "https://i.pravatar.cc/150?u=evander" }, v2: { name: "Mauricio", avatar: "https://i.pravatar.cc/150?u=mauricio" }, v3: null }
  },
  {
    id: 6, name: "Krysta Kobayashi", handle: "@kobayashi12", avatar: "https://i.pravatar.cc/150?u=krysta",
    v1: 20, v2: 48, v3: 0, trend: "up",
    teammates: { v1: { name: "Jimmie", avatar: "https://i.pravatar.cc/150?u=jimmie" }, v2: { name: "Evander", avatar: "https://i.pravatar.cc/150?u=evander" }, v3: null }
  },
  {
    id: 7, name: "Kourtney Kappel", handle: "@kourtney25", avatar: "https://i.pravatar.cc/150?u=kourtney",
    v1: 30, v2: 20, v3: 0, trend: "down",
    teammates: { v1: { name: "Zackary", avatar: "https://i.pravatar.cc/150?u=zackary" }, v2: { name: "Jimmie", avatar: "https://i.pravatar.cc/150?u=jimmie" }, v3: null }
  },
  {
    id: 8, name: "Jayson Buffington", handle: "@jayson011", avatar: "https://i.pravatar.cc/150?u=jayson",
    v1: 15, v2: 30, v3: 0, trend: "up",
    teammates: { v1: { name: "Mauricio", avatar: "https://i.pravatar.cc/150?u=mauricio" }, v2: { name: "Kenton", avatar: "https://i.pravatar.cc/150?u=kenton" }, v3: null }
  },
  {
    id: 9, name: "Mauricio Mallery", handle: "@mallery", avatar: "https://i.pravatar.cc/150?u=mauricio",
    v1: 15, v2: 25, v3: 0, trend: "same",
    teammates: { v1: { name: "Jayson", avatar: "https://i.pravatar.cc/150?u=jayson" }, v2: { name: "Brittny", avatar: "https://i.pravatar.cc/150?u=brittny" }, v3: null }
  },
  {
    id: 10, name: "Jimmie Landrum", handle: "@landrum122", avatar: "https://i.pravatar.cc/150?u=jimmie",
    v1: 20, v2: 20, v3: 0, trend: "same",
    teammates: { v1: { name: "Krysta", avatar: "https://i.pravatar.cc/150?u=krysta" }, v2: { name: "Kourtney", avatar: "https://i.pravatar.cc/150?u=kourtney" }, v3: null }
  },
].map(u => ({ ...u, total: (u.v1 || 0) + (u.v2 || 0) + (u.v3 || 0) }));

// Icône de diamant réutilisable
const DiamondIcon = ({ className = "w-4 h-4" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 2L2 9L12 22L22 9L12 2Z" fill="#A7C7E7" stroke="#7BA4DB" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12 2L6 9L12 22M12 2L18 9L12 22" stroke="#7BA4DB" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M2 9H22" stroke="#7BA4DB" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
};

const Page = () => {
  const [activeTab, setActiveTab] = useState<"global" | "v1" | "v2" | "v3">("global");
  const [showRules, setShowRules] = useState(false);

  // Sorting dynamically based on tab
  const getScore = (user: any) => {
    if (activeTab === "global") return user.total;
    return user[activeTab] || 0;
  };

  const sortedUsers = [...allUsers].sort((a, b) => getScore(b) - getScore(a));
  
  // Splitting top 3 and the rest
  const topThree = sortedUsers.slice(0, 3);
  // Reorder top 3 for the visual podium: [2, 1, 3]
  const visualTopThree = [
    topThree[1] && { ...topThree[1], displayRank: 2, color: "from-[#C5D3FF] to-[#E5EAFF]" },
    topThree[0] && { ...topThree[0], displayRank: 1, color: "from-[#FFD54F] to-[#FFF3CA]" },
    topThree[2] && { ...topThree[2], displayRank: 3, color: "from-[#FFB594] to-[#FFE2D4]" },
  ].filter(Boolean);

  const restUsers = sortedUsers.slice(3);

  return (
    <div className="min-h-screen bg-[#F4F4F6] font-sans text-[#1c1c1e] relative pb-20">
      
      {/* Modal Règles */}
      {showRules && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative">
            <button onClick={() => setShowRules(false)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors">
              <span className="material-symbols-rounded text-[20px]">close</span>
            </button>
            <h2 className="text-2xl font-bold text-[#0F2137] mb-4 flex items-center gap-2">
              <span className="material-symbols-rounded text-amber-500">info</span>
              Comment ça marche ?
            </h2>
            <div className="space-y-4 text-gray-600 text-sm">
              <p>La <strong>DevArena</strong> se déroule en 3 vagues. Les équipes sont formées par tirage au sort au début de chaque vague.</p>
              <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl">
                <p className="font-bold text-amber-900 mb-1">Le système de points :</p>
                <ul className="list-disc pl-4 space-y-1 text-amber-800">
                  <li>Les points obtenus par un duo sont ajoutés au score <strong>individuel</strong> de chaque membre.</li>
                  <li>À la vague suivante, les équipes changent, mais chacun conserve ses points précédents.</li>
                  <li>Le gagnant est celui qui a cumulé le plus de points au bout des 3 vagues !</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={() => setShowRules(false)} className="bg-[#0F2137] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#1a365d] transition-colors">
                J'ai compris
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Background Sunburst Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent opacity-80 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Navigation */}
        <div className="pt-12 pb-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex w-full md:w-auto justify-between md:justify-start">
            <Link href="/devarena" className="w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-500 hover:bg-gray-50 transition-colors tooltip" title="Retour">
              <span className="material-symbols-rounded text-[20px]">arrow_back</span>
            </Link>
            {/* Rules button mobile only */}
            <button onClick={() => setShowRules(true)} className="md:hidden w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm text-amber-500 hover:bg-amber-50 transition-colors tooltip">
              <span className="material-symbols-rounded text-[20px]">help</span>
            </button>
          </div>
          
          <div className="text-center flex-1 w-full md:px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0F2137]">Le Classement</h1>
            <p className="text-gray-500 text-sm font-medium mt-2">Suivez l'accumulation des points à chaque vague.</p>
            
            {/* Tabs */}
            <div className="inline-flex mt-6 bg-gray-200/50 p-1.5 rounded-full border border-gray-200 backdrop-blur-sm overflow-x-auto max-w-full hide-scrollbar">
              {[
                { id: "global", label: "🌍 Global" },
                { id: "v1", label: "🌊 Vague 1" },
                { id: "v2", label: "🌊 Vague 2" },
                { id: "v3", label: "🔒 Vague 3" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => tab.id !== "v3" && setActiveTab(tab.id as any)}
                  className={`px-4 md:px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-white text-[#357dab] shadow-sm"
                      : tab.id === "v3"
                      ? "text-gray-400 opacity-50 cursor-not-allowed"
                      : "text-gray-500 hover:text-[#0F2137]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Rules button desktop only */}
          <button onClick={() => setShowRules(true)} className="hidden md:flex w-10 h-10 shrink-0 bg-white rounded-full items-center justify-center shadow-sm text-amber-500 hover:bg-amber-50 transition-colors tooltip" title="Comment ça marche ?">
            <span className="material-symbols-rounded text-[20px]">help</span>
          </button>
        </div>

        {/* Podium Section */}
        <div className="flex items-end justify-center gap-4 sm:gap-8 mt-8 h-[320px]">
          {visualTopThree.map((user: any) => (
            <div 
              key={user.id} 
              className={`flex flex-col items-center relative transition-all duration-500 ${user.displayRank === 1 ? 'z-20 w-[130px] sm:w-[160px]' : 'z-10 w-[110px] sm:w-[140px] mb-4'}`}
            >
              {/* Avatar & Info */}
              <div className="flex flex-col items-center absolute -top-[120px] w-full">
                <div className="relative mb-3 group">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[6px] ${user.displayRank === 1 ? 'border-yellow-400' : 'border-white'} shadow-xl overflow-hidden bg-gray-200 transition-transform group-hover:scale-105`}>
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  </div>
                  {/* Petit point jaune */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white shadow-sm"></div>
                </div>
                <span className="font-bold text-lg text-[#0F2137] truncate w-full text-center">{user.name}</span>
                <div className="flex items-center gap-1.5 mt-1 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/60 shadow-sm">
                  <DiamondIcon />
                  <span className="text-[#357dab] text-sm font-bold">{getScore(user)} pts</span>
                </div>
              </div>

              {/* Bloc Podium */}
              <div className={`w-full ${user.displayRank === 1 ? 'h-[220px]' : user.displayRank === 2 ? 'h-[160px]' : 'h-[130px]'} bg-gradient-to-b ${user.color} rounded-t-2xl shadow-lg flex items-start justify-center pt-8 border-t border-white/50 transition-all duration-500`}>
                <span className="text-white font-black text-6xl opacity-90 drop-shadow-md">
                  {user.displayRank}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mise à jour stat */}
        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-medium py-8">
          <span className="material-symbols-rounded text-[18px]">update</span>
          Classement généré en direct
        </div>

        {/* Liste des classements */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-3">
            {restUsers.map((user, index) => (
              <div key={user.id} className="bg-white rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between shadow-sm border border-gray-100 hover:border-amber-200/50 transition-colors gap-4">
                
                <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto">
                  {/* Rang */}
                  <div className="flex flex-col items-center gap-1 w-12 justify-center text-gray-400 font-bold shrink-0">
                    <span className="text-xl text-[#0F2137]">#{index + 4}</span>
                  </div>
                  
                  {/* Avatar */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Noms & Détails */}
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-base sm:text-lg text-[#0F2137]">{user.name}</span>
                      {/* Trend indicator (Global only) */}
                      {activeTab === "global" && (
                        <span className={`material-symbols-rounded text-[18px] ${user.trend === 'up' ? 'text-green-500' : user.trend === 'down' ? 'text-red-500' : 'text-gray-300'}`}>
                          {user.trend === 'up' ? 'trending_up' : user.trend === 'down' ? 'trending_down' : 'horizontal_rule'}
                        </span>
                      )}
                    </div>
                    <span className="text-gray-400 text-sm font-medium">{user.handle}</span>
                  </div>
                </div>

                {/* Historique des équipes & Score breakdown */}
                <div className="flex flex-col md:flex-row items-end md:items-center gap-4 w-full md:w-auto border-t md:border-t-0 border-gray-100 pt-3 md:pt-0 pl-16 md:pl-0">
                  
                  {/* Affichage conditionnel selon l'onglet */}
                  {activeTab === "global" ? (
                     <div className="flex items-center gap-3 mr-4 text-xs font-medium text-gray-500 bg-gray-50 px-4 py-2 rounded-xl">
                       <div className="flex flex-col items-center"><span className="text-[#0F2137] font-bold text-sm">{user.v1}</span><span className="text-[10px] uppercase tracking-wider">V1</span></div>
                       <div className="w-px h-6 bg-gray-200"></div>
                       <div className="flex flex-col items-center"><span className="text-[#0F2137] font-bold text-sm">{user.v2}</span><span className="text-[10px] uppercase tracking-wider">V2</span></div>
                       <div className="w-px h-6 bg-gray-200"></div>
                       <div className="flex flex-col items-center opacity-50"><span className="text-[#0F2137] font-bold text-sm">-</span><span className="text-[10px] uppercase tracking-wider">V3</span></div>
                     </div>
                  ) : (
                    // Historique des coéquipiers pour l'onglet spécifique (V1 ou V2)
                    <div className="flex items-center gap-2 mr-4 text-xs font-medium text-gray-500 bg-amber-50/50 px-3 py-1.5 rounded-full border border-amber-100">
                      <span>Duo avec :</span>
                      {(user.teammates as any)[activeTab] ? (
                         <div className="flex items-center gap-1.5">
                           <img src={(user.teammates as any)[activeTab].avatar} alt="Coéquipier" className="w-6 h-6 rounded-full border border-white shadow-sm" />
                           <span className="text-[#0F2137] font-bold">{(user.teammates as any)[activeTab].name}</span>
                         </div>
                      ) : (
                        <span className="text-gray-400 italic">À venir</span>
                      )}
                    </div>
                  )}

                  {/* Score */}
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm shrink-0">
                    <DiamondIcon className="w-5 h-5 opacity-90 text-[#357dab]" />
                    <span className="font-bold text-lg text-[#357dab]">{getScore(user)} <span className="text-sm font-medium text-gray-500">pts</span></span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;