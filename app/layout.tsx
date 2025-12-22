import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Toaster } from "sonner";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jam & Raph",
  description: "Jam & Raph is a technology startup focused on building solutions that improve productivity at lawfirms",
};

const helvatica = localFont({
  src: [
     {
      path: '../public/fonts/helvetica-255/Helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/helvetica-255/Helvetica-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ]
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helvatica.className} bg-stone-50 overflow-x-clip`}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
