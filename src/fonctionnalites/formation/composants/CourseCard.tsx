import React from "react";
import Link from "next/link";

interface CourseCardProps {
  course: any;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-white/10 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-all">
      <div>
        {/* Image & Overlays Style Orange Digital */}
        <div className="w-full relative bg-white aspect-[4/3] overflow-hidden border-b border-gray-100 flex items-center justify-center">
          <img src={course.image} alt={course.title} className="w-full h-full object-contain group-hover:scale-103 transition-transform duration-500" />

          {/* Statut Top Badge */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md z-10">
            <p className="text-white text-[10px] font-bold tracking-wide uppercase">
              {course.closed ? "Candidatures Closes" : "Candidatures Ouvertes"}
            </p>
          </div>

          {/* Bottom Image Data Block */}
          <div className="absolute bottom-4 left-4 z-10">
            <span className="bg-[#0F2137] px-2.5 py-1 rounded-md text-white shadow-xs text-[10px] font-bold">
              {course.closed ? "Terminé" : "En cours"}
            </span>
          </div>
        </div>

        {/* Info Content Area */}
        <div className="p-5 space-y-2">
          <h3 className="text-base font-bold text-gray-900 group-hover:text-[#FF1949] transition-colors">
            {course.title}
          </h3>
          <p className="text-gray-500 text-[12px] leading-relaxed line-clamp-3">
            {course.description}
          </p>

          <div className="pt-3 border-t border-gray-50 space-y-1 text-[11px] text-gray-500 font-medium">
            <p><span className="font-bold text-gray-700">Date :</span> {course.recrutement}</p>
            <p><span className="font-bold text-gray-700">Lieu :</span> {course.lieu || "Présentiel Intensif"}</p>
          </div>
        </div>
      </div>

      {/* Boutons d'action adaptés à l'état fermé */}
      <div className="p-5 pt-0 grid grid-cols-2 gap-2 mt-auto">
        <Link
          href={`/formation/${course.id}`}
          className="w-full py-2 bg-gray-50 border border-gray-200 text-gray-600 font-bold text-xs rounded-lg hover:bg-gray-100 transition text-center block"
        >
          Détails
        </Link>
        {course.closed ? (
          <button
            disabled
            className="w-full py-2 bg-red-600 text-white font-bold text-xs rounded-lg cursor-not-allowed border border-red-600"
          >
            Terminé
          </button>
        ) : (
          <button
            className="w-full py-2 bg-[#FF1949] text-white font-bold text-xs rounded-lg hover:bg-pink-700 transition"
          >
            S'inscrire
          </button>
        )}
      </div>
    </div>
  );
}
