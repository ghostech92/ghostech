"use client";

import React, { useState } from "react";
import { Play, X } from "lucide-react";

interface VideoItem {
  id: number;
  title: string;
  category: string;
  src: string;
  poster: string;
  duration: string;
  description: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: 1,
    title: "Immersion Réalité Virtuelle & Technologies Émergentes",
    category: "Atelier Pratique",
    src: "/video/v1.mp4",
    poster: "/Galeries/Haka/haka1.png",
    duration: "1:45",
    description: "Retour en images sur les ateliers d'immersion VR conçus pour les apprenants Ghostech.",
  },
  {
    id: 2,
    title: "Hackathon DevDay — Sprint d'Innovation en Direct",
    category: "Challenge Tech",
    src: "/video/v1.mp4",
    poster: "/Galeries/Haka/haka2.png",
    duration: "2:10",
    description: "Les équipes de développeurs et designers s'activent pour créer des solutions numériques à impact.",
  },
  {
    id: 3,
    title: "Témoignage Talent : Ruth Christelle Ledjou",
    category: "Témoignage",
    src: "/video/v1.mp4",
    poster: "/Galeries/img10.png",
    duration: "3:05",
    description: "Parcours et transformation d'une alumni Ghostech devenue ingénieure en technologie.",
  },
];

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <main className="min-h-dvh bg-[#0A0A0A] text-white font-sans antialiased pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête Médias Vidéo */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fd800a]/15 text-[#fd800a] text-xs font-bold uppercase tracking-widest border border-[#fd800a]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fd800a] animate-pulse"></span>
            Reportages & Diffusions
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-b612 leading-tight">
            Vidéos & <span className="text-[#fd800a]">Reportages</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Revivez les moments forts, les pitchs finaux et les interviews exclusives de notre communauté d'innovateurs.
          </p>
        </div>

        {/* Grille Vidéo Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VIDEOS.map((item) => (
            <article
              key={item.id}
              onClick={() => setActiveVideo(item)}
              className="group bg-[#141414] rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img
                  src={item.poster}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                
                {/* Bouton Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fd800a] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Badge catégorie et durée */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white">
                  {item.category}
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[11px] font-bold text-white">
                  {item.duration}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-base font-bold text-white group-hover:text-[#fd800a] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Vidéo */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#111] rounded-3xl overflow-hidden shadow-2xl text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video w-full bg-black">
                <video
                  src={activeVideo.src}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 space-y-2 border-t border-zinc-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#fd800a] bg-[#fd800a]/15 px-2.5 py-1 rounded-md">
                  {activeVideo.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold">{activeVideo.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400">{activeVideo.description}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
