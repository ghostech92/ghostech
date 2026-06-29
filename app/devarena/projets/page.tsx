"use client";
import React from "react";
import { useProjects } from "@/src/fonctionnalites/devarena/hooks/useProjects";
import ProjectCard from "@/src/fonctionnalites/devarena/composants/ProjectCard";

export default function ProjetsPage() {
  const { projects, activeFilter, setActiveFilter, loading, filteredProjects } = useProjects();

  return (
    <div className="w-full min-h-screen bg-[#F4F6FA] text-[#1A2332] font-sans flex justify-center">
      <main className="p-4 lg:p-8 space-y-6 max-w-[1400px] w-full mx-auto pt-20">

        {/* HERO */}
        <section className="relative bg-white border border-[#E8ECF1] rounded-3xl p-6 lg:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-4 max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-2">
                <span className="text-[14px]">💻</span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-700">Galerie</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                Projets Réalisés
              </h1>
              <p className="text-sm text-gray-500 font-medium">
                Explorez tous les MVPs développés par les duos lors des différentes vagues du tournoi Ghostech.
              </p>
            </div>

            <div className="hidden md:flex gap-2">
              <div className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm">⚛️</div>
              <div className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm">🐍</div>
              <div className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm">🔥</div>
            </div>
          </div>
        </section>

        {/* FILTERS */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {["Tous", "Vague 1", "Vague 2", "Vague 3", "Gagnants"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap font-bold text-xs px-5 py-2.5 rounded-full border transition ${
                activeFilter === filter
                  ? "bg-teal-600 border-teal-600 text-white shadow-md shadow-teal-600/20"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* LIST */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-10 h-10 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-500 text-xs font-semibold">Chargement des projets...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[#E8ECF1] rounded-3xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <span className="text-4xl">📁</span>
            <h3 className="mt-4 text-sm font-bold text-slate-800">Aucun projet trouvé</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
              Soyez le premier à poster un projet pour la catégorie "{activeFilter}" depuis votre profil !
            </p>
          </div>
        ) : (
          <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </section>
        )}

      </main>
    </div>
  );
}
