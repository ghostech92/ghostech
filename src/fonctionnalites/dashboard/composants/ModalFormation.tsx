"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Pencil } from "lucide-react";
import { useFormationManager } from "../hooks/useFormationManager";

export default function ModalFormation({ manager }: { manager: ReturnType<typeof useFormationManager> }) {
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
                {editingId !== null ? <Pencil size={18} className="text-emerald-600" /> : <Plus size={20} className="text-emerald-600" />}
                {editingId !== null ? "Modifier la Formation" : "Ajouter une Formation"}
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
                  Titre de la Formation *
                </label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  placeholder="Ex: Formation Data & Intelligence Artificielle"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Description / Sommaire *
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.desc}
                  onChange={(e) => updateField("desc", e.target.value)}
                  placeholder="Saisissez le contenu et la description de cette formation..."
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                    Période d'inscriptions
                  </label>
                  <input
                    type="text"
                    value={form.recrute}
                    onChange={(e) => updateField("recrute", e.target.value)}
                    placeholder="Ex: du 24 avril au 6 mai"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                    Durée
                  </label>
                  <input
                    type="text"
                    value={form.duree}
                    onChange={(e) => updateField("duree", e.target.value)}
                    placeholder="Ex: 4 mois"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-emerald-500"
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
                    placeholder="Ex: Présentiel Intensif"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                    Statut du recrutement
                  </label>
                  <select
                    value={form.closed}
                    onChange={(e) => updateField("closed", e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="true">Fermé (Inscriptions terminées)</option>
                    <option value="false">Ouvert (Inscriptions ouvertes)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Image de couverture (Fichier ou URL)
                </label>
                <div className="space-y-3">
                  <div className="flex items-center justify-center border-2 border-dashed border-slate-200 rounded-xl p-4 bg-slate-50 hover:border-emerald-500/50 transition-colors relative group">
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
                        <Plus className="mx-auto text-slate-400 mb-1 group-hover:text-emerald-600 transition-colors" size={20} />
                        <span className="text-xs text-slate-500 block font-medium">Charger un fichier image</span>
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
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-emerald-500"
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
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-500/20 transition-all"
                >
                  {editingId !== null ? "Enregistrer" : "Créer la Formation"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
