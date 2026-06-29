"use client";

import React from "react";
import SvgSymbols from "@/src/composants/communs/SvgSymbols";
import HeroPoles from "@/src/fonctionnalites/poles/composants/HeroPoles";
import StatsPoles from "@/src/fonctionnalites/poles/composants/StatsPoles";
import TimelineSection from "@/src/fonctionnalites/poles/composants/TimelineSection";
import PolesListSection from "@/src/fonctionnalites/poles/composants/PolesListSection";

export default function PolesNumeriquePage() {
  return (
    <>
      <SvgSymbols />
      <div className="w-full min-h-screen bg-slate-50 flex flex-col font-sans overflow-x-hidden selection:bg-[#357dab] selection:text-white pb-32">
        <div className="flex-1 w-full max-w-[1440px] mx-auto flex flex-col items-center">
          <HeroPoles />
          <StatsPoles />
          <TimelineSection />
          <PolesListSection />
        </div>
      </div>
    </>
  );
}