"use client";

import { motion } from "framer-motion";

export default function Partenaires() {
  return (
    <section className="w-full max-w-5xl px-4 mt-20 pb-60 text-center relative z-10 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-3">
          Nos partenaires impliqués dans nos actions
        </h3>
        <p className="text-sm text-slate-500 max-w-xl mx-auto mb-12 font-medium">
          Ils soutiennent l'innovation et collaborent avec nous pour propulser l'écosystème tech.
        </p>
        <div className="w-full flex justify-center items-center">
          <img
            src="/partenaires/global-pater.svg"
            alt="Nos partenaires impliqués"
            className="w-full max-w-3xl h-auto object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}
