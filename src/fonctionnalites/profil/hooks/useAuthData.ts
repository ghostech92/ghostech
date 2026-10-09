import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/src/services/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { UserProfile } from "../profil.types";
import { userService } from "@/src/services/userService";



export function useAuthData() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

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
    handleSignOut
  };
}
