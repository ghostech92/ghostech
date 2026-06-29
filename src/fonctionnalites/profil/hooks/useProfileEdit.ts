import { useState, useEffect } from "react";
import { UserProfile, UserExperience } from "../profil.types";
import { userService } from "@/src/services/userService";
import { syncParticipantProfile } from "@/src/lib/firebase/services/arenaService";

export const uploadToCloudinary = async (file: File): Promise<string> => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error("Configuration Cloudinary manquante dans le fichier .env");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("folder", "ghostech/users");

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Échec de l'upload vers Cloudinary");
  }

  const data = await res.json();
  return data.secure_url;
};

export function useProfileEdit(user: any, profile: UserProfile | null, setProfile: (profile: UserProfile) => void) {
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  
  const [editName, setEditName] = useState("");
  const [editBio, setEditBio] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editSkills, setEditSkills] = useState("");
  const [editGithub, setEditGithub] = useState("");
  const [editLinkedin, setEditLinkedin] = useState("");
  const [editWebsite, setEditWebsite] = useState("");
  const [editExperiences, setEditExperiences] = useState<UserExperience[]>([]);
  
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);

  useEffect(() => {
    if (profile) {
      setEditName(profile.name || "");
      setEditBio(profile.bio || "Passionné par l'innovation technologique et le développement full-stack. Toujours prêt à relever de nouveaux défis complexes sur la plateforme Ghostech DevArena, à parfaire mes compétences au sein de la communauté et à collaborer sur des projets à fort impact.");
      setEditLocation(profile.location || "Abidjan, Côte d'Ivoire");
      setEditSkills(profile.skills?.join(", ") || "React, Next.js, Tailwind CSS");
      setEditGithub(profile.links?.github || "");
      setEditLinkedin(profile.links?.linkedin || "");
      setEditWebsite(profile.links?.website || "");
      setEditExperiences(profile.experiences || [
        { id: "1", icon: "🤖", role: "Stagiaire Machine Learning", company: "Future Interns", period: "Avril 2026 - Présent", location: "Abidjan, Côte d'Ivoire", description: "Développement de modèles prédictifs et intégration d'API AI dans les solutions clients." },
        { id: "2", icon: "🌐", role: "Lead Dev Frontend", company: "Ghostech Corp", period: "Fév 2025 - Mars 2026", location: "Hybride", description: "Création de la plateforme DevArena et refonte de l'interface utilisateur en Next.js." }
      ]);
      setAvatarPreview(profile.avatarUrl || null);
      setCoverPreview(profile.coverUrl || null);
    }
  }, [profile]);

  const handleAvatarSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleCoverSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCoverFile(file);
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  const handleAddExperience = () => {
    setEditExperiences([...editExperiences, { id: Date.now().toString(), icon: "🏢", role: "", company: "", period: "", location: "", description: "" }]);
  };

  const handleUpdateExperience = (id: string, field: keyof UserExperience, value: string) => {
    setEditExperiences(editExperiences.map(exp => exp.id === id ? { ...exp, [field]: value } : exp));
  };

  const handleRemoveExperience = (id: string) => {
    setEditExperiences(editExperiences.filter(exp => exp.id !== id));
  };

  const handleSaveProfile = async () => {
    if (!user || !profile) return;
    setSaving(true);
    try {
      let updatedAvatarUrl = profile.avatarUrl;
      let updatedCoverUrl = profile.coverUrl;

      if (avatarFile) {
        updatedAvatarUrl = await uploadToCloudinary(avatarFile);
      }

      if (coverFile) {
        updatedCoverUrl = await uploadToCloudinary(coverFile);
      }

      const skillsArray = editSkills.split(",").map(s => s.trim()).filter(s => s !== "");

      const updatedData = {
        name: editName,
        bio: editBio,
        location: editLocation,
        skills: skillsArray,
        links: {
          github: editGithub,
          linkedin: editLinkedin,
          website: editWebsite,
        },
        experiences: editExperiences,
        avatarUrl: updatedAvatarUrl || undefined,
        coverUrl: updatedCoverUrl || undefined,
      };

      await userService.updateUser(user.uid, updatedData);

      // Trigger data synchronization for duplicated NoSQL data
      if (editName !== profile.name || updatedAvatarUrl !== profile.avatarUrl) {
        await syncParticipantProfile(user.uid, {
          name: editName,
          avatar: updatedAvatarUrl
        });
      }

      setProfile({
        ...profile,
        ...updatedData,
        avatarUrl: updatedAvatarUrl,
        coverUrl: updatedCoverUrl,
      });
      setIsEditing(false);
    } catch (error: any) {
      console.error("Erreur lors de la sauvegarde :", error);
      alert(error.message || "Erreur lors de la sauvegarde. Veuillez réessayer plus tard.");
    } finally {
      setSaving(false);
    }
  };

  return {
    isEditing, setIsEditing,
    saving,
    editName, setEditName,
    editBio, setEditBio,
    editLocation, setEditLocation,
    editSkills, setEditSkills,
    editGithub, setEditGithub,
    editLinkedin, setEditLinkedin,
    editWebsite, setEditWebsite,
    editExperiences, setEditExperiences,
    avatarPreview, coverPreview,
    handleAvatarSelect, handleCoverSelect,
    handleAddExperience, handleUpdateExperience, handleRemoveExperience,
    handleSaveProfile
  };
}
