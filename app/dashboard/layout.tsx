"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Swords, 
  Activity,
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Menu,
  X,
  Code2,
  ChevronRight
} from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
        setSidebarOpen(false);
      } else {
        setIsMobile(false);
        setSidebarOpen(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  interface NavItem {
    href: string;
    icon: React.ReactNode;
    label: string;
    subItems?: { href: string; label: string }[];
  }

  const navItems: NavItem[] = [
    { href: "/dashboard", icon: <LayoutDashboard size={20} />, label: "Vue d'ensemble" },
    { href: "/dashboard/membres", icon: <Users size={20} />, label: "Membres" },
    { 
      href: "/dashboard/devarena", 
      icon: <Swords size={20} />, 
      label: "DevArena",
      subItems: [
        { href: "/dashboard/devarena/participants", label: "Participants" },
        { href: "/dashboard/devarena/duos", label: "Duos & Notes" },
        { href: "/dashboard/devarena/vagues", label: "Vagues & Phases" }
      ]
    },
    { href: "/dashboard/evenements", icon: <Activity size={20} />, label: "Événements" },
    { href: "/dashboard/parametres", icon: <Settings size={20} />, label: "Paramètres" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans flex overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobile && sidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        className="fixed lg:relative z-50 w-64 h-screen bg-white border-r border-slate-200/80 flex flex-col justify-between"
      >
        <div>
          <div className="h-20 flex items-center justify-between px-6 border-b border-slate-200/80">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="text-lg font-bold text-slate-800 tracking-wider">GHOSTECH</span>
            </Link>
            {isMobile && (
              <button onClick={() => setSidebarOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            )}
          </div>

          <nav className="p-4 space-y-2 mt-4">
            {navItems.map((item) => {
              const isParentActive = item.href === "/dashboard" 
                ? pathname === item.href 
                : pathname.startsWith(item.href);

              return (
                <div key={item.href} className="space-y-1">
                  <Link href={item.href} onClick={() => isMobile && !item.subItems && setSidebarOpen(false)}>
                    <div className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all ${
                      isParentActive 
                      ? "bg-teal-50 text-teal-600 font-bold border border-teal-100" 
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-800 font-medium"
                    }`}>
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span className="text-sm">{item.label}</span>
                      </div>
                      {isParentActive && !item.subItems && <ChevronRight size={16} />}
                    </div>
                  </Link>

                  {/* Render sub-items if parent is active and has sub-items */}
                  {item.subItems && isParentActive && (
                    <div className="pl-9 pr-2 py-1 space-y-1">
                      {item.subItems.map((sub) => {
                        const isSubActive = pathname === sub.href;
                        return (
                          <Link key={sub.href} href={sub.href} onClick={() => isMobile && setSidebarOpen(false)}>
                            <div className={`text-xs py-2 px-3 rounded-lg transition-all ${
                              isSubActive 
                                ? "text-teal-650 font-bold bg-teal-50/50" 
                                : "text-slate-450 hover:text-slate-700 hover:bg-slate-50"
                            }`}>
                              • {sub.label}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-200/80">
          <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-slate-500 rounded-xl hover:bg-rose-50 hover:text-rose-600 transition-colors">
            <LogOut size={20} />
            Déconnexion
          </button>
        </div>
      </motion.aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* HEADER */}
        <header className="h-20 bg-white/85 backdrop-blur-md border-b border-slate-200/80 flex items-center justify-between px-4 lg:px-8 shrink-0 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-slate-500 hover:text-slate-800 p-2 lg:hidden"
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full border border-slate-200/60 focus-within:border-teal-500/50 transition-colors">
              <Search size={16} className="text-slate-400" />
              <input 
                type="text" 
                placeholder="Rechercher..." 
                className="bg-transparent border-none outline-none text-sm w-64 text-slate-800 placeholder-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button className="relative text-slate-400 hover:text-slate-600 transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-px h-6 bg-slate-200"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" alt="Admin" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div className="hidden sm:block text-sm">
                <p className="font-bold text-slate-800 leading-none">Admin Ghostech</p>
                <p className="text-[10px] text-teal-600 mt-1">Superviseur</p>
              </div>
            </div>
          </div>
        </header>

        {/* SCROLLABLE PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 custom-scrollbar">
          {children}
        </main>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0, 0, 0, 0.2); }
      `}} />
    </div>
  );
}
