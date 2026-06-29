import React from "react";
import Link from "next/link";
import { FaCalendarAlt, FaTrophy, FaUsers } from "react-icons/fa";
import { Hackathon } from "../donnees/hackathonsData";

interface HackathonListProps {
  filteredHackathons: Hackathon[];
}

export default function HackathonList({ filteredHackathons }: HackathonListProps) {
  return (
    <section className="w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
      {filteredHackathons.map((hack) => (
        <div
          key={hack.id}
          className={`border rounded-3xl overflow-hidden hover:scale-[1.01] transition-all duration-300 flex flex-col p-5 ${hack.cardStyle}`}
        >
          <div className="w-full aspect-[16/10] rounded-2xl bg-slate-800 overflow-hidden shrink-0 relative shadow-inner mb-6">
            <img
              src={hack.img}
              alt={hack.title}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          <div className="flex flex-col justify-between flex-1 py-0.5">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className={`text-[9px] font-black px-2.5 py-1 rounded-md border tracking-wider uppercase backdrop-blur-xs ${hack.statusColor}`}>
                  {hack.statusLabel}
                </span>
                <span className="text-[11px] font-bold flex items-center gap-1.5 opacity-75">
                  <FaCalendarAlt className="text-slate-400" /> {hack.date}
                </span>
              </div>

              <h4 className={`text-xl font-extrabold tracking-tight mb-2.5 ${hack.titleColor}`}>
                {hack.title}
              </h4>

              <p className={`text-xs leading-relaxed font-normal mb-2 ${hack.textColor}`}>
                {hack.theme}
              </p>

              <p className="text-[11px] font-medium text-slate-500 mb-3">
                <span className="font-bold text-gray-700">Lieu :</span> {hack.lieu || "En ligne / Hybride"}
              </p>
            </div>

            <div className={`border-t pt-4 mt-4 flex flex-wrap items-center justify-between gap-3 ${hack.status === 'termine' ? 'border-slate-800' : 'border-slate-100'}`}>
              <div className="text-xs font-bold flex items-center gap-4">
                <span className="flex items-center gap-1.5"><FaTrophy className="text-slate-500 text-sm" /> <span className="text-[#39779e] font-extrabold">{hack.prizePool}</span></span>
                <span className="opacity-60 text-[11px] flex items-center gap-1.5"><FaUsers className="text-slate-500" /> {hack.participants} participants</span>
              </div>

              <div className="flex flex-wrap gap-1">
                {hack.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`text-[9px] px-2.5 py-0.5 rounded-md font-semibold ${hack.status === 'termine'
                      ? 'bg-slate-800 border-slate-700/60 text-slate-300'
                      : 'bg-white border-slate-200 text-slate-500 shadow-2xs'
                      } border`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <Link
                href={`/evenements/hackathons/${hack.id}`}
                className={`w-full text-center text-xs font-bold py-2.5 px-4 rounded-xl transition-all border block ${hack.status === "termine"
                    ? "bg-slate-800 hover:bg-slate-700 text-white border-slate-700"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
                  }`}
              >
                Détails
              </Link>
              {hack.status === "termine" ? (
                <button
                  disabled
                  className="w-full text-center bg-red-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl cursor-not-allowed transition-all"
                >
                  Terminé
                </button>
              ) : (
                <Link
                  href={`/evenements/hackathons/${hack.id}`}
                  className="w-full text-center bg-black hover:bg-slate-900 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center"
                >
                  Participer
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}

      {filteredHackathons.length === 0 && (
        <div className="col-span-full text-center py-16 bg-white/60 backdrop-blur-md rounded-2xl border border-slate-200 border-dashed text-slate-400 text-xs font-medium">
          Aucun hackathon ne correspond à votre recherche.
        </div>
      )}
    </section>
  );
}
