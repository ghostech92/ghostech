"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/src/composants/navigation/Navbar";
import Footer from "@/src/composants/navigation/Footer";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  return (
    <div className="flex min-h-dvh w-full max-w-full min-w-0 flex-col overflow-x-hidden">
      {!isDashboard && <Navbar />}
      <div className="w-full min-w-0 flex-1">{children}</div>
      {!isDashboard && <Footer />}
    </div>
  );
}
