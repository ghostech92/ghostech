import React from 'react';
import Link from 'next/link';

export default function FooterArena() {
  return (
    <footer className="border-t border-gray-200 bg-white/90 backdrop-blur-md py-8 mt-auto relative z-20 w-full shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-gray-800 font-extrabold text-lg tracking-tight font-b612">ghostech</span>
          <span className="bg-amber-400 text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">Arena</span>
        </div>
        
        <div className="text-gray-400 text-sm text-center">
          © 2026 Ghostech DevArena. Tous droits réservés.
        </div>
        
        <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
          <Link href="/devarena/reglement" className="hover:text-amber-400 transition-colors">
            Règlement
          </Link>
          <Link href="/devarena/inscription" className="hover:text-amber-400 transition-colors">
            Inscription
          </Link>
        </div>
      </div>
    </footer>
  );
}
