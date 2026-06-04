import { createPageMetadata } from "@/lib/metadata";
import FormFillerPage from "./form-filler-client";

export const metadata = createPageMetadata({
  title: "AI Form Filler for Legal Documents",
  description:
    "Pillar's form filler auto-fills B14 court forms and firm templates from your source documents, with verbatim citations back to the source.",
  path: "/form-filler",
});

export default function Page() {
  return <FormFillerPage />;
}
