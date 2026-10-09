import { useState, useEffect } from "react";
import { User } from "firebase/auth";
import { UserProfile } from "../profil.types";
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

export function useProfileEdit(user: User | null, profile: UserProfile | null, setProfile: (profile: UserProfile) => void) {
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  
  const [editName, setEditName] = useState("");
  const [editBio, setEditBio] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  useEffect(() => {
    if (profile) {
      setEditName(profile.name || "");
      setEditBio(profile.bio || "Passionné par l'innovation technologique et le développement full-stack. Toujours prêt à relever de nouveaux défis complexes sur la plateforme Ghostech DevArena, à parfaire mes compétences au sein de la communauté et à collaborer sur des projets à fort impact.");
      setEditLocation(profile.location || "Abidjan, Côte d'Ivoire");
      setAvatarPreview(profile.avatarUrl || null);
    }
  }, [profile]);

  const handleAvatarSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleSaveProfile = async () => {
    if (!user || !profile) return;
    setSaving(true);
    try {
      let updatedAvatarUrl = profile.avatarUrl;

      if (avatarFile) {
        updatedAvatarUrl = await uploadToCloudinary(avatarFile);
      }

      const updatedData = {
        name: editName,
        bio: editBio,
        location: editLocation,
        avatarUrl: updatedAvatarUrl || undefined,
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
      });
      setIsEditing(false);
    } catch (error: unknown) {
      console.error("Erreur lors de la sauvegarde :", error);
      const message = error instanceof Error ? error.message : "Erreur lors de la sauvegarde. Veuillez réessayer plus tard.";
      alert(message);
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
    avatarPreview,
    handleAvatarSelect,
    handleSaveProfile
  };
}
