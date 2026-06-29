"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, RotateCcw } from "lucide-react";
import { useParticipantsAdmin } from "@/src/fonctionnalites/dashboard/hooks/useParticipantsAdmin";
import ParticipantsTable from "@/src/fonctionnalites/dashboard/composants/ParticipantsTable";
import AddMemberModal from "@/src/fonctionnalites/dashboard/composants/AddMemberModal";

export default function ParticipantsAdminPage() {
  const {
    participants,
    loading,
    toast,
    handleToggleParticipation,
    handleRoleChange,
    handleUpdatePoints,
    removeParticipant,
    handleSelectExistingMember,
    createCustomMember
  } = useParticipantsAdmin();

  const [showAddMemberModal, setShowAddMemberModal] = useState(false);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-400">
        <RotateCcw className="animate-spin text-teal-600 mb-4" size={32} />
        <span>Chargement des participants...</span>
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

      <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Gestion des Participants</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Sélectionnez les membres qui participent au tournoi et configurez leurs points.
            </p>
          </div>
          <button 
            onClick={() => setShowAddMemberModal(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2"
          >
            <Plus size={16} /> Ajouter un Membre
          </button>
        </div>

        <ParticipantsTable 
          participants={participants}
          handleRoleChange={handleRoleChange}
          handleToggleParticipation={handleToggleParticipation}
          handleUpdatePoints={handleUpdatePoints}
          removeParticipant={removeParticipant}
        />
      </div>

      {showAddMemberModal && (
        <AddMemberModal 
          participants={participants}
          onClose={() => setShowAddMemberModal(false)}
          onSelectExisting={(user) => {
            handleSelectExistingMember(user);
            setShowAddMemberModal(false);
          }}
          onCreateCustom={(emailLower, extractedName) => {
            createCustomMember(emailLower, extractedName);
            setShowAddMemberModal(false);
          }}
        />
      )}
    </>
  );
}
