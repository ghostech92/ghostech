import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function MentorsSection() {
  return (
    <section className="w-full bg-[#e49834] py-16 px-6 relative z-10">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Bloc de texte (Gauche) */}
        <div className="space-y-6 text-white text-left">
          <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Relevez des défis <br /> avec des mentors <br /> experts
          </h3>
          <p className="text-white/90 text-xs md:text-sm leading-relaxed font-medium max-w-md">
            En plus d'être des professionnels de l'industrie tech, nos mentors vous guident et vous soutiennent à chaque étape du hackathon pour donner vie à vos projets.
          </p>
          <div className="pt-2">
            <Link
              href="https://wa.me/votre_numero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd59] text-white px-6 py-3.5 rounded-xl text-xs font-black tracking-wider uppercase transition-all hover:shadow-lg shadow-blue-900/20"
            >
              Rejoindre la communauté <FaWhatsapp className="text-base" />
            </Link>
          </div>
        </div>

        {/* Image d'illustration (Droite) */}
        <div className="w-full h-[350px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800"
            alt="Qualified Instructors mentoring students"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
