export interface UserExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description?: string;
  icon: string;
}

export interface UserProfile {
  id?: string;
  uid?: string;
  name: string;
  email: string;
  role: string;
  points: number;
  level: string;
  bio?: string;
  avatarUrl?: string;
  photoURL?: string;
  coverUrl?: string;
  location?: string;
  skills?: string[];
  links?: {
    github?: string;
    linkedin?: string;
    website?: string;
  };
  experiences?: UserExperience[];
  badges?: string[];
  createdAt?: any; // Firestore Timestamp

  // DevArena gamification fields
  pointsLastSeen?: number;
  isParticipating?: boolean;
  trend?: "up" | "down" | "same";
  
  // Vraie logique de jeu (Game Engine)
  xp?: number; // Total Experience Points
  levelNumber?: number; // Integer level (e.g., 1, 2, 3...)
  stats?: {
    wavesCompleted: number;
    projectsSubmitted: number;
    totalVotesReceived: number;
    firstPlaceWins: number;
    secondPlaceWins: number;
    thirdPlaceWins: number;
    perfectScores: number; // For future use
    isGlobalWinner?: boolean; // Attribué au vainqueur absolu à la fin des 3 vagues
    seasonRank?: 1 | 2 | 3; // Le rang sur le podium final (1er, 2ème, 3ème)
  };

  // Display / avatar fields (Firebase Auth compat)
  displayName?: string;
  avatar?: string;

  // Allow additional dynamic fields from Firestore
  [key: string]: any;
}
