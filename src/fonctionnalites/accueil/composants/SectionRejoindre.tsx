"use client";

import { useState } from "react";
import Image from "next/image";

const AXES = [
  {
    label: "Apprendre",
    title: "Développer les talents par l’apprentissage.",
    description: "Des formations pratiques, des ateliers et des certifications pour maîtriser les technologies du numérique.",
    action: "Découvrir nos formations",
    points: [
      { icon: "school", label: "Formations pratiques" },
      { icon: "workspace_premium", label: "Certifications professionnelles" },
      { icon: "lightbulb", label: "Apprentissage continu" },
      { icon: "terminal", label: "Projets concrets" },
    ],
  },
  {
    label: "Collaborer",
    title: "Créer des passerelles entre talents et écosystème.",
    description: "Nous connectons les talents aux entreprises, institutions, startups et communautés technologiques.",
    action: "Construire ensemble",
    points: [
      { icon: "groups", label: "Réseau de mentors & experts" },
      { icon: "handshake", label: "Partenariats durables" },
      { icon: "forum", label: "Rencontres professionnelles" },
      { icon: "hub", label: "Communautés technologiques" },
    ],
  },
  {
    label: "Innover",
    title: "Transformer les idées en solutions à fort impact.",
    description: "Hackathons, projets collaboratifs et expérimentation pour répondre aux défis de notre environnement.",
    action: "Imaginer des solutions",
    points: [
      { icon: "rocket_launch", label: "Hackathons & innovation" },
      { icon: "devices", label: "Solutions numériques" },
      { icon: "public", label: "Impact en Afrique" },
      { icon: "science", label: "IA, Data, robotique & IoT" },
    ],
  },
];

export default function SectionRejoindre() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAxis = AXES[activeIndex];

  return (
    <section className="w-full bg-white py-24 px-4 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col items-center">
        <div className="flex justify-center gap-6 sm:gap-10 md:gap-12 border-b border-gray-200 w-full max-w-3xl pb-2 sm:pb-4 mb-8 sm:mb-14 text-sm sm:text-[15px] font-medium text-gray-400" role="tablist" aria-label="Axes d’action Ghostech">
          {AXES.map((axis, index) => (
            <button
              key={axis.label}
              type="button"
              role="tab"
              id={`axe-tab-${index}`}
              aria-selected={activeIndex === index}
              aria-controls="axe-panel"
              onClick={() => setActiveIndex(index)}
              className={`pb-3 sm:pb-4 transition-colors cursor-pointer ${activeIndex === index ? "border-b-2 border-[#357dab] text-[#0F2137] font-bold" : "hover:text-[#0F2137]"}`}
            >
              {axis.label}
            </button>
          ))}
        </div>
        <div id="axe-panel" role="tabpanel" aria-labelledby={`axe-tab-${activeIndex}`} className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div key={activeIndex} className="flex-1 space-y-5 sm:space-y-6 w-full animate-in fade-in slide-in-from-bottom-1 duration-500 ease-out motion-reduce:animate-none">
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold font-b612 text-[#02073E] leading-tight">
            {activeAxis.title}
          </h2>
          <p className="text-gray-500 text-sm sm:text-[16px] leading-relaxed">
            {activeAxis.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-[14px] sm:text-[15px] font-medium text-[#0F2137]">
            {activeAxis.points.map((item) => (
              <div key={item.label} className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl shadow-xs">
                <span className="material-symbols-rounded text-[#fd800a] text-[20px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <button className="text-[#357dab] hover:text-[#02073E] font-bold text-sm sm:text-[15px] flex items-center gap-2 pt-2 sm:pt-4 transition-colors cursor-pointer">
            {activeAxis.action} <span>→</span>
          </button>
        </div>
        <div className="flex-1 relative w-full aspect-[4/3] max-w-lg bg-gray-50 rounded-3xl overflow-hidden shadow-xl">
          <Image src="/Galeries/img9.jpeg" alt="Sept pôles d’expertise Ghostech" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
        </div>
        </div>
      </div>
    </section>
  );
}
