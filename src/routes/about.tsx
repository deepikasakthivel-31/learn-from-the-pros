import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, HeartHandshake, Lightbulb, Target } from "lucide-react";

import { SiteShell } from "@/components/marketplace/site-shell";
import { useLanguage } from "@/components/marketplace/language-context";
import { getCopy } from "@/lib/localization";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Skills Exchange" },
      { name: "description", content: "Skills Exchange brings learners and experienced professionals together for practical learning." },
      { property: "og:title", content: "About Skills Exchange" },
      { property: "og:description", content: "A more personal way to learn practical skills from people with experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { language } = useLanguage();
  const copy = (key: Parameters<typeof getCopy>[1]) => getCopy(language, key);
  const values = [
    { icon: HeartHandshake, title: "People first", text: "Learning is easier when you can ask a real person, get thoughtful feedback, and build trust over time." },
    { icon: Lightbulb, title: "Useful practice", text: "Move beyond watching. Build a skill through small, relevant projects and conversations." },
    { icon: Target, title: "Your pace, your goals", text: "Choose what to learn, how you like to learn, and a teaching language that feels comfortable." },
  ];

  return (
    <SiteShell>
      <div className="editorial-page">
        <section className="editorial-heading">
          <span className="eyebrow"><span className="eyebrow-mark" />A platform for sharing what works</span>
          <h1>{copy("aboutPageTitle")}</h1>
          <p>{copy("aboutPageDescription")}</p>
        </section>
        <section className="editorial-values" aria-label="What matters to us">
          {values.map(({ icon: Icon, title, text }, index) => (
            <article className="editorial-value" key={title}>
              <span className="value-number">0{index + 1}</span>
              <span className="value-icon"><Icon size={21} /></span>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </section>
        <section className="about-steps">
          <div><span className="eyebrow"><span className="eyebrow-mark" />Learning, in good company</span><h2>{copy("howItWorksTitle")}</h2></div>
          <ol>
            {[copy("stepOne"), copy("stepTwo"), copy("stepThree")].map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}
          </ol>
        </section>
        <div className="editorial-cta"><span><Compass size={17} /> A good first step</span><Link to="/browse" search={{ q: "", skill: "All skills", language: "All languages", experience: "Any experience" }}>{copy("browseMentors")}<ArrowRight size={16} /></Link></div>
      </div>
    </SiteShell>
  );
}