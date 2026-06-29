"use client";
import React, { useRef, useState } from "react";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g. "rgba(236, 72, 153, 0.2)"
}

export default function Card3D({ children, className = "", glowColor = "rgba(236, 72, 153, 0.15)" }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Limit rotation to max 15 degrees
    const rY = ((mouseX / width) - 0.5) * 18;
    const rX = (0.5 - (mouseY / height)) * 18;

    const sX = (mouseX / width) * 100;
    const sY = (mouseY / height) * 100;

    setRotate({ x: rX, y: rY });
    setShine({ x: sX, y: sY, opacity: 0.55 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setShine(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.015, 1.015, 1.015)`,
        transition: rotate.x === 0 && rotate.y === 0 ? "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)" : "transform 0.08s ease-out, box-shadow 0.15s ease",
        transformStyle: "preserve-3d",
        boxShadow: rotate.x === 0 && rotate.y === 0 
          ? "0 4px 20px rgba(0,0,0,0.02)" 
          : `0 25px 50px rgba(0,0,0,0.08), 0 0 35px ${glowColor}`,
      }}
      className={`relative bg-white border border-[#E8ECF1] rounded-[28px] p-6 flex flex-col justify-between overflow-hidden cursor-pointer ${className}`}
    >
      {/* 3D Glass shine overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 200px at ${shine.x}% ${shine.y}%, rgba(255, 255, 255, 0.5), transparent)`,
          opacity: shine.opacity,
          zIndex: 5,
        }}
      />
      {/* Content wrapper with translateZ for depth */}
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
