import { useState, useEffect, useMemo } from "react";
import { initializeArenaData } from "../donnees/arena-data";
import { isFirebaseConfigured } from "@/src/lib/firebase/config";
import * as arenaService from "@/src/lib/firebase/services/arenaService";

export function useWaveDuos(waveId: string) {
  const [duos, setDuos] = useState<any[]>([]);
  const [waveStatus, setWaveStatus] = useState<string>("Terminée");

  useEffect(() => {
    if (isFirebaseConfigured) {
      const unsubDuos = arenaService.subscribeToDuos((data) => {
        setDuos(data.filter((d: any) => d.vague === waveId));
      });
      const unsubWaves = arenaService.subscribeToWaves((data) => {
        const w1 = data.find((w: any) => w.id === waveId);
        if (w1) {
          setWaveStatus(w1.status);
        }
      });
      return () => {
        unsubDuos();
        unsubWaves();
      };
    } else {
      initializeArenaData();

      const syncDuos = () => {
        const stored = localStorage.getItem("arena_duos");
        if (stored) {
          const parsed = JSON.parse(stored);
          setDuos(parsed.filter((d: any) => d.vague === waveId));
        }

        const storedWaves = localStorage.getItem("arena_waves");
        if (storedWaves) {
          const parsedWaves = JSON.parse(storedWaves);
          const w1 = parsedWaves.find((w: any) => w.id === waveId);
          if (w1) {
            setWaveStatus(w1.status);
          }
        }
      };

      syncDuos();

      window.addEventListener("storage", syncDuos);
      window.addEventListener("arena_sync", syncDuos);

      return () => {
        window.removeEventListener("storage", syncDuos);
        window.removeEventListener("arena_sync", syncDuos);
      };
    }
  }, [waveId]);

  const sortedDuos = useMemo(() => {
    const parseDateToMs = (dateStr: string) => {
      if (!dateStr) return 9999999999999;
      const parts = dateStr.split("-");
      if (parts.length === 3) {
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[2], 10);
        return new Date(year, month, day).getTime();
      }
      const t = new Date(dateStr).getTime();
      return isNaN(t) ? 9999999999999 : t;
    };
    
    return [...duos].sort((a, b) => parseDateToMs(a.date) - parseDateToMs(b.date));
  }, [duos]);

  return {
    sortedDuos,
    waveStatus,
    isLocked: waveStatus === "À venir"
  };
}

export const formatDate = (dateStr: string) => {
  if (!dateStr) return "N/A";
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
    return dateStr;
  }
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    }
  } catch (e) {}
  return dateStr;
};

export const getAvatarUrl = (img: string) => {
  if (!img) return "https://i.pravatar.cc/150?u=temp";
  if (img.startsWith("http")) return img;
  return `https://i.pravatar.cc/150?u=${img}`;
};
