export interface Hackathon {
  id: number;
  title: string;
  status: "a-venir" | "termine";
  statusLabel: string;
  statusColor: string;
  date: string;
  prizePool: string;
  participants: number;
  theme: string;
  tags: string[];
  img: string;
  cardStyle: string;
  titleColor: string;
  textColor: string;
  lieu?: string;
}

export const defaultHackathons: Hackathon[] = [
  {
    id: 2,
    title: "AI & Automation Hackathon",
    status: "a-venir",
    statusLabel: "À Venir",
    statusColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    date: "05 - 07 Septembre 2026",
    prizePool: "1 000 000 FCFA",
    participants: 120,
    theme: "Concevoir un agent conversationnel intelligent capable d'automatiser le support client.",
    tags: ["Python", "Watsonx", "LLM"],
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600",
    cardStyle: "bg-white border-slate-200 shadow-md",
    titleColor: "text-slate-900",
    textColor: "text-slate-600",
    lieu: "En ligne / Hybride"
  },
];
