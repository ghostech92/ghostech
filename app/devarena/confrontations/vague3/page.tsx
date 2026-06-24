"use client";
import React from "react";

export default function ConfrontationsVague3() {
  return (
    <div className="min-h-screen bg-[#F4F4F6] text-gray-900 font-sans overflow-x-hidden">
      <section className="pt-24 pb-12 bg-white/80 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-gray-100 border border-gray-200 rounded-full mb-6">
            <span className="text-xl">🔒</span>
            <span className="uppercase tracking-[3px] text-xs font-mono text-gray-500">Vague 3 — À venir</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Confrontations <span className="text-gray-400">Vague 3</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La vague finale n&apos;a pas encore commencé.<br />
            Les confrontations seront annoncées en temps voulu.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <div className="w-32 h-32 bg-gray-100 border-2 border-gray-200 rounded-full flex items-center justify-center mb-8">
          <span className="text-6xl">🔒</span>
        </div>
        <h2 className="text-3xl font-light text-gray-700 mb-4">Vague 3 non démarrée</h2>
        <p className="text-gray-500 max-w-md leading-relaxed mb-10">
          Les duos de la vague finale seront formés après la clôture de la Vague 2.
          Les matchs seront publiés ici dès l&apos;ouverture officielle.
        </p>
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-3xl">
          {[
            { icon: "🎯", title: "Finale & Projets Innovants", desc: "Le thème le plus ambitieux de la saison" },
            { icon: "👥", title: "Nouveaux Duos", desc: "Redistribution aléatoire des équipes" },
            { icon: "🏆", title: "Grand Prix", desc: "Le titre de Champion DevArena 2026" },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 opacity-60">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 px-8 py-4 bg-gray-100 border border-gray-200 rounded-2xl text-gray-500 text-sm">
          📅 Ouverture estimée : <span className="font-bold text-gray-700">Juillet 2026</span>
        </div>
      </section>
    </div>
  );
}
