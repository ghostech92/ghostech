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
    <section className="w-full max-w-6xl px-4 sm:px-6 py-6 sm:py-8 relative z-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        
        {/* Bloc Gauche - photos */}
        <div className="order-2 col-span-1 flex flex-row gap-3 sm:gap-4 md:order-1 md:col-span-3 md:flex-col">
          {leftImages.map((img, idx) => (
            <div key={idx} className={`min-w-0 flex-1 rounded-2xl overflow-hidden bg-gray-100 relative ${img.className || "h-24 sm:h-32 md:h-40"}`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Bloc Centre - Grande image Principale avec le Texte Overlay */}
        <div className="order-1 col-span-1 relative rounded-2xl overflow-hidden min-h-[300px] sm:min-h-[368px] bg-gray-200 md:order-2 md:col-span-6 shadow-md">
          <img src={centerImage.src} alt={centerImage.alt} className="w-full h-full object-cover" />
          
          {/* Boite de texte Noire semi-transparente flottante */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-3 sm:p-6">
            <div className="bg-black/75 backdrop-blur-md text-white p-5 sm:p-8 rounded-2xl max-w-md text-center border border-white/10 shadow-xl">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#fd800a] block mb-2">
                CONSTRUIRE. IMPACTER. CONQUÉRIR.
              </span>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black font-b612 leading-tight mb-3">
                {title}
              </h1>
              <p className="text-xs text-gray-300 mb-5 leading-relaxed">
                {description}
              </p>
              <Link href={linkHref} className="bg-[#fd800a] text-white text-[11px] font-bold px-5 py-2.5 rounded-full uppercase tracking-wider hover:bg-[#e06e00] transition mx-auto inline-block shadow-md">
                {linkText}
              </Link>
            </div>
          </div>
        </div>

        {/* Bloc Droite - photos */}
        <div className="order-3 col-span-1 flex flex-row gap-3 sm:gap-4 md:order-3 md:col-span-3 md:flex-col">
          {rightImages.map((img, idx) => (
            <div key={idx} className={`min-w-0 flex-1 rounded-2xl overflow-hidden bg-gray-100 relative ${img.className || "h-24 sm:h-32 md:h-40"}`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Indicateur sous le hero */}
      <div className="flex justify-center gap-1.5 mt-6">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#357dab]"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
      </div>
    </section>
  );
}
