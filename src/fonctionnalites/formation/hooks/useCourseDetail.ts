import { useState, useEffect } from "react";
import { isFirebaseConfigured } from "@/src/lib/firebase/config";
import * as formationService from "@/src/lib/firebase/services/formations";

interface Course {
  id: string | number;
  title: string;
  description: string;
  recrutement: string;
  duree: string;
  lieu: string;
  image: string;
  closed: boolean;
}

export function useCourseDetail(courseId: string | number) {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isFirebaseConfigured) {
      const unsubscribe = formationService.subscribeToFormations((data) => {
        const found = data.find(f => String(f.id) === String(courseId));
        if (found) {
          setCourse({
            id: found.id || courseId,
            title: found.title,
            description: found.description,
            recrutement: found.status,
            duree: found.duration,
            lieu: "En ligne / Hybride",
            image: found.image || "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
            closed: found.status === "draft",
          });
        } else {
          setCourse(null);
        }
        setLoading(false);
      });
      return () => unsubscribe();
    } else {
      const stored = localStorage.getItem("local_courses");
      let list: Course[] = [];
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          list = parsed.filter((c: any) => 
            c && 
            c.id !== 1 && 
            c.id !== 2 && 
            c.id !== 3 && 
            !c.title.includes("Cybersécurité") && 
            !c.title.includes("Data / IA") && 
            !c.title.includes("DevOps")
          );
          localStorage.setItem("local_courses", JSON.stringify(list));
        } catch (e) {
          console.error("Failed to parse courses from localStorage", e);
          list = [];
        }
      } else {
        list = [];
        localStorage.setItem("local_courses", JSON.stringify([]));
      }
      
      const found = list.find((c) => String(c.id) === String(courseId));
      setCourse(found || null);
      setLoading(false);
    }
  }, [courseId]);

  return { course, loading };
}
