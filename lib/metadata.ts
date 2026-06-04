import type { Metadata } from "next";
import { SITE_CONFIG } from "./seo";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path = "",
  image = SITE_CONFIG.defaultOgImage,
  keywords = [],
}: MetadataInput): Metadata {
  const url = `${SITE_CONFIG.domain}${path}`;

  return {
    title,
    description,
    keywords: [...SITE_CONFIG.keywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
