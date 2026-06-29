"use client";

import React, { use } from "react";
import Link from "next/link";
import { FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";
import { useCourseDetail } from "@/src/fonctionnalites/formation/hooks/useCourseDetail";
import CourseInfoCard from "@/src/fonctionnalites/formation/composants/CourseInfoCard";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CourseDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const courseId = parseInt(resolvedParams.id, 10);
  
  const { course, loading } = useCourseDetail(courseId);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF1949]"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-6 text-center">
        <div className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm max-w-md w-full">
          <FaExclamationTriangle className="text-amber-500 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Formation introuvable</h2>
          <p className="text-gray-500 text-sm mb-6">
            Désolé, la formation que vous recherchez n'existe pas ou a été retirée.
          </p>
          <Link
            href="/formation"
            className="inline-flex items-center gap-2 bg-[#FF1949] text-white px-5 py-2.5 rounded-lg text-xs font-bold hover:bg-pink-700 transition"
          >
            <FaArrowLeft /> Retour aux formations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-[#FAFAFA] text-[#0F2137] font-sans antialiased pt-28 pb-80">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* GRILLE CÔTE À CÔTE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* COLONNE GAUCHE : IMAGE UNIQUEMENT (SANS CARD, GRANDE TAILLE, CÔTÉ GAUCHE) */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-auto max-h-[600px] object-contain rounded-3xl"
            />
          </div>

          {/* COLONNE DROITE : TOUT LE TEXTE ET BOUTONS */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* BOUTON RETOUR */}
            <Link
              href="/formation"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FF1949] transition text-sm font-semibold group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
              Retour aux formations
            </Link>

            <div className="space-y-4">
              <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase ${
                course.closed ? "bg-red-55/10 text-red-600 border border-red-100" : "bg-green-55/10 text-green-600 border border-green-100"
              }`}>
                {course.closed ? "Candidatures Closes" : "Candidatures Ouvertes"}
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                {course.title}
              </h1>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-6">
              <h2 className="text-lg font-bold text-gray-900 border-b border-gray-50 pb-3">
                À propos de cette formation
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {course.description}
              </p>
            </div>

            <CourseInfoCard course={course} />

            {/* ACTION CARD */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">Rejoindre la formation</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {course.closed 
                    ? "Les inscriptions pour cette formation sont actuellement closes. Restez connecté pour les prochaines cohortes."
                    : "Les candidatures sont ouvertes ! Remplissez le formulaire en ligne pour postuler à cette session."
                  }
                </p>
              </div>

              {course.closed ? (
                <button
                  disabled
                  className="w-full py-3 bg-red-600 text-white font-bold text-xs rounded-xl cursor-not-allowed border border-red-600 transition-all text-center flex items-center justify-center gap-2"
                >
                  Terminé
                </button>
              ) : (
                <button
                  onClick={() => alert("Formulaire de candidature en ligne !")}
                  className="w-full py-3 bg-[#FF1949] text-white font-bold text-xs rounded-xl hover:bg-pink-700 transition-all text-center flex items-center justify-center gap-2 shadow-xs"
                >
                  Postuler en ligne
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
