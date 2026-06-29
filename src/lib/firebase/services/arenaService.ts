import { collection, doc, getDocs, getDoc, setDoc, updateDoc, deleteDoc, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../config";
import type { ArenaParticipant, ArenaDuo, ArenaWave } from "@/src/types/arena.types";

const PARTICIPANTS_COLLECTION = "arena_participants";
const DUOS_COLLECTION = "arena_duos";
const WAVES_COLLECTION = "arena_waves";

// ==========================================
// PARTICIPANTS
// ==========================================

export const getParticipants = async (): Promise<ArenaParticipant[]> => {
  const q = query(collection(db, PARTICIPANTS_COLLECTION));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ArenaParticipant));
};

export const subscribeToParticipants = (callback: (participants: ArenaParticipant[]) => void) => {
  const q = query(collection(db, PARTICIPANTS_COLLECTION));
  return onSnapshot(q, (snapshot) => {
    const participants = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ArenaParticipant));
    callback(participants);
  }, (error) => {
    console.error("Error subscribing to arena participants:", error);
  });
};

export const updateParticipant = async (id: string, data: Partial<ArenaParticipant>) => {
  const docRef = doc(db, PARTICIPANTS_COLLECTION, id);
  await updateDoc(docRef, data);
};

export const createParticipant = async (id: string, data: ArenaParticipant) => {
  const docRef = doc(db, PARTICIPANTS_COLLECTION, id);
  await setDoc(docRef, data);
};

export const deleteParticipant = async (id: string) => {
  const docRef = doc(db, PARTICIPANTS_COLLECTION, id);
  await deleteDoc(docRef);
};

// ==========================================
// DUOS
// ==========================================

export const getDuos = async (): Promise<ArenaDuo[]> => {
  const q = query(collection(db, DUOS_COLLECTION));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ArenaDuo));
};

export const subscribeToDuos = (callback: (duos: ArenaDuo[]) => void) => {
  const q = query(collection(db, DUOS_COLLECTION));
  return onSnapshot(q, (snapshot) => {
    const duos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ArenaDuo));
    callback(duos);
  }, (error) => {
    console.error("Error subscribing to arena duos:", error);
  });
};

export const updateDuo = async (id: string, data: Partial<ArenaDuo>) => {
  const docRef = doc(db, DUOS_COLLECTION, id);
  await updateDoc(docRef, data);
};

export const createDuo = async (id: string, data: ArenaDuo) => {
  const docRef = doc(db, DUOS_COLLECTION, id);
  await setDoc(docRef, data);
};

export const deleteDuo = async (id: string) => {
  const docRef = doc(db, DUOS_COLLECTION, id);
  await deleteDoc(docRef);
};

// ==========================================
// WAVES
// ==========================================

export const getWaves = async (): Promise<ArenaWave[]> => {
  const q = query(collection(db, WAVES_COLLECTION));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ArenaWave));
};

export const subscribeToWaves = (callback: (waves: ArenaWave[]) => void) => {
  const q = query(collection(db, WAVES_COLLECTION));
  return onSnapshot(q, (snapshot) => {
    const waves = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ArenaWave));
    callback(waves);
  }, (error) => {
    console.error("Error subscribing to arena waves:", error);
  });
};

export const updateWave = async (id: string, data: Partial<ArenaWave>) => {
  const docRef = doc(db, WAVES_COLLECTION, id);
  await updateDoc(docRef, data);
};

export const createWave = async (id: string, data: ArenaWave) => {
  const docRef = doc(db, WAVES_COLLECTION, id);
  await setDoc(docRef, data);
};

export const deleteWave = async (id: string) => {
  const docRef = doc(db, WAVES_COLLECTION, id);
  await deleteDoc(docRef);
};

// ==========================================
// SYNC & DATA INTEGRITY
// ==========================================

export const syncParticipantProfile = async (
  userId: string, 
  profileData: { name?: string; avatar?: string }
) => {
  try {
    // 1. Update participant document if it exists
    const participantRef = doc(db, PARTICIPANTS_COLLECTION, userId);
    const participantSnap = await getDoc(participantRef);
    if (participantSnap.exists()) {
      await updateDoc(participantRef, profileData);
    }

    // 2. Update duos where user is member1
    const q1 = query(collection(db, DUOS_COLLECTION), where("team.member1Id", "==", userId));
    const snap1 = await getDocs(q1);
    
    for (const d of snap1.docs) {
      const duoData = d.data();
      await updateDoc(doc(db, DUOS_COLLECTION, d.id), {
        "team.member1": profileData.name !== undefined ? profileData.name : duoData.team.member1,
        "team.img1": profileData.avatar !== undefined ? profileData.avatar : duoData.team.img1,
      });
    }

    // 3. Update duos where user is member2
    const q2 = query(collection(db, DUOS_COLLECTION), where("team.member2Id", "==", userId));
    const snap2 = await getDocs(q2);
    
    for (const d of snap2.docs) {
      const duoData = d.data();
      await updateDoc(doc(db, DUOS_COLLECTION, d.id), {
        "team.member2": profileData.name !== undefined ? profileData.name : duoData.team.member2,
        "team.img2": profileData.avatar !== undefined ? profileData.avatar : duoData.team.img2,
      });
    }
    
    console.log(`Sync completed for participant ${userId}`);
  } catch (error) {
    console.error("Error syncing participant profile to duos:", error);
  }
};
