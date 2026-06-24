"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Partenaires() {
  return (
    <section className="w-full bg-white px-4 sm:px-8 lg:px-16 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1100px] mx-auto bg-white border border-gray-100 rounded-3xl shadow-[0_2px_20px_rgb(0,0,0,0.04)] py-12 px-8 flex flex-col items-center"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#111] mb-10 text-center tracking-tight">
          Nos partenaires
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          <Image src="/partenaires/pt1.svg" alt="Partenaire" width={160} height={60} className="object-contain h-12 w-auto" />
          <Image src="/partenaires/pt2.svg" alt="Partenaire" width={160} height={60} className="object-contain h-12 w-auto" />
          <Image src="/partenaires/pt3.svg" alt="Partenaire" width={160} height={60} className="object-contain h-12 w-auto" />
          <Image src="/partenaires/pt4.svg" alt="Partenaire" width={160} height={60} className="object-contain h-12 w-auto" />
          <Image src="/partenaires/pt5.svg" alt="Partenaire" width={160} height={60} className="object-contain h-12 w-auto" />
          <Image src="/partenaires/pt6.svg" alt="Partenaire" width={160} height={60} className="object-contain h-12 w-auto" />
          <Image src="/partenaires/pt7.svg" alt="Partenaire" width={160} height={60} className="object-contain h-12 w-auto" />
        </div>
      </motion.div>
    </section>
  );
}
