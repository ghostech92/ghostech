import React from "react";
import Link from "next/link";
import Image from "next/image";

interface WavesSectionProps {
  waves: any[];
}

export default function WavesSection({ waves }: WavesSectionProps) {
  const getWaveClasses = (waveId: string) => {
    switch (waveId) {
      case "vague1":
        return "bg-[#EC4899] border-b-[6px] border-[#BE185D]";
      case "vague2":
        return "bg-[#F97316] border-b-[6px] border-[#C2410C]";
      case "vague3":
        return "bg-[#6366F1] border-b-[6px] border-[#4338CA]";
      default:
        return "bg-[#8B5CF6] border-b-[6px] border-[#6D28D9]";
    }
  };

  return (
    <section className="space-y-4">
      <h3 className="text-sm font-black text-gray-950 uppercase tracking-widest">Vagues & Projets</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {waves.length === 0 ? (
          <div className="col-span-3 bg-white border-2 border-b-4 border-[#E5E5E5] rounded-3xl p-8 text-center text-gray-400 font-bold text-sm">
            <span className="text-3xl block mb-2">🌊</span>
            Aucune vague configurée pour le moment.
          </div>
        ) : (
          waves.map((vague, i) => (
            <div 
              key={i} 
              className={`relative rounded-3xl overflow-hidden h-48 shadow-sm group cursor-pointer hover:translate-y-[-2px] transition-all duration-150 flex items-start justify-between gap-4 p-5 text-white ${getWaveClasses(vague.id)}`}
            >
              {/* Contenu principal (Gauche) */}
              <div className="flex flex-col justify-between h-full relative z-10 w-1/2 min-w-max">
                <div className="space-y-1">
                  <h4 className="font-black text-sm leading-tight tracking-wide drop-shadow-sm uppercase">{vague.title}</h4>
                  <p className="text-[10px] text-white/90 font-bold">{vague.status}</p>
                </div>

                <div>
                  <Link 
                    href="/devarena/duo" 
                    className="bg-white text-gray-900 border-b-2 border-gray-200 font-black text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-xl transition-all duration-100 hover:bg-gray-50 flex items-center justify-center gap-1.5 shadow-sm w-max active:border-b-0 active:translate-y-[2px] active:mb-[2px]"
                  >
                    Voir duos
                  </Link>
                </div>
              </div>

              {/* Image (En bas à droite) */}
              <div className="absolute -right-4 -bottom-4 w-36 h-36 pointer-events-none">
                <Image
                  src={vague.image || "/arena-icon/lo1.svg"}
                  alt={vague.title}
                  fill
                  className="object-contain opacity-95 group-hover:scale-110 transition-transform duration-300 drop-shadow-md object-bottom"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
