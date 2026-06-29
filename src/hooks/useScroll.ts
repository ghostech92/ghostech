import { useState, useEffect } from "react";

/**
 * Custom hook to detect if the window has been scrolled past a threshold
 * @param threshold The scroll threshold in pixels
 * @returns boolean indicating if the scroll is past the threshold
 */
export function useScroll(threshold: number = 20): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return scrolled;
}
