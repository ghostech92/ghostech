// Re-export centralized types — single source of truth
export type { UserProfile, UserExperience } from "@/src/types/user.types";

// Profile-specific UI types (not shared outside the profil feature)
export interface ProjectImage {
  file: File | null;
  url: string;
  preview: string;
  isUploading: boolean;
}

export interface ProjectFormState {
  name: string;
  description: string;
  tech: string;
  vague: string;
  duoName: string;
  githubUrl: string;
  demoUrl: string;
}
