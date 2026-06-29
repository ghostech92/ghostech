import React from "react";

interface ProfileHeaderProps {
  profile: any;
  isEditing: boolean;
  setIsEditing: (val: boolean) => void;
  saving: boolean;
  handleSaveProfile: () => void;
  handleSignOut: () => void;
  editName: string;
  setEditName: (val: string) => void;
  editBio: string;
  setEditBio: (val: string) => void;
  editLocation: string;
  setEditLocation: (val: string) => void;
  editSkills: string;
  setEditSkills: (val: string) => void;
  editGithub: string;
  setEditGithub: (val: string) => void;
  editLinkedin: string;
  setEditLinkedin: (val: string) => void;
  editWebsite: string;
  setEditWebsite: (val: string) => void;
  avatarPreview: string | null;
  coverPreview: string | null;
  handleAvatarSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCoverSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBadgeClick: (e: React.MouseEvent) => void;
}

export default function ProfileHeader({
  profile,
  isEditing,
  setIsEditing,
  saving,
  handleSaveProfile,
  handleSignOut,
  editName,
  setEditName,
  editBio,
  setEditBio,
  editLocation,
  setEditLocation,
  editSkills,
  setEditSkills,
  editGithub,
  setEditGithub,
  editLinkedin,
  setEditLinkedin,
  editWebsite,
  setEditWebsite,
  avatarPreview,
  coverPreview,
  handleAvatarSelect,
  handleCoverSelect,
  handleBadgeClick
}: ProfileHeaderProps) {
  const displayAvatar = avatarPreview || profile.avatarUrl;
  const displayCover = coverPreview || profile.coverUrl;

  return (
    <div className="duo-card p-0 overflow-hidden mb-8 relative">
      {/* Cover Image */}
      <div className="h-40 md:h-56 bg-[#ddf4ff] relative overflow-hidden group">
        {displayCover ? (
          <img src={displayCover} alt="Cover" className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-[#1cb0f6] to-[#84d8ff] opacity-80" />
        )}
        
        {/* Overlay Patterns */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
        
        {isEditing && (
          <label className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-xl cursor-pointer shadow-sm border-2 border-transparent hover:border-[#1cb0f6] transition backdrop-blur-sm">
            <span className="material-symbols-rounded text-[18px]">edit</span>
            <input type="file" accept="image/*" className="hidden" onChange={handleCoverSelect} />
          </label>
        )}
      </div>

      <div className="px-6 md:px-10 pb-8 relative">
        {/* Avatar & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 -mt-16 md:-mt-20 relative z-10">
          
          {/* Avatar + Main Info */}
          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <div className="relative inline-block w-32 h-32 md:w-40 md:h-40">
              <div className="w-full h-full bg-white rounded-3xl p-2 border-2 border-[#e5e5e5] shadow-sm transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-[#f7f7f7] border border-[#e5e5e5]">
                  {displayAvatar ? (
                    <img src={displayAvatar} alt={profile.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1cb0f6] to-[#84d8ff] text-white text-5xl font-black">
                      {profile.name?.charAt(0) || "U"}
                    </div>
                  )}
                </div>
              </div>
              {isEditing && (
                <label className="absolute bottom-0 right-0 bg-white hover:bg-slate-50 text-[#1cb0f6] p-2.5 rounded-full cursor-pointer shadow-sm border-2 border-[#e5e5e5] hover:border-[#1cb0f6] transition z-10">
                  <span className="material-symbols-rounded text-[20px]">photo_camera</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleAvatarSelect} />
                </label>
              )}
              {/* Badges Floating */}
              <div className="absolute -bottom-2 -left-4 bg-white rounded-2xl p-1.5 shadow-sm border-2 border-[#e5e5e5] flex gap-1 transform rotate-[5deg]">
                <div className="w-8 h-8 rounded-xl bg-[#fff0e5] flex items-center justify-center cursor-pointer hover:scale-110 transition" onClick={handleBadgeClick} title="Pionnier DevArena">
                  <span className="text-lg">🔥</span>
                </div>
                <div className="w-8 h-8 rounded-xl bg-[#e5fcfb] flex items-center justify-center cursor-pointer hover:scale-110 transition" onClick={handleBadgeClick} title="Codeur d'Élite">
                  <span className="text-lg">💻</span>
                </div>
              </div>
            </div>

            <div className="pb-2">
              <h1 className="text-3xl md:text-[40px] font-black text-[#3c3c3c] tracking-tight leading-none mb-2">
                {profile.name || "Utilisateur"}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 text-[#afb5c0] font-bold text-[13px] uppercase tracking-wide">
                  <span className="material-symbols-rounded text-[18px]">location_on</span>
                  {profile.location || "Abidjan, CI"}
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#e5e5e5]"></div>
                <div className="flex items-center gap-1.5 text-[#1cb0f6] font-bold text-[13px] uppercase tracking-wide bg-[#ddf4ff] px-3 py-1 rounded-lg">
                  <span className="material-symbols-rounded text-[16px]">military_tech</span>
                  Niveau 12
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pb-2">
            {isEditing ? (
              <>
                <button onClick={() => setIsEditing(false)} className="duo-btn duo-btn-gray">
                  Annuler
                </button>
                <button onClick={handleSaveProfile} disabled={saving} className="duo-btn duo-btn-green">
                  {saving ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enregistrement...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-rounded text-[18px]">save</span>
                      Sauvegarder
                    </div>
                  )}
                </button>
              </>
            ) : (
              <>
                <button onClick={() => setIsEditing(true)} className="duo-btn duo-btn-blue">
                  <span className="material-symbols-rounded text-[18px] mr-2">edit</span>
                  Éditer le profil
                </button>
                <button className="duo-btn duo-btn-gray w-11 h-11 !p-0" title="Partager le profil">
                  <span className="material-symbols-rounded text-[20px]">share</span>
                </button>
              </>
            )}
            <button onClick={handleSignOut} className="duo-btn duo-btn-rose" title="Se déconnecter">
              <span className="material-symbols-rounded text-[18px]">logout</span>
            </button>
          </div>
        </div>

        {/* Editing Form Inline (Only basic info, experiences in their tab) */}
        {isEditing && (
          <div className="mt-8 bg-[#f7f7f7] border-2 border-[#e5e5e5] rounded-2xl p-6">
            <h3 className="font-extrabold text-[15px] uppercase tracking-wider text-[#afb5c0] mb-4 flex items-center gap-2">
              <span className="material-symbols-rounded text-[20px]">person</span>
              Informations de base
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-black text-[#777777] uppercase mb-1.5 ml-1">Nom d&apos;affichage</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full text-sm font-bold px-4 py-3 bg-white border-2 border-[#e5e5e5] rounded-xl focus:outline-none focus:border-[#1cb0f6] transition"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-[#777777] uppercase mb-1.5 ml-1">Localisation</label>
                <input
                  type="text"
                  value={editLocation}
                  onChange={(e) => setEditLocation(e.target.value)}
                  className="w-full text-sm font-bold px-4 py-3 bg-white border-2 border-[#e5e5e5] rounded-xl focus:outline-none focus:border-[#1cb0f6] transition"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-black text-[#777777] uppercase mb-1.5 ml-1">Bio Courte</label>
                <textarea
                  rows={3}
                  value={editBio}
                  onChange={(e) => setEditBio(e.target.value)}
                  className="w-full text-sm font-bold px-4 py-3 bg-white border-2 border-[#e5e5e5] rounded-xl focus:outline-none focus:border-[#1cb0f6] transition resize-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-black text-[#777777] uppercase mb-1.5 ml-1">Compétences clés (séparées par des virgules)</label>
                <input
                  type="text"
                  value={editSkills}
                  onChange={(e) => setEditSkills(e.target.value)}
                  className="w-full text-sm font-bold px-4 py-3 bg-white border-2 border-[#e5e5e5] rounded-xl focus:outline-none focus:border-[#1cb0f6] transition"
                  placeholder="React, Node.js, Design UI..."
                />
              </div>
              {/* Social Links */}
              <div className="md:col-span-2 mt-2">
                <h4 className="text-xs font-black text-[#afb5c0] uppercase tracking-wider mb-3">Liens & Réseaux</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">GH</span>
                    <input
                      type="url"
                      placeholder="GitHub URL"
                      value={editGithub}
                      onChange={(e) => setEditGithub(e.target.value)}
                      className="w-full text-sm font-bold pl-12 pr-4 py-3 bg-white border-2 border-[#e5e5e5] rounded-xl focus:outline-none focus:border-[#1cb0f6] transition"
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">IN</span>
                    <input
                      type="url"
                      placeholder="LinkedIn URL"
                      value={editLinkedin}
                      onChange={(e) => setEditLinkedin(e.target.value)}
                      className="w-full text-sm font-bold pl-12 pr-4 py-3 bg-white border-2 border-[#e5e5e5] rounded-xl focus:outline-none focus:border-[#1cb0f6] transition"
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">WWW</span>
                    <input
                      type="url"
                      placeholder="Site Web"
                      value={editWebsite}
                      onChange={(e) => setEditWebsite(e.target.value)}
                      className="w-full text-sm font-bold pl-14 pr-4 py-3 bg-white border-2 border-[#e5e5e5] rounded-xl focus:outline-none focus:border-[#1cb0f6] transition"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
