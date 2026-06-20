"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";

export default function RejoindreEquipe() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    motivation: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi de formulaire
    console.log("Candidature Ghostech reçue :", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="w-full min-h-screen bg-white text-[#0F2137] flex flex-col items-center pt-32 lg:pt-40">

      {/* SECTION DU CONTENU */}
      <section className="w-full max-w-6xl px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">

        {/* COLONNE DE GAUCHE : ARGUMENTS DE MOTIVATION */}
        <div className="lg:col-span-5 text-left">
          <h3 className="text-sm font-bold text-[#357dab] uppercase tracking-widest mb-3">Rejoins-nous</h3>
          <h1 className="text-4xl font-bold text-[#02073E] mb-6 font-b612 leading-tight">
            Candidature spontanée
          </h1>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
            Rejoindre Ghostech, ce n'est pas juste ajouter une ligne sur ton CV. C'est intégrer un collectif de talents déterminés à construire de vraies solutions.
          </p>

          {/* LISTE DES ARGUMENTS */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-[#357dab] font-bold text-lg shrink-0">
                🚀
              </div>
              <div>
                <h4 className="text-md font-bold text-[#02073E] mb-1">De vrais projets de A à Z</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  Terminé les exercices théoriques. Ici, on code, on design et on déploie des applications qui impactent la vie du campus et de la société.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-[#357dab] font-bold text-lg shrink-0">
                🤝
              </div>
              <div>
                <h4 className="text-md font-bold text-[#02073E] mb-1">Mentorat & Esprit d'équipe</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  Ne reste plus jamais bloqué sur un bug. Tu progresses aux côtés de talents plus expérimentés dans une ambiance d'entraide constante.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-[#357dab] font-bold text-lg shrink-0">
                💼
              </div>
              <div>
                <h4 className="text-md font-bold text-[#02073E] mb-1">Réseau & Opportunités</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  Présente tes travaux lors de nos événements et entre en contact direct avec des professionnels et entreprises de l'écosystème tech ivoirien.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COLONNE DE DROITE : FORMULAIRE PROPRE */}
        <div className="lg:col-span-7 w-full bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#02073E] uppercase tracking-wider mb-2">Nom complet</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ex: Jean Dupont"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#357dab] transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#02073E] uppercase tracking-wider mb-2">Adresse Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ex: jean.dupont@email.com"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#357dab] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#02073E] uppercase tracking-wider mb-2">Lien (LinkedIn, GitHub, Portfolio...)</label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#357dab] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#02073E] uppercase tracking-wider mb-2">Parlez-nous de vous</label>
                <textarea
                  name="motivation"
                  required
                  rows={5}
                  value={formData.motivation}
                  onChange={handleChange}
                  placeholder="Vos compétences, ce que vous recherchez, vos projets actuels..."
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#357dab] transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#357dab] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#086666] transition shadow-md shadow-teal-700/10 mt-2"
              >
                Envoyer ma candidature 🚀
              </button>
            </form>
          ) : (
            // COMPOSANT DE REMERCIEMENT APRÈS SOUMISSION
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 text-3xl mx-auto">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-[#02073E]">Candidature bien reçue !</h3>
              <p className="text-gray-500 text-[14px] max-w-sm mx-auto leading-relaxed">
                Merci {formData.name}. L'équipe va analyser ton profil et tes réalisations. On te recontacte très vite par email !
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-gray-400 underline hover:text-[#357dab] transition pt-4 block mx-auto"
              >
                Modifier ou renvoyer un formulaire
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-7xl mt-auto py-12 border-t border-gray-100 text-center text-sm text-gray-400">
        Copyright 2026 Ghostech
      </footer>
    </main>
  );
}