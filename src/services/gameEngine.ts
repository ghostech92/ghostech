import { UserProfile } from "../types/user.types";
import { userService } from "./userService";

// ---------------------------------------------------------
// 1. DÉFINITION DES BADGES (Règles de déblocage)
// ---------------------------------------------------------
export interface GameBadge {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  category: "progression" | "achievement" | "special";
  condition: (user: UserProfile) => boolean; // Fonction qui vérifie si l'utilisateur mérite le badge
}

export const GAME_BADGES: Record<string, GameBadge> = {
  // --- Badges de Participation (Vagues) ---
  wave_1_participant: {
    id: "badge_wave_1_participant",
    title: "Participant - Vague 1",
    icon: "/arena-icon/Level/level1.svg",
    description: "Vous avez officiellement rejoint la Vague 1 de DevArena !",
    color: "from-blue-400 to-blue-600",
    category: "progression",
    condition: (user) => (user.stats?.wavesCompleted ?? 0) >= 1
  },
  wave_2_participant: {
    id: "badge_wave_2_participant",
    title: "Participant - Vague 2",
    icon: "/arena-icon/Level/level2.svg",
    description: "Vous avez bravé les épreuves pour participer à la Vague 2.",
    color: "from-indigo-400 to-indigo-600",
    category: "progression",
    condition: (user) => (user.stats?.wavesCompleted ?? 0) >= 2
  },
  wave_3_participant: {
    id: "badge_wave_3_participant",
    title: "Participant - Vague 3",
    icon: "/arena-icon/Level/level3.svg",
    description: "Impressionnant ! Vous avez atteint la Vague 3 de DevArena.",
    color: "from-purple-400 to-purple-600",
    category: "progression",
    condition: (user) => (user.stats?.wavesCompleted ?? 0) >= 3
  },

  // --- Badges de Vague (Classement) ---
  wave_gold: {
    id: "badge_wave_gold",
    title: "Médaille d'Or - Vague",
    icon: "/arena-icon/medail/premier.svg",
    description: "Impressionnant ! Vous avez terminé à la première place du classement d'une vague.",
    color: "from-amber-400 to-yellow-600",
    category: "achievement",
    condition: (user) => (user.stats?.firstPlaceWins ?? 0) >= 1
  },
  wave_silver: {
    id: "badge_wave_silver",
    title: "Médaille d'Argent - Vague",
    icon: "/arena-icon/medail/deuxieme.svg",
    description: "Excellent ! Vous avez décroché la deuxième place du classement d'une vague.",
    color: "from-slate-300 to-slate-500",
    category: "achievement",
    condition: (user) => (user.stats?.secondPlaceWins ?? 0) >= 1
  },
  wave_bronze: {
    id: "badge_wave_bronze",
    title: "Médaille de Bronze - Vague",
    icon: "/arena-icon/medail/trosieme.svg",
    description: "Très bien joué ! Vous vous êtes classé troisième à la fin d'une vague.",
    color: "from-amber-700 to-amber-900",
    category: "achievement",
    condition: (user) => (user.stats?.thirdPlaceWins ?? 0) >= 1
  },

  // --- Badges de Performance (Score/Victoires) ---
  popular: {
    id: "badge_popular",
    title: "Star de la Communauté",
    icon: "/arena-icon/medail/deuxieme.svg", // Placeholder
    description: "Vos projets ont reçu plus de 50 votes de la communauté.",
    color: "from-pink-400 to-rose-600",
    category: "special",
    condition: (user) => (user.stats?.totalVotesReceived ?? 0) >= 50
  },
  
  // --- Badges de Niveaux (XP) ---
  level_10: {
    id: "badge_level_10",
    title: "Vétéran Niv.10",
    icon: "/arena-icon/medail/trosieme.svg",
    description: "Vous avez atteint le niveau 10 de réputation.",
    color: "from-emerald-400 to-green-600",
    category: "progression",
    condition: (user) => (user.levelNumber ?? 1) >= 10
  },

  // --- Badge Ultime : Fin de Saison ---
  grand_champion: {
    id: "badge_grand_champion",
    title: "Grand Champion DevArena",
    icon: "/arena-icon/medail/global.svg",
    description: "L'ultime vainqueur ! Vous avez accumulé le plus grand nombre de points au terme des 3 vagues. Félicitations pour ce triomphe absolu !",
    color: "from-indigo-400 to-purple-600",
    category: "special",
    // Condition : L'utilisateur doit avoir un flag `isGlobalWinner` activé dans ses stats.
    condition: (user) => (user.stats?.isGlobalWinner === true)
  },
  finaliste_1: {
    id: "badge_finaliste_1",
    title: "1er Finaliste",
    icon: "/arena-icon/medail/1finalistes.svg",
    description: "Une performance exceptionnelle ! Vous avez décroché la première place sur le podium final de DevArena.",
    color: "from-amber-300 to-yellow-500",
    category: "special",
    condition: (user) => (user.stats?.seasonRank === 1)
  },
  finaliste_2: {
    id: "badge_finaliste_2",
    title: "2ème Finaliste",
    icon: "/arena-icon/medail/2finalistes.svg",
    description: "Magnifique parcours ! Vous avez remporté la deuxième place sur le podium final.",
    color: "from-slate-300 to-slate-400",
    category: "special",
    condition: (user) => (user.stats?.seasonRank === 2)
  },
  finaliste_3: {
    id: "badge_finaliste_3",
    title: "3ème Finaliste",
    icon: "/arena-icon/medail/3finalistes.svg",
    description: "Bravo ! Vous vous êtes hissé sur la troisième marche du podium final de cette saison.",
    color: "from-amber-700 to-amber-900",
    category: "special",
    condition: (user) => (user.stats?.seasonRank === 3)
  }
};

// ---------------------------------------------------------
// 2. MOTEUR D'EXPÉRIENCE (XP -> Niveau)
// ---------------------------------------------------------
// Formule RPG classique : XP requis = (Niveau Actuel * 100) ^ 1.2
export const gameEngine = {
  
  // Calcule le niveau en fonction de l'XP total
  calculateLevel(xp: number): number {
    if (xp < 0) return 1;
    // Logique simplifiée pour l'exemple (palier de 100 xp par niveau)
    // Niveau 1: 0-99
    // Niveau 2: 100-299
    // Niveau 3: 300-599
    let level = 1;
    let threshold = 100;
    let currentXp = xp;
    
    while (currentXp >= threshold) {
      currentXp -= threshold;
      level++;
      threshold = Math.floor(threshold * 1.5); // La difficulté augmente
    }
    
    return level;
  },

  // Calcule la progression (en %) vers le prochain niveau
  calculateLevelProgress(xp: number): number {
    let level = 1;
    let threshold = 100;
    let currentXp = xp;
    
    while (currentXp >= threshold) {
      currentXp -= threshold;
      level++;
      threshold = Math.floor(threshold * 1.5);
    }
    
    return Math.floor((currentXp / threshold) * 100);
  },

  // ---------------------------------------------------------
  // 3. ÉVALUATION DES BADGES (Déblocage Automatique)
  // ---------------------------------------------------------
  // Fonction à appeler chaque fois que le profil du joueur change
  evaluateNewBadges(currentUserData: UserProfile): GameBadge[] {
    const earnedBadgeIds = currentUserData.badges || [];
    const newlyUnlocked: GameBadge[] = [];

    // Vérifier tous les badges existants dans le jeu
    for (const badgeKey in GAME_BADGES) {
      const badge = GAME_BADGES[badgeKey];
      
      // Si l'utilisateur ne l'a pas encore et qu'il remplit la condition
      if (!earnedBadgeIds.includes(badge.id) && badge.condition(currentUserData)) {
        newlyUnlocked.push(badge);
      }
    }

    return newlyUnlocked; // Retourne la liste pour l'afficher dans le popup
  },

  // ---------------------------------------------------------
  // 4. SYSTÈME DE RÉCOMPENSE (Ajouter de l'XP)
  // ---------------------------------------------------------
  async addXP(userId: string, currentUserData: UserProfile, amount: number) {
    const currentXp = currentUserData.xp || 0;
    const newXp = currentXp + amount;
    const newLevel = this.calculateLevel(newXp);
    
    await userService.updateUser(userId, {
      xp: newXp,
      levelNumber: newLevel
    });
  }
};
