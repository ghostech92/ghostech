import React from "react";
import { motion } from "framer-motion";
import { formatDate, getAvatarUrl } from "../hooks/useWaveDuos";
import Image from "next/image";

interface WaveDuoCardProps {
  pres: any;
  index: number;
}

export default function WaveDuoCard({ pres, index }: WaveDuoCardProps) {
  const isCompleted = pres.status === "completed" || pres.status === "finished" || !!pres.score;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      className={`rounded-2xl sm:rounded-3xl p-3 sm:p-6 flex flex-col justify-between hover:translate-y-[-2px] hover:shadow-sm transition-all duration-150 relative overflow-hidden ${
        isCompleted 
          ? "bg-[#F6FFF0] border-2 border-b-4 border-[#58CC02]" 
          : "bg-white border-2 border-b-4 border-[#E5E5E5]"
      }`}
    >
      {/* Success Watermark for Completed */}
      {isCompleted && (
        <div className="absolute -right-8 -top-8 w-16 h-16 sm:w-24 sm:h-24 bg-[#58CC02]/10 rounded-full flex items-center justify-center pointer-events-none">
          <span className="text-[#58CC02] text-2xl sm:text-4xl font-black translate-x-[-4px] sm:translate-x-[-6px] translate-y-[4px] sm:translate-y-[6px]">✓</span>
        </div>
      )}

      {/* Status Badge */}
      <div className="absolute top-3 right-3 sm:top-6 sm:right-6">
        {isCompleted ? (
          <span className="bg-[#58CC02] text-white border-b-2 border-[#46A302] px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl text-[8px] sm:text-[9px] font-black uppercase tracking-wider shadow-sm flex items-center gap-0.5 sm:gap-1">
            ✓ <span className="hidden xs:inline">TERMINÉ</span>
          </span>
        ) : (
          <span className="bg-[#E5F6FF] text-[#1899D6] border border-[#84D8FF] px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl text-[8px] sm:text-[9px] font-black uppercase tracking-wider shadow-sm">
            ⚡ <span className="hidden xs:inline">EN ATTENTE</span>
          </span>
        )}
      </div>

      <div className="flex justify-between items-start mb-2 pr-12 sm:pr-24">
        <div>
          {/* Highly Visible Date Badge */}
          <div className={`flex items-center gap-1 sm:gap-1.5 border-2 border-b-4 px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-xl sm:rounded-2xl font-black text-[8px] sm:text-[10px] uppercase tracking-wider mb-2 sm:mb-4 w-fit shadow-sm ${
            isCompleted 
              ? "bg-[#F6FFF0] text-[#58CC02] border-[#A6E27F]" 
              : "bg-[#E5F6FF] text-[#1899D6] border-[#84D8FF]"
          }`}>
            <span className="text-[10px] sm:text-xs">📅</span>
            <span>{formatDate(pres.date)}</span>
          </div>

          <h4 className="text-xs sm:text-base font-black text-gray-950 uppercase tracking-tight leading-tight line-clamp-2">{pres.theme}</h4>
        </div>
      </div>

      {/* Duo Members */}
      <div className={`flex flex-col gap-1.5 sm:gap-3 border-2 rounded-xl sm:rounded-2xl p-2 sm:p-4 my-2 sm:my-5 ${
        isCompleted 
          ? "bg-white border-[#58CC02]/30" 
          : "bg-[#FAFAFA] border-[#E5E5E5]"
      }`}>
        <h5 className="font-black text-gray-400 text-[8px] sm:text-[10px] uppercase tracking-wider truncate">{pres.team?.name || "Duo"}</h5>
        <div className="flex flex-col gap-1.5 sm:gap-3">
          <div className="flex items-center gap-1.5 sm:gap-3">
            <Image src={getAvatarUrl(pres.team?.img1)} width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white shadow-sm object-cover" alt={pres.team?.member1 || "Membre 1"} />
            <span className="text-[9px] sm:text-xs font-bold text-gray-700 truncate">{pres.team?.member1}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-3">
            <Image src={getAvatarUrl(pres.team?.img2)} width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white shadow-sm object-cover" alt={pres.team?.member2 || "Membre 2"} />
            <span className="text-[9px] sm:text-xs font-bold text-gray-700 truncate">{pres.team?.member2}</span>
          </div>
        </div>
      </div>

      {/* Points & Stats */}
      <div className="border-t-2 border-[#F3F4F6] pt-2 sm:pt-4 space-y-2 sm:space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-[8px] sm:text-[10px] font-black text-gray-400 uppercase tracking-wider">Note</span>
          {pres.score ? (
            <div className="text-xs sm:text-sm font-black text-gray-950">{pres.score} <span className="text-[8px] sm:text-xs text-gray-400 font-bold">/ 50</span></div>
          ) : (
            <div className="text-[8px] sm:text-[9px] font-black text-gray-400 bg-[#F3F4F6] px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg">Attente</div>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-[8px] sm:text-[10px] font-black text-gray-400 uppercase tracking-wider">Points</span>
          {pres.pointsGagnes ? (
            <div className="inline-flex items-center gap-0.5 sm:gap-1 bg-[#FEF3C7] text-[#D97706] border border-[#FDE68A] px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl font-black text-[9px] sm:text-xs">
              👑 {String(pres.pointsGagnes).includes("PTS") ? pres.pointsGagnes : `+${pres.pointsGagnes} PTS`}
            </div>
          ) : (
            <div className="text-[8px] sm:text-[9px] font-black text-gray-400 bg-[#F3F4F6] px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg">--</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
