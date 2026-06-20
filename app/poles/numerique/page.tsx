"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ─── COMPOSANT COUNTER (compteur animé) ───
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const step = Math.max(1, target / 60);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 30);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function PoleNumeriquePage() {
  const [activeStack, setActiveStack] = useState<
    "tous" | "web" | "data" | "cloud" | "security"
  >("tous");
  const [scrollY, setScrollY] = useState(0);

  // ─── Parallaxe pour le fond du hero ───
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ─── NOUVELLE STACK TECHNIQUE ÉLARGIE ───
  const techStacks = [
    // Web
    { name: "Next.js", category: "web", version: "14+", icon: "🌐" },
    { name: "TypeScript", category: "web", version: "Strict", icon: "🛡️" },
    { name: "Tailwind CSS", category: "web", version: "v3/v4", icon: "🎨" },
    { name: "Laravel", category: "web", version: "11 (PHP 8.3)", icon: "⚡" },
    { name: "Node.js", category: "web", version: "LTS", icon: "🟢" },
    // Data & IA
    { name: "Python", category: "data", version: "3.11", icon: "🐍" },
    { name: "Pandas / NumPy", category: "data", version: "Libs", icon: "📊" },
    { name: "Machine Learning", category: "data", version: "Scikit-Learn", icon: "🧠" },
    { name: "Tableau / PowerBI", category: "data", version: "Visualisation", icon: "📈" },
    // Cloud & DevOps
    { name: "Docker", category: "cloud", version: "Conteneurs", icon: "🐳" },
    { name: "AWS / GCP", category: "cloud", version: "Cloud", icon: "☁️" },
    { name: "Git & CI/CD", category: "cloud", version: "Intégration", icon: "🔄" },
    // Cybersécurité
    { name: "Wireshark", category: "security", version: "Analyse", icon: "🔍" },
    { name: "Kali Linux", category: "security", version: "Pentest", icon: "💻" },
    { name: "Zero Trust", category: "security", version: "Architecture", icon: "🔐" },
  ];

  // ─── PROJETS AVEC IMAGES ───
  const projetsTech = [
    {
      title: "QbLog",
      type: "Plateforme de Contenu SaaS",
      tech: ["Next.js", "Tailwind CSS", "Cloudinary"],
      desc: "Un CMS moderne conçu pour centraliser et dynamiser les publications, articles et partages de connaissances de la communauté étudiante.",
      status: "Optimisation UI & Media",
      statusColor: "bg-blue-500/10 text-blue-600 border-blue-200",
      image: "https://picsum.photos/seed/qblog/600/400",
    },
    {
      title: "NadegeEiixr",
      type: "Application Web d'Administration",
      tech: ["Laravel", "PHP", "React", "MySQL"],
      desc: "Solution applicative interne dédiée à la gestion, la modification et la persistance des formulaires complexes pour fluidifier les processus académiques.",
      status: "En production / Bugfix",
      statusColor: "bg-green-500/10 text-green-600 border-green-200",
      image: "https://picsum.photos/seed/nadege/600/400",
    },
    {
      title: "AgroSpatial Insight",
      type: "Outil d'Analyse Prédictive (Data Science)",
      tech: ["Python", "Machine Learning", "QGIS", "Pandas"],
      desc: "Projet de R&D exploitant l'intelligence spatiale et la cartographie pour soutenir les initiatives de souveraineté alimentaire en Afrique.",
      status: "R&D Lab",
      statusColor: "bg-purple-500/10 text-purple-600 border-purple-200",
      image: "https://picsum.photos/seed/agro/600/400",
    },
    {
      title: "SecureIoT Gateway",
      type: "Sécurité des Objets Connectés",
      tech: ["Python", "MQTT", "Kali Linux", "Wireshark"],
      desc: "Passerelle IoT sécurisée avec analyse de trafic en temps réel, détection d'intrusions et chiffrement de bout en bout pour les réseaux de capteurs.",
      status: "Prototype",
      statusColor: "bg-red-500/10 text-red-600 border-red-200",
      image: "https://picsum.photos/seed/iot/600/400",
    },
  ];

  const filteredStacks =
    activeStack === "tous"
      ? techStacks
      : techStacks.filter((tech) => tech.category === activeStack);

  return (
    <main className="w-full min-h-screen bg-white text-[#0F2137] flex flex-col items-center overflow-hidden">

      {/* ============================================================ */}
      {/* HERO AVEC PARALLAXE & FORMES FLOTTANTES */}
      {/* ============================================================ */}
      <section className="relative w-full overflow-hidden pt-24 pb-20 px-4 bg-gradient-to-br from-[#0F2137] via-[#1a2e4a] to-[#357dab] text-white">
        
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="absolute top-10 left-[5%] w-24 h-24 rounded-full bg-[#e49834]/20 animate-float-slow"></div>
          <div className="absolute bottom-20 right-[8%] w-36 h-36 rounded-full bg-[#2DCA73]/20 animate-float-medium"></div>
          <div className="absolute top-1/3 right-[20%] w-16 h-16 border-4 border-white/10 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/4 left-[15%] w-20 h-20 border-2 border-[#e49834]/30 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-2/3 left-[40%] w-12 h-12 bg-white/5 rounded-full blur-sm animate-float-fast"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-[#e49834] mb-3">
            Pôle Numérique &amp; R&D
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-b612 leading-tight mb-6">
            L'ensemble des technologies <br />
            <span className="bg-gradient-to-r from-[#e49834] via-[#2DCA73] to-[#357dab] bg-clip-text text-transparent animate-gradient-x">
              au service de l'innovation
            </span>
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto opacity-90 leading-relaxed">
            Ghostech ne se limite pas au développement web. Nous couvrons l'intégralité du spectre numérique : <br />
            <strong className="text-white">Data Science, Cloud Computing, Cybersécurité, IoT, Design et bien plus.</strong>
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projets"
              className="px-8 py-3 rounded-full bg-[#e49834] text-[#0F2137] font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Voir nos chantiers
            </a>
            <a
              href="#stack"
              className="px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Explorer la stack
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHIFFRES CLÉS (avec compteurs) */}
      {/* ============================================================ */}
      <section className="w-full max-w-6xl py-16 px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          {[
            { label: "Projets livrés", value: 12, suffix: "+" },
            { label: "Étudiants formés", value: 45, suffix: "+" },
            { label: "Domaines couverts", value: 6, suffix: "" },
            { label: "Hackathons organisés", value: 5, suffix: "" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-b612 text-[#357dab]">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-gray-500 font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHANTIERS AVEC IMAGE + TEXTE (alternance) */}
      {/* ============================================================ */}
      <section id="projets" className="w-full max-w-6xl px-4 py-20">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-1 h-8 bg-[#357dab] rounded-full"></span>
          <h2 className="text-3xl md:text-4xl font-bold font-b612 text-[#0F2137]">
            Nos chantiers en cours
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {projetsTech.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 relative aspect-video bg-gray-100">
                <Image
                  src="/Brim_Ange_Flora .jpeg"
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Texte */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    {project.type}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-3 py-1 rounded-full border ${project.statusColor}`}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#02073E] mb-3 font-b612">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-50 text-gray-600 text-[10px] px-3 py-1 rounded-full font-mono border border-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button className="self-start text-[#357dab] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  En savoir plus <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* STACK TECHNIQUE ÉLARGIE (filtres enrichis) */}
      {/* ============================================================ */}
      <section id="stack" className="w-full max-w-6xl px-4 py-20 bg-[#F9FAFC] rounded-[40px] my-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold font-b612 text-[#0F2137]">Notre écosystème technologique</h2>
            <p className="text-gray-500 text-sm mt-1">
              Des compétences couvrant tout le spectre du numérique.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "tous", label: "Tout" },
              { id: "web", label: "Web" },
              { id: "data", label: "Data & IA" },
              { id: "cloud", label: "Cloud & DevOps" },
              { id: "security", label: "Cybersécurité" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveStack(btn.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeStack === btn.id
                    ? "bg-[#0F2137] text-white shadow-md"
                    : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {filteredStacks.map((tech, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-2xl">{tech.icon}</span>
              <div>
                <h4 className="text-sm font-bold text-[#0F2137]">{tech.name}</h4>
                <p className="text-[10px] text-gray-400 font-medium">{tech.version}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* STANDARDS DE QUALITÉ (cartes avec icônes) */}
      {/* ============================================================ */}
      <section className="w-full max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold font-b612 text-[#0F2137] mb-12 text-center">
          Nos standards de qualité transversaux
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🧩",
              title: "Intégrité des données",
              desc: "Nous garantissons la fiabilité et la cohérence des données, qu'il s'agisse de bases relationnelles, de flux IoT ou de jeux de données massifs.",
            },
            {
              icon: "🔒",
              title: "Sécurité par conception",
              desc: "La sécurité est intégrée dès la phase de conception, avec des audits réguliers, du chiffrement et une veille constante sur les vulnérabilités.",
            },
            {
              icon: "⚡",
              title: "Scalabilité et performance",
              desc: "Nos architectures sont conçues pour monter en charge et s'adapter aux besoins croissants, que ce soit pour une application web ou un pipeline de données.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-[#0F2137] mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* APPEL À L'ACTION (CTA) */}
      {/* ============================================================ */}
      <section className="w-full max-w-4xl px-4 py-16 mb-8">
        <div className="bg-gradient-to-r from-[#0F2137] to-[#1a2e4a] rounded-3xl p-10 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-b612 font-bold mb-4">
            Rejoignez notre pôle numérique
          </h2>
          <p className="text-gray-300 text-sm max-w-lg mx-auto leading-relaxed">
            Que vous soyez développeur, data scientist, expert cloud ou passionné de cybersécurité,
            contribuez à des projets concrets et apprenez aux côtés de talents engagés.
          </p>
          <a
            href="#"
            className="inline-block mt-8 px-10 py-3 rounded-full bg-[#e49834] text-[#0F2137] font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Postuler maintenant
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER (identique au site principal) */}
      {/* ============================================================ */}
      <footer className="w-full bg-[#0F2137] text-white pt-16 pb-8 px-4 flex flex-col items-center">
        <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo1.svg" alt="Logo" className="h-8 w-auto filter brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-[14px] leading-relaxed mb-4">
              Ghostech – Innovation, Formation et Entrepreneuriat en Afrique.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">📘</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">🐦</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">🔗</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">▶️</a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h5 className="font-bold text-white mb-1 text-[15px]">À propos</h5>
            <Link href="#" className="text-gray-400 hover:text-[#357dab] text-[14px] transition-colors">Centre d'aide</Link>
            <Link href="#" className="text-gray-400 hover:text-[#357dab] text-[14px] transition-colors">Support Technique</Link>
            <Link href="#" className="text-gray-400 hover:text-[#357dab] text-[14px] transition-colors">Notre histoire</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h5 className="font-bold text-white mb-1 text-[15px]">Informations</h5>
            <Link href="#" className="text-gray-400 hover:text-[#357dab] text-[14px] transition-colors">Règlements</Link>
            <Link href="#" className="text-gray-400 hover:text-[#357dab] text-[14px] transition-colors">Confidentialité</Link>
            <Link href="#" className="text-gray-400 hover:text-[#357dab] text-[14px] transition-colors">Cookies</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h5 className="font-bold text-white mb-1 text-[15px]">Communauté</h5>
            <Link href="#" className="text-gray-400 hover:text-[#357dab] text-[14px] transition-colors">Discord</Link>
            <Link href="#" className="text-gray-400 hover:text-[#357dab] text-[14px] transition-colors">Twitter</Link>
            <Link href="#" className="text-gray-400 hover:text-[#357dab] text-[14px] transition-colors">LinkedIn</Link>
          </div>
        </div>

        <div className="border-t border-gray-800 w-full max-w-6xl pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[13px]">
            &copy; {new Date().getFullYear()} Ghostech – Tous droits réservés.
          </p>
          <p className="text-gray-500 text-[13px]">
            Made with ❤️ à Abidjan, Côte d'Ivoire
          </p>
        </div>
      </footer>

      {/* ─── ANIMATIONS CSS ─── */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.1); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-25px, 20px) rotate(10deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, -15px) scale(0.8); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 10s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}