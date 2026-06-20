"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Partenaires from "@/components/Partenaires";

export default function BureauPoles() {
  const leaders = [
    {
      id: 1,
      name: "Ethan Bokamé",
      role: "Responsable Développement Web & Mobile",
      department: "Pôle 1",
      bio: "Construit des applications innovantes et performantes. Supervise le développement technique des projets Ghostech.",
      avatar: "/menbre/Ethan_Bokamé.png",
      linkedin: "#",
      email: "ethan.bokame@ghostech.ci",
      phone: "+225 00 00 00 00 08"
    },
    {
      id: 2,
      name: "Brim Ange Flora",
      role: "Responsable Data & Intelligence Artificielle",
      department: "Pôle 2",
      bio: "Analyse les données et conçoit des modèles prédictifs intelligents. Pilote les initiatives liées à l'IA.",
      avatar: "/menbre/Brim_Ange_Flora .jpeg",
      linkedin: "#",
      email: "ange.brim@ghostech.ci",
      phone: "+225 00 00 00 00 09"
    },
    {
      id: 3,
      name: "Bradley Bilson",
      role: "Responsable Réseaux & Télécommunications",
      department: "Pôle 3",
      bio: "Assure la connectivité et la robustesse de l'infrastructure réseau. Gère les systèmes de communication.",
      avatar: "/menbre/placeholder.png",
      linkedin: "#",
      email: "bradley.bilson@ghostech.ci",
      phone: "+225 00 00 00 00 10"
    },
    {
      id: 4,
      name: "Yaniss Elie Sey",
      role: "Responsable Cybersécurité",
      department: "Pôle 4",
      bio: "Protège les systèmes d'information et forme l'équipe aux bonnes pratiques de sécurité et d'audit.",
      avatar: "/menbre/Yaniss_Elie_Sey.jpeg",
      linkedin: "#",
      email: "yaniss.elie@ghostech.ci",
      phone: "+225 00 00 00 00 11"
    },
    {
      id: 5,
      name: "Adjé Ange",
      role: "Responsable Design Graphique & UI/UX (Intérim)",
      department: "Pôle 5",
      bio: "Garantit l'ergonomie, l'esthétique et la cohérence de l'identité visuelle de toutes les solutions Ghostech.",
      avatar: "/menbre/Ange_Adje.jpeg",
      linkedin: "#",
      email: "adje.ange@ghostech.ci",
      phone: "+225 00 00 00 00 12"
    },
    {
      id: 6,
      name: "Jérémie Harding",
      role: "Responsable Robotique & IoT",
      department: "Pôle 6",
      bio: "Connecte le monde physique au numérique à travers la conception de systèmes embarqués et d'objets connectés.",
      avatar: "/menbre/JÉRÉMIE_HARDING.jpeg",
      linkedin: "#",
      email: "jeremie.harding@ghostech.ci",
      phone: "+225 00 00 00 00 13"
    },
    {
      id: 7,
      name: "À définir",
      role: "Responsable Entrepreneuriat Tech & Innovation",
      department: "Pôle 7 & 8",
      bio: "Stimule la création de startups et l'esprit entrepreneurial (En Partenariat avec AIESEC CI / AfroLink).",
      avatar: "/menbre/placeholder.png",
      linkedin: "#",
      email: "entrepreneuriat@ghostech.ci",
      phone: "+225 00 00 00 00 14"
    }
  ];

  return (
    <main className="w-full min-h-screen bg-gray-50 text-[#0F2137] flex flex-col items-center overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative w-full bg-[#002C33] pt-40 pb-28 px-4 sm:px-8 lg:px-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 20% 30%, #357dab 0%, transparent 70%)"
          }}
        />

        <div className="relative z-10 max-w-[1050px] mx-auto text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-bold text-[#357dab] bg-[#357dab]/10 px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 backdrop-blur-md border border-[#357dab]/20"
          >
            L'Expertise Technique
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-b612"
          >
            Pôles Techniques
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto text-[16px] md:text-lg leading-relaxed"
          >
            8 pôles d'expertise au cœur de l'organisation Ghostech. Rencontrez les responsables qui encadrent nos différentes cellules de spécialité.
          </motion.p>
        </div>
      </section>

      {/* SECTION PRINCIPALE */}
      <section className="w-full max-w-6xl px-4 py-16 text-center">

        {/* GRILLE DES CARTES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left mb-20 justify-center">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo de profil */}
                <div className="w-full aspect-square rounded-xl bg-gray-100 overflow-hidden mb-5">
                  <img
                    src={leader.avatar}
                    alt={leader.name}
                    className="w-full h-full object-cover filter transition duration-300"
                    onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/400/eeeeee/999999?text=G' }}
                  />
                </div>

                {/* Badges & Noms */}
                <span className="text-[11px] font-bold text-[#357dab] bg-[#E6F2F2] px-2.5 py-1 rounded-md uppercase tracking-wider block w-max mb-3">
                  {leader.department}
                </span>
                <h4 className="text-lg font-bold text-[#02073E] mb-1">
                  {leader.name}
                </h4>
                <p className="text-xs font-semibold text-gray-400 mb-4">
                  {leader.role}
                </p>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  {leader.bio}
                </p>
              </div>

              {/* Coordonnées & Réseaux */}
              <div className="border-t border-gray-100 pt-4 flex flex-col gap-2 mt-auto">
                {leader.email && (
                  <a href={`mailto:${leader.email}`} className="text-sm text-gray-500 hover:text-[#357dab] transition flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                    {leader.email}
                  </a>
                )}
                {leader.phone && (
                  <a href={`tel:${leader.phone}`} className="text-sm text-gray-500 hover:text-[#357dab] transition flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">phone</span>
                    {leader.phone}
                  </a>
                )}
                {leader.linkedin && (
                  <a href={leader.linkedin} target="_blank" rel="noreferrer" className="text-sm font-medium text-[#357dab] hover:text-[#02073E] transition flex items-center gap-2 mt-1">
                    <span className="material-symbols-outlined text-[18px]">link</span>
                    Profil LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <Partenaires/>

        {/* APPEL À L'ACTION INTERNE */}
        <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto text-center border border-gray-100 shadow-sm mt-16">
          <h4 className="text-xl font-bold text-[#02073E] mb-2">Tu veux rejoindre l'aventure ?</h4>
          <p className="text-gray-500 text-[14px] mb-6 max-w-lg mx-auto">
            Que tu sois développeur, designer, rédacteur ou simplement curieux, il y a toujours une place pour les passionnés.
          </p>
          <Link
            href="/equipe/rejoindre"
            className="inline-block bg-[#357dab] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#086666] transition shadow-md shadow-teal-700/10"
          >
            Candidature spontanée
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-7xl mt-auto py-12 border-t border-gray-100 text-center text-sm text-gray-400">
        Copyright 2026 Ghostech
      </footer>
    </main>
  );
}
