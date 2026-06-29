import { useState, useEffect } from "react";
import { isFirebaseConfigured } from "@/src/lib/firebase/config";
import * as formationService from "@/src/lib/firebase/services/formations";

const COURSES: any[] = [];

export function useCourses() {
  const [courses, setCourses] = useState<any[]>(COURSES);

  useEffect(() => {
    if (isFirebaseConfigured) {
      const unsubscribe = formationService.subscribeToFormations((data) => {
        const formattedData = data.map(f => ({
          id: f.id,
          title: f.title,
          description: f.description,
          recrutement: f.status,
          duree: f.duration,
          lieu: "En ligne / Hybride",
          image: f.image || "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
          closed: f.status === "draft",
        }));
        setCourses(formattedData);
      });
      return () => unsubscribe();
    } else {
      const stored = localStorage.getItem("local_courses");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          const filtered = parsed.filter((c: any) => 
            c && 
            c.id !== 1 && 
            c.id !== 2 && 
            c.id !== 3 && 
            !c.title.includes("Cybersécurité") && 
            !c.title.includes("Data / IA") && 
            !c.title.includes("DevOps")
          );
          setCourses(filtered);
          localStorage.setItem("local_courses", JSON.stringify(filtered));
        } catch (e) {
          console.error("Failed to parse courses from localStorage", e);
        }
      } else {
        localStorage.setItem("local_courses", JSON.stringify([]));
        setCourses([]);
      }
    }
  }, []);

  return { courses };
}
