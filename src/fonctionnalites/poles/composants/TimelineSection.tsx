"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { timelineSteps } from "@/src/donnees/polesData";

export default function TimelineSection() {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  return (
    <section id="timeline" className="w-full bg-white py-24 relative overflow-hidden my-12 flex flex-col items-center">
      <div className="w-full max-w-4xl px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#022329] mt-4">
            Du brainstorming à la livraison
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mt-2">
            Cliquez sur chaque étape pour découvrir notre processus collaboratif.
          </p>
        </div>

        <div className="w-full relative">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 relative pb-12">
            {timelineSteps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <div
                  key={step.id}
                  onClick={() => handleStepClick(idx)}
                  className={`relative flex flex-col items-center cursor-pointer transition-all duration-300 group ${isActive ? "scale-105" : "hover:scale-105"}`}
                >
                  <div className="relative w-14 h-14 md:w-16 md:h-16">
                    <svg
                      className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100"}`}
                      fill="currentColor"
                      viewBox="0 0 66 66"
                      style={{ color: '#94a3b8' }}
                    >
                      <use href={`#icon-${step.icon}`} />
                    </svg>
                    <svg
                      className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
                      fill="url(#icon-gradient)"
                      viewBox="0 0 66 66"
                    >
                      <use href={`#icon-${step.icon}`} />
                    </svg>
                  </div>

                  <p className={`text-xs font-bold mt-2 text-center leading-tight ${isActive ? "text-[#022329]" : "text-slate-400 group-hover:text-slate-600"}`}>
                    {step.title}
                  </p>

                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${isActive ? "w-full bg-[#022329]" : "w-0"}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-50 rounded-2xl p-6 md:p-10 border border-slate-200/60 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#022329] mb-4 flex items-center gap-3">
                <span className="inline-block w-1 h-8 bg-[#022329] rounded-full" />
                {timelineSteps[activeStep].title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {timelineSteps[activeStep].content}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
