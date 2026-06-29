"use client";

import { COMPETENCES } from "@/src/fonctionnalites/accueil/donnees/competences";

/**
 * SectionApproche — Section "Notre approche pédagogique" avec vidéo + compétences.
 */
export default function SectionApproche() {
  return (
    <section className="w-full bg-white py-20 px-4 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col items-center">
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
              Chez Ghostech, nous croyons fermement en la pédagogie active pour favoriser l&apos;apprentissage optimal.
            </span>{" "}
            Nous adoptons une approche centrée sur l&apos;apprenant, où l&apos;apprentissage est actif, collaboratif et expérientiel.
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
            adaptables, capables de résoudre des problèmes complexes, d&apos;innover et de s&apos;adapter aux défis du monde
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
            {COMPETENCES.map((skill, index) => (
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
      </div>
    </section>
  );
}
