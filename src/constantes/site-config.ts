export interface LinkItem {
  title: string;
  href: string;
  icon: string;
  description?: string;
}

export const SITE_CONFIG = {
  name: "Ghostech",
  slogan: "You can change the world of tomorrow",
  contact: {
    email: "ghostech92@gmail.com",
    phone: "+225 07 79 20 1737",
    phoneCall: "tel:+2250779201737",
    address: "Abidjan, Côte d'Ivoire",
  },
  socials: {
    facebook: "#",
    linkedin: "#",
    tiktok: "#",
    whatsapp: "#",
  },
};

export const POLES_LINKS: LinkItem[] = [
  {
    title: "Développement Numérique",
    href: "/poles/numerique",
    description: "Création de solutions logicielles et d'applications modernes",
    icon: "code",
  },
];

export const EQUIPE_LINKS: LinkItem[] = [
  {
    title: "Bureau Exécutif",
    href: "/equipe/bureau",
    description: "L'équipe dirigeante de Ghostech",
    icon: "admin_panel_settings",
  },
  {
    title: "Bureau Événementiels",
    href: "/equipe/bureau/evenementiels",
    description: "Les responsables de nos événements",
    icon: "event",
  },
  {
    title: "Bureau Pôles Techniques",
    href: "/equipe/bureau/poles",
    description: "Les responsables de nos pôles d'expertise",
    icon: "code",
  },
  {
    title: "Membres",
    href: "/equipe/membres",
    description: "Découvrez notre communauté de talents passionnés",
    icon: "groups",
  },
  {
    title: "Nous Rejoindre",
    href: "/equipe/rejoindre",
    description: "Devenez acteur de l'innovation en Afrique",
    icon: "person_add",
  },
];

export const PROJETS_LINKS: LinkItem[] = [
  {
    title: "Impact en chiffres",
    href: "/projets/impact",
    icon: "query_stats",
  },
  {
    title: "Réalisations",
    href: "/projets/realisations",
    icon: "emoji_events",
  },
  {
    title: "Galerie Photos",
    href: "/projets/galerie",
    icon: "photo_library",
  },
  {
    title: "Vidéos",
    href: "/projets/videos",
    icon: "play_circle",
  },
];
