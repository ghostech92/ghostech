import { useState, useEffect, useMemo } from "react";
import { Hackathon, defaultHackathons } from "../donnees/hackathonsData";
import { isFirebaseConfigured } from "@/src/lib/firebase/config";
import * as hackathonService from "@/src/lib/firebase/services/hackathons";

export function useHackathons() {
  const [filter, setFilter] = useState<"tous" | "a-venir" | "termine">("tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [hackathons, setHackathons] = useState<Hackathon[]>(defaultHackathons);

  useEffect(() => {
    if (isFirebaseConfigured) {
      const unsubscribe = hackathonService.subscribeToHackathons((data) => {
        const formattedData = data.map(h => ({
          id: h.id ? Number(h.id) : Date.now(), // Fallback parsing since model expects string ids for fb
          title: h.title,
          status: h.status === "a-venir" ? "a-venir" : "termine",
          statusLabel: h.status === "a-venir" ? "À Venir" : "Terminé",
          statusColor: h.status === "a-venir" ? "bg-blue-500/10 text-blue-500 border-blue-200" : "bg-slate-500/10 text-slate-500 border-slate-200",
          date: h.startDate,
          prizePool: h.totalPrize,
          participants: parseInt(h.participantsCount) || 0,
          theme: h.theme,
          tags: ["Tech"], // You can add tags to Firebase model if needed
          img: h.image || "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600",
          cardStyle: "bg-white border-slate-200 shadow-md",
          titleColor: "text-slate-900",
          textColor: "text-slate-600",
        }));
        setHackathons(formattedData.length > 0 ? (formattedData as any) : defaultHackathons);
      });
      return () => unsubscribe();
    } else {
      const stored = localStorage.getItem("local_hackathons");
      if (stored) {
        try {
          setHackathons(JSON.parse(stored));
        } catch (e) {
          console.error("Failed to parse hackathons from localStorage", e);
        }
      } else {
        localStorage.setItem("local_hackathons", JSON.stringify(defaultHackathons));
      }
    }
  }, []);

  const filteredHackathons = useMemo(() => {
    return hackathons.filter((hack) => {
      const matchesTab = filter === "tous" || hack.status === filter;
      const matchesSearch =
        hack.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hack.theme.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (hack.tags && hack.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesTab && matchesSearch;
    });
  }, [hackathons, filter, searchQuery]);

  return {
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    activeVideoUrl,
    setActiveVideoUrl,
    filteredHackathons
  };
}
