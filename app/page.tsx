"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // --- Gestion du scroll pour le parallaxe ---
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Slides du hero ---
  const slides = [
    {
      src: "/header_photo/h1.avif",
      titlePre: "Ghostech :",
      titleHighlight: "Innovation, Formation",
      titlePost: "et Entrepreneuriat en Afrique",
      description: "Un collectif technologique créé par des talents passionnés de numérique et d'innovation.",
      buttonText: "Découvrir Ghostech"
    },
    {
      src: "/header_photo/h2.avif",
      titlePre: "Façonnons l'Avenir :",
      titleHighlight: "Développement Numérique",
      titlePost: "et Solutions Innovantes",
      description: "Des applications de pointe pour transformer l'écosystème technologique en Afrique.",
      buttonText: "Voir nos projets"
    },
    {
      src: "/header_photo/h3.avif",
      titlePre: "Rejoignez notre réseau :",
      titleHighlight: "Entraide, Apprentissage",
      titlePost: "et Expertise Partagée",
      description: "Développez vos compétences aux côtés d'autres talents passionnés et experts du domaine.",
      buttonText: "Nous rejoindre"
    }
  ];

  // --- Carrousel automatique du hero ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // --- Countdown ---
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const targetDate = new Date("2026-07-25T00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff <= 0) {
        clearInterval(timer);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // --- Carrousel équipe ---
  const scrollLeft = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: -280, behavior: "smooth" });
  };
  const scrollRight = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: 280, behavior: "smooth" });
  };

  // --- État pour le carrousel des images de la section "Expérimente" ---
  const [expSlideIndex, setExpSlideIndex] = useState(0);
  const expImages = [
    "/Galeries/img9.jpeg",
    "/Galeries/img3.jpg",
    "/Galeries/img8.jpeg"
  ];

  // Auto-défilement du carrousel des images
  useEffect(() => {
    const interval = setInterval(() => {
      setExpSlideIndex((prev) => (prev + 1) % expImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [expImages.length]);

  return (
    <main className="w-full flex flex-col items-center bg-white overflow-hidden text-[#0F2137]">

      {/* ============================================================ */}
      {/* HERO AVEC PARALLAXE SUR LES IMAGES DE FOND */}
      {/* ============================================================ */}
      <div className="w-full flex flex-col items-center relative overflow-hidden">
        {slides.map((slide, index) => {
          const translateY = scrollY * 0.3;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              style={{ transform: `translateY(${translateY}px)`, willChange: "transform" }}
            >
              <Image src={slide.src} alt="Background" fill className="object-cover" priority={index === 0} />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="w-full flex flex-col pt-24 px-4 md:px-10 lg:px-20 relative pb-32 z-10 min-h-screen justify-center items-start">
          <div className="w-full max-w-7xl mx-auto relative min-h-[400px] md:min-h-[300px] flex items-center">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute left-0 w-full max-w-3xl flex flex-col items-start transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-b612 text-white leading-[1.15] mb-6 tracking-tight">
                  {slide.titlePre} <br className="hidden md:block" />
                  <span className="text-[#e49834] inline-block mt-2">{slide.titleHighlight}</span>{" "}
                  <br className="hidden md:block" />
                  {slide.titlePost}
                </h1>
                <p className="text-[17px] text-gray-200 mb-10 max-w-xl">{slide.description}</p>
                <div className="flex items-center gap-4">
                  <button className="bg-[#357dab] text-white px-8 py-3.5 rounded-full font-bold text-[15px] hover:bg-[#0ca6a6] shadow-[0_0_10px_rgba(10,128,128,0.4)] hover:shadow-[0_0_24px_rgba(10,128,128,0.7)] transition-all transform hover:-translate-y-0.5 relative overflow-hidden group">
                    <span className="relative z-10 flex items-center gap-2">
                      {slide.buttonText}
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                    <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full -translate-x-full skew-x-12 transition-transform duration-500 ease-in-out"></div>
                  </button>
                  <button className="text-white border border-white/30 px-8 py-3.5 rounded-full font-bold text-[15px] hover:bg-white/10 hover:border-white/60 transition-all backdrop-blur-sm">
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Contrôles du carrousel hero */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 hover:border-white/50 backdrop-blur-sm transition-all group z-20"
            aria-label="Diapositive précédente"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 hover:border-white/50 backdrop-blur-sm transition-all group z-20"
            aria-label="Diapositive suivante"
          >
            <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute -bottom-16 left-0 flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentSlide
                    ? "w-8 h-2 bg-[#357dab] shadow-[0_0_8px_rgba(10,128,128,0.8)]"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* SECTION FORMATIONS / ÉVÉNEMENTS (amélioration des cartes) */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Carte 1 */}
          <div className="bg-gradient-to-br from-[#357dab] to-[#1f4d6e] rounded-2xl p-8 text-white flex flex-col justify-between min-h-[240px] shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold font-b612 mb-3">Formations</h3>
              <div className="flex items-center gap-2 text-white/90 text-[14px] mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                À VENIR
              </div>
            </div>
            <div className="w-12 h-[3px] bg-white/60 rounded-full"></div>
          </div>

          {/* Carte 2 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col gap-3">
            <h3 className="text-2xl md:text-[28px] font-bold text-[#357dab] font-b612">G-TECH Summit</h3>
            <p className="text-[13px] font-bold text-gray-500 uppercase tracking-wider">Fin des candidatures dans...</p>
            <div className="mt-2">
              <p className="text-[16px] font-bold text-[#0F2137]">24-25 Juillet 2026</p>
              <p className="text-[15px] text-gray-500">Abidjan, Côte d&apos;Ivoire</p>
            </div>
          </div>

          {/* Carte 3 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col gap-4">
            <h3 className="text-2xl md:text-[28px] font-bold text-[#357dab] font-b612">Digital Creator</h3>
            <p className="text-[13px] font-bold text-gray-500 uppercase tracking-wider">Fin des candidatures dans...</p>
            <div className="flex gap-3">
              {[
                { value: countdown.days, label: "JOURS" },
                { value: countdown.hours, label: "HEURES" },
                { value: countdown.minutes, label: "MINUTES" },
                { value: countdown.seconds, label: "SECONDES" },
              ].map((item, i) => (
                <div key={i} className="bg-[#0F2137] text-white rounded-lg px-3 py-2.5 flex flex-col items-center min-w-[60px]">
                  <span className="text-2xl font-bold font-b612 leading-none">{String(item.value).padStart(2, "0")}</span>
                  <span className="text-[9px] uppercase tracking-wider mt-1 text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="text-[#357dab] text-[13px] font-medium">Les inscriptions ne sont plus disponibles !</p>
            <button className="bg-[#357dab] text-white px-6 py-2.5 rounded-lg font-bold text-[14px] hover:bg-[#d49730] transition-all shadow-md w-fit">
              Je m&apos;inscris
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION APPROCHE PÉDAGOGIQUE (amélioration) */}
      {/* ============================================================ */}
      <section className="w-full max-w-6xl py-20 px-4 flex flex-col items-center bg-white mx-auto">
        <h2 className="text-3xl md:text-[40px] font-bold font-b612 text-[#0F2137] text-center mb-16 tracking-tight">
          Notre approche pédagogique
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full mb-16">
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md relative">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/video/v1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="text-[15px] text-gray-600 leading-relaxed space-y-4 text-justify">
            <p>
              <span className="text-[#e49834] font-bold">
                Chez Ghostech, nous croyons fermement en la pédagogie active pour favoriser l'apprentissage optimal.
              </span>{" "}
              Nous adoptons une approche centrée sur l'apprenant, où l'apprentissage est actif, collaboratif et expérientiel.
              Plutôt que de simplement transmettre des connaissances de manière passive, nous encourageons nos apprenants
              à devenir des acteurs engagés dans leur propre apprentissage.
            </p>
            <p>
              La pédagogie active permet aux apprenants de développer des compétences clés telles que la pensée critique,
              la créativité, <span className="font-bold text-[#0F2137]">la résolution de problèmes et la collaboration, qui sont essentielles
                dans le monde du numérique en constante évolution.</span>
            </p>
            <p>
              En adoptant une pédagogie active, nous préparons nos talents à devenir des professionnels compétents et
              adaptables, capables de résoudre des problèmes complexes, d'innover et de s'adapter aux défis du monde
              du travail en constante mutation.
            </p>
            <div className="pt-2 flex justify-start">
              <span className="w-6 h-6 rounded-full border border-[#e49834] flex items-center justify-center text-[#DE0A45] text-xs font-bold select-none cursor-pointer hover:bg-[#DE0A45]/5 transition">
                →
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-xl">
          <div className="bg-gradient-to-br from-[#39779e] to-[#1f4d6e] p-8 md:p-12 md:w-2/5 lg:w-1/3 flex items-center shrink-0">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-wide">
              Quelques <br />
              compétences <br />
              visées_
            </h3>
          </div>
          <div className="p-8 md:p-10 flex-1 flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 w-full">
              {[
                "Marketing Digital", "Graphic Design", "Référencement (SEO)",
                "UI/UX Design", "Développement web", "Développement mobile",
                "Data science et analyse", "Machine learning", "IoT (Objets Connectés)",
                "Cloud computing", "Esprit d'équipe", "Leadership",
                "Intelligence émotionnelle", "Résilience", "Gestion du temps"
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-2.5 text-[14px] text-gray-700 font-medium">
                  <svg className="w-4 h-4 text-[#39779e] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION OBJECTIFS avec fond parallaxe */}
      {/* ============================================================ */}
      <div className="w-full bg-white flex flex-col items-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none select-none z-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.08}px)`,
            background: "radial-gradient(circle at 20% 30%, #357dab 0%, transparent 70%)",
          }}
        />
        <section className="w-full max-w-6xl py-24 px-4 flex flex-col items-start relative z-10">
          <h2 className="text-3xl md:text-[40px] font-bold font-b612 text-[#0F2137] mb-4">Nos Objectifs</h2>
          <div className="w-12 h-1 bg-[#357dab] rounded-full mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              {
                icon: "school",
                title: "Formation",
                desc: "Développer les compétences numériques des jeunes et des professionnels à travers des formations pratiques et certifiantes."
              },
              {
                icon: "work",
                title: "Employabilité",
                desc: "Faciliter l'insertion professionnelle en adaptant nos programmes aux besoins réels du marché du travail."
              },
              {
                icon: "rocket_launch",
                title: "Entrepreneuriat",
                desc: "Créer de la valeur et favoriser la croissance au sein de l'écosystème entrepreneurial en Côte d'Ivoire et à l'international."
              },
            ].map((obj, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start text-left gap-4">
                <span className="material-symbols-rounded text-4xl text-[#357dab]" style={{ fontVariationSettings: "'FILL' 1" }}>{obj.icon}</span>
                <h4 className="text-[20px] font-bold text-[#0F2137]">{obj.title}</h4>
                <p className="text-[15px] text-gray-500 leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ============================================================ */}
      {/* SECTION FAQ (inchangée) */}
      {/* ============================================================ */}
      <section className="relative w-full bg-[#022329] text-white py-20 px-4 overflow-hidden min-h-[600px] flex flex-col justify-center">
        <div className="absolute left-0 bottom-0 top-0 w-full md:w-[35%] pointer-events-none select-none z-0 hidden md:block">
          <svg className="w-full h-full object-left-bottom" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-50 500 C 150 500, 300 350, 250 100 C 220 -50, 50 -100, -50 -50" stroke="#39779e" strokeWidth="35" strokeLinecap="round" fill="none" />
            <path d="M-20 280 L 70 380 L 220 180" stroke="#39779e" strokeWidth="35" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M-80 520 L 160 520 L 140 620 L -80 620 Z" fill="white" />
            <rect x="-80" y="545" width="230" height="12" fill="#39779e" />
            <rect x="-80" y="575" width="210" height="12" fill="#39779e" />
          </svg>
        </div>
        <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4 font-b612 text-white">FAQ</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed opacity-90">
              Consultez notre FAQ sans tarder car elle a été conçue pour vous ! <br />
              Vous pourriez y trouver des informations utiles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl items-stretch mb-14">
            {[
              {
                q: "Y a-t-il une limite d'âge pour participer aux formations de Ghostech ?",
                a: "Nous encourageons la diversité et l'inclusion que vous soyez étudiant, professionnel en reconversion, vous pouvez postuler à nos formations à condition d'avoir au moins 18 ans."
              },
              {
                q: "Quelles sont les conditions pour rejoindre les formations de Ghostech ?",
                a: "Un appel à candidatures est lancé sur nos pages sociales. Ainsi, nous invitons tous les individus intéressés à postuler en remplissant notre formulaire en ligne."
              },
              {
                q: "Ghostech propose-t-il un accompagnement après la fin des formations ?",
                a: "Oui, nous accompagnons nos apprenants même après la fin des formations. Nous proposons des programmes de mentorat pour soutenir nos alumni dans leur insertion professionnelle et leur développement de carrière."
              }
            ].map((item, index) => (
              <div key={index} className="relative bg-[#0A2E35]/90 border border-teal-950/50 rounded-xl p-7 pt-12 flex flex-col justify-between shadow-xl backdrop-blur-sm">
                <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-[#10383F] border-2 border-[#0A2E35] flex items-center justify-center shadow-md">
                  <span className="text-gray-400 font-serif text-2xl font-bold leading-none select-none">“</span>
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-white mb-4 leading-snug">{item.q}</h3>
                  <p className="text-[13px] text-gray-300 leading-relaxed font-light text-justify opacity-85">{item.a}</p>
                </div>
                <div className="mt-4 pt-2 flex justify-start">
                  <span className="text-[#e49834] font-serif text-xl font-bold leading-none select-none opacity-80">„</span>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-[#39779e] text-white text-xs md:text-sm font-semibold px-6 py-2.5 rounded-sm shadow-md hover:bg-[#c2083b] hover:scale-105 transition duration-200 uppercase tracking-wider">
              Voir la FAQ
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION ÉQUIPE (amélioration des cartes) */}
      {/* ============================================================ */}
      <section className="w-full max-w-7xl py-24 px-4 flex flex-col items-center text-center relative bg-white">
        <h3 className="text-sm font-bold text-[#357dab] uppercase tracking-widest mb-3">Notre Équipe</h3>
        <h2 className="text-3xl md:text-[40px] font-bold font-b612 text-[#0F2137] mb-4">Rencontrez nos talents</h2>
        <p className="text-[16px] text-gray-500 max-w-[500px] mb-12 leading-relaxed">
          Découvrez les talents passionnés de technologie et d’innovation derrière la vision de Ghostech.
        </p>
        <div className="relative w-full px-4 md:px-12">
          <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:bg-gray-50 hover:shadow-xl active:scale-95 transition-all text-[#0F2137]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:bg-gray-50 hover:shadow-xl active:scale-95 transition-all text-[#0F2137]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div ref={carouselRef} className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-none pb-6 scroll-smooth" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {[
              { name: "Jérémie Harding", role: "Président & Fondateur", img: "/menbre/JÉRÉMIE_HARDING.jpeg" },
              { name: "Maïmouna Soro", role: "Vice-Présidente", img: "/menbre/Maïmouna_Soro.jpeg" },
              { name: "Ethan Bokamé", role: "Responsable Technique", img: "/menbre/Ethan_Bokamé.png" },
              { name: "Marie Michelle Diragbou", role: "Responsable Événementiel", img: "/menbre/Marie_Michelle_Diragbou.jpeg" },
              { name: "Ange Adjé", role: "Membre Ghostech", img: "/menbre/Ange_Adje.jpeg" },
              { name: "Emma Kossonou", role: "Membre Ghostech", img: "/menbre/Emma_KOSSONOU.jpeg" },
              { name: "Helloïs Kouassi", role: "Membre Ghostech", img: "/menbre/Helloïs_KOUASSI.jpeg" },
              { name: "Yaniss Elie Sey", role: "Membre Ghostech", img: "/menbre/Yaniss_Elie_Sey.jpeg" },
              { name: "Brim Ange Flora", role: "Membre Ghostech", img: "/menbre/Brim_Ange_Flora .jpeg" },
              { name: "Convaud Kouassi Othnie", role: "Membre Ghostech", img: "/menbre/CONVAUD_Kouassi_Othnie.jpeg" },
              { name: "Doukrou Eiffel", role: "Membre Ghostech", img: "/menbre/Doukrou_Eiffel .jpeg" },
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center shrink-0 w-[240px] sm:w-[260px] md:w-[280px] snap-start bg-white rounded-2xl p-4 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-full aspect-[4/5] bg-gray-50 rounded-2xl mb-4 relative overflow-hidden">
                  <Image src={member.img} alt={member.name} fill className="object-cover" />
                </div>
                <h4 className="text-[17px] font-bold text-[#0F2137] mb-1">{member.name}</h4>
                <p className="text-[14px] text-[#357dab] font-semibold mb-3">{member.role}</p>
                <div className="flex gap-3 text-xs">
                  <span className="text-gray-300 text-[11px]">Ghostech · IUA</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION AUTRES INITIATIVES (amélioration des cartes) */}
      {/* ============================================================ */}
      <section className="w-full bg-[#F9FAFC] py-24 px-4 flex justify-center border-t border-b border-gray-200">
        <div className="max-w-6xl w-full flex flex-col items-center">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-[36px] font-bold font-b612 text-[#0F2137] mb-4">Nos autres initiatives</h2>
            <p className="text-[16px] text-gray-500 max-w-xl">Des projets au cœur de l'écosystème technologique africain.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 w-full">
            {[
              { title: "Intelligence Artificielle", icon: "psychology", bg: "bg-red-500" },
              { title: "Cybersécurité", icon: "security", bg: "bg-purple-500" },
              { title: "Incubation de Projets", icon: "bar_chart", bg: "bg-blue-600" },
              { title: "Hackathons & Événements", icon: "emoji_events", bg: "bg-orange-400" },
              { title: "Développement Mobile", icon: "smartphone", bg: "bg-blue-400" },
              { title: "Mentorat Tech", icon: "handshake", bg: "bg-pink-500" },
            ].map((service, i) => (
              <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <span className={`material-symbols-rounded text-[28px] shrink-0 mt-1 text-[#357dab]`} style={{ fontVariationSettings: "'FILL' 1" }}>{service.icon}</span>
                <div>
                  <h4 className="text-[17px] font-bold text-[#0F2137] mb-2">{service.title}</h4>
                  <p className="text-[14px] text-gray-500 leading-relaxed mb-3">Des solutions pensées pour l&apos;avenir numérique de l&apos;Afrique.</p>
                  <Link href="#" className="text-[#357dab] font-bold text-[14px] flex items-center gap-1 hover:underline">
                    En savoir plus <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION TABS & FEATURES (amélioration des cartes) */}
      {/* ============================================================ */}
      <section className="w-full max-w-6xl py-24 px-4 flex flex-col items-center bg-white">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 border-b border-gray-200 w-full max-w-3xl pb-4 mb-16 text-[15px] font-medium text-gray-400">
          <span className="text-[#0F2137] border-b-2 border-[#357dab] pb-4 cursor-pointer font-bold">Pourquoi rejoindre Ghostech</span>
          <span className="hover:text-[#0F2137] cursor-pointer pb-4">Notre vision pour l'Afrique</span>
          <span className="hover:text-[#0F2137] cursor-pointer pb-4">Nos programmes de formation</span>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-[38px] font-bold font-b612 text-[#02073E] leading-tight">
              Nous transformons vos idées technologiques en projets concrets
            </h2>
            <p className="text-gray-500 text-[16px] leading-relaxed">
              Rejoignez une communauté de talents et d'experts passionnés par le code, le design et l'innovation pour bâtir ensemble l'avenir technologique.
            </p>
            <div className="grid grid-cols-2 gap-4 text-[15px] font-medium text-[#0F2137]">
              {[
                { icon: "stars", label: "Compétences de pointe" },
                { icon: "groups", label: "Réseau d'experts" },
                { icon: "public", label: "Impact en Afrique" },
                { icon: "lightbulb", label: "Projets innovants" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl shadow-sm">
                  <span className="material-symbols-rounded text-[#357dab] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
            <button className="text-[#357dab] font-bold text-[15px] flex items-center gap-2 pt-4">
              Découvrir plus <span>→</span>
            </button>
          </div>
          <div className="flex-1 relative w-full aspect-[4/3] max-w-lg bg-gray-50 rounded-3xl overflow-hidden shadow-xl">
            <Image src="/Galeries/img_1.png" alt="Framework explanation" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION REJOINDRE L'AVENTURE (avec parallaxe sur les photos) */}
      <section className="w-full max-w-7xl py-24 px-4 flex flex-col items-center">
        {/* Titre centré */}
        <h2 className="text-3xl md:text-[40px] font-bold font-b612 text-[#02073E] text-center mb-4">
          Rejoindre l'aventure
        </h2>
        <p className="text-gray-500 text-center max-w-xl mb-16 text-[16px] leading-relaxed">
          Rejoindre l'aventure Ghostech présente de nombreux avantages pour les passionnés à la recherche d'une expérience d'apprentissage unique.
        </p>

        {/* Contenu principal : texte à gauche, photos à droite */}
        <div className="w-full flex flex-col md:flex-row gap-12 items-center">

          {/* Colonne texte */}
          <div className="flex-1 max-w-xl">
            <h3 className="text-xl font-bold text-[#02073E] mb-3">
              Pourquoi rejoindre l'aventure Ghostech ?
            </h3>
            <p className="text-gray-500 text-[15px] mb-5 leading-relaxed">
              En choisissant de nous rejoindre, vous intégrez un écosystème dynamique, formé aux dernières technologies et pratiques du numérique.
            </p>
            <p className="text-[15px] font-semibold text-[#02073E] mb-4">
              Voici quelques avantages clés à rejoindre l'aventure Ghostech :
            </p>
            <ul className="space-y-2 mb-10">
              {[
                "Accès à des profils polyvalents et multidisciplinaires.",
                "Apprentissage en équipe et esprit de collaboration développé.",
                "Capacité à résoudre des problèmes complexes.",
                "Connaissance des dernières tendances et technologies du numérique.",
                "Capacité à travailler sur des projets concrets et pertinents.",
                "Compétences pratiques et techniques de pointe.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[#0F2137] text-[14px]">
                  <span className="material-symbols-rounded text-[#357dab] text-[18px] shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/equipe/rejoindre"
              className="inline-block bg-[#357dab] text-white px-7 py-3 rounded-lg font-bold text-[15px] hover:bg-teal-700 transition shadow-md"
            >
              Rejoindre l'aventure
            </a>
          </div>

          {/* Colonne photos (3 cartes décalées) */}
          <div className="flex gap-4 items-end justify-center flex-1">
            <div className="w-[160px] md:w-[180px] h-[240px] md:h-[280px] rounded-2xl overflow-hidden shadow-lg -mb-6">
              <img src="/Rejoindre_aventure/r1.jpg" alt="Membre Ghostech" className="w-full h-full object-cover transition duration-300" />
            </div>
            <div className="w-[160px] md:w-[180px] h-[280px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg">
              <img src="/Rejoindre_aventure/r2.jpeg" alt="Membre Ghostech" className="w-full h-full object-cover transition duration-300" />
            </div>
            <div className="w-[160px] md:w-[180px] h-[240px] md:h-[280px] rounded-2xl overflow-hidden shadow-lg -mb-6">
              <img src="/Rejoindre_aventure/r3.jpg" alt="Membre Ghostech" className="w-full h-full object-cover transition duration-300" />
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION EXPÉRIMENTE UNE NOUVELLE FAÇON D'APPRENDRE (avec CARROUSEL) */}
      {/* ============================================================ */}
      <section className="w-full max-w-7xl py-24 px-4 flex flex-col items-center bg-white">
        <div className="text-center max-w-3xl mb-16">
          <h2 className="text-3xl md:text-[40px] font-bold font-b612 text-[#357dab] mb-4">
            Expérimente une nouvelle façon d&apos;apprendre
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto">
            La méthode Ghostech : un apprentissage innovant, efficace et stimulant.<br />
            Découvre les avantages de notre approche unique :
          </p>
        </div>

        {/* Grille des 4 piliers (inchangée) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-16">
          {[
            {
              icon: "bolt",
              title: "Une plateforme d'apprentissage interactive et collaborative",
              desc: "Travaille sur des projets concrets, partage tes idées et progresse en équipe."
            },
            {
              icon: "local_library",
              title: "Des cours dynamiques et captivants",
              desc: "Apprends en pratiquant, à travers des exercices stimulants et des challenges qui te maintiendront motivé."
            },
            {
              icon: "diversity_3",
              title: "Un environnement d'apprentissage riche et stimulant",
              desc: "Participe à des événements et des workshops exclusifs, rencontre des professionnels du secteur et développe tes compétences relationnelles."
            },
            {
              icon: "schedule",
              title: "Une flexibilité totale pour un apprentissage personnalisé",
              desc: "Choisis entre des cours en présentiel et un apprentissage en ligne, adapte ton rythme et optimise ton temps."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col text-left h-full gap-4">
              <span className="material-symbols-rounded text-[#357dab] text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
              <h4 className="font-bold text-[16px] text-[#0F2137] leading-snug">{item.title}</h4>
              <p className="text-gray-500 text-[13.5px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* === CARROUSEL D'IMAGES === */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Conteneur du carrousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/9]">
            {expImages.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === expSlideIndex ? "opacity-100" : "opacity-0"
                  }`}
              >
                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Flèches de navigation */}
          <button
            onClick={() => setExpSlideIndex((prev) => (prev - 1 + expImages.length) % expImages.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 shadow-md flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Précédent"
          >
            <svg className="w-5 h-5 text-[#0F2137]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setExpSlideIndex((prev) => (prev + 1) % expImages.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 shadow-md flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Suivant"
          >
            <svg className="w-5 h-5 text-[#0F2137]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicateurs (dots) */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {expImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setExpSlideIndex(index)}
                className={`transition-all duration-300 rounded-full ${index === expSlideIndex
                    ? "w-8 h-2 bg-[#357dab] shadow-[0_0_8px_rgba(10,128,128,0.8)]"
                    : "w-2 h-2 bg-gray-400 hover:bg-gray-600"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION BLOG (inchangée) */}
      {/* ============================================================ */}
      <section className="w-full max-w-6xl py-24 px-4 flex flex-col items-center bg-white">
        <h2 className="text-3xl md:text-[36px] font-bold font-b612 text-[#0F2137] text-center mb-2">Nos dernières actualités et projets</h2>
        <p className="text-gray-500 text-center mb-16 text-[15px]">Restez informés des avancées de Ghostech et de l'IUA.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
            <div className="w-full aspect-[16/10] bg-gray-100 relative">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nT4KbtG11sA" title="Vidéo principale Ghostech" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0"></iframe>
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h4 className="font-bold text-[18px] text-[#0F2137] mb-3 leading-snug">Lancement officiel de l'organisation Ghostech à l'IUA</h4>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-4">Le 03 mars 2025, une nouvelle ère technologique commence avec des talents passionnés.</p>
              </div>
              <span className="text-xs text-gray-400 font-medium">03 Mars 2025 • Lecture 5 min</span>
            </div>
          </div>
          <div className="flex flex-col gap-6 h-full">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between flex-1">
              <h4 className="font-bold text-[18px] md:text-[20px] text-[#0F2137] leading-snug mb-2">L'importance de l'entrepreneuriat technologique chez les jeunes</h4>
              <span className="text-xs text-gray-400">Mars 2025</span>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 shrink-0">
              <div className="w-full aspect-[16/9] bg-gray-100 relative">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uyDgJTrrwhE" title="Short YouTube 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0"></iframe>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-[16px] text-[#0F2137]">Atelier d'innovation et de formation</h4>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 h-full">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 relative group flex-1 min-h-[220px]">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/X-U1IpT2K78" title="Short YouTube 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0"></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white pointer-events-none">
                <h4 className="font-bold text-[16px] leading-snug">Développer des solutions pour l'Afrique numérique</h4>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 relative group flex-1 min-h-[220px]">
              <Image src="/blog-4.png" alt="Blog post" fill className="object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white pointer-events-none">
                <h4 className="font-bold text-[16px] leading-snug">Hackathon Tech : Les meilleurs projets récompensés</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION PARTENAIRES (amélioration des logos) */}
      {/* ============================================================ */}
      <section className="w-full max-w-6xl py-16 px-4 bg-white mx-auto border-t border-gray-200">
        <h2 className="text-3xl md:text-[40px] font-bold text-[#0F2137] text-center mb-16 tracking-tight">
          Nos partenaires
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center">
          {[
            { name: "CPNTIC", src: "/logos/cpntic.png" },
            { name: "Coopération Allemande", src: "/logos/cooperation-allemande.png" },
            { name: "Invest for Jobs", src: "/logos/invest-for-jobs.png" },
            { name: "GIZ", src: "/partenaires/6.svg" },
            { name: "KfW", src: "/partenaires/6.svg" },
            { name: "AWS", src: "/partenaires/6.svg" },
            { name: "Fondation C'est vous l'Avenir", src: "/logos/fondation-avenir.png" },
            { name: "Digital Africa", src: "/logos/digital-africa.png" },
            { name: "Agence Emploi Jeunes", src: "/logos/emploi-jeunes.png" },
            { name: "Vivendi Create Joy", src: "/logos/vivendi.png" },
            { name: "CIDFOR", src: "/logos/cidfor.png" },
            { name: "Ministère de la Promotion de la Jeunesse", src: "/logos/ministere-jeunesse.png" },
            { name: "Ministère de l'Europe et des Affaires Étrangères", src: "/logos/ministere-europe.png" },
            { name: "AUF", src: "/partenaires/6.svg" },
            { name: "Meta", src: "/partenaires/6.svg" },
            { name: "MPME", src: "/partenaires/6.svg" },
            { name: "MTN", src: "/partenaires/6.svg" },
            { name: "Pro-Kids", src: "/partenaires/6.svg" },
          ].map((partner, index) => (
            <div key={index} className="w-full h-14 flex items-center justify-center p-1 transition duration-300 hover:scale-110 grayscale hover:grayscale-0">
              <img src={partner.src} alt={`Logo ${partner.name}`} className="max-w-full max-h-full object-contain" loading="lazy" />
            </div>
          ))}
          <div className="w-full h-14 flex items-center justify-center p-1 transition duration-300 hover:scale-110 grayscale hover:grayscale-0 col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-6 mt-2">
            <img src="/partenaires/6.svg" alt="Logo Batidécor Formation" className="max-w-[150px] max-h-full object-contain" loading="lazy" />
          </div>
        </div>
      </section>



    </main>
  );
}