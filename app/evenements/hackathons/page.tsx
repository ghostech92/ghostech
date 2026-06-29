"use client";

import React from "react";
import HeroHackathons from "@/src/fonctionnalites/hackathons/composants/HeroHackathons";
import IntroHackathons from "@/src/fonctionnalites/hackathons/composants/IntroHackathons";
import FilterHackathons from "@/src/fonctionnalites/hackathons/composants/FilterHackathons";
import HackathonList from "@/src/fonctionnalites/hackathons/composants/HackathonList";
import CallToActionBanner from "@/src/fonctionnalites/hackathons/composants/CallToActionBanner";
import PartnersSection from "@/src/fonctionnalites/hackathons/composants/PartnersSection";
import TestimonialsSection from "@/src/fonctionnalites/hackathons/composants/TestimonialsSection";
import MentorsSection from "@/src/fonctionnalites/hackathons/composants/MentorsSection";
import { useHackathons } from "@/src/fonctionnalites/hackathons/hooks/useHackathons";
import { FaTimes } from "react-icons/fa";

export default function HackathonsPage() {
  const {
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    activeVideoUrl,
    setActiveVideoUrl,
    filteredHackathons
  } = useHackathons();

  return (
    <main className="w-full min-h-screen bg-white text-[#1E293B] flex flex-col items-center antialiased pb-80 relative overflow-hidden">
      <HeroHackathons />
      <IntroHackathons />
      <FilterHackathons 
        filter={filter} 
        setFilter={setFilter} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      <HackathonList filteredHackathons={filteredHackathons} />
      <CallToActionBanner />
      <PartnersSection />
      <TestimonialsSection />
      <MentorsSection />

      {/* Video Modal */}
      {activeVideoUrl && (
        <div 
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveVideoUrl(null)}
        >
          <div 
            className="relative w-full max-w-4xl aspect-[16/9] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveVideoUrl(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 hover:bg-black/80 w-10 h-10 rounded-full flex items-center justify-center transition z-50"
              aria-label="Fermer la vidéo"
            >
              <FaTimes />
            </button>
            <iframe 
              width="100%" 
              height="100%" 
              src={`${activeVideoUrl}?autoplay=1`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen 
              className="w-full h-full object-contain"
            ></iframe>
          </div>
        </div>
      )}
    </main>
  );
}