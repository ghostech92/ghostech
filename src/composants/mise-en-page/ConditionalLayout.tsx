"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/src/composants/navigation/Navbar";
import Footer from "@/src/composants/navigation/Footer";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Navbar />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}
