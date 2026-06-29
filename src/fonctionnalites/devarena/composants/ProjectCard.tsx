import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "../hooks/useProjects";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = project.images && project.images.length > 0 
    ? project.images 
    : [project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const isWinner = project.score && project.score >= 16;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      className={`rounded-2xl sm:rounded-3xl p-3 sm:p-5 flex flex-col justify-between hover:translate-y-[-2px] hover:shadow-sm transition-all duration-150 relative overflow-hidden ${
        isWinner 
          ? "bg-[#FFFDF0] border-2 border-b-4 border-[#FFC800]" 
          : "bg-white border-2 border-b-4 border-[#E5E5E5]"
      }`}
    >
      {/* Winner Overlay Badge */}
      {isWinner && (
        <div className="absolute top-3 right-3 z-20">
          <span className="bg-[#FFC800] text-white border-b-2 border-[#E0A900] px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg sm:rounded-xl text-[8px] sm:text-[9px] font-black uppercase tracking-wider shadow-sm flex items-center gap-0.5 sm:gap-1">
            👑 <span className="hidden xs:inline">GAGNANT</span>
          </span>
        </div>
      )}

      <Link href={`/devarena/projets/${project.id}`} className="block cursor-pointer flex-1">
        <div>
          <div className="w-full aspect-video rounded-xl sm:rounded-2xl bg-slate-50 mb-3 sm:mb-4 overflow-hidden relative border border-slate-100 group/img">
            <Image
              src={images[currentImageIndex]}
              alt={project.name}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            
            {/* Vague Badge */}
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-black/50 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-black px-1.5 py-0.5 rounded sm:rounded-md uppercase tracking-wider z-10">
              {project.vague}
            </div>

            {/* Navigation Arrows for multiple images */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-1.5 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition duration-200 z-10"
                >
                  <span className="material-symbols-rounded text-[10px] sm:text-[12px] font-black">arrow_back_ios_new</span>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition duration-200 z-10"
                >
                  <span className="material-symbols-rounded text-[10px] sm:text-[12px] font-black">arrow_forward_ios</span>
                </button>
                
                {/* Dots indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-0.5 sm:gap-1 z-10">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setCurrentImageIndex(idx);
                      }}
                      className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-all ${
                        idx === currentImageIndex ? "bg-white w-2 sm:w-3" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
            <div className="flex justify-between items-start gap-1 pr-12 sm:pr-16">
              <h4 className="text-xs sm:text-base font-black text-gray-950 uppercase tracking-tight leading-tight line-clamp-2 group-hover:text-teal-600 transition-colors">
                {project.name}
              </h4>
            </div>
            
            {project.description && (
              <p className="text-[9px] sm:text-xs text-gray-500 line-clamp-2 leading-relaxed font-medium">
                {project.description}
              </p>
            )}
            
            <div className="flex gap-1 flex-wrap pt-0.5">
              {project.tech.map(t => (
                <span key={t} className="text-[8px] sm:text-[9px] font-black text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-md border border-gray-200">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Team / Author Box */}
          <div className={`flex flex-col gap-1.5 border-2 rounded-xl sm:rounded-2xl p-2 sm:p-3 my-2 sm:my-3 ${
            isWinner 
              ? "bg-white border-[#FFC800]/30" 
              : "bg-[#FAFAFA] border-[#E5E5E5]"
          }`}>
            <h5 className="font-black text-gray-400 text-[8px] sm:text-[10px] uppercase tracking-wider truncate">
              {project.createdBy || "Créateur"}
            </h5>
            <div className="flex flex-col gap-1.5">
              {(project.member1 || project.member2) ? (
                <>
                  {project.member1 && (
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-[8px] sm:text-[10px] font-bold">
                        {project.member1[0]?.toUpperCase()}
                      </div>
                      <span className="text-[9px] sm:text-xs font-bold text-gray-700 truncate">{project.member1}</span>
                    </div>
                  )}
                  {project.member2 && (
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[8px] sm:text-[10px] font-bold">
                        {project.member2[0]?.toUpperCase()}
                      </div>
                      <span className="text-[9px] sm:text-xs font-bold text-gray-700 truncate">{project.member2}</span>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-[8px] sm:text-[10px] font-bold">
                    👤
                  </div>
                  <span className="text-[9px] sm:text-xs font-bold text-gray-700 truncate">Membre unique</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>

      {/* Action Footer */}
      <div className="mt-auto border-t-2 border-[#F3F4F6] pt-2 sm:pt-3 flex justify-between items-center w-full">
        <div>
          {project.score !== undefined && project.score !== null ? (
            <span className={`text-[8px] sm:text-[10px] font-black px-1.5 py-0.5 rounded sm:rounded-md whitespace-nowrap border ${
              isWinner 
                ? "text-[#D97706] bg-[#FEF3C7] border-[#FDE68A]" 
                : "text-slate-600 bg-slate-50 border-slate-200"
            }`}>
              🏆 {project.score}/20
            </span>
          ) : (
            <span className="text-[8px] sm:text-[9px] font-black text-gray-400 bg-[#F3F4F6] px-1.5 py-0.5 rounded">
              En attente
            </span>
          )}
        </div>
        <div className="flex gap-1.5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border-b-2 border-slate-300 w-6 h-6 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center transition active:border-b-0 active:translate-y-[2px]"
              title="Code source GitHub"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#58CC02] hover:text-[#46A302] bg-[#F6FFF0] hover:bg-[#EAFCD9] border-b-2 border-[#A6E27F] w-6 h-6 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center transition active:border-b-0 active:translate-y-[2px]"
              title="Démo Live"
            >
              <span className="material-symbols-rounded text-[14px] sm:text-[18px]">open_in_new</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
