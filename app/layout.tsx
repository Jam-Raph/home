import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";

import "./globals.css";

const playfair = localFont({
  src: [
    { path: "../public/fonts/playfair/playfair-display-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/playfair/playfair-display-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/playfair/playfair-display-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/playfair/playfair-display-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Jam & Raph",
  description: "AI-powered legal workflows, built for modern firms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} font-sans bg-white overflow-x-clip`}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
