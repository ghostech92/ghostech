"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, RotateCcw } from "lucide-react";
import dynamic from "next/dynamic";
import { useDuosAdminManager } from "@/src/fonctionnalites/dashboard/hooks/useDuosAdminManager";

const DuosBoard = dynamic(() => import("@/src/fonctionnalites/dashboard/composants/DuosBoard"), { ssr: false });
const ModalAddDuo = dynamic(() => import("@/src/fonctionnalites/dashboard/composants/ModalAddDuo"), { ssr: false });
const ModalScoreDuo = dynamic(() => import("@/src/fonctionnalites/dashboard/composants/ModalScoreDuo"), { ssr: false });

export default function DuosAdminPage() {
  const manager = useDuosAdminManager();
  const { loading, toast, setShowAddDuoModal } = manager;

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-400">
        <RotateCcw className="animate-spin text-teal-600 mb-4" size={32} />
        <span>Chargement des duos...</span>
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

      <div className="space-y-6">
        <div className="flex justify-between items-center bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Compositions & Présentations des Duos</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Planifiez les duos par vague et attribuez les scores après les présentations hebdomadaires.
            </p>
          </div>
          <button
            onClick={() => setShowAddDuoModal(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2"
          >
            <Plus size={16} /> Composer un Duo
          </button>
        </div>

        <DuosBoard manager={manager} />
      </div>

      <ModalAddDuo manager={manager} />
      <ModalScoreDuo manager={manager} />
    </>
  );
}

