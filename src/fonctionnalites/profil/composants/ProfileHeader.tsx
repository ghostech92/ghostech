import React from "react";
import { UserProfile } from "../profil.types";

interface ProfileHeaderProps {
  profile: UserProfile;
  email?: string;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  saving: boolean;
  handleSaveProfile: () => void;
  handleSignOut: () => void;
  editName: string;
  setEditName: (value: string) => void;
  editBio: string;
  setEditBio: (value: string) => void;
  editLocation: string;
  setEditLocation: (value: string) => void;
  avatarPreview: string | null;
  handleAvatarSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ProfileHeader({
  profile,
  email,
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
  avatarPreview,
  handleAvatarSelect,
}: ProfileHeaderProps) {
  const displayAvatar = avatarPreview || profile.avatarUrl;
  const displayedEmail = email || profile.email || "Email non renseigné";

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="duo-card flex flex-col items-center text-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-[#3c3c3c] bg-[#f7f7f7]">
          {displayAvatar ? (
            <img src={displayAvatar} alt={profile.name || "Photo de profil"} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#ddf4ff] text-4xl font-black text-[#1cb0f6]">
              {profile.name?.charAt(0) || "U"}
            </div>
          )}
          {isEditing && (
            <label className="absolute bottom-1 right-1 cursor-pointer rounded-full bg-[#ff7a00] px-2 py-1 text-xs font-bold text-white">
              Modifier
              <input type="file" accept="image/*" className="hidden" onChange={handleAvatarSelect} />
            </label>
          )}
        </div>

        <h1 className="mt-5 text-xl font-black text-[#1f2937]">{profile.name || "Utilisateur"}</h1>
        <p className="mt-1 break-all text-sm text-[#6b7280]">{displayedEmail}</p>
        <div className="mt-5 h-2 w-full rounded-full bg-[#e5e7eb]">
          <div className="h-2 w-full rounded-full bg-[#23a636]" />
        </div>
        <p className="mt-2 text-xs text-[#777777]">Profil complété</p>

        <div className="mt-5 flex w-full flex-col gap-3">
          {!isEditing && (
            <button onClick={() => setIsEditing(true)} className="duo-btn duo-btn-gray w-full">
              Modifier mon profil
            </button>
          )}
          <button onClick={handleSignOut} className="duo-btn duo-btn-rose w-full">
            Se déconnecter
          </button>
        </div>
      </aside>

      <section className="space-y-6">
        <div className="duo-card p-0">
          <div className="flex items-center justify-between border-b-2 border-[#1f1f1f] px-5 py-3">
            <h2 className="font-black text-[#1f2937]">Identité et contact</h2>
            <span className="rounded bg-[#1f1f1f] px-2 py-1 text-xs font-bold text-white">Profil</span>
          </div>
          <div className="grid gap-4 px-5 py-5 sm:grid-cols-2">
            <InfoRow label="Nom complet" value={profile.name || "Non renseigné"} />
            <InfoRow label="Email" value={displayedEmail} />
            <InfoRow label="Localisation" value={profile.location || "Non renseignée"} />
          </div>
        </div>

        <div className="duo-card p-0">
          <div className="flex items-center justify-between border-b-2 border-[#1f1f1f] px-5 py-3">
            <h2 className="font-black text-[#1f2937]">Détails du profil</h2>
            {isEditing && (
              <div className="flex gap-2">
                <button onClick={() => setIsEditing(false)} className="duo-btn duo-btn-gray !px-3 !py-1.5 text-xs">
                  Annuler
                </button>
                <button onClick={handleSaveProfile} disabled={saving} className="duo-btn duo-btn-green !px-3 !py-1.5 text-xs">
                  {saving ? "Enregistrement..." : "Sauvegarder"}
                </button>
              </div>
            )}
          </div>

          {isEditing ? (
            <div className="grid gap-4 px-5 py-5">
              <label className="text-sm font-bold">
                Nom complet
                <input value={editName} onChange={(event) => setEditName(event.target.value)} className="profile-field" />
              </label>
              <label className="text-sm font-bold">
                Lieu de résidence
                <input value={editLocation} onChange={(event) => setEditLocation(event.target.value)} className="profile-field" />
              </label>
              <label className="text-sm font-bold">
                Bio
                <textarea value={editBio} onChange={(event) => setEditBio(event.target.value)} className="profile-field min-h-32 resize-y" />
              </label>
            </div>
          ) : (
            <div className="space-y-4 px-5 py-5">
              <InfoRow label="Nom complet" value={profile.name || "Non renseigné"} />
              <InfoRow label="Lieu de résidence" value={profile.location || "Non renseigné"} />
              <InfoRow label="Bio" value={profile.bio || "Aucune biographie renseignée."} multiline />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function InfoRow({ label, value, multiline = false }: { label: string; value: string; multiline?: boolean }) {
  return (
    <div className={multiline ? "sm:col-span-2" : ""}>
      <dt className="text-sm font-black text-[#374151]">{label}</dt>
      <dd className={`mt-1 text-sm text-[#4b5563] ${multiline ? "whitespace-pre-wrap leading-relaxed" : ""}`}>{value}</dd>
    </div>
  );
}
