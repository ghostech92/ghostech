/**
 * Types partagés pour les membres de l'équipe Ghostech.
 * Utilisé par CarteEquipeMembre et les pages bureau/evenementiels/poles.
 */

export interface MembreEquipe {
  id: number;
  name: string;
  role: string | string[];
  avatar: string;
  label: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}
