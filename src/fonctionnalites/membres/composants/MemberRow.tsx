import React from "react";
import { motion } from "framer-motion";
import { Edit2, Trash2, MoreVertical } from "lucide-react";
import { UserProfile } from "@/src/types/user.types";

interface MemberRowProps {
  member: UserProfile;
  index: number;
  onUpdateSelect: (userId: string, field: string, value: string) => void;
}

export default function MemberRow({ member, index, onUpdateSelect }: MemberRowProps) {
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
      className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
    >
      <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
        <img src={avatar} alt={member.name || "User"} className="w-9 h-9 rounded-full object-cover border border-slate-200" />
        <div>
          <div className="font-bold text-slate-800">{member.name || "Utilisateur Anonyme"}</div>
          <div className="text-xs text-slate-400">{member.email || "Non renseigné"}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <select
          value={member.role || "utilisateur"}
          onChange={(e) => onUpdateSelect(member.id!, "role", e.target.value)}
          className="bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-md text-xs font-bold border border-indigo-100 focus:outline-none focus:border-indigo-300 cursor-pointer appearance-none"
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
      <td className="px-6 py-4 whitespace-nowrap text-slate-500">{joinedDate}</td>
      <td className="px-6 py-4 text-right whitespace-nowrap">
        <div className="flex items-center justify-end gap-2">
          <button className="p-1.5 text-slate-400 hover:text-teal-600 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
            <Edit2 size={16} />
          </button>
          <button className="p-1.5 text-slate-400 hover:text-rose-600 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
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
