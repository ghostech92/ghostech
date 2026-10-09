"use client";

import React from "react";

import { useAuthData } from "@/src/fonctionnalites/profil/hooks/useAuthData";
import { useProfileEdit } from "@/src/fonctionnalites/profil/hooks/useProfileEdit";

import ProfileHeader from "@/src/fonctionnalites/profil/composants/ProfileHeader";
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
    return (
      <div className="min-h-dvh flex items-center justify-center bg-[#F8FAFC]">
        <div className="w-9 h-9 border-3 border-[#06B6D4] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user || !profile) return null;

  return (
    <div className="min-h-dvh bg-[#F7F7F7] text-[#3C3C3C] font-sans antialiased pt-24 md:pt-28 pb-16 md:pb-24 duo-font">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

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