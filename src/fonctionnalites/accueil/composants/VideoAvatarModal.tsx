"use client";

import { useRef, useState } from "react";
import {
  Maximize,
  Minus,
  Pause,
  Play,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

const videoSrc =
  "https://res.cloudinary.com/ddyff6weh/video/upload/v1790855573/videochat_nuihx4.mp4";

type VideoAvatarModalProps = {
  isVisible?: boolean;
};

export default function VideoAvatarModal({ isVisible = true }: VideoAvatarModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const openFullscreen = () => {
    setIsFullscreen((current) => !current);
  };

  const closeModal = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
    setIsFullscreen(false);
    setIsOpen(false);
  };

  return (
    <>
      {isVisible && !isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Ouvrir la video de Ghostech"
            className="group relative flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-4 border-white bg-[#3b82f6] p-1 shadow-2xl transition-transform hover:scale-105 sm:h-24 sm:w-24"
          >
            <div className="relative h-full w-full overflow-hidden rounded-full bg-zinc-900">
              <video
                src={videoSrc}
                className="h-full w-full object-cover"
                muted
                autoPlay
                loop
                playsInline
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="text-sm font-bold text-white drop-shadow-md sm:text-base">
                  Bonjour
                </span>
              </div>
            </div>

            <span className="pointer-events-none absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#3b82f6] text-white shadow-md sm:h-7 sm:w-7">
              <Minus className="h-3 w-3 stroke-3 sm:h-3.5 sm:w-3.5" />
            </span>
          </button>
        </div>
      )}

      {isVisible && isOpen && (
        <div
          className={
            isFullscreen
              ? "fixed inset-0 z-60 flex items-center justify-center overflow-hidden bg-black"
              : "pointer-events-none fixed right-4 top-24 z-60 sm:right-6 sm:top-28"
          }
        >
          {isFullscreen && (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-2xl"
            />
          )}

          <div
            className={
              isFullscreen
                ? "pointer-events-auto relative z-10 flex h-full w-[min(100vw,440px)] flex-col justify-between overflow-hidden bg-black"
                : "pointer-events-auto relative flex h-[78vh] max-h-150 w-[min(88vw,360px)] flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-zinc-900"
            }
            role="dialog"
            aria-modal="false"
            aria-label="Video de presentation Ghostech"
          >
            <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-end p-3.5 text-xs text-white">

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Activer le son" : "Couper le son"}
                  className="cursor-pointer rounded p-1 transition-colors hover:bg-white/20"
                >
                  {isMuted ? (
                    <VolumeX className="h-3.5 w-3.5" />
                  ) : (
                    <Volume2 className="h-3.5 w-3.5" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={openFullscreen}
                  aria-label="Plein ecran"
                  className="cursor-pointer rounded p-1 transition-colors hover:bg-white/20"
                >
                  <Maximize className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Fermer la video"
                  className="ml-1 cursor-pointer rounded-full bg-black p-1.5 text-white transition-colors hover:bg-zinc-800"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="absolute inset-0 z-0 flex items-center justify-center bg-black">
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                playsInline
                muted={isMuted}
                className={isFullscreen ? "h-full w-full object-contain" : "h-full w-full object-cover"}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />

              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Mettre en pause" : "Lire la video"}
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-zinc-900 transition-transform hover:scale-105 hover:bg-white"
              >
                {isPlaying ? (
                  <Pause className="h-7 w-7 fill-current" />
                ) : (
                  <Play className="ml-1 h-7 w-7 fill-current" />
                )}
              </button>
            </div>

            {!isFullscreen && (
              <div className="pointer-events-none relative z-20 mt-auto flex justify-center p-4">
                <img
                  src="/logo1_2.svg"
                  alt="Ghostech"
                  className="h-10 w-auto object-contain"
                />
              </div>
            )}
          </div>

          {isFullscreen && (
            <div className="pointer-events-none absolute bottom-8 left-8 z-20">
              <img
                src="/logo1_2.svg"
                alt="Ghostech"
                className="h-16 w-auto object-contain"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
