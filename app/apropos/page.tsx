"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, Shield, Terminal, Users } from "lucide-react";
import Partenaires from "@/src/composants/communs/Partenaires";

export default function AProposPage() {
  return (
    <main className="min-h-dvh bg-white text-gray-900 font-sans antialiased pt-24 sm:pt-28 pb-20">
      
      {/* 1. HERO ÉDITORIAL STYLE JOURNAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
        <div className="border-b border-gray-200 pb-12 sm:pb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#fd800a]"></span>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#fd800a]">
              Manifeste & Histoire
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#02073E] tracking-tight font-b612 leading-[1.08] max-w-4xl mb-6">
            Pionniers de la transformation numérique des talents africains.
          </h1>

          <p className="text-base sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Ghostech est une organisation d'innovation technologique africaine créée pour révéler, connecter et propulser les bâtisseurs de solutions de demain.
          </p>
        </div>

        {/* 2. GRILLE SPLIT HISTOIRE & VISUEL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-12 sm:pt-16">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-b612 leading-tight">
              Notre Mission : Transformer le potentiel en impact mesurable
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              En Afrique, des millions de jeunes talents possèdent une passion dévorante pour le numérique. Mais l'accès à un encadrement d'excellence, des infrastructures d'apprentissage et des réseaux professionnels concrets demeure un défi majeur.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Ghostech comble ce fossé à travers une pédagogie par projet, des championnats immersifs comme <strong className="text-gray-900">DevArena</strong>, et sept pôles de spécialisation allant de l'intelligence artificielle à la cybersécurité.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-[#fd800a] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm text-gray-900">Excellence Pratique</p>
                  <p className="text-xs text-gray-500 mt-0.5">Apprentissage par cas réels et revues de code rigoureuses.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-[#357dab] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm text-gray-900">Ancrage Panafricain</p>
                  <p className="text-xs text-gray-500 mt-0.5">Créer des technologies conçues pour nos réalités et nos marchés.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/Galeries/img_1.png"
                alt="Talents technologiques Ghostech"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. TROIS DIMENSIONS FONDAMENTALES (STYLE ÉDITORIAL 3 COLONNES) */}
      <section className="w-full bg-[#02073E] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#fd800a]">
              Nos 3 Piliers d'Action
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-b612 mt-2">
              Construire. Impacter. Conquérir.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#fd800a]/20 text-[#fd800a] flex items-center justify-center font-black text-xl">
                01
              </div>
              <h3 className="text-xl font-bold text-white">Développer les Talents</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Des programmes immersifs en développement logiciel, cybersécurité, IA et cloud computing pour former des ingénieurs compétitifs à l'échelle mondiale.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#357dab]/20 text-[#357dab] flex items-center justify-center font-black text-xl">
                02
              </div>
              <h3 className="text-xl font-bold text-white">Construire des Solutions</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Des hackathons et ateliers intensifs pour transformer des idées novatrices en prototypes fonctionnels et en produits scalables.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xl">
                03
              </div>
              <h3 className="text-xl font-bold text-white">Créer de l’Impact</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connecter nos talents aux entreprises, institutions et investisseurs pour catalyser l'emploi des jeunes et l'essor économique du continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. APPEL À L'ACTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center space-y-6">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#02073E] font-b612">
          Rejoignez l'organisation technologique
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Que vous soyez étudiant, développeur, designer, entreprise ou mentor, participez à l'édification de l'écosystème numérique africain.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Link
            href="/equipe/rejoindre"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#fd800a] text-white font-bold rounded-full hover:bg-[#e06e00] transition-colors shadow-md text-sm"
          >
            <span>Devenir Membre</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-100 text-gray-800 font-bold rounded-full hover:bg-gray-200 transition-colors text-sm"
          >
            Nous Contacter
          </Link>
        </div>
      </section>

      <Partenaires />
    </main>
  );
}
