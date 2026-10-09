import Link from "next/link";

const sections = [
  {
    title: "1. Objet",
    content: [
      "Les présentes Conditions générales d'utilisation (CGU) encadrent l'accès et l'utilisation du site Ghostech, de ses espaces communautaires, de ses formations, événements et services numériques.",
      "En naviguant sur le site ou en créant un compte, l'utilisateur reconnaît avoir lu et accepté les présentes CGU."
    ]
  },
  {
    title: "2. Accès au site et aux services",
    content: [
      "Ghostech s'efforce de maintenir le site accessible, mais ne garantit pas une disponibilité continue. Des interruptions peuvent être nécessaires pour la maintenance, la sécurité ou les mises à jour.",
      "Certaines fonctionnalités, formations ou événements peuvent être soumis à des conditions particulières, à une inscription ou à des places limitées."
    ]
  },
  {
    title: "3. Création et sécurité du compte",
    content: [
      "L'utilisateur s'engage à fournir des informations exactes, à jour et complètes lors de son inscription. Il est responsable de la confidentialité de ses identifiants et de toute activité réalisée depuis son compte.",
      "Toute utilisation frauduleuse, usurpation d'identité ou compromission du compte doit être signalée rapidement à Ghostech à l'adresse ghostech92@gmail.com."
    ]
  },
  {
    title: "4. Règles de la communauté",
    content: [
      "Ghostech est un espace d'apprentissage, de collaboration et de partage. Chaque membre doit respecter les autres participants, les organisateurs, les intervenants et les partenaires.",
      "Sont notamment interdits : le harcèlement, les propos haineux ou discriminatoires, les menaces, le spam, la diffusion de contenus illicites, l'usurpation d'identité et toute tentative de nuire au fonctionnement du site ou d'un service.",
      "Ghostech peut suspendre ou supprimer un compte qui enfreint ces règles, après examen des faits et dans le respect de la réglementation applicable."
    ]
  },
  {
    title: "5. Contenus publiés par les utilisateurs",
    content: [
      "L'utilisateur reste propriétaire des contenus qu'il transmet ou publie sur Ghostech. Il garantit disposer des droits nécessaires sur ces contenus et ne pas porter atteinte aux droits de tiers.",
      "En publiant un contenu dans un espace Ghostech, l'utilisateur autorise Ghostech à l'héberger, l'afficher et le partager dans le cadre du fonctionnement, de la valorisation et de la communication de la communauté. Cette autorisation est non exclusive et limitée à ces finalités.",
      "Ghostech peut retirer un contenu manifestement illicite, dangereux, trompeur ou contraire aux présentes CGU."
    ]
  },
  {
    title: "6. Propriété intellectuelle",
    content: [
      "Le nom Ghostech, son identité visuelle, ses textes, interfaces, logos, vidéos, ressources pédagogiques et éléments graphiques sont protégés par les règles applicables de propriété intellectuelle.",
      "Toute reproduction, adaptation, extraction ou exploitation non autorisée de ces éléments est interdite. Les contenus partagés par les partenaires ou les utilisateurs restent soumis aux droits de leurs auteurs."
    ]
  },
  {
    title: "7. Données personnelles",
    content: [
      "Ghostech traite certaines données nécessaires à la création de compte, à la gestion des candidatures, à l'organisation des activités et à la communication avec les membres.",
      "Les modalités de collecte, d'utilisation, de conservation et d'exercice des droits sont précisées dans la Politique de confidentialité lorsqu'elle est disponible. Pour toute demande relative à ses données, l'utilisateur peut écrire à ghostech92@gmail.com."
    ]
  },
  {
    title: "8. Responsabilité",
    content: [
      "L'utilisateur utilise le site et les services sous sa responsabilité. Il lui appartient de disposer d'un équipement, d'une connexion et de logiciels compatibles.",
      "Ghostech met en œuvre des moyens raisonnables pour fournir des informations fiables, mais ne garantit pas que tous les contenus soient exhaustifs, permanents ou exempts d'erreurs. Les liens vers des services tiers restent soumis aux conditions de ces services."
    ]
  },
  {
    title: "9. Modification et résiliation",
    content: [
      "Ghostech peut faire évoluer les services et mettre à jour les présentes CGU. La version applicable est celle publiée sur cette page à la date de consultation.",
      "L'utilisateur peut demander la fermeture de son compte en contactant Ghostech. Les obligations qui, par nature, doivent continuer à produire effet après la fermeture restent applicables."
    ]
  },
  {
    title: "10. Droit applicable et contact",
    content: [
      "Les présentes CGU sont soumises au droit applicable en Côte d'Ivoire, sous réserve des règles impératives qui pourraient s'appliquer à l'utilisateur.",
      "Pour toute question concernant ces conditions ou les services Ghostech, contactez-nous à ghostech92@gmail.com ou au +225 05 56 13 02 45."
    ]
  }
];

export default function ConditionsGeneralesPage() {
  return (
    <main className="min-h-dvh bg-[#f8fafc] px-4 pb-20 pt-24 sm:pt-28 text-slate-800 sm:px-6 lg:px-8 font-sans antialiased">
      <article className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
        <header className="bg-[#fd800a] px-5 py-8 sm:px-10 sm:py-12 text-white">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black">Ghostech Juridique</p>
          <h1 className="font-b612 text-2xl font-bold leading-tight sm:text-4xl md:text-5xl">Conditions générales d&apos;utilisation</h1>
          <p className="mt-3 sm:mt-5 max-w-2xl text-xs sm:text-sm leading-6 text-white/85">
            Les règles qui encadrent l&apos;utilisation du site et la vie de la communauté Ghostech.
          </p>
          <p className="mt-4 text-[11px] text-white/70">Dernière mise à jour : 1er octobre 2026</p>
        </header>

        <div className="px-5 py-8 sm:px-10 sm:py-12">
          <p className="mb-10 border-l-4 border-[#fd800a] bg-orange-50 px-4 py-3 text-sm leading-6 text-slate-700">
            Ces conditions présentent le cadre général d&apos;utilisation de Ghostech. Elles sont destinées à être relues et validées par un conseil juridique avant une publication contractuelle définitive.
          </p>

          <div className="space-y-9">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-bold text-[#02073E]">{section.title}</h2>
                <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
            <Link href="/" className="font-semibold text-[#357dab] hover:text-[#fd800a]">
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
