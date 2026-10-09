"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface MediaItem {
  id: number;
  title: string;
  category: "hackathons" | "formations" | "communaute";
  categoryLabel: string;
  image: string;
  date: string;
  description: string;
}

const GALERIE_ITEMS: MediaItem[] = [
  {
    id: 1,
    title: "Hackathon Ghostech — Cérémonie des Lauréats",
    category: "hackathons",
    categoryLabel: "Hackathon",
    image: "/Galeries/img10.png",
    date: "Mars 2026",
    description: "Remise des prix aux vainqueurs du challenge d'innovation numérique.",
  },
  {
    id: 2,
    title: "Atelier Pratique & Réalité Virtuelle",
    category: "formations",
    categoryLabel: "Formation",
    image: "/Galeries/Haka/haka1.png",
    date: "Février 2026",
    description: "Session immersive d'expérimentation technologique sur les outils de pointe.",
  },
  {
    id: 3,
    title: "Session de Coding & Mentorat DevArena",
    category: "hackathons",
    categoryLabel: "Hackathon",
    image: "/Galeries/Haka/haka2.png",
    date: "Février 2026",
    description: "Les équipes en plein sprint algorithmique et revue de code.",
  },
  {
    id: 4,
    title: "Talents & Travail Collaboratif",
    category: "communaute",
    categoryLabel: "Communauté",
    image: "/Galeries/img_1.png",
    date: "Janvier 2026",
    description: "Échanges et co-création au sein de l'espace d'apprentissage.",
  },
  {
    id: 5,
    title: "Cohorte Formation Développement Web",
    category: "formations",
    categoryLabel: "Formation",
    image: "/Galeries/img6.jpeg",
    date: "Janvier 2026",
    description: "Apprentissage intensif en présentiel avec nos formateurs experts.",
  },
  {
    id: 6,
    title: "Présentation des Projets DevArena",
    category: "hackathons",
    categoryLabel: "Hackathon",
    image: "/Galeries/Haka/haka3.png",
    date: "Décembre 2025",
    description: "Pitchs finaux devant le jury d'ingénieurs et mentors de l'écosystème.",
  },
  {
    id: 7,
    title: "Rencontre Communautaire & Brainstorming",
    category: "communaute",
    categoryLabel: "Communauté",
    image: "/Galeries/Haka/haka4.png",
    date: "Novembre 2025",
    description: "Table ronde sur les défis de l'inclusion numérique en Afrique de l'Ouest.",
  },
  {
    id: 8,
    title: "Remise des Certifications Techniques",
    category: "formations",
    categoryLabel: "Formation",
    image: "/Galeries/Haka/haka5.png",
    date: "Octobre 2025",
    description: "Célébration des nouveaux diplômés des parcours professionnels.",
  },
  {
    id: 9,
    title: "Ambiance Challenge DevDay",
    category: "hackathons",
    categoryLabel: "Hackathon",
    image: "/Galeries/Haka/haka6.png",
    date: "Octobre 2025",
    description: "24 heures de concentration et d'esprit d'équipe pour résoudre les défis.",
  },
];

export default function GaleriePage() {
  const [filter, setFilter] = useState<"tous" | "hackathons" | "formations" | "communaute">("tous");
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const filteredItems = filter === "tous" 
    ? GALERIE_ITEMS 
    : GALERIE_ITEMS.filter((item) => item.category === filter);

  return (
    <main className="min-h-dvh bg-slate-50 text-gray-900 font-sans antialiased pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête éditorial style photojournalisme */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fd800a]/10 text-[#fd800a] text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fd800a]"></span>
            Archives Visuelles & Reportages
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#02073E] tracking-tight font-b612 leading-tight">
            La Galerie <span className="text-[#fd800a]">Ghostech</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Plongez dans les moments forts de notre écosystème : ateliers d'immersion, hackathons effervescents et réussites des talents.
          </p>
        </div>

        {/* Filtres de catégories scrollables sur mobile */}
        <div className="flex justify-center mb-10">
          <div className="flex overflow-x-auto max-w-full pb-1 gap-2 bg-white p-1.5 rounded-2xl border border-gray-200 shadow-xs [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[
              { id: "tous", label: "Toutes les photos" },
              { id: "hackathons", label: "Hackathons & Challenges" },
              { id: "formations", label: "Formations & Ateliers" },
              { id: "communaute", label: "Communauté & Rencontres" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer ${
                  filter === btn.id
                    ? "bg-[#02073E] text-white shadow-sm"
                    : "bg-transparent text-gray-600 hover:text-black hover:bg-gray-50"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille Photojournalisme Responsive (1 col mobile, 2 cols tablet, 3 cols desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedItem(item)}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                      <ZoomIn className="w-4 h-4" /> Agrandir
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-gray-400 font-medium">
                    <span>{item.date}</span>
                    <span>Abidjan, Côte d'Ivoire</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#fd800a] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal Lightbox Agrandie */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/9] w-full bg-black">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-2 bg-slate-900 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#fd800a] bg-[#fd800a]/10 px-2.5 py-1 rounded-md">
                    {selectedItem.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400">{selectedItem.date}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">{selectedItem.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
