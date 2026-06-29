import React from "react";
import Link from "next/link";

interface BureauHeroProps {
  leftImages: { src: string; alt: string; className?: string }[];
  centerImage: { src: string; alt: string };
  rightImages: { src: string; alt: string; className?: string }[];
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export default function BureauHero({
  leftImages,
  centerImage,
  rightImages,
  title,
  description,
  linkText,
  linkHref
}: BureauHeroProps) {
  return (
    <section className="w-full max-w-6xl px-4 py-8 relative z-10">
      <div className="grid grid-cols-12 gap-4">
        
        {/* Bloc Gauche - photos verticales */}
        <div className="col-span-3 flex flex-col gap-4">
          {leftImages.map((img, idx) => (
            <div key={idx} className={`rounded-xl overflow-hidden bg-gray-100 relative ${img.className || "h-40"}`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Bloc Centre - Grande image Principale avec le Texte Overlay */}
        <div className="col-span-6 relative rounded-xl overflow-hidden h-[368px] bg-gray-200">
          <img src={centerImage.src} alt={centerImage.alt} className="w-full h-full object-cover" />
          
          {/* Boite de texte Noire semi-transparente flottante comme sur l'image */}
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center p-6">
            <div className="bg-black/70 backdrop-blur-sm text-white p-8 rounded-xl max-w-md text-center border border-white/10">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#357dab] block mb-2">
                CONSTRUIRE. IMPACTER. CONQUÉRIR.
              </span>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                {title}
              </h1>
              <p className="text-xs text-gray-300 mb-6">
                {description}
              </p>
              <Link href={linkHref} className="bg-[#357dab] text-white text-[11px] font-bold px-5 py-2 rounded uppercase tracking-wider hover:bg-[#286084] transition mx-auto inline-block">
                {linkText}
              </Link>
            </div>
          </div>
        </div>

        {/* Bloc Droite - photos verticales */}
        <div className="col-span-3 flex flex-col gap-4">
          {rightImages.map((img, idx) => (
            <div key={idx} className={`rounded-xl overflow-hidden bg-gray-100 relative ${img.className || "h-40"}`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Petits points de carrousel sous le hero */}
      <div className="flex justify-center gap-1.5 mt-6">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#357dab]"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
      </div>
    </section>
  );
}
