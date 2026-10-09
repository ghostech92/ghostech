"use client";

import { useState, FormEvent } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, User, Briefcase, Heart, ClipboardCheck, ExternalLink } from "lucide-react";

export default function RejoindreEquipe() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    // Étape 1 : Informations personnelles
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    // Étape 2 : Profil professionnel
    statut: "Étudiant",
    etablissement: "",
    domaine: "Développement Web / Mobile",
    niveau: "Débutant",
    portfolio: "",
    // Étape 3 : Motivation et engagement
    motivation: "",
    contribution: "En participant aux projets",
    disponibilite: "2 à 5h / semaine",
    source: "Réseaux sociaux",
    consentement: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData({ ...formData, [target.name]: value });
  };

  const nextStep = () => { if (step < totalSteps) setStep(step + 1); };
  const prevStep = () => { if (step > 1) setStep(step - 1); };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Candidature Ghostech reçue :", formData);
    setSubmitted(true);
  };

  // Validation par étape
  const isStepValid = () => {
    if (step === 1) return formData.firstName && formData.lastName && formData.email && formData.phone && formData.country && formData.city;
    if (step === 2) return formData.statut && formData.domaine && formData.niveau;
    if (step === 3) return formData.motivation && formData.contribution && formData.disponibilite && formData.source && formData.consentement;
    return true;
  };

  const stepTitles = [
    { title: "Informations personnelles", subtitle: "Faisons connaissance !", icon: User },
    { title: "Profil professionnel", subtitle: "Parlez-nous de votre parcours.", icon: Briefcase },
    { title: "Motivation & engagement", subtitle: "Ce qui vous anime chez Ghostech.", icon: Heart },
    { title: "Confirmation", subtitle: "Vérifiez vos informations.", icon: ClipboardCheck },
  ];

  const SLOGAN = "Innovation, impact, collaboration, apprentissage, excellence, engagement africain : ce sont nos valeurs.";

  return (
    <main className="w-full min-h-dvh bg-[#FAFAFA] py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl mx-auto">

        {/* En-tête avec slogan */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#fd800a]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#fd800a]">
              Ghostech · Communauté
            </p>
            <span className="h-px w-8 bg-[#fd800a]" />
          </div>
          <h1 className="font-b612 text-4xl sm:text-5xl font-black text-[#111111] tracking-tight mb-4">
            Rejoindre l'équipe
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {SLOGAN}
          </p>
        </div>

        {/* Stepper horizontal avec icônes */}
        <div className="flex items-center justify-between mb-8 sm:mb-10 px-1">
          {[1, 2, 3, 4].map((num, index) => (
            <div key={num} className="flex items-center flex-1 last:flex-none">
              <div className={`relative grid place-items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full font-bold text-xs sm:text-sm transition-all duration-500 shrink-0 ${
                step === num
                  ? "bg-[#fd800a] text-white shadow-lg shadow-[#fd800a]/30 scale-105 sm:scale-110"
                  : step > num
                  ? "bg-[#fd800a] text-white"
                  : "bg-white border-2 border-zinc-200 text-zinc-400"
              }`}>
                {step > num ? <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" /> : num}
              </div>
              {index < totalSteps - 1 && (
                <div className="flex-1 h-0.5 mx-1.5 sm:mx-3 bg-zinc-200 relative overflow-hidden rounded-full">
                  <div className={`absolute top-0 left-0 h-full bg-[#fd800a] transition-all duration-700 ease-out ${step > num ? "w-full" : "w-0"}`} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Carte du formulaire */}
        <div className="w-full bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 sm:p-10">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              {/* Titre de l'étape avec icône */}
              <div className="mb-8 flex items-center gap-4">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-[#fd800a]/10 text-[#fd800a]">
                  {(() => {
                    const Icon = stepTitles[step - 1].icon;
                    return <Icon className="w-6 h-6" />;
                  })()}
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#111111]">{stepTitles[step - 1].title}</h2>
                  <p className="text-sm text-zinc-500 mt-0.5">{stepTitles[step - 1].subtitle}</p>
                </div>
              </div>

              {/* ÉTAPE 1 : Informations personnelles */}
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#111111] mb-2">
                        Prénom <span className="text-red-500">*</span>
                      </label>
                      <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange}
                        placeholder="Ex : Jérémy"
                        className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#fd800a] focus:ring-2 focus:ring-[#fd800a]/10 transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#111111] mb-2">
                        Nom <span className="text-red-500">*</span>
                      </label>
                      <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange}
                        placeholder="Ex : Beh"
                        className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#fd800a] focus:ring-2 focus:ring-[#fd800a]/10 transition" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111111] mb-2">
                      Adresse e-mail <span className="text-red-500">*</span>
                    </label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange}
                      placeholder="Ex : votre.email@exemple.com"
                      className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#fd800a] focus:ring-2 focus:ring-[#fd800a]/10 transition" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111111] mb-2">
                      Numéro de téléphone (WhatsApp) <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                      placeholder="Ex : +225 07 00 00 00 00"
                      className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#fd800a] focus:ring-2 focus:ring-[#fd800a]/10 transition" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#111111] mb-2">
                        Pays <span className="text-red-500">*</span>
                      </label>
                      <input type="text" name="country" required value={formData.country} onChange={handleChange}
                        placeholder="Ex : Côte d'Ivoire"
                        className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#fd800a] focus:ring-2 focus:ring-[#fd800a]/10 transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#111111] mb-2">
                        Ville <span className="text-red-500">*</span>
                      </label>
                      <input type="text" name="city" required value={formData.city} onChange={handleChange}
                        placeholder="Ex : Abidjan"
                        className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#fd800a] focus:ring-2 focus:ring-[#fd800a]/10 transition" />
                    </div>
                  </div>
                </div>
              )}

              {/* ÉTAPE 2 : Profil professionnel */}
              {step === 2 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#111111] mb-2">
                        Statut actuel <span className="text-red-500">*</span>
                      </label>
                      <select name="statut" value={formData.statut} onChange={handleChange}
                        className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#fd800a] focus:ring-2 focus:ring-[#fd800a]/10 transition cursor-pointer">
                        <option value="Étudiant">Étudiant</option>
                        <option value="Développeur junior">Développeur junior</option>
                        <option value="Professionnel">Professionnel</option>
                        <option value="Entrepreneur">Entrepreneur</option>
                        <option value="Designer">Designer</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#111111] mb-2">
                        Niveau d'expérience <span className="text-red-500">*</span>
                      </label>
                      <select name="niveau" value={formData.niveau} onChange={handleChange}
                        className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#fd800a] focus:ring-2 focus:ring-[#fd800a]/10 transition cursor-pointer">
                        <option value="Débutant">Débutant</option>
                        <option value="Intermédiaire">Intermédiaire</option>
                        <option value="Avancé">Avancé</option>
                        <option value="Expert">Expert</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111111] mb-2">
                      Établissement ou Entreprise <span className="text-zinc-400 text-xs">(Optionnel)</span>
                    </label>
                    <input type="text" name="etablissement" value={formData.etablissement} onChange={handleChange}
                      placeholder="Ex : IUA, universités locales, entreprise..."
                      className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#fd800a] focus:ring-2 focus:ring-[#fd800a]/10 transition" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111111] mb-2">
                      Domaine d'expertise / Compétences techniques <span className="text-red-500">*</span>
                    </label>
                    <select name="domaine" value={formData.domaine} onChange={handleChange}
                      className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#fd800a] focus:ring-2 focus:ring-[#fd800a]/10 transition cursor-pointer">
                      <option value="Développement Web / Mobile">Développement Web / Mobile (Frontend, Backend...)</option>
                      <option value="Intelligence Artificielle / Data Science">Intelligence Artificielle / Data Science</option>
                      <option value="Internet des Objets (IoT) / Électronique">Internet des Objets (IoT) / Électronique</option>
                      <option value="UI/UX Design / Infographie">UI/UX Design / Infographie</option>
                      <option value="Marketing digital / Création de contenu">Marketing digital / Création de contenu</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111111] mb-2">
                      Portfolio / LinkedIn / GitHub <span className="text-zinc-400 text-xs">(Optionnel)</span>
                    </label>
                    <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange}
                      placeholder="Ex : https://linkedin.com/in/votre-profil"
                      className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#fd800a] focus:ring-2 focus:ring-[#fd800a]/10 transition" />
                  </div>
                </div>
              )}

              {/* ÉTAPE 3 : Motivation & engagement */}
              {step === 3 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div>
                    <label className="block text-sm font-medium text-[#111111] mb-2">
                      Pourquoi souhaitez-vous rejoindre Ghostech ? <span className="text-red-500">*</span>
                    </label>
                    <textarea name="motivation" required rows={4} value={formData.motivation} onChange={handleChange}
                      placeholder="Réseautage, mentorat, participation à des hackathons, projets open source..."
                      className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#fd800a] focus:ring-2 focus:ring-[#fd800a]/10 transition resize-none" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#111111] mb-2">
                        Comment contribuer ? <span className="text-red-500">*</span>
                      </label>
                      <select name="contribution" value={formData.contribution} onChange={handleChange}
                        className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#fd800a] focus:ring-2 focus:ring-[#fd800a]/10 transition cursor-pointer">
                        <option value="En participant aux projets">En participant aux projets</option>
                        <option value="En tant que formateur / mentor">En tant que formateur / mentor</option>
                        <option value="En partageant du contenu ou en participant aux événements">Partage de contenu / événements</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#111111] mb-2">
                        Disponibilité hebdomadaire <span className="text-red-500">*</span>
                      </label>
                      <select name="disponibilite" value={formData.disponibilite} onChange={handleChange}
                        className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#fd800a] focus:ring-2 focus:ring-[#fd800a]/10 transition cursor-pointer">
                        <option value="Moins de 2h / semaine">Moins de 2h / semaine</option>
                        <option value="2 à 5h / semaine">2 à 5h / semaine</option>
                        <option value="5 à 10h / semaine">5 à 10h / semaine</option>
                        <option value="Plus de 10h / semaine">Plus de 10h / semaine</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111111] mb-2">
                      Comment avez-vous connu Ghostech ? <span className="text-red-500">*</span>
                    </label>
                    <select name="source" value={formData.source} onChange={handleChange}
                      className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#fd800a] focus:ring-2 focus:ring-[#fd800a]/10 transition cursor-pointer">
                      <option value="Réseaux sociaux">Réseaux sociaux (Instagram, LinkedIn, TikTok)</option>
                      <option value="Bouche à oreille">Bouche à oreille</option>
                      <option value="Événement / Conférence">Événement / Conférence</option>
                      <option value="Recherche Google">Recherche Google</option>
                      <option value="École / Université">École / Université</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>

                  {/* Consentement RGPD */}
                  <label className="flex items-start gap-3 cursor-pointer p-4 rounded-lg border border-zinc-200 hover:border-[#fd800a]/40 transition-colors bg-zinc-50/50">
                    <input
                      type="checkbox"
                      name="consentement"
                      checked={formData.consentement}
                      onChange={handleChange}
                      required
                      className="mt-0.5 w-4 h-4 accent-[#fd800a] cursor-pointer shrink-0"
                    />
                    <span className="text-xs text-zinc-600 leading-relaxed">
                      J'accepte que mes données soient utilisées par Ghostech pour être contacté, intégrer les groupes de communication et recevoir la newsletter. <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>
              )}

              {/* ÉTAPE 4 : Confirmation */}
              {step === 4 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <p className="text-sm text-zinc-500 mb-4">
                    Vérifiez vos informations avant l'envoi de votre candidature.
                  </p>

                  <div className="rounded-xl border border-zinc-200 divide-y divide-zinc-100 overflow-hidden">
                    {[
                      { label: "Nom complet", value: `${formData.firstName} ${formData.lastName}` },
                      { label: "Email", value: formData.email },
                      { label: "Téléphone (WhatsApp)", value: formData.phone },
                      { label: "Localisation", value: `${formData.city}, ${formData.country}` },
                      { label: "Statut actuel", value: formData.statut },
                      { label: "Niveau d'expérience", value: formData.niveau },
                      { label: "Établissement / Entreprise", value: formData.etablissement || "Non renseigné" },
                      { label: "Domaine d'expertise", value: formData.domaine },
                      { label: "Portfolio", value: formData.portfolio || "Non renseigné", isLink: true },
                      { label: "Contribution souhaitée", value: formData.contribution },
                      { label: "Disponibilité", value: formData.disponibilite },
                      { label: "Source", value: formData.source },
                      { label: "Motivation", value: formData.motivation },
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">{item.label}</span>
                        {item.isLink && item.value !== "Non renseigné" ? (
                          <a href={item.value} target="_blank" rel="noreferrer"
                            className="text-sm text-[#fd800a] font-medium hover:underline inline-flex items-center gap-1 sm:text-right sm:max-w-[60%] wrap-break-word">
                            {item.value}
                            <ExternalLink className="w-3 h-3 shrink-0" />
                          </a>
                        ) : (
                          <span className="text-sm text-[#111111] font-medium sm:text-right sm:max-w-[60%] wrap-break-word">
                            {item.value}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Boutons Previous / Next avec validation */}
              <div className="flex items-center justify-between pt-8 mt-8 border-t border-zinc-100">
                {step > 1 ? (
                  <button type="button" onClick={prevStep}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-200 bg-white text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition">
                    <ArrowLeft className="w-4 h-4" /> Précédent
                  </button>
                ) : <div />}

                {step < totalSteps ? (
                  <button type="button" onClick={nextStep} disabled={!isStepValid()}
                    className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition shadow-md ${
                      isStepValid()
                        ? "bg-[#fd800a] text-white hover:brightness-95 shadow-[#fd800a]/20 cursor-pointer"
                        : "bg-zinc-200 text-zinc-400 cursor-not-allowed shadow-none"
                    }`}>
                    Suivant <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#fd800a] text-white text-sm font-semibold hover:brightness-95 transition shadow-md shadow-[#fd800a]/20 cursor-pointer">
                    Valider ma candidature 🚀
                  </button>
                )}
              </div>
            </form>
          ) : (
            // ÉCRAN DE SUCCÈS
            <div className="py-12 text-center space-y-4 animate-in fade-in">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-[#fd800a] mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111]">Bienvenue dans la communauté !</h3>
              <p className="text-zinc-500 text-sm max-w-sm mx-auto leading-relaxed">
                Félicitations <span className="font-semibold text-[#111111]">{formData.firstName}</span> ! Ton dossier a bien été transmis. L'équipe Ghostech va l'étudier avec attention.
              </p>
              <button type="button" onClick={() => { setSubmitted(false); setStep(1); }}
                className="text-xs text-[#fd800a] hover:underline font-semibold pt-4 block mx-auto">
                Soumettre un autre profil
              </button>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}