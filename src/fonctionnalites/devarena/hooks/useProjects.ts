import { useState, useEffect, useMemo } from "react";
import { projectService } from "@/src/services/projectService";

export interface Project {
  id: string;
  name: string;
  description?: string;
  tech: string[];
  vague: string;
  score?: number | null;
  image: string;
  images?: string[];
  githubUrl?: string;
  demoUrl?: string;
  createdBy?: string;
  member1?: string;
  member2?: string;
  createdAt?: any;
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = projectService.subscribeToProjects((dbProjects) => {
      setProjects(dbProjects as Project[]);
      setLoading(false);
    }, (err) => {
      console.error("Error fetching projects:", err);
      // Fallback to empty array in production
      setProjects([]);
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      if (activeFilter === "Tous") return true;
      if (activeFilter === "Gagnants") return project.score && project.score >= 16;
      return project.vague === activeFilter;
    });
  }, [projects, activeFilter]);

  return {
    projects,
    activeFilter,
    setActiveFilter,
    loading,
    filteredProjects
  };
}
