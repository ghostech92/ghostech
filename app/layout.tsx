import type { Metadata } from "next";
import { DM_Sans, B612, Roboto, Geist } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/src/composants/mise-en-page/ConditionalLayout";
import { cn } from "@/src/utilitaires/cn";

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
