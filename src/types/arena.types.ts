export interface ArenaParticipant {
  id?: string;
  name: string;
  email: string;
  points: number;
  level: string;
  avatar: string;
  trend: 'up' | 'down' | 'same';
  isParticipating: boolean;
  role: 'participant' | 'jury' | 'organisateur' | string;
  [key: string]: any;
}

export interface ArenaTeam {
  name: string;
  member1Id?: string;
  member2Id?: string;
  member1: string;
  member2: string;
  img1: string;
  img2: string;
  [key: string]: any;
}

export interface ArenaDuo {
  id?: string | number;
  date: string;
  theme: string;
  status: 'completed' | 'upcoming' | 'ongoing' | string;
  vague: string;
  team: ArenaTeam;
  score: string | number | null;
  pointsGagnes: string | null;
  [key: string]: any;
}

export interface ArenaWave {
  id?: string;
  title: string;
  status: string;
  bg: string;
  image: string;
  [key: string]: any;
}
