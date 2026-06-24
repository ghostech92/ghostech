"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

// ── Icône chevron ──────────────────────────────────────────────────────────────
const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

// ── Profil par défaut si pas de session ───────────────────────────────────────
const DEFAULT_USER = {
  name: "Utilisateur",
  email: "user@ghostech.dev",
  avatar: "https://i.pravatar.cc/150?u=ghostech",
};

// ── Composant principal ───────────────────────────────────────────────────────
export function AppSidebar() {
  const pathname  = usePathname();
  const router    = useRouter();
  const profileRef = useRef<HTMLDivElement>(null);

  const [openConfrontations, setOpenConfrontations] = useState(
    pathname.startsWith("/devarena/confrontations")
  );
  const [openClassement, setOpenClassement] = useState(
    pathname.startsWith("/devarena/classement")
  );
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState(DEFAULT_USER);

  // Lecture du profil depuis localStorage (compatible Firebase Auth plus tard)
  useEffect(() => {
    try {
      const stored = localStorage.getItem("ghostech_user");
      if (stored) setUser(JSON.parse(stored));
    } catch {}
  }, []);

  // Ferme le popup profil si clic en dehors
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("ghostech_user");
    router.push("/login");
  };

  // ── Classes helper ───────────────────────────────────────────────────────────
  const linkClass = (href: string) =>
    `flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all font-medium text-sm ${
      pathname === href
        ? "bg-amber-50 text-amber-600 border border-amber-200"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`;

  const accordionClass = (prefix: string) =>
    `w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl transition-all font-medium text-sm ${
      pathname.startsWith(prefix)
        ? "bg-amber-50 text-amber-600 border border-amber-200"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`;

  const subLinkClass = (href: string) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm ${
      pathname === href
        ? "bg-amber-50 text-amber-500 font-semibold"
        : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
    }`;

  // ── JSX ──────────────────────────────────────────────────────────────────────
  return (
    <Sidebar side="left" className="border-r border-gray-200 text-gray-800 [&>[data-sidebar=sidebar]]:bg-white">

      {/* ── Header ── */}
      <SidebarHeader className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold font-b612 text-amber-500 tracking-wider">DEV ARENA</h2>
      </SidebarHeader>

      {/* ── Navigation ── */}
      <SidebarContent className="px-4 py-5 flex-1 overflow-y-auto">
        <SidebarGroup className="space-y-1 flex flex-col">

          {/* 1 — Actualités (PREMIER) */}
          <Link href="/devarena/actualites" className={linkClass("/devarena/actualites")}>
            <span className="material-symbols-rounded text-[18px]">newspaper</span>
            Actualités
          </Link>

          {/* 2 — Confrontations + sous-menus */}
          <div>
            <button
              onClick={() => setOpenConfrontations(!openConfrontations)}
              className={accordionClass("/devarena/confrontations")}
            >
              <span className="flex items-center gap-2.5">
                <span className="material-symbols-rounded text-[18px]">sports_esports</span>
                Confrontations
              </span>
              <ChevronDown open={openConfrontations} />
            </button>
            {openConfrontations && (
              <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-gray-100 pl-3">
                <Link href="/devarena/confrontations" className={subLinkClass("/devarena/confrontations")}>
                  Tous les matchs
                </Link>
                <Link href="/devarena/confrontations/vague1" className={subLinkClass("/devarena/confrontations/vague1")}>
                  🌊 Vague 1
                </Link>
                <Link href="/devarena/confrontations/vague2" className={subLinkClass("/devarena/confrontations/vague2")}>
                  🌊 Vague 2
                </Link>
                <Link href="/devarena/confrontations/vague3" className={subLinkClass("/devarena/confrontations/vague3")}>
                  🔒 Vague 3
                </Link>
              </div>
            )}
          </div>

          {/* 3 — Classement + sous-menus */}
          <div>
            <button
              onClick={() => setOpenClassement(!openClassement)}
              className={accordionClass("/devarena/classement")}
            >
              <span className="flex items-center gap-2.5">
                <span className="material-symbols-rounded text-[18px]">leaderboard</span>
                Classement
              </span>
              <ChevronDown open={openClassement} />
            </button>
            {openClassement && (
              <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-gray-100 pl-3">
                <Link href="/devarena/classement" className={subLinkClass("/devarena/classement")}>
                  Classement Global
                </Link>
                <Link href="/devarena/classement/vague1" className={subLinkClass("/devarena/classement/vague1")}>
                  🌊 Vague 1
                </Link>
                <Link href="/devarena/classement/vague2" className={subLinkClass("/devarena/classement/vague2")}>
                  🌊 Vague 2
                </Link>
                <Link href="/devarena/classement/vague3" className={subLinkClass("/devarena/classement/vague3")}>
                  🔒 Vague 3
                </Link>
              </div>
            )}
          </div>

          {/* 4 — Projets */}
          <Link href="/devarena/projets" className={linkClass("/devarena/projets")}>
            <span className="material-symbols-rounded text-[18px]">code_blocks</span>
            Projets
          </Link>

          {/* 5 — Règlement (DERNIER) */}
          <Link href="/devarena/reglement" className={linkClass("/devarena/reglement")}>
            <span className="material-symbols-rounded text-[18px]">menu_book</span>
            Règlement
          </Link>

        </SidebarGroup>
      </SidebarContent>

      {/* ── Footer : Profil utilisateur ── */}
      <SidebarFooter className="p-4 border-t border-gray-100">
      <div className="relative" ref={profileRef}>
        {/* Popup déconnexion */}
        {profileOpen && (
          <div className="absolute bottom-[calc(100%+8px)] left-4 right-4 bg-white border border-gray-200 rounded-2xl shadow-xl p-3 z-50">
            {/* Info utilisateur */}
            <div className="flex items-center gap-3 px-2 py-2 mb-2 border-b border-gray-100 pb-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full border-2 border-amber-300 object-cover"
              />
              <div className="min-w-0">
                <p className="font-bold text-gray-900 text-sm truncate">{user.name}</p>
                <p className="text-xs text-gray-400 truncate">{user.email}</p>
              </div>
            </div>
            {/* Bouton déconnecter */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-red-500 hover:bg-red-50 transition-all text-sm font-semibold"
            >
              <span className="material-symbols-rounded text-[18px]">logout</span>
              Se déconnecter
            </button>
          </div>
        )}

        {/* Bouton profil */}
        <button
          onClick={() => setProfileOpen(!profileOpen)}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all hover:bg-gray-100 ${
            profileOpen ? "bg-gray-100" : ""
          }`}
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="w-9 h-9 rounded-full border-2 border-amber-300 object-cover shrink-0"
          />
          <div className="flex-1 min-w-0 text-left">
            <p className="font-semibold text-sm text-gray-900 truncate">{user.name}</p>
            <p className="text-xs text-gray-400 truncate">{user.email}</p>
          </div>
          <svg
            className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${profileOpen ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>

        <p className="text-[10px] text-gray-300 text-center mt-3">Ghostech © 2026</p>
      </div>
      </SidebarFooter>
    </Sidebar>
  );
}
