"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Swords, 
  Trophy, 
  Settings, 
  TrendingUp,
  Code2
} from "lucide-react";

export default function DashboardOverview() {
  const stats = [
    { label: "Utilisateurs Totaux", value: "1,248", change: "+12%", icon: <Users className="text-cyan-400" size={24} /> },
    { label: "Matchs DevArena", value: "342", change: "+8%", icon: <Swords className="text-violet-400" size={24} /> },
    { label: "Points Distribués", value: "45K", change: "+24%", icon: <Trophy className="text-amber-400" size={24} /> },
    { label: "Projets Soumis", value: "89", change: "+4%", icon: <Code2 className="text-emerald-400" size={24} /> }
  ];

  const recentActivities = [
    { user: "Alex Koffi", action: "a remporté un match DevArena", time: "Il y a 10 min", type: "arena" },
    { user: "Sarah Koné", action: "a soumis le projet 'Smart API'", time: "Il y a 45 min", type: "project" },
    { user: "Jean Marc", action: "a rejoint la plateforme", time: "Il y a 2 h", type: "user" },
    { user: "Équipe Dev", action: "a déployé la mise à jour V2.1", time: "Hier", type: "system" }
  ];

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-900">Tableau de Bord</h1>
        <p className="text-slate-500 text-sm mt-1">Bienvenue, voici un aperçu de l'activité de la plateforme.</p>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        {stats.map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm relative overflow-hidden group hover:border-slate-300 transition-colors"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
              {stat.icon}
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                {stat.icon}
              </div>
              <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-md flex items-center gap-1">
                <TrendingUp size={12} />
                {stat.change}
              </span>
            </div>
            <h3 className="text-slate-500 text-sm font-medium">{stat.label}</h3>
            <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
        
        {/* CHART SECTION MOCK */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="xl:col-span-2 bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 flex flex-col"
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Activité de la Plateforme</h3>
              <p className="text-xs text-slate-500 mt-1">Inscriptions vs Matchs DevArena</p>
            </div>
            <select className="bg-slate-50 border border-slate-200 text-xs text-slate-800 rounded-lg px-3 py-1.5 outline-none">
              <option>7 derniers jours</option>
              <option>30 derniers jours</option>
              <option>Cette année</option>
            </select>
          </div>
          
          {/* Mock Bar Chart */}
          <div className="flex-1 flex items-end gap-2 lg:gap-4 h-64 mt-4 pt-4 border-t border-slate-100">
            {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end gap-2 group h-full pb-6 relative">
                <div className="absolute bottom-0 w-full text-center text-[10px] text-slate-400">
                  {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"][i]}
                </div>
                {/* Bar */}
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                  className="w-full bg-cyan-500/10 group-hover:bg-cyan-500/20 border-t border-cyan-500 rounded-t-sm transition-colors relative"
                >
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded shadow-lg transition-opacity whitespace-nowrap z-10">
                    {h * 12}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RECENT ACTIVITIES */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900">Activités Récentes</h3>
            <button className="text-cyan-600 text-xs hover:underline">Voir tout</button>
          </div>

          <div className="space-y-6">
            {recentActivities.map((act, i) => (
              <div key={i} className="flex gap-4">
                <div className="relative mt-1">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 shrink-0 z-10 relative bg-slate-50">
                    {act.type === 'arena' && <Swords size={14} className="text-violet-500" />}
                    {act.type === 'project' && <Code2 size={14} className="text-emerald-500" />}
                    {act.type === 'user' && <Users size={14} className="text-cyan-500" />}
                    {act.type === 'system' && <Settings size={14} className="text-amber-500" />}
                  </div>
                  {i !== recentActivities.length - 1 && (
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-slate-100"></div>
                  )}
                </div>
                <div>
                  <p className="text-sm text-slate-600">
                    <span className="font-bold text-slate-900">{act.user}</span> {act.action}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
