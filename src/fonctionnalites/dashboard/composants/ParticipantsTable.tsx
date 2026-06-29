import React from "react";
import { Check, X, Trash2 } from "lucide-react";

interface ParticipantsTableProps {
  participants: any[];
  handleRoleChange: (id: string, role: string) => void;
  handleToggleParticipation: (id: string) => void;
  handleUpdatePoints: (id: string, points: number) => void;
  removeParticipant: (id: string) => void;
}

export default function ParticipantsTable({
  participants,
  handleRoleChange,
  handleToggleParticipation,
  handleUpdatePoints,
  removeParticipant
}: ParticipantsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm text-slate-500">
        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
          <tr>
            <th className="px-6 py-4 font-bold">Profil</th>
            <th className="px-6 py-4 font-bold">Rôle Global</th>
            <th className="px-6 py-4 font-bold text-center">Participe à l'Arena ?</th>
            <th className="px-6 py-4 font-bold">Niveau</th>
            <th className="px-6 py-4 font-bold">Points</th>
            <th className="px-6 py-4 text-right font-bold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {participants.map((p) => (
            <tr key={p.id} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
                <img src={p.avatar} alt={p.name} className="w-9 h-9 rounded-full object-cover border border-slate-200" />
                <div>
                  <div className="font-bold text-slate-800">{p.name}</div>
                  <div className="text-xs text-slate-400">{p.email}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select 
                  value={p.role || "participant"}
                  onChange={(e) => handleRoleChange(p.id, e.target.value)}
                  className="bg-slate-50 text-slate-700 border border-slate-200 rounded-lg px-2.5 py-1 text-xs focus:outline-none"
                >
                  <option value="participant">Participant</option>
                  <option value="jury">Membre Jury</option>
                  <option value="organisateur">Organisateur</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <button
                  onClick={() => handleToggleParticipation(p.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all border ${
                    p.isParticipating 
                      ? "bg-teal-50 text-teal-600 border-teal-100" 
                      : "bg-slate-100 text-slate-500 border-slate-200"
                  }`}
                >
                  {p.isParticipating ? <Check size={12} /> : <X size={12} />}
                  {p.isParticipating ? "Oui (Actif)" : "Non (Spectateur)"}
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`text-xs font-bold uppercase px-2 py-0.5 rounded border ${
                  p.level === "Master" ? "bg-amber-50 text-amber-600 border-amber-100" :
                  p.level === "Diamond" ? "bg-indigo-50 text-indigo-600 border-indigo-100" :
                  p.level === "Platinum" ? "bg-cyan-50 text-cyan-600 border-cyan-100" :
                  p.level === "Gold" ? "bg-yellow-50 text-yellow-600 border-yellow-100" :
                  "bg-slate-100 text-slate-500 border-slate-200"
                }`}>
                  {p.level}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <input 
                  type="number" 
                  disabled={!p.isParticipating}
                  value={p.points}
                  onChange={(e) => handleUpdatePoints(p.id, parseInt(e.target.value) || 0)}
                  className="w-24 bg-slate-50 text-slate-800 border border-slate-200 rounded-lg px-2 py-1 text-sm font-bold focus:outline-none focus:border-teal-500/50 disabled:opacity-30"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-xs">
                <button 
                  onClick={() => {
                    if (confirm("Supprimer ce membre du registre ?")) {
                      removeParticipant(p.id);
                    }
                  }}
                  className="text-slate-400 hover:text-rose-600 p-1 bg-slate-50 hover:bg-rose-50 border border-slate-200/60 rounded transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
