import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, BadgeCheck, CalendarDays, Check, Clock3, Languages, MessageCircle, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/marketplace/language-context";
import { SiteShell } from "@/components/marketplace/site-shell";
import { getCopy } from "@/lib/localization";
import { currencies, findProfessional, FREE_MESSAGE_LIMIT } from "@/lib/marketplace";

export const Route = createFileRoute("/mentors/$mentor")({
  head: ({ params }) => {
    const professional = findProfessional(params.mentor);
    const title = professional ? `${professional.name} — Skills Exchange` : "Mentor profile — Skills Exchange";
    const description = professional
      ? `${professional.profession} mentor with ${professional.experience} years of experience. View skills, languages, and monthly learning plans.`
      : "Explore practical learning with Skills Exchange mentors.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: MentorProfilePage,
});

function MentorProfilePage() {
  const { mentor: slug } = Route.useParams();
  const professional = findProfessional(slug);
  const { language } = useLanguage();
  if (!professional) throw notFound();
  const copy = (key: Parameters<typeof getCopy>[1]) => getCopy(language, key);

  return (
    <SiteShell>
      <div className="profile-page">
        <Link to="/browse" search={{ q: "", skill: "All skills", language: "All languages", experience: "Any experience" }} className="back-link"><ArrowLeft size={15} />{copy("backToMentors")}</Link>
        <section className="profile-layout">
          <div className="profile-main">
            <div className="profile-identity">
              <div className="profile-portrait-wrap"><img src={professional.portrait} alt={`${professional.name}, ${professional.profession} mentor`} width={816} height={816} /><span className={`portrait-accent portrait-accent-${professional.accent}`} /></div>
              <div className="profile-name-block">
                <span className="mentor-badge profile-badge"><BadgeCheck size={14} />{copy("sampleLabel")}</span>
                <h1>{professional.name}</h1>
                <p>{professional.title}</p>
                <div className="profile-rating"><Star size={16} fill="currentColor" /><strong>{professional.rating.toFixed(2)}</strong><span>({professional.reviewCount} learner reviews)</span></div>
              </div>
            </div>
            <div className="profile-facts">
              <div><Clock3 size={17} /><span><strong>{professional.experience} {copy("yearsExperience")}</strong><small>Real-world experience</small></span></div>
              <div><Languages size={17} /><span><strong>{professional.languages.join(", ")}</strong><small>{copy("teachingLanguages")}</small></span></div>
              <div><CalendarDays size={17} /><span><strong>{professional.sessions} sessions</strong><small>{copy("sessionsPerMonth")}</small></span></div>
            </div>
            <section className="profile-about">
              <span className="eyebrow"><span className="eyebrow-mark" />{copy("aboutMentor")}</span>
              <p>{professional.bio}</p>
            </section>
            <section className="profile-skills">
              <span className="eyebrow"><span className="eyebrow-mark" />{copy("skills")}</span>
              <div className="profile-skill-list">{professional.skills.map((item) => <span key={item}><Check size={15} />{item}</span>)}</div>
            </section>
            <section className="profile-language-list">
              <span className="eyebrow"><span className="eyebrow-mark" />{copy("teachingLanguages")}</span>
              <div>{professional.languages.map((item) => <span key={item}>{item}</span>)}</div>
            </section>
          </div>
          <aside className="profile-plan">
            <div className="plan-topline"><span><CalendarDays size={15} />{copy("monthlyProgram")}</span><span className="plan-sample">EXAMPLE</span></div>
            <h2>{copy("planDescription")}</h2>
            <p>Clear goals, thoughtful practice, and a steady rhythm with {professional.name.split(" ")[0]}.</p>
            <div className="plan-price"><strong>₹{currencies.format(professional.monthlyFee)}</strong><span>{copy("perMonth")}</span></div>
            <div className="plan-inclusions"><span><Check size={15} />{professional.sessions} {copy("sessionsIncludedText")}</span><span><Check size={15} />Learn in {professional.languages[0]}</span></div>
            <Button className="plan-action" disabled><MessageCircle size={16} />{copy("sendMessage")}</Button>
            <div className="free-message-note"><span>{FREE_MESSAGE_LIMIT}</span><p><strong>{copy("freeMessages")}</strong><small>Messaging opens when accounts are available.</small></p></div>
            <span className="preview-disclaimer">Preview profile · Plans and prices are examples</span>
          </aside>
        </section>
      </div>
    </SiteShell>
  );
}