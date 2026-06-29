"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function CreateurPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F2137] flex flex-col justify-center px-6 py-16 relative">
      {/* Back to Home (Absolute Top) */}
      <div className="max-w-6xl w-full mx-auto mb-8">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-[#357dab] transition-colors text-sm font-semibold"
          >
            <FaArrowLeft /> Retour à l'accueil
          </Link>
        </motion.div>
      </div>

      {/* Main Split Layout Container */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Side: Large Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-6 w-full aspect-square relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
        >
          <img 
            src="/menbre/JÉRÉMIE_HARDING.jpeg" 
            alt="Jérémie Harding" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Side: Details & Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-6 space-y-6 text-left"
        >
          <div className="space-y-2">
            <p className="text-[#357dab] font-extrabold text-sm uppercase tracking-widest">
              Président & Fondateur de Ghostech
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0F2137]">
              Jérémie Harding
            </h1>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-[#357dab] pl-4 italic">
            "Développeur créatif, Harding aime relever de nouveaux défis techniques en proposant des architectures innovantes."
          </p>

          {/* Social and Contact Info */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:jeremie.harding@ghostech.org" 
                className="flex items-center justify-center sm:justify-start gap-3 px-5 py-3 bg-slate-50 hover:bg-[#357dab] hover:text-white rounded-xl text-sm font-semibold transition-all text-slate-700 border border-slate-100"
              >
                <FaEnvelope className="shrink-0" />
                <span>jeremie.harding@ghostech.org</span>
              </a>

              <a 
                href="tel:+2250711121314" 
                className="flex items-center justify-center sm:justify-start gap-3 px-5 py-3 bg-slate-50 hover:bg-[#42C89A] hover:text-white rounded-xl text-sm font-semibold transition-all text-slate-700 border border-slate-100"
              >
                <FaPhone className="shrink-0" />
                <span>+225 07 11 12 13 14</span>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://github.com/jeremie-harding" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:text-white hover:bg-black transition-all text-xl border border-slate-100"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/jeremie-harding" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#0077b5] transition-all text-xl border border-slate-100"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
