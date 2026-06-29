export interface ProjectImage {
  file?: File | null;
  url: string;
  preview?: string;
  isUploading?: boolean;
}

export interface ProjectData {
  id?: string;
  name?: string;
  title?: string;
  description: string;
  tech?: string[] | string;
  vague?: string;
  phase?: string;
  duoName?: string;
  githubUrl?: string | null;
  demoUrl?: string | null;
  image?: string;
  images?: string[] | ProjectImage[];
  status?: string;
  score?: number | string | null;
  createdBy?: string;
  creatorName?: string;
  member1?: string;
  member2?: string;
  creatorUid?: string;
  isReal?: boolean;
  createdAt?: any;

  // Allow additional dynamic fields from Firestore
  [key: string]: any;
}
