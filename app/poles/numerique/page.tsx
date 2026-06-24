"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ─── COMPOSANT COUNTER (Compteur animé) ───
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const step = Math.max(1, target / 60);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 30);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ─── COMPOSANT TIMELINE SLIDER ───
const timelineSteps = [
  {
    id: 0,
    title: "Brainstorm",
    icon: "brain",
    content:
      "Brainstorming est le point de départ. Génère des idées sans limites, explore toutes les pistes possibles pour résoudre les défis techniques.",
  },
  {
    id: 1,
    title: "Discuter & Affiner",
    icon: "bulb",
    content:
      "Échange en équipe, critique constructive et sélection des meilleures solutions. C’est ici que les idées prennent forme.",
  },
  {
    id: 2,
    title: "Prototypage",
    icon: "rocket",
    content:
      "Passe à l’action ! Développe un prototype fonctionnel, teste rapidement et itère pour converger vers une solution viable.",
  },
  {
    id: 3,
    title: "Stratégie",
    icon: "target",
    content:
      "Définis la feuille de route, les technologies, l’architecture et les métriques de succès. Une stratégie claire = une exécution gagnante.",
  },
  {
    id: 4,
    title: "Optimisation SEO",
    icon: "seo",
    content:
      "Assure la visibilité de ton projet. Référencement, accessibilité, performance : tout compte pour toucher le bon public.",
  },
  {
    id: 5,
    title: "Livraison & Fierté",
    icon: "customers",
    content:
      "Présente ton travail, recueille les retours, célèbre l’aboutissement. Chaque livraison est une victoire pour l’équipe.",
  },
];

// Définition des SVG symbols (à placer une seule fois dans le DOM)
const SvgSymbols = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    style={{ width: 0, height: 0, position: "absolute" }}
  >
    <linearGradient id="icon-gradient">
      <stop offset="0%" stopColor="#00DBDE" />
      <stop offset="100%" stopColor="#FC00FF" />
    </linearGradient>
    <defs>
      <symbol id="icon-brain" viewBox="0 0 66 66">
        <path d="m28.5 58c-.6 0-1-.4-1-1v-45.8c0-.6.4-1 1-1s1 .4 1 1v45.8c0 .6-.4 1-1 1z" />
        <path d="m11.9 41.8c-2.9 0-5.1-2.2-5.1-5.1s2.2-5.1 5.1-5.1c.6 0 1 .4 1 1s-.4 1-1 1c-1.7 0-3.1 1.4-3.1 3.1s1.4 3.1 3.1 3.1c.6 0 1 .4 1 1s-.4 1-1 1z" />
        <path d="m23.8 11.6c-.6 0-1-.4-1-1 0-1.7-1.4-3.1-3.1-3.1s-3.1 1.4-3.1 3.1c0 .6-.4 1-1 1s-1-.4-1-1c0-2.9 2.2-5.1 5.1-5.1s5.1 2.2 5.1 5.1c0 .6-.4 1-1 1z" />
        <path d="m21.7 61.2c-1.2 0-2.3-.5-3.1-1.3-.8-.9-1.2-2-1.2-3.2 0-.6.5-1 1.1-.9.6 0 1 .5.9 1.1 0 .6.2 1.3.6 1.7.4.5 1 .7 1.7.7 1.4 0 2.5-1 2.5-2.3 0-.6.4-1 1-1s1 .4 1 1c0 2.3-2 4.2-4.5 4.2z" />
        <path d="m18.4 32.8c-.1 0-.2 0-.3 0-1.9-.6-3-2.6-2.5-4.5.4-1.5 1.6-2.5 3.2-2.6h.5c.6 0 1 .4 1 1s-.4 1-1 1h-.4c-.6.1-1.2.5-1.3 1.2-.3.9.3 1.8 1.1 2.1.5.2.8.7.7 1.2-.2.3-.6.6-1 .6z" />
        <path d="m28.6 20.3c-.6 0-1-.4-1-1v-.4c-.1-.6-.5-1.2-1.2-1.3-.9-.3-1.8.3-2.1 1.1-.2.5-.7.8-1.2.7-.5-.2-.8-.7-.7-1.2.6-1.9 2.6-3 4.5-2.5 1.5.4 2.5 1.6 2.6 3.2v.5c.1.5-.3.9-.9.9z" />
        <path d="m28.6 28c-.6 0-1-.4-1-1v-.4c-.1-.6-.5-1.2-1.2-1.3-.9-.3-1.8.3-2.1 1.1-.2.5-.7.8-1.2.7-.5-.2-.8-.7-.7-1.2.6-1.9 2.6-3 4.5-2.5 1.5.4 2.5 1.6 2.6 3.2v.5c.1.5-.3.9-.9.9z" />
        <path d="m15.6 35.8c-.5 0-.9-.4-1-.9-.1-.9.1-1.9.7-2.6.6-.8 1.6-1.3 2.6-1.3.9-.1 1.8.1 2.5.7.8.6 1.3 1.6 1.3 2.6 0 .6-.4 1-.9 1.1-.6 0-1-.4-1.1-.9 0-.5-.2-.9-.6-1.2-.3-.3-.7-.4-1.1-.3-.5 0-1 .3-1.2.6-.3.3-.4.7-.3 1.1.1.5-.3 1.1-.8 1.1z" />
        <path d="m28.6 44.4c-.5 0-1-.4-1-.9-.1-1-.8-1.8-1.8-2.1-1.2-.4-2.6.4-3 1.7-.1.5-.7.8-1.2.7s-.8-.7-.7-1.2c.7-2.4 3.1-3.7 5.4-3.1 1.8.5 3.1 2.1 3.2 3.9.1.5-.3 1-.9 1z" />
        <path d="m18.6 46.8c-.5 0-1-.4-1-.9 0-.6.4-1 .9-1.1.6 0 1.2-.3 1.6-.8s.6-1.1.5-1.7c-.1-1.2-1.1-2.4-2.6-2.3-.5 0-1-.4-1.1-.9 0-.6.4-1 .9-1.1 2.3-.1 4.4 1.7 4.6 4.1.1 1.1-.2 2.3-1 3.2-.5.9-1.6 1.4-2.8 1.5z" />
        <path d="m15.9 19.7c-.1 0-.3 0-.4-.1-1.6-.8-3-2-3.9-3.5-1.9-2.8-2.2-6.4-.6-9.6 2.3-4.8 8.2-6.9 13-4.7 3.6 1.7 5.8 5.5 5.6 9.4 0 .6-.5 1-1.1.9-.6 0-1-.5-.9-1.1.2-3.1-1.6-6.1-4.4-7.4-3.9-1.8-8.5-.1-10.4 3.7-1.2 2.5-1 5.3.5 7.6.8 1.2 1.8 2.2 3.1 2.8.5.2.7.8.5 1.3-.3.5-.6.7-1 .7z" />
        <path d="m21.9 65c-.1 0-.2 0-.3 0-2.1-.1-4-1-5.4-2.5-2.9-3.1-2.7-8 .5-10.9.4-.4 1-.4 1.4.1.4.4.4 1-.1 1.4-2.3 2.1-2.4 5.8-.3 8.1 1 1.1 2.4 1.8 4 1.8 1.5.1 3-.5 4.1-1.5 1.3-1.1 2-2.9 1.8-4.7-.1-.5.3-1 .9-1.1.6 0 1 .3 1.1.9.2 2.4-.7 4.8-2.4 6.4-1.5 1.2-3.4 2-5.3 2z" />
        <path d="m8.4 28.7c-.3 0-.7-.2-.9-.5-1.6-2.7-1.8-6-.6-8.7 1-2.2 2.8-4 5.1-4.8.5-.2 1.1.1 1.3.6s-.1 1.1-.6 1.3c-1.7.6-3.2 2-3.9 3.8-1 2.2-.9 4.8.4 6.9.3.5.1 1.1-.3 1.4-.1 0-.3 0-.5 0z" />
        <path d="m13.7 49.9c-6.9 0-12.3-5.4-12.3-12.3 0-6.8 5.5-12.3 12.3-12.3.6 0 1 .4 1 1s-.4 1-1 1c-5.7 0-10.3 4.6-10.3 10.3 0 5.8 4.5 10.3 10.3 10.3.6 0 1 .4 1 1s-.4 1-1 1z" />
        <path d="m14.5 59h-.1c-3.1-.4-5.6-2.5-6.5-5.4-.7-2-.5-4.3.5-6.1.2-.5.8-.7 1.2-.5.5.2.7.8.4 1.3-.7 1.4-.8 3.2-.3 4.6.7 2.2 2.6 3.8 4.9 4 .5.1.9.6.9 1.1-.1.6-.5 1-1 1z" />
        <path d="m28.6 58c-.6 0-1-.4-1-1v-45.8c0-.6.4-1 1-1s1 .4 1 1v45.8c0 .6-.4 1-1 1z" />
        <path d="m37.9 40h-9.3c-.6 0-1-.4-1-1v-12c0-.6.4-1 1-1h9.3c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1zm-8.3-2h7.3v-10h-7.3z" />
        <path d="m39 44.9h-10.5c-.6 0-1-.4-1-1v-21.8c0-.6.4-1 1-1h10.5c2.5 0 4.7 2.2 4.7 4.7v14.4c0 2.6-2.1 4.7-4.7 4.7zm-9.5-2h9.5c1.5 0 2.7-1.2 2.7-2.7v-14.4c0-1.4-1.3-2.7-2.7-2.7h-9.5z" />
        <path d="m52.9 33.6h-9.9c-.6 0-1-.4-1-1s.4-1 1-1h9.9c.6 0 1 .4 1 1s-.4 1-1 1z" />
        <path d="m56.8 36.7c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1 4.1 1.8 4.1 4.1-1.8 4.1-4.1 4.1zm0-6.2c-1.2 0-2.1.9-2.1 2.1s.9 2.1 2.1 2.1 2.1-.9 2.1-2.1-.9-2.1-2.1-2.1z" />
        <path d="m35.6 22.9c-.6 0-1-.4-1-1v-9.9c0-.6.4-1 1-1s1 .4 1 1v9.9c0 .6-.4 1-1 1z" />
        <path d="m35.6 12.2c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1 4.1 1.8 4.1 4.1-1.8 4.1-4.1 4.1zm0-6.2c-1.2 0-2.1.9-2.1 2.1s.9 2.1 2.1 2.1 2.1-.9 2.1-2.1-.9-2.1-2.1-2.1z" />
        <path d="m35.6 55c-.6 0-1-.4-1-1v-9.9c0-.6.4-1 1-1s1 .4 1 1v9.9c0 .6-.4 1-1 1z" />
        <path d="m35.6 62c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1 4.1 1.8 4.1 4.1-1.8 4.1-4.1 4.1zm0-6.2c-1.2 0-2.1.9-2.1 2.1s.9 2.1 2.1 2.1 2.1-.9 2.1-2.1-.9-2.1-2.1-2.1z" />
        <path d="m60.5 48.3c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1 4.1 1.8 4.1 4.1-1.8 4.1-4.1 4.1zm0-6.2c-1.2 0-2.1.9-2.1 2.1s.9 2.1 2.1 2.1 2.1-.9 2.1-2.1-.9-2.1-2.1-2.1z" />
        <path d="m56.7 45.2h-6.4c-.6 0-1-.4-1-1v-3.5h-5.8c-.6 0-1-.4-1-1s.4-1 1-1h6.8c.6 0 1 .4 1 1v3.5h5.4c.6 0 1 .4 1 1s-.4 1-1 1z" />
        <path d="m60.5 25c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1 4.1 1.8 4.1 4.1-1.8 4.1-4.1 4.1zm0-6.2c-1.2 0-2.1.9-2.1 2.1s.9 2.1 2.1 2.1 2.1-.9 2.1-2.1-.9-2.1-2.1-2.1z" />
        <path d="m50.3 26.4h-7.3c-.6 0-1-.4-1-1s.4-1 1-1h6.3v-3.5c0-.6.4-1 1-1h6.4c.6 0 1 .4 1 1s-.4 1-1 1h-5.4v3.5c0 .6-.4 1-1 1z" />
      </symbol>
      <symbol id="icon-bulb" viewBox="0 0 512 512">
        <path d="M256.011,16H256A160.035,160.035,0,0,0,117.132,255.516a161.029,161.029,0,0,0,55.644,57.149A23.857,23.857,0,0,1,184,332.98v4.4A23.977,23.977,0,0,0,174.131,376a23.943,23.943,0,0,0,0,32A23.977,23.977,0,0,0,184,446.624V456a40.045,40.045,0,0,0,40,40h64a40.045,40.045,0,0,0,40-40v-9.376A23.977,23.977,0,0,0,337.869,408a23.943,23.943,0,0,0,0-32A23.977,23.977,0,0,0,328,337.376v-4.4a23.955,23.955,0,0,1,11.568-20.523A159.891,159.891,0,0,0,416,176C416,87.782,344.229,16.006,256.011,16ZM192,352H320a8,8,0,0,1,0,16H192a8,8,0,0,1,0-16Zm40-96h-8a8,8,0,1,1,8-8Zm16,16h16v64H248Zm80,120a8.009,8.009,0,0,1-8,8H192a8,8,0,0,1,0-16H320A8.009,8.009,0,0,1,328,392Zm-40,88H224a24.027,24.027,0,0,1-24-24v-8H312v8A24.027,24.027,0,0,1,288,480Zm32-48H192a8,8,0,0,1,0-16H320a8,8,0,0,1,0,16Zm11.2-133.183a39.85,39.85,0,0,0-19.2,34.16V336H280V272h8a24,24,0,1,0-24-24v8H248v-8a24,24,0,1,0-24,24h8v64H200v-3.02a39.95,39.95,0,0,0-18.891-33.973A143.982,143.982,0,0,1,256,32h.011C335.406,32.006,400,96.6,400,176A143.156,143.156,0,0,1,331.2,298.817ZM280,256v-8a8,8,0,1,1,8,8Z" />
        <path d="M256,48h-8a8,8,0,0,0,0,16h8A112.127,112.127,0,0,1,368,176v8a8,8,0,0,0,16,0v-8A128.145,128.145,0,0,0,256,48Z" />
      </symbol>
      <symbol id="icon-rocket" viewBox="0 0 494.929 494.929">
        <path d="M494.927,8.642c0.025-2.3-0.875-4.516-2.5-6.141s-3.683-2.508-6.142-2.5c-102.072,1.28-193.04,30.465-266.529,84.908c-55.458-12.753-114.236,3.824-154.363,43.967C30.56,163.704,13.21,211.854,17.785,260.971c0.308,3.267,2.458,6.071,5.533,7.212c0.967,0.354,1.975,0.529,2.967,0.529c2.175,0,4.317-0.833,5.933-2.4c19.211-18.582,42.257-32.123,67.378-39.957c-12.583,24.434-22.991,50.354-30.994,77.773c-0.875,2.992-0.05,6.221,2.158,8.425l14.29,14.289l-49.44,27.603c-2.333,1.304-3.925,3.625-4.292,6.275c-0.367,2.646,0.525,5.313,2.417,7.204l92.925,93.013c1.608,1.617,3.783,2.504,6.033,2.504c0.392,0,0.775-0.025,1.167-0.079c2.65-0.367,4.975-1.954,6.283-4.288l27.685-49.456l14.548,14.548c1.625,1.625,3.8,2.5,6.033,2.5c0.8,0,1.6-0.112,2.392-0.342c27.352-7.979,53.214-18.351,77.597-30.894c-7.823,25.1-21.31,48.116-39.789,67.294c-2.275,2.362-3,5.817-1.858,8.892c1.142,3.071,3.942,5.221,7.208,5.525c5.225,0.487,10.425,0.729,15.608,0.729c43.692,0,85.467-17.142,116.492-48.246c40.136-40.141,56.752-98.993,44.041-154.554C464.495,201.601,493.65,110.672,494.927,8.642z M34.177,241.917c0.908-37.829,16.2-73.892,43.283-100.975c32.633-32.626,79.011-47.904,124.435-41.974c-9.703,8.061-19.115,16.529-28.119,25.533c-24.447,24.445-45.43,51.605-62.888,81.236C82.823,211.742,56.65,224.058,34.177,241.917z M130.76,440.896l-76.983-77.05l43.815-24.461l57.694,57.692L130.76,440.896z M190.852,408.504L86.427,304.083c19.758-64.946,53.183-121.287,99.417-167.517C260.635,61.779,361.393,20.625,477.677,17.25c-3.367,116.292-44.525,217.054-119.317,291.838C312.118,355.329,255.785,388.758,190.852,408.504z M353.985,417.567c-27,27.067-63.092,42.333-101.025,43.196c17.77-22.432,30.043-48.572,36.066-76.613c29.693-17.477,56.906-38.5,81.401-62.995c9.029-9.028,17.52-18.466,25.602-28.197C401.929,338.496,386.617,384.934,353.985,417.567z" />
        <path d="M88.843,455.413c-22.158,16.192-47.842,24.079-71.5,22.171c-1.917-23.633,5.992-49.333,22.183-71.492c2.775-3.804,1.95-9.142-1.858-11.921c-3.808-2.796-9.142-1.95-11.925,1.854C5.427,423.821-3.498,456.833,1.252,486.596c0.583,3.642,3.433,6.5,7.083,7.079c5.25,0.842,10.592,1.254,16,1.254c25.242-0.004,51.683-9.008,74.575-25.742c3.808-2.779,4.633-8.117,1.858-11.921C97.985,453.471,92.652,452.617,88.843,455.413z" />
        <path d="M333.427,161.508c-16.125-16.117-37.55-24.996-60.342-24.996c-22.8,0-44.225,8.879-60.342,24.996c-33.267,33.267-33.267,87.404,0,120.679c16.117,16.117,37.542,24.996,60.342,24.996c22.792,0,44.217-8.879,60.342-24.996C366.693,248.913,366.693,194.775,333.427,161.508z M321.36,270.121c-12.9,12.892-30.042,19.996-48.275,19.996c-18.242,0-35.383-7.104-48.275-19.996c-26.617-26.621-26.617-69.929,0-96.546c12.892-12.892,30.033-19.996,48.275-19.996c18.233,0,35.375,7.104,48.275,19.996C347.977,200.192,347.977,243.5,321.36,270.121z" />
      </symbol>
      <symbol id="icon-target" viewBox="0 0 4335 4335">
        <path d="m1789 3012c-413 0-623-502-330-795 167-167 432-183 616-39l230-230c-312-270-781-254-1075 40-497 496-141 1348 559 1348 676 0 1038-798 598-1306l-230 230c237 303 21 752-368 752zm0 1321c-988 0-1787-799-1787-1787 0-987 799-1787 1787-1787 458 0 889 172 1222 484l180-181-96-484c-4-19 2-38 15-52l508-507c33-34 91-14 97 33l60 427 106-107c54-53 135 28 81 82l-106 106 427 59c47 7 67 65 33 98l-507 508c-14 13-33 19-52 15l-485-96-180 180c659 702 643 1802-40 2486-337 337-786 523-1263 523zm0-3458c-924 0-1672 748-1672 1671 0 924 748 1672 1672 1672 923 0 1671-748 1671-1672 0-427-159-830-449-1140l-230 230c485 527 471 1351-40 1862-526 527-1378 527-1905 0-525-525-525-1379 0-1904 512-511 1333-527 1863-40l230-230c-310-290-713-449-1140-449zm1425-289 75 378 383-383-55-399zm-1425 2018c-51 0-77-62-41-99l245-244c-139-100-331-85-452 37-221 221-63 599 248 599 286 0 450-325 285-555l-245 245c-11 11-26 17-40 17zm598-737 231-231c-485-443-1234-427-1700 40-480 480-480 1261 0 1741 481 481 1260 481 1741 0 467-467 480-1217 40-1700l-231 231c513 581 99 1503-679 1503-242 0-469-94-640-265-353-353-353-927 0-1280 338-339 881-354 1238-39zm1367-1205-383 384 378 75 404-403z" />
      </symbol>
      <symbol id="icon-seo" viewBox="0 0 60 60">
        <path d="m25 4a21 21 0 1 0 21 21 21.024 21.024 0 0 0 -21-21zm0 40a19 19 0 1 1 19-19 19.021 19.021 0 0 1 -19 19z" />
        <path d="m58.535 51.465-6.671-6.672a4.951 4.951 0 0 0 -3.164-1.429l-3.567-3.564a25.033 25.033 0 1 0 -5.333 5.333l3.564 3.567a4.946 4.946 0 0 0 1.429 3.165l6.671 6.672a5 5 0 1 0 7.071-7.07zm-56.535-26.465a23 23 0 1 1 23 23 23.025 23.025 0 0 1 -23-23zm41.873 16.367 2.409 2.41a4.858 4.858 0 0 0 -2.5 2.5l-2.41-2.409a25.12 25.12 0 0 0 2.501-2.501zm13.247 15.754a3.067 3.067 0 0 1 -4.241 0l-6.672-6.672a3 3 0 0 1 4.242-4.242l6.672 6.672a3.031 3.031 0 0 1 -.001 4.242z" />
        <path d="m18.8 18.4a1 1 0 0 0 -1.4-.2l-8 6a1 1 0 0 0 0 1.6l8 6a1 1 0 1 0 1.2-1.6l-6.933-5.2 6.933-5.2a1 1 0 0 0 .2-1.4z" />
        <path d="m40.6 24.2-8-6a1 1 0 0 0 -1.2 1.6l6.933 5.2-6.933 5.2a1 1 0 1 0 1.2 1.6l8-6a1 1 0 0 0 0-1.6z" />
        <path d="m27.242 16.03a1 1 0 0 0 -1.212.728l-4 16a1 1 0 0 0 .728 1.212 1.017 1.017 0 0 0 .242.03 1 1 0 0 0 .969-.758l4-16a1 1 0 0 0 -.727-1.212z" />
      </symbol>
      <symbol id="icon-customers" viewBox="0 0 64 64">
        <path d="m29.905 4.782-1.49 2.821c-.053.101-.151.172-.263.191l-3.144.546c-.865.15-1.576.767-1.848 1.602-.271.835-.058 1.752.553 2.382l2.223 2.29c.08.082.117.196.101.309l-.453 3.158c-.125.87.242 1.737.953 2.253.71.516 1.648.597 2.436.21l2.864-1.407c.103-.05.223-.05.326 0l2.864 1.407c.788.387 1.726.306 2.436-.21.711-.516 1.078-1.383.953-2.253l-.453-3.158c-.016-.113.021-.227.101-.309l2.223-2.29c.611-.63.824-1.547.553-2.382-.272-.835-.983-1.452-1.848-1.602l-3.144-.546c-.112-.019-.21-.09-.263-.191l-1.49-2.821c-.411-.777-1.217-1.262-2.095-1.262s-1.684.485-2.095 1.262zm1.769.934c.064-.121.189-.196.326-.196s.262.075.326.196l1.491 2.821c.342.649.966 1.103 1.689 1.228l3.144.546c.135.023.246.119.288.249s.009.273-.086.371l-2.223 2.289c-.511.527-.75 1.26-.645 1.987l.452 3.158c.02.136-.038.271-.148.351-.111.08-.257.093-.38.033l-2.864-1.407c-.658-.323-1.43-.323-2.088 0l-2.864 1.407c-.123.06-.269.047-.38-.033-.11-.08-.168-.215-.148-.351l.452-3.158c.105-.727-.134-1.46-.645-1.987l-2.223-2.289c-.095-.098-.128-.241-.086-.371s.153-.226.288-.249l3.144-.546c.723-.125 1.347-.579 1.689-1.228z" />
        <path d="m56.659 14.128-3.049.941c-.109.034-.228.015-.321-.05l-2.609-1.838c-.718-.505-1.657-.572-2.44-.174-.782.399-1.28 1.198-1.293 2.076l-.047 3.191c-.002.114-.056.221-.148.289l-2.553 1.914c-.703.526-1.057 1.399-.919 2.266.137.868.743 1.588 1.574 1.872l3.02 1.03c.108.037.193.122.23.23l1.031 3.02c.283.831 1.004 1.437 1.871 1.575.867.137 1.74-.217 2.266-.92l1.914-2.553c.068-.092.175-.146.29-.148l3.19-.047c.878-.013 1.677-.511 2.076-1.293.399-.783.332-1.722-.174-2.44l-1.837-2.608c-.066-.094-.085-.212-.051-.322l.941-3.048c.259-.84.033-1.753-.589-2.374-.621-.621-1.534-.848-2.373-.589zm.59 1.911c.13-.04.273-.005.369.092.097.097.132.239.092.37l-.941 3.048c-.217.702-.096 1.463.327 2.063l1.837 2.609c.078.112.089.258.027.38s-.187.199-.324.201l-3.19.047c-.734.011-1.421.361-1.861.949l-1.913 2.553c-.082.109-.218.165-.353.143-.135-.021-.247-.116-.292-.245l-1.03-3.02c-.237-.694-.783-1.24-1.477-1.477l-3.02-1.03c-.129-.044-.224-.157-.245-.292s.034-.271.143-.353l2.554-1.913c.587-.44.937-1.127.948-1.861l.047-3.19c.002-.137.079-.261.201-.324.122-.062.268-.051.38.028l2.609 1.837c.6.422 1.362.543 2.063.326z" />
        <path d="m4.379 17.091.941 3.048c.034.11.015.228-.051.322l-1.837 2.608c-.506.718-.573 1.657-.174 2.44.399.782 1.198 1.28 2.076 1.293l3.19.047c.115.002.222.056.29.148l1.914 2.553c.526.703 1.399 1.057 2.266.92.867-.138 1.588-.744 1.871-1.575l1.031-3.02c.037-.108.122-.193.23-.23l3.02-1.03c.831-.284 1.437-1.004 1.574-1.872.138-.867-.216-1.74-.919-2.266l-2.553-1.913c-.092-.069-.146-.176-.148-.29l-.047-3.191c-.013-.878-.511-1.677-1.293-2.076-.783-.398-1.722-.331-2.44.174l-2.609 1.837c-.093.066-.212.085-.321.051l-3.049-.941c-.839-.259-1.752-.032-2.373.589-.622.621-.848 1.534-.589 2.374zm1.911-.59c-.04-.131-.005-.273.092-.37.096-.097.239-.132.369-.092l3.049.941c.701.217 1.463.096 2.063-.326l2.609-1.837c.112-.079.258-.09.38-.028.122.063.199.187.201.324l.047 3.19c.011.734.361 1.421.948 1.861l2.554 1.913c.109.082.164.218.143.353s-.116.248-.245.292l-3.02 1.03c-.694.237-1.24.783-1.477 1.477l-1.03 3.02c-.045.129-.157.224-.292.245-.135.022-.271-.034-.353-.143l-1.913-2.553c-.44-.588-1.127-.938-1.861-.949l-3.19-.047c-.137-.002-.262-.079-.324-.201s-.051-.268.027-.38l1.837-2.609c.423-.6.544-1.361.327-2.063z" />
        <path d="m32 23.148c-10.302 0-18.666 8.364-18.666 18.666 0 10.303 8.364 18.666 18.666 18.666s18.666-8.363 18.666-18.666c0-10.302-8.364-18.666-18.666-18.666zm0 2c9.198 0 16.666 7.468 16.666 16.666 0 9.199-7.468 16.666-16.666 16.666s-16.666-7.467-16.666-16.666c0-9.198 7.468-16.666 16.666-16.666z" />
        <path d="m39.187 43.464c-3.715 0-10.666 0-14.38.026-.986 0-1.913.495-2.465 1.319-.552.825-.657 1.871-.279 2.788 1.586 3.924 5.44 6.7 9.937 6.7 4.494 0 8.347-2.773 9.961-6.689.382-.926.276-1.981-.281-2.813s-1.493-1.331-2.494-1.331zm0 2c.334 0 .646.167.831.444.186.277.221.629.094.937-1.315 3.191-4.451 5.452-8.112 5.452-3.658 0-6.793-2.258-8.085-5.455-.001-.002-.002-.004-.003-.006-.124-.301-.089-.644.092-.914s.484-.432.809-.432h.007c3.711-.026 10.655-.026 14.367-.026z" />
        <path d="m23.215 38.06c.065-.416.386-.703.75-.959.207-.146.455-.227.712-.317.353-.124.743-.177 1.14-.153.328-.02.651.011.954.095.217.06.43.112.62.211.508.264.951.604 1.028 1.123 0 .278.225.504.503.504s.504-.226.504-.504c.136-.923-.337-1.793-1.094-2.473-.457-.41-1.051-.694-1.693-.857-.266-.067-.543-.088-.822-.098-.373.015-.742.056-1.088.166-.54.171-1.041.424-1.434.778-.759.684-1.228 1.559-1.087 2.484 0 .278.226.504.504.504.277 0 .503-.226.503-.504z" />
        <path d="m35.581 38.06c.066-.416.386-.703.751-.959.206-.146.455-.227.711-.317.354-.124.744-.177 1.14-.153.328-.02.651.011.954.095.218.06.43.112.62.211.509.264.951.604 1.028 1.123 0 .278.226.504.503.504.278 0 .504-.226.504-.504.136-.923-.336-1.793-1.094-2.473-.457-.41-1.051-.694-1.693-.857-.265-.067-.543-.088-.822-.098-.372.015-.742.056-1.088.166-.54.171-1.041.424-1.434.778-.758.684-1.228 1.559-1.087 2.484 0 .278.226.504.504.504s.503-.226.503-.504z" />
        <path d="m25.796 51.367c-.178.444-.017.951.384 1.211 1.677 1.088 3.675 1.719 5.82 1.719 2.144 0 4.142-.631 5.82-1.716.402-.26.563-.768.385-1.212-.889-2.22-3.318-3.86-6.205-3.86-2.886 0-5.314 1.639-6.204 3.858zm2.271-.007c.807-1.123 2.277-1.851 3.933-1.851 1.657 0 3.126.728 3.934 1.852-1.183.599-2.519.936-3.934.936s-2.751-.337-3.933-.937z" />
      </symbol>
    </defs>
  </svg>
);

// ─── PAGE PRINCIPALE ───
export default function PoleNumeriquePage() {
  const [activeCategory, setActiveCategory] = useState<
    "tous" | "technique" | "design-marketing" | "innovation"
  >("tous");
  const [activeStep, setActiveStep] = useState(0);

  // ─── DONNÉES DES 8 PÔLES GHOSTECH ───
  const polesGhostech = [
    {
      id: 1,
      name: "Développement Web & Mobile",
      responsable: "Ethan Bokamé",
      category: "technique",
      icon: "code_blocks",
      desc: "Conception, architecture et déploiement d'applications web modernes et de solutions mobiles natives ou hybrides robustes.",
      missions: [
        "Développement Next.js, React & Laravel",
        "Optimisation des performances et de l'UI",
        "Maintenance applicative et API REST",
      ],
      image:
        "/poles_photo/p1.png",
    },
    {
      id: 2,
      name: "Data & Intelligence Artificielle",
      responsable: "Ange Brim",
      category: "technique",
      icon: "psychology",
      desc: "Exploitation des données massives et intégration de modèles prédictifs intelligents pour guider les décisions stratégiques.",
      missions: [
        "Machine Learning & Modélisation",
        "Analyse spatiale & Cartographie (R&D)",
        "Visualisation de données (PowerBI/Tableau)",
      ],
      image:
        "/poles_photo/p2.png",
    },
    {
      id: 3,
      name: "Réseaux & Télécommunications",
      responsable: "Bradley Bilson",
      category: "technique",
      icon: "settings_input_antenna",
      desc: "Conception et supervision des infrastructures réseaux pour garantir une connectivité fluide, stable et haute performance.",
      missions: [
        "Architecture & routage réseau",
        "Supervision des infrastructures",
        "Optimisation des protocoles de communication",
      ],
      image:
        "/poles_photo/p3.png",
    },
    {
      id: 4,
      name: "Cybersécurité",
      responsable: "Yaniss-Elie",
      category: "technique",
      icon: "policy",
      desc: "Protection des systèmes, détection proactive des menaces et mise en place d'architectures de défense avancées.",
      missions: [
        "Tests d'intrusion (Pentesting)",
        "Analyse de trafic (Wireshark) & Audits",
        "Déploiement d'architectures Zero Trust",
      ],
      image:
        "/poles_photo/p4.png",
    },
    {
      id: 5,
      name: "Design Graphique & UI/UX",
      responsable: "Ayahoue Elie",
      category: "design-marketing",
      icon: "palette",
      desc: "Création d'identités visuelles percutantes et conception d'interfaces utilisateurs centrées sur l'expérience et l'ergonomie.",
      missions: [
        "Maquettage et prototypage UI/UX",
        "Création de chartes graphiques",
        "Design de supports de communication",
      ],
      image:
        "/poles_photo/p5.png",
    },
    {
      id: 6,
      name: "Robotique & IoT",
      responsable: "Harding",
      category: "technique",
      icon: "deployed_code",
      desc: "Interconnexion d'objets connectés et programmation de systèmes automatisés intelligents pour le monde physique.",
      missions: [
        "Développement de passerelles IoT sécurisées",
        "Réseaux de capteurs & Protocoles (MQTT)",
        "Prototypage de solutions robotiques",
      ],
      image: "/poles_photo/p6.png",
    },
    {
      id: 7,
      name: "Entrepreneuriat Tech & Innovation",
      responsable: "En partenariat avec AIESEC CI / AfroLink",
      category: "innovation",
      icon: "insights",
      desc: "Incubation d'idées novatrices, accélération de projets technologiques et pilotage d'écosystèmes partenaires.",
      missions: [
        "Mentorat de startups Tech",
        "Organisation de Hackathons & Challenges",
        "Synergie avec les partenaires locaux",
      ],
      image:
        "/poles_photo/p7.png",
    },
    {
      id: 8,
      name: "Communication & Marketing Digital",
      responsable: "Ayahoue Elie",
      category: "design-marketing",
      icon: "campaign",
      desc: "Valorisation de la marque Ghostech, gestion des communautés en ligne et stratégies de croissance digitale.",
      missions: [
        "Stratégie de contenu & Réseaux sociaux",
        "Inbound Marketing & Growth",
        "Promotion des projets et événements",
      ],
      image:
        "/poles_photo/p8.png",
    },
  ];

  const filteredPoles =
    activeCategory === "tous"
      ? polesGhostech
      : polesGhostech.filter((p) => p.category === activeCategory);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  return (
    <main className="w-full min-h-screen bg-[#F8FAFC] text-[#0F2137] flex flex-col items-center overflow-hidden">
      <SvgSymbols />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*  NOUVELLE HERO – DYNAMIQUE, AVEC OVERLAY & ÉLÉMENTS FLOTTANTS */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full max-w-[1400px] mx-auto mt-28 px-4 sm:px-6 mb-8">
        <div
          className="w-full rounded-[2.5rem] px-6 py-20 md:py-28 flex flex-col items-center text-center shadow-2xl relative overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay dégradé avec effet de profondeur */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F2137]/70 via-[#1A3A5C]/60 to-[#96C9F0]/40 backdrop-blur-[2px]" />

          {/* Éléments flottants (déco) */}
          <div className="absolute top-8 left-8 text-6xl opacity-40 animate-bounce-slow hidden md:block">🚀</div>
          <div className="absolute bottom-8 right-8 text-5xl opacity-40 animate-bounce-slow delay-700 hidden md:block">🏆</div>
          <div className="absolute top-1/3 right-12 text-4xl opacity-30 animate-spin-slow hidden md:block">⚡</div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mb-4 bg-white/20 backdrop-blur-md px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-white/20"
          >
            🧠 8 pôles d’excellence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.15] mb-6 max-w-4xl drop-shadow-lg"
          >
            L’innovation naît de la <br />
            <span className="bg-gradient-to-r from-[#F9C1A5] via-[#DECFDB] to-[#96C9F0] bg-clip-text text-transparent">
              synergie de nos pôles
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative z-10 text-white/90 text-base md:text-[18px] max-w-2xl mx-auto leading-relaxed mb-8 font-medium drop-shadow-md"
          >
            Découvrez comment chaque département, de la <strong>Data</strong> à la <strong>Cybersécurité</strong>, en passant par le <strong>Design</strong> et l’<strong>IoT</strong>, façonne l’avenir numérique de Ghostech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto"
          >
            <a
              href="#poles"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#0F2137] font-bold text-[15px] hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Explorer les Pôles <span>→</span>
            </a>
            <a
              href="#timeline"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-[15px] hover:bg-white/30 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              Notre méthodologie
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*  CHIFFRES CLÉS – juste après la hero */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="w-full max-w-6xl py-12 px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          {[
            { label: "Pôles d'Expertise", value: 8, suffix: "" },
            { label: "Domaines de Compétences", value: 24, suffix: "+" },
            { label: "Partenaires Stratégiques", value: 2, suffix: "" },
            { label: "Vision Transversale", value: 100, suffix: "%" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#357dab]">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-gray-500 font-medium mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*  TIMELINE SLIDER – après les chiffres */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section id="timeline" className="w-full max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-[#0F2137] text-xs font-bold px-4 py-1.5 rounded-full border border-blue-200/50">
            🔥 Notre méthodologie
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2137] mt-4">
            Du brainstorming à la livraison
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mt-2">
            Cliquez sur chaque étape pour découvrir notre processus
            collaboratif.
          </p>
        </div>

        <div className="w-full relative">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 relative pb-12">
            {timelineSteps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <div
                  key={step.id}
                  onClick={() => handleStepClick(idx)}
                  className={`relative flex flex-col items-center cursor-pointer transition-all duration-300 group ${
                    isActive ? "scale-105" : "hover:scale-105"
                  }`}
                >
                  <div className="relative w-14 h-14 md:w-16 md:h-16">
                    <svg
                      className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
                        isActive ? "opacity-0" : "opacity-100"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 66 66"
                    >
                      <use href={`#icon-${step.icon}`} />
                    </svg>
                    <svg
                      className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      fill="url(#icon-gradient)"
                      viewBox="0 0 66 66"
                    >
                      <use href={`#icon-${step.icon}`} />
                    </svg>
                    {isActive && (
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-30 blur-md animate-pulse" />
                    )}
                  </div>

                  <p className="text-xs font-bold mt-2 text-center leading-tight text-[#0F2137]">
                    {step.title}
                  </p>

                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full bg-gray-200">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isActive
                          ? "w-full bg-gradient-to-r from-cyan-400 to-purple-400"
                          : "w-0"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-100 to-purple-100 rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-blue-100 to-pink-100 rounded-full opacity-20 blur-2xl" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#0F2137] mb-4 flex items-center gap-3">
                <span className="inline-block w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full" />
                {timelineSteps[activeStep].title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {timelineSteps[activeStep].content}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*  SECTION FILTRES & PÔLES */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section id="poles" className="w-full max-w-6xl px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1 h-6 bg-[#357dab] rounded-full"></span>
              <span className="text-xs uppercase tracking-wider font-bold text-gray-400">
                Cartographie des pôles
              </span>
            </div>
            <h2 className="text-3xl font-bold text-[#0F2137]">
              Nos Départements Spécialisés
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-2xl border border-gray-200/60 shadow-sm">
            {[
              { id: "tous", label: "Tous les pôles" },
              { id: "technique", label: "Tech & Ingénierie" },
              { id: "design-marketing", label: "Design & Stratégie" },
              { id: "innovation", label: "Écosystème" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveCategory(btn.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeCategory === btn.id
                    ? "bg-[#0F2137] text-white shadow-sm"
                    : "bg-transparent text-gray-500 hover:text-[#0F2137]"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <AnimatePresence mode="popLayout">
            {filteredPoles.map((pole) => (
              <motion.div
                layout
                key={pole.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col md:flex-row bg-white rounded-[2rem] border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="w-full md:w-[40%] relative min-h-[240px] md:min-h-full bg-slate-900">
                  <Image
                    src={pole.image} // ✅ CORRECTION : utilise pole.image
                    alt={pole.name}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-white/10" />

                  <div className="absolute top-6 left-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <span className="material-symbols-rounded text-xl">
                        {pole.icon}
                      </span>
                    </div>
                    <span className="bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg font-mono">
                      PÔLE {pole.id.toString().padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="w-full md:w-[60%] p-6 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl mb-4">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Responsable :
                      </span>
                      <span className="text-xs font-bold text-[#357dab]">
                        {pole.responsable}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#0F2137] mb-3">
                      {pole.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {pole.desc}
                    </p>

                    <div className="border-t border-slate-100 pt-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Missions & Activités clés
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {pole.missions.map((mission, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs font-medium text-slate-600"
                          >
                            <span className="text-[#357dab] font-bold mt-0.5">
                              ✓
                            </span>
                            <span>{mission}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      

      {/* Animations personnalisées */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </main>
  );
}