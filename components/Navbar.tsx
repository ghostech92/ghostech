"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

// --- MATERIAL SYMBOL HELPER ---
const Icon = ({ name, className }: { name: string; className?: string }) => (
  <span className={`material-symbols-rounded ${className || ""}`}>{name}</span>
);

// --- HOOK FOR SCROLL DETECTION ---
function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

// --- DATA TYPES & LINKS ---
type LinkItem = {
  title: string;
  href: string;
  icon: string;
  description?: string;
};

const polesLinks: LinkItem[] = [
  {
    title: "Développement Numérique",
    href: "/poles/numerique",
    description: "Création de solutions logicielles et d'applications modernes",
    icon: "code",
  },
  {
    title: "Formation & Innovation",
    href: "/poles/formation",
    description: "Ateliers, certifications et apprentissage continu",
    icon: "school",
  },
  {
    title: "Entrepreneuriat",
    href: "/poles/entrepreneuriat",
    description: "Incubation et accompagnement de projets tech",
    icon: "rocket_launch",
  },
];

const equipeLinks: LinkItem[] = [
  {
    title: "Bureau Exécutif",
    href: "/equipe/bureau",
    description: "L'équipe dirigeante de Ghostech",
    icon: "admin_panel_settings",
  },
  {
    title: "Membres",
    href: "/equipe/membres",
    description: "Découvrez notre communauté d'étudiants passionnés",
    icon: "groups",
  },
  {
    title: "Nous Rejoindre",
    href: "/equipe/rejoindre",
    description: "Devenez acteur de l'innovation en Afrique",
    icon: "person_add",
  },
];

const projetsLinks: LinkItem[] = [
  {
    title: "Impact en chiffres",
    href: "/projets/impact",
    icon: "query_stats",
  },
  {
    title: "Réalisations",
    href: "/projets/realisations",
    icon: "emoji_events",
  },
  {
    title: "Galerie Photos",
    href: "/projets/galerie",
    icon: "photo_library",
  },
  {
    title: "Vidéos",
    href: "/projets/videos",
    icon: "play_circle",
  },
];

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

  // Hide the navbar on the login and register pages
  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b bg-white text-gray-800 ${
          scrolled ? "shadow-md border-gray-200" : "border-gray-100"
        }`}
      >
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
                    {polesLinks.map((link) => (
                      <ListItem key={link.title} {...link} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ÉQUIPE (Mega Menu) */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 rounded-md font-medium text-[15px] transition-colors hover:bg-gray-100">
                Équipe <Icon name="expand_more" className="text-[18px] opacity-70" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-3 w-[400px]">
                  <div className="flex flex-col gap-1">
                    {equipeLinks.map((link) => (
                      <ListItem key={link.title} {...link} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ACTIVITÉS (Split Mega Menu) */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 rounded-md font-medium text-[15px] transition-colors hover:bg-gray-100">
                Activités <Icon name="expand_more" className="text-[18px] opacity-70" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-5 w-[500px] flex gap-6">
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
                      <Icon name="event" className="text-[16px]" /> Événements
                    </h4>
                    <SimpleListItem title="Hackathons" href="/evenements/hackathons" icon="terminal" />
                    <SimpleListItem title="Ateliers" href="/evenements/ateliers" icon="model_training" />
                  </div>
                  <div className="w-px bg-gray-100"></div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
                      <Icon name="folder_open" className="text-[16px]" /> Projets
                    </h4>
                    {projetsLinks.map((link) => (
                      <SimpleListItem key={link.title} {...link} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/apropos" className="px-4 py-2 rounded-md font-medium text-[15px] transition-colors hover:bg-gray-100">
              À propos
            </Link>
            </div>
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/login" 
              className="font-semibold text-[14px] transition-colors text-[#02073E] hover:text-[#357dab]"
            >
              Connexion
            </Link>
            <Link 
              href="/equipe/rejoindre" 
              className="bg-[#357dab] text-white px-5 py-2.5 rounded-lg font-bold text-[14px] hover:bg-teal-700 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Nous rejoindre
            </Link>
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
                {polesLinks.map((link) => (
                  <Link key={link.title} href={link.href} onClick={() => setOpen(false)} className="flex items-center gap-3 text-gray-800 py-1.5 font-medium hover:text-[#357dab]">
                    <Icon name={link.icon} className="text-gray-400 text-xl" /> {link.title}
                  </Link>
                ))}
              </div>

              {/* Équipe */}
              <div className="flex flex-col gap-3">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">Équipe</span>
                {equipeLinks.map((link) => (
                  <Link key={link.title} href={link.href} onClick={() => setOpen(false)} className="flex items-center gap-3 text-gray-800 py-1.5 font-medium hover:text-[#357dab]">
                    <Icon name={link.icon} className="text-gray-400 text-xl" /> {link.title}
                  </Link>
                ))}
              </div>

              {/* Projets & Événements */}
              <div className="flex flex-col gap-3">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">Activités</span>
                <Link href="/evenements/hackathons" onClick={() => setOpen(false)} className="flex items-center gap-3 text-gray-800 py-1.5 font-medium hover:text-[#357dab]">
                  <Icon name="terminal" className="text-gray-400 text-xl" /> Hackathons
                </Link>
                <Link href="/evenements/ateliers" onClick={() => setOpen(false)} className="flex items-center gap-3 text-gray-800 py-1.5 font-medium hover:text-[#357dab]">
                  <Icon name="model_training" className="text-gray-400 text-xl" /> Ateliers
                </Link>
                {projetsLinks.map((link) => (
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
              <Link href="/login" onClick={() => setOpen(false)} className="w-full py-3.5 text-center rounded-xl border-2 border-gray-200 text-[#02073E] font-bold hover:bg-gray-50 transition-colors">
                Connexion
              </Link>
              <Link href="/equipe/rejoindre" onClick={() => setOpen(false)} className="w-full py-3.5 text-center rounded-xl bg-[#357dab] text-white font-bold hover:bg-teal-700 transition-colors">
                Nous rejoindre
              </Link>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
