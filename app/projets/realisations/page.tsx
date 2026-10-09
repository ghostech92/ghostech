"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Sparkles } from "lucide-react";

interface Realisation {
  id: number;
  title: string;
  category: string;
  pole: string;
  image: string;
  summary: string;
  tags: string[];
  link?: string;
  github?: string;
}

const REALISATIONS: Realisation[] = [
  {
    id: 1,
    title: "Plateforme DevArena — Championnat d'Algorithmique",
    category: "Web & Mobile",
    pole: "Pôle Ingénierie Logicielle",
    image: "/Galeries/img_1.png",
    summary: "Système complet de compétition de code en temps réel, classement ELO et évaluations automatisées de projets.",
    tags: ["Next.js", "Firebase", "TypeScript", "TailwindCSS"],
    link: "/devarena/actualites",
  },
  {
    id: 2,
    title: "Agent IA & Analyse Multimodale pour Service Client",
    category: "IA & Data",
    pole: "Pôle Intelligence Artificielle",
    image: "/Galeries/img10.png",
    summary: "Solution d'assistance automatisée combinant modèles de langage et traitement du langage naturel en langues locales.",
    tags: ["Python", "FastAPI", "LLM", "Docker"],
    link: "/evenements/hackathons/2",
  },
  {
    id: 3,
    title: "Plateforme de Formation & Certification Ghostech",
    category: "Éducation & EdTech",
    pole: "Pôle Formation",
    image: "/Galeries/img6.jpeg",
    summary: "Portail interactif de suivi pédagogique, évaluation continue et validation des compétences techniques des apprenants.",
    tags: ["React", "Node.js", "TailwindCSS"],
    link: "/formation",
  },
  {
    id: 4,
    title: "Système de Monitoring Sécurisé d'Infrastructures Réseaux",
    category: "Cybersécurité",
    pole: "Pôle Sécurité & Réseaux",
    image: "/Galeries/Haka/haka1.png",
    summary: "Outil de détection proactive d'anomalies réseau et d'audit automatisé de vulnérabilités pour organisations.",
    tags: ["Python", "Network Security", "Linux"],
    link: "/evenements/hackathons",
  },
];

export default function RealisationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("tous");

  const categories = ["tous", "Web & Mobile", "IA & Data", "Cybersécurité", "Éducation & EdTech"];

  const filtered = selectedCategory === "tous"
    ? REALISATIONS
    : REALISATIONS.filter((r) => r.category === selectedCategory);

  return (
    <main className="min-h-dvh bg-slate-50 text-gray-900 font-sans antialiased pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#357dab]/10 text-[#357dab] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Portfolio & Impact Concret
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#02073E] tracking-tight font-b612 leading-tight">
            Nos <span className="text-[#357dab]">Réalisations</span> Technologiques
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Découvrez les projets conçus, développés et déployés par les pôles d'expertise et les membres de la communauté Ghostech.
          </p>
        </div>

        {/* Filtres de catégories scrollables */}
        <div className="flex justify-center mb-10">
          <div className="flex overflow-x-auto max-w-full pb-1 gap-2 bg-white p-1.5 rounded-2xl border border-gray-200 shadow-xs [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#357dab] text-white shadow-sm"
                    : "bg-transparent text-gray-600 hover:text-black hover:bg-gray-50"
                }`}
              >
                {cat === "tous" ? "Toutes les réalisations" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grille responsive de réalisations (1 col mobile, 2 cols desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                      {item.pole}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#357dab] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-gray-50 mt-4">
                {item.link ? (
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#357dab] hover:text-[#02073E] transition-colors"
                  >
                    <span>Explorer le projet</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="text-xs text-gray-400">Projet institutionnel interne</span>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}