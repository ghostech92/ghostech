"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function EvenementielsEquipe() {
  const members = [
    {
      id: 1,
      name: "Ange Brim",
      role: "RESPONSABLE ÉVÉNEMENTIEL",
      avatar: "/menbre/Brim_Ange_Flora .jpeg",
      label: "Événementiel",
      email: "ange.brim@ghostech.org",
      phone: "+225 07 06 07 08 09",
      linkedin: "https://linkedin.com/in/ange-brim",
      github: "https://github.com/ange-brim"
    },
    {
      id: 2,
      name: "Ethan Bokamé",
      role: "RESPONSABLE ÉVÉNEMENTIEL",
      avatar: "/menbre/Ethan_Bokamé.png",
      label: "Événementiel",
      email: "ethan.bokame@ghostech.org",
      phone: "+225 07 07 08 09 10",
      linkedin: "https://linkedin.com/in/ethan-bokame",
      github: "https://github.com/ethan-bokame"
    },
  ];

  return (
    <main className="w-full min-h-screen bg-white text-[#0F2137] flex flex-col items-center antialiased font-sans relative overflow-x-hidden">
      
      {/* Background Stylized Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#357dab]/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#357dab]/4 blur-[120px] pointer-events-none" />

      {/* NAVBAR */}
      <header className="w-full max-w-6xl h-20 px-6 flex items-center justify-between border-b border-gray-50">
        <div className="flex items-center gap-2 font-bold text-[#357dab] text-sm tracking-wider">
          <span className="material-symbols-outlined text-[#357dab]">terminal</span>
          GHOSTECH
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/equipe/bureau" className="hover:text-black transition">
            Bureau Exécutif
          </Link>
          <Link href="/equipe/bureau/evenementiels" className="text-black font-semibold border-b-2 border-[#357dab] pb-1">
            Événementiels
          </Link>
          <Link href="/equipe/bureau/poles" className="hover:text-black transition">
            Pôles Techniques
          </Link>
        </nav>
        <div className="flex items-center gap-4 text-sm font-medium">
          <button className="p-2 text-gray-500 hover:text-black">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>
          <button className="p-2 text-gray-500 hover:text-black mr-2">
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
          </button>
          <Link href="#" className="text-gray-700 hover:text-black transition">S'inscrire</Link>
          <Link href="#" className="bg-[#357dab] text-white px-4 py-1.5 rounded text-xs font-semibold hover:bg-[#286084] transition">
            Connexion
          </Link>
        </div>
      </header>

      {/* HERO HERO COMPOSITE GRID */}
      <section className="w-full max-w-6xl px-4 py-8">
        <div className="grid grid-cols-12 gap-4">
          
          {/* Bloc Gauche - 2 photos verticales */}
          <div className="col-span-3 flex flex-col gap-4">
            <div className="h-48 rounded-xl overflow-hidden bg-gray-100 relative">
              <img src="/menbre/CONVAUD_Kouassi_Othnie.jpeg" alt="Vice-Président" className="w-full h-full object-cover" />
            </div>
            <div className="h-40 rounded-xl overflow-hidden bg-gray-100 relative">
              <img src="/menbre/Emma_KOSSONOU.jpeg" alt="Secrétaire Générale" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Bloc Centre - Grande image Principale avec le Texte Overlay */}
          <div className="col-span-6 relative rounded-xl overflow-hidden h-[368px] bg-gray-200">
            <img src="/menbre/Brim_Ange_Flora .jpeg" alt="Événementiel" className="w-full h-full object-cover" />
            
            {/* Boite de texte Noire semi-transparente flottante comme sur l'image */}
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center p-6">
              <div className="bg-black/70 backdrop-blur-sm text-white p-8 rounded-xl max-w-md text-center border border-white/10">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#357dab] block mb-2">
                  CONSTRUIRE. IMPACTER. CONQUÉRIR.
                </span>
                <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                  Responsables Événementiels
                </h1>
                <p className="text-xs text-gray-300 mb-6">
                  Une organisation en binôme pour couvrir l'ensemble des temps forts Ghostech tout au long de l'année.
                </p>
                <Link href="#membres" className="bg-[#357dab] text-white text-[11px] font-bold px-5 py-2 rounded uppercase tracking-wider hover:bg-[#286084] transition mx-auto inline-block">
                  Découvrir l'équipe
                </Link>
              </div>
            </div>
          </div>

          {/* Bloc Droite - 2 photos verticales */}
          <div className="col-span-3 flex flex-col gap-4">
            <div className="h-40 rounded-xl overflow-hidden bg-gray-100 relative">
              <img src="/menbre/Marie_Michelle_Diragbou.jpeg" alt="Partenariats" className="w-full h-full object-cover" />
            </div>
            <div className="h-48 rounded-xl overflow-hidden bg-gray-100 relative">
              <img src="/menbre/Assoumou_Marie_Josée.png" alt="Trésorière" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Petits points de carrousel sous le hero */}
        <div className="flex justify-center gap-1.5 mt-6">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#357dab]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
        </div>
      </section>

      {/* SECTION: RESPONSABLES ÉVÉNEMENTIELS */}
      <section id="membres" className="w-full max-w-5xl px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-[#0F2137] mb-2">Responsables Événementiels</h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto">
            Hackathons • Ateliers • Formations • Bootcamps • Sorties détente
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {members.map((item) => (
            <CardLayout key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* FOOTER MINI BANNER (NEWSLETTER) */}
      <footer className="w-full max-w-5xl border-t border-gray-100 mt-16 py-8 px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <div className="flex flex-col">
          <span className="font-bold text-[10px] text-gray-400 tracking-wider uppercase">NEWSLETTER</span>
          <span className="text-gray-400 text-[11px]">Inscrivez-vous pour les mises à jour</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hover:text-black cursor-pointer">Accueil</span>
          <span className="hover:text-black cursor-pointer">À propos</span>
        </div>
        {/* Social Icons */}
        <div className="flex items-center gap-3 text-gray-400 text-sm">
          <span className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100">f</span>
          <span className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100">t</span>
          <span className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100">i</span>
          <span className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100">m</span>
        </div>
        {/* Formulaire Mini */}
        <div className="flex items-center gap-2">
          <input type="text" placeholder="Votre email" className="border border-gray-200 rounded px-2 py-1 text-[11px] outline-none w-36 bg-gray-50" />
          <button className="bg-[#357dab] text-white px-3 py-1 rounded text-[11px] font-semibold hover:bg-[#286084] transition">
            S'abonner
          </button>
        </div>
      </footer>
    </main>
  );
}

{/* COMPOSANT INTERNE DE LA CARTE DE LA MAQUETTE AVEC COORDONNÉES */}
function CardLayout({ item }: { item: any }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between relative transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
      <div>
        {/* Image Profil Carrée avec Coins Légèrement Arrondis */}
        <div className="w-full aspect-square rounded-lg bg-gray-50 overflow-hidden mb-4 relative">
          <img src={item.avatar} alt={item.name} className="w-full h-full object-cover object-top" />
        </div>

        {/* Titres & Rôles */}
        <h4 className="text-base font-bold text-[#0F2137] mb-1">{item.name}</h4>
        {Array.isArray(item.role) ? (
          <div className="flex flex-col gap-1 mb-4">
            {item.role.map((r: string, index: number) => (
              <p key={index} className="text-xs text-[#357dab] font-semibold uppercase tracking-wider">{r}</p>
            ))}
          </div>
        ) : (
          <p className="text-xs text-[#357dab] font-semibold uppercase tracking-wider mb-4">{item.role}</p>
        )}
      </div>

      {/* Pied de carte avec les coordonnées de la personne */}
      <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
        <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">{item.label}</span>
        
        {/* Coordonnées / Social Links */}
        <div className="flex items-center gap-2">
          {item.phone && (
            <a href={`tel:${item.phone}`} title="Téléphone" className="w-8 h-8 rounded-full bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-500 flex items-center justify-center transition-all duration-200">
              <span className="material-symbols-outlined text-[16px]">call</span>
            </a>
          )}
          {item.email && (
            <a href={`mailto:${item.email}`} title="Email" className="w-8 h-8 rounded-full bg-gray-50 hover:bg-blue-50 hover:text-[#357dab] text-gray-500 flex items-center justify-center transition-all duration-200">
              <span className="material-symbols-outlined text-[16px]">mail</span>
            </a>
          )}
          {item.linkedin && (
            <a href={item.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="w-8 h-8 rounded-full bg-gray-50 hover:bg-blue-50 hover:text-blue-600 text-gray-500 flex items-center justify-center transition-all duration-200">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .58 1 1.42v4.7h2.8M6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.13H5v8.37h3z" />
              </svg>
            </a>
          )}
          {item.github && (
            <a href={item.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 hover:text-black text-gray-500 flex items-center justify-center transition-all duration-200">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
