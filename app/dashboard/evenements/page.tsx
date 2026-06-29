"use client";

import React, { useState } from "react";
import { Calendar, Layers, BookOpen, Plus } from "lucide-react";

import { useHackathonManager } from "@/src/fonctionnalites/dashboard/hooks/useHackathonManager";
import { useFormationManager } from "@/src/fonctionnalites/dashboard/hooks/useFormationManager";

import dynamic from "next/dynamic";

const HackathonsTab = dynamic(() => import("@/src/fonctionnalites/dashboard/composants/HackathonsTab"), { ssr: false });
const FormationsTab = dynamic(() => import("@/src/fonctionnalites/dashboard/composants/FormationsTab"), { ssr: false });

export default function EvenementsPage() {
  const [activeTab, setActiveTab] = useState<"hackathons" | "formations">("hackathons");
  
  const hackManager = useHackathonManager();
  const formManager = useFormationManager();

  return (
    <>
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Calendar className="text-teal-600" size={28} />
            Gestion des Contenus
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Ajoutez, listez ou supprimez les Hackathons et les Formations de la plateforme.
          </p>
        </div>

        {activeTab === "hackathons" ? (
          <button
            onClick={hackManager.openAdd}
            className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-teal-500/20 transition-all flex items-center gap-2"
          >
            <Plus size={18} />
            Ajouter un Hackathon
          </button>
        ) : (
          <button
            onClick={formManager.openAdd}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2"
          >
            <Plus size={18} />
            Ajouter une Formation
          </button>
        )}
      </div>

      {/* TABS HEADER */}
      <div className="flex border-b border-slate-200 mb-8">
        <button
          onClick={() => setActiveTab("hackathons")}
          className={`flex items-center gap-2 px-6 py-3 border-b-2 font-bold text-sm transition-all ${
            activeTab === "hackathons"
              ? "border-teal-500 text-teal-600"
              : "border-transparent text-slate-400 hover:text-slate-700"
          }`}
        >
          <Layers size={16} />
          Hackathons ({hackManager.hackathons.length})
        </button>
        <button
          onClick={() => setActiveTab("formations")}
          className={`flex items-center gap-2 px-6 py-3 border-b-2 font-bold text-sm transition-all ${
            activeTab === "formations"
              ? "border-emerald-500 text-emerald-600"
              : "border-transparent text-slate-400 hover:text-slate-700"
          }`}
        >
          <BookOpen size={16} />
          Formations ({formManager.formations.length})
        </button>
      </div>

      {/* MAIN CARDS LIST */}
      {activeTab === "hackathons" ? (
        <HackathonsTab manager={hackManager} />
      ) : (
        <FormationsTab manager={formManager} />
      )}
    </>
  );
}
