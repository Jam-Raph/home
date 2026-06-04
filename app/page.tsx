import { createPageMetadata } from "@/lib/metadata";
import Home from "./home-client";

export const metadata = createPageMetadata({
  title: "AI Integration for Law Firms & Professional Services",
  description:
    "Jam & Raph builds custom Claude skills, MCP connectors, and governed AI workflows for admin-heavy professional-services teams in Singapore — plus Pillar, our legal automation product.",
  path: "/",
});

export default function Page() {
  return <Home />;
}
