"use client";

import React from "react";
import Link from "next/link";

interface BureauNavbarProps {
  activeSection?: "bureau" | "evenementiels" | "poles";
}

export default function BureauNavbar({ activeSection = "bureau" }: BureauNavbarProps) {
  return (
    <header className="w-full max-w-6xl px-4 sm:px-6 pt-4 pb-2 flex flex-col gap-3 border-b border-gray-100 relative z-20">
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-2 font-bold text-[#357dab] text-sm tracking-wider">
          <span className="material-symbols-outlined text-[#357dab]">terminal</span>
          <span>GHOSTECH BUREAU</span>
        </Link>

        <div className="flex items-center gap-3 text-xs sm:text-sm font-medium">
          <Link
            href="/login"
            className="text-gray-600 hover:text-black transition hidden sm:inline-block"
          >
            Connexion
          </Link>
          <Link
            href="/equipe/rejoindre"
            className="bg-[#357dab] text-white px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold hover:bg-[#286084] transition"
          >
            Rejoindre
          </Link>
        </div>
      </div>

      {/* Tabs de section responsive avec défilement horizontal sur mobile */}
      <nav className="flex items-center gap-2 sm:gap-6 text-xs sm:text-sm font-medium overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Link 
          href="/equipe/bureau" 
          className={`whitespace-nowrap px-3 py-1.5 rounded-lg transition-all ${
            activeSection === "bureau"
              ? "bg-[#357dab]/10 text-[#357dab] font-bold"
              : "text-gray-600 hover:text-black hover:bg-gray-50"
          }`}
        >
          Bureau Exécutif
        </Link>
        <Link 
          href="/equipe/bureau/evenementiels" 
          className={`whitespace-nowrap px-3 py-1.5 rounded-lg transition-all ${
            activeSection === "evenementiels"
              ? "bg-[#357dab]/10 text-[#357dab] font-bold"
              : "text-gray-600 hover:text-black hover:bg-gray-50"
          }`}
        >
          Événementiels
        </Link>
        <Link 
          href="/equipe/bureau/poles" 
          className={`whitespace-nowrap px-3 py-1.5 rounded-lg transition-all ${
            activeSection === "poles"
              ? "bg-[#357dab]/10 text-[#357dab] font-bold"
              : "text-gray-600 hover:text-black hover:bg-gray-50"
          }`}
        >
          Pôles Techniques
        </Link>
      </nav>
    </header>
  );
}
