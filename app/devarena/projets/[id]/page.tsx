"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { useProject } from "@/src/fonctionnalites/devarena/hooks/useProject";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const projectId = resolvedParams.id;

  const { project, loading } = useProject(projectId);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F7F7F7] flex flex-col items-center justify-center pt-28 pb-80">
        <div className="w-12 h-12 border-4 border-[#1cb0f6] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-500 font-bold text-sm">Chargement du projet...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center p-6 text-center pt-28 pb-80">
        <div className="bg-white p-8 rounded-3xl border-2 border-[#e5e5e5] border-b-6 max-w-md w-full">
          <span className="text-5xl mb-4 block">🔍</span>
          <h2 className="text-xl font-black text-[#3c3c3c] mb-2 font-sans uppercase tracking-tight">
            Projet introuvable
          </h2>
          <p className="text-gray-500 text-xs font-bold mb-6">
            Le projet demandé n'existe pas ou a été supprimé.
          </p>
          <Link
            href="/devarena/projets"
            className="inline-flex items-center justify-center gap-2 bg-[#1cb0f6] hover:bg-[#1899d6] text-white text-xs font-extrabold px-6 py-3 rounded-2xl border-b-4 border-[#1482b5] active:border-b-0 active:translate-y-[4px] transition-all cursor-pointer"
          >
            <span className="material-symbols-rounded text-[16px]">arrow_back</span>
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  const images = project.images && project.images.length > 0 
    ? project.images 
    : [project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"];

  return (
    <div className="w-full min-h-screen bg-[#F7F7F7] text-[#3c3c3c] font-sans antialiased pt-28 md:pt-32 pb-80">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        .duo-font { font-family: 'Nunito', sans-serif; }
      `}} />
      
      <main className="p-4 lg:p-8 max-w-6xl mx-auto space-y-8 duo-font">
        {/* BACK BUTTON */}
        <div className="flex justify-between items-center">
          <Link
            href="/devarena/projets"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#1cb0f6] text-sm font-extrabold transition group"
          >
            <span className="material-symbols-rounded text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Retour à la galerie
          </Link>

          <div className="flex gap-2">
            <span className="bg-[#e5e5e5] text-[#3c3c3c] text-xs font-extrabold px-3 py-1 rounded-xl">
              {project.vague}
            </span>
            {project.score !== undefined && project.score !== null ? (
              <span className="bg-emerald-100 text-emerald-700 border-2 border-emerald-200 text-xs font-black px-3 py-1 rounded-xl flex items-center gap-1">
                🏆 {project.score}/20
              </span>
            ) : (
              <span className="bg-amber-100 text-amber-700 border-2 border-amber-200 text-xs font-black px-3 py-1 rounded-xl flex items-center gap-1">
                ⌛ En cours d'évaluation
              </span>
            )}
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: GALLERY / IMAGES */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Image Container with 3D Border */}
            <div className="bg-white border-2 border-[#e5e5e5] border-b-6 rounded-3xl overflow-hidden aspect-video relative">
              <img
                src={images[activeImageIndex]}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails if multiple images */}
            {images.length > 1 && (
              <div className="flex gap-3 justify-center">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                      idx === activeImageIndex 
                        ? "border-[#1cb0f6] scale-105 shadow-sm" 
                        : "border-[#e5e5e5] hover:border-gray-400"
                    }`}
                  >
                    <img src={img} alt={`Aperçu ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Description Card */}
            <div className="bg-white border-2 border-[#e5e5e5] border-b-6 rounded-3xl p-6 lg:p-8 space-y-4">
              <h2 className="text-lg font-black text-[#3c3c3c] border-b-2 border-[#f1f1f1] pb-3">
                À propos du projet
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap font-medium">
                {project.description || "Aucune description détaillée n'a été fournie pour ce projet."}
              </p>
            </div>
          </div>

          {/* RIGHT: METADATA & ACTIONS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Info Card */}
            <div className="bg-white border-2 border-[#e5e5e5] border-b-6 rounded-3xl p-6 lg:p-8 space-y-6">
              <div className="space-y-3">
                <h1 className="text-3xl font-black text-[#3c3c3c] tracking-tight leading-tight">
                  {project.name}
                </h1>
                <div className="space-y-1.5 border-l-4 border-[#1cb0f6] pl-3 py-1 bg-slate-50 rounded-r-xl">
                  <p className="text-xs font-black text-slate-500 flex items-center gap-1.5">
                    <span className="material-symbols-rounded text-[16px] text-[#1cb0f6]">stars</span>
                    Duo : <span className="text-[#3c3c3c] font-black">{project.createdBy || "Anonyme"}</span>
                  </p>
                  {(project.member1 || project.member2) && (
                    <p className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
                      <span className="material-symbols-rounded text-[16px] text-slate-400">group</span>
                      Membres : <span className="text-[#3c3c3c] font-extrabold">{project.member1} & {project.member2}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <h3 className="text-xs font-black text-[#3c3c3c] uppercase tracking-wider">
                  Technologies utilisées
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-extrabold text-[#3c3c3c] bg-[#e5e5e5] px-3 py-1.5 rounded-xl border-b-2 border-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t-2 border-[#f1f1f1]">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#58cc02] hover:bg-[#46a302] text-white font-extrabold px-6 py-3.5 rounded-2xl border-b-4 border-[#3b8a01] active:border-b-0 active:translate-y-[4px] transition-all text-sm shadow-sm"
                  >
                    <span className="material-symbols-rounded text-[18px]">open_in_new</span>
                    Accéder à la Démo Live
                  </a>
                )}

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#3c3c3c] font-extrabold px-6 py-3.5 rounded-2xl border-2 border-[#e5e5e5] border-b-4 active:border-b-2 active:translate-y-[2px] transition-all text-sm"
                  >
                    <svg className="w-5 h-5 fill-current text-[#3c3c3c]" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code Source GitHub
                  </a>
                ) : (
                  <div className="text-center text-xs font-bold text-gray-400 py-2">
                    Le code source de ce projet est privé.
                  </div>
                )}
              </div>
            </div>

            {/* DevArena Challenge Badge */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-100 rounded-3xl p-6 flex items-start gap-4">
              <span className="text-3xl">🚀</span>
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm text-indigo-900">
                  Défi DevArena
                </h4>
                <p className="text-xs text-indigo-700 font-medium leading-relaxed">
                  Ce projet a été soumis dans le cadre du tournoi d'innovation de la Ghostech DevArena.
                </p>
              </div>
            </div>

          </div>
          
        </div>
      </main>
    </div>
  );
}
