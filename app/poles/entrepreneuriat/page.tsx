"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Partenaires from "@/components/Partenaires";

export default function EntrepreneuriatPage() {
  const [activeTab, setActiveTab] = useState<"missions" | "projets">("missions");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const initiatives = [
    {
      id: 1,
      title: "Programme d'Incubation 'Tech-to-Market'",
      duration: "6 mois",
      desc: "Un programme immersif de 6 mois pour transformer ton concept en un Produit Minimum Viable (MVP). Nous t'aidons à valider ton modèle économique et à conquérir ton premier marché.",
      focus: "Business Model & MVP",
      icon: "rocket_launch",
      image: "/Galeries/img4.jpg"
    },
    {
      id: 2,
      title: "Ghostech Pitch Day",
      duration: "Événement Annuel",
      desc: "Le sommet annuel où nos startups incubées présentent leurs solutions technologiques devant un panel exclusif d'investisseurs, de business angels et de partenaires stratégiques.",
      focus: "Financement & Réseau",
      icon: "campaign",
      image: "/Galeries/img5.jpeg"
    },
    {
      id: 3,
      title: "Mentorat d'Affaires",
      duration: "Continu",
      desc: "Bénéficie d'un suivi personnalisé par des entrepreneurs chevronnés et des experts de la tech. Un accompagnement sur-mesure pour surmonter les défis juridiques, techniques et commerciaux.",
      focus: "Conseil Stratégique",
      icon: "handshake",
      image: "/Galeries/img6.jpeg"
    }
  ];

  const startupsIncubees = [
    {
      id: 1,
      name: "AgroSpatial Tech",
      status: "Phase d'incubation",
      desc: "Plateforme innovante exploitant les données satellitaires et l'IA pour fournir des analyses géospatiales prédictives aux coopératives agricoles ivoiriennes.",
      badge: "Agritech",
      icon: "agriculture"
    },
    {
      id: 2,
      name: "QbLog Solutions",
      status: "MVP Validé",
      desc: "Solution SaaS de gestion de la communication et de la logistique interne, pensée pour digitaliser et optimiser les processus des établissements d'enseignement supérieur.",
      badge: "SaaS / EdTech",
      icon: "cloud_done"
    }
  ];

  return (
    <main className="w-full min-h-screen bg-white text-[#0F2137] flex flex-col items-center overflow-hidden">

      {/* ============================================================ */}
      {/* HERO SECTION (2 COLONNES) */}
      {/* ============================================================ */}
      <section className="w-full bg-white pt-32 pb-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1050px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* COLONNE TEXTE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111] leading-[1.2] mb-6 font-b612">
              Donnez vie à <br /> votre innovation tech
            </h1>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              Transformez votre idée en une startup technologique viable. Le pôle Entrepreneuriat de GHOSTECH vous accompagne de la conception au lancement, avec des ressources pointues, du mentorat de qualité et un écosystème conçu pour les bâtisseurs ambitieux.
            </p>

            {/* BOUTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#discutons"
                className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-[#21C55E] text-white font-bold text-[15px] hover:bg-[#1CA84F] transition-colors flex items-center justify-center gap-2"
              >
                Discutons-en
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
              </a>
              <a
                href="/brochure.pdf"
                className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-transparent text-[#111] font-bold text-[15px] border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                Télécharger la brochure
              </a>
            </div>

            {/* METADATA */}
            <div className="flex flex-col gap-4 text-sm font-semibold text-[#111]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-rounded font-light text-gray-500 text-[20px]">schedule</span>
                Incubation sur 6 mois
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-rounded font-light text-gray-500 text-[20px]">sentiment_satisfied</span>
                Mentorat par des experts
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-rounded font-light text-gray-500 text-[20px]">flag</span>
                Accès au réseau d'investisseurs
              </div>
            </div>

          </motion.div>

          {/* COLONNE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center w-full"
          >
            <div className="relative w-[80%] sm:w-[70%] lg:w-[80%] max-w-[450px] aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/Galeries/img3.jpg"
                alt="Person working on laptop"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* PARTENAIRES SECTION */}
      {/* ============================================================ */}
      <Partenaires />

      {/* ============================================================ */}
      {/* SECTION PRINCIPALE */}
      {/* ============================================================ */}
      <div className="w-full bg-white flex flex-col items-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none select-none z-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.08}px)`,
            background: "radial-gradient(circle at 20% 30%, #357dab 0%, transparent 70%)",
          }}
        />
        <section
          id="programmes"
          className="w-full max-w-6xl mx-auto px-4 pb-20 text-center relative z-10"
        >
          {/* SELECTEUR DE COMMUTATION */}
          <div className="flex justify-center border-b border-gray-100 max-w-md mx-auto mb-16">
            <button
              onClick={() => setActiveTab("missions")}
              className={`flex-1 pb-4 text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === "missions"
                ? "text-[#e49834] border-b-2 border-[#e49834]"
                : "text-gray-400 hover:text-gray-600"
                }`}
            >
              <span className="material-symbols-rounded text-[18px]">lightbulb</span>
              Nos Accompagnements
            </button>
            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="flex-1 pb-4 text-sm font-bold flex items-center justify-center gap-2 text-gray-300 cursor-not-allowed"
            >
              <span className="material-symbols-rounded text-[18px] opacity-50">rocket_launch</span>
              Startups & Projets
              <span className="text-[10px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full ml-1 uppercase tracking-wider border border-gray-200">Bientôt</span>
            </button>
          </div>

          {/* AFFICHAGE CONDITIONNEL */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === "missions" ? (
              <div className="flex flex-col gap-16 max-w-5xl mx-auto text-left">
                {initiatives.map((item, index) => (
                  <div key={item.id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                    {/* COLONNE TEXTE */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="material-symbols-rounded text-[#e49834] bg-orange-50 p-2.5 rounded-xl">
                          {item.icon}
                        </span>
                        <span className="text-xs font-bold text-[#e49834] uppercase tracking-wider bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100">
                          {item.focus}
                        </span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-[#02073E] font-b612 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 font-medium pt-4">
                        <span className="material-symbols-rounded text-[20px] text-gray-400">schedule</span>
                        Rythme : {item.duration}
                      </div>
                    </div>

                    {/* COLONNE IMAGE */}
                    <div className="flex-1 w-full">
                      <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                {startupsIncubees.map((startup) => (
                  <div key={startup.id} className="bg-white border border-gray-100 hover:border-[#e49834]/30 transition-colors rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between group">
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <span className="flex items-center gap-1.5 bg-teal-50 text-[#357dab] text-xs px-2.5 py-1 rounded-md font-semibold">
                          <span className="material-symbols-rounded text-[14px]">{startup.icon}</span>
                          {startup.badge}
                        </span>
                        <span className="text-xs text-[#e49834] font-medium bg-amber-50 px-2 py-0.5 rounded">
                          {startup.status}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-[#02073E] mb-2 font-b612 group-hover:text-[#e49834] transition-colors">
                        {startup.name}
                      </h4>
                      <p className="text-gray-500 text-[14px] leading-relaxed">
                        {startup.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </section>
      </div>

      {/* ============================================================ */}
      {/* POURQUOI GHOSTECH SECTION */}
      {/* ============================================================ */}
      <section className="w-full bg-white px-3 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1400px] w-full mx-auto bg-[#9D52FD] rounded-[2rem] p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center shadow-xl"
        >
          {/* Left Column */}
          <div className="flex flex-col items-start text-left text-white md:col-span-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold leading-[1.2] mb-4 font-b612">
              Pourquoi choisir l'incubateur GHOSTECH ?
            </h2>
            <p className="text-white/90 text-sm sm:text-base mb-6 leading-relaxed max-w-lg">
              Rejoignez un écosystème d'innovation technologique de premier plan en Côte d'Ivoire. Nous mettons à votre disposition les ressources, la technologie et le réseau nécessaires pour bâtir la licorne de demain.
            </p>
            <a href="/brochure.pdf" className="bg-[#FEFCF8] text-[#111] font-bold text-[14px] px-6 py-3 rounded-md hover:bg-white hover:shadow-lg transition-all flex items-center gap-2">
              Télécharger la brochure <span className="material-symbols-rounded text-[18px]">arrow_downward</span>
            </a>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 text-white md:col-span-2 md:pl-8">
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold font-b612 mb-2">#1</span>
              <p className="text-white/90 text-sm sm:text-[15px] leading-relaxed">
                Hub d'incubation technologique pour l'innovation à Abidjan
              </p>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold font-b612 mb-2">70%</span>
              <p className="text-white/90 text-sm sm:text-[15px] leading-relaxed">
                Taux de validation de MVP pour nos startups en moins de 6 mois
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 pb-80 text-center">
        {/* VALEURS AJOUTÉES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-gray-100 pt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-[#02073E] mb-12">Pourquoi associer business et technologie ?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 text-left mt-8">
            <div className="relative bg-[#0A2E35]/90 border border-teal-950/50 rounded-xl p-7 pt-10 flex flex-col shadow-xl backdrop-blur-sm">
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-[#10383F] border-2 border-[#0A2E35] flex items-center justify-center shadow-md">
                <span className="material-symbols-rounded text-[#e49834]">monitoring</span>
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-white mb-4 leading-snug">Viabilité Économique</h3>
                <p className="text-[13px] text-gray-300 leading-relaxed font-light text-justify opacity-85">
                  Maîtrisez les modèles économiques de la tech. De l'optimisation des coûts d'infrastructure cloud à la monétisation de votre solution SaaS, assurez la rentabilité de votre projet.
                </p>
              </div>
            </div>

            <div className="relative bg-[#0A2E35]/90 border border-teal-950/50 rounded-xl p-7 pt-10 flex flex-col shadow-xl backdrop-blur-sm">
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-[#10383F] border-2 border-[#0A2E35] flex items-center justify-center shadow-md">
                <span className="material-symbols-rounded text-[#e49834]">public</span>
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-white mb-4 leading-snug">Souveraineté et Impact Local</h3>
                <p className="text-[13px] text-gray-300 leading-relaxed font-light text-justify opacity-85">
                  Concevez des solutions pensées pour l'Afrique. Résolvez des défis locaux par la technologie tout en créant de la valeur au cœur de la transition numérique ivoirienne.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </section>
    </main>
  );
}