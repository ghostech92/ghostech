import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useDuosAdminManager } from "../hooks/useDuosAdminManager";

export default function ModalScoreDuo({ manager }: { manager: ReturnType<typeof useDuosAdminManager> }) {
  const {
    showScoreModal,
    setShowScoreModal,
    duoScore,
    setDuoScore,
    handleScoreDuoSubmit,
  } = manager;

  if (!showScoreModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl max-w-sm w-full mx-4"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-slate-900">Noter la présentation</h3>
          <button onClick={() => setShowScoreModal(null)} className="text-slate-400 hover:text-slate-600">
            <X size={20} />
          </button>
        </div>

        <div className="mb-4 p-3 bg-slate-50 border border-slate-200 rounded-xl">
          <span className="text-[10px] text-teal-600 font-bold block uppercase tracking-wide">Duo à noter</span>
          <span className="text-sm font-bold text-slate-800 block mt-0.5">{showScoreModal.team.name}</span>
          <span className="text-xs text-slate-500 block mt-0.5">
            {showScoreModal.team.member1} & {showScoreModal.team.member2}
          </span>
        </div>

        <form onSubmit={handleScoreDuoSubmit} className="space-y-4">
          <div className="space-y-3">
            <div>
              <label className="text-xs font-bold text-slate-500 block mb-1">Respect du thème (/10)</label>
              <input
                type="number"
                min="0"
                max="10"
                required
                value={duoScore.theme}
                onChange={(e) => setDuoScore({ ...duoScore, theme: e.target.value })}
                className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold focus:outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 block mb-1">Créativité et originalité (/10)</label>
              <input
                type="number"
                min="0"
                max="10"
                required
                value={duoScore.creativity}
                onChange={(e) => setDuoScore({ ...duoScore, creativity: e.target.value })}
                className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold focus:outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 block mb-1">Fonctionnalités proposées (/15)</label>
              <input
                type="number"
                min="0"
                max="15"
                required
                value={duoScore.features}
                onChange={(e) => setDuoScore({ ...duoScore, features: e.target.value })}
                className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold focus:outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 block mb-1">Présentation et démonstration (/15)</label>
              <input
                type="number"
                min="0"
                max="15"
                required
                value={duoScore.presentation}
                onChange={(e) => setDuoScore({ ...duoScore, presentation: e.target.value })}
                className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          <div className="p-3 bg-amber-50 border border-amber-100 rounded-xl flex justify-between items-center mt-4">
            <span className="text-xs font-bold text-slate-700">Total (Points gagnés) :</span>
            <span className="text-base font-black text-amber-600">
              {Math.min(
                50,
                (parseInt(duoScore.theme) || 0) +
                  (parseInt(duoScore.creativity) || 0) +
                  (parseInt(duoScore.features) || 0) +
                  (parseInt(duoScore.presentation) || 0)
              )}{" "}
              / 50
            </span>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setShowScoreModal(null)}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-500 hover:bg-slate-100 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-sm font-semibold bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/10"
            >
              Valider
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
