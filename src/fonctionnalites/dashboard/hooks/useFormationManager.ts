"use client";

import { useState, useEffect } from "react";

export interface FormationFormState {
  title: string;
  desc: string;
  recrute: string;
  duree: string;
  lieu: string;
  closed: string;
  image: string;
}

const EMPTY_FORM: FormationFormState = {
  title: "",
  desc: "",
  recrute: "",
  duree: "",
  lieu: "",
  closed: "true",
  image: "",
};

import { isFirebaseConfigured } from "@/src/lib/firebase/config";
import * as formationService from "@/src/lib/firebase/services/formations";

export function useFormationManager() {
  const [formations, setFormations] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<number | string | null>(null);
  const [form, setForm] = useState<FormationFormState>(EMPTY_FORM);
  const [isLoading, setIsLoading] = useState(true);

  // Load from Firebase or localStorage
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
        setFormations(formattedData);
        setIsLoading(false);
      });
      return () => unsubscribe();
    } else {
      const stored = localStorage.getItem("local_courses");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          const filtered = parsed.filter(
            (c: any) =>
              c &&
              c.id !== 1 &&
              c.id !== 2 &&
              c.id !== 3 &&
              !c.title.includes("Cybersécurité") &&
              !c.title.includes("Data / IA") &&
              !c.title.includes("DevOps")
          );
          setFormations(filtered);
          localStorage.setItem("local_courses", JSON.stringify(filtered));
        } catch (e) {
          console.error("Failed to parse courses", e);
        }
      } else {
        setFormations([]);
        localStorage.setItem("local_courses", JSON.stringify([]));
      }
      setIsLoading(false);
    }
  }, []);

  const updateField = <K extends keyof FormationFormState>(key: K, value: FormationFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const openAdd = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setShowModal(true);
  };

  const openEdit = (course: any) => {
    setEditingId(course.id);
    setForm({
      title: course.title,
      desc: course.description,
      recrute: course.recrutement,
      duree: course.duree,
      lieu: course.lieu || "",
      closed: course.closed ? "true" : "false",
      image: course.image,
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setShowModal(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.desc) return;

    if (isFirebaseConfigured) {
      const fbData = {
        title: form.title,
        status: form.closed === "true" ? "draft" : "published",
        category: "Technology", // Default category
        description: form.desc,
        instructor: "Ghostech", // Default instructor
        duration: form.duree,
        modules: 1, // Default module count
        level: "Intermédiaire", // Default level
        image: form.image
      };

      if (editingId !== null && typeof editingId === 'string') {
        await formationService.updateFormation(editingId, fbData);
      } else {
        await formationService.addFormation(fbData);
      }
    } else {
      let updated: any[];
      if (editingId !== null) {
        updated = formations.map((f) =>
          f.id === editingId
            ? {
                ...f,
                title: form.title,
                description: form.desc,
                recrutement: form.recrute || "du 24 avril au 6 mai",
                duree: form.duree || "4 mois",
                lieu: form.lieu || "Présentiel Intensif",
                image: form.image || f.image || "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
                closed: form.closed === "true",
              }
            : f
        );
      } else {
        const newForm = {
          id: Date.now(),
          title: form.title,
          description: form.desc,
          recrutement: form.recrute || "du 24 avril au 6 mai",
          duree: form.duree || "4 months",
          lieu: form.lieu || "Présentiel Intensif",
          image: form.image || "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
          closed: form.closed === "true",
        };
        updated = [newForm, ...formations];
      }
      setFormations(updated);
      localStorage.setItem("local_courses", JSON.stringify(updated));
    }
    
    closeModal();
  };

  const handleDelete = async (id: number | string) => {
    if (isFirebaseConfigured && typeof id === 'string') {
      await formationService.deleteFormation(id);
    } else {
      const updated = formations.filter((f) => f.id !== id);
      setFormations(updated);
      localStorage.setItem("local_courses", JSON.stringify(updated));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => updateField("image", reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return {
    formations,
    showModal,
    editingId,
    form,
    updateField,
    openAdd,
    openEdit,
    closeModal,
    handleSubmit,
    handleDelete,
    handleImageUpload,
    isLoading,
  };
}
