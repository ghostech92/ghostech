import React from "react";
import SplashCursor from "@/components/SplashCursor";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/app-sidebar";
import FooterArena from "./_components/FooterArena";

export default function DevArenaLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen bg-[#F4F4F6]">
        
        <AppSidebar />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col relative z-10 w-full min-h-screen">
          {/* Header minimal avec SidebarTrigger */}
          <div className="absolute top-6 left-6 z-[100]">
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
