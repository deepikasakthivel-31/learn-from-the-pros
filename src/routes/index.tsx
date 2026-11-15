import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, BadgeCheck, Play, Sparkles, UsersRound } from "lucide-react";

import { MentorCard } from "@/components/marketplace/mentor-card";
import { useLanguage } from "@/components/marketplace/language-context";
import { SearchPanel } from "@/components/marketplace/search-panel";
import { SiteShell } from "@/components/marketplace/site-shell";
import { getCopy } from "@/lib/localization";
import { professionals } from "@/lib/marketplace";
import learningTogetherImage from "@/assets/learning-together.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skills Exchange — Learn from people who do the work" },
      { name: "description", content: "Find experienced mentors for practical, personal monthly learning." },
      { property: "og:title", content: "Skills Exchange — Learn from people who do the work" },
      { property: "og:description", content: "Find experienced mentors for practical, personal monthly learning." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { language } = useLanguage();
  const copy = (key: Parameters<typeof getCopy>[1]) => getCopy(language, key);

  return (
    <SiteShell>
      <section className="home-hero">
        <img className="home-hero-image" src={learningTogetherImage} alt="A mentor and learner working through a practical lesson together" width={1600} height={1008} fetchPriority="high" />
        <div className="home-hero-content">
          <span className="eyebrow hero-eyebrow"><Sparkles size={14} />{copy("heroKicker")}</span>
          <h1>{copy("heroTitle")}</h1>
          <p>{copy("heroDescription")}</p>
          <div className="hero-actions">
            <Link className="hero-primary" to="/browse" search={{ q: "", skill: "All skills", language: "All languages", experience: "Any experience" }}>{copy("browseMentors")}<ArrowRight size={17} /></Link>
            <Link className="hero-secondary" to="/about"><span className="hero-play"><Play size={12} fill="currentColor" /></span>{copy("howItWorks")}</Link>
          </div>
          <div className="hero-trust-row">
            <span className="avatar-stack" aria-hidden="true">
              {professionals.slice(0, 3).map((professional) => <img key={professional.slug} src={professional.portrait} alt="" width={38} height={38} />)}
            </span>
            <span><strong>Learn from experience.</strong><small>People, not another video course.</small></span>
            <span className="trust-divider" />
            <span className="trust-rating"><span>★★★★★</span><small>Mentor-led, goal-focused</small></span>
          </div>
        </div>
        <div className="hero-photo-caption"><span className="caption-dot" />LEARN BY DOING, TOGETHER</div>
        <div className="hero-stamp"><UsersRound size={19} /><span>Small steps.<br />Real progress.</span></div>
      </section>

      <section className="discovery-section" id="explore-skills">
        <div className="section-heading-row">
          <div>
            <span className="eyebrow"><span className="eyebrow-mark" />{copy("learnTogether")}</span>
            <h2>{copy("findMentor")}</h2>
          </div>
          <Link className="text-link" to="/browse" search={{ q: "", skill: "All skills", language: "All languages", experience: "Any experience" }}>{copy("browseMentors")}<ArrowUpRight size={16} /></Link>
        </div>
        <SearchPanel />
        <div className="featured-heading">
          <span><BadgeCheck size={16} /> A few people to start with</span>
          <span className="example-note">{copy("allProfilesExample")}</span>
        </div>
        <div className="mentor-grid">
          {professionals.slice(0, 3).map((professional) => <MentorCard key={professional.slug} professional={professional} featured />)}
        </div>
      </section>

      <section className="how-section">
        <div className="how-intro">
          <span className="eyebrow">A more human way to grow</span>
          <h2>{copy("howItWorksTitle")}</h2>
          <p>Good learning is a conversation that keeps moving forward.</p>
        </div>
        <div className="how-steps">
          {[copy("stepOne"), copy("stepTwo"), copy("stepThree")].map((step, index) => (
            <div className="how-step" key={step}>
              <span className="step-number">0{index + 1}</span>
              <div><h3>{step}</h3><span className="step-rule" /></div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}