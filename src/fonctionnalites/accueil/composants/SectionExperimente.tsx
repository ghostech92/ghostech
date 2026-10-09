"use client";

import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function SectionExperimente() {
  return (
    <motion.section
      className="w-full bg-white py-24 px-4 flex justify-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full max-w-7xl flex flex-col items-center">
        
        {/* En-tête amélioré */}
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mb-16"
          variants={cardVariants}
        >
          


          {/* Titre principal */}
          <motion.h2
            className="text-3xl md:text-[40px] font-bold font-b612 text-black mb-4"
            whileHover={{ letterSpacing: "0.02em" }}
            transition={{ duration: 0.3 }}
          >
            Des valeurs  <span className="text-[#fd800a]">en action</span>
          </motion.h2>

          {/* Description */}
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto">
            La technologie évolue constamment. Nous faisons de l'apprentissage continu une culture.<br />
            Excellence, engagement africain et impact guident nos actions.
          </p>
        </motion.div>

        {/* Grille de cartes — Style original conservé */}
        <motion.div
          className="grid w-full max-w-6xl grid-cols-1 border-l border-t border-zinc-200 md:grid-cols-2 lg:grid-cols-3"
          variants={sectionVariants}
        >
          {[
            { icon: "school", title: "Innovation", desc: "Nous encourageons la créativité, l'expérimentation et la recherche de nouvelles solutions." },
            { icon: "hub", title: "Impact", desc: "Nous ne créons pas uniquement pour créer. Nous cherchons à produire des solutions utiles et porteuses de changement." },
            { icon: "lightbulb", title: "Collaboration", desc: "Nous croyons que les grandes innovations naissent de la rencontre des compétences et des idées." },
            { icon: "groups", title: "Apprentissage", desc: "La technologie évolue constamment. Nous faisons de l'apprentissage continu une culture." },
            { icon: "handshake", title: "Excellence", desc: "Nous recherchons la qualité, la rigueur et le professionnalisme dans nos projets et nos actions." },
            { icon: "shield_person", title: "Engagement africain", desc: "Nous croyons au potentiel des talents africains et à leur capacité à créer des solutions pour l'Afrique et pour le monde." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="group relative flex min-h-65 flex-col items-center justify-center gap-4 border-b border-r border-zinc-200 bg-white px-6 py-8 text-center sm:px-8 transition-colors duration-300 hover:bg-[#fd800a]/2"
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 18px 35px rgba(17, 17, 17, 0.08)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              {/* Barre orange décorative (apparaît au survol en haut de la carte) */}
              <span className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-[#fd800a] transition-all duration-500 group-hover:w-16 rounded-full" />

              {/* Icône */}
              <motion.span
                className="material-symbols-rounded text-[44px] text-[#fd800a] transition-transform duration-300 group-hover:scale-110"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}
                whileHover={{ rotate: 6, scale: 1.12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {item.icon}
              </motion.span>

              {/* Titre */}
              <h4 className="max-w-xs text-lg font-bold leading-snug text-[#111111] sm:text-xl">
                {item.title}
              </h4>

              {/* Description */}
              <p className="max-w-xs text-sm leading-relaxed text-zinc-600 sm:text-[15px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}