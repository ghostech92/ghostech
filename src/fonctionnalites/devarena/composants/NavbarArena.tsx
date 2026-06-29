"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarArena() {
  const pathname = usePathname();

  const links = [
    { name: "Règlement", href: "/devarena", icon: "menu_book" },
    { name: "Confrontations", href: "/devarena/confrontations", icon: "sports_esports" },
    { name: "Classement", href: "/devarena/classement", icon: "leaderboard" },
    { name: "Projets", href: "/devarena/projets", icon: "code_blocks" },
  ];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 overflow-x-auto hide-scrollbar">
        <div className="flex items-center justify-between h-14 min-w-max">
          
          {/* Logo & Branding */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity shrink-0 mr-8">
            <div className="bg-white p-1 rounded shadow-sm">
              <img src="/logo1.svg" alt="Ghostech Logo" className="h-4 w-auto object-contain" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-rounded text-gray-700 text-[18px]">sports_score</span>
              <span className="font-b612 font-bold text-gray-800 tracking-widest uppercase text-xs">DevArena</span>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <nav className="flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    isActive                       ? "bg-[#357dab] text-white" 
                       : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <span className="material-symbols-rounded text-[16px]">{link.icon}</span>
                  {link.name}
                </Link>
              );
            })}
          </nav>

        </div>
      </div>
    </div>
  );
}
