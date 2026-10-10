"use client";

import React from "react";

import { useAuthData } from "@/src/fonctionnalites/profil/hooks/useAuthData";
import { useProfileEdit } from "@/src/fonctionnalites/profil/hooks/useProfileEdit";

import ProfileHeader from "@/src/fonctionnalites/profil/composants/ProfileHeader";
import LoaderGhostech from "@/src/composants/communs/LoaderGhostech";
import "@/src/fonctionnalites/profil/styles.css";

export default function ProfilePage() {
  const {
    user,
    profile,
    setProfile,
    loading,
    handleSignOut
  } = useAuthData();

  const {
    isEditing, setIsEditing,
    saving,
    avatarPreview,
    handleAvatarSelect,
    editName, setEditName,
    editBio, setEditBio,
    editLocation, setEditLocation,
    handleSaveProfile
  } = useProfileEdit(user, profile, setProfile);

  if (loading) {
    return <LoaderGhostech />;
  }

  if (!user || !profile) return null;

  return (
    <div className="min-h-dvh bg-[#f8fafc] text-slate-900 font-sans antialiased pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        <ProfileHeader
          profile={profile}
          email={user.email || undefined}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          saving={saving}
          handleSaveProfile={handleSaveProfile}
          handleSignOut={handleSignOut}
          editName={editName}
          setEditName={setEditName}
          editBio={editBio}
          setEditBio={setEditBio}
          editLocation={editLocation}
          setEditLocation={setEditLocation}
          avatarPreview={avatarPreview}
          handleAvatarSelect={handleAvatarSelect}
        />

      </div>
    </div>
  );
}