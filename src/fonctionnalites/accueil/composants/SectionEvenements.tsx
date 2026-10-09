"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

type SlideMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster: string; alt: string }
  | { type: "youtube"; videoId: string; alt: string };

type Slide = {
  title: string;
  media: SlideMedia;
};

const SLIDES: Slide[] = [
  {
    title: "Hakathon Winer",
    media: {
      type: "image",
      src: "/Galeries/img10.png",
      alt: "Hakathon Winer",
    },
  },
  {
    title: "Atelier En réalité Virtuelle ",
    media: {
      type: "video",
      src: "/video/v1.mp4",
      poster: "/Galeries/Haka/haka1.png",
      alt: "Atelier en réalité virtuelle Ghostech",
    },
  },
  {
    title: "Ruth Christelle Ledjou",
    media: {
      type: "youtube",
      videoId: "nT4KbtG11sA",
      alt: "Témoignage vidéo de Ruth Christelle Ledjou",
    },
  },
];

export default function SectionAlumniStories() {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeSlideIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveSlideIndex(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSlideIndex]);

  return (
    <section className="relative flex w-full justify-center overflow-hidden bg-[#0A0A0A] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      
      {/* Effet d'arrière-plan discret */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.03]"
        style={{
          background: "radial-gradient(circle at 50% 50%, #fd800a 0%, transparent 70%)",
        }}
      />

      <div className="w-full max-w-7xl relative z-10">
        
        {/* En-tête centré */}
        <div className="flex flex-col items-center text-center ">
          <h2 className="font-b612 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-white max-w-4xl">
           Plongez au cœur de nos événements,{" "}
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-400 max-w-2xl">
            Formations, ateliers, hackathons, conférences et rencontres.
          </p>
        </div>

        {/* Carrousel des témoignages */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 lg:gap-8">
          {SLIDES.map((slide, index) => (
              <article
                key={index}
                className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#111111]"
              >
                {/* Média de fond : image, vidéo locale ou YouTube */}
                {slide.media.type === "image" && (
                  <Image
                    src={slide.media.src}
                    alt={slide.media.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                )}
                {slide.media.type === "video" && (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={slide.media.poster}
                    aria-label={slide.media.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source src={slide.media.src} type="video/mp4" />
                  </video>
                )}
                {slide.media.type === "youtube" && (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${slide.media.videoId}?rel=0`}
                    title={slide.media.alt}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                )}

                <button
                  type="button"
                  onClick={() => setActiveSlideIndex(index)}
                  aria-label={`Agrandir ${slide.title}`}
                  aria-haspopup="dialog"
                  className="absolute inset-0 z-10 cursor-zoom-in"
                />

                {/* Titre de la carte */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 p-4 md:p-6">
                  <h3 className="font-b612 text-lg md:text-xl font-black text-white leading-tight">
                    {slide.title}
                  </h3>
                </div>

              </article>
          ))}
        </div>

      </div>

      {activeSlideIndex !== null && (
        <div
          className="fixed inset-0 z-100 grid place-items-center bg-black/90 p-4 sm:p-8"
          role="presentation"
          onClick={() => setActiveSlideIndex(null)}
        >
          <button
            type="button"
            aria-label="Fermer le média agrandi"
            onClick={() => setActiveSlideIndex(null)}
            className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-white text-black transition-colors hover:bg-[#fd800a] hover:text-white sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            role="dialog"
            aria-modal="true"
            aria-label={SLIDES[activeSlideIndex].title}
            onClick={(event) => event.stopPropagation()}
            className="relative aspect-video w-full max-w-6xl overflow-hidden rounded-xl bg-black"
          >
            <button
              type="button"
              aria-label="Média précédent"
              onClick={() => setActiveSlideIndex((activeSlideIndex - 1 + SLIDES.length) % SLIDES.length)}
              className="absolute left-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black transition-colors hover:bg-[#fd800a] hover:text-white sm:left-5 sm:h-12 sm:w-12"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            {SLIDES[activeSlideIndex].media.type === "image" && (
              <Image
                src={SLIDES[activeSlideIndex].media.src}
                alt={SLIDES[activeSlideIndex].media.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            )}
            {SLIDES[activeSlideIndex].media.type === "video" && (
              <video
                autoPlay
                controls
                playsInline
                poster={SLIDES[activeSlideIndex].media.poster}
                className="h-full w-full object-contain"
              >
                <source src={SLIDES[activeSlideIndex].media.src} type="video/mp4" />
              </video>
            )}
            {SLIDES[activeSlideIndex].media.type === "youtube" && (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${SLIDES[activeSlideIndex].media.videoId}?autoplay=1&rel=0`}
                title={SLIDES[activeSlideIndex].media.alt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            )}
            <button
              type="button"
              aria-label="Média suivant"
              onClick={() => setActiveSlideIndex((activeSlideIndex + 1) % SLIDES.length)}
              className="absolute right-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black transition-colors hover:bg-[#fd800a] hover:text-white sm:right-5 sm:h-12 sm:w-12"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}