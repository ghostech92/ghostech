"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { polesGhostech } from "@/src/donnees/polesData";

export default function PolesListSection() {
  const [activeCategory, setActiveCategory] = useState<
    "tous" | "technique" | "design-marketing" | "innovation"
  >("tous");

  const filteredPoles =
    activeCategory === "tous"
      ? polesGhostech
      : polesGhostech.filter((p) => p.category === activeCategory);

  return (
    <section id="poles" className="w-full bg-white py-24 relative overflow-hidden flex flex-col items-center my-12">
      <div className="w-full max-w-6xl px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1 h-6 bg-[#357dab] rounded-full"></span>
              <span className="text-xs uppercase tracking-wider font-bold text-gray-400">
                Cartographie des pôles
              </span>
            </div>
            <h2 className="text-3xl font-bold text-[#022329]">
              Nos Départements Spécialisés
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 bg-slate-50 p-1.5 rounded-2xl border border-gray-100 shadow-xs">
            {[
              { id: "tous", label: "Tous les pôles" },
              { id: "technique", label: "Tech & Ingénierie" },
              { id: "design-marketing", label: "Design & Stratégie" },
              { id: "innovation", label: "Écosystème" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveCategory(btn.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${activeCategory === btn.id
                  ? "bg-[#022329] text-white shadow-sm"
                  : "bg-transparent text-gray-500 hover:text-[#022329]"
                  }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filteredPoles.map((pole) => (
              <motion.div
                layout
                key={pole.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col bg-transparent group h-full"
              >
                <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xs bg-slate-50">
                  <Image
                    src={pole.image}
                    alt={pole.name}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <div className="mt-4 flex flex-col">
                  <h3 className="text-[15px] font-bold text-gray-900 underline decoration-1 underline-offset-4 hover:text-[#357dab] transition-colors leading-snug">
                    {pole.name}
                  </h3>
                  <p className="text-gray-600 text-[12px] mt-2 leading-relaxed line-clamp-2">
                    {pole.desc}
                  </p>
                  <p className="text-gray-400 text-[11px] font-medium mt-1.5 leading-relaxed">
                    {pole.missions.join(", ")}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
