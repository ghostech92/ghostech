"use client";

import React from "react";
import confetti from "canvas-confetti";
import BadgeUnlockPopup from "@/src/fonctionnalites/devarena/composants/BadgeUnlockPopup";

import { useAuthData } from "@/src/fonctionnalites/profil/hooks/useAuthData";
import { useProfileEdit } from "@/src/fonctionnalites/profil/hooks/useProfileEdit";

import OngletGeneral from "@/src/fonctionnalites/profil/composants/OngletGeneral";
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
    editName, setEditName,
    editBio, setEditBio,
    editLocation, setEditLocation,
    editSkills, setEditSkills,
    editGithub, setEditGithub,
    editLinkedin, setEditLinkedin,
    editWebsite, setEditWebsite,
    editExperiences,
    avatarPreview, coverPreview,
    handleAvatarSelect, handleCoverSelect,
    handleAddExperience, handleUpdateExperience, handleRemoveExperience,
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

  const handleBadgeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 35,
      spread: 60,
      origin: { x, y }
    });
  };

  return (
    <div className="min-h-dvh bg-[#F7F7F7] text-[#3C3C3C] font-sans antialiased pt-24 md:pt-28 pb-16 md:pb-24 duo-font">
      <BadgeUnlockPopup />
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <ProfileHeader
          profile={profile}
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
          editSkills={editSkills}
          setEditSkills={setEditSkills}
          editGithub={editGithub}
          setEditGithub={setEditGithub}
          editLinkedin={editLinkedin}
          setEditLinkedin={setEditLinkedin}
          editWebsite={editWebsite}
          setEditWebsite={setEditWebsite}
          avatarPreview={avatarPreview}
          coverPreview={coverPreview}
          handleAvatarSelect={handleAvatarSelect}
          handleCoverSelect={handleCoverSelect}
          handleBadgeClick={handleBadgeClick}
        />

        <OngletGeneral
          isEditing={isEditing}
          profile={profile}
          displayBio={profile.bio || "Passionné par l'innovation technologique et le développement full-stack. Toujours prêt à relever de nouveaux défis complexes sur la plateforme Ghostech DevArena, à parfaire mes compétences au sein de la communauté et à collaborer sur des projets à fort impact."}
          editBio={editBio}
          setEditBio={setEditBio}
          displayExperiences={(profile.experiences && profile.experiences.length > 0) ? profile.experiences : [
            { id: "1", icon: "🤖", role: "Stagiaire Machine Learning", company: "Future Interns", period: "Avril 2026 - Présent", location: "Abidjan, Côte d'Ivoire", description: "Développement de modèles prédictifs et intégration d'API AI dans les solutions clients." },
            { id: "2", icon: "🌐", role: "Lead Dev Frontend", company: "Ghostech Corp", period: "Fév 2025 - Mars 2026", location: "Hybride", description: "Création de la plateforme DevArena et refonte de l'interface utilisateur en Next.js." }
          ]}
          editExperiences={editExperiences}
          handleUpdateExperience={handleUpdateExperience}
          handleRemoveExperience={handleRemoveExperience}
          handleAddExperience={handleAddExperience}
          handleBadgeClick={handleBadgeClick}
        />

      </div>
    </div>
  );
}