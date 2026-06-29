import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../config";

const PARTICIPANTS_COL = "arena_participants";
const WAVES_COL = "arena_waves";
const DUOS_COL = "arena_duos";

// --- PARTICIPANTS ---
export const subscribeToParticipants = (callback: (data: any[]) => void) => {
  const q = query(collection(db, PARTICIPANTS_COL));
  return onSnapshot(q, (snapshot) => {
    callback(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  });
};

export const updateParticipant = async (id: string, data: any) => {
  const docRef = doc(db, PARTICIPANTS_COL, id);
  return await updateDoc(docRef, data);
};

// --- WAVES ---
export const subscribeToWaves = (callback: (data: any[]) => void) => {
  const q = query(collection(db, WAVES_COL));
  return onSnapshot(q, (snapshot) => {
    callback(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  });
};

// --- DUOS ---
export const subscribeToDuos = (callback: (data: any[]) => void) => {
  const q = query(collection(db, DUOS_COL), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snapshot) => {
    callback(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  });
};

export const addDuo = async (data: any) => {
  return await addDoc(collection(db, DUOS_COL), {
    ...data,
    createdAt: new Date().toISOString()
  });
};

export const updateDuo = async (id: string, data: any) => {
  const docRef = doc(db, DUOS_COL, id);
  return await updateDoc(docRef, data);
};

export const deleteDuo = async (id: string) => {
  const docRef = doc(db, DUOS_COL, id);
  return await deleteDoc(docRef);
};
