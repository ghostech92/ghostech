"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function MembresEquipe() {
  const membres = [
    {
      id: 1,
      name: "Ange Adjé",
      role: "Membre Ghostech",
      category: "dev",
      skills: ["Innovation", "Tech", "Stratégie"],
      description: "Expert en innovation technologique, Ange apporte sa vision globale pour orienter les choix stratégiques et architecturaux des projets.",
      avatar: "/menbre/Ange_Adje.jpeg"
    },
    {
      id: 2,
      name: "Brim Ange Flora",
      role: "Membre Ghostech",
      category: "design",
      skills: ["Design", "Créativité", "Product"],
      description: "Designer passionnée, Flora combine esthétisme et ergonomie pour concevoir des interfaces utilisateur mémorables et impactantes.",
      avatar: "/menbre/Brim_Ange_Flora .jpeg"
    },
    {
      id: 3,
      name: "Convaud Kouassi Othnie",
      role: "Membre Ghostech",
      category: "dev",
      skills: ["Développement", "Tech", "Architecture"],
      description: "Développeur chevronné, Othnie transforme des concepts complexes en solutions logicielles fiables et performantes.",
      avatar: "/menbre/CONVAUD_Kouassi_Othnie.jpeg"
    },
    {
      id: 4,
      name: "Doukrou Eiffel",
      role: "Membre Ghostech",
      category: "dev",
      skills: ["Développement", "Innovation", "Web"],
      description: "Spécialiste du développement et de l'innovation, Eiffel est toujours à la recherche des dernières technologies pour optimiser nos outils.",
      avatar: "/menbre/Doukrou_Eiffel.png"
    },
    {
      id: 5,
      name: "Emma Kossonou",
      role: "Membre Ghostech",
      category: "data",
      skills: ["Data", "Analyse", "Business"],
      description: "Data Analyst, Emma extrait des informations précieuses des données pour éclairer les décisions stratégiques de l'équipe.",
      avatar: "/menbre/Emma_KOSSONOU.jpeg"
    },
    {
      id: 6,
      name: "Ethan Bokamé",
      role: "Membre Ghostech",
      category: "dev",
      skills: ["Tech", "Développement", "Backend"],
      description: "Développeur polyvalent, Ethan assure la robustesse et la scalabilité du code au cœur des différents pôles de Ghostech.",
      avatar: "/menbre/Ethan_Bokamé.png"
    },
    {
      id: 7,
      name: "Helloïs Kouassi",
      role: "Membre Ghostech",
      category: "design",
      skills: ["UI/UX", "Design", "Ergonomie"],
      description: "Expert UI/UX, Helloïs place l'utilisateur au centre de ses réflexions pour garantir des parcours fluides et intuitifs.",
      avatar: "/menbre/Helloïs_KOUASSI.jpeg"
    },
    {
      id: 8,
      name: "Jérémie Harding",
      role: "Membre Ghostech",
      category: "dev",
      skills: ["Développement", "IA", "Cloud"],
      description: "Développeur créatif, Harding aime relever de nouveaux défis techniques en proposant des architectures innovantes.",
      avatar: "/menbre/JÉRÉMIE_HARDING.jpeg"
    },
    {
      id: 9,
      name: "Marie Michelle Diragbou",
      role: "Membre Ghostech",
      category: "design",
      skills: ["Créativité", "Design", "Branding"],
      description: "Créative dans l'âme, Marie Michelle insuffle une véritable identité visuelle et artistique dans chacun de nos projets.",
      avatar: "/menbre/Marie_Michelle_Diragbou.jpeg"
    },
    {
      id: 10,
      name: "Maïmouna Soro",
      role: "Membre Ghostech",
      category: "data",
      skills: ["Data", "Analyse", "Intelligence"],
      description: "Rigoureuse et analytique, Maïmouna manipule la donnée pour mettre en évidence les tendances clés et orienter nos stratégies.",
      avatar: "/menbre/Maïmouna_Soro.jpeg"
    },
    {
      id: 11,
      name: "Yaniss Elie Sey",
      role: "Membre Ghostech",
      category: "dev",
      skills: ["Tech", "Innovation", "Systèmes"],
      description: "Technophile et développeur passionné, Yaniss est constamment en veille sur les outils de pointe pour accélérer notre productivité.",
      avatar: "/menbre/Yaniss_Elie_Sey.jpeg"
    },
        {
      id: 12,
      name: "Bilson Emmanuel",
      role: "Membre Ghostech",
      category: "dev",
      skills: ["Reseau", "Cybersecurite"],
      description: "Reseau et Cybersecurite rien ne peut echaper a la vigilance de Bilson Emmanuel .",
      avatar: "/menbre/Bilson.jpeg"
    },
    {
      id: 13,
      name: "AYAHOUE Mawuflimi Élie"  ,
      role: "Membre Ghostech",
      category: "design",
      skills: ["Communication Digitale", "Infographie"],
      description: "Elie est un jeune passionné de design et de communication digitale, il s'intéresse particulièrement à la création de contenus visuels, à l'identité graphique et à la communication digitale .",
      avatar: "/menbre/AYAHOUE_Mawuflimi_Élie.png"
    },
    {
      id: 14,
      name: "Assoumou Marie Josée",
      role: "Membre Ghostech",
      category: "design",
      skills: ["Communication Digitale", "Infographie"],
      description: "Assoumou Marie Josée est une jeune passionnée de design et de communication digitale, elle s'intéresse particulièrement à la création de contenus visuels, à l'identité graphique et à la communication digitale .",
      avatar: "/menbre/Assoumou_Marie_Josée.png"
    },
  ];

  const [activeMember, setActiveMember] = useState(membres[0]);

  return (
    <main className="w-full min-h-screen bg-[#1c1c1c] pt-20 text-white flex flex-col items-center font-dm-sans">

      {/* HEADER SECTION (EXACTLY LIKE IMAGE) */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start pt-20 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto gap-10">
        <div className="shrink-0">
          <h1 className="text-4xl md:text-[56px] leading-none font-bold text-white tracking-tighter uppercase mb-2">
            L'EQUIPE GHOSTECH.
          </h1>
          <p className="text-sm text-gray-300 flex items-center gap-2">
            <span className="w-[18px] h-[18px] bg-white text-black inline-flex items-center justify-center rounded-[3px] text-[10px] font-bold">G</span>
            <span className="italic">innovation partners</span>
          </p>
        </div>

        <div className="lg:max-w-3xl text-gray-200 text-lg md:text-[22px] font-light leading-snug lg:text-left mt-2 lg:mt-0">
          <p>
            Derrière chaque système performant, chaque interface millimétrée et chaque modèle prédictif se cache un talent unique. Parcourez notre collectif pluridisciplinaire et rencontrez les visages qui font vibrer notre moteur d'innovation.
          </p>
        </div>
      </div>

      {/* TWO-COLUMN LAYOUT */}
      <section className="w-full max-w-[1600px] px-6 md:px-12 pb-48 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">

        {/* LEFT: INFO BOX */}
        <div className="w-full lg:w-[350px] xl:w-[400px] shrink-0 lg:sticky top-24">
          <div className="aspect-square border border-white/50 p-6 flex flex-col justify-between relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember?.id}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="flex flex-col h-full"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-[22px] font-normal text-white mb-0 leading-tight tracking-tight">{activeMember?.name}</h4>
                    <p className="text-[15px] text-gray-300 mt-1">{activeMember?.role}</p>
                  </div>
                  {/* Thumbnail in corner */}
                  <div className="w-[70px] h-[70px] shrink-0 overflow-hidden bg-[#444] ml-3">
                    <img src={activeMember?.avatar} alt={activeMember?.name} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6 text-[14px] text-gray-400 font-light leading-relaxed pr-4">
                  {activeMember?.description}
                </div>

                <div className="text-[13px] text-white uppercase tracking-widest mt-auto pt-6 leading-relaxed">
                  MADE IN GHOSTECH 2026<br />
                  INNOVATION INTELLIGENCE<br />
                  TECH CREATIVE
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT: PHOTOS GRID */}
        <div className="w-full flex-1 h-[500px] lg:h-[650px] xl:h-[750px] overflow-y-auto pr-2 lg:pr-4 pb-8 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/40">
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {membres.map((membre, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
                key={membre.id}
                onMouseEnter={() => setActiveMember(membre)}
                className="aspect-square relative overflow-hidden bg-[#444] cursor-pointer"
              >
                <img
                  src={membre.avatar}
                  alt={membre.name}
                  className={`w-full h-full object-cover transition-all duration-[600ms] ease-out ${activeMember?.id === membre.id
                      ? 'grayscale-0 opacity-100 scale-105'
                      : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100 scale-100'
                    }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}