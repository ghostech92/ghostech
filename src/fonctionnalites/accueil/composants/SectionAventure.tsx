"use client";

export default function SectionAventure() {
  return (
    <section className="w-full max-w-7xl py-24 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-[40px] font-bold font-b612 text-[#02073E] text-center mb-4">
        Rejoindre l&apos;aventure
      </h2>
      <p className="text-gray-500 text-center max-w-xl mb-16 text-[16px] leading-relaxed">
        Rejoindre l&apos;aventure Ghostech presente de nombreux avantages pour les passionnes a la recherche d&apos;une experience d&apos;apprentissage unique.
      </p>
      <div className="w-full flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 max-w-xl">
          <h3 className="text-xl font-bold text-[#02073E] mb-3">Pourquoi rejoindre l&apos;aventure Ghostech ?</h3>
          <p className="text-gray-500 text-[15px] mb-5 leading-relaxed">
            En choisissant de nous rejoindre, vous integrez un ecosysteme dynamique, forme aux dernieres technologies et pratiques du numerique.
          </p>
          <p className="text-[15px] font-semibold text-[#02073E] mb-4">
            Voici quelques avantages cles a rejoindre l&apos;aventure Ghostech :
          </p>
          <ul className="space-y-2 mb-10">
            {[
              "Acces a des profils polyvalents et multidisciplinaires.",
              "Apprentissage en equipe et esprit de collaboration developpe.",
              "Capacite a resoudre des problemes complexes.",
              "Connaissance des dernieres tendances et technologies du numerique.",
              "Capacite a travailler sur des projets concrets et pertinents.",
              "Competences pratiques et techniques de pointe.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-[#0F2137] text-[14px]">
                <span className="material-symbols-rounded text-[#357dab] text-[18px] shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href="/equipe/rejoindre" className="inline-block bg-[#357dab] text-white px-7 py-3 rounded-lg font-bold text-[15px] hover:bg-teal-700 transition shadow-md">
            Rejoindre l&apos;aventure
          </a>
        </div>
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
  );
}
