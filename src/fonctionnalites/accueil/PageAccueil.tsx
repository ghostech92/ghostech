"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useScrollPosition } from "@/src/hooks/useScrollPosition";
import HeroCarousel from "./composants/HeroCarousel";
import SectionObjectifs from "./composants/SectionObjectifs";
import SectionApproche from "./composants/SectionApproche";
import SectionEvenements from "./composants/SectionEvenements";
import SectionFAQ from "./composants/SectionFAQ";
import SectionRejoindre from "./composants/SectionRejoindre";
import BanniereHackathon from "./composants/BanniereHackathon";
import SectionExperimente from "./composants/SectionExperimente";
import VideoAvatarModal from "./composants/VideoAvatarModal";
import Partenaires from "@/src/composants/communs/Partenaires";

export default function PageAccueil() {
  const scrollY = useScrollPosition();
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroVisible = useInView(heroRef, { amount: 0.1 });

  const sectionMotion = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionTransition = {
    duration: 0.65,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <div className="flex min-h-dvh flex-col bg-[#F9FAFC] font-sans selection:bg-[#357dab] selection:text-white pb-0">
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroCarousel />
      </motion.div>

      <motion.div
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={sectionTransition}
      >
        <SectionObjectifs scrollY={scrollY} />
      </motion.div>

      <motion.div
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ ...sectionTransition, delay: 0.05 }}
      >
        <SectionApproche />
      </motion.div>

      <motion.div
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ ...sectionTransition, delay: 0.05 }}
      >
        <SectionEvenements />
      </motion.div>

      <motion.div
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ ...sectionTransition, delay: 0.05 }}
      >
        <SectionFAQ />
      </motion.div>

      <motion.div
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ ...sectionTransition, delay: 0.05 }}
      >
        <SectionRejoindre />
      </motion.div>

      <motion.div
        className="flex w-full flex-col items-center bg-[#F9FAFC] py-16"
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ ...sectionTransition, delay: 0.05 }}
      >
        <BanniereHackathon />
      </motion.div>

      <motion.div
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ ...sectionTransition, delay: 0.05 }}
      >
        <SectionExperimente />
      </motion.div>

      <motion.div
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ ...sectionTransition, delay: 0.05 }}
      >
        <Partenaires />
      </motion.div>

      <VideoAvatarModal isVisible={!isHeroVisible} />
    </div>
  );
}