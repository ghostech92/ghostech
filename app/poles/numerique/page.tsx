"use client";

import React from "react";
import SvgSymbols from "@/src/composants/communs/SvgSymbols";
import PolesListSection from "@/src/fonctionnalites/poles/composants/PolesListSection";

export default function PolesNumeriquePage() {
  return (
    <>
      <SvgSymbols />
      <div className="w-full min-h-dvh bg-slate-50 flex flex-col font-sans overflow-x-hidden selection:bg-[#357dab] selection:text-white pb-16 sm:pb-24">
        <div className="flex-1 w-full max-w-360 mx-auto flex flex-col items-center">
          <PolesListSection />
        </div>
      </div>
    </>
  );
}