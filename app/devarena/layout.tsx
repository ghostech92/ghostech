import React from "react";
import NavbarArena from "@/components/NavbarArena";
import SplashCursor from "@/components/SplashCursor";

export default function DevArenaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* DevArena Local Navbar */}
      <NavbarArena />

      {/* Main content */}
      <main className="flex-1 flex flex-col relative z-10">
        {children}
      </main>

      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#ec48d5"
      />
    </div>
  );
}
