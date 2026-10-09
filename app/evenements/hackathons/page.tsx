import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaCheckCircle, FaLaptopCode } from "react-icons/fa";

export default function HackathonsPage() {
  return (
    <main className="min-h-dvh bg-white px-4 sm:px-6 lg:px-8 pb-20 pt-24 text-gray-900 font-sans antialiased">
      <div className="mx-auto max-w-6xl">
        {/* Kicker éditorial */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#ff6500]"></span>
          <p className="text-xs font-bold uppercase tracking-widest text-[#ff6500]">
            Événements & Challenges Technologiques
          </p>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#02073E] tracking-tight mb-8">
          Formations Immersives & Hackathons Ghostech
        </h1>

        {/* Feature Event Grid */}
        <div className="grid items-start gap-8 lg:grid-cols-12">
          {/* Média principal */}
          <section className="lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm">
              <Image
                src="/header_photo/affiche.jpeg"
                alt="Participants à une formation en cybersécurité"
                fill
                priority
                className="object-contain"
              />
            </div>
          </section>

          {/* Fiche d'informations clés */}
          <aside className="lg:col-span-5 bg-gray-50/80 border border-gray-100 rounded-2xl p-6 sm:p-8 space-y-5">
            <div>
              <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#ff6500]/10 text-[#ff6500] border border-[#ff6500]/20 mb-2">
                Programme Certifiant
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                Formation Intensive en Cybersécurité
              </h2>
            </div>

            <div className="space-y-3 border-y border-gray-200 py-4 text-xs sm:text-sm">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-600 flex items-center gap-2">
                  <FaClock className="text-[#ff6500]" /> Durée du parcours
                </span>
                <span className="font-bold text-gray-900">4 mois (Intensif)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-600 flex items-center gap-2">
                  <FaCalendarAlt className="text-[#ff6500]" /> Période de recrutement
                </span>
                <span className="font-bold text-gray-900">24 avril — 06 mai</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-600 flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-500" /> Certification
                </span>
                <span className="font-bold text-emerald-600">Reconnue à l'international</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                type="button"
                disabled
                className="w-full bg-gray-200 py-3 rounded-xl text-xs sm:text-sm font-bold text-gray-500 cursor-not-allowed transition"
              >
                Candidatures closes
              </button>
              <p className="text-center text-[11px] text-[#ff6500] font-medium">
                La cohorte actuelle est complète. Prochaine session bientôt disponible.
              </p>
              <Link
                href="/formation"
                className="w-full block text-center border border-gray-300 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-gray-800 hover:bg-gray-100 transition"
              >
                Explorer nos autres programmes
              </Link>
            </div>
          </aside>
        </div>

        {/* Section Description */}
        <section className="mt-12 max-w-3xl space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">Description du programme</h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-600">
            Développez des compétences de pointe dans le métier d&apos;avenir de la Cybersécurité : analyse de vulnérabilités, sécurisation des réseaux, cryptographie et réponse aux incidents. Rejoignez un environnement d&apos;apprentissage immersif encadré par des professionnels chevronnés du secteur tech africain.
          </p>
        </section>

        {/* Autres événements & Hackathons en grille responsive */}
        <section className="mt-16 border-t border-gray-200 pt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Événements & Challenges Associés
            </h2>
            <Link href="/devarena/actualites" className="text-xs sm:text-sm font-bold text-[#ff6500] hover:underline flex items-center gap-1">
              Voir DevArena →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-video w-full bg-gray-50">
                  <Image
                    src="/header_photo/affiche.jpeg"
                    alt="Affiche Formation Cybersécurité"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    Formation
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900">Session Cybersécurité 2026</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500 line-clamp-2">
                    Apprenez à sécuriser les infrastructures numériques critiques et préparez les certifications internationales.
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                    <span>Durée : 4 mois</span>
                    <span className="text-[#ff6500] font-bold">Session Printemps</span>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href="/formation"
                  className="w-full block text-center border border-[#ff6500] py-2 rounded-lg text-xs font-bold text-[#ff6500] hover:bg-[#ff6500] hover:text-white transition"
                >
                  Voir les détails
                </Link>
              </div>
            </article>

            <article className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-video w-full bg-slate-900 flex items-center justify-center">
                  <div className="text-center p-4">
                    <FaLaptopCode className="text-4xl text-[#ff6500] mx-auto mb-2" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Ghostech DevDay</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-[#ff6500] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    Hackathon
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900">AI & Automation Challenge</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500 line-clamp-2">
                    72 heures pour concevoir un agent conversationnel et automatiser les services d'un écosystème numérique.
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                    <span>Prize : 2 500 000 FCFA</span>
                    <span className="text-emerald-600 font-bold">À Venir</span>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href="/evenements/hackathons/2"
                  className="w-full block text-center bg-gray-900 text-white py-2 rounded-lg text-xs font-bold hover:bg-black transition"
                >
                  Consulter le challenge
                </Link>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}