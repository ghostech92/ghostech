"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { auth } from "@/src/services/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { FaLinkedinIn, FaTiktok, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { 
  FiHome, 
  FiCalendar, 
  FiGrid, 
  FiUserPlus, 
  FiUser, 
  FiLogIn, 
  FiLogOut, 
  FiMenu, 
  FiX 
} from "react-icons/fi";
import { useScroll } from "@/src/hooks/useScroll";

// --- LIENS DE NAVIGATION (BURGER MOBILE WHITE & REACT-ICONS) ---
const MOBILE_NAV_LINKS = [
  { label: "Accueil", href: "/", icon: FiHome, exact: true },
  { label: "Événements", href: "/evenements/hackathons", icon: FiCalendar, exact: false, prefix: "/evenements" },
  { label: "Pôles", href: "/poles/numerique", icon: FiGrid, exact: false, prefix: "/poles" },
  { label: "Devenir membre", href: "/equipe/rejoindre", icon: FiUserPlus, exact: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(20);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Hide the navbar on login, register, and devarena pages
  if (pathname === "/login" || pathname === "/register" || pathname.startsWith("/devarena")) {
    return null;
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setOpen(false);
    } catch (e) {
      console.error("Sign out error", e);
    }
  };

  const navLinkClass = isHome && !scrolled
    ? "text-[14px] lg:text-[15px] font-semibold text-white/90 hover:text-white hover:bg-white/10 px-3.5 py-1.5 rounded-full transition-colors"
    : "text-[14px] lg:text-[15px] font-medium text-gray-700 hover:text-[#357dab] hover:bg-gray-100 px-3.5 py-1.5 rounded-full transition-colors";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isHome
            ? scrolled
              ? "bg-white/95 backdrop-blur-md border-b border-gray-200/80 text-gray-900 shadow-xs"
              : "bg-transparent text-white border-b border-transparent"
            : scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs text-gray-900"
            : "bg-white border-b border-gray-100 text-gray-900"
        }`}
      >
        <nav
          className={`mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
            scrolled ? "h-14 md:h-16" : isHome ? "h-18 md:h-20" : "h-16"
          }`}
          aria-label="Navigation principale"
        >
          {/* GAUCHE : Logo Ghostech */}
          <Link href="/" className="flex items-center shrink-0 group">
            <img
              src={isHome && !scrolled ? "/logo1.svg" : "/logo1_1.svg"}
              alt="Ghostech Logo"
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled
                  ? "h-8 md:h-9"
                  : isHome
                  ? "h-10 sm:h-12 md:h-14"
                  : "h-9 sm:h-10 md:h-11"
              }`}
            />
          </Link>

          {/* CENTRE : Liens Navigation Desktop (Style Grand Portail / Média) */}
          <div className="hidden md:flex items-center justify-center gap-1 lg:gap-2">
            <Link
              href="/"
              className={`${navLinkClass} ${pathname === "/" ? (isHome && !scrolled ? "bg-white/15 text-white" : "bg-gray-100 text-[#357dab] font-bold") : ""}`}
            >
              Accueil
            </Link>

            <Link
              href="/evenements/hackathons"
              className={`${navLinkClass} ${pathname.startsWith("/evenements") ? "text-[#fd800a] font-bold" : ""}`}
            >
              Événements
            </Link>

            <Link
              href="/formation"
              className={`${navLinkClass} ${pathname.startsWith("/formation") ? "text-[#fd800a] font-bold" : ""}`}
            >
              Formations
            </Link>

            <Link
              href="/poles/numerique"
              className={`${navLinkClass} ${pathname.startsWith("/poles") ? "text-[#357dab] font-bold" : ""}`}
            >
              Pôles
            </Link>

            <Link
              href="/projets/impact"
              className={`${navLinkClass} ${pathname.startsWith("/projets") ? "text-[#357dab] font-bold" : ""}`}
            >
              Impact
            </Link>

            <Link
              href="/equipe/rejoindre"
              className={`${navLinkClass} ${pathname === "/equipe/rejoindre" ? "text-[#fd800a] font-bold" : ""}`}
            >
              Devenir membre
            </Link>
          </div>

          {/* DROITE : Action CTA + MENU BURGER MOBILE STRICTEMENT À DROITE */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* CTA Desktop */}
            <Link
              href={user ? "/profil" : "/login"}
              className={`hidden md:inline-flex items-center justify-center rounded-xl font-bold transition-all text-xs lg:text-sm px-4 py-2 shadow-md ${
                isHome && !scrolled
                  ? "border border-white/40 text-white hover:bg-white/15 hover:border-white shadow-black/20"
                  : "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-300 shadow-gray-200/50"
              }`}
            >
              {user ? "Mon profil" : "Se connecter"}
            </Link>

            {/* CTA Rapide Mobile (Icône profil carrée avec bordures légèrement arrondies et shadow) */}
            {user && (
              <Link
                href="/profil"
                className={`md:hidden flex items-center justify-center w-9 h-9 rounded-xl font-bold text-xs shadow-md transition-all ${
                  isHome && !scrolled
                    ? "bg-white/20 text-white border border-white/30 shadow-black/20"
                    : "bg-[#fd800a]/10 text-[#fd800a] border border-[#fd800a]/30 shadow-[#fd800a]/20"
                }`}
                aria-label="Mon profil"
              >
                <FiUser className="w-5 h-5" />
              </Link>
            )}

            {/* BOUTON BURGER MOBILE (STRICTEMENT SITUÉ TOUT À DROITE) */}
            <button
              onClick={() => setOpen(!open)}
              className={`flex items-center justify-center p-2 rounded-xl transition-all md:hidden cursor-pointer ${
                isHome && !scrolled
                  ? "text-white hover:bg-white/10 active:scale-95"
                  : "text-gray-900 hover:bg-gray-100 active:scale-95"
              }`}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu de navigation"}
              aria-expanded={open}
            >
              {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* MENU BURGER MOBILE SIMPLE - BACKGROUND WHITE & REACT-ICONS */}
      {typeof document !== "undefined" &&
        createPortal(
          <div
            className={`fixed inset-0 z-50 transition-all duration-300 md:hidden ${
              open ? "pointer-events-auto visible" : "pointer-events-none invisible"
            }`}
            aria-hidden={!open}
          >
            {/* Arrière-plan assombri */}
            <div
              className={`absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300 ${
                open ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setOpen(false)}
            />

            {/* Volet coulissant depuis la DROITE - Background White */}
            <div
              className={`absolute top-0 right-0 bottom-0 w-[84%] max-w-[320px] bg-white text-gray-900 shadow-2xl flex flex-col transition-transform duration-300 ease-out z-10 border-l border-gray-100 ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* En-tête : Logo + Bouton de fermeture */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white">
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
                  <img
                    src="/logo1_1.svg"
                    alt="Ghostech Logo"
                    className="h-8 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:text-black hover:bg-gray-200 transition-all cursor-pointer"
                  aria-label="Fermer le menu"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation simple */}
              <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1.5">
                <p className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
                  Navigation
                </p>
                {MOBILE_NAV_LINKS.map((item) => {
                  const isActive = item.exact
                    ? pathname === item.href
                    : pathname.startsWith(item.prefix || item.href);
                  const IconComponent = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`group flex items-center justify-between px-4 py-3 rounded-xl text-[14.5px] font-medium transition-all ${
                        isActive
                          ? "bg-[#fd800a]/10 text-[#fd800a] font-bold border border-[#fd800a]/20"
                          : "text-gray-700 hover:text-gray-950 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <IconComponent
                          className={`w-5 h-5 transition-colors ${isActive ? "text-[#fd800a]" : "text-gray-400 group-hover:text-gray-900"}`}
                        />
                        <span>{item.label}</span>
                      </div>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#fd800a]" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Pied du menu : CTA Connexion/Profil & Réseaux sociaux */}
              <div className="p-5 border-t border-gray-100 bg-gray-50/80 space-y-4">
                {user ? (
                  <div className="space-y-2">
                    <Link
                      href="/profil"
                      onClick={() => setOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#fd800a] text-white text-sm font-bold hover:bg-[#e06f00] shadow-md shadow-[#fd800a]/20 transition-all active:scale-[0.98]"
                    >
                      <FiUser className="w-4 h-4" />
                      <span>Mon profil</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-rose-600 hover:text-rose-700 transition-colors cursor-pointer"
                    >
                      <FiLogOut className="w-4 h-4" />
                      <span>Se déconnecter</span>
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#fd800a] to-[#ff9933] text-white text-sm font-bold hover:brightness-110 shadow-md shadow-[#fd800a]/20 transition-all active:scale-[0.98]"
                  >
                    <FiLogIn className="w-4 h-4" />
                    <span>Se connecter</span>
                  </Link>
                )}

                {/* Réseaux sociaux épurés */}
                <div className="flex items-center justify-center gap-5 pt-2 border-t border-gray-200/60 text-gray-500">
                  <a
                    href="https://lnkd.in/edXVXbH8"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="p-1.5 rounded-lg hover:text-[#0077b5] hover:bg-gray-200/60 transition-all"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@ghostech00"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="TikTok"
                    className="p-1.5 rounded-lg hover:text-black hover:bg-gray-200/60 transition-all"
                  >
                    <FaTiktok className="w-4 h-4" />
                  </a>
                  <a
                    href="https://chat.whatsapp.com/Le6R6EvCKOR8I3kmQEd9XS"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="p-1.5 rounded-lg hover:text-[#25D366] hover:bg-gray-200/60 transition-all"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="p-1.5 rounded-lg hover:text-[#1877F2] hover:bg-gray-200/60 transition-all"
                  >
                    <FaFacebookF className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

