"use client";
import React from "react";

export default function ClassementVague3() {
  return (
    <div className="min-h-screen bg-[#F4F4F6] text-gray-900 font-sans pb-20">
      <section className="pt-24 pb-12 bg-white/80 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-gray-100 border border-gray-200 rounded-full mb-6">
            <span className="text-xl">🔒</span>
            <span className="uppercase tracking-[3px] text-xs font-mono text-gray-500">Vague 3 — À venir</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Classement <span className="text-gray-400">Vague 3</span>
          </h1>
          <p className="text-gray-500 text-lg">Le classement de la vague finale sera disponible prochainement.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-24 flex flex-col items-center text-center">
        <div className="w-32 h-32 bg-gray-100 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center mb-8">
          <span className="text-5xl">🔒</span>
        </div>
        <h2 className="text-2xl font-light text-gray-600 mb-3">Classement verrouillé</h2>
        <p className="text-gray-400 max-w-sm">
          Ce classement sera disponible dès le lancement de la Vague 3. Estimé pour juillet 2026.
        </p>
      </div>
    </div>
  );
}
