"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Hide the footer on the login, register, and devarena pages
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

  return (
    <footer className="w-full relative">
      {/* Newsletter Section (Overlapping) */}
      <div className="absolute left-1/2 -top-24 sm:-top-32 transform -translate-x-1/2 w-[90%] max-w-5xl bg-[#f8f9fa] rounded-3xl p-8 sm:p-12 shadow-xl z-20 flex flex-col items-center text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#032b30] mb-4 font-b612">Newsletter</h2>
        <p className="text-[#032b30]/80 text-sm sm:text-base mb-8 max-w-xl">
          Inscrivez-vous à la newsletter pour recevoir des informations liées à Ghostech et à son environnement !
        </p>
        <form className="flex flex-col sm:flex-row items-center w-full max-w-2xl gap-4">
          <input 
            type="email" 
            placeholder="Entrez Votre Adresse Mail" 
            className="flex-1 w-full bg-white border border-gray-200 rounded-lg px-6 py-4 text-gray-700 outline-none focus:border-[#357dab] transition-colors"
            required
          />
          <button 
            type="submit" 
            className="w-full sm:w-auto bg-[#357dab] text-white font-bold px-10 py-4 rounded-lg hover:bg-[#29648a] transition-colors whitespace-nowrap"
          >
            ENVOYER
          </button>
        </form>
      </div>

      {/* Main Footer Content */}
      <div className="w-full bg-[#002C33] pt-48 pb-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8">
          
          <div className="col-span-2 md:col-span-1 flex flex-col">
            <Link href="/" className="flex items-center gap-3">
              <div className=" p-2.5 rounded-xl shadow-sm">
                <img src="/logo1.svg" alt="Ghostech Logo" className="h-10 w-auto object-contain" />
              </div>
            </Link>
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="text-[#9ca3af] hover:text-white font-medium text-[15px] transition-colors">Accueil</Link>
            <Link href="/apropos" className="text-[#9ca3af] hover:text-white font-medium text-[15px] transition-colors">A propos</Link>
            <Link href="/poles/formation" className="text-[#9ca3af] hover:text-white font-medium text-[15px] transition-colors">Formations</Link>
            <Link href="/poles/numerique" className="text-[#9ca3af] hover:text-white font-medium text-[15px] transition-colors">Nos Pôles</Link>
            <Link href="#" className="text-[#9ca3af] hover:text-white font-medium text-[15px] transition-colors">L'actu</Link>
            <Link href="#" className="text-[#9ca3af] hover:text-white font-medium text-[15px] transition-colors">FAQ</Link>
          </div>

          {/* Ressources */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#357dab] font-bold text-base mb-1">Ressources</h4>
            <Link href="#" className="text-[#9ca3af] hover:text-white font-medium text-[15px] transition-colors">Blog</Link>
            <Link href="#" className="text-[#9ca3af] hover:text-white font-medium text-[15px] transition-colors">Support</Link>
            <Link href="/contact" className="text-white font-bold text-[15px] transition-colors">Contacts</Link>
          </div>

          {/* Contact (Replacing Impact) */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#357dab] font-bold text-base mb-1">Contact</h4>
            <p className="text-[#9ca3af] font-medium text-[15px]">Abidjan, Côte d'Ivoire</p>
            <a href="mailto:contact@ghostech.ci" className="text-[#9ca3af] hover:text-white font-medium text-[15px] transition-colors">contact@ghostech.ci</a>
            <a href="tel:+2250000000000" className="text-[#9ca3af] hover:text-white font-medium text-[15px] transition-colors">+225 XX XX XX XX</a>
          </div>

          {/* Reseaux Sociaux */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#357dab] font-bold text-base mb-1">Réseaux Sociaux</h4>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-[#357dab] hover:border-[#357dab] transition-colors">
                <span className="font-bold text-sm">f</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-[#357dab] hover:border-[#357dab] transition-colors">
                <span className="font-bold text-xs">in</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-[#357dab] hover:border-[#357dab] transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 448 512"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 162.6 162.6v82.08A80.45 80.45 0 1 0 243 325.2V0h82.07A162.24 162.24 0 0 0 448 119.5z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-[#357dab] hover:border-[#357dab] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-23.1-115-65.1-157zM223.9 414.7c-33 0-65.3-8.9-93.6-25.7l-6.7-4-69.5 18.2 18.6-67.8-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.4 0-101.5 82.6-184.1 184.2-184.1 49.3 0 95.5 19.2 130.3 54 34.8 34.8 54 81 54 130.4 0 101.4-82.6 184.4-184.1 184.4zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-2.1-3.6 2.1-3.4 7.4-14 2.8-5.6 1.4-10.6-.5-14.3-1.8-3.7-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.7 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.3-5-3.7-10.5-6.5z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-20 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 relative">
          <div className="flex items-center gap-3 w-full">
            <div className="p-1.5 rounded-lg shadow-sm">
              <img src="/logo1.svg" alt="Ghostech Logo" className="h-4 w-auto object-contain" />
            </div>
            <p className="text-white text-[13px] md:text-sm">
              Copyright: © {new Date().getFullYear()} <span className="text-[#357dab] font-bold">Ghostech Côte d'Ivoire</span> | Tous droits réservés.
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-[#357dab] rounded-full flex items-center justify-center text-white hover:bg-[#29648a] transition-colors shadow-lg absolute right-0 -bottom-4 md:bottom-0"
            aria-label="Remonter en haut"
          >
            <span className="material-symbols-rounded text-xl">expand_less</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
