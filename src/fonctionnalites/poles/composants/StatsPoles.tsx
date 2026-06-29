import React from "react";
import Counter from "@/src/composants/communs/Counter";

export default function StatsPoles() {
  return (
    <section className="w-full max-w-6xl py-12 px-4 -mt-12 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        {[
          { label: "Pôles d'Expertise", value: 8, suffix: "" },
          { label: "Domaines de Compétences", value: 24, suffix: "+" },
          { label: "Partenaires Stratégiques", value: 2, suffix: "" },
          { label: "Vision Transversale", value: 100, suffix: "%" },
        ].map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#357dab]">
              <Counter target={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-sm text-gray-500 font-medium mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
