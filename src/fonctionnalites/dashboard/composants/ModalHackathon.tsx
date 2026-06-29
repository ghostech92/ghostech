"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Pencil } from "lucide-react";
import { useHackathonManager } from "../hooks/useHackathonManager";

export default function ModalHackathon({ manager }: { manager: ReturnType<typeof useHackathonManager> }) {
  const { showModal, editingId, form, updateField, closeModal, handleSubmit, handleImageUpload } = manager;

  return (
    <AnimatePresence>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs"
          />
          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white border border-slate-200 rounded-2xl p-6 w-full max-w-lg relative z-10 max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                {editingId !== null ? <Pencil size={18} className="text-teal-600" /> : <Plus size={20} className="text-teal-600" />}
                {editingId !== null ? "Modifier le Hackathon" : "Ajouter un Hackathon"}
              </h3>
              <button
                onClick={closeModal}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Titre du Hackathon *
                </label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  placeholder="Ex: Hackathon Intelligence Artificielle"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                    Statut
                  </label>
                  <select
                    value={form.status}
                    onChange={(e: any) => updateField("status", e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-teal-500"
                  >
                    <option value="a-venir">À venir</option>
                    <option value="termine">Terminé</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                    Nombre de participants
                  </label>
                  <input
                    type="number"
                    value={form.participants}
                    onChange={(e) => updateField("participants", e.target.value)}
                    placeholder="Ex: 120"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                    Date de l'événement *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.date}
                    onChange={(e) => updateField("date", e.target.value)}
                    placeholder="Ex: 05 - 07 Septembre 2026"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                    Cashprize
                  </label>
                  <input
                    type="text"
                    value={form.prize}
                    onChange={(e) => updateField("prize", e.target.value)}
                    placeholder="Ex: 1 000 000 FCFA"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Thématique / Description *
                </label>
                <textarea
                  required
                  rows={3}
                  value={form.theme}
                  onChange={(e) => updateField("theme", e.target.value)}
                  placeholder="Saisissez la description du projet ou le thème principal..."
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-teal-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Tags (séparés par des virgules)
                </label>
                <input
                  type="text"
                  value={form.tags}
                  onChange={(e) => updateField("tags", e.target.value)}
                  placeholder="Ex: Python, Watsonx, LLM"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Lieu
                </label>
                <input
                  type="text"
                  value={form.lieu}
                  onChange={(e) => updateField("lieu", e.target.value)}
                  placeholder="Ex: En ligne, Présentiel, Hybride"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Image descriptive (Fichier ou URL)
                </label>
                <div className="space-y-3">
                  <div className="flex items-center justify-center border-2 border-dashed border-slate-200 rounded-xl p-4 bg-slate-50 hover:border-teal-500/50 transition-colors relative group">
                    {form.image && form.image.startsWith("data:") ? (
                      <div className="text-center relative w-full">
                        <img src={form.image} alt="Preview" className="max-h-32 rounded-lg mx-auto object-cover" />
                        <button
                          type="button"
                          onClick={() => updateField("image", "")}
                          className="absolute -top-2 -right-2 bg-rose-600 text-white rounded-full p-1 hover:bg-rose-700 transition-colors z-20"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ) : (
                      <label className="cursor-pointer text-center w-full py-2">
                        <Plus className="mx-auto text-slate-400 mb-1 group-hover:text-teal-600 transition-colors" size={20} />
                        <span className="text-xs text-slate-550 block font-medium">Charger un fichier image</span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">Glissez-déposez ou cliquez</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                  {form.image && form.image.startsWith("data:") ? null : (
                    <>
                      <div className="text-center text-[10px] text-slate-400 font-bold uppercase">OU utiliser une URL</div>
                      <input
                        type="text"
                        value={form.image}
                        onChange={(e) => updateField("image", e.target.value)}
                        placeholder="Coller l'URL d'une image existante..."
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-teal-500"
                      />
                    </>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-teal-500/20 transition-all"
                >
                  {editingId !== null ? "Enregistrer" : "Créer le Hackathon"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
