import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { useDuosAdminManager } from "../hooks/useDuosAdminManager";

export default function ModalAddDuo({ manager }: { manager: ReturnType<typeof useDuosAdminManager> }) {
  const {
    showAddDuoModal,
    setShowAddDuoModal,
    newDuo,
    setNewDuo,
    activeParticipants,
    duos,
    waves,
    handleAddDuoSubmit,
  } = manager;

  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [searchMember1Query, setSearchMember1Query] = useState("");
  const [searchMember2Query, setSearchMember2Query] = useState("");

  if (!showAddDuoModal) return null;

  const cleanup = () => {
    setDropdownOpen1(false);
    setDropdownOpen2(false);
    setSearchMember1Query("");
    setSearchMember2Query("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl max-w-md w-full mx-4"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-slate-900">Composer un nouveau Duo</h3>
          <button
            onClick={() => {
              setShowAddDuoModal(false);
              cleanup();
            }}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={(e) => handleAddDuoSubmit(e, cleanup)} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Nom du Duo</label>
            <input
              type="text"
              required
              placeholder="Ex: Duo Kappa"
              value={newDuo.name}
              onChange={(e) => setNewDuo({ ...newDuo, name: e.target.value })}
              className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 relative">
            {/* Membre 1 */}
            <div className="relative">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Membre 1</label>
              {(() => {
                const m1 = activeParticipants.find((p) => p.id === newDuo.member1Id);
                if (m1) {
                  return (
                    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl p-2 h-[52px]">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <img src={m1.avatar} className="w-8 h-8 rounded-full object-cover border border-slate-200 shrink-0" alt={m1.name} />
                        <div className="truncate">
                          <h4 className="font-bold text-[11px] text-slate-800 truncate">{m1.name}</h4>
                          <p className="text-[9px] text-slate-450 truncate">{m1.email || m1.level}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setNewDuo({ ...newDuo, member1Id: "" })}
                        className="text-slate-400 hover:text-slate-655 p-1 rounded-lg hover:bg-slate-100 shrink-0"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  );
                }
                return (
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setDropdownOpen1(!dropdownOpen1);
                        setDropdownOpen2(false);
                      }}
                      className="w-full text-left bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl px-3 py-3 text-xs text-slate-550 flex items-center justify-between transition-colors h-[52px]"
                    >
                      <span className="truncate">Sélectionner...</span>
                      <ChevronDown size={14} className="text-slate-450 shrink-0" />
                    </button>

                    {dropdownOpen1 && (
                      <div className="absolute z-30 mt-1 w-full bg-white border border-slate-200 rounded-xl shadow-xl max-h-56 overflow-y-auto left-0 p-2 space-y-1">
                        <input
                          type="text"
                          placeholder="Rechercher..."
                          value={searchMember1Query}
                          onChange={(e) => setSearchMember1Query(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-lg px-2.5 py-1.5 text-[11px] focus:outline-none focus:border-teal-500 mb-1"
                        />
                        <div className="divide-y divide-slate-100 max-h-36 overflow-y-auto">
                          {activeParticipants
                            .filter((p) => p.id !== newDuo.member2Id)
                            .filter((p) => !duos.some((d) => d.vague === newDuo.vague && (d.team.member1Id === p.id || d.team.member2Id === p.id)))
                            .filter((p) => {
                              if (!searchMember1Query) return true;
                              return (
                                p.name.toLowerCase().includes(searchMember1Query.toLowerCase()) ||
                                p.email?.toLowerCase().includes(searchMember1Query.toLowerCase())
                              );
                            })
                            .map((p) => (
                              <button
                                key={p.id}
                                type="button"
                                onClick={() => {
                                  setNewDuo({ ...newDuo, member1Id: p.id });
                                  setDropdownOpen1(false);
                                  setSearchMember1Query("");
                                }}
                                className="w-full text-left p-2 hover:bg-slate-50 transition-colors flex items-center gap-2"
                              >
                                <img src={p.avatar} className="w-7 h-7 rounded-full object-cover border border-slate-200 shrink-0" alt={p.name} />
                                <div className="truncate">
                                  <div className="text-[11px] font-bold text-slate-800 truncate">{p.name}</div>
                                  <div className="text-[9px] text-slate-450 truncate">{p.email || p.level}</div>
                                </div>
                              </button>
                            ))}
                          {activeParticipants
                            .filter((p) => p.id !== newDuo.member2Id)
                            .filter((p) => !duos.some((d) => d.vague === newDuo.vague && (d.team.member1Id === p.id || d.team.member2Id === p.id)))
                            .filter((p) => {
                              if (!searchMember1Query) return true;
                              return (
                                p.name.toLowerCase().includes(searchMember1Query.toLowerCase()) ||
                                p.email?.toLowerCase().includes(searchMember1Query.toLowerCase())
                              );
                            }).length === 0 && <div className="p-2 text-center text-[10px] text-slate-400">Aucun disponible</div>}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>

            {/* Membre 2 */}
            <div className="relative">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Membre 2</label>
              {(() => {
                const m2 = activeParticipants.find((p) => p.id === newDuo.member2Id);
                if (m2) {
                  return (
                    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl p-2 h-[52px]">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <img src={m2.avatar} className="w-8 h-8 rounded-full object-cover border border-slate-200 shrink-0" alt={m2.name} />
                        <div className="truncate">
                          <h4 className="font-bold text-[11px] text-slate-800 truncate">{m2.name}</h4>
                          <p className="text-[9px] text-slate-450 truncate">{m2.email || m2.level}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setNewDuo({ ...newDuo, member2Id: "" })}
                        className="text-slate-400 hover:text-slate-655 p-1 rounded-lg hover:bg-slate-100 shrink-0"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  );
                }
                return (
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setDropdownOpen2(!dropdownOpen2);
                        setDropdownOpen1(false);
                      }}
                      className="w-full text-left bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl px-3 py-3 text-xs text-slate-550 flex items-center justify-between transition-colors h-[52px]"
                    >
                      <span className="truncate">Sélectionner...</span>
                      <ChevronDown size={14} className="text-slate-450 shrink-0" />
                    </button>

                    {dropdownOpen2 && (
                      <div className="absolute z-30 mt-1 w-full bg-white border border-slate-200 rounded-xl shadow-xl max-h-56 overflow-y-auto left-0 p-2 space-y-1">
                        <input
                          type="text"
                          placeholder="Rechercher..."
                          value={searchMember2Query}
                          onChange={(e) => setSearchMember2Query(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-lg px-2.5 py-1.5 text-[11px] focus:outline-none focus:border-teal-500 mb-1"
                        />
                        <div className="divide-y divide-slate-100 max-h-36 overflow-y-auto">
                          {activeParticipants
                            .filter((p) => p.id !== newDuo.member1Id)
                            .filter((p) => !duos.some((d) => d.vague === newDuo.vague && (d.team.member1Id === p.id || d.team.member2Id === p.id)))
                            .filter((p) => {
                              if (!searchMember2Query) return true;
                              return (
                                p.name.toLowerCase().includes(searchMember2Query.toLowerCase()) ||
                                p.email?.toLowerCase().includes(searchMember2Query.toLowerCase())
                              );
                            })
                            .map((p) => (
                              <button
                                key={p.id}
                                type="button"
                                onClick={() => {
                                  setNewDuo({ ...newDuo, member2Id: p.id });
                                  setDropdownOpen2(false);
                                  setSearchMember2Query("");
                                }}
                                className="w-full text-left p-2 hover:bg-slate-50 transition-colors flex items-center gap-2"
                              >
                                <img src={p.avatar} className="w-7 h-7 rounded-full object-cover border border-slate-200 shrink-0" alt={p.name} />
                                <div className="truncate">
                                  <div className="text-[11px] font-bold text-slate-800 truncate">{p.name}</div>
                                  <div className="text-[9px] text-slate-450 truncate">{p.email || p.level}</div>
                                </div>
                              </button>
                            ))}
                          {activeParticipants
                            .filter((p) => p.id !== newDuo.member1Id)
                            .filter((p) => !duos.some((d) => d.vague === newDuo.vague && (d.team.member1Id === p.id || d.team.member2Id === p.id)))
                            .filter((p) => {
                              if (!searchMember2Query) return true;
                              return (
                                p.name.toLowerCase().includes(searchMember2Query.toLowerCase()) ||
                                p.email?.toLowerCase().includes(searchMember2Query.toLowerCase())
                              );
                            }).length === 0 && <div className="p-2 text-center text-[10px] text-slate-400">Aucun disponible</div>}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Vague</label>
              <select
                value={newDuo.vague}
                onChange={(e) => setNewDuo({ ...newDuo, vague: e.target.value })}
                className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none"
              >
                {waves.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Date limite</label>
              <input
                type="date"
                value={newDuo.date}
                onChange={(e) => setNewDuo({ ...newDuo, date: e.target.value })}
                className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Thème / Projet</label>
            <input
              type="text"
              placeholder="Ex: SaaS de facturation automatisée"
              value={newDuo.theme}
              onChange={(e) => setNewDuo({ ...newDuo, theme: e.target.value })}
              className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setShowAddDuoModal(false);
                cleanup();
              }}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-500 hover:bg-slate-100 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-sm font-semibold bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/10"
            >
              Créer Duo
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
