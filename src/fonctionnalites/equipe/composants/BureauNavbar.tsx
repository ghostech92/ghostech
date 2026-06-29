import React from "react";
import Link from "next/link";

interface BureauNavbarProps {
  activeSection?: "bureau" | "evenementiels" | "poles";
}

export default function BureauNavbar({ activeSection = "bureau" }: BureauNavbarProps) {
  return (
    <header className="w-full max-w-6xl h-20 px-6 flex items-center justify-between border-b border-gray-50 relative z-20">
      <div className="flex items-center gap-2 font-bold text-[#357dab] text-sm tracking-wider">
        <span className="material-symbols-outlined text-[#357dab]">terminal</span>
        GHOSTECH
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
        <Link 
          href="/equipe/bureau" 
          className={`${activeSection === "bureau" ? "text-black font-semibold border-b-2 border-[#357dab] pb-1" : "hover:text-black transition"}`}
        >
          Bureau Exécutif
        </Link>
        <Link 
          href="/equipe/bureau/evenementiels" 
          className={`${activeSection === "evenementiels" ? "text-black font-semibold border-b-2 border-[#357dab] pb-1" : "hover:text-black transition"}`}
        >
          Événementiels
        </Link>
        <Link 
          href="/equipe/bureau/poles" 
          className={`${activeSection === "poles" ? "text-black font-semibold border-b-2 border-[#357dab] pb-1" : "hover:text-black transition"}`}
        >
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
  );
}
