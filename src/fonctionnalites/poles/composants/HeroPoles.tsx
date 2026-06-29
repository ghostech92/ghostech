import React from "react";

export default function HeroPoles() {
  return (
    <section className="relative w-full mt-28 mb-8">
      <div
        className="w-full rounded-none px-8 md:px-16 py-20 md:py-28 flex flex-col items-start text-left relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay dégradé léger pour garantir la lisibilité du texte sans flouter l'image */}
        <div className="absolute inset-0 bg-black/40" />

        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.15] mb-6 max-w-4xl">
          L’innovation naît de la <br />
          <span className="bg-gradient-to-r from-[#F9C1A5] via-[#DECFDB] to-[#96C9F0] bg-clip-text text-transparent">
            synergie de nos pôles
          </span>
        </h1>

        <p className="relative z-10 text-white/90 text-base md:text-[18px] max-w-2xl leading-relaxed mb-8 font-medium">
          Découvrez comment chaque département, de la <strong>Data</strong> à la <strong>Cybersécurité</strong>, en passant par le <strong>Design</strong> et l’<strong>IoT</strong>, façonne l’avenir numérique de Ghostech.
        </p>

        <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 w-full sm:w-auto">
          <a
            href="#poles"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#357dab] text-white font-bold text-[15px] hover:bg-[#2a6590] transition-colors flex items-center justify-center gap-2"
          >
            Explorer les Pôles <span>→</span>
          </a>
          <a
            href="#timeline"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-transparent border border-[#357dab] text-white font-bold text-[15px] hover:bg-[#357dab]/20 transition-colors flex items-center justify-center gap-2"
          >
            Notre méthodologie
          </a>
        </div>
      </div>
    </section>
  );
}
