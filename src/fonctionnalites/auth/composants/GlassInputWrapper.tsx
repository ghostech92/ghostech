import React from "react";

export default function GlassInputWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#02073E]/10 bg-white shadow-sm transition-colors focus-within:border-[#357dab] focus-within:ring-2 focus-within:ring-[#357dab]/20">
      {children}
    </div>
  );
}
