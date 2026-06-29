import { useState } from "react";
import { projectService } from "@/src/services/projectService";
import { db } from "@/src/services/firebase";
import { ProjectFormState, ProjectImage } from "../profil.types";
import { DEFAULT_DUOS } from "@/src/fonctionnalites/devarena/donnees/arena-data";
import { uploadToCloudinary } from "./useProfileEdit";
import confetti from "canvas-confetti";

export function useProjectManagement(user: any, profile: any, allDuos: any[]) {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [postingProject, setPostingProject] = useState(false);

  const [projectForm, setProjectForm] = useState<ProjectFormState>({
    name: "",
    description: "",
    tech: "",
    vague: "",
    duoName: "",
    githubUrl: "",
    demoUrl: "",
  });

  const [projectImages, setProjectImages] = useState<ProjectImage[]>([
    { file: null, url: "", preview: "", isUploading: false },
    { file: null, url: "", preview: "", isUploading: false },
    { file: null, url: "", preview: "", isUploading: false },
  ]);

  const handleProjectImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const updatedImages = [...projectImages];
      updatedImages[index] = {
        file,
        url: "",
        preview: URL.createObjectURL(file),
        isUploading: true
      };
      setProjectImages(updatedImages);

      try {
        const uploadedUrl = await uploadToCloudinary(file);
        const finalImages = [...projectImages];
        finalImages[index] = {
          file,
          url: uploadedUrl,
          preview: uploadedUrl,
          isUploading: false
        };
        setProjectImages(finalImages);
      } catch (error) {
        console.error("Error uploading project image:", error);
        alert("Une erreur est survenue lors de l'upload de l'image.");
        const failedImages = [...projectImages];
        failedImages[index] = {
          file: null,
          url: "",
          preview: "",
          isUploading: false
        };
        setProjectImages(failedImages);
      }
    }
  };

  const handlePostProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !projectForm.name.trim() || !projectForm.vague || !projectForm.duoName) {
      alert("Veuillez remplir tous les champs obligatoires (Nom, Vague, Duo/Équipe).");
      return;
    }

    const isAnyImageUploading = projectImages.some(img => img.isUploading);
    if (isAnyImageUploading) {
      alert("Veuillez attendre la fin du téléchargement des images.");
      return;
    }

    setPostingProject(true);
    try {
      const techArray = projectForm.tech
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

      const imagesArray = projectImages
        .map(img => img.url.trim())
        .filter(url => url.length > 0);

      if (imagesArray.length === 0) {
        const techImages = [
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format&fit=crop"
        ];
        imagesArray.push(techImages[Math.floor(Math.random() * techImages.length)]);
      }

      const selectedDuoObj = allDuos.find((d: any) => d.team.name === projectForm.duoName) || DEFAULT_DUOS.find((d: any) => d.team.name === projectForm.duoName);
      const member1 = selectedDuoObj?.team.member1 || "";
      const member2 = selectedDuoObj?.team.member2 || "";

      if (editingProjectId) {
        await projectService.updateProject(editingProjectId, {
          name: projectForm.name.trim(),
          description: projectForm.description.trim(),
          tech: techArray,
          vague: projectForm.vague,
          duoName: projectForm.duoName,
          member1,
          member2,
          githubUrl: projectForm.githubUrl.trim() || null,
          demoUrl: projectForm.demoUrl.trim() || null,
          createdBy: projectForm.duoName,
          image: imagesArray[0],
          images: imagesArray,
        });
      } else {
        await projectService.createProject({
          name: projectForm.name.trim(),
          description: projectForm.description.trim(),
          tech: techArray,
          vague: projectForm.vague,
          duoName: projectForm.duoName,
          member1,
          member2,
          githubUrl: projectForm.githubUrl.trim() || null,
          demoUrl: projectForm.demoUrl.trim() || null,
          createdBy: projectForm.duoName,
          creatorUid: user.uid,
          creatorName: profile?.name || user.displayName || user.email || "Membre",
          image: imagesArray[0],
          images: imagesArray,
          score: null
        });
      }

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });

      handleCloseProjectModal();
    } catch (err) {
      console.error("Error saving project:", err);
      alert("Erreur lors de l'enregistrement du projet. Veuillez réessayer.");
    } finally {
      setPostingProject(false);
    }
  };

  const handleEditProject = (proj: any) => {
    setEditingProjectId(proj.id);
    setProjectForm({
      name: proj.title,
      description: proj.description || "",
      tech: proj.tech || "",
      vague: proj.phase || "",
      duoName: proj.createdBy || "",
      githubUrl: proj.githubUrl || "",
      demoUrl: proj.demoUrl || "",
    });

    const imgs: ProjectImage[] = [
      { file: null, url: "", preview: "", isUploading: false },
      { file: null, url: "", preview: "", isUploading: false },
      { file: null, url: "", preview: "", isUploading: false },
    ];
    if (proj.images && proj.images.length > 0) {
      proj.images.forEach((url: string, idx: number) => {
        if (idx < 3) {
          imgs[idx] = { file: null, url, preview: url, isUploading: false };
        }
      });
    } else if (proj.image) {
      imgs[0] = { file: null, url: proj.image, preview: proj.image, isUploading: false };
    }
    setProjectImages(imgs);
    setShowProjectModal(true);
  };

  const handleDeleteProject = async (projectId: string) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce projet ?")) {
      try {
        await projectService.deleteProject(projectId);
        confetti({
          particleCount: 30,
          spread: 40,
          origin: { y: 0.8 }
        });
      } catch (err) {
        console.error("Error deleting project:", err);
        alert("Erreur lors de la suppression du projet.");
      }
    }
  };

  const handleCloseProjectModal = () => {
    setShowProjectModal(false);
    setEditingProjectId(null);
    setProjectForm({
      name: "",
      description: "",
      tech: "",
      vague: "",
      duoName: "",
      githubUrl: "",
      demoUrl: "",
    });
    setProjectImages([
      { file: null, url: "", preview: "", isUploading: false },
      { file: null, url: "", preview: "", isUploading: false },
      { file: null, url: "", preview: "", isUploading: false },
    ]);
  };

  return {
    showProjectModal, setShowProjectModal,
    editingProjectId,
    projectForm, setProjectForm,
    projectImages, setProjectImages,
    postingProject,
    handleProjectImageFileChange,
    handlePostProject,
    handleEditProject,
    handleDeleteProject,
    handleCloseProjectModal
  };
}
