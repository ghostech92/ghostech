import { useState, useEffect, useMemo } from "react";
import { initializeArenaData } from "../donnees/arena-data";
import { isFirebaseConfigured } from "@/src/lib/firebase/config";
import * as arenaService from "@/src/lib/firebase/services/arenaService";

export interface Participant {
  id: string;
  name: string;
  avatar: string;
  isParticipating: boolean;
  [key: string]: any;
}

export interface Wave {
  id: string;
  name: string;
  status: string;
  [key: string]: any;
}

export interface Duo {
  id: string;
  status: string;
  score: string;
  team: {
    member1Id: string;
    member2Id: string;
    [key: string]: any;
  };
  waveId: string;
  [key: string]: any;
}

export function useLeaderboard(waveIdFilter?: string) {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [allWaves, setAllWaves] = useState<Wave[]>([]);
  const [duos, setDuos] = useState<Duo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubs: (() => void)[] = [];

    if (isFirebaseConfigured) {
      let partsLoaded = false;
      let wavesLoaded = false;
      let duosLoaded = false;

      const checkLoaded = () => {
        if (partsLoaded && wavesLoaded && duosLoaded) {
          setLoading(false);
        }
      };

      const unsubParticipants = arenaService.subscribeToParticipants((data) => {
        setParticipants(data as any);
        partsLoaded = true;
        checkLoaded();
      });
      const unsubWaves = arenaService.subscribeToWaves((data) => {
        setAllWaves(data as any);
        wavesLoaded = true;
        checkLoaded();
      });
      const unsubDuos = arenaService.subscribeToDuos((data) => {
        setDuos(data as any);
        duosLoaded = true;
        checkLoaded();
      });

      unsubs = [unsubParticipants, unsubWaves, unsubDuos];

    } else {
      initializeArenaData();

      const syncData = () => {
        const storedParticipants = localStorage.getItem("arena_participants");
        if (storedParticipants) {
          setParticipants(JSON.parse(storedParticipants));
        }
        const storedWaves = localStorage.getItem("arena_waves");
        if (storedWaves) {
          setAllWaves(JSON.parse(storedWaves));
        }
        const storedDuos = localStorage.getItem("arena_duos");
        if (storedDuos) {
          setDuos(JSON.parse(storedDuos));
        }
        setLoading(false);
      };

      syncData();

      window.addEventListener("storage", syncData);
      window.addEventListener("arena_sync", syncData);

      unsubs = [
        () => window.removeEventListener("storage", syncData),
        () => window.removeEventListener("arena_sync", syncData)
      ];
    }

    return () => unsubs.forEach(unsub => unsub());
  }, []);

  const leaderboard = useMemo(() => {
    return [...participants]
      .filter(p => p.isParticipating)
      .map(p => {
        const memberDuos = duos.filter(d =>
          d.status === "completed" &&
          (d.team.member1Id === p.id || d.team.member2Id === p.id) &&
          (waveIdFilter ? d.waveId === waveIdFilter || d.vague === waveIdFilter : true)
        );

        const totalPoints = memberDuos.reduce((sum, d) => {
          const scoreNum = parseInt(d.score) || 0;
          return sum + scoreNum;
        }, 0);

        let level = "Bronze";
        if (totalPoints >= 100) level = "Master";
        else if (totalPoints >= 80) level = "Diamond";
        else if (totalPoints >= 60) level = "Platinum";
        else if (totalPoints >= 40) level = "Gold";
        else if (totalPoints >= 20) level = "Silver";

        const hasPoints = totalPoints > 0;
        const trend = hasPoints ? "up" : "same";

        return {
          ...p,
          points: totalPoints,
          level,
          trend
        };
      })
      .sort((a, b) => b.points - a.points);
  }, [participants, duos, waveIdFilter]);

  const allFinished = useMemo(() => {
    const wavesToCheck = allWaves.filter(w => ["vague1", "vague2", "vague3"].includes(w.id));
    return wavesToCheck.length > 0 && wavesToCheck.every(w => w.status === "Terminée");
  }, [allWaves]);

  return {
    leaderboard,
    allWaves,
    allFinished,
    loading
  };
}
