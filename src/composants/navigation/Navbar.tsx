"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { auth } from "@/src/services/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { FaGlobe } from "react-icons/fa";
import { useScroll } from "@/src/hooks/useScroll";
import { 
  SITE_CONFIG, 
  POLES_LINKS, 
  EQUIPE_LINKS, 
  PROJETS_LINKS,
  LinkItem 
} from "@/src/constantes/site-config";

// --- MATERIAL SYMBOL HELPER ---
const Icon = ({ name, className }: { name: string; className?: string }) => (
  <span className={`material-symbols-rounded ${className || ""}`}>{name}</span>
);


// --- MENU DROPDOWN COMPONENTS ---
function ListItem({ title, description, icon, href }: LinkItem) {
  return (
    <Link
      href={href}
      className="flex flex-row gap-3 rounded-lg p-3 hover:bg-gray-100 transition-colors items-center group"
    >
      <div className="flex aspect-square size-12 shrink-0 items-center justify-center rounded-lg bg-gray-50 border border-gray-100 shadow-sm group-hover:bg-white transition-colors">
        <Icon name={icon} className="text-gray-600 text-2xl group-hover:text-[#357dab]" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <span className="font-semibold text-[15px] text-gray-900 group-hover:text-[#357dab] transition-colors">{title}</span>
        {description && (
          <span className="text-xs text-gray-500 line-clamp-1 mt-0.5">{description}</span>
        )}
      </div>
    </Link>
  );
}

function SimpleListItem({ title, icon, href }: LinkItem) {
  return (
    <Link
      href={href}
      className="flex flex-row gap-3 rounded-md p-2 hover:bg-gray-100 transition-colors items-center group"
    >
      <Icon name={icon} className="text-gray-500 text-lg shrink-0 group-hover:text-[#357dab]" />
      <span className="font-medium text-[14px] text-gray-700 group-hover:text-[#357dab] transition-colors">{title}</span>
    </Link>
  );
}

// --- MAIN NAVBAR COMPONENT ---
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(20);
  const [user, setUser] = useState<User | null>(null);
  const [lang, setLang] = useState("FR");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Hide the navbar on the login, register, and devarena pages
  if (pathname === "/login" || pathname === "/register" || pathname.startsWith("/devarena")) {
    return null;
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b bg-white text-gray-800 ${
          scrolled ? "shadow-md border-gray-200" : "border-gray-100"
        }`}
      >
        {/* Top Utility Bar */}
        {!scrolled && (
          <div className="w-full bg-[#e49834] text-white py-2 px-4 md:py-3 md:px-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-1 sm:gap-0 border-b border-white/5 text-[11px] sm:text-[13px] md:text-sm font-semibold tracking-wide transition-all duration-300 text-center">
            <span className="line-clamp-1 sm:line-clamp-none">{SITE_CONFIG.slogan}</span>
            <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-[#000000] hover:text-white flex items-center gap-1.5 transition-colors shrink-0">
              <span>{SITE_CONFIG.contact.email}</span>
            </a>
          </div>
        )}

        <nav className={`mx-auto flex w-full max-w-7xl items-center justify-between px-4 lg:px-8 transition-all duration-300 ${
          scrolled ? "h-14" : "h-20"
        }`}>
          
          <div className="flex items-center gap-6 lg:gap-10">
            {/* LOGO */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/logo1.svg"
                alt="Ghostech Logo"
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled ? "h-5 md:h-6" : "h-9 md:h-10"
                }`}
              />
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              <Link href="/" className="px-4 py-2 rounded-md font-medium text-[15px] transition-colors hover:bg-gray-100">
                Accueil
              </Link>

            {/* PÔLES (Mega Menu) */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 rounded-md font-medium text-[15px] transition-colors hover:bg-gray-100">
                Pôles <Icon name="expand_more" className="text-[18px] opacity-70" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-3 w-[400px]">
                  <div className="flex flex-col gap-1">
                    {POLES_LINKS.map((link) => (
                      <ListItem key={link.title} {...link} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ÉQUIPE (Split Mega Menu) */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 rounded-md font-medium text-[15px] transition-colors hover:bg-gray-100">
                Équipe <Icon name="expand_more" className="text-[18px] opacity-70" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-5 w-[500px] flex gap-6">
                  {/* Colonne 1 : Bureaux */}
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
                      <Icon name="admin_panel_settings" className="text-[16px]" /> Direction
                    </h4>
                    <SimpleListItem title="Bureau Exécutif" href="/equipe/bureau" icon="stars" />
                    <SimpleListItem title="Bureau Événementiels" href="/equipe/bureau/evenementiels" icon="event" />
                    <SimpleListItem title="Bureau Pôles Techniques" href="/equipe/bureau/poles" icon="code" />
                  </div>
                  <div className="w-px bg-gray-100"></div>
                  {/* Colonne 2 : Communauté */}
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
                      <Icon name="groups" className="text-[16px]" /> Communauté
                    </h4>
                    <SimpleListItem title="Membres" href="/equipe/membres" icon="people" />
                    <SimpleListItem title="Nous Rejoindre" href="/equipe/rejoindre" icon="person_add" />
                  </div>
                </div>
              </div>
            </div>

            {/* ÉVÈNEMENTS (Split Mega Menu) */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 rounded-md font-medium text-[15px] transition-colors hover:bg-gray-100">
                Évènements <Icon name="expand_more" className="text-[18px] opacity-70" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-5 w-[500px] flex gap-6">
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
                      <Icon name="event" className="text-[16px]" /> Événements
                    </h4>
                    <SimpleListItem title="Formation & Ateliers" href="/formation" icon="map" />
                    <SimpleListItem title="Hackathons" href="/evenements/hackathons" icon="terminal" />
                  </div>
                  <div className="w-px bg-gray-100"></div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
                      <Icon name="folder_open" className="text-[16px]" /> Projets
                    </h4>
                    {PROJETS_LINKS.map((link) => (
                      <SimpleListItem key={link.title} {...link} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/apropos" className="px-4 py-2 rounded-md font-medium text-[15px] transition-colors hover:bg-gray-100">
              À propos
            </Link>
            <Link href="/contact" className="px-4 py-2 rounded-md font-medium text-[15px] transition-colors hover:bg-gray-100">
              Contact
            </Link>
            </div>
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Call and Language Row (Matching the Image) */}
            <div className="flex items-center gap-3 text-[15px] font-medium">
              <span className="text-[#02073E]">Appelle-nous</span>
              <a 
                href={SITE_CONFIG.contact.phoneCall} 
                className="text-[#8b5cf6] hover:text-[#7c3aed] font-semibold transition-colors"
              >
                {SITE_CONFIG.contact.phone}
              </a>

              {/* Globe Language Selector */}
              <div className="relative group flex items-center gap-1.5 cursor-pointer ml-1 py-1">
                {/* Globe SVG */}
                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20M3 16.2h18M3 7.8h18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                
                <span className="text-[#02073E] font-semibold uppercase">{lang === "FR" ? "IC" : lang}</span>
                
                {/* Chevron SVG */}
                <svg className="w-3.5 h-3.5 text-gray-900 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-1 w-24 overflow-hidden">
                    <button 
                      type="button"
                      onClick={() => setLang("FR")}
                      className="w-full px-3 py-2 text-left text-xs font-semibold hover:bg-gray-50 text-[#02073E] flex items-center justify-between transition-colors"
                    >
                      <span>IC</span>
                      {lang === "FR" && <span className="text-[#357dab] font-black">✓</span>}
                    </button>
                    <button 
                      type="button"
                      onClick={() => setLang("EN")}
                      className="w-full px-3 py-2 text-left text-xs font-semibold hover:bg-gray-50 text-[#02073E] flex items-center justify-between transition-colors"
                    >
                      <span>EN</span>
                      {lang === "EN" && <span className="text-[#357dab] font-black">✓</span>}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {user && (
              <Link
                href="/profil"
                className="flex items-center justify-center w-10 h-10 bg-[#ff7b00] rounded-md hover:bg-[#e66a00] shadow-md transition-all hover:scale-105"
                title="Mon Profil"
              >
                <Icon name="person" className="text-white text-[26px]" />
              </Link>
            )}
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md transition-colors hover:bg-gray-100 text-gray-900"
            aria-label="Toggle menu"
          >
            <Icon name={open ? "close" : "menu"} className="text-3xl" />
          </button>
        </nav>
      </header>

      {/* MOBILE MENU PORTAL */}
      {open && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 top-[72px] z-40 bg-white overflow-y-auto pb-10 shadow-inner">
          <div className="flex flex-col p-6 gap-8 animate-in slide-in-from-top-4 duration-300">
            
            {/* Sections */}
            <div className="flex flex-col gap-6">

              {/* Accueil (Mobile only top link) */}
              <Link href="/" onClick={() => setOpen(false)} className="text-lg font-bold text-[#02073E] hover:text-[#357dab] border-b border-gray-100 pb-4">
                Accueil
              </Link>
              
              {/* Pôles */}
              <div className="flex flex-col gap-3">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">Pôles</span>
                {POLES_LINKS.map((link) => (
                  <Link key={link.title} href={link.href} onClick={() => setOpen(false)} className="flex items-center gap-3 text-gray-800 py-1.5 font-medium hover:text-[#357dab]">
                    <Icon name={link.icon} className="text-gray-400 text-xl" /> {link.title}
                  </Link>
                ))}
              </div>

              {/* Équipe */}
              <div className="flex flex-col gap-3">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">Équipe</span>
                {EQUIPE_LINKS.map((link) => (
                  <Link key={link.title} href={link.href} onClick={() => setOpen(false)} className="flex items-center gap-3 text-gray-800 py-1.5 font-medium hover:text-[#357dab]">
                    <Icon name={link.icon} className="text-gray-400 text-xl" /> {link.title}
                  </Link>
                ))}
              </div>

              {/* Évènements */}
              <div className="flex flex-col gap-3">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">Évènements</span>
                <Link href="/formation" onClick={() => setOpen(false)} className="flex items-center gap-3 text-gray-800 py-1.5 font-medium hover:text-[#357dab]">
                  <Icon name="map" className="text-gray-400 text-xl" /> Formation & Ateliers
                </Link>
                <Link href="/evenements/hackathons" onClick={() => setOpen(false)} className="flex items-center gap-3 text-gray-800 py-1.5 font-medium hover:text-[#357dab]">
                  <Icon name="terminal" className="text-gray-400 text-xl" /> Hackathons
                </Link>
                {PROJETS_LINKS.map((link) => (
                  <Link key={link.title} href={link.href} onClick={() => setOpen(false)} className="flex items-center gap-3 text-gray-800 py-1.5 font-medium hover:text-[#357dab]">
                    <Icon name={link.icon} className="text-gray-400 text-xl" /> {link.title}
                  </Link>
                ))}
              </div>

            </div>

            {/* General Links */}
            <div className="flex flex-col gap-4 border-t border-gray-100 pt-6">
              <Link href="/apropos" onClick={() => setOpen(false)} className="text-lg font-bold text-[#02073E] hover:text-[#357dab]">
                À propos de Ghostech
              </Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="text-lg font-bold text-[#02073E] hover:text-[#357dab]">
                Contactez-nous
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex flex-col gap-3 mt-4">
              {user && (
                <Link href="/profil" onClick={() => setOpen(false)} className="w-full flex items-center justify-center gap-2 py-3.5 text-center rounded-xl bg-[#ff7b00] text-white font-bold hover:bg-[#e66a00] shadow-md transition-all">
                  <Icon name="person" className="text-white text-xl" /> Mon Profil
                </Link>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
