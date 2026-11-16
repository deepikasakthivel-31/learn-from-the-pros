import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/marketplace/site-shell";
import { useLanguage } from "@/components/marketplace/language-context";
import { getCopy } from "@/lib/localization";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Skills Exchange" },
      { name: "description", content: "Contact information for Skills Exchange learners and professionals." },
      { property: "og:title", content: "Contact Skills Exchange" },
      { property: "og:description", content: "We welcome questions from learners and professionals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { language } = useLanguage();
  const copy = (key: Parameters<typeof getCopy>[1]) => getCopy(language, key);

  return (
    <SiteShell>
      <div className="editorial-page contact-page">
        <section className="editorial-heading">
          <span className="eyebrow"><span className="eyebrow-mark" />A human answer, when you need one</span>
          <h1>{copy("contactPageTitle")}</h1>
          <p>{copy("contactPageDescription")}</p>
        </section>
        <section className="contact-options">
          <article><span><MessageCircle size={21} /></span><h2>Learning questions</h2><p>Browse the mentor profiles and Help page while we prepare learner support.</p><Button asChild variant="outline"><Link to="/help">Visit help center<ArrowRight size={15} /></Link></Button></article>
          <article><span><ShieldCheck size={21} /></span><h2>Professional applications</h2><p>Professional applications and profile verification are not open in this preview.</p><Button asChild variant="outline"><Link to="/about">About the platform<ArrowRight size={15} /></Link></Button></article>
        </section>
        <p className="contact-preview-note">This is a preview experience. No support email or contact number is published yet.</p>
      </div>
    </SiteShell>
  );
}