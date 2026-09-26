import type { Metadata } from "next";
import { DM_Sans, B612, Roboto, Geist } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/src/composants/mise-en-page/ConditionalLayout";
import { cn } from "@/src/utilitaires/cn";

const MAINTENANCE_MODE = true;

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const b612 = B612({
  variable: "--font-b612",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghostech",
  description: "Innovation, Formation et Entrepreneuriat en Afrique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (MAINTENANCE_MODE) {
    return (
      <html
        lang="fr"
        className={cn("h-full", "antialiased", dmSans.variable, b612.variable, roboto.variable, "font-sans", geist.variable)}
      >
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        </head>
        <body className="min-h-full flex flex-col font-sans text-white bg-slate-950 relative">
          <main className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.2),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_40%,_#082f49_100%)] px-6">
            <div className="text-center max-w-2xl">
              <p className="text-sm uppercase tracking-[0.5em] text-cyan-300 mb-4">Ghostech</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Site en construction</h1>
              <p className="text-lg md:text-xl text-slate-200">
                Nous travaillons actuellement sur la plateforme. Revenez bientôt.
              </p>
            </div>
          </main>
        </body>
      </html>
    );
  }

  return (
    <html
      lang="fr"
      className={cn("h-full", "antialiased", dmSans.variable, b612.variable, roboto.variable, "font-sans", geist.variable)}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-sans text-[#357dab] bg-white relative">
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
