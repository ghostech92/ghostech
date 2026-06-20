"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// --- HELPER COMPONENTS (ICONS) ---

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s12-5.373 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-2.641-.21-5.236-.611-7.743z" />
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 35.026 44 30.038 44 24c0-2.641-.21-5.236-.611-7.743z" />
    </svg>
);


// --- TYPE DEFINITIONS ---

export interface Testimonial {
  avatarSrc: string;
  name: string;
  handle: string;
  text: string;
}

interface SignInPageProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  heroImageSrc?: string;
  testimonials?: Testimonial[];
  onSignIn?: (event: React.FormEvent<HTMLFormElement>) => void;
  onGoogleSignIn?: () => void;
  onResetPassword?: () => void;
  onCreateAccount?: () => void;
}

// --- SUB-COMPONENTS ---

const GlassInputWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-[#02073E]/10 bg-white shadow-sm transition-colors focus-within:border-[#357dab] focus-within:ring-2 focus-within:ring-[#357dab]/20">
    {children}
  </div>
);

const TestimonialCard = ({ testimonial, delay }: { testimonial: Testimonial, delay: string }) => (
  <div className={`animate-testimonial ${delay} flex items-start gap-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-4 w-72 shadow-lg`}>
    <img src={testimonial.avatarSrc} className="h-12 w-12 object-cover rounded-full border-2 border-white" alt={testimonial.name} />
    <div className="text-sm leading-snug text-white">
      <p className="flex items-center gap-1 font-bold">{testimonial.name}</p>
      <p className="text-white/80 text-xs">{testimonial.handle}</p>
      <p className="mt-1 text-white text-xs line-clamp-2">{testimonial.text}</p>
    </div>
  </div>
);

// --- MAIN COMPONENT ---

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const testimonials: Testimonial[] = [
    {
      name: "Amira Touré",
      handle: "@amirat",
      avatarSrc: "/Rejoindre_aventure/r1.jpg",
      text: "Rejoindre Ghostech a complètement transformé ma façon de coder et de voir l'innovation en Afrique.",
    },
    {
      name: "Koffi Stéphane",
      handle: "@stephkoffi",
      avatarSrc: "/Rejoindre_aventure/r2.jpeg",
      text: "Une communauté incroyable, toujours là pour s'entraider sur les projets tech les plus fous !",
    },
    {
      name: "Inès B.",
      handle: "@ines_dev",
      avatarSrc: "/Rejoindre_aventure/r3.jpg",
      text: "Des formations de qualité et une vraie ambiance startup. Le meilleur choix de mon année.",
    }
  ];

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Connexion...");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans w-full bg-gray-50">
      
      {/* Left column: sign-in form */}
      <section className="flex-1 flex items-center justify-center p-8 bg-white relative">
        <div className="w-full max-w-md mt-12 md:mt-0">
          <div className="flex flex-col items-center mb-8">
             <img src="/logo1.svg" alt="Ghostech Logo" className="h-12 w-auto mb-6" />
          </div>

          <div className="flex flex-col gap-6">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-b612 font-bold text-[#02073E] leading-tight mb-2">
                Bienvenue
              </h1>
              <p className="text-gray-500">Connectez-vous pour accéder à votre espace Ghostech</p>
            </div>

            <form className="space-y-5" onSubmit={handleSignIn}>
              <div>
                <label className="text-sm font-medium text-[#02073E] mb-1.5 block">Adresse Email</label>
                <GlassInputWrapper>
                  <input name="email" type="email" placeholder="Entrez votre adresse email" className="w-full bg-transparent text-[#02073E] text-sm p-4 rounded-2xl focus:outline-none" required />
                </GlassInputWrapper>
              </div>

              <div>
                <label className="text-sm font-medium text-[#02073E] mb-1.5 block">Mot de passe</label>
                <GlassInputWrapper>
                  <div className="relative">
                    <input name="password" type={showPassword ? 'text' : 'password'} placeholder="Entrez votre mot de passe" className="w-full bg-transparent text-[#02073E] text-sm p-4 pr-12 rounded-2xl focus:outline-none" required />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-[#357dab]">
                      <span className="material-symbols-rounded text-[20px]">
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                </GlassInputWrapper>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="rememberMe" className="rounded text-[#357dab] focus:ring-[#357dab] border-gray-300 w-4 h-4 cursor-pointer" />
                  <span className="text-gray-600 font-medium">Se souvenir de moi</span>
                </label>
                <a href="#" className="font-medium text-[#357dab] hover:text-teal-600 transition-colors">Mot de passe oublié ?</a>
              </div>

              <button type="submit" className="w-full rounded-2xl bg-[#357dab] py-4 font-bold text-white hover:bg-[#02073E] hover:shadow-lg transition-all duration-300">
                Se connecter
              </button>
            </form>

            <div className="relative flex items-center justify-center mt-2 mb-2">
              <span className="w-full border-t border-gray-200"></span>
              <span className="px-4 text-sm text-gray-400 bg-white absolute font-medium">Ou continuer avec</span>
            </div>

            <button type="button" className="w-full flex items-center justify-center gap-3 border border-gray-200 bg-white rounded-2xl py-4 hover:bg-gray-50 hover:border-gray-300 transition-all font-medium text-gray-700 shadow-sm">
                <GoogleIcon />
                Continuer avec Google
            </button>

            <p className="text-center text-sm text-gray-500 font-medium mt-4">
              Vous n'avez pas de compte ? <Link href="/register" className="text-[#357dab] hover:underline transition-colors font-bold">Créer un compte</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Right column: hero image + testimonials */}
      <section className="hidden md:flex flex-1 relative p-4 bg-gray-50">
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
          {/* Overlay gradient over the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#02073E]/90 via-[#02073E]/40 to-transparent z-10"></div>
          
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url('/header_photo/h1.avif')` }}
          ></div>

          {/* Slogan Text */}
          <div className="absolute top-12 left-12 right-12 z-20 text-white">
            <h2 className="text-4xl font-b612 font-bold leading-tight mb-4 shadow-sm">L'innovation par la formation.</h2>
            <p className="text-white/80 text-lg max-w-md">Découvrez une communauté passionnée et accédez à des ressources exclusives pour propulser vos compétences tech.</p>
          </div>

          {/* Testimonials */}
          {testimonials.length > 0 && (
            <div className="absolute bottom-10 left-0 right-0 z-20 flex flex-wrap gap-4 px-8 w-full justify-center">
              <TestimonialCard testimonial={testimonials[0]} delay="animate-delay-100" />
              <div className="hidden xl:flex"><TestimonialCard testimonial={testimonials[1]} delay="animate-delay-300" /></div>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
