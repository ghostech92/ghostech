import React from "react";
import { motion } from "framer-motion";
import { UserProfile, UserExperience } from "../profil.types";
import { GAME_BADGES } from "@/src/services/gameEngine";

interface OngletGeneralProps {
  isEditing: boolean;
  profile: UserProfile;
  displayBio: string;
  editBio: string;
  setEditBio: (v: string) => void;
  displayExperiences: UserExperience[];
  editExperiences: UserExperience[];
  handleAddExperience: () => void;
  handleRemoveExperience: (id: string) => void;
  handleUpdateExperience: (id: string, field: keyof UserExperience, value: string) => void;
  handleBadgeClick: (e: React.MouseEvent) => void;
}

export default function OngletGeneral({
  isEditing,
  profile,
  displayBio,
  editBio,
  setEditBio,
  displayExperiences,
  editExperiences,
  handleAddExperience,
  handleRemoveExperience,
  handleUpdateExperience,
  handleBadgeClick
}: OngletGeneralProps) {
  return (
    <>
      {/* About Me */}
      <div className="space-y-3">
        <h4 className="text-xs font-black text-[#3C3C3C] uppercase tracking-wider">À propos de moi</h4>
        {isEditing ? (
          <textarea
            value={editBio}
            onChange={(e) => setEditBio(e.target.value)}
            className="w-full text-sm text-[#3C3C3C] leading-relaxed font-medium p-4 border-2 border-[#e5e5e5] rounded-2xl focus:outline-none focus:border-[#1cb0f6] bg-[#f7f7f7] min-h-[100px] transition-all"
            placeholder="Écrivez quelques mots sur vous..."
          />
        ) : (
          <p className="text-sm text-[#4b5563] leading-relaxed font-medium whitespace-pre-wrap bg-[#f7f7f7] border-2 border-[#e5e5e5] rounded-2xl p-4">
            {displayBio}
          </p>
        )}
      </div>

      {/* Experience Area */}
      <div className="space-y-4 pt-2">
        <h4 className="text-xs font-black text-[#3C3C3C] uppercase tracking-wider flex justify-between items-center">
          Parcours & Ateliers
          {isEditing && (
            <button
              onClick={handleAddExperience}
              className="duo-btn duo-btn-blue !py-1.5 !px-3 text-[10px]"
              title="Ajouter une expérience"
            >
              <span className="material-symbols-rounded text-[14px] mr-1">add</span>
              Ajouter
            </button>
          )}
        </h4>
        <div className="space-y-4">
          {isEditing ? (
            editExperiences.map((exp) => (
              <div key={exp.id} className="relative flex flex-col sm:flex-row items-start gap-4 bg-white p-5 rounded-2xl border-2 border-[#e5e5e5] border-b-[4px] border-b-[#cdcdcd] group">
                <button
                  onClick={() => handleRemoveExperience(exp.id)}
                  className="absolute top-3 right-3 text-[#ff4b4b] hover:scale-110 transition-transform"
                  title="Supprimer cette ligne"
                >
                  <span className="material-symbols-rounded text-lg">delete</span>
                </button>

                <div className="w-12 h-12 flex-shrink-0">
                  <input
                    type="text"
                    value={exp.icon}
                    onChange={(e) => handleUpdateExperience(exp.id, "icon", e.target.value)}
                    className="w-full h-full text-center bg-[#f7f7f7] border-2 border-[#e5e5e5] rounded-xl outline-none text-2xl focus:border-[#1cb0f6] font-bold"
                    placeholder="🏢"
                    title="Emoji (ex: 🏢) ou URL d'image"
                  />
                </div>

                <div className="flex-1 space-y-3 w-full">
                  <input
                    type="text"
                    value={exp.role}
                    onChange={(e) => handleUpdateExperience(exp.id, "role", e.target.value)}
                    placeholder="Titre (ex: Développeur Frontend)"
                    className="w-full text-sm font-extrabold text-[#3C3C3C] bg-transparent border-b-2 border-[#e5e5e5] focus:outline-none focus:border-[#1cb0f6] pb-1"
                  />
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => handleUpdateExperience(exp.id, "company", e.target.value)}
                    placeholder="Nom de l'entreprise"
                    className="w-full text-xs font-bold text-[#4b5563] bg-transparent border-b-2 border-[#e5e5e5] focus:outline-none focus:border-[#1cb0f6] pb-1"
                  />
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={exp.period}
                      onChange={(e) => handleUpdateExperience(exp.id, "period", e.target.value)}
                      placeholder="Période (ex: Jan 2024 - Présent)"
                      className="flex-1 text-xs font-bold text-[#777777] bg-transparent border-b-2 border-[#e5e5e5] focus:outline-none focus:border-[#1cb0f6] pb-1"
                    />
                    <input
                      type="text"
                      value={exp.location || ""}
                      onChange={(e) => handleUpdateExperience(exp.id, "location", e.target.value)}
                      placeholder="Lieu (ex: Abidjan, CI)"
                      className="flex-1 text-xs font-bold text-[#777777] bg-transparent border-b-2 border-[#e5e5e5] focus:outline-none focus:border-[#1cb0f6] pb-1"
                    />
                  </div>
                  <textarea
                    value={exp.description || ""}
                    onChange={(e) => handleUpdateExperience(exp.id, "description", e.target.value)}
                    placeholder="Description de vos missions, réalisations, technologies utilisées..."
                    className="w-full text-xs font-medium text-[#4b5563] bg-[#f7f7f7] border-2 border-[#e5e5e5] rounded-xl p-3 focus:outline-none focus:border-[#1cb0f6] min-h-[80px]"
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="space-y-4">
              {displayExperiences.map((exp) => (
                <div key={exp.id} className="p-4 bg-white border-2 border-[#e5e5e5] border-b-[4px] border-b-[#cdcdcd] rounded-2xl flex items-start gap-4 hover:border-[#ccd0d8] transition-all">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#f7f7f7] rounded-xl border-2 border-[#e5e5e5] overflow-hidden">
                    {exp.icon && exp.icon.length > 3 ? (
                      <img src={exp.icon} alt="logo" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-2xl">{exp.icon || "🏢"}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h5 className="text-sm font-extrabold text-[#3C3C3C] leading-tight">{exp.role}</h5>
                    <p className="text-xs text-[#777777] font-bold mt-0.5">{exp.company}</p>
                    <p className="text-[10px] font-extrabold text-[#afafaf] uppercase tracking-wide mt-1">
                      {exp.period} {exp.location && `• ${exp.location}`}
                    </p>
                    {exp.description && (
                      <p className="text-xs text-[#4b5563] mt-2.5 leading-relaxed font-medium whitespace-pre-wrap">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          {isEditing && editExperiences.length === 0 && (
            <p className="text-xs text-slate-400 italic text-center py-4">Aucune expérience renseignée. Cliquez sur le "+" pour en ajouter une.</p>
          )}
        </div>
      </div>

      {/* DevArena Status Alert Area */}
      <div className="bg-[#ddf4ff] border-2 border-[#84d8ff] border-b-[4px] border-b-[#55c2ff] rounded-2xl p-4 space-y-1">
        <h4 className="text-xs font-black text-[#1899d6] flex items-center gap-1.5 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#1cb0f6] animate-pulse"></span>
          Statut DevArena : Assignation
        </h4>
        <p className="text-[11px] text-[#1899d6] leading-relaxed font-bold">
          L'équipe administrative est en train de former les duos pour la prochaine vague de confrontations. Restez à l'écoute, votre partenaire vous sera assigné très bientôt !
        </p>
      </div>

      {/* Portfolio Grid (Optimized responsive grid layout) */}
      <div className="space-y-4 pt-2">
        <h4 className="text-xs font-black text-[#3C3C3C] uppercase tracking-wider">Badges & Accomplissements</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Object.values(GAME_BADGES).map((item) => {
            const isEarned = profile?.badges?.includes(item.id);
            return (
              <motion.div
                key={item.id}
                whileHover={isEarned ? { scale: 1.05, y: -2 } : {}}
                onClick={isEarned ? handleBadgeClick : undefined}
                className={`relative border-2 rounded-2xl flex flex-col items-center justify-center p-4 text-center transition-all duration-150 group ${isEarned
                    ? "bg-white border-[#e5e5e5] border-b-[5px] border-b-[#cdcdcd] cursor-pointer hover:border-[#1cb0f6] active:translate-y-[2px] active:border-b-[3px]"
                    : "bg-[#f7f7f7] border-[#e5e5e5] border-b-[5px] border-b-[#cdcdcd] opacity-50 cursor-not-allowed filter grayscale"
                  }`}
              >
                {/* Lock icon overlay for unearned badges */}
                {!isEarned && (
                  <div className="absolute top-2 right-2 text-[#777777] text-[9px] font-black bg-[#e5e5e5] px-1.5 py-0.5 rounded-md flex items-center gap-1">
                    🔒 LOCK
                  </div>
                )}

                <div className="w-16 h-16 flex items-center justify-center mb-2">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={`w-12 h-12 object-contain transition-transform duration-300 ${isEarned ? 'group-hover:scale-110 group-hover:rotate-6' : ''}`}
                  />
                </div>
                <span className="text-xs font-extrabold text-[#3C3C3C] tracking-tight">{item.title}</span>
                <span className="text-[10px] text-[#777777] mt-1 font-bold leading-tight max-w-[120px] line-clamp-3">{item.description}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
