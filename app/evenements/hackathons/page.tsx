"use client";

import Link from "next/link";
import { useState } from "react";

export default function HackathonsPage() {
  const [filter, setFilter] = useState<"tous" | "avenir" | "passes">("tous");

  const hackathons = [
    {
      id: 1,
      status: "avenir",
      badgeText: "Inscriptions ouvertes",
      badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
      title: "Ghostech HackDev 2026",
      date: "14 - 16 Novembre 2026",
      location: "Campus IUA, Abidjan",
      theme: "FinTech & Inclusion : Propulser l'économie locale par le code",
      prize: "1 500 000 FCFA de dotation",
      tags: ["Web/Mobile", "Blockchain", "Design Sprint"],
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600"
    },
    {
      id: 2,
      status: "passes",
      badgeText: "Terminé",
      badgeColor: "bg-gray-100 text-gray-600 border-gray-200",
      title: "IUA Grand Hackathon 2025",
      date: "05 - 07 Décembre 2025",
      location: "Laboratoire Tech IUA",
      theme: "L'Intelligence Spatiale au Service de la Souveraineté Alimentaire",
      prize: "Projet vainqueur : AgroSpatial Insight",
      tags: ["Data Science", "Python", "GIS / Spatial"],
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600"
    },
    {
      id: 3,
      status: "passes",
      badgeText: "Terminé",
      badgeColor: "bg-gray-100 text-gray-600 border-gray-200",
      title: "Code & Design Sprint v1",
      date: "18 - 19 Mai 2025",
      location: "En ligne & Campus",
      theme: "Glassmorphism & Interfaces UI modernes pour le web africain",
      prize: "Projet vainqueur : QbLog CMS",
      tags: ["UI/UX Design", "Tailwind CSS", "Figma"],
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600"
    }
  ];

  const filteredHackathons = filter === "tous"
    ? hackathons
    : hackathons.filter(h => h.status === filter);

  return (
    <main className="w-full min-h-screen bg-white text-[#0F2137] flex flex-col items-center">

      {/* TITRE DE LA PAGE */}
      <section className="w-full max-w-6xl px-4 py-8 text-center">
        <h3 className="text-sm font-bold text-[#357dab] uppercase tracking-widest mb-3">Compétitions Tech</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-[#02073E] mb-6 font-b612 leading-tight">
          Nos Hackathons : Innover sous pression ⚡
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-[16px] leading-relaxed">
          48 heures pour concevoir un prototype, coder une solution et convaincre un jury d'experts. Découvre nos prochains défis et les éditions passées.
        </p>

        {/* FILTRES DYNAMIQUES */}
        <div className="flex justify-center gap-3 mb-16">
          {[
            { id: "tous", label: "Tous les événements" },
            { id: "avenir", label: "🔥 Éditions à venir" },
            { id: "passes", label: "📁 Éditions précédentes" }
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

        {/* CONTENEUR DES CARTES HACKATHONS */}
        <div className="space-y-10 max-w-4xl mx-auto text-left">
          {filteredHackathons.map((hackathon) => (
            <div
              key={hackathon.id}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col md:flex-row gap-6 md:gap-8 p-5 md:p-6"
            >
              {/* Image d'illustration */}
              <div className="w-full md:w-2/5 aspect-[16/10] md:aspect-square lg:aspect-[16/11] rounded-xl bg-gray-50 overflow-hidden shrink-0 relative">
                <img
                  src={hackathon.img}
                  alt={hackathon.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenu et détails */}
              <div className="flex flex-col justify-between flex-1 py-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${hackathon.badgeColor}`}>
                      {hackathon.badgeText}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      📅 {hackathon.date}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-[#02073E] mb-2 font-b612">
                    {hackathon.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium mb-4">
                    📍 {hackathon.location}
                  </p>

                  <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
                    <strong className="text-[#0F2137]">Thématique :</strong> {hackathon.theme}
                  </p>
                </div>

                <div className="border-t border-gray-50 pt-4 mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Récompense ou Lauréat */}
                  <div className="text-[13px] font-bold text-[#357dab]">
                    🏆 {hackathon.prize}
                  </div>

                  {/* Badges technologiques */}
                  <div className="flex flex-wrap gap-1.5">
                    {hackathon.tags.map((tag, idx) => (
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
          <h3 className="text-2xl font-bold text-[#02073E] mb-3">Vous souhaitez sponsoriser un hackathon ?</h3>
          <p className="text-gray-500 text-[15px] max-w-xl mx-auto mb-6 leading-relaxed">
            Associez votre entreprise ou institution à l’élite technique de notre collectif et découvrez des solutions logicielles inédites.
          </p>
          <Link
            href="#"
            className="inline-block bg-[#357dab] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#086666] transition-colors"
          >
            Devenir Partenaire 🤝
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-7xl mt-auto py-12 border-t border-gray-100 text-center text-sm text-gray-400">
        Copyright 2026 Ghostech, IUA
      </footer>
    </main>
  );
}