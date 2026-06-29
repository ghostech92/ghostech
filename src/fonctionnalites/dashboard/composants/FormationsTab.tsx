"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, MapPin, Pencil, Trash2 } from "lucide-react";
import ModalFormation from "./ModalFormation";
import { useFormationManager } from "../hooks/useFormationManager";

export default function FormationsTab({ manager }: { manager: ReturnType<typeof useFormationManager> }) {
  const { formations, openEdit, handleDelete } = manager;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {formations.map((course, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            key={course.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
          >
            <div className="h-40 relative overflow-hidden bg-slate-100">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider bg-white/95 text-slate-800 border border-slate-200 shadow-sm">
                  {course.closed ? "Fermé" : "Ouvert"}
                </span>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1">
                {course.title}
              </h3>
              <p className="text-slate-500 text-xs line-clamp-2 mb-4">
                {course.description}
              </p>

              <div className="space-y-2 mb-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock size={12} className="text-emerald-600 shrink-0" />
                  <span>Durée : {course.duree}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="text-teal-600 shrink-0" size={12} />
                  <span>Inscriptions : {course.recrutement}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-rose-500 shrink-0" size={12} />
                  <span>Lieu : {course.lieu || "Présentiel Intensif"}</span>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] bg-slate-50 text-slate-400 px-2 py-1 rounded border border-slate-200">
                  ID: {course.id}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => openEdit(course)}
                    className="p-2 text-slate-500 hover:text-emerald-600 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                    title="Modifier"
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    onClick={() => handleDelete(course.id)}
                    className="p-2 text-slate-500 hover:text-rose-600 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                    title="Supprimer"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        {formations.length === 0 && (
          <div className="col-span-full py-16 text-center text-slate-500 bg-white rounded-2xl border border-slate-200 border-dashed">
            Aucune formation enregistrée. Cliquez sur le bouton pour en créer une.
          </div>
        )}
      </div>

      <ModalFormation manager={manager} />
    </>
  );
}
