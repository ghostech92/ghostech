import React from "react";

export interface TeamMember {
  id: number;
  name: string;
  role: string | string[];
  avatar: string;
  label: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}

export default function MemberCard({ item }: { item: TeamMember }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between relative transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
      <div>
        {/* Image Profil Carrée avec Coins Légèrement Arrondis */}
        <div className="w-full aspect-square rounded-lg bg-gray-50 overflow-hidden mb-4 relative">
          <img src={item.avatar} alt={item.name} className="w-full h-full object-cover object-top" />
        </div>

        {/* Titres & Rôles */}
        <h4 className="text-base font-bold text-[#0F2137] mb-1">{item.name}</h4>
        {Array.isArray(item.role) ? (
          <div className="flex flex-col gap-1 mb-4">
            {item.role.map((r: string, index: number) => (
              <p key={index} className="text-xs text-[#357dab] font-semibold uppercase tracking-wider">{r}</p>
            ))}
          </div>
        ) : (
          <p className="text-xs text-[#357dab] font-semibold uppercase tracking-wider mb-4">{item.role}</p>
        )}
      </div>

      {/* Pied de carte avec les coordonnées de la personne */}
      <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
        <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">{item.label}</span>
        
        {/* Coordonnées / Social Links */}
        <div className="flex items-center gap-2">
          {item.phone && (
            <a href={`tel:${item.phone}`} title="Téléphone" className="w-8 h-8 rounded-full bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-500 flex items-center justify-center transition-all duration-200">
              <span className="material-symbols-outlined text-[16px]">call</span>
            </a>
          )}
          {item.email && (
            <a href={`mailto:${item.email}`} title="Email" className="w-8 h-8 rounded-full bg-gray-50 hover:bg-blue-50 hover:text-[#357dab] text-gray-500 flex items-center justify-center transition-all duration-200">
              <span className="material-symbols-outlined text-[16px]">mail</span>
            </a>
          )}
          {item.linkedin && (
            <a href={item.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="w-8 h-8 rounded-full bg-gray-50 hover:bg-blue-50 hover:text-blue-600 text-gray-500 flex items-center justify-center transition-all duration-200">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .58 1 1.42v4.7h2.8M6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.13H5v8.37h3z" />
              </svg>
            </a>
          )}
          {item.github && (
            <a href={item.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 hover:text-black text-gray-500 flex items-center justify-center transition-all duration-200">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
