import { useState, useEffect } from "react";
import { DEFAULT_PARTICIPANTS } from "@/src/fonctionnalites/devarena/donnees/arena-data";
import { userService } from "@/src/services/userService";
import { isFirebaseConfigured } from "@/src/lib/firebase/config";
import * as arenaService from "@/src/lib/firebase/services/arenaService";

export function useParticipantsAdmin() {
  const [participants, setParticipants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const triggerLayoutSync = () => {
    window.dispatchEvent(new Event("arena_sync"));
  };

  useEffect(() => {
    if (isFirebaseConfigured) {
      const unsub = arenaService.subscribeToParticipants((data) => {
        setParticipants(data.length > 0 ? data : DEFAULT_PARTICIPANTS);
        setLoading(false);
      });
      return () => unsub();
    } else {
      let storedParticipants = localStorage.getItem("arena_participants");

      if (!storedParticipants) {
        localStorage.setItem("arena_participants", JSON.stringify(DEFAULT_PARTICIPANTS));
        storedParticipants = JSON.stringify(DEFAULT_PARTICIPANTS);
      }

      setParticipants(JSON.parse(storedParticipants));
      setLoading(false);
    }
  }, []);

  // Sync users from Firestore to arena_participants
  useEffect(() => {
    const syncWithFirestore = async () => {
      try {
        const fbUsers = await userService.getAllUsers();
        let currentParticipants = [...participants];
        let hasUpdates = false;

        for (const fbU of fbUsers) {
          const existingIndex = currentParticipants.findIndex((p: any) => p.email === fbU.email);
          if (existingIndex !== -1) {
            if (currentParticipants[existingIndex].id !== fbU.id) {
              const updatedP = { ...currentParticipants[existingIndex], id: fbU.id };
              currentParticipants[existingIndex] = updatedP;
              hasUpdates = true;
              if (isFirebaseConfigured && fbU.id) {
                await arenaService.updateParticipant(fbU.id, { id: fbU.id });
              }
            }
          } else {
            const newP = {
              id: fbU.id,
              name: fbU.name || "Utilisateur Anonyme",
              email: fbU.email || "",
              points: fbU.points || 0,
              level: fbU.level || "Bronze",
              avatar: fbU.photoURL || fbU.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(fbU.name || "User")}&background=0B0F19&color=22d3ee`,
              trend: "same",
              isParticipating: false,
              role: fbU.role || "participant"
            };
            currentParticipants.push(newP);
            hasUpdates = true;
            if (isFirebaseConfigured && fbU.id) {
              await arenaService.createParticipant(fbU.id, newP as any);
            }
          }
        }

        if (hasUpdates && !isFirebaseConfigured) {
          localStorage.setItem("arena_participants", JSON.stringify(currentParticipants));
          setParticipants(currentParticipants);
          triggerLayoutSync();
        }
      } catch (err) {
        console.error("Firestore sync skipped or error occurred:", err);
      }
    };

    if (!loading && participants.length > 0) {
      syncWithFirestore();
    }
  }, [loading, participants.length]);

  const handleToggleParticipation = async (id: string) => {
    const p = participants.find(part => part.id === id);
    if (!p) return;

    const newStatus = !p.isParticipating;
    const newRole = newStatus ? "participant" : p.role;

    if (isFirebaseConfigured) {
      await arenaService.updateParticipant(id, { isParticipating: newStatus, role: newRole });
    } else {
      const updated = participants.map(part => part.id === id ? { ...part, isParticipating: newStatus, role: newRole } : part);
      setParticipants(updated);
      localStorage.setItem("arena_participants", JSON.stringify(updated));
    }
    triggerLayoutSync();
    showToast("Statut de participation mis à jour.");
  };

  const handleRoleChange = async (id: string, newRole: string) => {
    const p = participants.find(part => part.id === id);
    if (!p) return;

    const newIsParticipating = newRole === "participant" ? p.isParticipating : false;

    if (isFirebaseConfigured) {
      await arenaService.updateParticipant(id, { role: newRole, isParticipating: newIsParticipating });
    } else {
      const updated = participants.map(part => part.id === id ? { ...part, role: newRole, isParticipating: newIsParticipating } : part);
      setParticipants(updated);
      localStorage.setItem("arena_participants", JSON.stringify(updated));
    }
    triggerLayoutSync();
    showToast(`Rôle mis à jour en ${newRole}.`);
  };

  const handleUpdatePoints = async (id: string, newPoints: number) => {
    let level = "Bronze";
    if (newPoints >= 10000) level = "Master";
    else if (newPoints >= 9000) level = "Diamond";
    else if (newPoints >= 8000) level = "Platinum";
    else if (newPoints >= 5000) level = "Gold";
    else if (newPoints >= 3000) level = "Silver";

    if (isFirebaseConfigured) {
      await arenaService.updateParticipant(id, { points: newPoints, level });
    } else {
      const updated = participants.map(p => {
        if (p.id === id) {
          return { ...p, points: newPoints, level };
        }
        return p;
      });
      setParticipants(updated);
      localStorage.setItem("arena_participants", JSON.stringify(updated));
    }

    try {
      await userService.updateUser(id, {
        points: newPoints,
        level: level
      });
      showToast("Points synchronisés avec Firestore !");
    } catch (err) {
      console.warn("Firestore user update skipped:", err);
    }
  };

  const removeParticipant = async (id: string) => {
    if (isFirebaseConfigured) {
      await arenaService.deleteParticipant(id);
    } else {
      const updated = participants.filter(m => m.id !== id);
      setParticipants(updated);
      localStorage.setItem("arena_participants", JSON.stringify(updated));
    }
    triggerLayoutSync();
    showToast("Membre retiré.");
  };

  const handleSelectExistingMember = async (user: any) => {
    if (isFirebaseConfigured) {
      await arenaService.updateParticipant(user.id, { isParticipating: true, role: "participant" });
    } else {
      const updated = participants.map(p => {
        if (p.id === user.id) {
          return { ...p, isParticipating: true, role: "participant" };
        }
        return p;
      });
      setParticipants(updated);
      localStorage.setItem("arena_participants", JSON.stringify(updated));
    }
    triggerLayoutSync();
    showToast(`Membre ${user.name} a rejoint la compétition !`);
  };

  const createCustomMember = async (emailLower: string, extractedName: string) => {
    const newId = isFirebaseConfigured ? "p_custom_" + Date.now() : "p_custom_" + Date.now();
    const created = {
      id: newId,
      name: extractedName,
      email: emailLower,
      points: 0,
      level: "Bronze",
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(extractedName)}&background=0B0F19&color=22d3ee`,
      trend: "same" as const,
      isParticipating: true,
      role: "participant" as const
    };

    if (isFirebaseConfigured) {
      await arenaService.createParticipant(newId, created);
    } else {
      const updated = [...participants, created];
      setParticipants(updated);
      localStorage.setItem("arena_participants", JSON.stringify(updated));
    }
    triggerLayoutSync();
    showToast(`Nouveau membre ${extractedName} créé et ajouté à la compétition !`);
  };

  return {
    participants,
    loading,
    toast,
    handleToggleParticipation,
    handleRoleChange,
    handleUpdatePoints,
    removeParticipant,
    handleSelectExistingMember,
    createCustomMember
  };
}
