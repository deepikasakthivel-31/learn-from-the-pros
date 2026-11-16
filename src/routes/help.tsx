import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CircleHelp } from "lucide-react";

import { SiteShell } from "@/components/marketplace/site-shell";
import { useLanguage } from "@/components/marketplace/language-context";
import { getCopy } from "@/lib/localization";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help and FAQs — Skills Exchange" },
      { name: "description", content: "Learn how mentor discovery and monthly learning are designed to work on Skills Exchange." },
      { property: "og:title", content: "Help and FAQs — Skills Exchange" },
      { property: "og:description", content: "Answers about finding mentors and the Skills Exchange learning model." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HelpPage,
});

function HelpPage() {
  const { language } = useLanguage();
  const copy = (key: Parameters<typeof getCopy>[1]) => getCopy(language, key);
  const questions = [
    { q: "What is Skills Exchange?", a: "A learning marketplace concept that helps learners find experienced professionals for practical, mentor-led monthly learning." },
    { q: "How do I choose someone to learn with?", a: "Explore profile details, practical skills, professional experience, teaching languages, sample reviews, and monthly example plans." },
    { q: "Can I message a mentor or book a class in this preview?", a: "Not yet. Accounts, messaging, scheduling, and payments are planned for later stages; the profiles and plans currently show example content." },
    { q: "Are professional profiles and prices live?", a: "No. The people, ratings, monthly prices, and class counts on this preview are sample data, not verified listings or active offers." },
    { q: "Which learning languages are planned?", a: "English, Tamil, Hindi, Telugu, Malayalam, and Kannada. The page language selector translates key interface labels." },
    { q: "What does professional verification mean?", a: "The planned service will review identity and qualifications before approving paid professional listings. Verification is not active in this preview." },
  ];

  return (
    <SiteShell>
      <div className="editorial-page help-page">
        <section className="editorial-heading">
          <span className="eyebrow"><span className="eyebrow-mark" />A few clear answers</span>
          <h1>{copy("helpPageTitle")}</h1>
          <p>{copy("helpPageDescription")}</p>
        </section>
        <section className="faq-list">
          {questions.map(({ q, a }, index) => (
            <details key={q} className="faq-item" open={index === 0}>
              <summary><span>{q}</span><span className="faq-toggle" aria-hidden="true" /></summary>
              <p>{a}</p>
            </details>
          ))}
        </section>
        <div className="help-contact-line"><CircleHelp size={18} /><span>Still have a question?</span><Link to="/contact">See contact options <ArrowRight size={14} /></Link></div>
      </div>
    </SiteShell>
  );
}