"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { FaLinkedinIn, FaTiktok, FaWhatsapp, FaFacebookF } from "react-icons/fa";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact submission:", form);
    setSubmitted(true);
  };

  return (
    <main className="min-h-dvh bg-slate-50 text-gray-900 font-sans antialiased pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#357dab]/10 text-[#357dab] text-xs font-bold uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            Nous Contacter
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#02073E] tracking-tight font-b612 leading-tight">
            Échangeons sur vos <span className="text-[#fd800a]">projets</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Vous souhaitez rejoindre un programme, proposer un partenariat ou en savoir plus sur nos activités ? Notre équipe vous répond avec plaisir.
          </p>
        </div>

        {/* Grille Split Formulaire & Coordonnées */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Côté Gauche : Coordonnées & Réseaux Sociaux */}
          <div className="lg:col-span-5 bg-[#02073E] text-white rounded-3xl p-6 sm:p-8 space-y-8 shadow-xl">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#fd800a]">Informations Directes</span>
              <h2 className="text-xl sm:text-2xl font-bold mt-1 text-white">Ghostech Côte d'Ivoire</h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Rejoignez le mouvement d'innovation technologique africain au cœur de l'écosystème d'Abidjan.
              </p>
            </div>

            <div className="space-y-5 text-sm">
              <a
                href="tel:+2250556130245"
                className="flex items-start gap-4 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              >
                <div className="w-10 h-10 rounded-xl bg-[#fd800a]/20 text-[#fd800a] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Téléphone / WhatsApp</span>
                  <span className="font-bold text-white text-sm sm:text-base">+225 05 56 13 02 45</span>
                </div>
              </a>

              <a
                href="mailto:ghostech92@gmail.com"
                className="flex items-start gap-4 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              >
                <div className="w-10 h-10 rounded-xl bg-[#357dab]/20 text-[#357dab] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-slate-400 block font-medium">Courriel Officiel</span>
                  <span className="font-bold text-white text-sm sm:text-base truncate block">ghostech92@gmail.com</span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Localisation</span>
                  <span className="font-bold text-white text-sm sm:text-base">Abidjan, Côte d'Ivoire</span>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Suivez nos actualités
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://lnkd.in/edXVXbH8"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#0077b5] text-white flex items-center justify-center transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@ghostech00"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-black text-white flex items-center justify-center transition-all"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-4 h-4" />
                </a>
                <a
                  href="https://chat.whatsapp.com/Le6R6EvCKOR8I3kmQEd9XS"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-all"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Côté Droit : Formulaire */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-md">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Message bien transmis !</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Merci de nous avoir contactés. Un membre de l'équipe Ghostech vous répondra dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#02073E] text-white text-xs font-bold hover:bg-black transition cursor-pointer"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Envoyez-nous un message</h3>
                  <p className="text-xs text-gray-500">Remplissez le formulaire ci-dessous pour démarrer une conversation.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Jérémie Harding"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#357dab] focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Adresse email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="votre.email@exemple.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#357dab] focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Sujet de la demande *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Proposition de partenariat / Inscription"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#357dab] focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Votre message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Détaillez votre projet, vos objectifs ou vos questions..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#357dab] focus:bg-white transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#fd800a] hover:bg-[#e06e00] text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmettre ma demande</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}
