import type { Metadata } from "next";
import { Toaster } from "sonner";

import "./globals.css";

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
      <body className="font-sans bg-white overflow-x-clip">
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
