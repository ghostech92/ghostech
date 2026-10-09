import React from "react";
import { motion } from "framer-motion";
import { Ban, CheckCircle2, Edit2, MoreVertical, Trash2 } from "lucide-react";
import { UserProfile } from "@/src/types/user.types";

interface MemberRowProps {
  member: UserProfile;
  index: number;
  onUpdateSelect: (userId: string, field: string, value: string) => void;
  onView: (member: UserProfile) => void;
  onToggleStatus: (member: UserProfile) => void;
}

export default function MemberRow({ member, index, onUpdateSelect, onView, onToggleStatus }: MemberRowProps) {
  const avatar = member.photoURL || member.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name || "User")}&background=E2E8F0&color=0F172A`;
  const status = member.status || 'Actif';
  
  // Formater la date si elle existe (Firebase Timestamp)
  let joinedDate = "Récemment";
  if (member.createdAt && member.createdAt.seconds) {
    joinedDate = new Date(member.createdAt.seconds * 1000).toLocaleDateString('fr-FR', {
      day: '2-digit', month: 'short', year: 'numeric'
    });
  } else if (typeof member.createdAt === 'string') {
    joinedDate = new Date(member.createdAt).toLocaleDateString('fr-FR', {
      day: '2-digit', month: 'short', year: 'numeric'
    });
  }

  return (
    <motion.tr 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-white/10 hover:bg-white/[0.03] transition-colors"
    >
      <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
        <img src={avatar} alt={member.name || "User"} className="w-9 h-9 rounded-full object-cover border border-slate-200" />
        <div>
          <div className="font-bold text-stone-200">{member.name || "Utilisateur Anonyme"}</div>
            <div className="text-xs text-stone-500">{member.email || "Non renseigné"}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <select
          value={member.role || "utilisateur"}
          onChange={(e) => onUpdateSelect(member.id!, "role", e.target.value)}
          className="bg-white/[0.06] text-[#fd800a] px-2.5 py-1 rounded-md text-xs font-bold border border-white/10 focus:outline-none focus:border-[#fd800a] cursor-pointer appearance-none"
        >
          <option value="utilisateur" className="bg-white text-slate-800">Utilisateur</option>
          <option value="membre" className="bg-white text-slate-800">Membre</option>
          <option value="admin" className="bg-white text-slate-800">Admin</option>
        </select>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-1.5 relative">
          <span className={`w-2 h-2 rounded-full absolute left-2 ${
            status === 'Actif' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]' : 
            status === 'En pause' ? 'bg-amber-500' : 'bg-rose-500'
          }`}></span>
          <select
            value={status}
            onChange={(e) => onUpdateSelect(member.id!, "status", e.target.value)}
            className={`pl-6 pr-2 py-1 rounded-md text-sm bg-transparent border-none focus:outline-none focus:ring-1 focus:ring-slate-100 cursor-pointer appearance-none ${
              status === 'Actif' ? 'text-emerald-600 font-medium' : 
              status === 'En pause' ? 'text-amber-600 font-medium' : 'text-rose-600 font-medium'
            }`}
          >
            <option value="Actif" className="bg-white text-emerald-650">Actif</option>
            <option value="En pause" className="bg-white text-amber-650">En pause</option>
            <option value="Inactif" className="bg-white text-rose-650">Inactif</option>
          </select>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-stone-500">{joinedDate}</td>
      <td className="px-6 py-4 text-right whitespace-nowrap">
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => onView(member)}
            aria-label={`Voir le profil de ${member.name || "cet utilisateur"}`}
            className="p-1.5 text-slate-400 hover:text-teal-600 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Edit2 size={16} />
          </button>
          <button
            type="button"
            onClick={() => onToggleStatus(member)}
            aria-label={status === "Actif" ? `Suspendre ${member.name || "cet utilisateur"}` : `Réactiver ${member.name || "cet utilisateur"}`}
            title={status === "Actif" ? "Mettre en pause" : "Réactiver"}
            className={`rounded-lg bg-slate-50 p-1.5 transition-colors hover:bg-slate-100 ${
              status === "Actif"
                ? "text-slate-400 hover:text-amber-600"
                : "text-amber-500 hover:text-emerald-600"
            }`}
          >
            {status === "Actif" ? <Ban size={16} /> : <CheckCircle2 size={16} />}
          </button>
          <button
            type="button"
            aria-label="Supprimer le membre"
            title="Suppression indisponible"
            disabled
            className="cursor-not-allowed rounded-lg bg-slate-50 p-1.5 text-slate-300"
          >
            <Trash2 size={16} />
          </button>
          <button className="p-1.5 text-slate-400 hover:text-slate-700 transition-colors">
            <MoreVertical size={16} />
          </button>
        </div>
      </td>
    </motion.tr>
  );
}
