"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

/**
 * SectionInstructeurs — Section "Apprends avec des instructeurs qualifiés"
 * Design inspiré de la maquette moderne, adapté à la charte Ghostech (orange #fd800a → jaune).
 */
export default function SectionInstructeurs() {
  return (
    <section className="w-full bg-white  pb-20 flex justify-center relative overflow-hidden">
      
      {/* Conteneur principal avec dégradé orange → jaune */}
      <div className="w-full max-w-none overflow-hidden relative">
        
        {/* Fond dégradé orange → jaune */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fd800a] via-[#FFA500] to-[#FFD700] z-0" />

        {/* Effet de lumière subtile */}
        <div
          className="absolute inset-0 opacity-20 z-0"
          style={{
            background: "radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 50%)",
          }}
        />

        {/* Contenu principal : 2 colonnes */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center p-8 md:p-12 lg:p-20">
          
          {/* COLONNE GAUCHE : Texte */}
          <div className="flex flex-col justify-center">
            
            {/* Titre principal */}
            <h2 className="font-b612 text-base sm:text-xl md:text-2xl lg:text-3xl font-black leading-[1.15] tracking-tight text-white mb-8">
              Rejoindre la communauté<br />
              sur WhatsApp<br />
              pour ne rien rater de nos événements
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base leading-relaxed text-white/90 max-w-lg mb-10">
              Avoire les information en temps réel sur nos événements à venir , duscuter avec des passionnés de la tech.
            </p>

            {/* Bouton CTA */}
            <a href="https://chat.whatsapp.com/Le6R6EvCKOR8I3kmQEd9XS" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 self-start bg-[#25D366] text-white font-bold text-xs md:text-sm px-8 py-4 rounded-lg transition-colors hover:bg-[#128C7E]">
              <span className="uppercase tracking-wider">rejoindre</span>
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>

          {/* COLONNE DROITE : Image */}
          <div className="relative mx-auto w-[100%] max-w-sm aspect-4/5 rounded-[2rem] overflow-hidden">
            <Image
              src="/Galeries/img7.jpeg"
              alt="Instructeur qualifié accompagnant un étudiant"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Léger dégradé orange sur l'image pour l'harmonie */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#fd800a]/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Motif décoratif discret (lignes courbes) */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      </div>
    </section>
  );
}