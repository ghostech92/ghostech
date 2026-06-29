import React from "react";

export default function BureauFooter() {
  return (
    <footer className="w-full max-w-5xl border-t border-gray-100 mt-16 py-8 px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 relative z-20">
      <div className="flex flex-col">
        <span className="font-bold text-[10px] text-gray-400 tracking-wider uppercase">NEWSLETTER</span>
        <span className="text-gray-400 text-[11px]">Inscrivez-vous pour les mises à jour</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="hover:text-black cursor-pointer transition">Accueil</span>
        <span className="hover:text-black cursor-pointer transition">À propos</span>
      </div>
      {/* Social Icons */}
      <div className="flex items-center gap-3 text-gray-400 text-sm">
        <span className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">f</span>
        <span className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">t</span>
        <span className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">i</span>
        <span className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">m</span>
      </div>
      {/* Formulaire Mini */}
      <div className="flex items-center gap-2">
        <input type="text" placeholder="Votre email" className="border border-gray-200 rounded px-2 py-1 text-[11px] outline-none w-36 bg-gray-50 focus:border-[#357dab] transition-colors" />
        <button className="bg-[#357dab] text-white px-3 py-1 rounded text-[11px] font-semibold hover:bg-[#286084] transition">
          S'abonner
        </button>
      </div>
    </footer>
  );
}
