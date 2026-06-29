"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Save, Shield, Bell, Globe, Database } from "lucide-react";

export default function ParametresPage() {
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1500);
  };

  return (
    <>
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Settings className="text-slate-500" size={28} />
            Paramètres du Système
          </h1>
          <p className="text-slate-500 text-sm mt-1">Configurez les options globales de la plateforme Ghostech.</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={saving}
          className="bg-teal-600 hover:bg-teal-700 disabled:opacity-70 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-teal-600/20 transition-all flex items-center justify-center gap-2 min-w-[150px]"
        >
          {saving ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <><Save size={16} /> Sauvegarder</>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Settings Navigation (Left Column) */}
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-teal-50 text-teal-650 border border-teal-100 rounded-xl font-bold text-sm text-left transition-colors">
            <Globe size={18} /> Configuration Générale
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl font-medium text-sm text-left transition-colors">
            <Shield size={18} /> Sécurité & Accès
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl font-medium text-sm text-left transition-colors">
            <Bell size={18} /> Notifications Système
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl font-medium text-sm text-left transition-colors">
            <Database size={18} /> Sauvegardes & Données
          </button>
        </div>

        {/* Settings Content (Right Column) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 space-y-6"
        >
          
          <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">Informations de la plateforme</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Nom du site</label>
                <input 
                  type="text" 
                  defaultValue="Ghostech DevArena" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-teal-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email de contact</label>
                <input 
                  type="email" 
                  defaultValue="contact@ghostech.ci" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-teal-500/50 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">Fonctionnalités</h3>
            
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-slate-800 mb-0.5">Inscriptions Ouvertes</div>
                  <div className="text-xs text-slate-500">Autoriser les nouveaux développeurs à s'inscrire sur la plateforme.</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-slate-800 mb-0.5">Mode Maintenance</div>
                  <div className="text-xs text-slate-500">Désactiver l'accès public au site (seuls les admins pourront se connecter).</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-500"></div>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-slate-800 mb-0.5">DevArena Saison 2</div>
                  <div className="text-xs text-slate-500">Activer le tableau de bord des tournois pour la Vague 2.</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                </label>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </>
  );
}
