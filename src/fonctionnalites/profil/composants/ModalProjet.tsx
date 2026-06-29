import React from "react";
import { motion } from "framer-motion";
import { ProjectImage, ProjectFormState } from "../profil.types";

interface ModalProjetProps {
  showProjectModal: boolean;
  editingProjectId: string | null;
  projectForm: ProjectFormState;
  setProjectForm: (form: ProjectFormState) => void;
  projectImages: ProjectImage[];
  setProjectImages: (images: ProjectImage[]) => void;
  allDuos: any[];
  profile: any;
  user: any;
  postingProject: boolean;
  handlePostProject: (e: React.FormEvent) => void;
  handleCloseProjectModal: () => void;
  handleProjectImageFileChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

export default function ModalProjet({
  showProjectModal,
  editingProjectId,
  projectForm,
  setProjectForm,
  projectImages,
  setProjectImages,
  allDuos,
  profile,
  user,
  postingProject,
  handlePostProject,
  handleCloseProjectModal,
  handleProjectImageFileChange
}: ModalProjetProps) {
  if (!showProjectModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white border-2 border-[#e5e5e5] border-b-[8px] border-b-[#cdcdcd] rounded-3xl p-6 w-full max-w-lg relative overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC800]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />

        <div className="flex justify-between items-center mb-6 relative z-10">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <div>
              <h3 className="font-extrabold text-lg text-[#3C3C3C]">
                {editingProjectId ? "Modifier le Projet" : "Poster un Projet"}
              </h3>
              <p className="text-[11px] text-[#777777] font-bold">
                {editingProjectId ? "Modifiez les détails de votre réalisation" : "Partagez votre réalisation avec la communauté DevArena"}
              </p>
            </div>
          </div>
          <button
            onClick={handleCloseProjectModal}
            className="text-gray-400 hover:text-gray-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-50 transition"
          >
            <span className="material-symbols-rounded text-[20px]">close</span>
          </button>
        </div>

        <form onSubmit={handlePostProject} className="space-y-4 relative z-10">
          <div>
            <label className="block text-xs font-black text-slate-700 uppercase mb-1">Nom du projet *</label>
            <input
              type="text"
              required
              placeholder="Ex: Gestion Scolaire, E-commerce..."
              value={projectForm.name}
              onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
              className="w-full text-xs font-bold px-4 py-3 bg-[#f7f7f7] border-2 border-[#e5e5e5] rounded-xl focus:outline-none focus:border-[#1cb0f6] focus:bg-white transition"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-slate-700 uppercase mb-1">Description</label>
            <textarea
              rows={3}
              placeholder="Expliquez brièvement ce que fait votre projet, son but, etc."
              value={projectForm.description}
              onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
              className="w-full text-xs font-bold px-4 py-3 bg-[#f7f7f7] border-2 border-[#e5e5e5] rounded-xl focus:outline-none focus:border-[#1cb0f6] focus:bg-white transition resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-slate-700 uppercase mb-2">
              Images du projet (Jusqu&apos;à 3 images)
            </label>
            <div className="grid grid-cols-3 gap-3">
              {projectImages.map((img, idx) => (
                <div
                  key={idx}
                  className="border-2 border-dashed border-[#e5e5e5] hover:border-[#1cb0f6] rounded-2xl p-3 transition bg-[#f7f7f7]/50 flex flex-col items-center justify-center relative min-h-[110px] text-center"
                >
                  {img.isUploading ? (
                    <div className="flex flex-col items-center justify-center space-y-1.5">
                      <div className="w-5 h-5 border-2 border-[#1cb0f6] border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-[9px] font-black text-slate-400 uppercase">Envoi...</span>
                    </div>
                  ) : img.preview || img.url ? (
                    <div className="w-full h-full relative group">
                      <img
                        src={img.preview || img.url}
                        alt={`Aperçu ${idx + 1}`}
                        className="w-full h-20 object-cover rounded-xl border border-slate-100"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const newImgs = [...projectImages];
                          newImgs[idx] = { file: null, url: "", preview: "", isUploading: false };
                          setProjectImages(newImgs);
                        }}
                        className="absolute -top-1.5 -right-1.5 bg-red-500 hover:bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center shadow transition-all duration-200"
                      >
                        <span className="material-symbols-rounded text-[12px] font-bold">close</span>
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex justify-center gap-2">
                        {/* File upload button */}
                        <label className="cursor-pointer flex flex-col items-center justify-center p-1.5 rounded-lg border border-slate-200 hover:border-teal-500 hover:bg-white bg-slate-50 transition w-full">
                          <span className="material-symbols-rounded text-[18px] text-slate-400">upload_file</span>
                          <span className="text-[8px] font-black text-slate-600 mt-0.5 uppercase tracking-wide">Fichier</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleProjectImageFileChange(e, idx)}
                          />
                        </label>

                        {/* URL input trigger */}
                        <button
                          type="button"
                          onClick={() => {
                            const url = prompt("Entrez l'URL de l'image :");
                            if (url) {
                              const newImgs = [...projectImages];
                              newImgs[idx] = { ...newImgs[idx], url: url.trim(), preview: url.trim() };
                              setProjectImages(newImgs);
                            }
                          }}
                          className="flex flex-col items-center justify-center p-1.5 rounded-lg border border-slate-200 hover:border-teal-500 hover:bg-white bg-slate-50 transition w-full"
                        >
                          <span className="material-symbols-rounded text-[18px] text-slate-400">link</span>
                          <span className="text-[8px] font-black text-slate-600 mt-0.5 uppercase tracking-wide">Lien URL</span>
                        </button>
                      </div>
                      <p className="text-[8px] text-slate-450 font-bold uppercase tracking-wider">Slot {idx + 1}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black text-slate-700 uppercase mb-1">Vague *</label>
              <select
                value={projectForm.vague}
                onChange={(e) => setProjectForm({ ...projectForm, vague: e.target.value, duoName: "" })}
                className="w-full text-xs font-extrabold px-4 py-3 bg-[#f7f7f7] border-2 border-[#e5e5e5] rounded-xl focus:outline-none focus:border-[#1cb0f6] focus:bg-white transition"
              >
                <option value="">Sélectionnez une vague</option>
                <option value="Vague 1">Vague 1</option>
                <option value="Vague 2">Vague 2</option>
                <option value="Vague 3">Vague 3</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 uppercase mb-1">Duo / Équipe *</label>
              <select
                required
                disabled={!projectForm.vague}
                value={projectForm.duoName}
                onChange={(e) => setProjectForm({ ...projectForm, duoName: e.target.value })}
                className="w-full text-xs font-extrabold px-4 py-3 bg-[#f7f7f7] border-2 border-[#e5e5e5] rounded-xl focus:outline-none focus:border-[#1cb0f6] focus:bg-white transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {!projectForm.vague ? (
                  <option value="">Choisissez d&apos;abord la vague</option>
                ) : (
                  <>
                    <option value="">Sélectionnez votre duo</option>
                    {(() => {
                      const userName = (profile?.name || user?.displayName || "").toLowerCase().trim();
                      const selectedVagueKey = 
                        projectForm.vague === "Vague 1" ? "vague1" :
                        projectForm.vague === "Vague 2" ? "vague2" :
                        projectForm.vague === "Vague 3" ? "vague3" : "";
                      
                      const filtered = allDuos.filter((d: any) => {
                        const matchesVague = d.vague === selectedVagueKey;
                        if (!matchesVague) return false;
                        
                        if (!userName) return true;
                        
                        const isMember1 = d.team?.member1 && d.team.member1.toLowerCase().trim() === userName;
                        const isMember2 = d.team?.member2 && d.team.member2.toLowerCase().trim() === userName;
                        
                        return isMember1 || isMember2;
                      });

                      if (filtered.length === 0) {
                        return <option value="" disabled>Aucun duo trouvé pour vous</option>;
                      }

                      return filtered.map((d: any) => (
                        <option key={d.id} value={d.team.name}>
                          {d.team.name} ({d.team.member1} & {d.team.member2})
                        </option>
                      ));
                    })()}
                  </>
                )}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-700 uppercase mb-1">Technologies *</label>
            <input
              type="text"
              required
              placeholder="Ex: React, Node, Stripe"
              value={projectForm.tech}
              onChange={(e) => setProjectForm({ ...projectForm, tech: e.target.value })}
              className="w-full text-xs font-bold px-4 py-3 bg-[#f7f7f7] border-2 border-[#e5e5e5] rounded-xl focus:outline-none focus:border-[#1cb0f6] focus:bg-white transition"
            />
            <p className="text-[9px] text-[#777777] font-bold mt-1">Séparez par des virgules</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black text-slate-700 uppercase mb-1">Lien GitHub</label>
              <input
                type="url"
                placeholder="https://github.com/..."
                value={projectForm.githubUrl}
                onChange={(e) => setProjectForm({ ...projectForm, githubUrl: e.target.value })}
                className="w-full text-xs font-bold px-4 py-3 bg-[#f7f7f7] border-2 border-[#e5e5e5] rounded-xl focus:outline-none focus:border-[#1cb0f6] focus:bg-white transition"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 uppercase mb-1">Lien Démo Live</label>
              <input
                type="url"
                placeholder="https://..."
                value={projectForm.demoUrl}
                onChange={(e) => setProjectForm({ ...projectForm, demoUrl: e.target.value })}
                className="w-full text-xs font-bold px-4 py-3 bg-[#f7f7f7] border-2 border-[#e5e5e5] rounded-xl focus:outline-none focus:border-[#1cb0f6] focus:bg-white transition"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t-2 border-[#f1f1f1]">
            <button
              type="button"
              onClick={handleCloseProjectModal}
              className="duo-btn duo-btn-gray flex-1"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={postingProject}
              className="duo-btn duo-btn-green flex-1 flex items-center justify-center gap-2"
            >
              {postingProject ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  {editingProjectId ? "Modification..." : "Publication..."}
                </>
              ) : (
                <>
                  <span className="material-symbols-rounded text-[16px]">
                    {editingProjectId ? "save" : "send"}
                  </span>
                  {editingProjectId ? "Sauvegarder" : "Publier le projet"}
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
