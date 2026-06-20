"use client";

import Link from "next/link";
import { useState } from "react";

export default function HackathonsPage() {
  const [filter, setFilter] = useState<"tous" | "summit" | "cohesion">("tous");

  const events = [
    {
      id: 1,
      status: "summit",
      badgeText: "G-TECH SUMMIT",
      badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
      title: "G-TECH SUMMIT 2026",
      date: "14 - 15 AOÛT 2026",
      location: "À définir",
      theme: "Construire. Impacter. Conquérir.",
      prize: "Conférences, Panels, Ateliers, Hackathon",
      tags: ["Networking", "Opportunités professionnelles"],
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600"
    },
    {
      id: 2,
      status: "cohesion",
      badgeText: "TEAM BUILDING",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
      title: "Sortie Détente & Cohésion d'Équipe",
      date: "29 AOÛT 2026",
      location: "Plage / Espace de loisirs",
      theme: "Célébrer le succès du G-TECH SUMMIT et intégrer les nouveaux",
      prize: "Plage, Bowling, Paintball, Pique-nique, Gaming",
      tags: ["Cohésion", "Détente", "Team Building"],
      img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600"
    }
  ];

  const filteredEvents = filter === "tous"
    ? events
    : events.filter(e => e.status === filter);

  return (
    <main className="w-full min-h-screen bg-white text-[#0F2137] flex flex-col items-center">

      {/* TITRE DE LA PAGE */}
      <section className="w-full max-w-6xl px-4 py-8 text-center">
        <h3 className="text-sm font-bold text-[#357dab] uppercase tracking-widest mb-3">Août — Impact, Rayonnement & Cohésion</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-[#02073E] mb-6 font-b612 leading-tight">
          G-TECH SUMMIT & Cohésion
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-[16px] leading-relaxed">
          Le mois d'août marque l'apogée de notre première année d'existence avec un sommet technologique majeur suivi d'un grand événement de célébration.
        </p>

        {/* FILTRES DYNAMIQUES */}
        <div className="flex justify-center gap-3 mb-16">
          {[
            { id: "tous", label: "Tous les événements" },
            { id: "summit", label: "🚀 G-TECH SUMMIT" },
            { id: "cohesion", label: "🎉 Cohésion & Détente" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-[14px] transition-all ${filter === tab.id
                  ? "bg-[#357dab] text-white shadow-md shadow-teal-700/10"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENEUR DES CARTES */}
        <div className="space-y-10 max-w-4xl mx-auto text-left">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col md:flex-row gap-6 md:gap-8 p-5 md:p-6"
            >
              {/* Image d'illustration */}
              <div className="w-full md:w-2/5 aspect-[16/10] md:aspect-square lg:aspect-[16/11] rounded-xl bg-gray-50 overflow-hidden shrink-0 relative">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenu et détails */}
              <div className="flex flex-col justify-between flex-1 py-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${event.badgeColor}`}>
                      {event.badgeText}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      📅 {event.date}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-[#02073E] mb-2 font-b612">
                    {event.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium mb-4">
                    📍 {event.location}
                  </p>

                  <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
                    <strong className="text-[#0F2137]">Focus :</strong> {event.theme}
                  </p>
                </div>

                <div className="border-t border-gray-50 pt-4 mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Récompense ou Lauréat */}
                  <div className="text-[13px] font-bold text-[#357dab]">
                    ✨ {event.prize}
                  </div>

                  {/* Badges technologiques */}
                  <div className="flex flex-wrap gap-1.5">
                    {event.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-50 border border-gray-100 text-gray-500 text-[11px] px-2.5 py-0.5 rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BANNIÈRE APPEL À PARTENARIAT */}
        <div className="mt-24 bg-[#FFF5ED] rounded-[24px] p-8 md:p-12 text-center max-w-4xl mx-auto border border-orange-100">
          <h3 className="text-2xl font-bold text-[#02073E] mb-3">Participez au G-TECH SUMMIT !</h3>
          <p className="text-gray-500 text-[15px] max-w-xl mx-auto mb-6 leading-relaxed">
            Ne manquez pas l'événement phare de l'année. Conférences, hackathon, et opportunités de networking uniques vous attendent.
          </p>
          <Link
            href="/equipe/rejoindre"
            className="inline-block bg-[#357dab] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#086666] transition-colors"
          >
            S'inscrire maintenant 🚀
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-7xl mt-auto py-12 border-t border-gray-100 text-center text-sm text-gray-400">
        Copyright 2026 Ghostech
      </footer>
    </main>
  );
}