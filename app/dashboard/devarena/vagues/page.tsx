"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { DEFAULT_WAVES } from "@/src/fonctionnalites/devarena/donnees/arena-data";

export default function VaguesAdminPage() {
  const [waves, setWaves] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Load from localStorage or initialize
  useEffect(() => {
    let storedWaves = localStorage.getItem("arena_waves");

    if (!storedWaves) {
      localStorage.setItem("arena_waves", JSON.stringify(DEFAULT_WAVES));
      storedWaves = JSON.stringify(DEFAULT_WAVES);
    }

    setWaves(JSON.parse(storedWaves));
    setLoading(false);
  }, []);

  const handleUpdateWaveStatus = (waveId: string, newStatus: string) => {
    const updated = waves.map(w => {
      if (w.id === waveId) {
        return { ...w, status: newStatus };
      }
      return w;
    });
    setWaves(updated);
    localStorage.setItem("arena_waves", JSON.stringify(updated));
    window.dispatchEvent(new Event("arena_sync"));
    showToast(`Statut de la vague mis à jour.`);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-400">
        <RotateCcw className="animate-spin text-teal-600 mb-4" size={32} />
        <span>Chargement des vagues...</span>
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg font-medium text-sm flex items-center gap-3 ${
              toast.type === "success" ? "bg-emerald-500/90 text-white" : "bg-rose-500/90 text-white"
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {waves.map((wave) => (
          <div key={wave.id} className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 flex flex-col justify-between relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 opacity-5 rounded-full blur-2xl -translate-y-10 translate-x-10 ${
              wave.id === 'vague1' ? 'bg-pink-500' : wave.id === 'vague2' ? 'bg-orange-500' : wave.id === 'vague3' ? 'bg-indigo-500' : 'bg-purple-500'
            }`} />

            <div>
              <span className={`inline-block text-[10px] font-bold uppercase px-2.5 py-1 rounded-md mb-4 border ${
                wave.status === 'Terminée' ? 'bg-pink-50 text-pink-650 border-pink-100' :
                wave.status === 'En cours' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                'bg-slate-100 text-slate-500 border-slate-200'
              }`}>
                {wave.status}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{wave.title}</h3>
              <p className="text-xs text-slate-500 max-w-sm mb-6">
                Configurez l'état actuel de cette phase du tournoi de développement. Le changement affecte directement le tableau de bord des participants.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-4 flex gap-2">
              {["À venir", "En cours", "Terminée"].map((s) => (
                <button
                  key={s}
                  onClick={() => handleUpdateWaveStatus(wave.id, s)}
                  className={`flex-1 text-xs py-2 rounded-xl border font-bold transition-all ${
                    wave.status === s 
                      ? "bg-teal-600 border-teal-500 text-white shadow-lg shadow-teal-600/10" 
                      : "bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
