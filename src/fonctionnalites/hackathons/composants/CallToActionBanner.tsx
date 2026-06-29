import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function CallToActionBanner() {
  return (
    <section className="w-full mt-16 mb-0 relative z-10">
      <div className="bg-[#357dab] py-12 px-6 md:py-16 md:px-12 text-left text-white shadow-xl relative overflow-hidden">
        <div className="w-full max-w-5xl mx-auto relative z-20">
          <div className="bg-white text-[#357dab] w-16 h-16 rounded-2xl flex items-center justify-center font-black text-3xl relative mb-6 shadow-sm">
            Ai
            <span className="absolute -top-2 -right-2 text-white bg-[#39779e] rounded-full w-6 h-6 flex items-center justify-center text-[12px] border-2 border-white shadow-sm">✨</span>
          </div>

          <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-6">
            Développez les compétences les plus recherchées, y compris l'IA !
          </h3>
          <p className="text-white/90 text-sm md:text-base max-w-3xl leading-relaxed font-medium mb-10">
            L'IA n'est pas là pour vous remplacer, elle est là pour vous donner du pouvoir. C'est pourquoi nous avons intégré des défis autour de l'IA dans nos hackathons, pour vous aider à maîtriser à la fois votre domaine de prédilection et les outils qui façonnent le monde de demain. Si vous voulez aller plus loin, explorez nos nouveaux parcours centrés sur l'IA, conçus pour vous doter des compétences les plus pointues de l'industrie.
          </p>

          <Link
            href="https://wa.me/votre_numero"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd59] text-white px-6 py-3 rounded-lg text-sm font-bold tracking-wide transition-all hover:shadow-lg"
          >
            Discutons-en <FaWhatsapp className="text-xl" />
          </Link>
        </div>
      </div>
    </section>
  );
}
