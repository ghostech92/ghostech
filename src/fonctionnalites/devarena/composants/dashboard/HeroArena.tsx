import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroArena() {
  return (
    <section className="relative bg-teal-600 border-b-[6px] border-teal-800 rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="space-y-4 max-w-md relative z-10 text-center md:text-left">
        <h2 className="text-3xl font-black tracking-tight leading-tight">
          Le Tournoi de Développement Ghostech !
        </h2>
        <p className="text-xs font-bold opacity-90 leading-relaxed">
          Forme ton duo, développe un MVP innovant en 1 semaine et présente-le en direct devant le jury chaque samedi à 20h00. Survis aux 3 vagues pour remporter la victoire !
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
          <Link 
            href="/devarena/duo" 
            className="bg-white text-teal-700 border-b-4 border-gray-200 hover:bg-gray-50 font-black text-xs uppercase tracking-wider px-6 py-3 rounded-2xl active:border-b-0 active:translate-y-[4px] active:mb-[4px] transition-all duration-100 shadow-sm"
          >
            Voir les Duos
          </Link>
          <Link 
            href="/devarena/classement" 
            className="bg-[#58CC02] text-white border-b-4 border-[#46A302] hover:bg-[#61E002] font-black text-xs uppercase tracking-wider px-6 py-3 rounded-2xl active:border-b-0 active:translate-y-[4px] active:mb-[4px] transition-all duration-100 shadow-sm"
          >
            Voir le Classement
          </Link>
        </div>
      </div>

      <div className="relative w-full sm:w-64 h-40 rounded-2xl border-2 border-white/20 shadow-sm shrink-0 overflow-hidden">
        <Image
          src="/arena-icon/hero.jpg"
          alt="Ghostech Arena Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
