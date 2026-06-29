"use client";

import React from "react";
import BureauNavbar from "@/src/fonctionnalites/equipe/composants/BureauNavbar";
import BureauHero from "@/src/fonctionnalites/equipe/composants/BureauHero";
import MemberCard from "@/src/fonctionnalites/equipe/composants/MemberCard";
import BureauFooter from "@/src/fonctionnalites/equipe/composants/BureauFooter";
import { bureauMembers } from "@/src/donnees/equipeData";

export default function BureauEquipe() {
  const heroProps = {
    leftImages: [
      { src: "/menbre/CONVAUD_Kouassi_Othnie.jpeg", alt: "Vice-Président", className: "h-48" },
      { src: "/menbre/Emma_KOSSONOU.jpeg", alt: "Secrétaire Générale", className: "h-40" }
    ],
    centerImage: { src: "/menbre/Ange_Adje.jpeg", alt: "Président" },
    rightImages: [
      { src: "/menbre/Marie_Michelle_Diragbou.jpeg", alt: "Partenariats", className: "h-40" },
      { src: "/menbre/Assoumou_Marie_Josée.png", alt: "Trésorière", className: "h-48" }
    ],
    title: "Nouveau Bureau Ghostech",
    description: "Présentation des responsables du bureau exécutif et des pôles techniques. 8 pôles d'expertise • 1 vision commune.",
    linkText: "Découvrir l'équipe",
    linkHref: "#membres"
  };

  return (
    <main className="w-full min-h-screen bg-white text-[#0F2137] flex flex-col items-center antialiased font-sans relative overflow-x-hidden">
      {/* Background Stylized Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#357dab]/4 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#357dab]/4 blur-[120px] pointer-events-none z-0" />

      <BureauNavbar activeSection="bureau" />
      
      <BureauHero {...heroProps} />

      {/* SECTION: BUREAU EXÉCUTIF */}
      <section id="membres" className="w-full max-w-5xl px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-[#0F2137] mb-2">Bureau Exécutif</h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto">
            L'équipe de direction qui pilote la vision Ghostech et coordonne l'ensemble des activités.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {bureauMembers.map((item) => (
            <MemberCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <BureauFooter />
    </main>
  );
}