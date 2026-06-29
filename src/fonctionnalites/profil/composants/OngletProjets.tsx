import React from "react";
import Link from "next/link";

interface OngletProjetsProps {
  myProjects: any[];
  setEditingProjectId: (id: string | null) => void;
  setShowProjectModal: (show: boolean) => void;
  handleEditProject: (proj: any) => void;
  handleDeleteProject: (id: string) => void;
}

export default function OngletProjets({
  myProjects,
  setEditingProjectId,
  setShowProjectModal,
  handleEditProject,
  handleDeleteProject
}: OngletProjetsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-black text-[#3C3C3C] uppercase tracking-wider">Mes Projets de Compétition</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {myProjects.length === 0 ? (
          <div className="col-span-full py-12 text-center bg-slate-50 border-2 border-dashed border-[#e5e5e5] rounded-3xl p-8 space-y-4">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-rounded text-slate-400 text-3xl">folder_open</span>
            </div>
            <div>
              <h5 className="font-extrabold text-[#3C3C3C] text-base">Aucun projet trouvé</h5>
              <p className="text-xs text-[#777777] font-bold max-w-md mx-auto mt-1">
                Vous n&apos;avez pas encore posté de projet ou votre duo n&apos;est pas associé à un projet récent.
              </p>
            </div>
            <button
              onClick={() => {
                setEditingProjectId(null);
                setShowProjectModal(true);
              }}
              className="duo-btn duo-btn-blue text-xs py-2 px-4"
            >
              Poster un projet
            </button>
          </div>
        ) : (
          myProjects.map((proj, idx) => (
            <div key={proj.id || idx} className="group bg-white border-2 border-[#e5e5e5] border-b-[5px] border-b-[#cdcdcd] rounded-2xl overflow-hidden hover:border-[#ccd0d8] transition-all flex flex-col">
              <div className="h-32 bg-[#f7f7f7] relative overflow-hidden">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 right-2 flex gap-2">
                  <span className="bg-black/75 text-white text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">{proj.phase}</span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h5 className="font-extrabold text-[#3C3C3C] text-sm mb-1 line-clamp-1">{proj.title}</h5>
                <p className="text-[11px] text-[#777777] font-bold mb-1">{proj.tech}</p>
                <div className="text-[10px] text-slate-450 font-extrabold mb-4 flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-rounded text-[14px] text-slate-400">stars</span>
                    Duo : <span className="text-[#3c3c3c]">{proj.createdBy}</span>
                  </div>
                  {(proj.member1 || proj.member2) && (
                    <div className="flex items-center gap-1 text-slate-400">
                      <span className="material-symbols-rounded text-[14px] text-slate-400">group</span>
                      Membres : <span className="text-[#3c3c3c] font-bold">{proj.member1} & {proj.member2}</span>
                    </div>
                  )}
                </div>

                <div className="mt-auto flex justify-between items-center border-t-2 border-[#f7f7f7] pt-3 gap-2">
                  <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-xl border-2 ${proj.status === 'Évalué' ? 'bg-[#e6f9e6] text-emerald-600 border-[#b3f0b3] border-b-[3px] border-b-[#80e080]' : 'bg-[#fff3e0] text-[#ff9600] border-[#ffe0b2] border-b-[3px] border-b-[#ffb74d]'}`}>
                    {proj.status === 'Évalué' ? `Évalué : ${proj.score}` : proj.status}
                  </span>

                  <div className="flex items-center gap-1.5 ml-auto">
                    {proj.isReal && (
                      <>
                        <button
                          onClick={() => handleEditProject(proj)}
                          title="Modifier"
                          className="p-1.5 rounded-lg border-2 border-[#e5e5e5] border-b-[3.5px] hover:bg-slate-50 text-slate-500 hover:text-[#1cb0f6] active:border-b-2 transition-all flex items-center justify-center"
                        >
                          <span className="material-symbols-rounded text-[16px]">edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteProject(proj.id)}
                          title="Supprimer"
                          className="p-1.5 rounded-lg border-2 border-red-200 border-b-[3.5px] hover:bg-red-50 text-red-500 hover:text-red-600 active:border-b-2 transition-all flex items-center justify-center"
                        >
                          <span className="material-symbols-rounded text-[16px]">delete</span>
                        </button>
                      </>
                    )}
                    <Link href={`/devarena/projets/${proj.id}`} className="text-xs font-extrabold text-[#1cb0f6] hover:text-[#1899d6] flex items-center gap-1 group/btn ml-1">
                      Voir détails
                      <span className="material-symbols-rounded text-[14px] group-hover/btn:translate-x-0.5 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
