import { useState, useEffect } from "react";
import { userService } from "@/src/services/userService";
import { UserProfile } from "@/src/types/user.types";

export function useMembers() {
  const [members, setMembers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await userService.getAllUsers();
        setMembers(usersData);
      } catch (error: any) {
        console.error("Erreur lors de la récupération des utilisateurs:", error);
        setErrorMsg(error.message || "Erreur de connexion à la base de données");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const updateMember = async (userId: string, field: string, value: string) => {
    try {
      await userService.updateUser(userId, {
        [field]: value
      });
      setMembers(members.map(m => m.id === userId ? { ...m, [field]: value } : m));
      return { success: true };
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de ${field}:`, error);
      return { success: false, error };
    }
  };

  return { members, loading, errorMsg, updateMember };
}
