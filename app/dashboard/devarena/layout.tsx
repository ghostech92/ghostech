"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Swords, Users, Award, Layers } from "lucide-react";

export default function DevArenaLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [activeCount, setActiveCount] = useState(0);

  const syncCount = () => {
    try {
      const stored = localStorage.getItem("arena_participants");
      if (stored) {
        const list = JSON.parse(stored);
        const count = list.filter((p: any) => p.isParticipating).length;
        setActiveCount(count);
      } else {
        // Simple default fallback
        setActiveCount(11);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    syncCount();
    
    // Listen to local custom events and storage events to keep the count live
    window.addEventListener("storage", syncCount);
    window.addEventListener("arena_sync", syncCount);
    
    return () => {
      window.removeEventListener("storage", syncCount);
      window.removeEventListener("arena_sync", syncCount);
    };
  }, [pathname]);

  const tabs = [
    { href: "/dashboard/devarena/participants", label: "Participants", icon: <Users size={16} />, count: activeCount },
    { href: "/dashboard/devarena/duos", label: "Duos & Notes", icon: <Award size={16} /> },
    { href: "/dashboard/devarena/vagues", label: "Vagues & Phases", icon: <Layers size={16} /> }
  ];

  return (
    <div className="space-y-6">
      {/* HEADER SECTION */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <Swords className="text-teal-600" size={28} />
            Gestion Ghostech Arena
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Gérez les participants, composez les duos hebdomadaires, gérez les vagues et mettez à jour le classement en direct.
          </p>
        </div>
      </div>

      {/* NAVIGATION DES ONGLETS */}
      <div className="flex border-b border-slate-200 mb-8 overflow-x-auto gap-2 pb-1">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link key={tab.href} href={tab.href} className="no-underline">
              <span 
                className={`flex items-center gap-2 px-5 py-3 border-b-2 font-bold text-sm transition-all whitespace-nowrap cursor-pointer ${
                  isActive 
                    ? "border-teal-500 text-teal-600 font-bold" 
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                {tab.icon} {tab.label} {tab.count !== undefined && `(${tab.count})`}
              </span>
            </Link>
          );
        })}
      </div>

      <div>{children}</div>
    </div>
  );
}
