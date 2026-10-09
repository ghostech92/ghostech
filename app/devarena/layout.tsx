import React from "react";
import SplashCursor from "@/src/composants/animations/SplashCursor";
import { SidebarProvider, SidebarTrigger } from "@/src/composants/ui/sidebar";
import { AppSidebar } from "@/src/fonctionnalites/devarena/composants/SidebarArena";
import FooterArena from "@/src/fonctionnalites/devarena/composants/FooterArena";
import BadgeUnlockPopup from "@/src/fonctionnalites/devarena/composants/BadgeUnlockPopup";
import PointsEarnedPopup from "@/src/fonctionnalites/devarena/composants/PointsEarnedPopup";

export default function DevArenaLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-dvh bg-[#F4F4F6]">

        <AppSidebar />
        <BadgeUnlockPopup />
        <PointsEarnedPopup />

        {/* Main Content Area */}
        <main className="min-w-0 flex-1 flex flex-col relative z-10 w-full min-h-dvh">
          {/* Header minimal avec SidebarTrigger (placé à droite sur mobile pour respecter la consigne) */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-auto sm:left-6 z-[100]">
            <SidebarTrigger className="text-gray-700 bg-white/80 backdrop-blur-md hover:bg-white border border-gray-200 p-2 rounded-xl shadow-sm transition-all" />
          </div>

          <div className="flex-1 flex flex-col w-full">
            {children}
          </div>

          <FooterArena />
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
          COLOR="#79682cff"
        />
      </div>
    </SidebarProvider>
  );
}
