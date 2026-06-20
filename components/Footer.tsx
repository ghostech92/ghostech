"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 450 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={`select-none uppercase cursor-pointer ${className || ""}`}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="25%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#80eeb4" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      {/* Background Outline */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.5"
        className="fill-transparent stroke-white/10 font-[helvetica] text-6xl md:text-7xl font-bold"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text === "GHOSTECH" ? (
          <>
            GHO<tspan className="fill-transparent stroke-[#e49834]">STECH</tspan>
          </>
        ) : (
          text
        )}
      </text>
      {/* Animated Path Outline */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.5"
        className="fill-transparent stroke-[#3ca2fa] opacity-60 font-[helvetica] text-6xl md:text-7xl font-bold drop-shadow-lg"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {text === "GHOSTECH" ? (
          <>
            GHO<tspan className="stroke-[#e49834]">STECH</tspan>
          </>
        ) : (
          text
        )}
      </motion.text>
      {/* Colored Mask */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.5"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-6xl md:text-7xl font-bold"
      >
        {text === "GHOSTECH" ? (
          <>
            GHO<tspan className="fill-[#e49834]">STECH</tspan>
          </>
        ) : (
          text
        )}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #000 50%, #0f172a 100%)",
      }}
    />
  );
};

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-20 pb-10 px-6 flex flex-col items-center relative overflow-hidden">
      <FooterBackgroundGradient />

      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#357dab] opacity-20 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500 opacity-10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Main Content */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 relative z-10">

        {/* Section Marque et Description */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo1.svg" alt="Ghostech Logo" className="h-10 w-auto" />
            <span className="font-b612 text-2xl font-bold tracking-wide">Ghostech</span>
          </div>
          <p className="text-gray-400 text-[15px] leading-relaxed mb-8 pr-4">
            Ghostech est une organisation technologique propulsée par l'innovation, dédiée à la formation et à l'entrepreneuriat numérique en Afrique.
          </p>
          <div className="flex gap-4">
            {['facebook', 'language', 'alternate_email', 'play_arrow'].map((icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#357dab] hover:text-white hover:border-[#357dab] transition-all duration-300">
                <span className="material-symbols-rounded font-bold text-[20px]">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Section Liens Utiles */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h5 className="font-bold text-white mb-2 text-[16px] uppercase tracking-wider text-sm">À propos</h5>
          <Link href="/apropos" className="text-gray-400 hover:text-[#EBF9FC] hover:translate-x-1 text-[15px] transition-all">Notre Histoire</Link>
          <Link href="/equipe" className="text-gray-400 hover:text-[#EBF9FC] hover:translate-x-1 text-[15px] transition-all">L'Équipe</Link>
          <Link href="/poles/numerique" className="text-gray-400 hover:text-[#EBF9FC] hover:translate-x-1 text-[15px] transition-all">Nos Pôles</Link>
          <Link href="/contact" className="text-gray-400 hover:text-[#EBF9FC] hover:translate-x-1 text-[15px] transition-all">Contactez-nous</Link>
        </div>

        {/* Section Ressources */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h5 className="font-bold text-white mb-2 text-[16px] uppercase tracking-wider text-sm">Ressources</h5>
          <Link href="#" className="text-gray-400 hover:text-[#EBF9FC] hover:translate-x-1 text-[15px] transition-all">Blog & Actualités</Link>
          <Link href="/poles/formation" className="text-gray-400 hover:text-[#EBF9FC] hover:translate-x-1 text-[15px] transition-all">Formations</Link>
          <Link href="#" className="text-gray-400 hover:text-[#EBF9FC] hover:translate-x-1 text-[15px] transition-all">Support Technique</Link>
          <Link href="#" className="text-gray-400 hover:text-[#EBF9FC] hover:translate-x-1 text-[15px] transition-all">FAQ</Link>
        </div>

        {/* Section Contact */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <h5 className="font-bold text-white mb-4 text-[16px] uppercase tracking-wider text-sm">Contactez-nous</h5>
          <p className="text-gray-400 text-[14px] leading-relaxed mb-6">
            Besoin d'informations supplémentaires ou envie de collaborer avec nous ? N'hésitez pas à nous contacter.
          </p>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-3 text-gray-400">
              <span className="material-symbols-rounded font-bold text-[#3ca2fa]">location_on</span>
              <span className="text-[14px]">Abidjan, Côte d'Ivoire</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <span className="material-symbols-rounded font-bold text-[#3ca2fa]">mail</span>
              <a href="mailto:contact@ghostech.ci" className="text-[14px] hover:text-white transition-colors">contact@ghostech.ci</a>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <span className="material-symbols-rounded font-bold text-[#3ca2fa]">phone</span>
              <a href="tel:+2250000000000" className="text-[14px] hover:text-white transition-colors">+225 XX XX XX XX XX</a>
            </div>
          </div>
        </div>

      </div>

      {/* HUGE TITLE ANIMATION SECTION */}
      <div className="w-full max-w-7xl mx-auto my-12 md:my-16 relative z-10 h-[100px] sm:h-[150px] md:h-[250px] lg:h-[350px]">
        <TextHoverEffect text="GHOSTECH" />
      </div>

      {/* Ligne de séparation et Copyright */}
      <div className="border-t border-white/10 w-full max-w-7xl pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-gray-500 text-[14px]">
          &copy; {new Date().getFullYear()} Ghostech. Tous droits réservés.
        </p>
        <div className="flex gap-6 text-[14px] text-gray-500">
          <Link href="#" className="hover:text-white transition-colors">Politique de confidentialité</Link>
          <Link href="#" className="hover:text-white transition-colors">Conditions d'utilisation</Link>
        </div>
        <p className="text-gray-500 text-[14px] flex items-center gap-1">
          Made with <span className="text-red-500">❤️</span> à Abidjan, CI
        </p>
      </div>
    </footer>
  );
}
