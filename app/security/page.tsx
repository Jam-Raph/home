import { createPageMetadata } from "@/lib/metadata";
import SecurityPage from "./security-client";

export const metadata = createPageMetadata({
  title: "Security & Privacy",
  description:
    "How Jam & Raph and Pillar keep legal documents private — TLS 1.3 and AES-256 encryption, expiring access, Row Level Security, and PDPA-aware governance.",
  path: "/security",
});

export default function Page() {
  return <SecurityPage />;
}
