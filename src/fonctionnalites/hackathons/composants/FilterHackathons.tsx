import React from "react";
import { FaRocket, FaCheckCircle, FaSearch, FaTimes } from "react-icons/fa";

interface FilterHackathonsProps {
  filter: "tous" | "a-venir" | "termine";
  setFilter: (f: "tous" | "a-venir" | "termine") => void;
  searchQuery: string;
  setSearchQuery: (s: string) => void;
}

export default function FilterHackathons({ filter, setFilter, searchQuery, setSearchQuery }: FilterHackathonsProps) {
  return (
    <section className="w-full max-w-4xl px-4 mb-8 relative z-10">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-slate-200/60 shadow-xs">
        {/* Status Tabs */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {[
            { id: "tous", label: "Tous les défis" },
            { id: "a-venir", label: "À venir", icon: <FaRocket /> },
            { id: "termine", label: "Terminés", icon: <FaCheckCircle /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as "tous" | "a-venir" | "termine")}
              className={`px-4 py-2 flex items-center gap-1.5 rounded-xl font-bold text-xs transition-all ${filter === tab.id
                ? "bg-[#39779e] text-white shadow-xs"
                : "bg-slate-100/70 text-slate-600 hover:bg-slate-200/60"
                }`}
            >
              {tab.icon && tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:max-w-xs flex items-center border border-slate-200 rounded-xl bg-slate-50/80 px-3 py-2 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <FaSearch className="text-slate-400 mr-2 shrink-0" />
          <input
            type="text"
            placeholder="Rechercher un défi, une techno..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-xs text-slate-700 outline-none placeholder-slate-400"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} className="text-slate-400 hover:text-slate-600 text-xs font-bold px-1 flex items-center justify-center">
              <FaTimes />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
