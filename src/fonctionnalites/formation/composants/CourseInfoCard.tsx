import React from "react";
import { FaCalendarAlt, FaClock, FaMapPin } from "react-icons/fa";

interface CourseInfoCardProps {
  course: any;
}

export default function CourseInfoCard({ course }: CourseInfoCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs">
      <h2 className="text-lg font-bold text-gray-900 border-b border-gray-50 pb-3 mb-4">
        Informations pratiques
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="flex items-start gap-3">
          <div className="bg-pink-50 p-2 rounded-lg text-[#FF1949] shrink-0">
            <FaCalendarAlt className="text-base" />
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Recrutement</h4>
            <p className="text-xs font-semibold text-gray-800 mt-0.5">{course.recrutement}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-pink-50 p-2 rounded-lg text-[#FF1949] shrink-0">
            <FaClock className="text-base" />
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Durée</h4>
            <p className="text-xs font-semibold text-gray-800 mt-0.5">{course.duree || "4 mois"}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-pink-50 p-2 rounded-lg text-[#FF1949] shrink-0">
            <FaMapPin className="text-base" />
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Lieu</h4>
            <p className="text-xs font-semibold text-gray-800 mt-0.5">{course.lieu || "Présentiel Intensif"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
