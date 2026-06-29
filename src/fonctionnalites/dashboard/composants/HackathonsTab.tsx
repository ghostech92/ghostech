"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, DollarSign, MapPin, Users, Pencil, Trash2 } from "lucide-react";
import ModalHackathon from "./ModalHackathon";
import { useHackathonManager } from "../hooks/useHackathonManager";

export default function HackathonsTab({ manager }: { manager: ReturnType<typeof useHackathonManager> }) {
  const { hackathons, openEdit, handleDelete } = manager;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hackathons.map((hack, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            key={hack.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
          >
            <div className="h-40 relative overflow-hidden bg-slate-100">
              <img
                src={hack.img}
                alt={hack.title}
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider bg-white/95 text-slate-800 border border-slate-200 shadow-sm">
                  {hack.status === "a-venir" ? "À venir" : "Terminé"}
                </span>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1">
                {hack.title}
              </h3>
              <p className="text-slate-500 text-xs line-clamp-2 mb-4">
                {hack.theme}
              </p>

              <div className="space-y-2 mb-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock size={12} className="text-teal-600 shrink-0" />
                  <span>{hack.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign size={12} className="text-amber-500 shrink-0" />
                  <span>Cashprize : {hack.prizePool}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={12} className="text-violet-600 shrink-0" />
                  <span>{hack.participants} participants max</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-emerald-600 shrink-0" />
                  <span>Lieu : {hack.lieu || "En ligne / Hybride"}</span>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] bg-slate-50 text-slate-400 px-2 py-1 rounded border border-slate-200">
                  ID: {hack.id}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => openEdit(hack)}
                    className="p-2 text-slate-500 hover:text-teal-600 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                    title="Modifier"
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    onClick={() => handleDelete(hack.id)}
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
        {hackathons.length === 0 && (
          <div className="col-span-full py-16 text-center text-slate-500 bg-white rounded-2xl border border-slate-200 border-dashed">
            Aucun hackathon enregistré. Cliquez sur le bouton pour en créer un.
          </div>
        )}
      </div>

      <ModalHackathon manager={manager} />
    </>
  );
}
