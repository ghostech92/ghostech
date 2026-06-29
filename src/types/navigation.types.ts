/**
 * Types partagés pour la navigation du site Ghostech.
 * Source unique de vérité pour les liens de navigation.
 */

export interface LinkItem {
  title: string;
  href: string;
  icon: string;
  description?: string;
}
