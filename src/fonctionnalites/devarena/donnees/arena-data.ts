export const DEFAULT_PARTICIPANTS: any[] = [];

export const DEFAULT_DUOS: any[] = [];

export const DEFAULT_WAVES = [
  { id: "vague1", title: "Vague 1", status: "Terminée", bg: "bg-gradient-to-r from-pink-500 to-pink-400", image: "/arena-icon/lo1.svg" },
  { id: "vague2", title: "Vague 2", status: "En cours", bg: "bg-gradient-to-r from-orange-500 to-amber-400", image: "/arena-icon/lo2.svg" },
  { id: "vague3", title: "Vague 3 (Finale)", status: "À venir", bg: "bg-gradient-to-r from-indigo-500 to-blue-500", image: "/arena-icon/lo3.svg" }
];

export function initializeArenaData() {
  if (typeof window === "undefined") return;

  // Force clearing fake participants data from previous sessions
  localStorage.setItem("arena_participants", JSON.stringify(DEFAULT_PARTICIPANTS));
  // Force clearing fake duos data from previous sessions
  localStorage.setItem("arena_duos", JSON.stringify(DEFAULT_DUOS));
  
  const storedWaves = localStorage.getItem("arena_waves");
  if (!storedWaves) {
    localStorage.setItem("arena_waves", JSON.stringify(DEFAULT_WAVES));
  } else {
    try {
      const parsed = JSON.parse(storedWaves);
      if (parsed.length > 3 || parsed.some((w: any) => w.id === "finale")) {
        localStorage.setItem("arena_waves", JSON.stringify(DEFAULT_WAVES));
      }
    } catch (e) {
      localStorage.setItem("arena_waves", JSON.stringify(DEFAULT_WAVES));
    }
  }
}
