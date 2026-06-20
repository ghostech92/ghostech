"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProgrammesFormation() {
  const [activeCategory, setActiveCategory] = useState<"tous" | "bootcamps" | "ateliers">("tous");

  const programmes = [
    {
      id: 1,
      category: "bootcamps",
      title: "Full-Stack Web & Mobile Development",
      duration: "12 semaines",
      level: "Débutant à Intermédiaire",
      desc: "Maîtriser Next.js, Tailwind CSS, et l'intégration d'API pour concevoir des applications performantes.",
      icon: "💻",
      tags: ["React", "Node.js", "Next.js"]
    },
    {
      id: 2,
      category: "bootcamps",
      title: "Data Science & Intelligence Spatiale",
      duration: "8 semaines",
      level: "Avancé",
      desc: "Appliquer l'analyse de données et l'IA au service de problématiques concrètes comme la souveraineté alimentaire.",
      icon: "🌍",
      tags: ["Python", "Machine Learning", "GIS"]
    },
    {
      id: 3,
      category: "ateliers",
      title: "Fondamentaux de la Cybersécurité",
      duration: "3 jours",
      level: "Tous niveaux",
      desc: "Sécuriser ses applications, comprendre les failles courantes (OWASP) et protéger les infrastructures.",
      icon: "🛡️",
      tags: ["Sécurité", "Réseau", "Bonnes pratiques"]
    },
    {
      id: 4,
      category: "ateliers",
      title: "UI/UX Design & Glassmorphism Branding",
      duration: "1 semaine",
      level: "Débutant",
      desc: "Apprendre à structurer des maquettes Figma modernes et concevoir des interfaces graphiques percutantes.",
      icon: "🎨",
      tags: ["Figma", "Design System", "UI"]
    }
  ];

  const filteredProgrammes = activeCategory === "tous"
    ? programmes
    : programmes.filter(p => p.category === activeCategory);

  return (
    <main className="w-full min-h-screen bg-white text-[#0F2137] flex flex-col items-center">

      {/* INTRO SECTION */}
      <section className="w-full max-w-6xl px-4 py-8 text-center">
        <h3 className="text-sm font-bold text-[#357dab] uppercase tracking-widest mb-3">Pôle Formation & Innovation</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-[#02073E] mb-6 font-b612">
          Nos Programmes de Formation
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-[16px] leading-relaxed">
          Des cursus pratiques et intensifs conçus par des experts passionnés pour propulser les compétences techniques en Afrique.
        </p>

        {/* CATEGORY FILTER */}
        <div className="flex justify-center gap-3 mb-16">
          {[
            { id: "tous", label: "Tous les programmes" },
            { id: "bootcamps", label: "🚀 Bootcamps Intensifs" },
            { id: "ateliers", label: "⏱️ Ateliers Courts" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-[14px] transition-all ${activeCategory === tab.id
                  ? "bg-[#357dab] text-white shadow-md"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          {filteredProgrammes.map((prog) => (
            <div
              key={prog.id}
              className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF5ED] flex items-center justify-center text-2xl mb-6">
                  {prog.icon}
                </div>
                <h4 className="text-xl font-bold text-[#02073E] mb-3 leading-snug">
                  {prog.title}
                </h4>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  {prog.desc}
                </p>
              </div>

              <div className="border-t border-gray-50 pt-4 mt-4">
                <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
                  <div>⏱️ <strong>Durée :</strong> {prog.duration}</div>
                  <div>📊 <strong>Niveau :</strong> {prog.level}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {prog.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-7xl mt-auto py-12 border-t border-gray-100 text-center text-sm text-gray-400">
        Copyright 2026 Ghostech
      </footer>
    </main>
  );
}