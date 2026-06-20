"use client";

import Link from "next/link";

export default function BureauEquipe() {
  const leaders = [
    {
      id: 1,
      name: "Jérémie Harding",
      role: "Président & Fondateur",
      department: "Direction Générale",
      bio: "Étudiant passionné de technologie à l'IUA. Leader visionnaire de Ghostech depuis sa création le 03 mars 2025.",
      avatar: "/menbre/JÉRÉMIE_HARDING.jpeg",
      linkedin: "#",
      github: "#"
    },
    {
      id: 2,
      name: "Maïmouna Soro",
      role: "Vice-Présidente & Secrétaire Générale",
      department: "Opérations & Partenariats",
      bio: "Garante du suivi des projets et des relations extérieures. Spécialisée en management des systèmes d'information.",
      avatar: "/menbre/Maïmouna_Soro.jpeg",
      linkedin: "#",
      github: null
    },
    {
      id: 3,
      name: "Ethan Bokamé",
      role: "Responsable Technique (CTO)",
      department: "Pôle Numérique",
      bio: "Développeur passionné d'Open Source. Supervise les infrastructures, les revues de code et le mentorat des membres.",
      avatar: "/menbre/Ethan_Bokamé.png",
      linkedin: "#",
      github: "#"
    },
    {
      id: 4,
      name: "Marie Michelle Diragbou",
      role: "Responsable Événementiel & Innovation",
      department: "Événements",
      bio: "En charge de l'organisation des hackathons, des bootcamps intensifs et de la logistique globale du club.",
      avatar: "/menbre/Marie_Michelle_Diragbou.jpeg",
      linkedin: "#",
      github: "#"
    }
  ];

  return (
    <main className="w-full min-h-screen bg-white text-[#0F2137] flex flex-col items-center">

      {/* SECTION PRINCIPALE */}
      <section className="w-full max-w-6xl px-4 py-8 text-center">
        <h3 className="text-sm font-bold text-[#357dab] uppercase tracking-widest mb-3">L'Équipe Dirigeante</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-[#02073E] mb-6 font-b612">
          Le Bureau Exécutif de Ghostech
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-[16px] leading-relaxed">
          Une équipe d'étudiants engagés à structurer, animer et propulser l'écosystème technologique au sein de l'IUA.
        </p>

        {/* GRILLE DES MEMBRES DU BUREAU */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-left mb-20">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                {/* Photo de profil */}
                <div className="w-full aspect-square rounded-xl bg-gray-50 overflow-hidden mb-5">
                  <img
                    src={leader.avatar}
                    alt={leader.name}
                    className="w-full h-full object-cover filter  transition duration-300"
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
                <p className="text-gray-500 text-[13px] leading-relaxed mb-6">
                  {leader.bio}
                </p>
              </div>

              {/* Réseaux Sociaux */}
              <div className="border-t border-gray-50 pt-4 flex gap-3 items-center">
                {leader.linkedin && (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-[#357dab] transition text-sm font-medium"
                  >
                    LinkedIn ↗
                  </a>
                )}
                {leader.github && (
                  <a
                    href={leader.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-[#02073E] transition text-sm font-medium"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* APPEL À L'ACTION INTERNE */}
        <div className="bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto text-center border border-gray-100">
          <h4 className="text-xl font-bold text-[#02073E] mb-2">Tu veux rejoindre l'aventure ?</h4>
          <p className="text-gray-500 text-[14px] mb-6 max-w-lg mx-auto">
            Que tu sois développeur, designer, rédacteur ou simplement curieux, il y a toujours une place pour les passionnés.
          </p>
          <Link
            href="/equipe/rejoindre"
            className="inline-block bg-[#357dab] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#086666] transition shadow-md shadow-teal-700/10"
          >
            Postuler aux recrutements
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-7xl mt-auto py-12 border-t border-gray-100 text-center text-sm text-gray-400">
        Copyright 2026 Ghostech, IUA
      </footer>
    </main>
  );
}