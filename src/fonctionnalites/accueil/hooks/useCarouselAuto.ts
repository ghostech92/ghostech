"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Hook générique pour un carrousel avec défilement automatique et transitions.
 * Extrait de la page d'accueil pour réutilisation.
 * 
 * @param totalSlides - Nombre total de slides
 * @param intervalMs - Intervalle en ms entre chaque slide (défaut: 6000)
 * @param fadeDurationMs - Durée du fade en ms (défaut: 300)
 */
export function useCarouselAuto(totalSlides: number, intervalMs = 6000, fadeDurationMs = 300) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setSlideIndex((prev) => (prev + 1) % totalSlides);
        setIsFading(false);
      }, fadeDurationMs);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [totalSlides, intervalMs, fadeDurationMs]);

  const changeSlide = useCallback(
    (index: number) => {
      if (index === slideIndex) return;
      setIsFading(true);
      setTimeout(() => {
        setSlideIndex(index);
        setIsFading(false);
      }, fadeDurationMs);
    },
    [slideIndex, fadeDurationMs]
  );

  return { slideIndex, isFading, changeSlide };
}
