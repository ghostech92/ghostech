import { useState, useEffect } from "react";
import { projectService } from "@/src/services/projectService";
import { Project } from "./useProjects";

export function useProject(projectId: string) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      try {
        const fetchedProject = await projectService.getProject(projectId);
        setProject(fetchedProject ? (fetchedProject as Project) : null);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    }

    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  return { project, loading };
}
