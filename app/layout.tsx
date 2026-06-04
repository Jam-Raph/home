import type { Metadata } from "next";
import "@fontsource/playfair-display/400.css";
import { Toaster } from "sonner";
import { Suspense } from "react";
import { PHProvider } from "./posthog-provider";
import { PostHogPageview } from "./posthog-pageview";
import { JsonLd } from "@/components/JsonLd";
import { SITE_CONFIG } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.defaultOgImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.domain,
  logo: "https://jamraph.com/logos/pillar-logo.png",
  description: SITE_CONFIG.description,
  foundingDate: "2024",
  sameAs: SITE_CONFIG.sameAs,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.domain,
  description: SITE_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-white overflow-x-clip">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <PHProvider>
          <Suspense fallback={null}>
            <PostHogPageview />
          </Suspense>
          {children}
          <Toaster richColors position="top-center" />
        </PHProvider>
      </body>
    </html>
  );
}
