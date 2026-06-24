"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Partenaires from "@/components/Partenaires";

export default function BureauEquipe() {
  const leaders = [
    {
      id: 1,
      name: "Adjé Ange",
      role: "Président",
      department: "Direction",
      bio: "Garant de la vision globale de Ghostech. Dirige les orientations stratégiques du club.",
      avatar: "/menbre/Ange_Adje.jpeg",
      linkedin: "#",
      email: "president@ghostech.ci",
      phone: "+225 00 00 00 00 01"
    },
    {
      id: 2,
      name: "Convaud Kouassi Othniel",
      role: "Vice-Président",
      department: "Direction",
      bio: "Assiste le président dans ses fonctions et coordonne les opérations courantes.",
      avatar: "/menbre/CONVAUD_Kouassi_Othnie.jpeg",
      linkedin: "#",
      email: "vp@ghostech.ci",
      phone: "+225 00 00 00 00 02"
    },
    {
      id: 3,
      name: "Marie Michel",
      role: "Responsable Partenariats",
      department: "Partenariats",
      bio: "En charge de développer et de maintenir les relations avec nos partenaires et sponsors (AIESEC CI, AfroLink).",
      avatar: "/menbre/Marie_Michelle_Diragbou.jpeg",
      linkedin: "#",
      email: "partenariats@ghostech.ci",
      phone: "+225 00 00 00 00 03"
    },
    {
      id: 4,
      name: "Emma Kossonou",
      role: "Secrétaire Générale",
      department: "Administration",
      bio: "Assure le suivi administratif, la communication interne et la gestion documentaire de l'équipe.",
      avatar: "/menbre/Emma_KOSSONOU.jpeg",
      linkedin: "#",
      email: "secretariat@ghostech.ci",
      phone: "+225 00 00 00 00 04"
    },
    {
      id: 5,
      name: "Doukrou Eiffel",
      role: "Trésorier",
      department: "Finances",
      bio: "Gère les ressources financières et veille au bon fonctionnement budgétaire des activités.",
      avatar: "/menbre/Doukrou_Eiffel.png",
      linkedin: "#",
      email: "tresorerie@ghostech.ci",
      phone: "+225 00 00 00 00 05"
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
            L'Équipe Dirigeante
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-b612"
          >
            Bureau Exécutif
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto text-[16px] md:text-lg leading-relaxed"
          >
            L'équipe de direction qui pilote la vision Ghostech et propulse l'écosystème technologique. Construire. Impacter. Conquérir.
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

        <Partenaires />

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