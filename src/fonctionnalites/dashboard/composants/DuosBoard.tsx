import React from "react";
import { Edit2, Trash2 } from "lucide-react";
import { useDuosAdminManager } from "../hooks/useDuosAdminManager";

export default function DuosBoard({ manager }: { manager: ReturnType<typeof useDuosAdminManager> }) {
  const { waves, duos, handleDeleteDuo, setShowScoreModal, setDuoScore } = manager;

  return (
    <div className="grid grid-cols-1 gap-6">
      {waves.map((wave) => {
        const duosInWave = duos.filter((d) => d.vague === wave.id);
        return (
          <div key={wave.id} className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span
                  className={`w-3.5 h-3.5 rounded-full ${
                    wave.id === "vague1"
                      ? "bg-pink-500"
                      : wave.id === "vague2"
                      ? "bg-orange-500"
                      : wave.id === "vague3"
                      ? "bg-indigo-500"
                      : "bg-purple-500"
                  }`}
                />
                <span className="font-bold text-slate-800">{wave.title}</span>
                <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-medium border border-slate-200">
                  {duosInWave.length} Duo(s)
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-500">Statut Vague: {wave.status}</span>
            </div>

            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {duosInWave.length === 0 ? (
                <div className="col-span-2 text-center text-slate-400 py-6 text-sm font-medium">
                  Aucun duo programmé dans cette vague.
                </div>
              ) : (
                duosInWave.map((d) => (
                  <div
                    key={d.id}
                    className="bg-slate-50/50 border border-slate-200/80 p-4 rounded-xl flex flex-col justify-between hover:border-teal-500/20 transition-all relative"
                  >
                    <button
                      onClick={() => handleDeleteDuo(d.id)}
                      className="absolute top-4 right-4 text-slate-400 hover:text-rose-600 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                          {d.date}
                        </span>
                        {d.status === "completed" ? (
                          <span className="text-[9px] font-bold text-teal-650 uppercase bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                            Noté
                          </span>
                        ) : (
                          <span className="text-[9px] font-bold text-orange-655 uppercase bg-orange-50 px-2 py-0.5 rounded border border-orange-100 animate-pulse">
                            En attente
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-slate-800 text-base leading-tight mt-1">{d.theme}</h4>

                      {/* Duo details */}
                      <div className="bg-white rounded-xl p-3 my-3 border border-slate-100 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center font-bold text-xs text-teal-650">
                          🤝
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-800 text-xs">{d.team.name}</h5>
                          <p className="text-[10px] text-slate-500 font-semibold">
                            {d.team.member1} & {d.team.member2}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-3 mt-3 flex justify-between items-center">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-semibold block">Projet Note</span>
                        <span className="font-bold text-slate-800 text-sm">
                          {d.score ? `${d.score} / 50` : "-- / 50"}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-semibold block">Points Gagnés</span>
                        <span className="font-bold text-amber-600 text-xs bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-100 inline-block mt-0.5">
                          {d.pointsGagnes ? d.pointsGagnes : "-- PTS"}
                        </span>
                      </div>

                      {d.status === "upcoming" ? (
                        <button
                          onClick={() => {
                            setShowScoreModal(d);
                            setDuoScore({
                              theme: "0",
                              creativity: "0",
                              features: "0",
                              presentation: "0",
                            });
                          }}
                          className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                        >
                          <Edit2 size={12} /> Noter
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setShowScoreModal(d);
                            if (d.evaluation) {
                              setDuoScore({
                                theme: String(d.evaluation.theme),
                                creativity: String(d.evaluation.creativity),
                                features: String(d.evaluation.features),
                                presentation: String(d.evaluation.presentation),
                              });
                            } else {
                              const s = parseInt(d.score || "0") || 0;
                              setDuoScore({
                                theme: String(Math.min(10, Math.floor(s * 0.2))),
                                creativity: String(Math.min(10, Math.floor(s * 0.2))),
                                features: String(Math.min(15, Math.floor(s * 0.3))),
                                presentation: String(Math.min(15, Math.floor(s * 0.3))),
                              });
                            }
                          }}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                        >
                          <Edit2 size={12} /> Modifier Note
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
