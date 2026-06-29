"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Loader2 } from "lucide-react";
import { useMembers } from "@/src/fonctionnalites/membres/hooks/useMembers";
import MemberRow from "@/src/fonctionnalites/membres/composants/MemberRow";

export default function MembresPage() {
  const { members, loading, errorMsg, updateMember } = useMembers();
  
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [confirmDialog, setConfirmDialog] = useState<{userId: string, field: string, value: string} | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleUpdateMember = async (userId: string, field: string, value: string) => {
    const result = await updateMember(userId, field, value);
    if (result.success) {
      setToast({ 
        message: `${field === 'role' ? 'Le rôle' : 'Le statut'} a été mis à jour avec succès.`, 
        type: "success" 
      });
    } else {
      setToast({ 
        message: `Erreur lors de la mise à jour des permissions.`, 
        type: "error" 
      });
    }
    setTimeout(() => setToast(null), 3000);
  };

  const filteredMembers = members.filter(m => 
    (m.name || "").toLowerCase().includes(searchQuery.toLowerCase()) || 
    (m.email || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg font-medium text-sm flex items-center gap-3 ${
              toast.type === "success" ? "bg-emerald-600 text-white" : "bg-rose-600 text-white"
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {confirmDialog && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl max-w-sm w-full mx-4"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">Confirmer la modification</h3>
              <p className="text-slate-500 text-sm mb-6">
                Êtes-vous sûr de vouloir changer le {confirmDialog.field === 'role' ? 'rôle' : 'statut'} pour <span className="text-slate-900 font-bold">{confirmDialog.value}</span> ?
              </p>
              <div className="flex justify-end gap-3">
                <button 
                  onClick={() => setConfirmDialog(null)}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Annuler
                </button>
                <button 
                  onClick={() => {
                    handleUpdateMember(confirmDialog.userId, confirmDialog.field, confirmDialog.value);
                    setConfirmDialog(null);
                  }}
                  className="px-4 py-2 rounded-xl text-sm font-semibold bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/20 transition-all"
                >
                  Confirmer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900">Gestion des Membres</h1>
          <p className="text-slate-500 text-sm mt-1">Consultez et gérez les membres de la plateforme Ghostech.</p>
        </div>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-teal-600/10 transition-colors">
          + Ajouter un membre
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200/80 focus-within:border-teal-500/50 w-full sm:w-72">
            <Search size={16} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Rechercher un membre..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-sm w-full text-slate-850 placeholder-slate-400"
            />
          </div>
          <button className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 px-4 py-2 rounded-xl border border-slate-200/80 text-sm text-slate-600 transition-colors">
            <Filter size={16} />
            Filtrer
          </button>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-500">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50/80 border-b border-slate-200/60">
              <tr>
                <th className="px-6 py-4 font-semibold">Membre</th>
                <th className="px-6 py-4 font-semibold">Rôle</th>
                <th className="px-6 py-4 font-semibold">Statut</th>
                <th className="px-6 py-4 font-semibold">Date d'inscription</th>
                <th className="px-6 py-4 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                    <Loader2 className="animate-spin mx-auto mb-4" size={32} />
                    Chargement des membres...
                  </td>
                </tr>
              ) : errorMsg ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-rose-600">
                    <div className="font-bold mb-2">Erreur</div>
                    {errorMsg}
                  </td>
                </tr>
              ) : filteredMembers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                    Aucun membre trouvé.
                  </td>
                </tr>
              ) : filteredMembers.map((member, i) => (
                <MemberRow 
                  key={member.id} 
                  member={member} 
                  index={i} 
                  onUpdateSelect={(userId, field, value) => setConfirmDialog({ userId, field, value })}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Mock */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Affichage de 1 à {Math.min(5, filteredMembers.length)} sur {filteredMembers.length} membres</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors disabled:opacity-50 text-slate-600">Précédent</button>
            <button className="px-3 py-1.5 bg-teal-50 text-teal-600 font-bold rounded-lg border border-teal-100">1</button>
            <button className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors text-slate-600">2</button>
            <button className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors text-slate-600">Suivant</button>
          </div>
        </div>
      </div>
    </>
  );
}
