"use client";

import { useScrollPosition } from "@/src/hooks/useScrollPosition";
import HeroCarousel from "./composants/HeroCarousel";
import SectionObjectifs from "./composants/SectionObjectifs";
import SectionApproche from "./composants/SectionApproche";
import SectionFAQ from "./composants/SectionFAQ";
import SectionEquipe from "./composants/SectionEquipe";
import SectionInitiatives from "./composants/SectionInitiatives";
import SectionRejoindre from "./composants/SectionRejoindre";
import BanniereHackathon from "./composants/BanniereHackathon";
import SectionExperimente from "./composants/SectionExperimente";
import SectionBlog from "./composants/SectionBlog";
import Partenaires from "@/src/composants/communs/Partenaires";

export default function PageAccueil() {
  const scrollY = useScrollPosition();

  return (
    <div className="flex flex-col min-h-screen bg-[#F9FAFC] font-sans selection:bg-[#357dab] selection:text-white pb-0">
      <HeroCarousel />
      <SectionObjectifs scrollY={scrollY} />
      <SectionApproche />
      <SectionFAQ />
      <SectionEquipe />
      <SectionInitiatives />
      <SectionRejoindre />
      <div className="w-full bg-[#F9FAFC] py-16 flex flex-col items-center">
        <BanniereHackathon />
      </div>
      <SectionExperimente />
      <SectionBlog />
      <Partenaires />
    </div>
  );
}
