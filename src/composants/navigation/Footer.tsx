"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedinIn, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  // Masquer le footer sur certaines pages
  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname.startsWith("/devarena")
  ) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappLink = "https://chat.whatsapp.com/Le6R6EvCKOR8I3kmQEd9XS";

  return (
    <footer className="w-full bg-[#0A0A0A] text-white relative overflow-hidden">
      
      {/* Effet d'arrière-plan discret */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.04]"
        style={{
          background: "radial-gradient(circle at 50% 0%, #fd800a 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 px-6 pt-6 pb-3">

        {/* ================= BLOC PRINCIPAL ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-6">
          
          {/* ---------- COLONNE GAUCHE : Logo + Description ---------- */}
          <div className="flex flex-col items-start">
            
            <Link href="/" className="inline-block mb-3">
              <img
                src="/logo1.svg"
                alt="Ghostech Logo"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>

            <p className="text-zinc-400 text-sm leading-[1.6] max-w-lg">
              Ghostech accompagne les talents et les organisations africaines dans leurs projets numériques, leur formation et leur innovation.
            </p>
          </div>

          {/* ---------- COLONNE DROITE : Bloc Newsletter ---------- */}
          <div className="bg-gradient-to-br from-[#fd800a] via-[#e06e00] to-[#c75a00] rounded-lg p-4 md:p-6 flex flex-col justify-center relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10">
              
              {/* Badge newsletter */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-white"></span>
                <span className="text-white text-[11px] font-bold tracking-[0.2em] uppercase">
                  Restez informé
                </span>
              </div>

              <h3 className="text-white text-xl md:text-2xl font-bold mb-2 leading-tight">
                Découvrez nos actualités
              </h3>

              <p className="text-white/85 text-sm mb-3 leading-relaxed max-w-md">
                Recevez nos dernières nouvelles, événements et opportunités directement dans votre boîte mail.
              </p>

              {/* Formulaire */}
              <form className="flex flex-col sm:flex-row items-stretch bg-[#1a1a1a] rounded-md overflow-hidden">
                <input
                  type="email"
                  placeholder="Email"
                  className="min-w-0 flex-1 bg-transparent px-3 py-3 text-white placeholder:text-zinc-500 outline-none text-sm"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#fd800a] hover:bg-[#e06e00] text-white font-bold px-4 py-3 transition-all text-sm uppercase tracking-wider whitespace-nowrap flex items-center justify-center gap-2"
                >
                  S'inscrire
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ================= LIGNE DE SÉPARATION ================= */}
        <div className="w-full h-[1px] bg-zinc-800 mb-6"></div>

        {/* ================= BLOC BAS : Réseaux + Contact ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          
          {/* Réseaux Sociaux (LinkedIn, TikTok, WhatsApp uniquement) */}
          <div className="flex items-center gap-3">
            <a
              href="https://lnkd.in/edXVXbH8"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center text-white hover:text-[#fd800a] hover:scale-105 transition-all duration-300"
            >
              <FaLinkedinIn className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://www.tiktok.com/@ghostech00"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="w-10 h-10 flex items-center justify-center text-white hover:text-[#fd800a] hover:scale-105 transition-all duration-300"
            >
              <FaTiktok className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 flex items-center justify-center text-white hover:text-[#fd800a] hover:scale-105 transition-all duration-300"
            >
              <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>

          {/* Téléphone */}
          <a href="tel:+2250556130245" className="flex flex-col">
            <span className="text-white text-sm font-semibold mb-0.5">Téléphone</span>
            <span className="text-zinc-400 text-sm">+225 05 56 13 02 45</span>
          </a>

          {/* E-mail */}
          <a href="mailto:ghostech92@gmail.com" className="flex flex-col">
            <span className="text-white text-sm font-semibold mb-0.5">E-mail</span>
            <span className="text-zinc-400 text-sm">ghostech92@gmail.com</span>
          </a>

          {/* Adresse */}
          <div className="flex flex-col">
            <span className="text-white text-sm font-semibold mb-0.5">Adresse</span>
            <span className="text-zinc-400 text-sm leading-snug">
              Abidjan,<br />Côte d'Ivoire
            </span>
          </div>
        </div>

        {/* ================= BARRE INFÉRIEURE ================= */}
        <div className="border-t border-zinc-900 mt-4 pt-3 flex flex-col md:flex-row justify-between items-center gap-2">
          
          <p className="text-zinc-600 text-xs md:text-sm text-center md:text-left">
            Ghostech © {new Date().getFullYear()} — Tous droits réservés
          </p>

          <Link
            href="/conditions-generales"
            className="text-zinc-400 text-xs hover:text-[#fd800a] transition-colors"
          >
            Conditions générales d&apos;utilisation
          </Link>

          <button
            onClick={scrollToTop}
            aria-label="Remonter en haut"
            className="group w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#fd800a] hover:border-[#fd800a] transition-all duration-300"
          >
            <span className="material-symbols-rounded text-xl group-hover:-translate-y-0.5 transition-transform">
              expand_less
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}