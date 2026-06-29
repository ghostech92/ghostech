import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/src/services/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { UserProfile } from "../profil.types";
import { userService } from "@/src/services/userService";
import { projectService } from "@/src/services/projectService";
import { initializeArenaData, DEFAULT_DUOS } from "@/src/fonctionnalites/devarena/donnees/arena-data";



export function useAuthData() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [myProjects, setMyProjects] = useState<any[]>([]);
  const [allDuos, setAllDuos] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userData = await userService.getUser(currentUser.uid);
        if (userData) {
          setProfile(userData as UserProfile);
        } else {
          console.log("No such document!");
        }
      } else {
        router.push("/login");
      }
      setLoading(false);
    });

    const handleBadgeSync = async () => {
      if (auth.currentUser) {
        const userData = await userService.getUser(auth.currentUser.uid);
        if (userData) {
          setProfile(userData as UserProfile);
        }
      }
    };
    window.addEventListener("badge_unlocked_sync", handleBadgeSync);

    return () => {
      unsubscribe();
      window.removeEventListener("badge_unlocked_sync", handleBadgeSync);
    };
  }, [router]);

  useEffect(() => {
    initializeArenaData();
    const stored = localStorage.getItem("arena_duos");
    if (stored) {
      try {
        setAllDuos(JSON.parse(stored));
      } catch (e) {
        setAllDuos(DEFAULT_DUOS);
      }
    } else {
      setAllDuos(DEFAULT_DUOS);
    }
  }, []);

  useEffect(() => {
    if (!user || !profile) {
      setMyProjects([]);
      return;
    }
    
    const unsubscribeProjects = projectService.subscribeToProjects((projects) => {
      const dbProjs = projects.map((data: any) => ({
        id: data.id,
        title: data.name,
        tech: data.tech ? data.tech.join(", ") : "",
        image: data.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
        status: data.score ? "Évalué" : "En attente",
        phase: data.vague || "Vague 1",
        score: data.score ? `${data.score}/20` : "N/A",
        createdBy: data.createdBy,
        member1: data.member1,
        member2: data.member2,
        creatorUid: data.creatorUid,
        description: data.description || "",
        githubUrl: data.githubUrl || "",
        demoUrl: data.demoUrl || "",
        images: data.images || [],
        isReal: true
      }));

      const userName = profile.name || user.displayName || "";
      
      const filteredDb = dbProjs.filter((proj: any) => {
        const isMember1 = proj.member1 && userName && proj.member1.toLowerCase() === userName.toLowerCase();
        const isMember2 = proj.member2 && userName && proj.member2.toLowerCase() === userName.toLowerCase();
        const isCreator = proj.creatorUid === user.uid;
        return isMember1 || isMember2 || isCreator;
      });

      setMyProjects(filteredDb);
    }, (err) => {
      console.error("Error listening to projects:", err);
    });

    return () => unsubscribeProjects();
  }, [user, profile]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Erreur lors de la déconnexion", error);
    }
  };

  return {
    user,
    profile,
    setProfile,
    loading,
    myProjects,
    allDuos,
    handleSignOut
  };
}
