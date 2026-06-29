import React from "react";

export default function HeroHackathons() {
  return (
    <section className="w-full relative min-h-[60vh] md:min-h-[80vh] px-6 pt-28 pb-20 flex flex-col justify-center z-10 mb-12 overflow-hidden shadow-md">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: "url('/Galeries/img10.png')" }}
      />

      <div className="relative z-20 w-full max-w-6xl mx-auto flex flex-col items-start text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-md">
          Hackathons & <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">Défis de Code</span>
        </h1>
        <p className="text-slate-200 max-w-2xl text-sm md:text-lg leading-relaxed font-normal drop-shadow-sm">
          Repoussez vos limites, résolvez des problèmes complexes en équipe et remportez des prix exceptionnels en affrontant les meilleurs développeurs.
        </p>
      </div>
    </section>
  );
}
