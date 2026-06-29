import { useState, useEffect } from "react";
import { DEFAULT_PARTICIPANTS, DEFAULT_DUOS, DEFAULT_WAVES } from "@/src/fonctionnalites/devarena/donnees/arena-data";
import { isFirebaseConfigured } from "@/src/lib/firebase/config";
import * as arenaService from "@/src/lib/firebase/services/arenaService";
import type { ArenaDuo } from "@/src/types/arena.types";

export function useDuosAdminManager() {
  const [participants, setParticipants] = useState<any[]>([]);
  const [duos, setDuos] = useState<any[]>([]);
  const [waves, setWaves] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // Duo Creation states
  const [showAddDuoModal, setShowAddDuoModal] = useState(false);
  const [newDuo, setNewDuo] = useState({
    name: "",
    member1Id: "",
    member2Id: "",
    vague: "vague2",
    theme: "",
    date: "",
  });

  // Score recording states
  const [showScoreModal, setShowScoreModal] = useState<any | null>(null);
  const [duoScore, setDuoScore] = useState({
    theme: "0",
    creativity: "0",
    features: "0",
    presentation: "0"
  });

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    if (isFirebaseConfigured) {
      const unsubParticipants = arenaService.subscribeToParticipants((data) => {
        setParticipants(data.length > 0 ? data : DEFAULT_PARTICIPANTS);
        setLoading(false);
      });
      const unsubWaves = arenaService.subscribeToWaves((data) => {
        setWaves(data.length > 0 ? data : DEFAULT_WAVES);
      });
      const unsubDuos = arenaService.subscribeToDuos((data) => {
        setDuos(data.length > 0 ? data : DEFAULT_DUOS);
      });

      return () => {
        unsubParticipants();
        unsubWaves();
        unsubDuos();
      };
    } else {
      let storedParticipants = localStorage.getItem("arena_participants");
      let storedDuos = localStorage.getItem("arena_duos");
      let storedWaves = localStorage.getItem("arena_waves");

      if (!storedParticipants) {
        localStorage.setItem("arena_participants", JSON.stringify(DEFAULT_PARTICIPANTS));
        storedParticipants = JSON.stringify(DEFAULT_PARTICIPANTS);
      }
      if (!storedDuos) {
        localStorage.setItem("arena_duos", JSON.stringify(DEFAULT_DUOS));
        storedDuos = JSON.stringify(DEFAULT_DUOS);
      }
      if (!storedWaves) {
        localStorage.setItem("arena_waves", JSON.stringify(DEFAULT_WAVES));
        storedWaves = JSON.stringify(DEFAULT_WAVES);
      }

      setParticipants(JSON.parse(storedParticipants));
      setDuos(JSON.parse(storedDuos));
      setWaves(JSON.parse(storedWaves));
      setLoading(false);
    }
  }, []);

  const triggerLayoutSync = () => {
    window.dispatchEvent(new Event("arena_sync"));
  };

  const handleAddDuoSubmit = async (e: React.FormEvent, cleanup: () => void) => {
    e.preventDefault();
    if (!newDuo.name || !newDuo.member1Id || !newDuo.member2Id) {
      showToast("Veuillez remplir tous les champs obligatoires", "error");
      return;
    }

    const m1 = participants.find(p => p.id === newDuo.member1Id);
    const m2 = participants.find(p => p.id === newDuo.member2Id);

    if (!m1 || !m2) return;

    const isM1InDuo = duos.some(d => d.vague === newDuo.vague && (d.team.member1Id === newDuo.member1Id || d.team.member2Id === newDuo.member1Id));
    const isM2InDuo = duos.some(d => d.vague === newDuo.vague && (d.team.member1Id === newDuo.member2Id || d.team.member2Id === newDuo.member2Id));

    if (isM1InDuo) {
      showToast(`${m1.name} fait déjà partie d'un duo dans cette vague !`, "error");
      return;
    }
    if (isM2InDuo) {
      showToast(`${m2.name} fait déjà partie d'un duo dans cette vague !`, "error");
      return;
    }

    const newId = Date.now().toString();
    const createdDuo: ArenaDuo = {
      id: isFirebaseConfigured ? newId : (duos.length > 0 ? Math.max(...duos.map(d => Number(d.id))) + 1 : 1),
      date: newDuo.date || new Date().toISOString().split('T')[0],
      theme: newDuo.theme || "Nouveau projet d'Innovation",
      status: "upcoming",
      vague: newDuo.vague,
      team: {
        name: newDuo.name,
        member1Id: m1.id,
        member2Id: m2.id,
        member1: m1.name,
        member2: m2.name,
        img1: m1.avatar?.includes("pravatar.cc") ? m1.avatar.split("u=")[1] || "11" : "11",
        img2: m2.avatar?.includes("pravatar.cc") ? m2.avatar.split("u=")[1] || "12" : "12"
      },
      score: null,
      pointsGagnes: null
    };

    if (isFirebaseConfigured) {
      await arenaService.createDuo(newId, createdDuo);
    } else {
      const updated = [createdDuo, ...duos];
      setDuos(updated);
      localStorage.setItem("arena_duos", JSON.stringify(updated));
    }

    setShowAddDuoModal(false);
    setNewDuo({ name: "", member1Id: "", member2Id: "", vague: "vague2", theme: "", date: "" });
    cleanup();
    triggerLayoutSync();
    showToast("Duo créé avec succès !");
  };

  const handleScoreDuoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!showScoreModal) return;

    const themeVal = parseInt(duoScore.theme) || 0;
    const creativityVal = parseInt(duoScore.creativity) || 0;
    const featuresVal = parseInt(duoScore.features) || 0;
    const presentationVal = parseInt(duoScore.presentation) || 0;

    const totalScore = themeVal + creativityVal + featuresVal + presentationVal;

    const wasCompleted = showScoreModal.status === "completed";
    const previousPoints = wasCompleted && showScoreModal.pointsGagnes 
      ? parseInt(showScoreModal.pointsGagnes.replace(/[^0-9]/g, "")) || 0 
      : 0;

    const duoUpdateData = {
      status: "completed",
      score: String(totalScore),
      pointsGagnes: `+${totalScore} PTS`,
      evaluation: {
        theme: themeVal,
        creativity: creativityVal,
        features: featuresVal,
        presentation: presentationVal
      }
    };

    if (isFirebaseConfigured && showScoreModal.id) {
      await arenaService.updateDuo(String(showScoreModal.id), duoUpdateData);
    } else {
      const updatedDuos = duos.map(d => d.id === showScoreModal.id ? { ...d, ...duoUpdateData } : d);
      setDuos(updatedDuos);
      localStorage.setItem("arena_duos", JSON.stringify(updatedDuos));
    }

    // Update participants' cumulative points
    const p1 = participants.find(p => p.id === showScoreModal.team.member1Id);
    const p2 = participants.find(p => p.id === showScoreModal.team.member2Id);

    const calcNewPoints = (p: any) => {
      const currentPoints = p.points || 0;
      const newPoints = Math.max(0, currentPoints - previousPoints + totalScore);
      let level = "Bronze";
      if (newPoints >= 10000) level = "Master";
      else if (newPoints >= 9000) level = "Diamond";
      else if (newPoints >= 8000) level = "Platinum";
      else if (newPoints >= 5000) level = "Gold";
      else if (newPoints >= 3000) level = "Silver";
      
      const trend: "up" | "down" | "same" = newPoints > currentPoints ? "up" : newPoints < currentPoints ? "down" : "same";
      
      return { 
        points: newPoints, 
        level, 
        trend 
      };
    };

    if (isFirebaseConfigured) {
      if (p1 && p1.id) await arenaService.updateParticipant(String(p1.id), calcNewPoints(p1));
      if (p2 && p2.id) await arenaService.updateParticipant(String(p2.id), calcNewPoints(p2));
    } else {
      const updatedParticipants = participants.map(p => {
        if (p.id === showScoreModal.team.member1Id || p.id === showScoreModal.team.member2Id) {
          return { ...p, ...calcNewPoints(p) };
        }
        return p;
      });
      setParticipants(updatedParticipants);
      localStorage.setItem("arena_participants", JSON.stringify(updatedParticipants));
    }

    setShowScoreModal(null);
    triggerLayoutSync();
    showToast(wasCompleted ? "Note mise à jour ! Points ajustés." : `Duo noté ! +${totalScore} PTS attribués aux deux membres.`);
  };

  const handleDeleteDuo = async (id: number | string) => {
    if (confirm("Supprimer ce duo ?")) {
      if (isFirebaseConfigured) {
        await arenaService.deleteDuo(String(id));
      } else {
        const updated = duos.filter(d => d.id !== id);
        setDuos(updated);
        localStorage.setItem("arena_duos", JSON.stringify(updated));
      }
      triggerLayoutSync();
      showToast("Duo supprimé.");
    }
  };

  const activeParticipants = participants.filter(p => p.isParticipating);

  return {
    participants,
    duos,
    waves,
    loading,
    toast,
    showAddDuoModal,
    setShowAddDuoModal,
    newDuo,
    setNewDuo,
    showScoreModal,
    setShowScoreModal,
    duoScore,
    setDuoScore,
    handleAddDuoSubmit,
    handleScoreDuoSubmit,
    handleDeleteDuo,
    activeParticipants
  };
}
