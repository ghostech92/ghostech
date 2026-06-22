"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "EcoTrack Mobile",
    team: "Duo Gamma",
    vague: 1,
    theme: "Application Mobile / Environnement",
    description: "Une application mobile permettant aux utilisateurs de suivre leur empreinte carbone quotidienne en fonction de leurs déplacements et de leur alimentation.",
    techs: ["React Native", "Firebase", "Node.js"],
    image: "/Galeries/img3.jpg",
    github: "#"
  },
  {
    id: 2,
    title: "Ghostech Hub",
    team: "Duo Delta",
    vague: 1,
    theme: "Plateforme Communautaire",
    description: "Plateforme web interne pour centraliser les ressources, les événements et les discussions des membres de l'association.",
    techs: ["Next.js", "TailwindCSS", "PostgreSQL"],
    image: "/Galeries/img8.jpeg",
    github: "#"
  },
  {
    id: 3,
    title: "SecureChat",
    team: "Duo Alpha",
    vague: 1,
    theme: "Cybersécurité",
    description: "Un service de messagerie chiffrée de bout en bout conçu pour des échanges sécurisés au sein des équipes de développement.",
    techs: ["Python", "Cryptography", "Sockets"],
    image: "/header_photo/h1.avif",
    github: "#"
  }
];

export default function DevArenaProjects() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* Header */}
      <section className="w-full bg-[#e49834] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-b612 font-bold mb-4">Bibliothèque des Projets</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Explorez les réalisations et le code source des projets développés par les participants tout au long des vagues de la DevArena.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
              
              {/* Project Image */}
              <div className="w-full aspect-[4/3] relative overflow-hidden bg-gray-200">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0F2137]/80 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-bold tracking-wider">
                  VAGUE {project.vague}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#0F2137] font-b612">{project.title}</h3>
                  <span className="text-xs font-bold bg-[#357dab]/10 text-[#357dab] px-2 py-1 rounded">
                    {project.team}
                  </span>
                </div>
                
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Thème : {project.theme}
                </p>
                
                <p className="text-sm text-gray-600 mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <hr className="border-gray-100 mb-4" />

                <div className="flex justify-between items-center">
                  <a href={project.github} className="flex items-center gap-1.5 text-sm font-bold text-[#0F2137] hover:text-[#357dab] transition-colors">
                    <span className="material-symbols-rounded text-[18px]">code</span>
                    Code Source
                  </a>
                  <button className="flex items-center gap-1.5 text-sm font-bold text-[#357dab] hover:text-[#2a6590] transition-colors">
                    Détails <span className="material-symbols-rounded text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
