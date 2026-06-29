/**
 * Données des slides du carrousel hero de la page d'accueil.
 * Chaque slide contient le texte, l'image et la palette de couleurs associée.
 */

export interface HeroSlide {
  titlePre: string;
  highlight: string;
  titlePost: string;
  statsNum: string;
  statsText: string;
  btnText: string;
  image: string;
  mockupHeader: string;
  mockupTitle: string;
  mockupSubtitle: string;
  mockupDesc: string;
  team: string;
  status: string;
  colors: {
    gradient: string;
    triangle: string;
    highlightText: string;
    statsNum: string;
    btn: string;
    btnHover: string;
    mockupBg: string;
    mockupBorder: string;
    dotsActive: string;
    mockupTitleColor: string;
    mockupSubtitleColor: string;
  };
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    titlePre: "Découvrez",
    highlight: "Formations Tech",
    titlePost: "pour développer vos compétences numériques.",
    statsNum: "200+",
    statsText: "Talents formés",
    btnText: "En savoir plus",
    image: "/header_photo/h1.svg",
    mockupHeader: "Ghostech Academy",
    mockupTitle: "G-TECH Summit",
    mockupSubtitle: "Développement Web & Mobile",
    mockupDesc: "Des formations pratiques et certifiantes pour les talents de demain.",
    team: "GHOSTECH IUA",
    status: "EN COURS",
    colors: {
      gradient: "from-[#f5f8ff] to-[#e6effc]",
      triangle: "bg-[#709DF1]",
      highlightText: "text-[#357dab]",
      statsNum: "text-[#357dab]",
      btn: "bg-[#357dab]",
      btnHover: "hover:bg-[#2a6590]",
      mockupBg: "bg-[#677994]",
      mockupBorder: "border-[#8194b0]",
      dotsActive: "bg-[#357dab]",
      mockupTitleColor: "text-[#0F2137]",
      mockupSubtitleColor: "text-[#357dab]",
    },
  },
  {
    titlePre: "Participez à nos",
    highlight: "Hackathons & Événements",
    titlePost: "pour innover et créer des solutions concrètes.",
    statsNum: "50+",
    statsText: "Projets réalisés",
    btnText: "Découvrir",
    image: "/header_photo/h2.svg",
    mockupHeader: "Innovation & Technologie",
    mockupTitle: "Digital Creator",
    mockupSubtitle: "IA & Cybersécurité",
    mockupDesc: "Hackathons, workshops et défis tech pour repousser les limites.",
    team: "COMMUNAUTÉ GHOSTECH",
    status: "INSCRIPTIONS OUVERTES",
    colors: {
      gradient: "from-[#fff8f5] to-[#fdece9]",
      triangle: "bg-[#ECA792]",
      highlightText: "text-[#e49834]",
      statsNum: "text-[#e49834]",
      btn: "bg-[#e49834]",
      btnHover: "hover:bg-[#c98429]",
      mockupBg: "bg-[#8E7166]",
      mockupBorder: "border-[#A6897E]",
      dotsActive: "bg-[#e49834]",
      mockupTitleColor: "text-[#e49834]",
      mockupSubtitleColor: "text-[#e49834]",
    },
  },
  {
    titlePre: "Rejoignez la",
    highlight: "Communauté Ghostech",
    titlePost: "et bâtissez l'avenir technologique de l'Afrique.",
    statsNum: "500+",
    statsText: "Membres actifs",
    btnText: "Rejoindre",
    image: "/header_photo/h3.svg",
    mockupHeader: "Réseau & Mentorat",
    mockupTitle: "Incubation Projets",
    mockupSubtitle: "Entrepreneuriat Tech",
    mockupDesc: "Un réseau de mentors et d'experts pour accélérer vos projets.",
    team: "GHOSTECH NETWORK",
    status: "ACTIF",
    colors: {
      gradient: "from-[#f0fcf9] to-[#e0f7f1]",
      triangle: "bg-[#42C89A]",
      highlightText: "text-[#42C89A]",
      statsNum: "text-[#42C89A]",
      btn: "bg-[#42C89A]",
      btnHover: "hover:bg-[#34a37b]",
      mockupBg: "bg-[#3A7E68]",
      mockupBorder: "border-[#539B84]",
      dotsActive: "bg-[#42C89A]",
      mockupTitleColor: "text-[#0F2137]",
      mockupSubtitleColor: "text-[#42C89A]",
    },
  },
];
